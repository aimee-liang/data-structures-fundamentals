class HashTable{
    constructor(size=53){ /* needs to accept size limitation */
        this.keyMap = new Array(size)
    } 
    _hash(key){
        let total = 0
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total
    }
    /* set
    Accepts a key and a value
    Hashes the key
    Stores the key-value pair in the hash table array via separate chaining
    */
    set(key, value){
        let index = this._hash(key)
        if (!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key, value])
    }
    /* get
    Accepts a key
    Hashes the key
    Retrieves the key-value pair in the hash table
    If key not found, return undefined
    */
    get(key){
        let index = this._hash(key)
        if (this.keyMap[index]){
            for (let i = 0; i < this.keyMap[index].length; i++){ /* iterating through index's subarrays */
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1] /* return value of key pair */
                }
            }
        } 
        return undefined
    }
}