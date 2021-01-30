class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node: vertex2, weight})
        this.adjacencyList[vertex2].push({node: vertex1, weight})
    }
    /*
    Function takes a start and end vertex in its parameters
    Create a distances object, and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0
    After setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except for the starting vertex, which should have a priority of 0 because that’s where we begin
    Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
    Start looping so long as there is anything in the priority queue
    Dequeue a vertex from the priority queue
    If the vertex is the same as the starting vertex, we’re done!
    Otherwise, loop through each value in the adjacency list at that vertex
    Calculate the distance to that vertex from the starting vertex
    If distance is less than what is currently stored in our distances object
    Update the distances object with the new lower distance
    Update the previous object to contain that vertex
    Enqueue the vertex with the total distance from the start node
*/
    dijkstraAlgorithm(start, finish){
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        const path = []
        let smallest

        for (let vertex in this.adjacencyList){
            if (vertex === start){
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }

        while (nodes.values.length){
            smallest = nodes.dequeue().val
            if (smallest === finish){
                while(previous[smallest]){
                    path.push(smallest)
                    smallest= previous[smallest]
                }
                break
            }

            if (smallest || distances[smallest] !== Infinity){
                for (let neighbor in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    let newNode = distances[smallest] + nextNode.weight

                    let nextNeighbor= nextNode.node
                    if (newNode < distances[nextNeighbor]){
                        distances[nextNeighbor] = newNode
                        previous[nextNeighbor] = smallest
                        nodes.enqueue(nextNeighbor, newNode)
                    }
                }
            }
        }
        return path.concat(smallest).reverse()

    }
}

class PriorityQueue{
    constructor(){
        this.values = []
    }
    enqueue(value, priority){
        this.values.push({value, priority})
        this.sort()
    }
    dequeue(){
        return this.values.shift()
    }
    sort(){
        this.values.sort((a, b) => a.priority - b.priority)
    }
}

