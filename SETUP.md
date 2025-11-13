# 🚀 Setup Guide - Make This Portfolio Yours!

This guide will walk you through customizing this portfolio in just **5 minutes**!

## ⚡ Quick Setup (5 Minutes)

### Step 1: Install Dependencies (1 minute)

```bash
pnpm install
# or npm install
# or yarn install
```

### Step 2: Create Your Configuration (2 minutes)

Copy the example configuration:

```bash
cp portfolio.example.json portfolio.json
```

### Step 3: Edit Your Information (2 minutes)

Open `portfolio.json` and update:

**Required Fields:**
- `name` - Your full name
- `username` - Your GitHub/social media username
- `tagline` - Your professional title
- `bio` - About yourself (2-3 sentences)
- `contact.email` - Your email address
- `socialLinks` - Your social media profiles

**Example:**
```json
{
  "name": "Jane Doe",
  "username": "janedoe",
  "tagline": "Full Stack Developer & Open Source Enthusiast",
  "bio": "Passionate developer with 5 years of experience building scalable web applications...",
  "contact": {
    "email": "jane@example.com"
  },
  "socialLinks": {
    "github": "https://github.com/janedoe",
    "linkedin": "https://linkedin.com/in/janedoe"
  }
}
```

### Step 4: Run Your Portfolio

```bash
pnpm dev
```

Visit `http://localhost:3001` - **You're live!** 🎉

---

## 🎨 Detailed Customization

### 📝 Personal Information

Update these fields in `portfolio.json`:

```json
{
  "name": "Your Full Name",
  "username": "yourhandle",
  "tagline": "Your Professional Title",
  "bio": "Detailed bio that appears on the About page. Talk about your experience, passions, and what drives you as a developer.",
  "location": "City, Country",
  "yearsOfExperience": "5"
}
```

### 🔍 SEO Configuration

Optimize for search engines:

```json
{
  "seo": {
    "title": "Your Name - Your Title",
    "description": "Brief description for search results (150-160 characters)",
    "canonicalUrl": "https://yourdomain.com",
    "keywords": ["web developer", "react", "nextjs", "your skills"]
  }
}
```

### 🏠 Homepage Customization

Personalize your landing page:

```json
{
  "homePage": {
    "greeting": "Hi there 👋 I am",
    "typedStrings": [
      "> Full-stack Developer",
      "> Open Source Contributor",
      "> Tech Blogger"
    ],
    "githubComment": "// check out my code",
    "githubLink": "https://github.com/yourusername/yourrepo"
  }
}
```

### 💼 Add Your Work Experience

List your professional experience:

```json
{
  "experience": [
    {
      "jobTitle": "Senior Software Engineer",
      "companyName": "Tech Company Inc",
      "period": "Jan 2022 - Present",
      "description": "Led development of microservices architecture serving 1M+ users. Technologies: React, Node.js, AWS, Docker."
    },
    {
      "jobTitle": "Full Stack Developer",
      "companyName": "Startup XYZ",
      "period": "Jun 2020 - Dec 2021",
      "description": "Built and maintained 5+ web applications. Tech stack: Vue.js, Python, PostgreSQL."
    }
  ]
}
```

### 🎓 Add Your Education

```json
{
  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "university": "University of Technology",
      "period": "2016 - 2020",
      "description": "Graduated with honors. Focus on software engineering and algorithms."
    }
  ]
}
```

### 🛠️ Add Your Skills

