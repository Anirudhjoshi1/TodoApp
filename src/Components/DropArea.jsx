import React, { useState } from "react";
import "./DropArea.css";

const DropArea = ({onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      className={showDrop ? "drop_area" : "hide_drop"}
      onDragOver={e => e.preventDefault()}
      onDrop={()=>{
        onDrop()
        setShowDrop(false)
      }}
    >
      Drop Here
    </section>
  );
};

export default DropArea;
