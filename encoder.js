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

var shift = {
  65 : "b",
  66 : "c",
  67 : "d",
  68 : "e",
  69 : "f",
  70 : "g",
  71 : "h",
  72 : "i",
  73 : "j",
  74 : "k",
  75 : "l",
  76 : "m",
  77 : "n",
  78 : "o",
  79 : "p",
  80 : "q",
  81 : "r",
  82 : "s",
  83 : "t",
  84 : "u",
  85 : "v",
  86 : "w",
  87 : "x",
  88 : "y",
  89 : "z",
  90 : "a"
}

var keyword = {
  65 : "p",
  66 : "e",
  67 : "a",
  68 : "c",
  69 : "h",
  70 : "b",
  71 : "d",
  72 : "f",
  73 : "g",
  74 : "i",
  75 : "j",
  76 : "k",
  77 : "l",
  78 : "m",
  79 : "n",
  80 : "o",
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
  66 : "a",
  67 : "b",
  68 : "c",
  69 : "d",
  70 : "e",
  71 : "f",
  72 : "g",
  73 : "h",
  74 : "i",
  75 : "j",
  76 : "k",
  77 : "l",
  78 : "m",
  79 : "n",
  80 : "o",
  81 : "p",
  82 : "q",
  83 : "r",
  84 : "s",
  85 : "t",
  86 : "u",
  87 : "v",
  88 : "w",
  89 : "x",
  90 : "y"
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
  else if ($("input:checked").val() == "echo") {
    $("#textArea").append(letters[userKey]);
  }
  //caesarCipher
  else if ($("input:checked").val() == "caesarCipher") {
    $("#textArea").append(shift[userKey]);
  }
  //heiroglyphics
  else if ($("input:checked").val() == "heiroglyphics") {
    if(userKey == 32){
      textArea.textContent += letters[32];
    }
    else {
      $("#textArea").append("<img src='images/heiroglyphics/" + letters[userKey] + ".gif'>");
    }
  }
  //keyword
  else if ($("input:checked").val() == "keyword") {
    $("#textArea").append(keyword[userKey]);
  }
  //runes
  else if ($("input:checked").val() == "runes") {
    if(userKey == 32){
      textArea.textContent += letters[32];
    }
    else {
      $("#textArea").append("<img src='images/runes/" + letters[userKey] + ".gif'>");
    }
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
