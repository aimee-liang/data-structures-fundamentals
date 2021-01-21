class Node{
    constructor (value){
        this.value = value
        this.next = null
    }
}

/* initialize a new Queue where there is no first or last index, and there are no elements */
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}