import React, { useState, useRef } from "react";

function Product() {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [quantity, setQuantity] = useState(""); // State for quantity
  const [price, setPrice] = useState(""); // State for price

  const fileInputRef = useRef(null);

  const handleProductSubmit = (e) => {
    e.preventDefault();

    console.log("Product Name:", productName);
    if (photo) {
      console.log("Photo Name:", photo.name);
    } else {
      console.log("Photo: No photo selected");
    }
    console.log("Description:", description);
    console.log("Quantity:", quantity);
    console.log("Price:", price);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
    }
  };

  const handleCancel = () => {
    setProductName("");
    setDescription("");
    setPhoto(null);
    setQuantity(""); // Reset quantity
    setPrice(""); // Reset price
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <h2>New Product</h2>

      <form onSubmit={handleProductSubmit}>
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
        {photo && <p>Selected Photo: {photo.name}</p>}

        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
        <button type="button" onClick={handleCancel}>
          CANCEL
        </button>
      </form>
    </div>
  );
}

export default Product;
