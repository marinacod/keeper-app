import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreatePost(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((previousNote) => {
      return {
        ...previousNote,
        [name]: value,
      };
    });
  }

  function submitPost(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form>
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
            autocomplete="off"
          />
        )}

        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          rows={isExpanded ? 3 : 1}
          placeholder="Write a note..."
          value={note.content}
        />
        {isExpanded && (
          <div className="add-btn-div">
            <Zoom in={isExpanded}>
              <Fab
                size="small"
                sx={{
                  bgcolor: "#51c4d3",
                  color: "white",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
                  ":hover": {
                    bgcolor: "#d8e3e7",
                    color: "white",
                  },
                }}
                onClick={submitPost}
              >
                <AddIcon />
              </Fab>
            </Zoom>
          </div>
        )}
      </form>
    </div>
  );
}

export default CreatePost;
