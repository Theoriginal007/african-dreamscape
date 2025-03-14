
# African Civilization and Academic Journey Website

Welcome to Laura Gachanja's personal academic website! This project showcases Laura's studies in African Civilization alongside her computer science journey.

## Table of Contents
- [Introduction](#introduction)
- [Website Overview](#website-overview)
- [Pages and Content](#pages-and-content)
- [Making Changes](#making-changes)
  - [Simple Text Changes](#simple-text-changes)
  - [Image Changes](#image-changes)
  - [Layout Changes](#layout-changes)
  - [Video Changes](#video-changes)
- [Technical Details](#technical-details)
- [Getting Help](#getting-help)

## Introduction

This website serves as an e-profile for Laura Gachanja, highlighting her academic journey studying the Foundations of African Civilization while pursuing a computer science degree. The site is designed to be visually appealing, informative, and easy to navigate.

## Website Overview

The website consists of four main pages:
1. **Home** - The landing page with an overview of Laura's academic focus
2. **Course Details** - Information about the Foundations of African Civilization course
3. **Personal Journey** - Laura's background as a computer science student
4. **Aspirations** - Laura's career goals and vision for the future

Each page has a consistent design with a navigation menu at the top, allowing visitors to easily move between sections.

## Pages and Content

### Home Page
The home page features:
- A hero section with Laura's introduction
- Three clickable cards linking to different sections of the website
- Course highlights with images and descriptions
- Featured videos about African history

### Course Details Page
This page includes:
- Information about Hegel's views on Africa
- Details about the Songhai Empire
- Content about European colonization of Africa
- Interactive elements and images

### Personal Journey Page
This page contains:
- Laura's profile information
- Technical skills visualization
- Academic background
- Personal story about combining technology and cultural studies

### Aspirations Page
This page showcases:
- Career aspirations with focus on companies like Microsoft and Google
- Entrepreneurial vision for establishing a tech firm
- Technology focus areas
- Personal growth goals

## Making Changes

### Simple Text Changes

To change text on the website, you'll need to edit the appropriate file for the page you want to modify. Here's how to locate the right file:

1. **For the Home page**: Look for `src/pages/Index.tsx`
2. **For the Course Details page**: Look for `src/pages/CourseDetails.tsx`
3. **For the Personal Journey page**: Look for `src/pages/PersonalJourney.tsx`
4. **For the Aspirations page**: Look for `src/pages/Aspirations.tsx`

Within these files, look for the text you want to change. It will usually be inside quotes, like this:
```jsx
<h2 className="text-3xl font-bold">Welcome to My Academic Journey</h2>
```

You can modify the text inside the quotes to change what appears on the website.

### Image Changes

Images are referenced in two main ways:

1. **For local images** (stored in the project): Look for paths that start with `/lovable-uploads/` such as:
```jsx
image="/lovable-uploads/e45baccd-93e3-4f8e-8503-4f6c854e98bf.png"
```

2. **For external images** (from other websites): Look for URLs that start with "https://", such as:
```jsx
backgroundImage="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
```

To change an image:
- To use a new local image, upload it to the project and replace the path.
- To use a different external image, replace the URL with the new image URL.

### Layout Changes

Changing the layout is more complex and typically requires understanding of React and CSS. If you want to make layout changes, consider:

1. **Reordering sections**: You can cut and paste entire blocks of code to move sections up or down within a page.
2. **Adjusting spacing**: Look for classes like `mb-8` (margin-bottom 8 units) or `py-4` (padding top and bottom 4 units) and modify the numbers to change spacing.
3. **Changing colors**: Look for classes like `bg-africa-sand` or `text-africa-earth` to change background or text colors.

### Video Changes

Videos are embedded using YouTube IDs. To change a video:

1. Find the `VideoPlayer` component in the code:
```jsx
<VideoPlayer videoId="8RhXSk0avhE" title="The Songhai Empire" />
```

2. Replace the `videoId` value with the ID from the new YouTube video URL.
   - For example, in `https://youtu.be/8RhXSk0avhE?si=RYnnmjQxmQdKwCis`, the ID is `8RhXSk0avhE`

## Technical Details

This website is built with:
- **React**: A JavaScript library for building user interfaces
- **TypeScript**: A typed superset of JavaScript
- **Tailwind CSS**: A utility-first CSS framework
- **Vite**: A modern frontend build tool

The project structure follows a typical React application:
- `src/` - Contains all source code
  - `components/` - Reusable UI components
  - `pages/` - Main page components
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions

### Component Details

#### HeroSection
This component displays a full-screen hero section with a background image, title, and subtitle. It has:
- Parallax scrolling effect
- Smooth image loading with fallbacks
- Automatic visibility adjustments during scrolling

```jsx
<HeroSection 
  title="Title goes here" 
  subtitle="Your subtitle here"
  backgroundImage="your-image-url-here" 
/>
```

#### VideoPlayer
This component embeds YouTube videos with enhanced loading:
- Lazy loading (only loads when visible)
- Loading indicators
- Error handling with fallback to YouTube

```jsx
<VideoPlayer videoId="youtube-id-here" title="Video title here" />
```

#### CourseSection
This component displays course information with an image and text:
- Staggered animation on scroll
- Optimized image loading
- Responsive layout (switches from side-by-side to stacked on mobile)

```jsx
<CourseSection
  title="Section Title"
  description="Section description text here"
  image="image-url-here"
  linkTo="/page-link-here"
/>
```

## Getting Help

If you need assistance making changes to this website, consider:

1. **Finding a developer**: A web developer familiar with React and TypeScript can help make more complex changes.
2. **Learning basics**: For minor text or image changes, basic HTML knowledge might be sufficient.
3. **Using AI tools**: Tools like Lovable.dev can help you make changes through a chat interface without coding.
4. **Documentation**: React and Tailwind CSS have extensive documentation that can help with understanding the code.

## Deployment Instructions

To deploy this website:

1. **Using Lovable**:
   - Open your project in Lovable.dev
   - Click on "Share" in the top navigation
   - Select "Publish" to deploy your site
   - Your site will be live at the URL provided

2. **Using your own domain**:
   - After publishing with Lovable, go to Project Settings
   - Navigate to the Domains section
   - Follow the instructions to connect your custom domain

3. **Using GitHub Pages or other services**:
   - Build the project with `npm run build`
   - Deploy the generated files in the `dist` folder to your hosting service

Remember: Before making any changes, always back up the original files to ensure you can revert if needed!

## Troubleshooting Common Issues

### Images Not Loading
If images aren't loading:
- Check that the image path is correct
- Verify the image file exists in the specified location
- Make sure the image format is supported (JPG, PNG, WebP, SVG)

### Videos Not Playing
If videos aren't playing:
- Verify the YouTube ID is correct
- Check your internet connection
- Make sure the video is publicly available on YouTube

### Layout Issues
If the layout looks incorrect:
- Try a different browser to see if it's browser-specific
- Check on different devices (desktop, tablet, mobile)
- Inspect the CSS classes to see if they're being applied correctly

## Credits and Attribution

- Website design and implementation: [Your Name/Company]
- Images: [Attribution for any stock photos or images]
- Content: Laura Gachanja
- Built with Lovable AI
