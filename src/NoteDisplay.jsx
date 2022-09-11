import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const NoteDisplay = (props) => {
  const deletefunc = (event) => {
    //To delete element
    props.deleteitem(event.currentTarget.getAttribute("name"));
  };
  console.log(props.notearray);
  return (
    <Grid
      container
      spacing={3}
      sx={{ width: "90%", margin: "auto", marginTop: "5%" }}
    >
      {props.notearray.map((i, ind) => {
        console.log(i.title, ind);
        return (
          <Grid item lg={4} key={ind} sx={{ marginBottom: "5%" }}>
            <Paper
              elevation={6}
              sx={{
                width: "70%",
                backgroundColor: "white",
                padding: "1%",
                margin: "auto",
                border: "1px solid",
                borderColor: "yellow",
              }}
              name="Hello"
            >
              <Typography
                variant="h4"
                sx={{
                  textStyle: "bold",
                  fontWeight: "400",
                  marginbottom: "30%",
                  margin: "2%",
                }}
              >
                {i.title}
              </Typography>
              <Typography sx={{ margin: "5%" }}>{i.content}</Typography>
              <IconButton
                fontSize="large"
                sx={{}}
                onClick={deletefunc}
                name={ind}
              >
                <DeleteIcon
                  color="primary"
                  fontSize="medium"
                  sx={{ "&:hover": { color: "red" } }}
                />
              </IconButton>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default NoteDisplay;
