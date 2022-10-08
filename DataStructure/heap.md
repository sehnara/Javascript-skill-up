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

### 현재 로직 문제
- **10.08** 
    : **heapPop()**에서 마지막 원소를 **undefined**로 남겨두니 메모리 먹는다.   
    : **heapPop()** 로직 길이가 너무 많고 **whie(true){}**로 하다보니 중복 코드가 몇 개 보인다. 

```javascript
class MiniHeap{

  constructor(){
    this.heap = [null] // leftChild, rightChild의 인덱스를 계산할 때, 가장 앞의 인덱스 값이 1이어야 계산이 복잡해지지 않는다. 그래서 초기 원소를 null로 잡는게 편하더라!
    this.length = 0
  }

  swap(currIdx,parIdx){
    const temp = this.heap[parIdx]
    this.heap[parIdx] = this.heap[currIdx]
    this.heap[currIdx] = temp
  }

  getParentIdx(idx){
    return Math.floor(idx/2)
  }
  
  heapPush(item){
    this.length++
    this.heap[this.length] = item
    let currIdx = this.length
    let parIdx = this.getParentIdx(currIdx)
    
    while(parIdx !== 0 &&
         this.heap[parIdx] > this.heap[currIdx]){
      this.swap(currIdx, parIdx)
      currIdx = parIdx
      parIdx = this.getParentIdx(currIdx)
    }
  }

  heapPop(){
    const mini = this.heap[1]
    this.heap[1] = this.heap[this.length]
    this.heap[this.length] = undefined
    this.length--

    let currIdx = 1
    let leftChildIdx = (currIdx-1)*2 + 2
    let rightChildIdx = (currIdx-1)*2 + 3
    
    while(this.heap){
      let leftValue = this.heap[leftChildIdx]
      let rightValue = this.heap[rightChildIdx]
      let currValue = this.heap[currIdx]
      
      if(!leftValue){
        return mini
      }
      
      if(rightValue === undefined || leftValue <= rightValue){
        if(leftValue < currValue){
          this.swap(leftChildIdx, currIdx)
          currIdx = leftChildIdx
        }
        else{
          return mini
        }
      }
      else{
        if(rightValue < currValue){
          this.swap(rightChildIdx, currIdx)
          currIdx = rightChildIdx
        }
        else{
          return mini
        }
      }
      leftChildIdx = (currIdx-1)*2 + 2
      rightChildIdx = (currIdx-1)*2 + 3
    }
  return mini
  }
}
```
