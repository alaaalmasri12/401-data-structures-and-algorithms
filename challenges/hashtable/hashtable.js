'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    hash(key) {
        return key.split('').reduce((p, n) => {
            return p + n.charCodeAt(0)
        }, 0) * 599 % this.size;
    }

    set(key, value) {
        let hash = this.hash(key);
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        let entry = { [key]: value };
        this.map[hash].add(entry);
    }
    get(key) {
        let idx = this.hash(key, this.size);
        return this.map[idx].head.value;
    }
    contains(key) {
        let idx = this.hash(key, this.size);
        let searchvalue = this.get(key);
        console.log(this.map[idx].head.value);
        if (this.map[idx].head.value === searchvalue) {
            return true;
        }
        else {
            return false;
        }
    }
}
let myHash = new Hashmap(1024);
myHash.set('Cat', 'Paghera');
myHash.set('Owner', 'Israa');
myHash.get('Owner');
console.log('alaa', myHash.contains('dsfdsf'));

myHash.map.forEach((data, i) => {
    console.log(i, data && data.values());
});