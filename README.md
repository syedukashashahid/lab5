# Ukasha Shahid: Portfolio

A single-page portfolio built with HTML, CSS and vanilla JavaScript only. No framework, no build step.


## Files
- `index.html`: page content
- `style.css`: design (colors and fonts are at the top, in `:root`)
- `script.js`: menu, scrolling, active link, form checks
- `assets/Syed_Ukasha_Shahid_Resume.pdf`: my real CV (the Download button uses this file)
- `assets/images/ukasha-portrait.jpg`: my portrait in the hero section
- `assets/images/favicon.png`: browser tab icon (cropped from my photo)

## What is on the page
- Navigation bar with the "US" logo badge and my name, plus a "Let's Connect" button
- Hero with my portrait, a short introduction, and the buttons "Explore My Projects" and "Download My CV"
- About, Skills, Projects, Education, Strengths and Languages, Contact, and Footer
- Everything comes from your CV. 
## Notes
- The contact form checks the fields but cannot send email. A static site has no server.
  It offers an "Open in my email app" button instead. For real delivery you need a form service or a small backend.
- The project pictures are illustrations, not screenshots.
- The Manrope font loads from Google Fonts when online. Offline, a system font is used.

## Links
- Vercel link: https://lab5-three-flax.vercel.app
- GitHub Repo: https://github.com/syedukashashahid/lab5

