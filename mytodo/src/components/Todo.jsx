import React, { useState } from "react";
import { TextField, Button, Alert, AlertTitle } from "@mui/material";
import TodoItems from "./TodoItems";

let flag = false;
function Todo() {
  const [mytodo, setmytodo] = useState("");
  const [itemsList, setItems] = useState([]);

  const addMyToDo = () => {
    if (!mytodo) {
      flag = true;
      alert("Please Enter Something");
    } else {
      setItems((v) => [...v, { title: mytodo, stat: "Todo", checked: false }]);
      setmytodo("");
    }
  };

  console.log("Item list: ", itemsList);
  const callBack = (index) => {
    setItems(() => itemsList.filter((data, idx) => idx !== index));
  };
  const changeStatus = (index, e) => {
    let tempItems = [...itemsList];
    tempItems[index].checked = e.target.checked;
    if (e.target.checked) {
      tempItems[index].stat = "Completed";
    } else {
      tempItems[index].stat = "Todo";
    }

    setItems(tempItems);
  };
  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      addMyToDo();
    }
  };
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Todo App
      </h1>
      <TextField
        value={mytodo}
        onChange={(e) => setmytodo(e.target.value)}
        style={{ marginRight: "1em", marginBottom: "1em" }}
        size="small"
        id="mytodo"
        label="ToDos"
        variant="outlined"
      />
      <Button
        onClick={addMyToDo}
        style={{ marginTop: "3px" }}
        size="small"
        variant="contained"
      >
        Add ToDo
      </Button>
      {itemsList && (
        <TodoItems
          items={itemsList}
          mycallback={callBack}
          handleCheck={changeStatus}
        />
      )}
    </div>
  );
}
export default Todo;
