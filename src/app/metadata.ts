import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Miso Ramen',
  description: 'A culinary journey to Japan',
}

export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === 'development') {
    console.log({
      name: metric.name,
      value: metric.value,
      id: metric.id,
    })
  }
} 