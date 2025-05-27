
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-theme-bg-soft text-theme-text-main flex flex-col items-center py-6 sm:py-10 px-4">
      <header className="mb-8 text-center">
        <Link to="/" className="text-decoration-none">
          <h1 className="text-4xl sm:text-5xl font-bold text-theme-primary" style={{ fontFamily: "'Lobster Two', cursive" }}>
            Mon Espace Quiz
          </h1>
        </Link>
        <p className="text-theme-text-light mt-2 text-sm sm:text-base">Prépare-toi pour ton examen avec sérénité et succès !</p>
      </header>
      <main className="w-full max-w-3xl bg-theme-card-bg p-6 sm:p-8 rounded-xl shadow-xl">
        <Outlet />
      </main>
      <footer className="mt-12 text-center text-xs sm:text-sm text-theme-text-light">
        <p>&copy; {new Date().getFullYear()} Pour ma formidable copine. Avec tout mon amour ! ❤️</p>
      </footer>
    </div>
  );
};

export default Layout;
