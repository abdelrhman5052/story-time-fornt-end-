import React from "react"
import "./App.css"
import Navbar from './components/nav/Navbar.jsx'
import Chapter from "./components/chapters/Chapter.jsx";
import { Route, Routes,  createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import Intro from "./components/introduction/into.jsx";
import Page1 from "./components/pages/Page1.jsx";
import Page2 from "./components/pages/Page2.jsx";
import Page3 from "./components/pages/page3.jsx";
import Page4 from "./components/pages/page4.jsx";
import Page5 from "./components/pages/page5.jsx";
import Page6 from "./components/pages/page6.jsx";


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
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/Page4"  element={<Page4 />}/>
          <Route path="/Page5"  element={<Page5 />} />
          <Route path="/Page6" element={<Page6 />}/>
      </Routes>

    </div>
  );
}

export default App
