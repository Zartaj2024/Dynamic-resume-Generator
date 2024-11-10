var form = document.getElementById("resumeForm");
var resumePreview = document.getElementById("resumePreview");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var age = document.getElementById("Age").value;
    var dob = document.getElementById("DoB").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var linkedin = document.getElementById("Linkedin").value;
    var github = document.getElementById("Github").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var workExperience = document.getElementById("workExperience").value;
    var profileSummary = document.getElementById("profileSummary").value;
    var resume = "\n      <div class=\"resume\">\n        <div class=\"resume-left\">\n          <h3>Personal Information</h3>\n          <p>Name: ".concat(name, "</p>\n          <p>Age: ").concat(age, "</p>\n          <p>Date of Birth: ").concat(dob, "</p>\n        </div>\n        <div class=\"resume-right\">\n          <h3>Contact Information</h3>\n          <p>Email: ").concat(email, "</p>\n          <p>Phone: ").concat(phone, "</p>\n          <p>Linkedin: ").concat(linkedin, "</p>\n          <p>Github: ").concat(github, "</p>\n          <h3>Education</h3>\n          <p>").concat(education, "</p>\n          <h3>Skills</h3>\n          <p>").concat(skills, "</p>\n          <h3>Work Experience</h3>\n          <p>").concat(workExperience, "</p>\n          <h3>Profile Summary</h3>\n          <p>").concat(profileSummary, "</p>\n        </div>\n      </div>");
    if (resumePreview) {
        resumePreview.innerHTML = resume;
    }
    else {
        console.log("resumePreview not found");
    }
});