## Prompt
Project: Build a Premium, Professional Single-Page CV Portfolio Website
Act as a senior frontend developer, UI/UX designer, and professional web designer. Your task is to design and develop a complete, modern, premium-looking personal portfolio website for Syed Ukasha Shahid, a Computer Science student at Qarshi University, Lahore, Pakistan.
I will provide my CV as a PDF. Carefully read the entire CV and use its information to create my portfolio. The CV must be the primary source of truth for all personal, educational, technical, and project information.
The final website should look professionally designed, elegant, sophisticated, and suitable for presenting to recruiters, internship providers, and potential employers.
1. Strict Technology Requirements
Use ONLY the following technologies:
•	HTML5
•	CSS3
•	Vanilla JavaScript (ES6+)
Do not use React, JSX, TypeScript, Vite, Next.js, Bootstrap, Tailwind CSS, jQuery, or any other framework or library.
Do not use a component framework or a prebuilt portfolio template.
Write the website using pure HTML, CSS, and JavaScript. Keep the code clean, well-structured, readable, maintainable, and easy to modify.
Use three main files:
•	index.html
•	style.css
•	script.js
You may include an assets folder for the supplied CV PDF, images, and other necessary local assets.
2. Website Structure: One Single, Scrollable Landing Page
The entire portfolio must be presented on ONE single webpage.
Do not create multiple pages, separate HTML pages, or different routes.
Vertical scrolling is allowed and expected. Every section should appear naturally below the previous section on the same page.
Create a smooth, continuous experience where visitors can scroll through my entire CV from the hero section to the footer.
Use a sticky or fixed navigation bar with anchor links that scroll to the relevant sections of the same webpage.
The navigation links must never open separate pages for About, Skills, Projects, Education, or Contact.
The website should feel like a complete online version of my CV, enhanced with a premium portfolio design.
3. Visual Design Direction
Create a premium, modern, elegant, minimal, and professional developer portfolio.
The design must feel custom-designed rather than like a basic student template.
The visual quality should be comparable to a polished portfolio designed by an experienced UI/UX designer.
Design characteristics
•	Sophisticated typography.
•	Excellent spacing and alignment.
•	Strong visual hierarchy.
•	Clean, balanced layouts.
•	Refined cards and section layouts.
•	Subtle borders and shadows.
•	Tasteful gradients.
•	Elegant hover effects.
•	Smooth scrolling.
•	Subtle, purposeful animations.
•	Consistent iconography.
•	Professional buttons.
•	Well-designed mobile layouts.
Recommended color palette
Use a cohesive color system based on:
•	Deep navy or charcoal.
•	White or soft off-white.
•	A restrained electric blue, cyan, or violet accent.
•	Muted gray for secondary text.
•	Subtle borders that complement the background.
You may choose either a sophisticated dark theme or a polished light theme, provided the result looks premium and professional.
Do not combine too many unrelated colors.
Typography
Use a modern sans-serif font such as Inter, Manrope, or Plus Jakarta Sans. If using an external font, provide a sensible system-font fallback.
Use appropriate font sizes, line heights, font weights, and letter spacing to create a professional visual hierarchy.
Avoid
•	Overused generic portfolio templates.
•	Excessive neon colors.
•	Too many gradients.
•	Excessive glassmorphism.
•	Cartoonish graphics.
•	Unnecessary animations.
•	Cluttered layouts.
•	Giant decorative elements that distract from the content.
•	Fake achievements or statistics.
•	Unprofessional colors and typography.
The design must prioritize readability, credibility, usability, and visual polish.
4. Navigation Bar
Create a premium, sticky navigation bar with the following elements:
Personal brand: Ukasha Shahid or US.
Navigation links:
•	Home
•	About
•	Skills
•	Projects
•	Education
•	Contact
Include a tasteful Let's Connect button that scrolls to the Contact section.
Requirements:
•	Use smooth same-page navigation.
•	Highlight the active section when appropriate.
•	Keep the navigation visually clean.
•	Add a subtle background or shadow effect when scrolling.
•	Create a working hamburger menu for mobile devices.
•	Close the mobile menu after a navigation link is selected.
•	Ensure the navbar does not cover section headings when navigating.
•	Make all navigation elements keyboard-accessible.
All links must point to section IDs within index.html.
5. Hero Section
Design a visually impressive first screen that immediately communicates my identity and professional direction.
Use the following information from my CV.
Name: Syed Ukasha Shahid
Professional title: Computer Science Student | Aspiring Software Developer
Location: Lahore, Pakistan
Create a concise, engaging introduction based on my career objective:
"I am a BS Computer Science student at Qarshi University with a foundation in programming, object-oriented design, and database systems. I am seeking opportunities to apply my skills to real-world projects and continue growing as a software developer."
You may improve the wording while preserving the original meaning and accurately representing my experience level.
Hero layout
Use a sophisticated two-column layout on desktop:
•	Left: introduction, name, title, short description, and CTA buttons.
•	Right: an elegant profile visual, refined personal-brand graphic, or developer-themed composition.
On mobile, stack the content naturally.
Buttons
Include:
1.	Explore My Projects — scrolls to the Projects section.
2.	Download My CV — downloads the actual PDF supplied with the project.
Use tasteful hover effects and clear focus states.
Do not invent professional experience, client numbers, years of experience, GitHub stars, or completed-project statistics.
Do not use a random person's photograph as my profile picture. If no genuine profile photo is supplied, use a professional abstract visual or a designed initials-based profile element.
6. About Me Section
Create a well-designed About Me section that presents my educational background, interests, technical foundation, and career objective.
Use the CV to describe me as a Computer Science student developing practical programming and software development skills.
Keep the language authentic and professional.
The section should communicate that I am interested in applying my knowledge to real-world software development projects and pursuing internship or entry-level opportunities.
Use an attractive layout with readable text, appropriate spacing, and a subtle visual element.
Do not invent personal stories, professional experience, certifications, awards, or achievements.
7. Technical Skills Section
Present all technical skills from my CV in a well-organized, visually appealing layout.
Categorize them clearly instead of displaying one long list.
Programming and Web Technologies
•	C
•	C++
•	Java
•	Python
•	SQL
•	HTML
•	CSS
Computer Science Concepts
•	Object-Oriented Programming (OOP)
•	Data Structures and Algorithms (DSA)
•	Database Management Systems (DBMS)
•	Operating Systems
Tools and Technologies
•	Java Swing
•	NetBeans
•	MySQL
•	Microsoft Office
Design requirements
•	Use clean skill cards, grouped lists, or elegant tags.
•	Keep the layout consistent.
•	Use subtle icons only when appropriate.
•	Make every skill easy to identify.
•	Ensure the section is responsive.
Do not assign fake proficiency percentages, skill ratings, or unsupported labels such as expert, advanced, or professional.
Do not add technologies that are absent from my CV.
8. Academic Projects Section
Create a premium Projects section featuring my two academic projects.
Present each project as a professional case study with a clear title, description, technology tags, key features, and an attractive visual.
Use the project information from my CV without inventing additional functionality.
Project 1: Bus Management System
Technologies: Java Swing, Object-Oriented Programming, NetBeans.
Description:
A desktop application developed to manage bus operations, including route scheduling, ticket booking, digital passes, bus allocation, and staff and feedback management.
Key features to present
•	Route scheduling.
•	Ticket booking.
•	Digital passes.
•	Bus allocation.
•	Staff management.
•	Feedback management.
Create a professional project card with a relevant desktop-application mockup or abstract visual.
Project 2: Shineo — Maid Finder Website
Technologies: HTML5 and CSS3.
Description:
A web platform designed to connect users with nearby domestic service providers through a clean, easy-to-use interface.
Create an attractive website mockup or an illustrative project visual that fits the premium design.
Project card requirements
Each project should include:
•	Project name.
•	Concise overview.
•	Technologies used.
•	Key features or purpose.
•	A professional visual.
•	A GitHub or Live Demo link only when I provide the actual URL.
If the original project screenshots are unavailable, use clearly illustrative mockups rather than claiming that they are actual screenshots of the finished projects.
Do not invent repository URLs, live websites, additional features, project metrics, or user statistics.
Make the project section easy to expand with additional projects in the future.
9. Education Section
Create an elegant education section using a clean vertical timeline or professional education cards.
Include every educational qualification from my CV.
Bachelor of Science in Computer Science
•	Institution: Qarshi University.
•	Current status: Currently in the 5th semester.
•	Expected completion: 2028.
Intermediate (ICS / Pre-Engineering)
•	Institution: Punjab Group of Colleges.
•	Year: 2024.
Matriculation
•	Institution: Nishat Boys High School.
•	Year: 2022.
Clearly distinguish my ongoing degree from my completed qualifications.
Use appropriate visual indicators and a consistent layout.
Do not invent CGPA, grades, scholarships, awards, or academic achievements.
10. Strengths and Languages
Include a visually appealing section for the personal strengths listed in my CV.
Strengths
•	Problem Solving.
•	Analytical Thinking.
•	Quick Learner.
•	Communication.
•	Teamwork.
•	Time Management.
Languages
•	English.
•	Urdu.
Use subtle tags, compact cards, or a simple two-column layout.
Keep this section professional and visually consistent with the rest of the website.
11. Contact Section
Create an elegant Contact section encouraging recruiters, internship providers, and potential collaborators to get in touch.
Use the exact contact details from my CV:
•	Email: u128413@gmail.com
•	Phone: +92 309 5236098
•	Location: Lahore, Pakistan
Contact functionality
Implement:
•	A clickable email address using mailto:.
•	A clickable phone number using tel:.
•	A contact form containing Name, Email, Subject, and Message fields.
•	Required-field validation.
•	Basic email-format validation.
•	Clear validation and submission feedback.
Important: Do not pretend that the form sends emails when no backend or email service exists.
If no backend is configured, provide honest feedback and explain what is needed for actual message delivery. Keep the frontend fully functional for validation without fabricating successful submissions.
Do not invent LinkedIn, GitHub, or other social-media profile URLs. Include these links only when I provide them.
12. Footer
Design a clean, minimal, premium footer.
Include:
•	My name or personal brand.
•	A short professional tagline.
•	Navigation links to sections on the same page.
•	A dynamically generated current year.
•	A back-to-top button.
Keep the footer visually consistent with the entire website.
13. JavaScript Functionality
Use vanilla JavaScript only.
Implement the following functionality where appropriate:
•	Mobile hamburger menu.
•	Opening and closing the mobile navigation.
•	Smooth scrolling to sections.
•	Active navigation highlighting.
•	Scroll-based navbar styling.
•	Back-to-top functionality.
•	Contact form validation.
•	Clear interaction feedback.
•	Subtle scroll-reveal animations, if needed.
Use modern browser APIs where appropriate, but do not introduce unnecessary complexity.
Respect the user's reduced-motion preferences.
Avoid adding JavaScript functionality simply for decoration.
All buttons and interactive elements must perform their advertised actions.
14. Responsive Design
The website must work correctly on:
•	Desktop computers.
•	Laptops.
•	Tablets.
•	Mobile phones.
Use CSS Grid, Flexbox, media queries, fluid sizing, and responsive typography.
Ensure that:
•	Text remains readable on small screens.
•	Project cards stack correctly.
•	The navbar works on mobile.
•	Buttons remain usable.
•	Images do not overflow their containers.
•	No horizontal scrolling appears accidentally.
•	Section spacing remains balanced.
•	Contact details remain easy to access.
•	The website looks intentional at different viewport sizes.
Use a mobile-first approach where practical.
15. Accessibility and Semantic HTML
Follow good HTML5 and accessibility practices.
Use appropriate semantic elements such as:
•	header
•	nav
•	main
•	section
•	article
•	footer
Include:
•	A proper heading hierarchy.
•	Accessible labels for form fields.
•	Meaningful image alt text.
•	Keyboard-accessible controls.
•	Visible focus indicators.
•	Sufficient color contrast.
•	Appropriate button labels.
•	A skip-to-content link.
•	Reduced-motion support.
Do not rely on color alone to communicate information.
16. CV PDF Download
Use the actual CV PDF I provide.
Place it in the project directory, for example:
assets/Syed_Ukasha_Shahid_Resume.pdf
Connect the Download My CV button to this exact file.
The button must download the real supplied PDF and must not link to a nonexistent file.
Use the correct relative path and verify that the download works when the website is opened locally.
Do not recreate, alter, or replace my CV with a fabricated document.
17. SEO and Performance
Include:
•	A meaningful page title.
•	A relevant meta description.
•	Appropriate viewport metadata.
•	Character encoding.
•	Open Graph metadata.
•	A favicon or simple personal-brand icon, if practical.
•	Optimized images.
•	Clean CSS and JavaScript.
•	Efficient rendering.
•	No unnecessary dependencies.
Suggested page title:
Syed Ukasha Shahid | Computer Science Student & Software Developer
Suggested meta description:
Explore the portfolio of Syed Ukasha Shahid, a Computer Science student at Qarshi University showcasing technical skills, academic projects, and software development interests.
Ensure the website loads efficiently and does not contain unnecessary scripts.
18. Required Project Files
Provide the complete project with this structure:
ukasha-portfolio/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── Syed_Ukasha_Shahid_Resume.pdf
    └── images/
