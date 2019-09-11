var input = document.querySelector(".colorvalue");
var redVal = document.querySelector(".r");
var greenVal = document.querySelector(".g");
var blueVal = document.querySelector(".b");

input.addEventListener("keyup", () => {
  redVal.innerHTML = "";
  var v = input.value;

  var rex = /#([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})/i;

  if (v.length === 4 || v.length === 7) {
    var output = rex.exec(v);
    if (output === null) {
      redVal.innerHTML = "Not A Valid Color";
    } else {
      redVal.innerHTML = `RGBA: ${getColorValue(output[1])}, ${getColorValue(output[2])}, ${getColorValue(output[3])}, 1`;
      
      document.body.style.backgroundColor = v;
    }
  } else {
    redVal.innerHTML = "Not A Valid Color";
  }
});

function getColorValue(hex) {
  if (hex.length === 1) {
    hex = hex + hex;
  }
  return parseInt(hex, 16);
}
