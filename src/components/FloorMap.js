import React from "react";
import fifthFloor from "../img/sundt-etasje-5.png";

export function FloorMap(props) {
  let visible = props.showMap;
  const style = {
    map: {
        paddingTop: "1.5em",
      width: "100%",
      cursor: "pointer"
    }
  };
  return (
    <div>
      <img
        src={fifthFloor}
        style={style.map}
        title="click to close"
        alt=""
        onClick={() => props.setShowMap(!visible)}
      />
    </div>
  );
}
