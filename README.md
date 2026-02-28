# Itzfizz Scroll-Driven Hero Section

This project is a high-end, production-ready Hero Section built for an Itzfizz internship assignment. It features sophisticated scroll-driven animations using GreenSock (GSAP) and a premium dark-themed visual aesthetic.


https://github.com/user-attachments/assets/c679364e-9a21-4ee5-9b23-dbb720eeb753



## 🚀 Tech Stack

- **Next.js**: App Router, static export configured.
- **Tailwind CSS v4**: Utility-first CSS styling.
- **GSAP & ScrollTrigger**: State-of-the-art performant scroll animations.
- **React**: Pure functional components with clean architecture.

## 🎯 Features

- **Initial Load Sequence**: Staggered typography entrance, smooth fade-ins and dynamic object scaling.
- **Scroll-Driven Storytelling**: The hero section pins into place while the car graphic scales/rotates, and the headline expands dramatically.
- **Impact Metrics**: 4x Grid of key stats highlighting business value.
- **Performance Optimized**: Heavy reliance on CSS transforms (`will-change: transform`), minimal component re-renders, and next/image integration.
- **High-End Design**: Deep black `#080810` paired with electric blue `#3b82f6` accents and `Inter` typography.

## 💻 How to Run Locally

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start the Development Server**

   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the result.

## 📦 Building for Production (Static Export)

To create a static build, such as for GitHub Pages:

```bash
npm run build
```

This requires that `next.config.mjs/ts` is configured with `output: 'export'`. The statically generated files will be placed in the `out/` directory.

## 🔗 Live Demo

https://welcome-scroll-animation.vercel.app/

## 🐙 Repository

_(https://github.com/abhaytiwariii/itzfizz-hero-scroll-assignment)_
