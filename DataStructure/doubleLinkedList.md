# Double Linked List

### 왜 쓰는가?

- **삭제**를 더 빨리 할 수 있다.
> **Node**에 **prev**값을 더함으로써 **삭제**시, 그 전에 노드를 찾기 위해서 loop를 도는 과정을 줄일 수 있다.
---

### 단점
- 당연한 이야기지만, Node가 **prev**를 하나 더 가지기 때문에 **메모리를 더 많이 먹는다.**
---

### 시간복잡도

- 삽입 : **O(1)**
- 삭제 : **O(1)**
- 검색 : **O(N)**

---

### 알고리즘 로직

- **class** : Node, LinkedList
- **LinkedList field** : head
- **LinkedList method** : append, insert, remove, find, prevFind, toString, sizeOf

---

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = new Node(head);
  }

  append(value) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    const lastNode = new Node(value)
    lastNode.prev = currentNode
    currentNode.next = lastNode;
  }

  find(item) {
    let currentNode = this.head;
    while (currentNode.data !== item) {
      currentNode = currentNode.next;
      if (currentNode === null) {
        return null;
      }
    }
    return currentNode;
  }

  insert(item, newItem) {
    const currentNode = this.find(item);
    const newNode = new Node(newItem);
    if(currentNode.next === null){
      newNode.next = currentNode.next;
      newNode.prev = currentNode
      currentNode.next = newNode; 
    }
    else{
      newNode.next = currentNode.next;
      newNode.prev = currentNode
      currentNode.next.prev = newNode
      currentNode.next = newNode;
    }
  }

  remove(item) {
    const currentNode = this.find(item);
    if(!currentNode){
      console.log(`${item}을 찾지 못했습니다.`)
      return null
    }
    const prevNode = currentNode.prev;
    currentNode.next.prev = prevNode
    prevNode.next = currentNode.next;
  }

  toString() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(arr.join(" "));
  }

  sizeOf(){
    let currentNode = this.head
    let cnt = 1
    while(currentNode.next !== null){
      currentNode = currentNode.next
      cnt ++
    }
    return cnt
  }
}
```
