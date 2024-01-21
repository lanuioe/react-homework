# React Mission01

### 요구사항
- [X] JSX 또는 React API를 사용해, Vanilla 프로젝트에서 구현한 
인터페이스의 일부를 마크업하여 웹 브라우저에 렌더링되도록 만듭니다.

<br />

### 환경설정
vite 설치
```bash
pnpm create vite@latest
```
tailwindCSS 설치
```bash
pnpm i -D tailwindcss
npx tailwindcss init
```
```css
/* tailwind.css */
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```
```jsx
/* main.jsx */
import "/src/styles/tailwind.css";
```
postCSS 설치
```bash
pnpm i -D postcss postcss-import postcss-nesting autoprefixer
```

<br />

### 바닐라 프로젝트(JS) 구현
![popup_vanilla](https://github.com/lanuioe/react-homework/assets/148831765/f1a94792-b7c3-4c33-8c8e-127bc2538d7f)

🔹 **배포 사이트**: https://pocket-karly.netlify.app/
- [Test 계정] ID : tekit123 PW: 123456789+ <br />

🔹 **기능**<br />
- 메인페이지 로드 시 활성화되는 팝업창<br />
- 닫기 버튼 클릭 시 팝업이 닫히고(리로드 시 재활성화)<br />
- 오늘 하루 안 보기 버튼 클릭 시 로컬스토리지를 통해 하루동안 비활성화

<br />

### 리액트 구현
![popup_react](https://github.com/lanuioe/react-homework/assets/148831765/14284015-0995-416f-bfd6-1bd97cd837e0)

🔹 **마크업 수정**<br />
- 기존 바닐라 프로젝트에서 <u>해당 dialog 마크업 내부에는 form 요소가 불필요하다</u>는 피드백을 받아,<br />`form` → `div`로 수정

<br />

🔹 **jsx로 마크업하여 렌더링**<br />
- 데이터 바인딩
  ```jsx
  const popupImage = {
    src: "/images/popup.jpg",
    alt: "처음 만나는 뷰티 플랫폼 BEAUTY Karly 지금 바로 만나보세요!",
  };
  ```
- 렌더링
  ```jsx
  const createPopup = () => {
    return (
      <dialog id="popup" className="popup overflow-hidden rounded-2xl p-0" open>
        <a href="#">
          <img src={popupImage.src} alt={popupImage.alt} />
        </a>
        <div className="grid grid-flow-col grid-cols-2">
          <button
            type="button"
            value="cancel"
            className="button__today--closed border-r border-gray-100 py-[30px] text-p-base text-content"
          >
            오늘 하루 안 보기
          </button>
          <button
            type="button"
            value="cancel"
            className="button--closed py-[30px] text-p-base text-content"
          >
            닫기
          </button>
        </div>
      </dialog>
    );
  };
  ```
  
<br />

### 마치며
기능 구현을 하고 싶었으나 어려워서 일단 마크업 단계까지만 완료하였습니다.<br />
아직은 간단한 마크업 단계라서 리액트만의 장점을 비교적 덜 느낀 것 같은데, 
그래도 직접 리액트로 변경하는 과정을 거쳐보니 막막하기만 했던 리액트와 조금은 친해진 것 같아서 좋았습니다.<br />
다음번에는 팝업 기능 구현과 더불어 다른 페이지들도 리액트로 변경해보고 싶어요!