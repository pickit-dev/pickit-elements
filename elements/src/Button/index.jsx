import React, { Component } from 'react';
import './Button.scss';

export const Button = (props) => {
    const { variant, size, loading, color, className, disabled, children, icon, iconPosition, fullWidth } = props;
    let classString = 'Button';

    variant && variant.split(" ").forEach(val => {
        classString += ` Button--variant--${val}`
    });

    color && color.split(" ").forEach(val => {
        classString += ` Button--color--${val}`
    });

    size && size.split(" ").forEach(val => {
        classString += ` Button--size--${val}`
    });

    if(className){
        classString += ` ${className}`
    }

    if(disabled){
        classString += ` Button--disabled`;
    }

    if(icon){
        classString += ` Button--withIcon`
    }

    if(fullWidth){
        classString += ` Button--fullWidth`
    }

    if(loading){
        classString += ` Button--loading`
    }

    let elementProps = Object.assign({}, props);
    delete elementProps.className;
    delete elementProps.active;

    return (
        <button className={classString} {...elementProps}>
            <React.Fragment>
                { !iconPosition || iconPosition === "left" ? icon : "" }
                { children }
                { iconPosition === "right" ? icon : "" }
            </React.Fragment>
        </button>
    );
}