import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import "/src/styles/tailwind.css";

const root = document.getElementById("root");
const reactDomRoot = ReactDOM.createRoot(root);

const popupImage = {
  src: "/images/popup.jpg",
  alt: "처음 만나는 뷰티 플랫폼 BEAUTY Karly 지금 바로 만나보세요!",
};

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

reactDomRoot.render(createPopup());
