

## Personal Portfolio Website for Researcher-Practitioner

### Design System
- **Fonts**: Inter (body/UI) + Playfair Display (headings) via Google Fonts
- **Colors**: Nordic theme — off-white background (#F8FAFC), slate-900 text (#1E293B), deep navy accent (#0F172A)
- **Spacing**: Generous whitespace with py-24, gap-12 throughout

### Interactive Elements
- Hover effects on research cards (scale 1.02, soft shadow transition)
- Staggered fade-in-up animations on page load using CSS transitions with animation delays
- Navbar with underline reveal on hover and scroll-based active state highlighting
- Button press effect (scale 0.98) for tactile feedback

### Pages

**1. Home/Landing**
- Clean hero with name, professional tagline, and brief summary
- "View Research" CTA button
- Subtle animated entrance for hero content

**2. Research**
- Grid of research project cards
- Each card: title, short abstract, keyword tags (as badges), and links to Paper PDF / Project Site
- Hover micro-interactions on cards

**3. Resume/CV**
- Web-rendered CV with sections: Experience, Education, Skills, Publications
- Timeline-style layout for experience/education
- "Download PDF" button at top

**4. Contact**
- Clean contact form (name, email, message)
- Professional profile links: GitHub, LinkedIn, Google Scholar with icons
- Form validation with user feedback

### Layout & Navigation
- Sticky top navbar with smooth scroll navigation between pages (using React Router)
- Mobile-responsive hamburger menu
- Footer with social links and copyright
- All pages share a consistent layout wrapper

### Technical Details
- Tailwind CSS with custom color variables matching the Nordic palette
- Lucide React icons throughout
- Fully mobile-responsive design
- Sample/placeholder content for all sections ready to be customized

