import React from 'react';
import LogoFreeCodeCamp from '../../assets/images/FreeCodeCamp_logo.svg';

export const Logo = () => {
  return (
    <div className="freeCodeCamplogoContenedor">
        <img
          src={LogoFreeCodeCamp}
          alt="Logo Free Code Camp" 
          className="freeCodeCampLogo"
        />
      </div>
  )
}
