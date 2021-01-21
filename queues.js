/* create a new node with a value */
class Node{
    constructor (value){
        this.value = value
        this.next = null
    }
}

/* initialize a new Queue where there is no first or last index, and there are no elements */
class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    /* This function accepts some value
        Create a new node with the value passed into the function
        If there are no nodes, set this node to be first and last property of the queue
        Otherwise, set the next property on the current last to be that node, and set the last property on the queue to be that node
        Increment size by 1
    */
    enqueue(value){
        let node = new Node(value)
        if (!this.first){
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        this.size++
        return this.size
    }
    /*
    If there is no first property, return null
    Store first property in a variable
    See if first is the same as last (in that there is only one node). 
        If so, set the first and last to be null
        If more than one node, set first property to be the next property of first
    Decrement size by 1
    Return value of node dequeued
    */
    dequeue(){
        if (!this.first) return null
        let firstProp = this.first
        if (this.first === this.last){
            this.first = null
            this.last = null
        } else {
            this.first = this.first.next
        }
        return this.size--
    }
}

