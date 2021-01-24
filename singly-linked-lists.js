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
    /* to pop
    If no nodes, return undefined
    Loop through the list until you reach the tail
    Set the next property of the 2nd to last node to be null
    Set tail to be 2nd to last node
    Decrement length by 1
    Return value of node removed
    */
    pop(){
        if (!this.head) return undefined
        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }
    /* to shift
    If no nodes, return undefined
    Store the current head property in a variable
    Set head property to be current head’s next property
    Decrement length by 1
    Return value of removed node
    */
    shift(){
        if (!this.head) return undefined
        let current = this.head
        this.head = current.next
        this.length--
        if (this.length === 0){
            this.tail = null 
        }
        return current
    }
    /* to unshift
    Function accepts a value
    Create a new node using the value passed to the function
    If there is no head property on the list, set head and tail to be the newly created node
    Otherwise, set newly created node’s next property to be the current head property on the list
    Set the head property on the list to be that newly created node
    Increment length by 1
    Return list
    */
    unshift(value){
        let node = new Node (value)
        if (!this.head){
            this.head = node
            this.tail = node
        }
    }
}