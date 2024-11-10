var form = document.getElementById("resume_form");
var resume_display = document.getElementById("resume_display");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone_number = document.getElementById("phone_number").value;
        var education = document.getElementById("education").value;
        var skills = document.getElementById("skills").value;
        var experience = document.getElementById("experience").value;
        var resumehtml = "\n            <h2><b>Resume</b></h2><br><br>\n\n            <h3>Personal Information</h3>\n            <p><b>Name:</b> ".concat(name, "</p>\n            <p><b>Email:</b> ").concat(email, "</p>\n            <p><b>Phone Number:</b> ").concat(phone_number, "</p>\n\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n        ");
        // Display the generated resume
        if (resume_display) {
            resume_display.innerHTML = resumehtml;
        }
        else {
            console.error("The Resume Display Element is missing.");
        }
    });
}
else {
    console.error("The Form Element is missing.");
}
