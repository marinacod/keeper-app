import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <div className="delete-btn-div">
        <button className="delete-button" onClick={handleClick}>
          <DeleteIcon
            sx={{
              margin: 0,
              padding: 0,
              background: "none",
              color: "inherit",
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default Note;
