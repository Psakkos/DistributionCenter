const Stack = function(){
    let list = [];
    let size = 0;

    function push(item){
        list[size] = item;
        size++;
    }
    function pop(){
        if(isEmpty()){
            return undefined;
        }
        let item = list[size-1];
        list[size-1] = undefined;
        size--;
        return item;
    }
    function getSize(){
        return size;
    }
    function isEmpty(){
        if(size == 0){
            return true;
        }
        return false;
    }
    function print(){
        if(!isEmpty()){
            for(let a=size-1;a>=0;a--){console.log(list[a]);}
        }
        else {
            console.log("empty stack");
        }
    }

    return {push,pop,getSize,isEmpty,print};

};
module.exports = Stack;
