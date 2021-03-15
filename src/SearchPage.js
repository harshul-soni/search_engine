import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider.js"
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response.js";
import {Link} from "react-router-dom";
import Search from "./components/Search.js";

function SearchPage(){

  const [{term},dispatch] = useStateValue ();
 const {data} = useGoogleSearch(term);
  console.log(data)
  return (
    <div className="searchPage">

      <div className="searchPage_header">
        <Link to="/" >
          <img className="searchPage_logo"
           src="https://seeklogo.com/images/Z/zen-logo-D605E6902B-seeklogo.com.png" alt="" />
        </Link>

        <div className="searchPage_headerBody">
          <Search hideButtons/>
        </div>


      </div>



    {term && (
      <div className="searchPage_results">
        <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} Results
            ({data?.searchInformation.formattedSearchTime} seconds) for {term}
        </p>

        {data?.items.map(item =>(
          <div className="searchPage_result">
            <a href={item.link}>
              {item.pagemap?.cse_image?.
                length>0 && item.pagemap?.
              cse_image[0]?.src && (
                <img
                 className="searchPage_resultImage"
                src={ item.pagemap?.
                  cse_image?.length>0 &&
                   item.pagemap?.cse_image[0]?.src} alt="" />
              )}
              {item.displayLink}▼
            </a>
            <a className="searchPage_resultTitle" href={item.link}>
              <h2>{item.title}</h2>
            </a>
            <p className="searchPage_resultSnippet">
              {item.snippet}
            </p>
          </div>
        ))}

      </div>
    )}

    </div>
  )
}

export default SearchPage;

//AIzaSyCj78ZuvcxKSbJ--TkWQNQJ2IvC8qd5hNE
