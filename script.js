//Temp Converter Function Lab 6

var type = "";
var cTemp = 0;
var fTemp = 0;

function convertTemp(temp, type) {
  if (type === "C") { //convert to celcius
     cTemp = (temp - 32) / 1.8;
    console.log(cTemp);
  } else { //convert to fahrenheit
    fTemp = temp * 1.8  + 32;
    console.log(fTemp);
  }
}

convertTemp(212, "C");
convertTemp(32, "C");
convertTemp(65, "C");
convertTemp(100, "F");
convertTemp(-40, "F");
