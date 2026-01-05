# 🎆 New Year Greeting Web App

A festive, animated New Year Greeting web application built with React, Vite, Tailwind CSS, and Framer Motion.
The app delivers a synchronized experience combining animations, background music, and smooth transitions — ending with a replayable greeting for the new year.

---

## ✨ Features

- 🎄 Festive, responsive background (mobile & desktop friendly)
- 🎴 Animated greeting card with glassmorphism effect
- 👥 Names displayed sequentially (fade in / fade out)
- 💌 Final New Year wishes message
- 🚀 Grand finale text: WELCOME TO 2026
- 🎵 Background music with:
  - User-initiated playback (mobile-safe)
  - Smooth fade-out after animation ends
- 🔁 Replay button to restart the entire experience
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Animation flow respects user interaction (no autoplay surprises)

---

## 🧠 User Experience Flow

1. Page loads with a static greeting card
2. User clicks Play
3. Music starts + animation sequence begins
4. Names appear one after another
5. Final message is displayed
6. After 15 seconds:
   - Music fades out smoothly
7. Replay button appears
8. User can restart the experience from the beginning

---

## 🛠️ Tech Stack

- React – UI components
- Vite – fast build & dev server
- Tailwind CSS – styling & responsiveness
- Framer Motion – animations
- Howler.js – audio playback
- Netlify – deployment

---

## 📁 Project Structure

```css
src/
├── components/
│   ├── Background.jsx
│   ├── GreetingCard.jsx
│   ├── NameSequence.jsx
│   ├── FinalMessage.jsx
│   └── MusicPlayer.jsx
├── data/
│   └── names.js
├── assets/
│   └── music.mp3
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/hencci/new-year-greeting.git
cd new-year-greeting
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Development Server

```bash
npm run dev
```

The app will be available at:

```arduino
http://localhost:5173
```

---

## 📱 Responsiveness

- Mobile-first layout
- Adaptive typography & spacing
- Background image always fits screen width
- Touch-friendly controls
- No layout shifts or overflow issues

---

## Live Preview

https://puggleteam.netlify.app

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 🙌 Acknowledgements

- Framer Motion for animation primitives
- Howler.js for reliable audio handling
- Unsplash for festive background imagery
