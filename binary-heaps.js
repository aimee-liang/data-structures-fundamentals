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
    Create another variable called parentIndex which is the  floor of (index - 1)/2
        Keep looping as long as the values element at parentIndex is less than the values element at index
        Swap the value of the values element at the parentIndex with the value of the values element at index
        Set index to be parentIndex and start over
    */
    insert(value){
        this.values.push(value)
    }
}