// 방향키 입력 출력용
document.addEventListener('keydown', (e) => {
  if(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
    console.log(`누른 키: ${e.key}`);
  }
});

function createNote () {
  const noteContainer = document.querySelector('.note-container');
  const note = document.createElement('div');
  note.classList.add('note');
  note.textContent = '⬆️';
  note.style.top = '0px';
  noteContainer.append(note);
}