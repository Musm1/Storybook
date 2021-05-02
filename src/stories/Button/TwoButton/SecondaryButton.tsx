import React, { FunctionComponent } from 'react';
import styles from './button.module.css';

export interface SecondryProps {
    button_text: string,
    onClick?: any,
    loading?: boolean,
    button_styles?: React.CSSProperties,
    text_styles?: string,
};
export const SecondaryButton: FunctionComponent<SecondryProps> = (props) => {
    const { button_text, button_styles, text_styles, onClick } = props;
    const overrideStyles: React.CSSProperties = { ...button_styles };
    return (
        <button
            type="button"
            onClick={onClick}
            style={overrideStyles}
            className={`${styles.text_button}`}
        >
            <p className={`regular align_left font_light_grey ${text_styles}`}>
                {button_text}
            </p>
        </button>
    );
};

