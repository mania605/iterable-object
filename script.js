/*

Iterable Object(반복가능한 객체)
JS에서는 문자열도 반복가능한 객체 취급
-> for of 반복문 사용

*/

const text = "HELLO"

for (let letter of text) {
  console.log(letter);
}
