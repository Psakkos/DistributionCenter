const Product= function(){
  let name= makeName;
  let price= setNumber;
  let space= setNumber;
  let prime= primePrime;
}
function makeName (){
  for (x=0, x<6, x++){
    let c= Math.floor(25*Math.random())+65;
    String.fromCharcode(c);
    word += letter;
  }
  return word;
}

function setNumber (){
  let a= Math.round(10000*Math.random())/100
  return a;
}
function primePrime(){
  let state= 100*Math.random;
  if(state>50){
    primePrime= true;
  }
  else{
    primePrime= false;
    }
  return primePrime;
}
