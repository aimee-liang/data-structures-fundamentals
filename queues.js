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
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    /* This function accepts some value
        Create a new node with the value passed into the function
        If there are no nodes, set this node to be first and last property of the queue
        Otherwise, set the next property on the current last to be that node, and set the last property on the queue to be that node
        Increment size by 1
    */
    enqueue(value){
        let node = new Node(value)
    }
    
    dequeue(){

    }
}

