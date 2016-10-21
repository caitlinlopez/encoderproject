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

var decoder = {
  65 : "z",
  66 : "y",
  67 : "x",
  68 : "w",
  69 : "v",
  70 : "u",
  71 : "t",
  72 : "s",
  73 : "r",
  74 : "q",
  75 : "p",
  76 : "o",
  77 : "n",
  78 : "m",
  79 : "l",
  80 : "k",
  81 : "j",
  82 : "i",
  83 : "h",
  84 : "g",
  85 : "f",
  86 : "e",
  87 : "d",
  88 : "c",
  89 : "b",
  90 : "a"
}

//changing which radio button is checked
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


$("#translationInputText").keydown(function(e) {
  var userKey = e.keyCode;

  //backspace
  if (userKey == 8) {
      translationArea.textContent = translationArea.textContent.substr(0, translationArea.textContent.length - 1);
  }
  //decoder
  else {
    $("#translationArea").append(decoder[userKey]);
  }
});

/*
decoder

$("#translationInputText").keydown(function(e) {
  if(e.keyCode == 13){

    var message = $(#translationInputText).val();
    var messageArray = message.split("");

    for (var i = o; i < messageArraylength; i++){
      var translateNumber = messageArray[i].charCodeAt(0)-32+1;
    }
  }
});

*/
