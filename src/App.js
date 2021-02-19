import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    height: "100%",
  },
});
function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
