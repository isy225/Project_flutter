# QuickHire – Your First Job Portal

A clean, fast Single Page Application (SPA) built with **React.js** and **React Router v6**.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Then open http://localhost:5173 in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
quickhire/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx          ← App entry point
    ├── App.jsx           ← Route definitions
    ├── index.css         ← Global styles & CSS variables
    ├── data/
    │   └── jobs.json     ← Job listings data
    ├── components/
    │   ├── Navbar.jsx    ← Navigation bar
    │   ├── Navbar.module.css
    │   ├── JobCard.jsx   ← Reusable job card
    │   └── JobCard.module.css
    └── pages/
        ├── Home.jsx          ← /home — Search & landing
        ├── Home.module.css
        ├── Jobs.jsx          ← /jobs — Job list + filters
        ├── Jobs.module.css
        ├── JobDetails.jsx    ← /jobs/:id — Full job view
        └── JobDetails.module.css
```

---

## 🧩 Features

| Feature | Details |
|---|---|
| **React Router v6** | Client-side routing, no page reloads |
| **Search bar (Home)** | Query passed to Jobs page via URL params |
| **Inline search (Jobs)** | Filter by title or company name |
| **Filter buttons** | All / Remote / Full-Time |
| **Job details** | Full description + requirements |
| **Apply Now** | Success animation on click |
| **CSS Modules** | Scoped styles, no conflicts |

---

## 🛠 Tech Stack

- React 18
- React Router v6
- Vite
- CSS Modules
- Google Fonts (Syne + DM Sans)
