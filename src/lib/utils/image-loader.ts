type ImageLoaderProps = {
  src: string
  width: number
  quality?: number
}

export function imageLoader({ src, width, quality = 75 }: ImageLoaderProps): string {
  // If the image is from an external URL (e.g., Supabase storage), return it as is
  if (src.startsWith('http')) {
    return src
  }

  // For local images, we can implement custom image optimization logic
  // This is a basic example - you might want to use a proper image optimization service
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`
}

export function getImagePlaceholder(): string {
  return 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
} 