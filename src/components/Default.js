import React from "react";
import { Link } from "react-router-dom";
export default function Default() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h1 className="text-danger">error</h1>
          <h2>
            page not <span className="text-danger">found</span>
          </h2>
          <Link to="/">
            <p>Go Home!</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
