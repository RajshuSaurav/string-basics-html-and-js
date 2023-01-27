function myfunction(){        
    var str = document.getElementById("string").value.toLowerCase();
    alert("sentence :"+ str);
    var letter = document.getElementById("letter").value.toLowerCase();
    alert(" letter : "+ letter);
    if(str.indexOf(letter) == -1) {
        alert("Letter does not exist in the string");
    }
    else {
        var afterLetter = str.substring(str.indexOf(letter)+1);
        alert("result :"+ afterLetter);
    }
}