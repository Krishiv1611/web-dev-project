const form = document.querySelector("#resumeForm");
const formContainer = document.querySelector("#formContainer");

function resumegenerator(e) {
    e.preventDefault();

    const fullname = document.querySelector("#fullName");
    const email = document.querySelector("#email");
    const phoneno = document.querySelector("#phoneno");
    const location = document.querySelector("#location");
    const jobTitle = document.querySelector("#jobTitle");
    const companyName = document.querySelector("#companyName");
    const workDescription = document.querySelector("#workDescription");
    const degree = document.querySelector("#degree");
    const university = document.querySelector("#university");
    const eduDuration = document.querySelector("#eduDuration");
    const educationDescription = document.querySelector("#educationDescription");
    let project = document.querySelector(".project1");
    let projectTitle = document.querySelector("#projectTitle1");
    let projectDescription = document.querySelector("#projectDescription1");
    let projectLink = document.querySelector("#projectLink1");
    let certificate = document.querySelector(".certificate1");
    let certificationTitle = document.querySelector("#certificationTitle1");
    let certificationIssuer = document.querySelector("#certificationIssuer1");
    let certificationDate = document.querySelector("#certificationDate1");
    let skill = document.querySelector(".skill1");
    let skillset = document.querySelector("#skillset1");
    const resumeDesign = document.querySelector("#resumeDesign");


    let resumeHTML = `
        <div id="resumeOutput">
        <div class="sidebar">
          <section class="resume__section">
                <p class="resume__contact">Email: ${email.value || 'Email: N/A'} | Phone: ${phoneno.value || 'Phone: N/A'} | Location: ${location.value || 'Location: N/A'}</p>
                <h2>Skills</h2>
                <ul id="rSkills" class="resume__skills">`
    let countingskill = 1;
    while (skill) {
        if (skillset.value) {
            resumeHTML += `
                    <li>${skillset.value}</li>
        `;
        }
        else {
            resumeHTML += `
            <section>
                    <p>No skills entered.</p>
            </section>
        `;
        }
        countingskill++;
        skill = document.querySelector(`.skill${countingskill}`);
        skillset = document.querySelector(`#skillset${countingskill}`);
    }
          resumeHTML+=`</ul>
          </section>
        </div>
        <main class="resume">
            <header class="resume__header">
            <h1 class="resume__name">${fullname.value || 'Your Name'}</h1>
            </header>
            <section class="resume__section">
                <h2>Work Experience</h2>
                <div class="experience">
                    <h3>${jobTitle.value || 'Enter your Job Title'}</h3>
                    <h4>${companyName.value || 'Enter your Company Name'}</h4>
                    <p>${workDescription.value || 'Job Description: Describe your responsibilities, achievements, and the skills you used.'}</p>
                </div>
            </section>

            <section class="resume__section">
                <h2>Education</h2>
                <div class="education">
                    <h3>${degree.value || 'Degree or Certification'}</h3>
                    <h4>${university.value || 'University or Institution'} | ${eduDuration.value || 'Duration'}</h4>
                    <p>${educationDescription.value || 'Description: Any honors, relevant coursework, or extracurricular activities.'}</p>
                </div>
            </section>
    `;
    resumeHTML+=`<section class="resume__section">
                <h2>Projects</h2>`;
    let countingproject = 1;
    while (project) {
        if (projectTitle.value) {
            resumeHTML += `
                <div class="project">
                    <h3>${projectTitle.value}</h3>
                    <p>${projectDescription.value}</p>
                    <p>Link: <a href="${projectLink.value || '#'}">View Project</a></p>
                </div>
        `;
        }
        else {
            resumeHTML += `
            <section class="resume__section">
                <p>No Projects entered.</p>
            </section>
        `;
        }
        countingproject++;
        project = document.querySelector(`.project${countingproject}`);
        projectTitle = document.querySelector(`#projectTitle${countingproject}`);
        projectDescription = document.querySelector(`#projectDescription${countingproject}`);
        projectLink = document.querySelector(`#projectLink${countingproject}`);
    }
    resumeHTML+=`</section>`;
    resumeHTML+=`<section class="resume__section">
                <h2>Certifications</h2>`;
    let countingcertificate = 1;
    while (certificate) {
        if (certificationTitle.value) {
            resumeHTML += `
                <div class="certification">
                    <h3>${certificationTitle.value}</h3>
                    <p>Issued by: ${certificationIssuer.value} on ${certificationDate.value}</p>
                </div>
        `;
        }
        else {
            resumeHTML += `
            <section class="resume__section">
                <p>No certifications entered.</p>
            </section>
        `;
        }
        countingcertificate++;
        certificate = document.querySelector(`.certificate${countingcertificate}`);
        certificationTitle = document.querySelector(`#certificationTitle${countingcertificate}`);
        certificationIssuer = document.querySelector(`#certificationIssuer${countingcertificate}`);
        certificationDate = document.querySelector(`#certificationDate${countingcertificate}`);
    }
    resumeHTML+=`</section>`;
    resumeHTML += `<button id="downloadBtn">Download as PDF</button>`;
    resumeHTML += `</main></div>`;
    formContainer.innerHTML = '';

    formContainer.innerHTML = resumeHTML;

    function changeCSS(fileName) {
        const link = document.querySelector("#themeStylesheet");
        link.href = fileName;
    }
    changeCSS(resumeDesign.value);
    const downloadBtn = document.querySelector("#downloadBtn");
    const resumeOutputElement = document.querySelector("#resumeOutput");
    downloadBtn.addEventListener("click", downloadPDF(resumeOutputElement));
    window.scrollTo(0, 0);
}

