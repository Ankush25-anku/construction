"use client";

import { FaTimes } from "react-icons/fa";

export default function   SearchArea() {
  return (
    <div className="search-wrap">
      <div className="search-inner">
        <FaTimes className="search-close" id="search-close" />
        <div className="search-cell">
          <form method="get">
            <div className="search-field-holder">
              <input
                type="search"
                className="main-search-input"
                placeholder="Search..."
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
