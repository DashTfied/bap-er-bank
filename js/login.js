// step-1 : add click event handler with the sumbit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email= emailField.value 
    // step-3: get password
    // 3.a > set id on the html element
    // 3.b > get the element
    // 3.c > get the value from element
    const passwordField = document.getElementById('user-password')
    const password =passwordField.value;
    
    //  DO NOT VERIFY email password on the client site(this is just the beginners way so don't use this method further)
    // step-4 : verify email and pass
    if(email === "shontan@bap.com" && password === "baperhotel"){
        window.location.href = "bank.html"
    } 
    else{
        alert('Invalid')
    }
})