import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

import "./Header.scss";

const Header = ({ search, setSearch }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <a href="tel:+996507111669" className="header__phone">
            <MdOutlinePhoneInTalk className="phone" />
            +996 507 111 669
          </a>
          <div className="header__right">
            <input
              type="text"
              placeholder="Поиск"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IoMdSearch className="header__search" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
