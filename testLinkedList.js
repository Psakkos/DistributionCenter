const Node = require('./LinkedList.js');
const Linkedlist = require('./node.js');

function main(){
  let A = new Node("a");
  let B = new Node("b");
  let C = new Node("c");
  let link = new LinkedList();

  link.add(A);
  link.add(B);
  link.add(C);
  console.log(link.getNext().getValue());;
  console.log(link.getNext().getNext().getValue());;
}
main();