You may add local assets when genuinely necessary, but do not introduce frontend frameworks or libraries.
Keep HTML, CSS, and JavaScript in their respective files.
The HTML should reference the stylesheet and script correctly.
Use appropriate script loading so that JavaScript does not interfere with the initial page rendering.
19. Code Quality and Verification
Provide complete working code for all required files.
Do not provide incomplete snippets, pseudocode, or essential features marked as TODO.
Before finishing:
•	Check the HTML structure.
•	Verify all section IDs and navigation links.
•	Check all asset paths.
•	Verify the CV download link.
•	Test the mobile navigation.
•	Check the contact form's validation.
•	Review responsive layouts.
•	Check browser-console errors where possible.
•	Confirm that no React, JSX, or frontend framework has been used.
•	Confirm that all CV information is represented accurately.
Do not claim that something has been tested unless it has actually been tested.
20. Final Deliverables
Provide:
1.	Complete index.html.
2.	Complete style.css.
3.	Complete script.js.
4.	The actual supplied CV PDF in the correct assets directory.
5.	Any necessary local image assets.
6.	Simple instructions for running the website locally.
7.	A brief README or setup guide.
8.	A list of any missing information, such as social-media URLs or a profile photograph.
9.	A summary of tested functionality and any features requiring an external service.
The website must be ready to open in a browser without requiring a framework installation or build process.
FINAL NON-NEGOTIABLE INSTRUCTIONS
•	Use ONLY HTML5, CSS3, and vanilla JavaScript.
•	Do not use React, JSX, Vite, Bootstrap, Tailwind CSS, or any other frontend framework.
•	Build ONE single-page portfolio website.
•	Vertical scrolling is allowed and expected.
•	Include the complete, accurate information from my supplied CV.
•	Use the actual CV PDF for the download button.
•	Maintain a premium, professional, modern, and elegant visual style.
•	Ensure the design is responsive and accessible.
•	Make the buttons, navigation, and JavaScript functionality work correctly.
•	Never invent personal details, achievements, qualifications, project links, or work experience.
The final result should be a premium, recruiter-ready, single-page portfolio website that presents my complete CV in a visually impressive and professional way, using only HTML5, CSS3, and vanilla JavaScript.


