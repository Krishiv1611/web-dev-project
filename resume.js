document.addEventListener('DOMContentLoaded', function () {
  const data = JSON.parse(localStorage.getItem('resumeData'));
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `${data.design}.css`;
  document.head.appendChild(link);

  document.getElementById('rFullName').textContent = data.fullName;
  document.getElementById('rContact').textContent = `${data.contact} | ${data.location}`;
  document.getElementById('rJobTitle').textContent = data.jobTitle;
  document.getElementById('rCompanyName').textContent = data.companyName;
  document.getElementById('rWorkDescription').textContent = data.workDescription;
  document.getElementById('rDegree').textContent = data.degree;
  document.getElementById('rUniversity').textContent = `${data.university} | ${data.eduDuration}`;
  document.getElementById('rEducationDescription').textContent = data.educationDescription;
  document.getElementById('rProjectTitle').textContent = data.projectTitle;
  document.getElementById('rProjectDescription').textContent = data.projectDescription;
  const projectLink = document.getElementById('rProjectLink');
  projectLink.href = data.projectLink;
  projectLink.textContent = data.projectLink;
  document.getElementById('rCertificationTitle').textContent = data.certificationTitle;
  document.getElementById('rCertificationDetails').textContent = `Issued by: ${data.certificationIssuer} on ${data.certificationDate}`;
  const skillsList = document.getElementById('rSkills');
  skillsList.innerHTML = '';
  data.skills.split(',').forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill.trim();
    skillsList.appendChild(li);
  });

  localStorage.removeItem('resumeData');
});


