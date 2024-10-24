import { useEffect, useRef, useState } from "react";
import { uploadImage, sendData, getAllData } from "./config/firebase/firebaseMethods";

export default function App() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const getImageFromDb = async () => {
      try {
        const img = await getAllData("images");
        setImage(img);
        console.log(img);
      } catch (error) {
        throw new Error(error)
      }
    }
    getImageFromDb();
  }, [])

  const getImage = useRef(null);

  const handleImageUpload = async () => {
    try {
      const file = getImage.current.files[0];
      if (!file) {
        alert("Please select an image to upload.");
        return;
      }
      const email = "user@example.com";
      const imageUrl = await uploadImage(file, email);

      const data = {
        imageUrl,
        uploadedAt: new Date().toISOString(),
      };
      await sendData(data, "images");
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    }
  };

  return (
    <>
      <h1 className="heading">Getting Image From Database</h1>

      <div className="file">
        <input type="file" ref={getImage} />
        <button onClick={handleImageUpload}>Add Image In Database</button>
      </div>
      <div className="img">
        {image.length > 0 ? image.map((item, index) => {
          return <img src={item.imageUrl} alt="Image" key={index} />
        }) : <h1>No Image Found</h1>}
      </div>
    </>
  );
}
