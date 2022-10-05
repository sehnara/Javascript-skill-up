# Combination

### 원리

- 순서 없이 배열 내의 원소를 선택하는 방법이다.

---

### 알고리즘 로직

- 매개변수로 배열과 조합할 숫자의 개수를 기입한다.

```javascript
function getCombinations(arr, num) {
  if (num === 1) return arr.map((e) => [e]);
  const result = [];

  arr.forEach((e, i, origin) => {
    const rest = arr.slice(i + 1);
    const combination = getCombinations(rest, num - 1);
    const attached = combination.map((el) => [e, ...el]);
    result.push(...attached);
  });
  return result;
}
```
