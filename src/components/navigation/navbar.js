import "./navbar.css"
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import logo from "../../images/logo.png"
const Navbar =()=>{
    const [Classic, setClassic] = useState("hide");
    const [Second, setSecond] = useState("hide");
    return(
        <>
        <div className="navigation">
            <div class="logo">
                <img src={logo} width="100px"></img>
            </div>
            <div className="all-dropdowns">
            <div className="dropdown1"
            onMouseLeave={() => setClassic("hide")}
            onMouseOver={() => setClassic("show")}
           >
            New & Featured
            </div>
            <div className={`showup ${Classic}`}>
                <div><li>New shoes</li><li>New Arrivals</li></div>
                <div><li>Featured</li><li>Latest</li></div>
            </div>
            <div className="dropdown1"
            onMouseLeave={() => setSecond("hide")}
            onMouseOver={() => setSecond("show")}
            >
            Men
            </div>
            <div className={`showup2 ${Second}`}>
                <div><li>Action</li><li>Action</li></div>
                <div><li>Action</li><li>Action</li></div>
            </div>
            <div className="dropdown1"
            onMouseLeave={() => setSecond("hide")}
            onMouseOver={() => setSecond("show")}
            >
            Women
            </div>
            <div className="dropdown1"
            onMouseLeave={() => setSecond("hide")}
            onMouseOver={() => setSecond("show")}
            >
            Sale
            </div>
            <div className="dropdown1"
            onMouseLeave={() => setSecond("hide")}
            onMouseOver={() => setSecond("show")}
            >
            Customise
            </div>
            </div>
            
                        <div class="navbar-buttons">
                            <button class="navbar-btn login-btn login">Login</button>
                            <button class="navbar-btn signup-btn signup">Signup</button>
                        </div>
                        </div>
        </>
    )
}
export default Navbar;