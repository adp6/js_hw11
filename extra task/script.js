window.onload = ()=> { 
    let form = document.querySelector('form');
    let centerWidth = window.innerWidth/2- 200;
    let centerHeight = window.innerHeight/2 - 200;
    let overlay = document.querySelector('.overlay');
    form.style.left = `${centerWidth}px`;
    form.style.top = `${centerHeight}px`;
    let [...inputs] = form.elements;
    console.log(inputs[0].value);
    let submit = document.querySelector('.login');
    let username = /\w{2,}/;
    let email = /\b\w{2,}\@[a-z]{2,6}\.[a-z]{2,6}\b/i;
    let phoneNumber = /^\+3\d{0,3}\d{3}\d{2}\d{2}\d{1}$/;
    
    inputs[0].onchange = ()=>{
        if(username.test(inputs[0].value)){
            inputs[0].classList.remove('error');
            if(username.test(inputs[0].value) && email.test(inputs[1].value) && phoneNumber.test(inputs[2].value) && username.test(inputs[3].value)){
                submit.disabled = false;
            }
            else{
                submit.disabled = true;
            }
        }
        else {
            inputs[0].classList.add('error');
        }
    }
    inputs[1].onchange =()=>{
        if(email.test(inputs[1].value)){
            inputs[1].classList.remove('error');
            if(username.test(inputs[0].value) && email.test(inputs[1].value) && phoneNumber.test(inputs[2].value) && username.test(inputs[3].value)){
                submit.disabled = false;
            }
            else{
                submit.disabled = true;
            }
        }
        else {
            inputs[1].classList.add('error');
        }
    }
    inputs[2].onchange = ()=>{
        if(phoneNumber.test(inputs[2].value)){
            inputs[2].classList.remove('error');
            if(username.test(inputs[0].value) && email.test(inputs[1].value) && phoneNumber.test(inputs[2].value) && username.test(inputs[3].value)){
                submit.disabled = false;
            }
            else{
                submit.disabled = true;
            }
        }
        else {
            inputs[2].classList.add('error');
        }
    }
    inputs[3].onchange = ()=>{
        if(username.test(inputs[3].value)){
            inputs[3].classList.remove('error');
            if(username.test(inputs[0].value) && email.test(inputs[1].value) && phoneNumber.test(inputs[2].value) && username.test(inputs[3].value)){
                submit.disabled = false;
            }
            else{
                submit.disabled = true;
            }
        }
        else{
            inputs[3].classList.add('error');
        }
    }
    let divLogOut = document.querySelector('.logout-div')
   submit.onclick = ()=>{
    divLogOut.classList.remove('hide')
    window.sessionStorage.setItem('isLogin', true)
    overlay.classList.add('hide')
   }
   if(window.sessionStorage.getItem('isLogin') == 'true'){
    overlay.classList.add('hide')
    divLogOut.classList.remove('hide')
   }
   else if(window.sessionStorage.getItem('isLogin') == 'false'){
    overlay.classList.remove('hide')
    divLogOut.classList.add('hide')
   }
   
  
   let logOut = document.querySelector('#logout');
   logOut.onclick = ()=>{
    divLogOut.classList.add('hide')
    window.sessionStorage.setItem('isLogin', false);
    overlay.classList.remove('hide')
   }
}