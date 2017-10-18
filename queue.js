const Queue = function(){
    let list = [];
    let size = 0;

    function enqueue(item){
        let last = size;
        list[last] = item;
        size++;
    }
    function dequeue(){
        if(isEmpty()){
            return undefined;
        }
        var q = list[0];
        for(let i=0;i<size;i++){
            list[i] =list[i+1];
        }
        size--;
        return q;
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
            for(let a=0;a<size;a++){console.log(list[a]);}
        }
        else {
            console.log("empty queue");
        }
    }

    return {enqueue,dequeue,isEmpty,getSize,print};
};
module.exports = Queue;
