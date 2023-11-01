const inputs = document.getElementsByClassName('input-form')
const button = document.getElementById('button')
const paragrafoError = document.getElementsByClassName('paragrafo-erro')
const errror = document.getElementsByClassName('error')

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

button.addEventListener('click' , () => {
    for(i = 0; i < inputs.length ; i++){
        if(inputs[i].value == ''){
            paragrafoError[i].innerHTML = `Fill in the field ${inputs[i].name}`
            errror[i].style.display = 'block'
        }else if(inputs[i].value !== ""){
            paragrafoError[i].innerHTML = ``
            errror[i].style.display = 'none'
        }

        switch (inputs[i].name){
            case "Email":
                if(validateEmail(inputs[i].value)){
                    errror[i].style.display = 'none'
                }else{
                    paragrafoError[i].innerHTML = "Invalid email, try another"
                    errror[i].style.display = 'block'
                    
                }
                break
            case "Password":
                if(inputs[i].value.length == 0){
                    paragrafoError[i].innerHTML = `Fill in the field ${inputs[i].name}`
                    errror[i].style.display = 'block'
                }else if(inputs[i].value.length < 6 || inputs[i].value.length > 10){
                    paragrafoError[i].innerHTML = "minimum six characters and maximum ten"
                    errror[i].style.display = 'block'
                }
                break
            default:
                console.log('passou')
        }
    }
})

//! Fill in the field