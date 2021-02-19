import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, deleteTodo } from "../redux/Actions/Actions";
import "./AddTodo.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles({
  root: {
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
  },
  button: {
    marginTop: 16,
  },
});

const AddTodo = () => {
  const classes = useStyles();

  //   const storeData = useSelector((state) => state);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleClick = () => {
    const newTodo = {
      title: title,
      id: uuidv4(),
      completed: false,
    };
    dispatch(createTodo(newTodo));
  };
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid container alignItems="center">
        <Grid item md={12}>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            // error={!!error}
            // helperText={error}
            id="outlined-basic"
            fullWidth
            label="Enter Title"
            multiline
            variant="outlined"
          />
        </Grid>
        <Grid item md={12}>
          <Button
            type="submit"
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            {/* {edit ? "Edit" : "Add"} */}
            ADD
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddTodo;
