import React, { useState, useRef } from "react";
import { Button, TextField, Typography, Paper, Box } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

function Shop() {
  const [shopName, setShopName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const fileInputRef = useRef(null);

  const handleShopSubmit = (e) => {
    e.preventDefault();
    console.log("Shop Name:", shopName);
    console.log("Description:", description);
    if (photo) {
      console.log("Photo Name:", photo.name);
    } else {
      console.log("Photo: No photo selected");
    }
    setShopName("");
    setDescription("");
    setPhoto(null);
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
    <Box
      component={Paper}
      p={3}
      style={{ maxWidth: "400px", margin: "20px auto" }}
    >
      <Typography variant="h5" mb={2}>
        New Shop
      </Typography>

      <form onSubmit={handleShopSubmit}>
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
            UPLOAD LOGO
          </Button>
          {photo && <Typography ml={2}>{photo.name}</Typography>}
        </Box>

        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Name"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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

export default Shop;
