export function validateForm(email, message) {
  if (!email.value.includes("@")) {
    return "Enter valid email";
  }

  if (message.value.trim() === "") {
    return "Message cannot be empty";
  }

  return "";
}