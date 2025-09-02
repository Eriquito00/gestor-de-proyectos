import { StrictMode, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home.jsx"
import ProjectView from "./pages/ProjectView.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [arrayProjects, setarrayProjects] = useState([]);
  const [menu, setMenu] = useState(null);
  const [warning, setWarning] = useState(null);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              arrayProjects={arrayProjects} 
              setarrayProjects={setarrayProjects}
              setMenu={setMenu}
              menu={menu}
              setWarning={setWarning}
              warning={warning}
            />
          } 
        />
        <Route
          path="/project/:id/:title"
          element={
            <ProjectView 
              setMenu={setMenu}
              menu={menu}
              setWarning={setWarning}
              warning={warning}
            />
          }
        />
      </Routes>
    </Router>
  )
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)