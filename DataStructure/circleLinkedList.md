# Circle Linked List

### 왜 쓰는가?
- python을 배울 때, **dequeue**가 생각난다.
- **stack**과 **queue**의 두 장점을 모두 가져다 쓴 자료구조라고 생각한다.
- **연결리스트의 앞뒤로 접근 가능하다.** 즉, 연결리스트의 앞에서 삽입, 삭제를 하든, 뒤에서 삽입, 삭제를 하든 모두 **O(1)**에 할 수 있다.

### 알고리즘 로직
- dequeue처럼 구현해보자!

- **class** : Node, LinkedList
- **LinkedList field** : head, tail, length
- **LinkedList method** : push, pushLeft, pop, popLeft, getLength

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(item){
    const newNode = new Node(item)
    if(!this.head){
      this.head = newNode
    }
    else{
      newNode.prev = this.tail
      newNode.next = this.head
      this.tail.next = newNode
    }
    this.tail = newNode
    this.head.prev = newNode
    this.length ++
  }
  
  pushLeft(item){
    const newNode = new Node(item)
    
    if(!this.head){
      this.tail = newNode
    }
    else{
      this.head.prev = newNode
      newNode.next = this.head
      newNode.prev = this.tail
    }
    this.head = newNode
    this.tail.next = newNode
    this.length ++
  }
  
  pop(){
    const prevTail = this.tail

    this.tail.prev.next = this.head
    this.head.prev = this.tail.prev
    this.tail = this.tail.prev
    this.length --
    return prevTail.data
  }

  popLeft(){
    const prevHead = this.head
    
    this.head.next.prev = this.tail
    this.tail.next = this.head.next
    this.head = this.head.next
    this.length --
    return prevHead.data
  }
  
  getLength(){
    return this.length
  }
}
```