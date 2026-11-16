# Personal Portfolio Website — Mst. Khairun Nessa Mim

A responsive personal portfolio built with plain **HTML5, CSS3 and vanilla JavaScript** (no frameworks).
It presents my education, internship experience, skills, projects and contact information.

## Project structure

```
portfolio/
├── index.html        ← all page content (edit text here)
├── style.css         ← all design/colours (change colours at the top, in :root)
├── script.js         ← menu, animations, contact form
├── assets/
│   ├── images/       ← put profile.jpg here (your photo)
│   ├── icons/        ← any icons you add later
│   └── cv/           ← put cv.pdf here (your CV) for the Download CV button
└── README.md
```

## How to run it

**Easy way:** double-click `index.html` — it opens in your browser.

**Better way (VS Code):** open the `portfolio` folder in VS Code, install the "Live Server"
extension, right-click `index.html` → "Open with Live Server". The page reloads
automatically every time you save a change.

## How to update common things

- **Your photo:** save your photo as `assets/images/profile.jpg` (same name). Done — no code change needed.
  If the file is missing, the site shows a stylish "M" monogram instead, so it never looks broken.
- **Your CV:** save your CV as `assets/cv/cv.pdf`. The "Download CV" button in the hero section uses this file.
- **LinkedIn link:** in `index.html`, search for `TODO: replace # with your real LinkedIn profile link`
  and replace the `#` in that anchor with your profile URL.
- **A project:** copy one `<article class="project-card"> ... </article>` block in the Projects
  section, change the title, description, technologies and links. Change the status label:
  `status-planned` (Planned/Concept) or `status-progress` (In Progress). Only mark a project as
  live when it really is — add its real GitHub and Live Demo links then.
- **Colours:** in `style.css`, the `:root` block at the top holds all colours
  (`--navy`, `--purple`, etc.). Change a value once and the whole site updates.
- **Any text:** all visible text lives in `index.html`. Search for the words and edit them.

## How to deploy (free)

**GitHub Pages**
1. Create a repository (for example `portfolio`) and upload these files.
2. In the repository: Settings → Pages → Source: "Deploy from a branch", Branch: `main`, folder `/ (root)`.
3. After a minute your site is live at `https://khairunmim-dev.github.io/portfolio/`.

**Vercel**
1. Go to vercel.com, sign in with GitHub, "Add New Project", import the repository.
2. No build settings are needed for a static site — click Deploy.

## Dark / Light mode

The 🌙/☀️ button in the navigation bar switches the site between light and dark mode.
The visitor's choice is remembered in their browser. Colours for both modes live at the
top of `style.css` — the light ones in `:root`, the dark ones in `[data-theme="dark"]`.

## Receiving messages from the contact form

A static website has no database or server of its own, so messages are delivered
through a free form service. This site is already wired to **FormSubmit**
(no account or signup needed):

1. The first time anyone submits the form, FormSubmit sends ONE activation
   email to your Gmail.
2. Open it and click the activation link — only once, ever.
3. Done — every message from the site now arrives directly in your Gmail inbox.

If sending ever fails, the form automatically falls back to opening the
visitor's email app with the message ready to send.

## Notes

- No database (MySQL or other) is needed for this website — all content is written
  directly in `index.html`. A database and admin/user panels are only needed for
  web applications with logins and changing data, not for a portfolio.
- The phone number is intentionally not shown on the site (to avoid spam calls);
  visitors can reach you by email or the contact form.
- All information on the site is real and editable. Skills are labelled honestly
  (Beginner / Learning / Learning Goal) — update the labels as you improve.
