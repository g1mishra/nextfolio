# 🚀 Nextfolio - Customizable Developer Portfolio

A modern, fully customizable developer portfolio built with Next.js 13, TypeScript, and Tailwind CSS. Features a unique VS Code-inspired design with an interactive code showcase, blog integration, and complete project showcase. This website showcases projects and skills in a modern, lightweight setup, built entirely using Next.js, Tailwind CSS, and local configuration.

[![Next.js](https://img.shields.io/badge/Next.js-13-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)](https://tailwindcss.com/)
[![JSON Config](https://img.shields.io/badge/Configuration-JSON-blue)](https://www.json.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## About

This repository is a fully customizable developer portfolio template designed for open source use. It allows developers to showcase their skills, experience, and projects in a sleek, VS Code-themed interface without needing a complex backend or database setup.

## ✨ Features

- 🎨 **VS Code-Inspired Design** - Clean, modern developer-friendly interfaceHere are some of the features of this portfolio website:

- 💻 **Interactive Code Showcase** - Syntax-highlighted code samples on the homepage

- 📝 **Integrated Blog** - Write posts in Markdown with syntax highlighting- Home page with a brief introduction and links to my social media profiles.

- 💼 **Project Showcase** - Display your work with GitHub integration- Projects page with a list of some of my recent projects, including descriptions, technologies used, and live links (where available).

- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile- Skills page with a list of my technical skills and proficiency levels.

- ⚡ **Fast & Optimized** - Built with Next.js 13 App Router- Contact page with a simple form for visitors to send me a message or inquiry.

- 🎯 **100% Customizable** - Configure everything via a single JSON file

- 🔍 **SEO Optimized** - Built-in metadata and OpenGraph support## Installation

- 📧 **Contact Form** - Integrated email functionality

To run this website locally on your machine, you will need to follow these steps:

### 🎯 Quick Start

Clone this repository to your local machine.

```bash
git clone https://github.com/g1mishra/nextfolio.git
```

### 2. Install Dependencies

If you have any feedback or suggestions for improvement, feel free to open an issue or pull request on this repository. I welcome any contributions or collaborations from the community, and I am always looking for ways to improve my skills and projects.

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. Configure Your Portfolio

**This is the most important step!** Copy the example configuration file:

```bash
cp portfolio.example.json portfolio.json
```

Edit `portfolio.json` with your information. This single file controls all the content on your portfolio!

### 4. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# App URL (optional - defaults to nextfolio.vercel.app)
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_BLOG_URL=https://blog.yourdomain.com

# Email Configuration (optional - for Gmail SMTP contact form)
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-app-specific-password

# GitHub Gist ID (optional - falls back to local dynamic snippet)
GIST_ID=your-gist-id
```

### 5. Run Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) to see your portfolio!

## 📝 Configuration Guide

All portfolio content is configured through the `portfolio.json` file. Here's a complete breakdown:

### 🧑‍💼 Personal Information

```json
{
  "name": "Your Name",
  "username": "yourusername",
  "tagline": "Full stack web developer, content creator",
  "bio": "Your detailed bio (displays on About page)...",
  "location": "Your Country",
  "yearsOfExperience": "5"
}
```

### 🔍 SEO Settings

```json
{
  "seo": {
    "title": "Your Name - Your Professional Title",
    "description": "Your meta description for search engines",
    "canonicalUrl": "https://yoursite.com",
    "keywords": ["keyword1", "keyword2", "keyword3"]
  }
}
```

### 🏠 Homepage Content

```json
{
  "homePage": {
    "greeting": "Hi there 👋 I am",
    "typedStrings": ["> Full-stack Developer", "> Your Specialty", "> Your Passion"],
    "githubComment": "// find it on my github page.",
    "githubLink": "https://github.com/yourusername/portfolio"
  }
}
```

### 📧 Contact Information

```json
{
  "contact": {
    "email": "your.email@example.com",
    "phone": "+1234567890",
    "availability": "Available for freelance work"
  }
}
```

### 🔗 Social Links

```json
{
  "socialLinks": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername",
    "youtube": "https://youtube.com/@yourchannel",
    "instagram": "https://instagram.com/yourusername"
  }
}
```

### 💼 Work Experience

```json
{
  "experience": [
    {
      "jobTitle": "Software Engineer",
      "companyName": "Company Name",
      "period": "Jan 2023 - Present",
      "description": "Description of your role and technologies used..."
    }
  ]
}
```

### 🎓 Education

```json
{
  "education": [
    {
      "degree": "Bachelor of Computer Science",
      "university": "University Name",
      "period": "2018 - 2022",
      "description": "Brief description of your education..."
    }
  ]
}
```

### 🛠️ Skills

```json
{
  "skills": [
    {
      "name": "JavaScript",
      "iconClassName": "devicon-javascript-plain"
    },
    {
      "name": "React",
      "iconClassName": "devicon-react-plain"
    }
  ]
}
```

**Finding Icon Class Names:**
Skills use [Devicon](https://devicon.dev/) for icons. To find the right class name:

1. Visit [devicon.dev](https://devicon.dev/)
2. Search for your technology
3. Copy the class name (e.g., `devicon-javascript-plain`)

### 🎨 GitHub Gist Integration

```json
{
  "gist": {
    "username": "yourgithubusername"
  }
}
```

## 📁 Project Structure

```
nextfolio/
├── app/                    # Next.js 13 App Router
│   ├── about-me/          # About page
│   ├── blog/              # Blog pages
│   ├── contact-me/        # Contact page
│   ├── projects/          # Projects showcase
│   └── api/               # API routes (contact form)
├── components/            # React components
│   ├── about-me/         # About page components
│   ├── contact-me/       # Contact page components
│   ├── footer/           # Footer component
│   └── navbar/           # Navigation components
├── lib/                   # Utility functions
│   ├── config.ts         # Configuration loader
│   ├── constants.tsx     # Exported constants
│   └── common.ts         # Common utilities
├── posts/                # Blog posts (Markdown files)
├── public/               # Static assets
├── types/                # TypeScript type definitions
├── portfolio.json        # 🎯 YOUR PORTFOLIO DATA
└── portfolio.example.json # Example configuration template
```

## 📝 Adding Blog Posts

Create Markdown files in the `posts/` directory:

```markdown
---
title: 'Your Awesome Blog Post'
date: '2024-01-15'
excerpt: 'A brief description of your post'
author: 'Your Name'
---

Your blog content here with **Markdown** support!

### Code Example

\`\`\`javascript
console.log('Hello, World!');
\`\`\`
```

Blog posts automatically appear on the `/blog` page.

## 🎨 Customizing Styles

The portfolio uses Tailwind CSS. Customize theme in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
        // Add your custom colors
      },
    },
  },
};
```

## 📧 Setting Up the Contact Form

The contact form uses Gmail SMTP. Here's how to set it up:

### Step 1: Enable 2-Step Verification

1. Go to your Google Account settings
2. Enable [2-Step Verification](https://myaccount.google.com/security)

### Step 2: Generate App Password

1. Visit [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Other (Custom name)"
3. Copy the 16-digit password

### Step 3: Add to Environment Variables

```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-16-digit-app-password
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/g1mishra/nextfolio)

