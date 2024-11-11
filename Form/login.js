// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const fullName = document.getElementById('fullName').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const formData = {
//         fullName: fullName,
//         email: email,
//         password: password
//     };

//     saveFormData(formData);
// });


document.getElementById('login').onclick = function saveFormData(formData) {
    // formData.preventDefault()
    const email = document.getElementById('email').value;
const password = document.getElementById('password').value;


    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    
    
    const emailExists = storedFormData.some(item => item.email === formData.email);
console.log(emailExists);

    if (emailExists) {
        alert('This email is already registered.');
    }else{
    
    console.log("Failed");
    
    }
}


// Login function triggered on button click
document.getElementById('login').onclick = function() {
    // Get email and password values from input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve stored data from localStorage or set as an empty array if no data
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    // Find the user in stored data by matching email
    const user = storedFormData.find(item => item.email === email);

    // Check if user exists and password matches
    if (user) {
        if (user.password === password) {
            alert("Login successful");
        } else {
            alert("Incorrect password");
        }
    } else {
        alert("Email not registered");
    }
};
