import React, { useState } from "react";
import {
  ListItemText,
  ListItem,
  IconButton,
  ListItemIcon,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { Checkbox } from "@mui/material";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import "./index.css";
import { display } from "@mui/system";

function TodoItems(props) {
  const { items, mycallback, handleCheck } = props;
  // const changeStyle = () => {
  //   if (checked) {
  //     setStyle("line-through");
  //     checked = false;
  //   } else {
  //     setStyle("none");
  //     checked = true;
  //   }
  // };
  return (
    items &&
    items.map((item, index) => {
      return (
        <ListItem
          className="mystyle"
          style={
            item.checked
              ? {
                  backgroundColor: "white",
                }
              : { backgroundColor: "white" }
          }
          secondaryAction={
            <Tooltip title="Delete">
              <IconButton
                value="delete"
                onClick={() => {
                  mycallback(index);
                }}
                edge="end"
                aria-label="delete"
                size="small"
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          }
        >
          <Tooltip
            title={item.checked ? "Mark as uncomplete" : "Mark as Complete"}
          >
            <Checkbox
              className="checbox"
              checked={item.checked}
              onChange={(e) => handleCheck(index, e)}
              variant="contained"
            >
              Success
            </Checkbox>
          </Tooltip>
          <ListItemText
            primary={item.title}
            secondary={
              <Typography
                // component="text
                color={item.checked ? "#4caf50" : "#ef5350"}
                variant="subtitle1"
                style={{
                  fontWeight: "600",
                  fontSize: "8px",
                  marginTop: "0px",
                  textDecoration: "plane",
                }}
              >
                <span
                  className="status"
                  style={{
                    color: "grey",
                    fontWeight: "bold",
                    fontSize: "6px",
                    fontFamily: "Roboto, Helvetica,Arial,sans-serif",
                    marginRight: "5px",
                  }}
                >
                  Status
                </span>
                <span className="status">{item.stat}</span>
              </Typography>
            }
          />
        </ListItem>
      );
    })
  );
}
export default TodoItems;
