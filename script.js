/*
Iterable Object(반복가능한 객체)
JS에서는 문자열도 반복가능한 객체 취급
-> for of 반복문 사용
*/
//미션 함수생성
//step1 - 인수로 전달된 특정 요소 안의 글자값을 반복돌며 span요소로감싸서 다시 해당 요소 안에 innerHTML로 삽입 
//step2 - span요소 자체를 우리가 원하는 요소명으로 인수 전달처리
//step3 - 인터벌 시간값을 3번째 인수로 전달하면 delay값이 설정됨
//step4 - 세번째 인수값이 전달되지 않으면 무조건 delay값을 디폴트로 0처리

//step3 - 인터벌 시간값을 3번째 인수로 전달하면 delay값이 설정됨
//세번째 인수로 인터벌 값이 있으면 각 반복요소에 누적해서 delay값 적용
//만약 세번째 인수 없으면 그냥 0으롤 초기화
function splitText(elem, tag = "span", interval = 0) {
  if (!elem) {
    console.error("첫 번째 인수값은 텍스를 가져올 DOM선택자를 넣어야 됩니다.");
    //필수값인 elem요소가 전달되지 않으면 무조건 return으로 함수를 강제 중지해서
    //불필요한 연산 처리 방지
    return;
  }
  const el = document.querySelector(elem);
  const el_text = el.innerText;
  //아래와 같이 DOM.style.fontSize='0px'은
  //실제 html태그상에 <h1 sytle = 'font-size:0px'></h>
  //와 같이 인라인 스타일 형태로 적용
  //무조건 문자열로. 낙타스타일로 적을것 하이폰들어가면 안됨.
  el.style.fontSize = "0px";


  //for of 반복문 안쪽에서 += 복합대입연산자로
  //태그 문자열이 들어있는 문자값이 계속 쌓일 변수 초기값 설정
  let resultText = "";
  let counter = 0;

  //for of로 문자값을 반복돌면서 <tag>letter</tag> 형태의 문자값을 계속
  //resultText변수에 쌓아나감
  for (let letter of el_text) {
    console.log(letter);
    resultText += `<${tag} style='display:inline-block; transition-delay:${interval * counter++
      }s'>${letter}</${tag}>`;
  }
  el.innerHTML = resultText;
}

splitText("h1", "span", 0.05);


/*
//gpt 대답
// function splitText(selector, wrapperElement = 'span', delay = 0.2) {
//   const element = document.querySelector(selector);
//   const text = element.innerText;
//   element.innerHTML = text.split('').map(letter => `< ${ wrapperElement }> ${ letter }</${ wrapperElement }> `).join('');
//   const spans = element.querySelectorAll(wrapperElement);

//   element.addEventListener('mouseenter', () =>
//     spans.forEach((span, i) => setTimeout(() => span.style.opacity = '0', i * delay * 1000))
//   );

//   element.addEventListener('mouseleave', () =>
//     spans.forEach((span, i) => setTimeout(() => span.style.opacity = '1', i * delay * 1000))
//   );
// }

// splitText('h1', 'span', 0.1);
*/