/**
 * The Sea.js plugin to provide log function
 */
var data = seajs.data


// The safe wrapper for `console.xxx` functions
// log("message") ==> console.log("message")
// log("message", "warn") ==> console.warn("message")
// seajs.log = function(msg, type) {

//   window.console &&
//     // Do NOT print `log(msg)` in non-debug mode
//       (type || data.debug) &&
//     // Set the default value of type
//       (console[type || (type = "log")]) &&
//     // Call native method of console
//   console[type](msg)
// }
if(window.console&&data.debug){
  function(msg, type) {
    // Do NOT print `log(msg)` in non-debug mode
    // Set the default value of type
      (console[type || (type = "log")]) &&
    // Call native method of console
  console[type](msg)
  }
}else{
  function(msg, type) {
  window.console &&
    // Do NOT print `log(msg)` in non-debug mode
      type &&
    // Set the default value of type
      (console[type = "log"]) &&
    // Call native method of console
  console[type](msg)
 }
}
