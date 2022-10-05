# Binary Search

### 용도

- 특정 값이 배열의 원소로 있는 지 확인할 때

### 원리

- 변수 정의 : 배열(**arr**), 첫 번째 인덱스(**start**), 마지막 인덱스(**end**), start와 end의 중간 인덱스(**mid**), 특정값(**N**)

- 간단히 말하면, arr[mid]와 N이 같은 지 확인하는 것을 반복하는 것.
- arr[mid] === N, return mid
- arr[mid] > N, start = mid + 1
- arr[mid] < N, end = mid - 1

---

### 시간복잡도

- **O(logN)**

---

### 알고리즘 로직

```javascript
function binarySearch(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.round((left + right) / 2);
    if (arr[mid] === n) {
      return mid
      break;
    } else if (arr[mid] > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}
```

### 개선 로직
- 배열 내에서 값의 존재 유무를 확인하는 알고리즘은 몇 가지 있다.
- Array.includes() -> O(N)
- binarySearch -> O(logN)
- **Set.has() -> O(1)**

```javascript
const arr = [1,3,5,7,21]
const N = 1

arr = new Set(arr)
arr.has(N)
```
