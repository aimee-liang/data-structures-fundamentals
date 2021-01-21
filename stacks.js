/* create singular node */
class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

/* create a new Stack class with no elements or length */
class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    /* to push: 
        Function accepts value
        Create a new node with that value
        If there are no nodes, set the first and last property to be the newly created node
        If there is at least one, create a variable that stores the current first property on the stack
        Reset first property to be the newly created node
        Set next property on node to be previously created variable
        Increment size of stack by 1
    */
    push(value){
        let node = new Node(value)
        if (!this.first){
            this.first = node
            this.last = node
        } else {
            let firstProp = this.first
            this.first = node
            this.first.next = firstProp
        }
        return ++this.size
    }

    /* to pop:
        If no nodes, return null
        Create temporary variable to store the first property on stack
        If only 1 node, set first and last property to be null
        If more than 1, set first to be next property to be on the current first
        Decrement size by 1
        Return value of node removed
    */
    pop(){
        if (!this.first) return null
    }
}