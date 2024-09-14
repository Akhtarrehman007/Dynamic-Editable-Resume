// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    event.preventDefault(); // prevent page reload
    // Collect input values
    var name = (_b = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
    var email = (_d = (_c = document.getElementById('email')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '';
    var phone = (_f = (_e = document.getElementById('phone')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : '';
    var education = (_h = (_g = document.getElementById('education')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : '';
    var experience = (_k = (_j = document.getElementById('experience')) === null || _j === void 0 ? void 0 : _j.value) !== null && _k !== void 0 ? _k : '';
    var skills = (_m = (_l = document.getElementById('skills')) === null || _l === void 0 ? void 0 : _l.value) !== null && _m !== void 0 ? _m : '';
    // Generate the resume content dynamically 
    var resumeHTML = "\n    <h2><b> Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">>").concat(skills, "</p>\n  ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
