# Linked List

### 원리
- 앞에서부터 **두 개씩** 크기에 따라 스위치한다.
- **배열의 길이**만큼 위를 반복한다. 
- 왜냐 스위치 한 사이클 내에서 앞뒤 원소만 크기 비교가 이루어지기 때문에, 전체 정렬이 되었다고 보장하기 힘들기 때문이다.
---

### 시간복잡도
- **O(n^2)**

---

### 알고리즘 로직
- 매개변수로 배열과 오름차순 유무를 boolean 값으로 넣는다.

```javascript
function bubbleSort(arr, ascend = true) {
  if (!ascend) {
    arr = arr.map((e) => e * -1);
  }

  for (let j = 1; j < arr.length; j++) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
  }
  return ascend ? arr :arr.map((e) => e * -1)
}
```
