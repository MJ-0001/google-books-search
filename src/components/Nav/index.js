import React from 'react';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-primary border-2">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Google Books</a>
            <a className="nav-link" href="#">Search</a>
            <a className="nav-link" href="#">Saved</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;