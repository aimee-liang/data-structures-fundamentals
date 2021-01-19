class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(value){
        this.value = value;
        this.next = null;
    }
    /* 
    to push: create a new node with the value passed into the function. 
        If the head property is null, set the head and tail to be the new node
        If not, set the next property on the tail to be the next node
        
    */
}