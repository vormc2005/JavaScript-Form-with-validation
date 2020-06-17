const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


const showError =(input, message)=>{
    const formControl= input.parentElement;
    formControl.className = "form-control error"
    const small = formControl.querySelector('small')
    small.innerText = message
}
const showSuccess =(input, message)=>{
    const formControl= input.parentElement;
    formControl.className = "form-control success"
}

//Check validity of email

const checkEmail=(input)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, 'Email is not valid')
    }

    return re.test(String(email).toLowerCase());
}

//check required fields
const checkRequired=(inputArr)=>{
    inputArr.forEach((input)=>{
        // console.log(input.value)
        if(input.value.trim()===''){
            showError(input, `${getFieldName(input)} Is requered`)
        }else{
            showSuccess(input)
        }
    });
}

//Get field name
const getFieldName=(input)=>{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//Check input length
const checkLength=(input, min, max)=>{
if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least ${min}`)
}else if (input.value.length > max){
    showError(input, `${getFieldName(input)} must be less than ${max}`)
}else{
    showSuccess(input)
}
}

//Check passwords match
const checkPasswordsMatch=(input1, input2)=>{
    if (input1.value!== input2.value){
        showError(input2, 'Passwords do not match')
    }
}

//Event listners
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkRequired([username, email, password, password2]);

    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email)
    checkPasswordsMatch(password, password2)
})




//    if(username.value === ''){
//        showError(username, "Username is required")
//    }else{
//        showSuccess(username)
//    }

//    if(email.value === ''){
//     showError(email, "Email is required");
//    }else if(!isValidEmail(email.value)){
//     showError(email, "Email is not valid");
      
// }else{
//     showSuccess(email)
// }
// if(password.value === ''){
//     showError(password, "Password is required")
// }else{
//     showSuccess(password)
// }

// if(password2.value === ''){
//     showError(password2, "Password confirmation is required")
// }else{
//     showSuccess(password2)
// }