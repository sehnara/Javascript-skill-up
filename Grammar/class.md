# Class

### 핵심
- 특정 객체을 설명하는 **변수**와 **메소드**들을 정의한 일종의 틀(붕어빵 틀 알지?)
---

### 기본 문법
- class를 구성하는 기본적인 틀이다. 
- **필드**와 **메서드**로 구성된다는 핵심만 잡고 있으면 쉽다.
- **constructor** : 생성자, 클래스의 특정 필드 초기화
- **getter, setter** : 클래스의 필드를 호출하고 수정할 수 있다.

```javascript
class Student{
  school = 'busan' // 프로퍼티

  constructor(name){ // 생성자
    this.name = name
  }

  learn(subject){ // 메서드
    console.log(`${this.name}은 ${subject}를 배운다`)
  }

  get name(){
    return this._name
  }

  set name(value){
    this._name = value
  }
}
```
---