form.addEventListener("submit", resumegenerator);
let countProject = 1;
const addproject = document.querySelector("#addproject");
function addingproject() {
    countProject++;
    const div = document.createElement('div');
    div.classList.add(`project${countProject}`);
    div.innerHTML = `
        <label for="projectTitle${countProject}">Project Title:</label>
        <input type="text" id="projectTitle${countProject}" />

        <label for="projectDescription${countProject}">Project Description:</label>
        <textarea id="projectDescription${countProject}"></textarea>

        <label for="projectLink${countProject}">Project Link:</label>
        <input type="url" id="projectLink${countProject}" />`
    addproject.parentNode.insertBefore(div, addproject);
}
addproject.addEventListener("click", addingproject);
let countCertificate = 1;
const addcertificate = document.querySelector("#addcertificate");
function addingcertificate() {
    countCertificate++;
    const div = document.createElement('div');
    div.classList.add(`certificate${countCertificate}`);
    div.innerHTML = `
        <label for="certificationTitle${countCertificate}">Certification Title:</label>
          <input type="text" id="certificationTitle${countCertificate}" />

          <label for="certificationIssuer${countCertificate}">Certification Issuer:</label>
          <input type="text" id="certificationIssuer${countCertificate}" />

          <label for="certificationDate${countCertificate}">Date Acquired:</label>
          <input type="text" id="certificationDate${countCertificate}" />`
    addcertificate.parentNode.insertBefore(div, addcertificate);
}
addcertificate.addEventListener("click", addingcertificate);
let countSkill = 1;
const addskill = document.querySelector("#addskill");
function addingskill() {
    countSkill++;
    const div = document.createElement('div');
    div.classList.add(`skill${countSkill}`);
    div.innerHTML = `
        <label for="skills${countSkill}">${countSkill}) </label>
        <input type="text" id="skillset${countSkill}" />`
    addskill.parentNode.insertBefore(div, addskill);
}
addskill.addEventListener("click", addingskill);
function downloadPDF(element) {
    const downloadButton = document.querySelector("#downloadBtn");
    if (downloadButton) {
        downloadButton.style.display = 'none';
    }
    const originalHeight = element.style.height;
    element.style.height = element.scrollHeight + 'px';

    const opt = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        html2canvas: {
            scale: 2,
            windowHeight: element.scrollHeight
        },
    };

    setTimeout(() => {
        html2pdf().set(opt).from(element).save().then(() => {
            if (downloadButton) {
                downloadButton.style.display = 'block';
            }
            element.style.height = originalHeight;
        });
    }, 100);
}

