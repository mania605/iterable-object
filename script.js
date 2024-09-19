/*

Iterable Object(반복가능한 객체)
JS에서는 문자열도 반복가능한 객체 취급
-> for of 반복문 사용

*/

const text = "TYPOGRAPHY"

for (let letter of text) {
  console.log(letter);
}

//미션 함수생성
//step1 - 인수로 전달된 특정 요소 안의 글자값을 반복돌며 span요소로감싸서 다시 해당 요소 안에 innerHTML로 삽입
//step2 - span요소 자체를 우리가 원하는 요소명으로 인수 전달처리
//step3 - 인터벌 시간값을 3번째 인수로 전달하면 delay값이 설정됨
//step4 - 세번째 인수값이 전달되지 않으면 무조건 delay값을 디폴트로 0처리



// function splitText(selector, wrapperElement = 'span', delay = 0.2) {
//   const element = document.querySelector(selector);
//   const text = element.innerText;
//   element.innerHTML = text.split('').map(letter => `<${wrapperElement}>${letter}</${wrapperElement}>`).join('');
//   const spans = element.querySelectorAll(wrapperElement);

//   element.addEventListener('mouseenter', () =>
//     spans.forEach((span, i) => setTimeout(() => span.style.opacity = '0', i * delay * 1000))
//   );

//   element.addEventListener('mouseleave', () =>
//     spans.forEach((span, i) => setTimeout(() => span.style.opacity = '1', i * delay * 1000))
//   );
// }

// splitText('h1', 'span', 0.1);
