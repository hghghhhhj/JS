var myTextareaElement = document.getElementById("myWordsToCount");
myTextareaElement.onkeyup = function () {
  var i = 0;
  var sum = 0;
  var myValue = document.getElementById("myWordsToCount").value;
  var res = myValue.split(" ");
  while (i < res.length) {
    if (res[i] != "") {
      sum = sum + 1;
    }
    i = i + 1;
  }
  document.getElementById("wordcount").innerHTML = sum;
  console.log(res, i, res.length);
};
