import React from "react";
function Header() {
  const menuItems = ["Home", "About", "Contact Us"];
  const menubar = menuItems.map((e) => {
    return <li> {e} </li>;
  });

  return (
    <nav className="navBar">
      <ul>{menubar}</ul>
    </nav>
  );
}

export default Header;
