import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="App">
            {/* Logo */}
            <img src="logo.svg" alt="" className="App-logo" />

            {/* Navigation Links */}
            <nav>
                <button className="navButton"><a href="/">art sphere</a></button>
                <button className="navButton"><a href="/suggest">suggest</a></button>
                <button className="navButton"><a href="/search">search</a></button>
                <button className="navButton"><a href="/cart">cart</a></button>
            </nav>

            {/* Sign In Button aligned to the right */}
            <div className="signInButton">
                <button className="navButton">
                    <a href="/signin">sign in</a>
                </button>
            </div>
        </header>
    );
}

export default Header;
