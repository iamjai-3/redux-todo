import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, setTitle, updateTodo } from "../redux/Actions/Actions";

const useStyles = makeStyles({
  container: {
    padding: 16,
  },
});

const TodoList = () => {
  const classes = useStyles();
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleUpdate = (item) => {
    const updatedData = {
      title: item.title,
    };
    // dispatch(setTitle(item.title));
    // dispatch(updateTodo(item.id));
  };

  return (
    <Container className={classes.container} maxWidth="md">
      {!storeData.todos.length ? (
        <Typography variant="h6" color="error">
          No Data to display
        </Typography>
      ) : (
        <List>
          {storeData.todos.map((item) => {
            return (
              <ListItem key={item.id} button>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>

                <ListItemText primary={item.title} color="black" />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={handleUpdate(item)}
                  >
                    <EditIcon />
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
  );
};

export default TodoList;
