  let btn = document.getElementById('btn');
              btn.className = "btnClass"
              btn.addEventListener('click' , e => {
                  const currentValue = e.target.textContent;
                  e.target.textContent = parseInt(currentValue)+1
              })
