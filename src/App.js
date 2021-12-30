import Header from './components/Header';
import Home from './components/Home';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import NotFound from './components/NotFound';
import BlogDetails from './components/BlogDetails';
import Login from './components/Login';
import Registration from './components/Registration';
import Profile from './components/Profile';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <header className="content">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/homepage" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route exact path="/create" element={<PrivateRoute> <Create /> </PrivateRoute >} />
            <Route exact path="/blogdetails/:id" element={<BlogDetails />} />
            <Route exact path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route exact path="/register" element={<Registration />} />
            <Route exact path="/logout" element={<PrivateRoute><Logout /></PrivateRoute>} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
