

  console.log('js is here');

  function button1Clicked(){
    document.getElementById('button-1').classList.toggle('was-clicked1');
  }
  function windowLoaded(){
    console.log('loaded');
    document.getElementById('button-1').addEventListener('click', button1Clicked);
    document.getElementById('button-2').addEventListener('mouseover', button2Hover);
    document.getElementById('button-2').addEventListener('mouseout', button2Hover);
  }

  function button2Hover(){
    document.getElementById('button-2').classList.toggle('was-clicked2');
  }

  window.onload = windowLoaded;
