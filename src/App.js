/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { motion } from "framer-motion";

function App() {
  const [box, setBox] = React.useState("active");
  const variants = {
    active: {
      backgroundColor: "#9c27b0"
    },
    inactive: {
      backgroundColor: "#e91e63"
    }
  };

  function onChange() {
    box === "active" ? setBox("inactive") : setBox("active");
  }

  return (
    <>
      <motion.div
        variants={variants}
        animate={box}
        css={{
          width: 100,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white"
        }}
      >
        Hello
      </motion.div>
      <button onClick={onChange}>Change</button>
    </>
  );
}

export default App;
