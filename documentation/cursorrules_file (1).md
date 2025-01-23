---  

# .cursorrules  

## Project Overview  
- **Type:** Derived from `cursorrules_file`  
- **Description:** A blog for ramen enthusiasts to showcase recipes, history, and culture. The blog highlights content by date, category, or popularity.  
- **Primary Goal:** The primary goal is to share informative and engaging content about ramen, fostering a community of enthusiasts, and exploring monetization opportunities.  

## Project Structure  
### Framework-Specific Routing  
- **Directory Rules:**  
  - `Next.js 14 (App Router)`: Utilize `app/[route]/page.tsx` conventions for routing.  
  - Example 1: "Next.js 14 (App Router)" → `app/recipes/page.tsx` for recipe routes.  

### Core Directories  
- **Versioned Structure:**  
  - `app/api`: Next.js 14 API routes with Route Handlers.  
  - `app/components`: Components for reusable UI elements, reflecting the use of Tailwind CSS and shadcn/UI.  

### Key Files  
- **Stack-Versioned Patterns:**  
  - `app/templates/layout.tsx`: Next.js 14 root layouts for consistent styling and branding.  
  - `app/posts/[id]/page.tsx`: Dynamically render blog post pages using route parameters.  

## Tech Stack Rules  
- **Version Enforcement:**  
  - `next@14`: App Router is mandatory, enforce `app/` directory structure without `pages/`.  

## PRD Compliance  
- **Non-Negotiable:**  
  - "Designed to cultivate a community of ramen lovers who can engage in enriching discussions": Must include comment functionality with user interaction being encouraged at a structural level.  

## App Flow Integration  
- **Stack-Aligned Flow:**  
  - Example: "Next.js 14 Content Flow → `app/posts/[id]/page.tsx` for individual post rendering with server-side data fetching using Supabase."  

---  

### Input Context (Priority Order):  
1. `techStackDoc` (exact versions + routing patterns)  
2. `prd` (version-dependent requirements)  
3. `appFlow` (route-to-component mapping)  
4. `answers` (e.g., "We chose App Router for RSCs")  

### Rules:  
- Derive folder/file patterns **directly** from `techStackDoc` versions.  
- If Next.js 14 App Router: Enforce `app/` directory with nested route folders.  
- If Pages Router: Use `pages/*.tsx` flat structure.  
- Mirror this logic for React Router, SvelteKit, etc.  
- Never mix version patterns (e.g., no `pages/` in App Router projects).