export function nameError(name) {
  if (typeof name !== "string") return "error-text.name-validation";
  name = name.trim();
  if (name.length < 2) return "error-text.name-validation";
  if (name.length > 30) return "error-text.name-validation";
}

export function emailError(email) {
  if (typeof email !== "string") return "error-text.email-validation";
  email = email.trim();
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email.toLowerCase().match(emailRegex)) return "error-text.email-validation";
  if (email.length > 99) return "error-text.email-validation-too-long";
}

export function phoneError(phone) {
  // TODO: make it international
  if (typeof phone !== "string") return "error-text.phone-validation";
  if (isNaN(phone)) return "error-text.phone-validation";
  if (phone.length < 10) return "error-text.phone-validation-too-short";
  if (phone.length > 10) return "error-text.phone-validation-too-long";
}

export function subjectError(subject) {
  if (typeof subject !== "string") return "error-text.subject-validation";
  subject = subject.trim();
  if (subject.length < 2) return "error-text.subject-validation";
  if (subject.length > 99) return "error-text.subject-validation";
}
