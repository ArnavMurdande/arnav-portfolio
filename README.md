
# 🌐 3D Immersive Multi-Theme Portfolio  
### A Fully Cinematic 3D → 2D → 3D Web Experience

⚡ React • React Three Fiber • Drei • Framer Motion • Vite  
🎭 Dynamic Themes • Hybrid Scroll Engine • 3D Device Showcase

</div>

---

## 🔮 The Vision

This project redefines a portfolio website.  
Instead of a typical static layout, it delivers a **cinematic real-time journey** that blends **3D scenes**, **DOM-based UI**, and **dynamic themed worlds** without breaking immersion.

---

## 🎬 Full User Journey (Your Vision)

1️⃣ **Hello Multilingual Preloader**  
User opens the website for the first time and is welcomed with a “Hello” greeting shown in multiple languages.

2️⃣ **Adaptive 3D Intro Scene**  
After preloader, the user sees a **3D model of a Laptop (Desktop) or Phone (Mobile)** depending on their device.

3️⃣ **First Immersion — Entering the Landing Page**  
As the user scrolls, the camera **pans smoothly into the 3D device’s screen**, which gradually **transitions into the actual landing page (`Home.jsx`)**.

4️⃣ **Standard Portfolio Browsing**  
User now scrolls normally through the DOM content — projects, about, skills, resume, etc.  
🔹 **Navbar appears ONLY here for the first time**  
🔹 Scrollbar starts fresh here (it did not exist during 3D mode)

5️⃣ **Second Reality Shift — Entering the 3D Portfolio Grid**  
Upon reaching the bottom of the landing page, the camera **pans back out of the DOM landing page**, revealing that the landing page was actually **a single floating card** in a **huge 3D theme grid**.

🔸 The landing page card slides diagonally upwards to join the grid  
🔸 Grid shows different possible **Theme Universes** — each card represents one theme

6️⃣ **Choosing a Theme (Cinematic Theme Jump)**  
Clicking any 3D theme tile triggers another camera journey:  
📌 Camera zooms into that selected card  
📌 DOM theme page fades in  
📌 Background / lighting / textures / audio change dynamically

🧠 **Navbar stays permanently visible in ALL DOM screens (Landing + themes)  
but disappears during 3D transitions between screens.**

🌀 Scrollbar resets for every new DOM theme — starts fresh, disappears during transitions.

---

## ✨ Core Features (Aligned With Vision)

| Feature | Purpose |
|--------|---------|
| Multilingual Preloader | Cinematic greeting |
| Adaptive Device Detection | Loads Laptop or Phone 3D model |
| Scroll-controlled Camera | User scroll drives the entire journey |
| 3D ↔ DOM Immersion | Transitions into/out of screens instead of switching pages |
| Theme Grid Worlds | Multiple themed portfolio universes |
| Dynamic Navbar State | Hidden in 3D intro → visible in DOM → persists |
| Smart Scroll Reset | Scrollbar starts fresh on each DOM screen |
| Audio-Themed Backgrounds | Optional soundtrack per theme |
| Performance Optimized | Lazy loaded assets, textures and models |

---

## 🛠️ Tech Stack

| Category | Technology |
|---------|------------|
| Core Framework | React 19 |
| Build Tool | Vite |
| 3D Engine | React Three Fiber (R3F) |
| 3D Utilities | @react-three/drei |
| DOM Animations | Framer Motion |
| Global State | Zustand |
| Styling | Tailwind CSS |
| Routing | React Router DOM |

---

## 📂 Project Structure

src/  
├── assets/  
│   ├── audio/  
│   ├── docs/  
│   ├── images/  
│   └── …  
├── components/  
│   ├── 3d/  
│   │   ├── DeviceStage.jsx  
│   │   ├── GridStage.jsx  
│   │   ├── LaptopModel.jsx  
│   │   └── PhoneModel.jsx  
│   ├── logic/  
│   │   └── ScrollManager.jsx  
│   ├── ColorBends.jsx  
│   ├── CustomCursor.jsx  
│   ├── Navbar.jsx  
│   ├── Preloader.jsx  
│   └── ThemeBlob.jsx  
├── hooks/  
│   └── useMobile.js  
├── pages/  
│   ├── Home.jsx  
│   └── themes/  
│       └── KingOfCurses.jsx  
├── store.js  
├── App.jsx  
└── main.jsx

---

## 🚀 Getting Started

### Prerequisites
• Node.js v18+  
• Git  

### Installation

1️⃣ Clone the repository  
➜ git clone https://github.com/ArnavMurdande/arnav-portfolio.git  
➜ cd arnav-portfolio  

2️⃣ Install dependencies  
➜ npm install  

3️⃣ Run development server  
➜ npm run dev  

4️⃣ Open  
➜ http://localhost:5173

---

## 🎮 Controls

• **Scroll** — drives cinematic transitions + DOM browsing  
• **Click (Grid view)** — jump into selected theme universe  
• **Navbar** — appears from landing page onward and remains permanent across themes

---

## 🤝 Contributing

1. Fork the project  
2. Create a feature branch  
   ➜ git checkout -b feature/AmazingFeature  
3. Commit changes  
   ➜ git commit -m "Add some AmazingFeature"  
4. Push the branch  
   ➜ git push origin feature/AmazingFeature  
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**.  
See `LICENSE` for more details.

---

<div align="center">

### Built with ❤️ by **Arnav Murdande**  
⭐ If this project inspires you, please consider starring the repository!

</div>
