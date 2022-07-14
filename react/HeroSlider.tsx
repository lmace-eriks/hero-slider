import React, { useEffect, useState } from 'react';

// Styles
import styles from "./styles.css";

interface HeroSliderProps {

}

const HeroSlider: StorefrontFunctionComponent<HeroSliderProps> = ({ }) => {

  return (
    <div>Hello!</div>
  )

}

HeroSlider.schema = {
  title: 'Hero Slider',
  description: '',
  type: 'object',
  properties: {}
}

export default HeroSlider;