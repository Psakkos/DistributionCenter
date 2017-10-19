const LinkedList = require('./linkedlist.js')
const Truck= function(){
  let type= size;
  let inventory= new linkedlist();
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
function spaceEfficiency(){
  let sum=0;
  let len=inventory.length;
  for(let x=0; x<len; x++){
    let node=inventory.getNode(x);
    sum+= node.getValue().space;
  }
  return sum/ capacity;
}
