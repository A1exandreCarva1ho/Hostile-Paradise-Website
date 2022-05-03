window.onload = function(){

  var a = "Hostile_Paradise_Images/hp";
  var b = 2;
  var c = ".png ";


  document.getElementById("b1").onclick = function() {myFunction(-1)};
  document.getElementById("b2").onclick = function() {myFunction(1)};

  function myFunction(x) {
    b = b + x;

    if (b==0){
      b = 6;
    }

    if (b == 7){
      b = 1
    }
    
    document.getElementById("imagens").src= a + b + c;
  }
}
