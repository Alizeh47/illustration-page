import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '../config/constants'

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validateUsername(username: string): boolean {
  const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/
  return usernameRegex.test(username)
}

export function validatePassword(password: string): boolean {
  return password.length >= 8
}

export function validateImageFile(file: File): { valid: boolean; error?: string } {
  if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
    return {
      valid: false,
      error: 'File type not supported. Please upload a JPEG, PNG, or WebP image.',
    }
  }

  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: 'File size too large. Maximum size is 5MB.',
    }
  }

  return { valid: true }
}

export function validateSlug(slug: string): boolean {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
  return slugRegex.test(slug)
} 