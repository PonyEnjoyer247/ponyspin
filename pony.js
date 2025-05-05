let fluttershy = document.getElementById("fluttershy");
let shapeshifted = 0;

function shapeshift() {
  if(shapeshifted < 10) {
    if(shapeshifted % 2 > 0) {
      fluttershy.src = "Images/flutter.png";
    } else {
      fluttershy.src = "Images/shy.png";
    }
  } else {
    fluttershy.src = "Images/swag.png";
  }
  shapeshifted++;
}

fluttershy.addEventListener("click", shapeshift)