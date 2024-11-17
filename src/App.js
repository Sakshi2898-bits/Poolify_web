import { React, useState, useEffect} from 'react';
import NavBarComponent from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import Login from './components/navbar/login/Login';
import SignUp from './components/navbar/signup/SignUp';
import Footer from './components/footer/Footer';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig"; 
import ProfileVerification from './components/profileVerification/ProfileVerification';
import SearchComponent from './components/home/formComponent/searchComponent/SearchComponent';
import RideDetails from './components/home/formComponent/searchComponent/RideDetails';
import CardComponent from './components/home/cardComponent/Card';
import './App.scss';

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          firstName: currentUser.displayName,
          email: currentUser.email,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
    <NavBarComponent user={user} setUser={setUser}/>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login setUser={setUser}/>} />
      <Route path="/signup" element={<SignUp setUser={setUser}/>} />
      <Route path="/profile" element={<ProfileVerification />} />
      <Route path="/search" element={<SearchComponent />} />
      <Route path="/trip" element={<RideDetails />} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App;
