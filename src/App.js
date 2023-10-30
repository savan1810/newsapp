
import React from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import Search from './Components/Search';


export default function App () {
  // const c=useContext(ctx);
    return (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/sport" element={<News key="sports" pageSize={10} country="in" category="sports" q="" />}></Route>
            <Route exact path="/" element={<News key="general" pageSize={10} country="in" category="general"  q=""/>}></Route>
            <Route exact path="/business" element={<News key="business" pageSize={10} country="in" category="business" q=""/>}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={10} country="in" category="entertainment"  q=""/>}></Route>
            <Route exact path="/health" element={<News key="health" pageSize={10} country="in" category="health"  q=""/>}></Route>
            <Route exact path="/technology" element={<News key="technology" pageSize={10} country="in" category="technology"  q=""/>}></Route>
            <Route exact path="/science" element={<News key="science" pageSize={10} country="in" category="science"  q=""/>}></Route>
            <Route exact path="/general" element={<News  key="general" pageSize={10} country="in" category="general"  q=""/>}></Route>
          </Routes>

        </Router>   
    )
}

App.propTypes = {
  q: PropTypes.string
}