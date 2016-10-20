var textArea = document.getElementById('textArea');
var inputText = document.getElementById('inputText');

var letters = {
  65 : "a",
  66 : "b",
  67 : "c",
  68 : "d",
  69 : "e",
  70 : "f",
  71 : "g",
  72 : "h",
  73 : "i",
  74 : "j",
  75 : "k",
  76 : "l",
  77 : "m",
  78 : "n",
  79 : "o",
  80 : "p",
  81 : "q",
  82 : "r",
  83 : "s",
  84 : "t",
  85 : "u",
  86 : "v",
  87 : "w",
  88 : "x",
  89 : "y",
  90 : "z"
}

$("input[type='radio']").click(function(){
   $("input:checked").prop('checked', false);
   $(this).prop('checked', true);
   textArea.textContent = "";
});

$("#inputText").keydown(function(e) {
  var userKey = e.keyCode;

  //backspace
  if (userKey == 8) {
      textArea.textContent = textArea.textContent.substr(0, textArea.textContent.length - 1);
  }
  //echo
  else {
    $("#textArea").append(letters[userKey]);
  }
});
