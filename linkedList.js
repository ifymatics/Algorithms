class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(value) {
        this.head = {
            value: value,
            next:null
        }
        this.tail = this.head;
        this.length = 1
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        let newNode = new Node(value);
        let leaderNode = this.traverse(index - 1);
        let ponterHolder = leaderNode.next;
        newNode.next = ponterHolder
        leaderNode.next = newNode;
        this.length++
        return this;
    }
    delete(index) {
        const leader = this.traverse(index - 1);
        const deletedNode = leader.next;
        leader.next = deletedNode.next;
        this.length--;
        return this;

    }
    printList() {
        let linkArray = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            linkArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return linkArray
    }
    traverse(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode
    }
}
let myLinkedList = new LinkedList(10);
 myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(18);
myLinkedList.prepend(1);
myLinkedList.prepend(17);
myLinkedList.insert(2, 88);
myLinkedList.delete(2);


console.log(myLinkedList.printList())