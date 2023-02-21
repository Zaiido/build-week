import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css'
import PersonalProfile from './components/PersonalProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PersonalProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
