# 🚀 Rick and Morty App

Proyecto creado con **Bun**, **Vite**, **React**, **TailwindCSS** y **TypeScript**.  
La aplicación organiza sus componentes y páginas en una estructura modular y las rutas se gestionan desde `AppRoutes.tsx`.

---

## 📂 Estructura de carpetas
```
src/
├── components/      # Componentes reutilizables (UI, cards, layouts...)
├── hooks/           # Custom hooks compartidos
├── models/          # Tipos e interfaces TypeScript
├── pagePublic/     # Páginas públicas (Home, Login, Register...)
├── App.tsx          # Componente raíz de la aplicación
├── AppRoutes.tsx    # Archivo central de configuración de rutas
└── main.tsx         # Punto de entrada principal del proyecto
```
---

## ⚙️ Tecnologías

- [Bun](https://bun.sh) → Runtime ultrarrápido para JS/TS  
- [Vite](https://vitejs.dev) → Bundler y dev server veloz  
- [React](https://react.dev) → Librería para UI  
- [TailwindCSS](https://tailwindcss.com) → Estilos utilitarios y responsive  
- [TypeScript](https://www.typescriptlang.org) → Tipado estático para mayor seguridad  

---

## 🛠️ Instalación

## 1. Clonar el repositorio
```bash
git clone "https://github.com/FacundoAylan/Rick-and-Morty.git"
```
## 2. Navegar al directorio del proyecto
```bash
cd Rick-and-Morty
```
## 3. Instalar las dependencias (usando Bun)
```bash
bun install
```
## 4. Levantar el servidor de desarrollo
```bash
bun run dev
```
---
## Las rutas principales están definidas en AppRoutes.tsx. Ejemplo de configuración:
```bash
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pagePublick/Home";
import Login from "@/pagePublick/Login";

/**
 * Definición de las rutas principales de la aplicación.
 */
export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* Añade aquí más rutas, como /dashboard, /characters/:id, etc. */}
    </Routes>
  </BrowserRouter>
);
);
```
