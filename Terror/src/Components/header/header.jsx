import React from 'react';
import '../header/header.css'

function Header() {
  return (
    <header className="header">
      <div className="leftSection">
        <div>
          <img className='logo' src="https://res.cloudinary.com/dit2zhtwz/image/upload/v1711453714/Terror_hqi8ix.png"></img> 
          </div>

      </div>

      <div className="rightSection">
        <div className="option">Imágenes</div>
        <div className="option">Sonidos</div>
        <div className="option">Vídeos</div>
        <div className="option">Relatos cortos</div>

      </div>

    </header>
  );
}

export default Header;
