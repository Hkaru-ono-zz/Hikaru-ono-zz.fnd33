'use strict'
// 1行目に記載している 'use strict' は削除しないでください

document.getElementById('alligatorButton').addEventListener('click', function() {
  const count = parseInt(document.getElementById('animalCount').value);
  const area = document.getElementById('animalArea');
  area.innerHTML = ''; // 以前の表示をクリア

  if (!isNaN(count) && count > 0) {
      for (let i = 0; i < count; i++) {
          const alligator = document.createElement('span');
          alligator.textContent = '🐊';
          alligator.classList.add('large-icon');
          area.appendChild(alligator);
      }
  }
});

document.getElementById('catButton').addEventListener('click', function() {
  const count = parseInt(document.getElementById('animalCount').value);
  const area = document.getElementById('animalArea');
  area.innerHTML = ''; // 以前の表示をクリア

  if (!isNaN(count) && count > 0) {
      for (let i = 0; i < count; i++) {
          const cat = document.createElement('span');
          cat.textContent = '😺';
          cat.classList.add('large-icon');
          area.appendChild(cat);
      }
  }
});

document.getElementById('robotButton').addEventListener('click', function() {
  const count = parseInt(document.getElementById('animalCount').value);
  const area = document.getElementById('animalArea');
  area.innerHTML = ''; // 以前の表示をクリア

  if (!isNaN(count) && count > 0) {
      for (let i = 0; i < count; i++) {
          const robot = document.createElement('span');
          robot.textContent = '🤖';
          robot.classList.add('large-icon');
          area.appendChild(robot);
      }
  }
});

document.getElementById('muscleButton').addEventListener('click', function() {
  const count = parseInt(document.getElementById('animalCount').value);
  const area = document.getElementById('animalArea');
  area.innerHTML = ''; // 以前の表示をクリア

  if (!isNaN(count) && count > 0) {
      for (let i = 0; i < count; i++) {
          const muscle = document.createElement('span');
          muscle.textContent = '💪';
          muscle.classList.add('large-icon');
          area.appendChild(muscle);
      }
  }
});
