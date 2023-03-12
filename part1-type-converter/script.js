function convertValue(input) {
  console.log("Value to be converted", input);
  convertToNumber = Number(input);
  convertToString = String(input);
  convertToBoolean = Boolean(input);

  console.log(
    "Convert to number: ",
    convertToNumber,
    "Data Type: ",
    typeof convertToNumber
  );
  console.log(
    "Convert to string: ",
    convertToString,
    "Data Type: ",
    typeof convertToString
  );
  console.log(
    "Convert to boolean: ",
    convertToBoolean,
    "Data Type: ",
    typeof convertToBoolean
  );
  console.log("----------------------------------------------------------");
}

convertValue(false);
convertValue(true);
convertValue(0);
convertValue(1);
convertValue("0");
convertValue("000");
convertValue("1");
convertValue(NaN);
convertValue(Infinity);
convertValue(-Infinity);
convertValue("");
convertValue("20");
convertValue("Twenty");
convertValue(null);
convertValue(undefined);
