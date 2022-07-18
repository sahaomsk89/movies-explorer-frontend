import React from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import FilmsMenu from '../FilmsMenu/FilmsMenu';

import './Navigation.css';
function Navigation() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = React.useState(false);

  function handleMenuClick() {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  }

  return (
    <nav className="navigation">
      <FilmsMenu />
      <div className="header__open-button" onClick={handleMenuClick} />
      <div
        className={`navigation__menu ${
          isMobileMenuOpened ? 'navigation__menu_opened' : ''
        }`}
      >
        <MobileMenu
          handleMenuClick={handleMenuClick}
          isMobileMenuOpened={isMobileMenuOpened}
        />
      </div>
    </nav>
  );
}

export default Navigation;
