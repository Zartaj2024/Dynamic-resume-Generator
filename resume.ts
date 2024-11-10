
  const form = document.getElementById("resumeForm") as HTMLFormElement;
  const resumePreview = document.getElementById("resumePreview") as HTMLDivElement;


  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const age = (document.getElementById("Age") as HTMLInputElement).value;
    const dob = (document.getElementById("DoB") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const linkedin = (document.getElementById("Linkedin") as HTMLInputElement).value;
    const github = (document.getElementById("Github") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const workExperience = (document.getElementById("workExperience") as HTMLInputElement).value;
    const profileSummary = (document.getElementById("profileSummary") as HTMLInputElement).value;
   
    const resume = `
      <div class="resume">
        <div class="resume-left">
          <h3>Personal Information</h3>
          <p>Name: ${name}</p>
          <p>Age: ${age}</p>
          <p>Date of Birth: ${dob}</p>
        </div>
        <div class="resume-right">
          <h3>Contact Information</h3>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Linkedin: ${linkedin}</p>
          <p>Github: ${github}</p>
          <h3>Education</h3>
          <p>${education}</p>
          <h3>Skills</h3>
          <p>${skills}</p>
          <h3>Work Experience</h3>
          <p>${workExperience}</p>
          <h3>Profile Summary</h3>
          <p>${profileSummary}</p>
        </div>
      </div>`;
      if (resumePreview) {
        resumePreview.innerHTML = resume;
      }else{
        console.log("resumePreview not found");
      }
  });