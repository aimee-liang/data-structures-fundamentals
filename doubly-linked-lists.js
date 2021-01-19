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
        Set the previous property on the newly created node to be tail
        Set the tail to be the newly created node
        Increment length
        Return the Doubly Linked List
    */
    push(value){
        let node = new Node (value);
        if (!this.head){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    /*
    to unshift, create a new node with value passed into function
        if length === 0, set the head and tail to be the new node
        if length > 0, set the head.prev property to be new node && new node.next to be head
        update head to be new node
        increment length
        return DLL
    */
    unshift(value){
        let node = new Node(value);
        if (this.length === 0){
            this.head = node;
            this.tail = node;
        } else if (this.length > 0){
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }
    /*
    If length is 0, return undefined
    
    If length is one, 
    Set head and tail to be null
    
    Store the old head property in a variable
    Update head to be the next of the old head
    Set the head’s previous property to be null
    Set the old head’s next to be null
    Decrement the length
    Return old head
    */
    shift(){
        if (this.length === 0) return undefined;
        const previousHead = this.head;
        this.head = previousHead.next;
        previousHead.prev = null;
        previousHead.next = null;
        this.length--;

        if (this.length === 1){
            this.tail === null;
            this.head === null;
        }
        return previousHead
    }
}