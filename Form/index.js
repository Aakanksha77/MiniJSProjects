document.getElementById('registrationForm').addEventListener('submit', function(event) {
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
});

function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    
    
    const emailExists = storedFormData.some(item => item.email === formData.email);

    if (emailExists) {
        alert('This email is already registered.');
    }else{
    
    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
    
    displayFormData()
    }
}


function displayFormData(){
    let displayData = JSON.parse(localStorage.getItem('formData'));
    
    document.getElementById('result').innerHTML = '';
    displayData.forEach(function(item) {
        console.log(item);
        let name = item.fullName;
        console.log(name);
        

        document.getElementById("result").innerHTML += "<tr><td>"+name+"</td></tr>"
    })   

}