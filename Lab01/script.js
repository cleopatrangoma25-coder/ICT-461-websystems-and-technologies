// Course options depend on the chosen programme.
// This is the "one JavaScript interaction with an event listener"
// the lab asks for, on top of form submit validation.
const coursesByProgramme = {
  cs: [
    { value: "ict461", label: "ICT461 - Web Systems and Technology" },
    { value: "ict441", label: "ICT441 - Ethical Hacking" },
    { value: "ict390", label: "ICT390 - Industrial Attachments" }
  ],
  is: [
    { value: "is401", label: "IS401 - Enterprise Systems" },
    { value: "is410", label: "IS410 - Information Security Management" }
  ],
  se: [
    { value: "se420", label: "SE420 - Software Architecture" },
    { value: "se431", label: "SE431 - Software Quality Assurance" }
  ]
};

const programmeSelect = document.getElementById("programme");
const courseSelect = document.getElementById("course");
const form = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");

// Event listener 1: programme change repopulates the course dropdown.
programmeSelect.addEventListener("change", () => {
  const chosen = programmeSelect.value;
  courseSelect.innerHTML = "";

  if (!chosen) {
    courseSelect.disabled = true;
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select a programme first";
    courseSelect.appendChild(placeholder);
    return;
  }

  courseSelect.disabled = false;
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select a course";
  courseSelect.appendChild(placeholder);

  coursesByProgramme[chosen].forEach((course) => {
    const option = document.createElement("option");
    option.value = course.value;
    option.textContent = course.label;
    courseSelect.appendChild(option);
  });
});

// Small helper to show/clear a field-level error.
function setError(fieldId, message) {
  const errorEl = document.getElementById(`${fieldId}Error`);
  if (errorEl) {
    errorEl.textContent = message;
  }
}

function clearErrors() {
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
}

// Event listener 2: form submit runs client-side validation.
// This is a convenience check only - a real system must still
// validate on the server, because client code can be bypassed.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  clearErrors();

  let isValid = true;
  const data = new FormData(form);

  const fullName = data.get("fullName").trim();
  if (fullName.length < 2) {
    setError("fullName", "Enter your full name.");
    isValid = false;
  }

  const studentId = data.get("studentId").trim();
  if (!/^[0-9]{9}$/.test(studentId)) {
    setError("studentId", "Student ID must be exactly 9 digits.");
    isValid = false;
  }

  if (!data.get("programme")) {
    setError("programme", "Choose a programme.");
    isValid = false;
  }

  if (!data.get("course")) {
    setError("course", "Choose a course.");
    isValid = false;
  }

  if (!data.get("declaration")) {
    setError("declaration", "You must confirm your details before submitting.");
    isValid = false;
  }

  if (!isValid) {
    formMessage.textContent = "Please fix the highlighted fields.";
    formMessage.className = "form-message error";
    return;
  }

  // In a real system this is where you would fetch("/api/register", { ... }).
  // Here we just prove the interaction works end to end.
  formMessage.textContent = `Registered ${fullName} (${studentId}) for ${courseSelect.selectedOptions[0].textContent}.`;
  formMessage.className = "form-message success";
  form.reset();
  courseSelect.innerHTML = '<option value="">Select a programme first</option>';
  courseSelect.disabled = true;
});
