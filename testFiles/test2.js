var peekFunction = function () {
  console.log("hahads");
};

var testFunction = function () {
  test.anotherFunction();
};

var testFunction2 = function () {
  test.functionOnOneLine();
};

var testFunction3 = function () {
  test.functionBracketsOnOwnLine();
};

function functionOnOneLine() {
  console.log('test');
}

function functionDoesNotExist() {
  test.nonExistent();
}