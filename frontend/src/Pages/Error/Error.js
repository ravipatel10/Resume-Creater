import React from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";

function Error() {
    return (
        <>
            <h1>An Error occures Go back to Home page</h1>
            <button><Link to={<Home />}>Home </Link></button>
        </>
    )
}

export default Error;