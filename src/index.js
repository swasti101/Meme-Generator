import React from "react";
import "./styles.css";
import { createRoot } from "react-dom/client";
import App from "./app";

const root = createRoot(document.getElementById("root"));
root.render(<App darkMode={false} />);

/*challenge

// function greeting(name) {
//   var d = new Date(2024, 5, 5, 3, 43, 5);
//   var hrs = d.getHours();
//   let timeOfDay;
//   if (hrs >= 4 && hrs < 12) {
//     timeOfDay = "morning";
//   } else if (hrs >= 12 && hrs < 17) {
//     timeOfDay = "afternoon";
//   } else if (hrs >= 17 && hrs < 20) {
//     timeOfDay = "evening";
//   } else {
//     timeOfDay = "night";
//   }
//   console.log(`Good ${timeOfDay} ${name}`);
// }
// greeting("Bob");*/
