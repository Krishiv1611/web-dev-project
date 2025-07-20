document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('resumeForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const contact = document.getElementById('contact').value;
    const location = document.getElementById('location').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const companyName = document.getElementById('companyName').value;
    const workDescription = document.getElementById('workDescription').value;
    const degree = document.getElementById('degree').value;
    const university = document.getElementById('university').value;
    const eduDuration = document.getElementById('eduDuration').value;
    const educationDescription = document.getElementById('educationDescription').value;
    const projectTitle = document.getElementById('projectTitle').value;
    const projectDescription = document.getElementById('projectDescription').value;
    const projectLink = document.getElementById('projectLink').value;
    const certificationTitle = document.getElementById('certificationTitle').value;
    const certificationIssuer = document.getElementById('certificationIssuer').value;
    const certificationDate = document.getElementById('certificationDate').value;
    const skills = document.getElementById('skills').value;
    const design = document.getElementById('resumeDesign').value;

    localStorage.setItem('resumeData', JSON.stringify({
      fullName,
      contact,
      location,
      jobTitle,
      companyName,
      workDescription,
      degree,
      university,
      eduDuration,
      educationDescription,
      projectTitle,
      projectDescription,
      projectLink,
      certificationTitle,
      certificationIssuer,
      certificationDate,
      skills,
      design
    }));

    window.location.href = 'resume.html';
  });
});
