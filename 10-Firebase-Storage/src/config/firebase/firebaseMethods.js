import app from "./firebaseConfig";
import {
    addDoc,
    collection,
    getDocs,
    getFirestore,
    query,
    where
} from "firebase/firestore";

import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
} from "firebase/storage";

const db = getFirestore(app);
const storage = getStorage(app);

// For Uploading Image

const uploadImage = async (file, email) => {
    try {
        const storageRef = ref(storage, `profileImages/${email}_${Date.now()}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        throw new Error("Failed to upload image: " + error.message);
    }
};

// For Send Data In DB
const sendData = async (obj, colName) => {
    try {
        const docRef = await addDoc(collection(db, colName), obj);
        return docRef.id;  // Return document ID on successful add
    } catch (err) {
        throw new Error(`Error adding document: ${err.message}`);
    }
};

// For Get All Data From The Collection
const getAllData = async (colName) => {
    try {
        const dataArr = [];
        const querySnapshot = await getDocs(collection(db, colName));
        querySnapshot.forEach((doc) => {
            const obj = { ...doc.data(), documentId: doc.id };
            dataArr.push(obj);
        });
        // Return array after processing all documents
        return dataArr;
    } catch (err) {
        throw new Error(`Error fetching documents: ${err.message}`);
    }
};


export { uploadImage, sendData, getAllData };