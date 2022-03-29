const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName (){
  const name = promt('Enter a new name');
  para.textContent = 'Player 1: ${name}';
}
