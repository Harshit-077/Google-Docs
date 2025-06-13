# 📝 Google Docs Clone

A minimal yet powerful Google Docs-inspired collaborative rich-text editor built using **Next.js**, **Tiptap**, and **Tailwind CSS**. Designed for real-time collaboration, a clean modern UI, and rich formatting features — this project aims to recreate core Google Docs functionality with open-source tools.

> ⚠️ **Note**: This project is still under active development. Contributions and ideas are welcome!

---

## 🌐 Live Demo

[Coming Soon](#) — hosted on Vercel or your preferred platform.

---

## ✨ Features

- ✅ Export as PDF / HTML
- ✅ Autosave functionality
- ✅ Comments and version history
- ✅ Image upload & media embedding
- ✅ Role-based access using Clerk Auth.
- ✅ Modern and responsive UI with **Tailwind CSS**
- ✅ Document renaming and per-document URL routing
- ✅ Real-time collaborative editing via **Liveblocks**
- ✅ Cloud data storage & backend logic powered by Convex
- ✅ Rich text formatting (bold, italic, underline, headings, bullet/numbered lists)
- 🚧 Light/dark theme support
- 🚧 Keyboard shortcuts support
- 🚧 Slash (`/`) command menu to quickly insert formatting

---
## 🛠 Tech Stack

| Technology      | Description                        |
|-----------------|------------------------------------|
| **Next.js**     | React-based fullstack framework    |
| **Tiptap**      | Extensible rich-text editor        |
| **Liveblocks**  | Real-time collaboration backend    |
| **Convex**      | Serverless database & backend logic|
| **Tailwind CSS**| Utility-first CSS styling          |
| **Zustand**     | Lightweight global state           |
| **Lucide Icons**| Icon set for clean UI              |
| **TypeScript**  | Type-safe modern JavaScript        |
| **Shadcn/UI**   | Pre-built modern UI components     |
| **Radix UI**    | Unstyled accessibility primitives  |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Harshit-077/Google-Docs.git
cd Google-Docs
```
### 2. Install dependencies
```bash
npm install
# or
yarn
```
### 3. Setup Environment
Create a .env.local file based on .env.example (if present), and fill in credentials for:

Liveblocks API key
Clerk (or any auth provider)
Optional: Database or storage keys

### 4. Run the development server
```bash
npm run dev
# or
yarn dev
```
Visit http://localhost:3000 in your browser.

## 🔐 Authentication

This project integrates Clerk (or similar) for authentication. Ensure API keys and frontend configuration are correctly set in your environment files.

## 🤝 Contributing
We welcome contributions! Here's how to get started:

Fork the repository
Create a new branch: git checkout -b my-feature
Commit your changes: git commit -am 'Add new feature'
Push to the branch: git push origin my-feature
Submit a pull request ✅
Please read the CONTRIBUTING.md for full details.

## 📄 License

This project is licensed under the MIT License.

## 🛡️ Security

Found a vulnerability? Please check SECURITY.md for how to report responsibly.

## 🙌 Acknowledgements

Tiptap <div/>
Liveblocks <div/>
Shadcn/UI <div/>
Radix UI <div/>
Clerk <div/>

## 🙋‍♂️ About the Developer

Made with ❤️ by Harshit Sharma
Feel free to ⭐ the repo and follow for updates!
