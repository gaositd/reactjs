import React from 'react'
import HeaderTextAnalizer from './headerTextAnalizer/headerTextAnalizer'
import { MainTextanalizer } from './mainTextanalizer'
import { FooterTextAnalizer } from './footerTextAnalizer'

export const TextAnalizer = () => {
  return (
    <div>
      <HeaderTextAnalizer />
      <MainTextanalizer />
      <FooterTextAnalizer />
    </div>
  );
}
