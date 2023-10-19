import React, { useState, useRef } from "react";
import { Button, TextField, Typography, Paper, Box } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

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
    console.log("Description:", description);
    if (photo) {
      console.log("Photo Name:", photo.name);
    } else {
      console.log("Photo: No photo selected");
    }
    console.log("Quantity:", quantity);
    console.log("Price:", price);
    setProductName("");
    setDescription("");
    setPhoto(null);
    setQuantity("");
    setPrice("");
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
    setQuantity("");
    setPrice("");
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <Box
      component={Paper}
      p={3}
      mt={2}
      style={{ maxWidth: "400px", margin: "20px auto" }}
    >
      <Typography variant="h5" mb={2}>
        New Product
      </Typography>

      <form onSubmit={handleProductSubmit}>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handlePhotoUpload}
          style={{ display: "none" }}
        />

        <Box display="flex" alignItems="center" mb={2}>
          <Button
            variant="outlined"
            startIcon={<PhotoCameraIcon />}
            component="label"
            onClick={triggerFileInput}
          >
            Upload Photo
          </Button>
          {photo && <Typography ml={2}>{photo.name}</Typography>}
        </Box>

        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          type="number"
          label="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          type="number"
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Box mt={2} display="flex" justifyContent="space-between">
          <Button variant="outlined" type="submit">
            SUBMIT
          </Button>
          <Button variant="outlined" onClick={handleCancel}>
            CANCEL
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default Product;
