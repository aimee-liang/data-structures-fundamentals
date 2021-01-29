class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    /* DFS - recursive
    Create a list to store the end result, which will be returned at the end
    Create an object to store visited vertices
    Create a helper function which accepts a vertex
        If the vertex is empty, it should return
        Place the vertex in its parameters into the visited object, and push that vertex into the result array
        Loop over all the values in the adjacencyList for that vertex
        If any of the values have not been visited, recursively invoke the helper function with that vertex
        */
    DFS(){
        let result = []
        let visited = {}
        function helper(vertex){
            if (vertex)
        }
    }
}