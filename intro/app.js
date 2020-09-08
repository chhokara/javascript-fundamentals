let status = "offline";

// if status equals online then we set color to green, else we set it to red
let color = status === "online" ? "green" : "red";
console.log(color);

let emoji = "heart";
switch (emoji) {
  case "sad face":
  case "happy face":
    console.log("yellow");
    break;
  case "eggplant":
    console.log("purple");
  case "heart":
  case "lips":
    console.log("red");
  default:
    console.log("sorry, not a valid entry");
}
