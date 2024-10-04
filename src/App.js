import React from "react"
import Navbar from './components/nav/Navbar.jsx'
// import Header from './components/Header.jsx'
import Landing from "./components/landing/Landing.jsx"
import "./App.css"
import Chapter from "./components/chapters/Chapter.jsx";


function App() {

  return (
    <div className='App'>
      <Navbar />
      {/* <Landing /> */}
      <Chapter />
    </div>
  );
}

export default App
