# Formily JSONSchema Project

A professionally styled dynamic form built with **Formily**, based on a JSON Schema configuration.  
This project showcases clean UI/UX design inspired by modern web form principles — with a focus on accessibility, customization, and usability.

## ✨ Features

- Built using [Formily](https://formilyjs.org/) + [Ant Design](https://ant.design/)
- Responsive layout with vertical form flow
- Custom orange/white theme for branding consistency
- Focus state highlighting with smooth transitions
- Dynamic field rendering from JSON Schema (including nested arrays)
- Auto-rendered `ArrayCards` and `ArrayItems` for complex request structures
- Styled submit button with hover effects

## 📦 Project Structure

```
formily-jsonschema-project/
├── public/
├── src/
│   ├── App.tsx            # Main form component
│   ├── styles.css         # Custom styling for theme and UI tweaks
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Rachel-Eva/formily-jsonschema-project.git
cd formily-jsonschema-project
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the Development Server

```bash
npm start
# or
yarn start
```

This will launch the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🛠 How It Works

The form is built dynamically using Formily Schema. Components like `ArrayCards`, `ArrayItems`, `Select`, and `Input` are used to render nested structures, with custom styles provided in `styles.css`.

> **Note:** In this version, the schema is hardcoded into `App.tsx`, but the code structure allows it to be easily replaced with a dynamic schema loader in future iterations.

## 📄 License

MIT License © 2025 Rachel Eva
