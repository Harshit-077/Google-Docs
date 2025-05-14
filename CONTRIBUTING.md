# 🧩 Contribution Guidelines

## 📁 Code Structure
components/ui: Reusable UI components (e.g., dropdown-menu, separator)
store: State management (e.g., useEditorStore)
lib: Utilities (e.g., cn class name merge helper)
Toolbar.tsx: Toolbar UI logic
HeadingLevelButton.tsx / FontFamilyButton.tsx: Dropdown subcomponents
## ✅ How to Contribute
### 1. Report a Bug 🐞

Use the Issues tab.
Provide a clear description, steps to reproduce, and expected vs. actual behavior.
### 2. Request a Feature 🌟

File a feature request under Issues.
Describe the use-case and how it will benefit users.
### 3. Submit a Pull Request 🚀

Fork → Clone → Branch → Commit → Push → PR!
Use conventional commit messages (e.g., feat: add underline button).
Run linting and formatting before pushing:
```bash
npm run lint && npm run format
```
### 4. UI/UX Improvements 🎨

Consistency is key — follow the style of existing buttons/components.
Use TailwindCSS classes responsibly.
## 🛠️ Development Tips

This project uses React, Lucide Icons, and Tiptap Editor (assumed).
Try to reuse existing styles and components where possible.
Use editor?.chain().focus() to chain editor commands.

## 🤝 Code of Conduct

Please read our CODE_OF_CONDUCT.md before contributing.
