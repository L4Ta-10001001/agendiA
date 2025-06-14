// src/App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './components/TaskList';
import { FaClipboardList } from 'react-icons/fa';

function App() {
  return (
    <>
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <span className="navbar-brand d-flex align-items-center">
            <FaClipboardList className="me-2" />
            Mi Agenda Universitaria
          </span>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="container py-4">
        <TaskList />
      </main>
    </>
  );
}

export default App;
