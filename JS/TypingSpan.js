$(document).ready(function () {
  // Initialize Bootstrap tooltip
  $('[data-toggle="tooltip"]').tooltip();
  // Typing effect code
  const roles = [
    "Software Engineer",
    "Web Developer",
    "Tech Enthusiast",
    "Problem Solver",
  ];
  let currentRoleIndex = 0;
  let currentCharIndex = 0;
  const typingSpeed = 100; // Speed of typing effect (milliseconds)
  const erasingSpeed = 20; // Speed of erasing effect (milliseconds)
  const delayBetweenRoles = 500; // Delay between displaying roles (milliseconds)
  const typingSpan = document.getElementById("typing-span");
  if (typingSpan) {
    function typeRole() {
      if (currentCharIndex < roles[currentRoleIndex].length) {
        typingSpan.textContent +=
          roles[currentRoleIndex].charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typeRole, typingSpeed);
      } else {
        setTimeout(eraseRole, delayBetweenRoles);
      }
    }
    function eraseRole() {
      if (currentCharIndex > 0) {
        typingSpan.textContent = roles[currentRoleIndex].substring(
          0,
          currentCharIndex - 1
        );
        currentCharIndex--;
        setTimeout(eraseRole, erasingSpeed);
      } else {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Move to next role
        setTimeout(typeRole, typingSpeed);
      }
    }
    // Start typing effect
    setTimeout(typeRole, delayBetweenRoles);
  } else {
    console.error('Element with ID "typing-span" not found');
  }
});
function copyText(type) {
  if (type === "email") {
    navigator.clipboard.writeText(
      document.getElementById("email-link").innerText
    );
    alert("Email copied to clipboard!");
  } else if (type === "phone") {
    navigator.clipboard.writeText(
      document.getElementById("phone-number").innerText
    );
    alert("Phone number copied to clipboard!");
  }
}
