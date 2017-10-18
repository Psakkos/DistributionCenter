const Node = require('./node.js');

const LinkedList = function(){
  let root = new Node(udefined);
  let length = 0;
  let here = root;
  let lastnode = root;

  function getNext(){
    return here.getNext();
  }

function has(node){
  let start = root;
  for(let x = 0;x<length;x++){
    if(start.getValue() == node.getValue()){
      return true;
    }
    else{
      start = start.getNext();
    }
  }
  return false;
}

function add(node){
  lastnode.setNext(node);
  lastnode = node;
}

function addIn(node,here){
  let next = new Node(undefined);
  let val = (here.getNext()).getValue();
  let nextval = (here.getNext()).getNext();
  next.setValue(val);
  next.setNext(nextval);
  here.setNext(node);
  node.setNext(next);
  length++;
}

function remove(node){
  let temp = new Node(undefined);
  let start = root;
  let last;
  while(start.getValue() != node.getValue()){
    last = start;
    start = start.getNext();
  }
  temp.setValue(start.getNext().getValue());
  temp.setNext(start.getNext().getNext());

  last.setNext(temp);
}

return {getNext,length,has,add,addIn,remove}
}

module.exports
