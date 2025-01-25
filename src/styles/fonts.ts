import { Playfair_Display, Inter, Jolly_Lodger, Bangers } from 'next/font/google'

export const displayFont = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

export const bodyFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const jollyLodgerFont = Jolly_Lodger({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jolly-lodger',
})

export const bangersFont = Bangers({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bangers',
}) 