import React from "react";
import CharlyPic from "../images/charly_pic.png";

const CharlyPicture = () => {
  return (
    <img
      src={CharlyPic}
      alt="Charly"
      style={{
        width: "100%",
        maxWidth: 300,
        height: "auto",
        objectFit: "cover",
      }}
    />
  );
};

export default CharlyPicture;
