// import Profile from './components/Profile';
// import Login from './components/Login';
 //import './App.css';
// import  ChangeColor from './components/ChangeColor';
// import Products from './components/Product'

 

// function App() {
//   return <>

//     <div className="App">
//         <Profile />
//          <Login />
//          <ChangeColor />
//         <Notes />
//     </div>
//   </>;
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Notes from './pages/Notes'
// import Create from './pages/Create'

// function App() {
//   return <>

// <Router>
// <nav>
//   <Link to="/">Notes</Link>
//   <Link to="/Create">Create</Link>
//   {/* <Link to="/profile">Profile</Link> */}
//   </nav>
// <Routes>
//     <Route path="/"  element={Notes /}>
//     <Route path="/create" element={Create /}>
//   {/* <Route path="/" element={<Home />} />
//   <Route path="/about" element={<About />} />
//   <Route path="/profile/:username" element={<Profile />} />
//   <Route path="*" element={<ErrorPage />} /> */}

// </Routes> 

// </Router>

   
// }


import React from 'react'
import './index.css';
import Products from './components/Product/Products'
import Filters from './components/Filter/Filters';

const App = () => {
  return (
    <div>
      <Filters />
       <Products /> 
      {/* <Cart /> */} 
    </div>
  )
}

export default App

