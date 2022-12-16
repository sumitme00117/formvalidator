const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')


// show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

// show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

// check email is valid
function checkEmail(input){
    const re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(re.test(input.value)){
        showSuccess(input)
    }
    else{
        showError(input, 'Email is not valid')
    }
}

// check required fields
function checkRequired(inputArr){
    inputArr.forEach((element)=>{
        if(element.value === ''){
            showError(element, `${getFieldName(element)} is required`)
        }
        else{
            showSuccess(element)
        }
    })
}

// Check password match

function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, 'Passwords do not match')
    }
}
// Get fieldName
function getFieldName(element){
    return element.id.charAt(0).toUpperCase() + element.id.slice(1)
}

//check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }
    else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be at atmost ${max} characters`)
    }
    else{
        showSuccess(input)
    }
}

// Event Listener
form.addEventListener('submit',function(e){
    console.log('form submitted successfully')
    e.preventDefault()
   checkRequired([username, email, password, password2])
    checkLength(username, 3, 15)
    checkLength(password, 6, 20)
    checkEmail(email)
    checkPasswordsMatch(password, password2)
})