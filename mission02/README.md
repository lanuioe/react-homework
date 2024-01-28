# React Mission02

### 요구사항
- [X]  바닐라 프로젝트에서 동적으로 렌더링했던 UI 조각을 선택합니다.
- [X]  바닐라 프로젝트에서 활용했던 데이터베이스의 
데이터를 JSON 파일로 로컬 드라이브에 저장합니다.
- [X]  JSON 데이터를 불러와 마크업에 연결하여 UI를 구현하세요.
- [X] 필요한 경우, 리스트 렌더링을 활용해보세요.

<br />

### 바닐라 프로젝트(JS) 구현
![rolling_banner_vanilla](https://github.com/lanuioe/react-homework/assets/148831765/d010f7a1-c063-4c05-a0df-8fbf4dbbe65f)
![product_recommend_vanilla](https://github.com/lanuioe/react-homework/assets/148831765/fe7709bd-ddcc-4630-a669-495eb4b3d8d2)

🔹 **배포 사이트**: https://pocket-karly.netlify.app/
- [Test 계정] ID : tekit123 PW: 123456789+ <br />


<br />

### 리액트 구현
![swiper_react](https://github.com/lanuioe/react-homework/assets/148831765/c409d217-d097-4c07-ba96-ce7f3a12cfb9)


<br />

- **데이터베이스 데이터를 JSON 파일로 저장**
  <details>
  <summary>banners.json</summary>

    ```jsx
    ...
    {
      "id": "banner-t85ifp69r7t6r78",
      "src": "01",
      "alt": "부드러운 달콤함 컬리 과일가게, 앵콜 특가: 멜론 9900원, 10월 20일부터 10월 27일까지"
    },
    ...
    ```
  </details>
    <details>
  <summary>products.json</summary>

    ```jsx
    ...
    {
      "id": "product-p23nio608325zim",
      "src": "01",
      "name": "[풀무원] 탱탱쫄면 (4개입)",
      "detail": "튀기지 않아 부담 없는 매콤함",
      "price": 10000,
      "discount": 15,
      "alt": "풀무원 탱탱쫄면 4개입"
    },
    ...
    ```
  </details>

- **리스트 렌더링**
  ```jsx
  {bannerData.items?.map((slideData) => {
    return (
      <SwiperSlide key={slideData.id}>
        <a href="#">
          <img
            src={`../src/assets/banner/banner${slideData.src}.jpg`}
            alt={slideData.alt}
          />
        </a>
      </SwiperSlide>
    );
  })}
  ```

- **조건 처리**
  ```jsx
  {discount > 0 ? (
    <del className="block mt-2 text-p-sm text-gray-400">
      {comma(price)}원
    </del>) : ("")
  }
  ```  

<br />

### 마치며
리스트 렌더링을 쓸 수 있는 파트를 생각하던 중에, 이전부터 만들어보고 싶었던 Swiper에 도전해보게 되었다.<br />
이번 과제에서 기능 구현이 요구사항에 있던 건 아니었지만, 해보고 싶던 것을 만드는 거였기 때문에 최대한 기능구현도 같이 하려고 노력했다.<br /><br />
바닐라 프로젝트 때 담당했던 파트가 아니라 Swiper를 알아보는데 시간이 조금 걸렸는데, Swiper를 적용할 때 Vanilla JavaScript와 React에서의 방식이 다른 것 같았다. 이것저것 적용시켜보며 원하는 레이아웃을 구성하는 것이 재미있었다.<br />그러나 Vanilla JS에서와 달리 마크업을 직접 하지 않아서 생기는 불편함도 있었다. 특히 tab 접근성을 고려하는 부분이 어려웠다. 접근성에 관한 A11y 옵션도 있던데, 아직 정확히 쓰는 방법을 몰라서 더 찾아봐야 할 것 같다.<br /><br />
JSON으로 데이터를 불러와 렌더링 할 때, banner에서는 이미지 src와 alt만 불러오면 돼서 비교적 간단했었는데, product에서는 데이터를 불러온 후에 계산을 해야되는 것도 있고(할인 가격), 조건에 따라 처리해야 되는 것도 있어서(할인 여부) 다양하게 연습하기에 더 좋은 것 같았다.<br />
그래도 banner swiper를 간단하게 먼저 만들어봤기 때문에 product swiper를 만들 때도 더 빨리 적응할 수 있었던 것 같다! <br /><br />
swiper 기능에서 아직 고치고 싶은 부분이 많지만 일단 주된 목적은 데이터 불러오기였기 때문에 나름 만족스러운 과제였다고 생각한다.
<br />
다만 데이터나 파일 등을 좀 더 분리했어야 했을까 싶었는데, 더 연습하다보면 어떤 식으로 하면 좋을지 감이 잡힐 것 같다.<br />
조금 더 욕심을 내보자면, 지금은 json의 모든 데이터를 불러왔는데, 렌더링할 때 데이터를 불러오는 조건을 추가해보고 싶다.