var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //collect input values
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var exprience = document.getElementById("exprience").value;
    var Skills = document.getElementById("skills").value;
    //generated resume content dynamically
    var resumeHTML = "\n<h2><b> Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Phone Number:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n<h3>Exprience</h3>\n<p contenteditable=\"true\">").concat(exprience, "</p>\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(Skills, "</p>\n");
    // display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display is missing.');
    }
});
