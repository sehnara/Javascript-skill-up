# Linked List

### 왜 쓰는가?

- 배열에 비해 **삽입**, **삭제**가 빠르다. (**O(1)**)
- **메모리를 효율**적으로 사용한다.
> 배열(array)는 **선형적**으로 메모리를 사용하여 메모리 활용이 유연하지 못하다. 하지만 연결리스트(LinkedList)는 다음 노드의 참조값을 저장하기 때문에 **비선형적**으로 메모리 활용이 가능하다. 

---

### 단점

- 노드 당 다음 노드의 참조값을 가지기 때문에 **주소공간이 낭비**된다.
- **캐싱에 적합하지 않아** 연산 속도가 **느리다.**
  > 배열은 원소들이 차례대로 붙어있기 때문에 공간지역성을 살리기 탁월하다. 따라서 특정 노드의 주변노드까지 같이 캐싱하게 되면 캐시히트 확률이 높아진다. 하지만 링크드 리스트는 각 원소들이 연속적이지 않아 캐싱에 적합한 구조가 아니다.

### 시간복잡도

- 삽입 : **O(1)**
- 삭제 : **O(1)**
- 검색 : **O(N)**

---

### 알고리즘 로직

- **class** : Node, LinkedList
- **LinkedList field** : head
- **LinkedList method** : append, insert, remove, find, prevFind, toString

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
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
    currentNode.next = new Node(value);
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
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  prevFind(item) {
    let currentNode = this.head;
    while (currentNode.next.data !== item) {
      currentNode = currentNode.next;
      if (currentNode === null) {
        return null;
      }
    }
    return currentNode;
  }

  remove(item) {
    const currentNode = this.find(item);
    const prevNode = this.prevFind(item);
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
}

const arr = new LinkedList(1);
arr.append(2);
arr.append(3);
arr.append(4);
arr.append(5);

console.log(arr.find(3));
console.log(arr.find(6));

arr.insert(3, 8);
arr.insert(4, 10);
arr.toString();

arr.remove(3);
arr.toString();
```
