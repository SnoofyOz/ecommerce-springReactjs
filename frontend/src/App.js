import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {routes.map((route, index) => {
            const Page = route.page;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Page />}
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;