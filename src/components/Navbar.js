import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#f8f8f8" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/signup" style={{ marginRight: "1rem" }}>Signup/Login</Link>
      <Link to="/upload" style={{ marginRight: "1rem" }}>Upload Medicine</Link>
      <Link to="/search">Search Medicine</Link>
    </nav>
  );
}
