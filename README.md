# SecureVault – Password Strength Analyzer

A React-powered web app built with [Vite](https://vitejs.dev) that evaluates password strength and offers helpful tips.

## 🚀 Features

- Live evaluation of passwords against entropy, character variety and breach checks (via a lightweight FastAPI backend).
- Animated **progress bar** showing difficulty level (Weak → Strong).
- Contextual security tips that change based on strength.
- Password suggestion generator that creates random, secure strings.
- Copy‑to‑clipboard helpers and show/hide toggle.
- Responsive, modular codebase using Tailwind CSS and Framer Motion for smooth UI/UX.

## 🛠 Tech stack

- **Frontend:** React with functional components/hooks, Tailwind CSS, Framer Motion, react-icons
- **Tooling:** Vite for bundling & dev server
- **Backend:** FastAPI (Python) for strength calculation and breach detection
- **Structure:** Organized into `components/`, `hooks/`, `utils/`, and `constants/` directories

## 📦 Installation

```bash
# frontend
cd "password-strength-checker"
npm install

# backend
cd api
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## 🔧 Running the app

Open two terminals:

```bash
# start backend (from /api)
uvicorn check:app --reload --port 8000

# start frontend (from project root)
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 📁 Project layout

```
/src
  App.jsx              # root component
  components/          # all UI pieces (Header, PasswordInput, ProgressBar, etc.)
  hooks/               # reusable React hooks
  utils/               # password generation & validation logic
  constants/           # colour schemes, tips
/api                   # FastAPI backend
  check.py             # entropy & breach logic
```

## ✨ Customization

- Adjust strength thresholds in `api/check.py`.
- Update tip text in `src/constants/tips.js`.
- Add new colour schemes under `src/constants/colors.js`.
