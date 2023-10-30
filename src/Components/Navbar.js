import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
// import { createContext } from 'react';

// export const ctx=createContext();


export default function Navbar() {

  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  }, [location]);

  const [q, setQ] = useState("")
  const search = async () => {
    
  }

  //arrow function must req.
  const update = (event) => {
    // console.log(event.target.value)
    setQ(event.target.value)
    // console.log(q);

  }



  return (
    <>
    <div>
      <nav className="navbar navbar-dark  navbar-expand-lg bg-dark" style={{position:'fixed',top:"0px",zIndex:"1",width:"100%"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">DailyNews</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/sports" ? "active" : ""}`} to="/sport">Sport</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/business" ? "active" : ""}`} to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/entertainment" ? "active" : ""}`} to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/general" ? "active" : ""}`} to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/science" ? "active" : ""}`} to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/technology" ? "active" : ""}`} to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/health" ? "active" : ""}`} to="/health">Health</Link>
              </li>
            </ul>
            
            <form class="d-flex" role="search">
              <input className="form-control me-2" type="search" value={q} onChange={update} placeholder="Search" aria-label="Search" />
              <button className="btn btn-dark bg-secondary" onClick={search} type="submit">Search</button>
              {/* <p style={{color:"white"}}>{q}</p> */}
            </form>
          </div>
        </div>
      </nav>
    </div>
    
    </>
    
  )
}






