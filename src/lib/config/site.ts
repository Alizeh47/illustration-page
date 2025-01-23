export const siteConfig = {
  name: "Ramen Munching",
  description: "Discover the art and culture of ramen through recipes, stories, and nutritional insights.",
  url: process.env.NEXT_PUBLIC_SITE_URL,
  ogImage: "/images/og.jpg",
  links: {
    twitter: "https://twitter.com/ramenmunching",
    github: "https://github.com/ramenmunching",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Recipes",
      href: "/recipes",
    },
    {
      title: "Culture",
      href: "/culture",
    },
    {
      title: "Nutrition",
      href: "/nutrition",
    },
  ],
} 