Add skills with icons from [Devicon](https://devicon.dev/):

```json
{
  "skills": [
    { "name": "JavaScript", "iconClassName": "devicon-javascript-plain" },
    { "name": "TypeScript", "iconClassName": "devicon-typescript-plain" },
    { "name": "React", "iconClassName": "devicon-react-original" },
    { "name": "Next.js", "iconClassName": "devicon-nextjs-plain" },
    { "name": "Node.js", "iconClassName": "devicon-nodejs-plain" },
    { "name": "Python", "iconClassName": "devicon-python-plain" },
    { "name": "Docker", "iconClassName": "devicon-docker-plain" },
    { "name": "Git", "iconClassName": "devicon-git-plain" }
  ]
}
```

**Finding Icons:**
1. Visit [devicon.dev](https://devicon.dev/)
2. Search for your technology
3. Click to copy the class name
4. Paste into `iconClassName`

---

## 📧 Setup Contact Form

### Gmail Setup (Recommended)

**Step 1:** Enable 2-Step Verification
- Go to [Google Account Security](https://myaccount.google.com/security)
- Turn on 2-Step Verification

**Step 2:** Create App Password
- Visit [App Passwords](https://myaccount.google.com/apppasswords)
- Select "Mail" and "Other (Custom name)"
- Enter "Portfolio Contact Form"
- Click "Generate"
- Copy the 16-character password

**Step 3:** Create `.env.local`
```env
GMAIL_USER=your.email@gmail.com
GMAIL_PASSWORD=abcd efgh ijkl mnop  # Your 16-digit app password
```

**Step 4:** Test it!
- Run `pnpm dev`
- Go to Contact page
- Send yourself a test message

### Alternative Email Services

**SendGrid:**
```env
SENDGRID_API_KEY=your-api-key
```

**Mailgun:**
```env
MAILGUN_API_KEY=your-api-key
MAILGUN_DOMAIN=your-domain
```

---

## 📝 Add Blog Posts

Create Markdown files in `posts/` folder:

**File:** `posts/my-first-post.md`
```markdown
---
title: "Getting Started with Next.js"
date: "2024-01-15"
excerpt: "Learn how to build modern web apps with Next.js 13"
tags: ["nextjs", "react", "web development"]
---

# Getting Started with Next.js

Next.js is an amazing framework...

## Key Features

- Server-side rendering
- API routes
- File-based routing

\`\`\`javascript
// Example code
export default function Home() {
  return <h1>Hello, Next.js!</h1>
}
\`\`\`
```

Posts automatically appear on `/blog` page!

---

## 🎨 Customize Styling

### Colors

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      }
    }
  }
}
```

### Fonts

Edit `app/layout.tsx`:

```typescript
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

---

## 🚀 Deploy Your Portfolio

### Option 1: Vercel (Easiest)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables:
   - `GMAIL_USER`
   - `GMAIL_PASSWORD`
6. Click "Deploy"

**Done!** Your portfolio is live at `yourproject.vercel.app`

### Option 2: Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git"
4. Connect repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables
7. Deploy!

### Option 3: Custom Domain

After deploying:
1. Buy a domain (Namecheap, Google Domains)
2. Add domain in Vercel/Netlify settings
3. Update DNS records
4. Wait for SSL certificate
5. Update `canonicalUrl` in `portfolio.json`

---

## ✅ Pre-Deployment Checklist

Before going live, check:

- [ ] Updated all personal info in `portfolio.json`
- [ ] Changed all social media links
- [ ] Updated email in contact section
- [ ] Added your experience and education
- [ ] Customized skills list
- [ ] Tested contact form
- [ ] Added at least one blog post
- [ ] Updated SEO metadata
- [ ] Replaced placeholder images (if any)
- [ ] Tested on mobile devices
- [ ] Set up environment variables on hosting platform

---

## 🐛 Common Issues

### "Port 3001 already in use"
Change port in `package.json`:
```json
"dev": "next dev -p 3002"
```

### "Cannot find module 'portfolio.json'"
Make sure you created `portfolio.json` from `portfolio.example.json`

### Contact form not working
- Check `.env.local` exists
- Verify Gmail app password is correct
- Make sure 2-Step Verification is enabled

### Icons not showing
- Check internet connection (icons load from CDN)
- Verify icon class names on [devicon.dev](https://devicon.dev/)

---

## 💡 Pro Tips

1. **Keep it Updated:** Regularly update your experience and projects
2. **Write Blog Posts:** Boosts SEO and shows expertise
3. **Optimize Images:** Use WebP format for faster loading
4. **Analytics:** Add Google Analytics to track visitors
5. **Backup:** Commit `portfolio.json` to a private repo
6. **Custom Domain:** Makes your portfolio look more professional

---

## 🆘 Need Help?

- 📧 Email: g1mishra.dev@gmail.com
- 💬 GitHub Issues: [Report a problem](https://github.com/g1mishra/nextfolio/issues)
- 📖 Full README: [README.md](./README.md)

---

**Congratulations!** 🎉 You now have a professional portfolio website!

Don't forget to:
- ⭐ Star this repo if you found it helpful
- 🐦 Share it with fellow developers
- 🤝 Contribute improvements

Happy coding! 🚀
