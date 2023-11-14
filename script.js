document.getElementById("btn-contact").addEventListener('click', function () {
    var username = document.getElementById("username").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var comment = document.getElementById("comment").value;

    if (username !== "" && email !== "" && comment !== "") {
        // Validasi tambahan sesuai kebutuhan, misalnya untuk format email
        if (isValidEmail(email)) {
            alert('Success! Form is submitted.');
            window.location.reload();
        } else {
            alert('Please enter a valid email address.');
        }
    } else {
        alert('Please fill in all required fields.');
    }
});

function isValidEmail(email) {
    // Validasi sederhana untuk format email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}