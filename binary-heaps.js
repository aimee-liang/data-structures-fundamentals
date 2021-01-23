class Name: 
    MaxBinaryHeap

Properties:
    values = []

class MaxBinaryHeap{
    constructor(){
        this.values = []
    }
    /* Insert
    Push the value into values property of heap
    Bubble value up to its proper spot by:
    Creating a variable called index, which is the length of the values property - 1
    Create another variable called parentIndex which is the floor of (index - 1)/2
        Keep looping as long as the values element at parentIndex is less than the values element at index
        Swap the value of the values element at the parentIndex with the value of the values element at index
        Set index to be parentIndex and start over
    */
    insert(value){
        this.values.push(value)
        this.bubbleUp()
        }
        bubbleUp(){
            let index = this.values.length - 1
            let element = this.values[index]
            while (index > 0) {
                let parentIndex = Math.floor( (index - 1) / 2 )
                let parentElement = this.values[parentIndex]
                if (element < parentElement) break
                this.values[parentElement] = element
                this.values[element] = parentElement
                index = parentIndex
            }
    }
    /* Remove/Extract
    Swap the first value in the values property with the last one
    Pop from the values property, so you can return value at the end
    Have the new root “sink down” to the correct spot…
        Your parent index starts at 0 (the root)
        Find the index of the left child (2 * index + 1)
        Find the index of the right child (2 * index + 2)
        If the left or right child is greater than the element, swap it! If both left and right children are larger, swap with the largest child
        The child index you swapped to now is the parent index
        Keep looping and swapping until neither child is larger than the element
        Return the old root
    */
    
}