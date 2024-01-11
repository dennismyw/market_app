import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import useUser from "./hooks/useUser";

const NavBar = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const encodedQuery = encodeURIComponent(searchQuery);

    // Perform the search based on the searchQuery
    // Check your own database for matching results
    const databaseResults = searchDatabase(searchQuery);

    if (databaseResults.length > 0) {
      // Navigate to search results page with the database results
      navigate(`/search-results?query=${encodedQuery}`);
    } else {
      // Redirect to Google search with the search query
      window.location.href = `https://www.google.com/search?q=${encodedQuery}`;
    }
  };

  const searchDatabase = (query) => {
    // Perform the search in your database using the provided query
    // Return an array of matching results

    // Example: Simulating database search with a hardcoded array
    const database = [
      { title: "Article 1", url: "/articles/1" },
      { title: "Article 2", url: "/articles/2" },
      { title: "Article 3", url: "/articles/3" },
    ];

    return database.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <nav>
      <li>英國超巿對照</li>
      <li>
        <Link to="/">首頁</Link>
      </li>
      <li>
        <Link to="/about" className="text-sm font-bold underline">
          About
        </Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
      <li>
        <Link to="/photo">photo</Link>
      </li>
      <li>
        <Link to="/button">test page</Link>
      </li>
      <li className="google-search">
        <form onSubmit={handleSearch} style={{ display: "flex" }}>
          <input
            type="text"
            name="q"
            placeholder="Search on Google or our database"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" style={{ marginLeft: "8px" }}>
            Search
          </button>
        </form>
      </li>

      <div className="nav-right">
        {user ? (
          <button
            onClick={() => {
              signOut(getAuth());
            }}
            style={{ marginLeft: "8px" }}
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
