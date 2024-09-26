import app from "./firebaseConfig.js";

// Firebase Authentication
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

// Initialize Firebase Authentication
const auth = getAuth(app);

// Firestore Database
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
    query,
    where,
} from "firebase/firestore";

// Initialize Firestore database
const db = getFirestore(app);


// Sign up user function
let signUpUser = async (obj) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, obj.email, obj.password);

        // Assign user ID to obj.id and remove password before adding to database
        obj.id = res.user.uid;
        delete obj.password;

        // Add user to Firestore database
        await addDoc(collection(db, "users"), obj);
        console.log("User added to database successfully");
        return obj.id;
    } catch (err) {
        console.error("Error signing up:", err);
        throw err.message; // Return error message
    }
};

// Login user function
let loginUser = async (obj) => {
    try {
        // Authenticate user
        await signInWithEmailAndPassword(auth, obj.email, obj.password);
    } catch (err) {
        console.error("Error logging in:", err);
        throw err.message;
    }
};

// Sign out user function
const signOutUser = async () => {
    try {
        await signOut(auth);
        console.log("User signed out successfully");
        return "User signed out successfully";
    } catch (error) {
        console.error("Error signing out:", error);
        throw error.message;
    }
};


// Send data to Firestore
const sendData = async (obj, colName) => {
    try {
        const docRef = await addDoc(collection(db, colName), obj);
        return docRef.id;  // Return document ID on successful add
    } catch (err) {
        throw new Error(`Error adding document: ${err.message}`);
    }
};

// Get all data from a Firestore collection
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

// Delete a document by id from a Firestore collection
const deleteDocument = async (id, collectionName) => {
    try {
        await deleteDoc(doc(db, collectionName, id));
        // Resolve only after delete is complete
        return "Document deleted successfully";
    } catch (err) {
        throw new Error(`Error deleting document: ${err.message}`);
    }
};

// Update a document by id in a Firestore collection
const updateDocument = async (id, obj, collectionName) => {
    try {
        const documentRef = doc(db, collectionName, id);
        await updateDoc(documentRef, obj);  // Await the update operation
        return "Document updated successfully";
    } catch (err) {
        throw new Error(`Error updating document: ${err.message}`);
    }
};

export { db, sendData, getAllData, deleteDocument, updateDocument, signUpUser, signOutUser, loginUser };
