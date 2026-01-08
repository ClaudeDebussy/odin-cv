# React CV Application

A simple CV builder built with **React** that allows users to input personal details, educational background, and professional experience and see the resume update in real-time. This project was developed to help learn React and solidify core frontend engineering principles, including state management, component composition, and responsive design.

## Key Features

- **Live Preview:** Real-time rendering of CV content as the user types and submits forms.
- **Dynamic List Management:** Add multiple entries for education and work experience using unique ID generation.
- **Conditional Rendering:** Intelligently hides/shows resume sections (like "Experience" or "Education") only when data is present.
- **Form Persistence:** Managed state ensures user input is captured and cleared efficiently upon submission.
- **Responsive UI:** Fully responsive layout built with a modern CSS reset and flexbox.

## Technical Stack & Implementation

### Core Concepts

- **React (Vite):** Functional components and Hooks (`useState`).
- **State Lifting:** State is centralized in `App.jsx` to maintain a single source of truth between the input forms and the CV display.
- **Controlled Components:** Every input is a controlled component, ensuring React has full authority over the form data.
- **Keys & Lists:** Utilizes `crypto.randomUUID()` for robust, unique key assignment during list rendering, avoiding the pitfalls of using array indices.

### Component Architecture

- **`App.jsx`**: The orchestrator. Manages complex state objects for identity, education lists, and work history.
- **`CV.jsx`**: A "dumb" presentational component that receives props and renders a polished document.
- **Modular Forms**: Separate components (`IdentityForm`, `EducationForm`, `WorkForm`) handle specific data logic, promoting reusability and clean code.

## Project Structure

```
src/
├── components/
│   ├── App.jsx           # Main logic & state management
│   ├── CV.jsx            # Presentational CV layout
│   ├── EducationForm.jsx # Educational input logic
│   ├── IdentityForm.jsx  # Personal details input
│   ├── WorkForm.jsx      # Professional experience input
│   └── ShowForms.jsx     # UI Toggle utility
├── styles/
│   ├── index.css         # Custom application styling
│   └── modern-reset.css  # Josh Comeau's CSS Reset
└── main.jsx              # Entry point
```

## Future Roadmap

- [ ] Implement a "Print to PDF" feature using react-to-print.

- [ ] Add an "Edit" mode for existing list items.
