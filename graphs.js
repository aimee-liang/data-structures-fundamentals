class Graph{
    constructor(){
        this.adjacencyList = {} /* stores edges */
    }
    addVertex(name){
        this.adjacencyList[name] = [] /* set name of vertex to an empty array */
    }
}