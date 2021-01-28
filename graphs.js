class Graph{
    constructor(){
        this.adjacencyList = {} /* stores edges */
    }
    /*  to add a vertex
    Write a method called addVertex that accepts a name of a vertex
    Should add key to the adjacency list with the name of the vertex and set its value to be an empty array
    */
    addVertex(name){
        if (!this.adjacencyList[name]){
            this.adjacencyList[name] = [] /* set name of vertex to an empty array */
        }
    }
    /* to add an edge
    The function needs to take two vertices as parameters, which we can call vertex1 and vertex2 
    Function should find in the adjacency list the key of vertex1 and push vertex2 to the array
    Function should find in adjacency list the key of vertex2 and push vertex1 to the array
    Don’t worry about error handling
    */
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }
    /* to remove an edge
    Function needs to take two vertices as parameters, ideally vertex1 and vertex2
    The function should reassign the key of vertex1 to be an array that does not contain the value of vertex2 
    Same for vertex2
    Don’t worry about error handling for this method
    */
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].slice(vertex2)
        this.adjacencyList[vertex2].slice(vertex1)
    }
}