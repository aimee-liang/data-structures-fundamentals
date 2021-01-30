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
    DFSR(startingNode){
        let result = []
        let visited = {}
        const adjacencyList = this.adjacencyList
        (function helper(vertex){
            if (!vertex) return
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]){
                    return helper(neighbor)
                }
            })
        })(startingNode)
        return result
    }
    /* DFS - iterative
    Function takes a node as a parameter
    Create a stack to keep track of vertices
    Create a list to store the end result, to be returned at the very end
    Add the starting vertex to the stack, and mark it visited
    While the stack has something in it,
    Pop the next vertex from the stack
    If the vertex hasn’t been visited yet
    Mark it as visited
    Add it to the result list
    Push all of its neighbors to the stack
    Return result array
    */
    DFSI(node){
        let visited = []
        let result = {}
        
    }
}