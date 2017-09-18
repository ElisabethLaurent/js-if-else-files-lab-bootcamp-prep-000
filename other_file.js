console.log(name)
var index = require("./index.js")

if (name === "Susan") {
    console.log("The name, Susan, is correct")
} else {
    console.log("Expected the name to be Susan, but received: "+index.name)
)}

if (height === "74") {
  console.log("Height is correct at 74.")
} else {
  console.log("Expected height to be 74, but received: "+index.height)
)}
