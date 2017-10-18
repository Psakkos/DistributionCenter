const LinkedList = require('./LinkedList.js')
const Truck= function(){
  let type= size;
  let inventory= new LinkedList();
  let capacity= setCapacity(size);
  let spaceEfficiency= makeSE;
}

function setCapacity(size){
  size= type.toLowerCase();
  if(size=="small"){
    return 1000;
  }
  if(size=="medium"){
    return 2000;
  }
  if(size== "large"){
    return 5000;
  }
  else{
    console.log "What is the truck size, bud?"
  }
}
