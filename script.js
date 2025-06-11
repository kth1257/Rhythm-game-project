// 방향키 입력 출력용
document.addEventListener('keydown', (e) => {
  if(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
    console.log(`누른 키: ${e.key}`);
  }
});

// 방향키 매핑
const directionMap = {
  ArrowUp: { symbol: '⬆️', left: 200 },
  ArrowDown: { symbol: '⬇️', left: 300 },
  ArrowLeft: { symbol: '⬅️', left: 400 },
  ArrowRight: { symbol: '➡️', left: 500 }
}

// 노트 생성 + 아래로 이동
function createNote (key) {
  const noteContainer = document.querySelector('.note-container');
  const note = document.createElement('div');
  note.classList.add('note');

  // 방향 설정
  const info = directionMap[key];
  note.textContent = info.symbol;
  note.style.top = '0px';
  note.style.left = `${info.left}px`;

  noteContainer.append(note);
  

  let position = 0;
  const speed = 2;

  const interval = setInterval(() => {
    position += speed;
    note.style.top = position + 'px';

    if (position > 700) {
      note.remove();
      clearInterval(interval);
    }

  }, 16); // 60프레임
}

const keys = Object.keys(directionMap); // directionMap의 key값을 복사해 배열로 만듦
setInterval(() => {
  const randomKey = keys[Math.floor(Math.random() * keys.length)]; // 무작위 방향 선택
  createNote(randomKey);
}, 1000); // 1초간격