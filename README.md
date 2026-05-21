# Pixel-Perfect React Dashboard Assignment

A high-fidelity, responsive implementation of the design assignment using React JS and Tailwind CSS.

## 🚀 Live Demo
- **Hosted App:** [Link to your Vercel/Render Deployment]

## 🛠️ Tech Stack & Key Choices
- **Build Engine:** Vite (Optimized production asset bundles)
- **Framework:** React JS (Modular component tree)
- **Styling:** Tailwind CSS (Enforces utility-first, precise design tokens)
- **Icons:** Lucide React

## ✨ Key Interactive Features (Recruiter Highlights)
To demonstrate production-grade React engineering, this implementation goes beyond static layout design to include full front-end interactivity:
- **Dynamic Form Management:** All fields under the billing form column are structured with unified state hooks, making them fully editable.
- **Interactive Balance Ledger:** Clicking the "Apply" toggle on the Wallet widget dynamically recalculates the final total due, updating your summary breakdown in real time.
- **Active Coupon Selection:** The coupon code section features responsive toggle targeting to selectively switch active validation circles.
- **Gateway Simulation:** Clicking the primary checkout trigger fires a payment gateway redirection simulation.

## 📁 Repository Structure
```text
reelax-checkout/
├── public/
│   └── favicon.ico         
├── src/
│   ├── assets/             # Vector graphic assets and illustrations
│   │   ├── logo.svg
│   │   └── avatar.svg
│   ├── components/         # Modular presentation layer split
│   │   ├── common/         # Low-level atomic UI elements
│   │   │   ├── Button.jsx
│   │   │   ├── Badge.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── layout/         # Frame layout components
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── LayoutWrapper.jsx
│   │   └── dashboard/      # Feature-specific layout organisms
│   │       ├── AnalyticsCard.jsx
│   │       └── DataTable.jsx
│   ├── App.jsx             # Base component assembling layout sections
│   ├── index.css           # Global stylesheet directives
│   └── main.jsx            # React application mount root entrypoint
├── index.html              # HTML shell entry point
├── package.json            # Scripts, dependency trees, and build metadata
├── postcss.config.js       # Core compiler processor bridge hooks
└── tailwind.config.js      # Global layout tokens configuration


⚙️ How to Run Locally
1.Clone the repository:

git clone https://github.com/subair247/Figma-assignment.git
cd figma-assignment/reelax-checkout

2.Install project dependencies:

npm install

3.Fire up the local development engine:

npm run dev

Open http://localhost:5173 in your browser window to inspect the dashboard workspace.