**Manual deployment:**

1. Push your code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables
5. Deploy!

### Other Platforms

Compatible with any Next.js hosting:

- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**
- **Cloudflare Pages**

## 🎯 Customization Tips

### Changing Colors

Edit `styles/globals.css` or `tailwind.config.js` to change the color scheme.

### Adding New Pages

Create new routes in the `app/` directory following Next.js 13 conventions.

### Modifying Components

All components are in the `components/` directory. They're well-organized by feature.

### Adding Projects

Projects are managed directly inside your configuration file under the `projects` key:

1. Open `portfolio.json`
2. Add your project to the `projects` array following the structure in `portfolio.example.json`
3. Save the file, and changes will be updated automatically!

## 🐛 Troubleshooting

### Port Already in Use

The default port is 3001. If it's in use, change it in `package.json`:

```json
"dev": "next dev -p 3002"
```

### Email Not Sending

- Verify Gmail credentials in `.env.local`
- Check if 2-Step Verification is enabled
- Ensure App Password is correct (not your regular password)

### Icons Not Showing

- Verify internet connection (Devicon loads from CDN)
- Check icon class names at [devicon.dev](https://devicon.dev/)

## 🤝 Contributing

Contributions make the open-source community amazing! Any contributions are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- Design inspired by VS Code
- Icons from [Devicon](https://devicon.dev/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

## 💬 Support & Contact

Need help or have questions?

- 📧 Email: [your.email@example.com](mailto:your.email@example.com)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/nextfolio/issues)
- 💼 LinkedIn: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- 🐦 Twitter: [@yourusername](https://twitter.com/yourusername)

## ⭐ Show Your Support

If you found this project helpful, please consider:

- Giving it a ⭐️ on GitHub
- Sharing it with others
- Contributing to make it better

---

**Made with ❤️ for the developer community**

Happy coding! 🚀
