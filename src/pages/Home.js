import React from "react"
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";
import "./Home.css"
import Search from "../components/Search.js";
function Home (){
  return(
    <div className="home">
      <div className="home_header">
        <div className="left">
          <Link to="/about" >About</Link>
          <Link to='/store'>Store</Link>
        </div>

        <div className="right">
          <Link to = "/gmail">Gmail</Link>
          <Link to = "/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home_body">
        <img src="https://seeklogo.com/images/Z/zen-logo-D605E6902B-seeklogo.com.png" alt=" "/>

        <div className="home_inputContainer">
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Home;
