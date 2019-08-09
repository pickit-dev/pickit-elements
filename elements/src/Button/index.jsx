import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const Button = (props) => {
  const { 
    variant, 
    size, 
    loading, 
    color, 
    className, 
    disabled, 
    children, 
    icon, 
    iconPosition, 
    fullWidth, 
    background
  } = props;
  let classString = 'Button';
  let style = props.style || {};

  variant && variant.split(" ").forEach(val => {
      classString += ` Button--variant--${val}`
  });

  color && color.split(" ").forEach(val => {
      classString += ` Button--color--${val}`
  });

  size && size.split(" ").forEach(val => {
      classString += ` Button--size--${val}`
  });

  className && (classString += ` ${className}`);
  disabled && (classString += ` Button--disabled`);
  icon && (classString += ` Button--withIcon`);
  fullWidth && (classString += ` Button--fullWidth`);
  loading && (classString += ` Button--loading`);

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

Button.propTypes = {

  /** A string containing the variation of the button. Multiple variants are allowed and should be separated by a space. */
  variant: PropTypes.string,

  /** The size of the button. Available sizes are: "small", "large". */
  size: PropTypes.oneOf(['small', 'large']),

  /** The button will be set to a loading state. Note: Will also disable the button when set to true.  */
  loading: PropTypes.bool,

  /** Defined color classes for the button. Available colors are: "white", "primary". 
   * Combination of colors separated by a space may be supported depending on the scheme. */
  color: PropTypes.string,

  /** The button will be set to disabled. */
  disabled: PropTypes.disabled,

  /** Icon that should be passed into the button. Important to use this prop instead of passing it in as a children. */
  icon: PropTypes.element,

  /** Defines where to position the icon. Currently supported is "left", "right". Default is left. */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /** The button will cover 100% of the width. */
  fullWidth: PropTypes.bool,

};