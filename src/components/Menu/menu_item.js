import React from "react";

const MenuItems = ({ links }) => {
    const MenuItem = links.map((link, index) => {
      return (
        <li>
          <a href={link.url} className="global-menu__link" key={index}>
            {link.linkName}
          </a>
        </li>
      );
    });
    return MenuItem;
  }

  export default MenuItems;