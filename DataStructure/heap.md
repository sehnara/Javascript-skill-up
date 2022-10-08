# Heap

### 왜 쓰는가?

- **우선순위 큐**를 구현하는 데에 사용하는데, **큐**처럼 가장 앞의 값을 뺄 때, **최대값**, **최솟값**처럼 **우선순위**에 따라 값을 **pop**할 수 있다.
- 그리고 **삽입**,**삭제**에 **O(logN)** 복잡도를 가지고, 우선순위 pop에 있어서는 **O(1)**걸리는 것이 큰 장점이다.
- **CPU 작업 스케줄링 알고리즘**에 사용된다.

---

### 시간복잡도

- **삽입** : O(logN)
- **삭제** : O(logN)
- **우선순위 추출** : O(1)

---

### 알고리즘 로직

- **class** : MinHeap
- **LinkedList field** : heap(array), length
- **LinkedList method** : swap, getParentIdx, heapPush, heapPop,

#### Mini Heap

```javascript
class MiniHeap {
  constructor() {
    this.heap = [null]; // leftChild, rightChild의 인덱스를 계산할 때, 가장 앞의 인덱스 값이 1이어야 계산이 복잡해지지 않는다. 그래서 초기 원소를 null로 잡는게 편하더라!
  }

  swap(currIdx, parIdx) {
    [this.heap[currIdx], this.heap[parIdx]] = [
      this.heap[parIdx],
      this.heap[currIdx],
    ];
  }

  getParentIdx(idx) {
    return Math.floor(idx / 2);
  }

  isEmpty() {
    return this.heap.length === 1 ? true : false;
  }

  bubbleUp() {
    let currIdx = this.heap.length - 1;

    while (currIdx > 1) {
      const parIdx = this.getParentIdx(currIdx);
      if (this.heap[parIdx] <= this.heap[currIdx]) break;
      this.swap(currIdx, parIdx);
      currIdx = parIdx;
    }
  }

  bubbleDown(idx) {
    let currIdx = idx;
    let leftChildIdx = (currIdx - 1) * 2 + 2;
    let rightChildIdx = (currIdx - 1) * 2 + 3;

    if (
      leftChildIdx < this.heap.length &&
      this.heap[leftChildIdx] < this.heap[currIdx]
    ) {
      currIdx = leftChildIdx;
    }
    if (
      rightChildIdx < this.heap.length &&
      this.heap[rightChildIdx] < this.heap[currIdx]
    ) {
      currIdx = rightChildIdx;
    }

    if (currIdx !== idx) {
      this.swap(currIdx, idx)
      this.bubbleDown(currIdx);
    }
  }

  heapPush(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  heapPop() {
    if (this.heap.length === 2) {
      return this.heap.pop();
    }
    const mini = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.bubbleDown(1);
    return mini;
  }
}
```

#### Max Heap

```javascript
class MiniHeap {
  constructor() {
    this.heap = [null]; // leftChild, rightChild의 인덱스를 계산할 때, 가장 앞의 인덱스 값이 1이어야 계산이 복잡해지지 않는다. 그래서 초기 원소를 null로 잡는게 편하더라!
  }

  swap(currIdx, parIdx) {
    [this.heap[currIdx], this.heap[parIdx]] = [
      this.heap[parIdx],
      this.heap[currIdx],
    ];
  }

  getParentIdx(idx) {
    return Math.floor(idx / 2);
  }

  isEmpty() {
    return this.heap.length === 1 ? true : false;
  }

  bubbleUp() {
    let currIdx = this.heap.length - 1;

    while (currIdx > 1) {
      const parIdx = this.getParentIdx(currIdx);
      if (this.heap[parIdx] <= this.heap[currIdx]) break;
      this.swap(currIdx, parIdx);
      currIdx = parIdx;
    }
  }

  bubbleDown(idx) {
    let currIdx = idx;
    let leftChildIdx = (currIdx - 1) * 2 + 2;
    let rightChildIdx = (currIdx - 1) * 2 + 3;

    if (
      leftChildIdx < this.heap.length &&
      this.heap[leftChildIdx] < this.heap[currIdx]
    ) {
      currIdx = leftChildIdx;
    }
    if (
      rightChildIdx < this.heap.length &&
      this.heap[rightChildIdx] < this.heap[currIdx]
    ) {
      currIdx = rightChildIdx;
    }

    if (currIdx !== idx) {
      this.swap(currIdx, idx)
      this.bubbleDown(currIdx);
    }
  }

  heapPush(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  heapPop() {
    if (this.heap.length === 2) {
      return this.heap.pop();
    }
    const mini = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.bubbleDown(1);
    return mini;
  }
}
```