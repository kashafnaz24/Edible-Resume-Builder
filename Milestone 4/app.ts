const form = document.getElementById("resume_form") as HTMLFormElement;
const resume_display = document.getElementById("resume_display") as HTMLDivElement ;

if (form) {
    form.addEventListener("submit", (event: Event) => {
        event.preventDefault();

        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone_number = (document.getElementById("phone_number") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;

        const resumehtml = `
            <h2><b>Resume</b></h2><br><br>

            <h3>Personal Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone Number:</b> ${phone_number}</p>

            <h3>Education</h3>
            <p>${education}</p>

            <h3>Skills</h3>
            <p>${skills}</p>

            <h3>Experience</h3>
            <p>${experience}</p>
        `;

        // Display the generated resume
        if (resume_display) {
            resume_display.innerHTML = resumehtml;
        } else {
            console.error("The Resume Display Element is missing.");
        }
    });
} else {
    console.error("The Form Element is missing.");
}
