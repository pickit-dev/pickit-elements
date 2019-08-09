import React, { Component } from 'react';
import './Button.scss';

export const Button = (props) => {
    const { variant, size, loading, color, className, disabled, children, icon, iconPosition, fullWidth, background } = props;
    let classString = 'Button';
    let style = {};

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

    if(background){
        style.background = background;
    }

    let elementProps = Object.assign({}, props);
    delete elementProps.className;
    delete elementProps.active;

    return (
        <button className={classString} style={style} {...elementProps}>
            <React.Fragment>
                { (!iconPosition && icon) || iconPosition === "left" ? <div className="Button__icon">{icon}</div> : "" }
                { children }
                { iconPosition === "right" ? <div className="Button__icon">{icon}</div> : "" }
            </React.Fragment>
        </button>
    );
}