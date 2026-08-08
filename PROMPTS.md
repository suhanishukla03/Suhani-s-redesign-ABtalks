# AI Usage Log — ABTalks Redesign

This file documents the AI-assisted development process used during the ABTalks Vibe Code Hackathon.

## Prompt 1 — Project Planning

**Purpose:** Plan the product direction and development workflow.

**Prompt:**
> Help me plan a mobile-first redesign of ABTalks for the ViCODATHON. The required screens are a landing page, student dashboard, and challenge day page. The experience should work particularly well at a 390px mobile viewport and include thoughtful handling of real-world student states.

**Result:**
Established the product direction, mobile-first approach, required routes, feature priorities, and incremental development workflow.
## Prompt 2 — Landing Page Layout

**Purpose:** Build the first functional version of the ABTalks landing page.

**Prompt:**
> Replace the default Next.js homepage with a premium, mobile-first ABTalks landing page. Include a clear 60-day challenge hero, primary and secondary calls to action, challenge statistics, a three-step "How it works" section, and a final CTA. Design it for a 390px mobile viewport while keeping it responsive on larger screens.

**Result:**
Created the first ABTalks landing page with a bold editorial visual style, responsive layout, challenge messaging, statistics, three-step explanation, and calls to action.
## Prompt 3 — Proof-of-Work Streak

**Purpose:** Make the core ABTalks product mechanic visible on the landing page.

**Prompt:**

> Add a distinctive Proof-of-Work Streak section to the ABTalks landing page. The section should communicate that every challenge day creates public evidence through GitHub commits and LinkedIn posts. Show a realistic 60-day streak with completed and upcoming days, current streak, completion percentage, and GitHub/LinkedIn proof counts. Keep the design mobile-first and consistent with the existing visual system.

**Result:**
Added a visual proof-of-work streak showing how daily builds become public evidence. The section communicates the relationship between consistency, GitHub commits, LinkedIn posts, and the 60-day journey.
## Prompt 4 — Challenge Tracks

**Purpose:** Make the challenge concrete for first-time visitors.

**Prompt:**

> Add a mobile-first "Choose your track" section to the ABTalks landing page. The section should explain that students choose a learning direction for the 60-day challenge. Create three realistic tracks: Build in Public, AI Engineer, and Data & ML. Each card should communicate what the student will build or learn and include a clear action. Keep the visual system consistent with the existing ABTalks design and optimize the cards for a 390px mobile viewport.

**Result:**
Added a track-selection section that makes the 60-day challenge more concrete and helps first-time visitors understand the different learning paths available.
## Prompt 5 — Student Dashboard

**Purpose:** Build the main student experience after joining the 60-day challenge.

**Prompt:**

> Build a mobile-first ABTalks student dashboard at /dashboard. The dashboard should immediately communicate the student's current streak, today's build, progress through the 60-day challenge, completed projects, proof points, and achievements. Use realistic mocked student data and design the experience around momentum rather than making it feel like an admin dashboard. Optimize the layout for the required 390px mobile viewport and include navigation to the challenge-day experience.

**Result:**
Created a student dashboard focused on daily momentum, with a 12-day streak, today's build, challenge progress, achievement cards, proof points, and navigation to the challenge-day route.
## Prompt 6 — Challenge Day Experience

**Purpose:** Build the complete experience for an individual ABTalks challenge day.

**Prompt:**

> Build a mobile-first Challenge Day experience at /day/12 for the ABTalks 60-day coding challenge. The page should make the daily mission immediately understandable, show what the student needs to build and practice, provide a build checklist, and let the student submit GitHub and LinkedIn proof of work. Require both proof links before allowing completion. Include a clear completed state that reinforces the student's learning streak. Optimize everything for a 390px mobile viewport.

**Result:**
Created an interactive Day 12 mission page with the challenge brief, learning goals, build checklist, GitHub and LinkedIn proof submission, validation, and a completion state that reinforces continued progress.
## Prompt 7 — Student Dashboard

**Purpose:** Build the main student home screen after joining the ABTalks challenge.

**Prompt:**

> Build a mobile-first ABTalks student dashboard at /dashboard for a 60-day coding challenge. Show the student's current streak, challenge progress, today's task, overall completion, proof collected, and achievements. Include thoughtful real-world states for a missed day and an incomplete profile. The dashboard should encourage students to return after missing a day rather than making them feel punished. Link today's task to /day/12 and optimize the experience for a 390px mobile viewport.

**Result:**
Created a responsive student dashboard with streak tracking, challenge progress, today's mission, completion statistics, achievements, an incomplete-profile state, and a recovery-oriented missed-day experience.
## Prompt 8 — Landing Page Polish

**Purpose:** Refine the landing page after the initial implementation.

**Prompt:**

> Polish the existing ABTalks landing page without changing its overall structure. Strengthen the hero messaging, make the challenge value proposition more direct, and improve spacing and readability at a 390px mobile viewport while preserving the existing sections and navigation.

**Result:**
Refined the landing page messaging and mobile spacing while preserving the existing ABTalks visual system and page structure.