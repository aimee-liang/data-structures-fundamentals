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
    /* to remove a vertex
    Write method called removeVertex that accepts name of a vertex as parameter
    Should loop for as long as there are any other vertices in the adjacency list for that vertex
    Inside the loop, call our removeEdge function with the vertex we are trying to remove and any values in the adjacency list for that vertex
    Delete key in the adjacency list for that vertex
    */
    removeVertex(name){
        while (this.adjacencyList[name].length){
            let adjVertex = this.adjacencyList[name].pop()
            this.removeEdge(name, adjVertex)
        }
        delete this.adjacencyList[name]
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
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex!== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
    }
}