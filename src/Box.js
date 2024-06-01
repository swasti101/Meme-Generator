import React from "react";
export default function Box(props) {
  //derived state approach!
  //   const [on, setOn] = React.useState(props.on);

  //   function toggleOn() {
  //     setOn((prevState) => !prevState);
  //   }

  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };
  return (
    <div
      style={styles}
      className="box"
      key={props.id}
      id={props.id}
      onClick={() => props.toggle(props.id)}
    ></div>
  );
}
