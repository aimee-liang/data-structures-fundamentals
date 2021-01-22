/* create node - since this is a tree, will need to specify nothing to left or right */
class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

/* create a new instance of a Binary Search Tree */
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    /* to insert:
    Create a new node
        Starting at root, check to see if there is a root
        If not, the new node is now the root
        If there is, see if the value of the new node is greater than or less than the value of the root
        If it is greater
            Check to see if there is a node to the right
                If there is, move to that node and repeat above steps
                If there is not, add this node as the right property
        If it is lesser
            Check to see if there is a node to the left
                If there is, move to that node and repeat above steps
                If not, add this node as the left property
    */
    insert(){
        let node = new Node(value)
        if (this.root === null){
            this.root = node
            return this
        } else {
            let currentHead = this.head /* variable created to keep track of head and compare values */
            while (true){
                if (value === currentHead.value) return undefined /* to prevent from infinite looping */
                if (value < currentHead.value){
                    if (currentHead.left === null) {
                        currentHead.left = node
                        return this
                    } else {
                        currentHead = currentHead.left /* this will update current so we can compare the value to left and insert later on */
                    }
                } else if (value > currentHead.value){
                    if (currentHead.right === null){
                        currentHead.right = node
                        return this
                    } else {
                        currentHead = currentHead.right
                    }
                }
            }
        }
    }
    /* to find: 
        Create a new node
        Starting at root, check to see if there is a root
            If not, we’re done searching
            If there is, see if the value of the root is the value we’re looking for. If it is, we’re done!
            If not, we need to compare and see if the value is greater than or less than our newly created node
                If greater
                    Check and see if there is a node to the right
                    If there is, move to that node and repeat above steps
                    If not, we’re done!
                If lesser
                    Check and see if there is a node to the left
                    If there is, move to that node and repeat
                    If not, we’re done!
            If never found, 
        Return 
    */
    find(value){
        if (this.root === null) return false /* or false? */
        let current = this.root
        let found = false
        while(!found && current){ /* while we haven't found the value yet and there are still nodes to check */
            if (value < current.value){
                current = current.left
            } else if (value > current.value){
                current = current.right
            } else {
                found = true
            }
        }
        if (!found) return undefined
        return current
    }
    /* Create a queue (this can be an array) and a variable to store the nodes you’ve visited
    Place the tree root in the queue
    Loop so long as there is anything in the queue
    Dequeue a node from the queue and push the value of the node into the variable that is storing the node
        If there is a left property to the dequeued node, add it to the queue
        If there is a right property to the dequeued node, add it to the queue
        Return variable that is storing the value
    */
    BFS(){
        let temp = [], queue = [], node = this.root
        queue.push(node)
        while(queue.length){
            node = queue.shift() /* this will dequeue the node */
            temp.push(node)
            if (node.left){
                queue.push(node.left)
            } 
            if (node.right){
                queue.push(node.right)
            }
        }
    }
}