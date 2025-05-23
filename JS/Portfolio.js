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

  // Clipboard copying functionality
  function copyText(type) {
    let text = "";

    if (type === "email") {
      text = "saideepbhange11022002@gmail.com";
    } else if (type === "phone") {
      text = "+91-9594796488";
    }

    // Use the Clipboard API for copying text
    navigator.clipboard
      .writeText(text)
      .then(function () {
        alert(type === "email" ? "Email copied!" : "Phone number copied!");
      })
      .catch(function (err) {
        console.error("Failed to copy text: ", err);
      });
  }
});
