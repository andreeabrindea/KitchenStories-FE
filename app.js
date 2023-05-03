
    document.addEventListener('DOMContentLoaded', ()=> {
        const selectDrop = document.querySelector('#countries'); 
  
        fetch('https://restcountries.com/v3.1/all').then(res =>
        {
        return res.json();
        }).then(data =>{
        
        let output = "";
        
        data.forEach(country => {
            
            output+=`<option>${country.name.common}</option>`
        })
        selectDrop.innerHTML = output;
        }).catch(err => {
            console.log(err);
        })
  })

function validateForm() {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordInput = document.getElementById("password");
    const passwordValue = passwordInput.value;
    const confirmInput = document.getElementById("confirm_password");
    const confirmValue = confirmInput.value;
    const usernameInput = document.getElementById("username");
    const usernameValue = usernameInput.value;
    if (emailRegex.test(emailValue)) {
      emailInput.nextElementSibling.textContent = "✓";
      emailInput.nextElementSibling.style.color = "green";
    } else {
      emailInput.nextElementSibling.textContent = "✗";
      emailInput.nextElementSibling.style.color = "red";
    }
    if (passwordValue === confirmValue) {
      confirmInput.nextElementSibling.textContent = "✓";
      confirmInput.nextElementSibling.style.color = "green";
    } else {
      confirmInput.nextElementSibling.textContent = "✗";
      confirmInput.nextElementSibling.style.color = "red";
    }
    if (usernameValue.length >= 3) {
      usernameInput.nextElementSibling.textContent = "✓";
      usernameInput.nextElementSibling.style.color = "green";
    } else {
      usernameInput.nextElementSibling.textContent = "✗";
      usernameInput.nextElementSibling.style.color = "red";
    }
  }