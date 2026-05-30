# 🔐 PASSWORD_ANALYZER

![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?style=flat&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

> A real-time password strength analyzer with live data breach detection.
> Your password never leaves your device.

---

## 🚀 Live Demo

**[Click here to view live app](https://password-strength-analyzer-iota.vercel.app/)**

![App Screenshot](public/screenshot.png)

---

## ✨ Features

- 🔴 Real-time strength meter (Very Weak → Very Strong)
- 📊 Entropy calculation in bits
- ⏱️ Crack time estimation (offline attack simulation)
- 🌐 Live breach detection via HaveIBeenPwned API
- 🔒 k-Anonymity — your password is NEVER sent over the network
- ⚠️ Pattern warnings and improvement suggestions
- 🎲 Secure random password generator
- 💻 Hacker-themed UI with monospace font

---

## 🔒 How k-Anonymity Works

This app checks your password against 800M+ breached passwords without ever sending your actual password to any server.

1. Your password is hashed using SHA-1 in the browser
2. Only the first 5 characters of the hash are sent to the API
3. The API returns ~500 matching hashes
4. Your browser checks locally if your full hash is in the list
5. The server never sees your password or full hash

This is the same technique used by Google Chrome and Firefox.

---

## 🧠 What I Learned

- How SHA-1 hashing works in the browser using the Web Crypto API
- k-Anonymity as a privacy-preserving technique used by Google and Firefox
- How to debounce API calls to avoid rate limiting
- Entropy calculation for measuring password randomness
- Building custom React hooks to separate logic from UI

---

## 🛠️ Tech Stack

| Layer             | Technology         |
| ----------------- | ------------------ |
| Frontend          | React 18 + Vite    |
| Styling           | Tailwind CSS       |
| Password Analysis | zxcvbn.js          |
| Breach Detection  | HaveIBeenPwned API |
| Deployment        | Vercel             |

---

## 📁 Project Structure

src/
├── components/
│ ├── PasswordInput.jsx
│ ├── StrengthMeter.jsx
│ ├── BreachChecker.jsx
│ └── PasswordGenerator.jsx
├── hooks/
│ └── usePasswordAnalysis.js
├── utils/
│ ├── entropy.js
│ └── hibp.js
└── App.jsx

---

## ⚙️ Run Locally

git clone https://github.com/azmainabir/password-strength-analyzer
cd password-strength-analyzer
npm install
npm run dev

---

## 👨‍💻 Developer

**Azmain Tahmid Abir**
CSE Student @ Daffodil International University
On a mission to master Data Science · AI Engineering · Cyber Security · Software Development
Every project here is built by hand — no shortcuts, no AI-generated code.

[![GitHub](https://img.shields.io/badge/GitHub-azmainabir-181717?style=flat&logo=github)](https://github.com/azmainabir)

---

## 📄 License

MIT — free to use and modify.
