import React from 'react';
import {
  FaReact, FaSass, DiJavascript1, IoLogoHtml5, DiCss3, SiRedux, SiJest, GiHook, BsBootstrap,
} from 'react-icons/all';

export const icons = {
  JAVASCRIPT: <DiJavascript1 />,
  SASS: <FaSass />,
  REACT: <FaReact />,
  HTML: <IoLogoHtml5 />,
  CSS: <DiCss3 />,
  REDUX: <SiRedux />,
  JEST: <SiJest />,
  HOOkS: <GiHook />,
};

export const tecs = [
  {
    title: 'SASS',
    icon: <FaSass className="icons" />,
  },
  {
    title: 'CSS',
    icon: <DiCss3 className="icons" />,
  },

  {
    title: 'JAVASCRIPT',
    icon: <DiJavascript1 className="icons" />,
  },
  {
    title: 'REACT',
    icon: <FaReact className="icons" />,
  },
  {
    title: 'HTML',
    icon: <DiCss3 className="icons" />,
  },

  {
    title: 'BOOTSTRAP',
    icon: <BsBootstrap className="icons" />,
  },

  {
    title: 'REDUX',
    icon: <SiRedux className="icons" />,
  },
  {
    title: 'JEST',
    icon: <SiJest className="icons" />,
  },
  {
    title: 'HOOkS',
    icon: <GiHook className="icons" />,
  },
];
