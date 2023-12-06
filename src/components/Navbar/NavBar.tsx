import "./NavBar.css";
import { useState } from "react";
import { useDataContext } from "../../context/dataContext";
import { Link } from "react-router-dom";
import DarkModeButton from "../ThemeMode/ThemeMode";

const NavBar = () => {
  const {
    state: { searchFor },
    dataDispatch,
  } = useDataContext();
  const [showFilters, setShowFilters] = useState(false);


  function handlePriorityChange(value: string) {
    dataDispatch({ type: "SET_PRIORITY", payload: value });
  }
  return (
    <header className="page-header">
      <div className='icon'>
        <DarkModeButton />
      </div>

      <div className="nav-search">
        <input
          type="search"
          placeholder="Search..."
          id="search-bar"
          value={searchFor}
          onChange={e => {
            dataDispatch({ type: "SEARCH_FOR", payload: e.target.value });
          }}
        />
        <label htmlFor="search-bar">
          {searchFor === "" ? <i className="bi bi-search"></i> : null}
        </label>
      </div>
      <ul className="nav-link">
        <li>
          <Link to="/home" className="item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/metrics" className="item">
            View Metrics
          </Link>
        </li>
        <li>
          <p
            className="item filter-item"
            onClick={() => {
              setShowFilters(prev => !prev);
            }}
          >
            Filter By
          </p>
          {showFilters ? (
            <div className="filter-nav">
              {["Low", "Medium", "High"].map((priority, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="priority"
                    value={priority}
                    onChange={e => handlePriorityChange(e.target.value)}
                  />
                  {priority}
                </label>
              ))}
            </div>
          ) : null}
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
