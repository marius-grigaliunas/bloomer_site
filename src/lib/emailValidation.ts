/**
 * Email validation utility functions
 */

// Common disposable email domains to prevent fake signups
const DISPOSABLE_EMAIL_DOMAINS = [
  '10minutemail.com',
  'tempmail.org',
  'guerrillamail.com',
  'mailinator.com',
  'temp-mail.org',
  'throwaway.email',
  'getnada.com',
  'maildrop.cc',
  'sharklasers.com',
  'guerrillamailblock.com',
  'pokemail.net',
  'spam4.me',
  'bccto.me',
  'chacuo.net',
  'dispostable.com',
  'mailnesia.com',
  'mailcatch.com',
  'inboxalias.com',
  'mailmetrash.com',
  'trashmail.net',
  'trashmail.com',
  'mytrashmail.com',
  'tempinbox.com',
  'temp-mail.org',
  'yopmail.com',
  'yopmail.net',
  'yopmail.fr',
  'cool.fr.nf',
  'jetable.fr.nf',
  'nospam.ze.tc',
  'nomail.xl.cx',
  'mega.zik.dj',
  'speed.1s.fr',
  'courriel.fr.nf',
  'moncourrier.fr.nf',
  'monemail.fr.nf',
  'monmail.fr.nf',
  'test.com',
  'example.com',
  'example.org',
  'example.net'
];

export interface EmailValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates email format using a comprehensive regex pattern
 */
export function isValidEmailFormat(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

/**
 * Checks if email domain is from a disposable email service
 */
export function isDisposableEmail(email: string): boolean {
  const domain = email.split('@')[1]?.toLowerCase();
  return domain ? DISPOSABLE_EMAIL_DOMAINS.includes(domain) : false;
}

/**
 * Checks for common typos in popular email domains
 */
export function hasCommonTypo(email: string): { hasTypo: boolean; suggestion?: string } {
  const domain = email.split('@')[1]?.toLowerCase();
  
  const commonTypos: Record<string, string> = {
    'gmial.com': 'gmail.com',
    'gmail.co': 'gmail.com',
    'gmail.cm': 'gmail.com',
    'gmai.com': 'gmail.com',
    'gmail.om': 'gmail.com',
    'yahooo.com': 'yahoo.com',
    'yahoo.co': 'yahoo.com',
    'yaho.com': 'yahoo.com',
    'hotmial.com': 'hotmail.com',
    'hotmail.co': 'hotmail.com',
    'hotmai.com': 'hotmail.com',
    'outlok.com': 'outlook.com',
    'outlook.co': 'outlook.com',
    'outloo.com': 'outlook.com',
    'icloud.co': 'icloud.com',
    'icloud.cm': 'icloud.com',
    'protonmai.com': 'protonmail.com',
    'protonmail.co': 'protonmail.com'
  };

  if (domain && commonTypos[domain]) {
    return { hasTypo: true, suggestion: email.replace(domain, commonTypos[domain]) };
  }

  return { hasTypo: false };
}

/**
 * Comprehensive email validation
 */
export function validateEmail(email: string): EmailValidationResult {
  // Trim whitespace
  const trimmedEmail = email.trim();

  // Check if empty
  if (!trimmedEmail) {
    return { isValid: false, error: 'Email is required' };
  }

  // Check format
  if (!isValidEmailFormat(trimmedEmail)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  // Check for disposable emails
  if (isDisposableEmail(trimmedEmail)) {
    return { isValid: false, error: 'Please use a permanent email address' };
  }

  // Check for common typos
  const typoCheck = hasCommonTypo(trimmedEmail);
  if (typoCheck.hasTypo) {
    return { 
      isValid: false, 
      error: `Did you mean ${typoCheck.suggestion}?` 
    };
  }

  // Check length (RFC 5321 limit)
  if (trimmedEmail.length > 254) {
    return { isValid: false, error: 'Email address is too long' };
  }

  // Check local part length (before @)
  const localPart = trimmedEmail.split('@')[0];
  if (localPart.length > 64) {
    return { isValid: false, error: 'Email address is too long' };
  }

  return { isValid: true };
}

/**
 * Real-time validation for form inputs
 */
export function getEmailValidationMessage(email: string): string | null {
  if (!email) return null;
  
  const result = validateEmail(email);
  return result.isValid ? null : result.error || null;
}
