import React from 'react';
import notfound from './pages/Notfound.jsx';
import { Link, Outlet } from 'react-router-dom';
import NotFound from './pages/Notfound.jsx';

const App = () => {
  return (
    <>
      {/* <header className="bg-white border-b p-4">
        <nav className="max-w-7xl mx-auto flex gap-4">
          <Link to="/" className="text-purple-600 font-semibold">
            Главная
          </Link>
        </nav>
        <Notfound/>
      </header>

      <main>
        <Outlet />
      </main> */}
      <NotFound/>
    </>
  );
};

export default App;
