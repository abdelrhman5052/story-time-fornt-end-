import React from "react"
import "./App.css"
import Navbar from './components/nav/Navbar.jsx'
import Chapter from "./components/chapters/Chapter.jsx";
import { Route, Routes,  createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Intro from "./components/introduction/into.jsx";


// function App() {

//   return (
//     <div className='App'>
//       <Navbar />
//       {/* <Landing /> */}
//       <Chapter />
//     </div>
//   );
// }


function App() {

  return (
    <div className='App'>

      <Routes >
          <Route path="/" element={<Navbar />} />
          <Route path="/card" element={<Chapter />} />
          <Route path="/intro" element={<Intro />} />
      </Routes>

    </div>
  );
}

export default App
