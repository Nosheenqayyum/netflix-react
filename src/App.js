import React from "react";
import './App.scss';
import Header from './components/Header';
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import Banner from "./components/Banner";
import List from "./components/link";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing necessary components from react-router-dom
function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
          <React.Fragment>
              <Header />
              <HomeBanner/>
          </React.Fragment>
        }/>
              <Route 
          path="/Login" 
          element={
            <React.Fragment>
            <Header />
           <Login />
           </React.Fragment>
        }/>
              <Route 
          path="/dashboard" 
          element={
          <React.Fragment>
            <Header />
            <Banner/>
            <List/>
          </React.Fragment>
        }/>
      </Routes>
      
    </Router>
  );
}

export default App;
