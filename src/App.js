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
import Msg from './Msg';
import './App.css';
import JSONDATA from './MockData.json';
import { useState } from 'react';
// import Products from './components/Product/Products'
// import Filters from './components/Filter/Filters';
// import Filter from './components/Filter/Filter';
// import Cart from './components/Cart/Cart';

const App = () => {
const [searchTerm, setSearchTerm] = useState("");


  return (
    <>
      <div>
      {/* <Filters />
      <Filter />
       <Products /> 
      <Cart />  */}
     <Msg />
     
     <div className="input">
     <input type="text" placeholder="Search..."  onChange={e => {setSearchTerm(e.target.value);
    }}/>
     {JSONDATA.filter((val) => {
        if (searchTerm =="")
        {
          return val
        } else if (val.last_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }

     }).map((val, key) => {

      return <div className="user" key={key}> 

        <p>{val.last_name} </p>
        
        </div>
     
     })
     }
      </div>
    </div>
  
    </>
  )
  
}

export default App;

