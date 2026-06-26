# Tanay Tanishk - Full Stack Developer Portfolio

An interactive, immersive, and premium portfolio website showcasing the skills, projects, and experiences of **Tanay Tanishk**, a Computer Science Engineering Student and Full Stack Developer.

This project is built from scratch with modern web design aesthetics, featuring advanced 3D elements, premium micro-animations, glassmorphic interfaces, and smooth interactions.

---

## 🚀 Key Features

* **3D CyberCore Hero Section**: Dynamic, interactive 3D icosahedron core rendered in real-time using Three.js and React Three Fiber.
* **Ambient Interactivity**: Smooth custom cursor effects and immersive particles background using `@tsparticles`.
* **Dynamic Physics & Tilt Effects**: Interactive 3D tilt effects on project and skill cards via `react-parallax-tilt`.
* **Fluid Motion & Scroll**: Implemented smooth inertial scrolling using Lenis, combined with custom-tuned Framer Motion transitions.
* **Responsive Glassmorphism**: Responsive design built with custom CSS variables, custom grid layouts, and semi-transparent blur-filtered layers (glassmorphic aesthetic).
* **Comprehensive Sections**:
  * **Hero**: Dynamic 3D CyberCore and profile highlights.
  * **About**: Background info, goals, and professional statement.
  * **Projects**: Displays patent-pending hardware-software systems and ethical hacking/security projects.
  * **Skills**: Organized Technical Arsenal categorization with hover tilt.
  * **Experience & Certifications**: Chronological journey and accredited credentials.
  * **Contact**: Sleek interface for inquiries.

---

## 🛠️ Technology Stack

### Core

* **Library**: [React 19](https://react.dev/)
* **Build Tool**: [Vite](https://vite.dev/)
* **Styles**: Vanilla CSS (Tailored Design Tokens & Glassmorphism)

### Libraries & Integration

* **3D Rendering**: [Three.js](https://threejs.org/), [@react-three/fiber](https://r3f.docs.pmnd.rs/), [@react-three/drei](https://github.com/pmndrs/drei)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Smooth Scroll**: [@studio-freight/lenis](https://github.com/darkroomengineering/lenis)
* **Particles**: [@tsparticles/react](https://github.com/tsparticles/react) & `@tsparticles/slim`
* **Icons**: [Lucide React](https://lucide.dev/)
* **Card Physics**: [React Parallax Tilt](https://github.com/gregberge/react-parallax-tilt)

---

## 📦 Getting Started

Follow these steps to run the portfolio locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/its-tanay003/Portfolio-.git
   cd Portfolio-
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Development

Run the development server locally:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Production Build

To build the application for production deployment:

```bash
npm run build
```

This compiles the assets into a highly optimized production bundle inside the `dist` directory.

### Preview Build

Preview the built production bundle locally:

```bash
npm run preview
```
