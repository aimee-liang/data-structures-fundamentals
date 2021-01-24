class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    /* to push
    Function accepts a value
    Create a new node using the value passed to the function
    If there is no head property in the SLL, 
        set the head and tail to be the newly created node
        Otherwise, set the next property on the tail to be the new node, and the tail on the list to be the newly created node
    Increment length by 1
    Return linked list
    */
    push(value){
        let node = new Node(value)
        if (!this.head){
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        ++this.length
        return this
    }
}