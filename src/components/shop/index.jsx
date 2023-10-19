import React, { useState, useRef } from "react";

function Shop() {
  const [shopName, setShopName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const fileInputRef = useRef(null);

  const handleShopSubmit = (e) => {
    e.preventDefault();

    console.log("Shop Name:", shopName);
    if (photo) {
      console.log("Photo Name:", photo.name);
    } else {
      console.log("Photo: No photo selected");
    }
    console.log("Description:", description);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
    }
  };

  const handleCancel = () => {
    setShopName("");
    setDescription("");
    setPhoto(null);
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <h2>New Shop</h2>

      <form onSubmit={handleShopSubmit}>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handlePhotoUpload}
          style={{ display: "none" }}
        />

        <button type="button" onClick={triggerFileInput}>
          Upload Photo
        </button>
        {/* Display photo name if photo is selected */}
        {photo && <p>Selected Photo: {photo.name}</p>}

        <input
          type="text"
          placeholder="Shop Name"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
        <button type="button" onClick={handleCancel}>
          CANCEL
        </button>
      </form>
    </div>
  );
}

export default Shop;
