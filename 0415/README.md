# ⚛️ React Hooks 핵심 요약 가이드

React Hook은 함수 컴포넌트에서 상태 관리와 생명주기 기능을 사용할 수 있게 해주는 기능입니다.

---

## 1. 주요 Hook 요약
* **useState:** 컴포넌트 내 동적인 상태(State) 관리
* **useEffect:** API 호출, 타이머, 구독 등 사이드 이펙트(Side Effect) 처리
* **useRef:** DOM 요소 직접 접근 및 리렌더링 없는 변수 유지
* **useMemo:** 연산량이 많은 함수의 결과값 재사용(메모이제이션)
* **useCallback:** 특정 함수 자체를 재사용하여 불필요한 재생성 방지

---

## 2. Hook의 사용 규칙
1. **최상위(Top Level)에서만 호출:** 반복문, 조건문, 중첩된 함수 내 호출 금지
2. **React 함수 내에서만 호출:** 함수 컴포넌트 또는 Custom Hook 내부에서만 사용

---

## 3. Hook 사용 전/후 비교
| 특징 | 클래스형 컴포넌트 | 함수 컴포넌트 + Hooks |
| :--- | :--- | :--- |
| **상태 관리** | `this.state` / `this.setState` | `useState` |
| **생명주기** | 메서드별 분산 (Mount/Update) | `useEffect`로 통합 관리 |
| **로직 재사용** | HOC 등 복잡한 구조 | **Custom Hook**으로 간결하게 분리 |

---

## 4. 커스텀 훅(Custom Hook) 예시
```javascript
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
}