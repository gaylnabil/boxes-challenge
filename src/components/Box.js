import React from "react";
export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "#222" : "transparent",
    cursor: "pointer",
  };

  // const isToggleChanged = () => setOn( prevOn => !prevOn )
  return (
    <div style={styles} className="box" onClick={props.handleToggle}>
    </div>
  );
}
