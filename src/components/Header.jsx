import React from "react";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

function Header() {
  return (
    <header>
      <h1>
        <BookmarksIcon sx={{ fontSize: "1.5rem", marginRight: " 0.1em" }} />
        Keeper.
      </h1>
    </header>
  );
}

export default Header;
