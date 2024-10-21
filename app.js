// TypeScript code for form handling and resume generation
var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output'); // Element to display resume
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Capture user input
    var resumeData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        profilePic: '', // Placeholder for image data
        education: document.getElementById('education').value,
        work: document.getElementById('work').value,
        skills: document.getElementById('skills').value,
    };
    // Handle image file upload
    var profilePicInput = document.getElementById('profile-pic');
    if (profilePicInput.files && profilePicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            resumeData.profilePic = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result; // Get image data URL
            generateResume(resumeData);
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    }
});
// Function to generate resume
function generateResume(data) {
    // Clear previous resume output
    resumeOutput.innerHTML = '';
    // Create resume section
    var resumeSection = document.createElement('div');
    resumeSection.classList.add('resume');
    // Fill resume content
    resumeSection.innerHTML = "\n      <h1>".concat(data.name, "</h1>\n      <p>Email: ").concat(data.email, "</p>\n      <img src=\"").concat(data.profilePic, "\" alt=\"Profile Picture\" />\n      <h2>Education</h2>\n      <p>").concat(data.education, "</p>\n      <h2>Work Experience</h2>\n      <p>").concat(data.work, "</p>\n      <h2>Skills</h2>\n      <p>").concat(data.skills, "</p>\n    ");
    // Append to the output container
    resumeOutput.appendChild(resumeSection);
}
