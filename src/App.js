import './App.css';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Login from './pages/Authpages/Login';
import Signup from './pages/Authpages/Signup';
import AuthProvider from './Authentication/Authcontext';
import Verification from './pages/Authpages/Verification';
import Homepage from './pages/Dashboardpart/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/verification" element={<Verification/>} />
            <Route path="/home" element={<Homepage/>} />

            
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
