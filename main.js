var conectionTwo = document.getElementById("buttonTwo");
    conectionTwo.addEventListener("click", function(){
      var potTwo = document.getElementById("input").innerText;
      var potTwoTwo = parseFloat(potTwo)
      var totalTwo = potTwoTwo + 1;
      document.getElementById("input").innerText = totalTwo;
      var conectionTwoTwo = document.getElementById("price").innerText;
      var potTwoTwoTwo = parseFloat(conectionTwoTwo);
      if(potTwoTwoTwo == 0){
      var twoPotTwoTwoTwo = potTwoTwoTwo + 1219
      var resultTwo = twoPotTwoTwoTwo * totalTwo;
      document.getElementById("price").innerText = resultTwo;}
      if(potTwoTwoTwo > 0){
      var antwoPotTwoTwoTwo = totalTwo * 1219;
      document.getElementById("price").innerText = antwoPotTwoTwoTwo;}})
    
  var conectionOne = document.getElementById("buttonOne");
    conectionOne.addEventListener("click", function(){
      var potOne = document.getElementById("input").innerText;
      var potOneOne = parseFloat(potOne)
      var totalOne = potOneOne - 1;
      document.getElementById("input").innerText = totalOne;
      var conectionOneOne = document.getElementById("price").innerText;
      var potOneOneOne = parseFloat(conectionOneOne);
      var resultone = potOneOneOne - 1219;
      document.getElementById("price").innerText = resultone;})


    var ndconectionTwo = document.getElementById("buttonFour");
    ndconectionTwo.addEventListener("click", function(){
      var ndpotTwo = document.getElementById("inputTwo").innerText;
      var ndpotTwoTwo = parseFloat(ndpotTwo)
      var ndtotalTwo = ndpotTwoTwo + 1;
      document.getElementById("inputTwo").innerText = ndtotalTwo;
      var ndconectionTwoTwo = document.getElementById("priceTwo").innerText;
      var ndpotTwoTwoTwo = parseFloat(ndconectionTwoTwo);
      if(ndpotTwoTwoTwo == 0){
      var ndtwoPotTwoTwoTwo = ndpotTwoTwoTwo + 59
      var ndresultTwo = ndtwoPotTwoTwoTwo * ndtotalTwo;
      document.getElementById("priceTwo").innerText = ndresultTwo;}
      if(ndpotTwoTwoTwo > 0){
      var ndantwoPotTwoTwoTwo = ndtotalTwo * 59;
      document.getElementById("priceTwo").innerText = ndantwoPotTwoTwoTwo;}})


    var rdconectionOne = document.getElementById("buttonThree");
    rdconectionOne.addEventListener("click", function(){
      var rdpotOne = document.getElementById("inputTwo").innerText;
      var rdpotOneOne = parseFloat(rdpotOne)
      var rdtotalOne = rdpotOneOne - 1;
      document.getElementById("inputTwo").innerText = rdtotalOne;
      var rdconectionOneOne = document.getElementById("priceTwo").innerText;
      var rdpotOneOneOne = parseFloat(rdconectionOneOne);
      var rdresultone = rdpotOneOneOne - 59;
      document.getElementById("priceTwo").innerText = rdresultone;})


 

 var clickOne = document.getElementById("buttonOne");
    clickOne.addEventListener("click", function(){var priceOne = document.getElementById("price").innerText
        var priceOneOne = parseFloat(priceOne)
        
        var priceTwo = document.getElementById("priceTwo").innerText
        var priceTwoTwo = parseFloat(priceTwo)
        
        var mainPrice = priceOneOne + priceTwoTwo;
       
        document.getElementById("mainPrice").innerText = mainPrice;
       
        document.getElementById("totalPrice").innerText = mainPrice;})

var clickTwo = document.getElementById("buttonTwo");
    clickTwo.addEventListener("click", function(){var priceOne = document.getElementById("price").innerText
        var priceOneOne = parseFloat(priceOne)
            
        var priceTwo = document.getElementById("priceTwo").innerText
        var priceTwoTwo = parseFloat(priceTwo)
            
        var mainPrice = priceOneOne + priceTwoTwo;
           
        document.getElementById("mainPrice").innerText = mainPrice;
           
        document.getElementById("totalPrice").innerText = mainPrice;})


var clickThree = document.getElementById("buttonThree");
    clickThree.addEventListener("click", function(){var priceOne = document.getElementById("price").innerText
        var priceOneOne = parseFloat(priceOne)
                
        var priceTwo = document.getElementById("priceTwo").innerText
        var priceTwoTwo = parseFloat(priceTwo)
                
        var mainPrice = priceOneOne + priceTwoTwo;
               
        document.getElementById("mainPrice").innerText = mainPrice;
               
        document.getElementById("totalPrice").innerText = mainPrice;})


var clickFour = document.getElementById("buttonFour");
    clickFour.addEventListener("click", function(){var priceOne = document.getElementById("price").innerText
        var priceOneOne = parseFloat(priceOne)
                
        var priceTwo = document.getElementById("priceTwo").innerText
        var priceTwoTwo = parseFloat(priceTwo)
                
        var mainPrice = priceOneOne + priceTwoTwo;
               
        document.getElementById("mainPrice").innerText = mainPrice;
               
        document.getElementById("totalPrice").innerText = mainPrice;})
     
 
    

