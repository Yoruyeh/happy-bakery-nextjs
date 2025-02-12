export function validateEmail(email: string): string | null {
  if (!email.trim()) {
    return 'Email is required';
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return 'Invalid email address';
  }
  return null;
}

export function validatePassword(password: string): string | null {
  if (!password.trim()) {
    return 'Password is required';
  } else if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }

  return null;
}

export function validatePhoneNumber(phoneNumber: string): string | null {
  const phoneRegex = /^\d{8,10}$/;
  if (!phoneNumber.trim()) {
    return 'Phone number is required';
  } else if (!phoneRegex.test(phoneNumber)) {
    return 'Invalid phone number, please enter 8 - 10 digits';
  }

  return null;
}
