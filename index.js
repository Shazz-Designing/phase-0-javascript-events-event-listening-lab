function addingEventListener() {
    
    const input = document.getElementById('input');
  
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
  }
  
  addingEventListener(); 
  
  function clickAlert() {
    alert('I was clicked!');
  }
  
  function addingEventListenerWithNamedFunction() {
    const input = document.getElementById('input');
    input.addEventListener('click', clickAlert);
  }
  
  addingEventListenerWithNamedFunction(); 