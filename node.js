const Node = function(val){
    let value = val;
    let next = null;

    function getValue(){
        return value;
    }
    function getNext(){
        return next;
    }
    function setValue(v){
        value = v;
    }
    function setNext(n){
        next = n;
    }

    return{getValue,getNext,setValue,setNext};
};
module.exports = Node;
