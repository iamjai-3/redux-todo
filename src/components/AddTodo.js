import { Button, Grid } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, createTodo, deleteTodo } from "../redux/Actions/Actions";
import "./AddTodo.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { v4 as uuidv4 } from "uuid";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";
import DoneIcon from "@material-ui/icons/Done";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

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
  container: {
    padding: 16,
  },
});

const AddTodo = () => {
  const classes = useStyles();
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [toggle, setToggle] = useState(false);
  let updatedData = {};

  const handleSubmit = () => {
    if (!toggle) {
      const newTodo = {
        title: title,
        id: uuidv4(),
        completed: true,
      };
      dispatch(createTodo(newTodo));
      setTitle("");
    } else {
      console.log(updatedData);
      // dispatch(updateTodo(updatedData));
      setToggle(false);
      // setTitle("");
    }
  };

  return (
    <>
      {/* ADD TODO */}

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
              onClick={handleSubmit}
            >
              {toggle ? "Edit" : "Add"}
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/*  TODO LIST */}

      <Container className={classes.container} maxWidth="md">
        {storeData.todos.length <= 0 ? (
          <Typography variant="h6" color="error">
            No Data to display
          </Typography>
        ) : (
          <List>
            {storeData.todos.map((item) => {
              return (
                <ListItem key={item.id} button>
                  <ListItemIcon>
                    {item.completed ? (
                      <CheckCircleIcon color="primary" />
                    ) : (
                      <AccessTimeIcon color="primary" />
                    )}
                  </ListItemIcon>

                  <ListItemText
                    primary={item.title}
                    color="black"
                    style={{
                      textDecoration: item.completed ? "line-through" : "none",
                    }}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="done"
                      onClick={() => dispatch(completeTodo(item.id))}
                    >
                      <DoneIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => dispatch(deleteTodo(item.id))}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        )}
      </Container>
    </>
  );
};

export default AddTodo;
