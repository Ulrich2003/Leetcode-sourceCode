var CQueue = function() {
    this.queue = new Array();
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.queue.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    let deleted;
    if (this.queue.length==0){
        return -1;
    }else {
        deleted = this.queue[0];
        this.queue.splice(0,1);
    }
    return deleted;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

var obj = new CQueue();

let array = ["A","B","C","D"];
array.splice(-2,1,'1','2')
console.log(array); // [ 'A', '1', '2', 'D' ]




