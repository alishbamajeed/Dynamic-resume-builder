// TypeScript code for form handling and resume generation

interface ResumeData {
    name: string;
    email: string;
    profilePic: string;
    education: string;
    work: string;
    skills: string;
  }
  
  const form = document.getElementById('resume-form') as HTMLFormElement;
  const resumeOutput = document.getElementById('resume-output') as HTMLElement; // Element to display resume
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Capture user input
    const resumeData: ResumeData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      profilePic: '', // Placeholder for image data
      education: (document.getElementById('education') as HTMLInputElement).value,
      work: (document.getElementById('work') as HTMLInputElement).value,
      skills: (document.getElementById('skills') as HTMLInputElement).value,
    };
  
    // Handle image file upload
    const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
    if (profilePicInput.files && profilePicInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (event) {
        resumeData.profilePic = event.target?.result as string; // Get image data URL
        generateResume(resumeData);
      };
      reader.readAsDataURL(profilePicInput.files[0]);
    }
  });
  
  // Function to generate resume
  function generateResume(data: ResumeData) {
    // Clear previous resume output
    resumeOutput.innerHTML = '';
  
    // Create resume section
    const resumeSection = document.createElement('div');
    resumeSection.classList.add('resume');
  
    // Fill resume content
    resumeSection.innerHTML = `
      <h1>${data.name}</h1>
      <p>Email: ${data.email}</p>
      <img src="${data.profilePic}" alt="Profile Picture" />
      <h2>Education</h2>
      <p>${data.education}</p>
      <h2>Work Experience</h2>
      <p>${data.work}</p>
      <h2>Skills</h2>
      <p>${data.skills}</p>
    `;
  
    // Append to the output container
    resumeOutput.appendChild(resumeSection);
  }
  