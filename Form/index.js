let currentForm = 'login';

function toggleForm() {
    const title = document.getElementById('form-title');
    const fullName = document.getElementById('fullName');
    const nameLabel = document.getElementById('name-label');
    const SignBtn = document.getElementById('SignButton');
    const LogInBtn = document.getElementById('loginButton')
    const toggleText = document.querySelector('.toggle');
    const message = document.getElementById('message');

    if (currentForm === 'login') {
        currentForm = 'signup';
        title.innerText = 'Signup';
        fullName.style.display = 'block';
        nameLabel.style.display = 'block';
        LogInBtn.style.display = 'none';
        SignBtn.style.display = 'block';
        toggleText.innerText = 'Already have an account? Login';
    } else {
        currentForm = 'login';
        title.innerText = 'Login';
        fullName.style.display = 'none';
        nameLabel.style.display = 'none';
        button.innerText = 'Login';
    }
}


document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const formData = {
        fullName: fullName,
        email: email,
        password: password
    };

    saveFormData(formData);
    document.getElementById('registrationForm').reset();

});

function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];


    const emailExists = storedFormData.some(item => item.email === formData.email);

    if (emailExists) {
        alert('This email is already registered.');
    } else {

        storedFormData.push(formData);

        localStorage.setItem('formData', JSON.stringify(storedFormData));

        displayFormData()
    }
}


function displayFormData() {
    let displayData = JSON.parse(localStorage.getItem('formData'));

    document.getElementById('result').innerHTML = '';
    displayData.forEach(function (item) {

        let displayName = item.fullName;

        let displayEmail = item.email;

        let displayPassword = item.password;

        document.getElementById("result").innerHTML += "<tr><td>" + displayName + "</td><td>" + displayEmail + "</td><td>" + displayPassword + "</td><td><button onClick='delectData()' " + ">Delect</button></td></tr>" 
    })

}

function delectData(){
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    const user = storedFormData.find(item => item.email === email);
    console.log(user.email);
    
    
}

document.getElementById('loginButton').onclick = function() {
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

