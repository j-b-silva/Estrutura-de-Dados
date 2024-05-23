class Queue {
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    enqueue(element){
        this.items[this.count] = element;
        this.count++
    }
    size(){
        return this.count - this.lowestCount;
    }
    isEmpty(){
        return this.size() === 0;
    }
    dequeue(){

    }
    peek(){

    }
    clear(){

    }
    toString(){

    }
}
