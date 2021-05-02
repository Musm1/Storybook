import React, { FunctionComponent, useState } from 'react';
import styles from './button.module.css';

export interface ButtonProps {
  button_text: string,
  selected?: boolean,
  onClick?: any,
  loading?: boolean,
  button_styles?: React.CSSProperties,
};
export const Button: FunctionComponent<ButtonProps> = (props) => {
  const { button_text, selected, button_styles, onClick } = props;
  const selectedOptionStyle = selected ? styles.selected_option : styles.non_selected_option;
  const overrideStyles: React.CSSProperties = { ...button_styles };
  return (
    <button
      type="button"
      onClick={onClick}
      style={overrideStyles}
      className={`${styles.option_button} ${selectedOptionStyle}`}
    >
      <p className={'regular'} >{button_text}</p>
    </button>
  );
};

