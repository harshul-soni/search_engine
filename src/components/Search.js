import React, {useState} from "react";
import SearchIcon from "@material-ui/icons/Search"
import MicIcon from "@material-ui/icons/Mic";
import "./Search.css";
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useStateValue} from "../StateProvider.js";
import {actionTypes} from "../Reducer.js"


function Search ({hideButtons = false}) {

  const[{},dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = e => {
    e.preventDefault();
    console.log("entered",input)

    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term:input
    })

    history.push("/search");

  }

  return (
    <form className="search">
      <div className="search_input">
        <MicIcon />
        <input value={input} onChange={e => setInput(e.target.value)} />
        <SearchIcon />
      </div>
      {!hideButtons ? (
        <div className="search_buttons">
          <Button type='submit' onClick={search} variant="outlined">Search</Button>
          
        </div>
      ) : (
        <div className="search_buttons">
          <Button className="search_buttonsHidden" type='submit' onClick={search} variant="outlined">Search</Button>
        </div>
      ) }

    </form>
  )
}

export default Search
