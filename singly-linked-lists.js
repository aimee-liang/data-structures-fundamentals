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
        node.next = this.head
        this.head = node
        this.length++
        return this
    }
    /* to get
    Function accepts an index
    If index is less than zero, or greater than or equal to the length of the list, return null
    Loop through list until you reach the index and return the node at the specific index
    */
    get(idx){
        if ( (idx < 0) || (idx >= this.length) ) return null
        let counter = 0
        let current = this.head
        while (counter !== idx){
            current = current.next
            counter++
        }
        return current
    }
    /* to set
    Function accepts value and index
    Use your get function to find specific node
    If node is not found, return false
    If node is found, set value of node to the value in function and return true
    */
    set(value, idx){
        let foundNode = this.get(idx)
        if (foundNode){
            foundNode.value = value
            return true
        } else {
            return false
        }
    }
    /* to insert
    If index is less than zero, or greater than length, return false
    If index is same as length, push a new node to the end of the list
    If index is 0, unshift a new node to the start of the list

    Otherwise, using Get, access the node at the index - 1
    Set the next property on that node to be the new node
    Set the next property on the new node to be the previous next 
    Increment length
    Return true
    */
    insert(value, idx){
        if ( (idx < 0) || (idx > this.length) ) return false
        if (idx === this.length){
            !!this.push(value)
        }
        if (idx === 0){
            return this.unshift(value)
        }
        let node = new Node(value)
        let prev = this.get(index - 1)
        let temp = prev.next
        prev.next = node
        node.next = temp
        this.length++
        return true
    }
    /* to remove
    If index is less than zero or greater than length, return undefined
    If the index is the same as the length -1, return pop
    If index is 0, shift
    Otherwise, using Get, access node at the index - 1
    Set the next property on that node to be the next of the next node
    Decrement length
    Return value of node removed
    */
    remove(idx){
        if ( (idx < 0) || (idx > this.length) ) return undefined
        if (idx === this.length - 1) return this.pop()
        if (idx === 0) return this.shift()
        let previousNode = this.get(index - 1)
        let removed = previousNode.next
        previousNode.next = removed.next
        this.length--
        return removed
    }
    /* to reverse
    Swap head and tail of list
    Create two variables called next and prev
    Create a variable called node and initialize it to the head property
    Loop through the list
    Set next to be the next property on whatever node is
    Set the next property on the node to be whatever prev is
    Set prev to be the value of the node variable
    Set node variable to be the value of the next variable
    Once finished looping, return list
    */
    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null
        for(let i = 0; i < this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}