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
        if (!this.root){
            this.root = node
        } else {
            
        }
    }
}