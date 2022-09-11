import Box from "@mui/material/Box";
import React from "react";
import NotesIcon from "@mui/icons-material/Notes";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "orange",
        Color: "Black",
        padding: "0.5%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <NotesIcon fontSize="large" sx={{ color: "white", fontSize: "42px" }} />
      &nbsp;&nbsp;
      <h1>Atrangi Notes</h1>
    </Box>
  );
};
export default Header;
