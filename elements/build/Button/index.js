"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Button = function Button(props) {
  var variant = props.variant,
      size = props.size,
      loading = props.loading,
      color = props.color,
      className = props.className,
      disabled = props.disabled,
      children = props.children,
      icon = props.icon,
      iconPosition = props.iconPosition,
      fullWidth = props.fullWidth,
      background = props.background;
  var classString = 'Button';
  var style = props.style || {};
  variant && variant.split(" ").forEach(function (val) {
    classString += " Button--variant--".concat(val);
  });
  color && color.split(" ").forEach(function (val) {
    classString += " Button--color--".concat(val);
  });
  size && size.split(" ").forEach(function (val) {
    classString += " Button--size--".concat(val);
  });
  className && (classString += " ".concat(className));
  disabled && (classString += " Button--disabled");
  icon && (classString += " Button--withIcon");
  fullWidth && (classString += " Button--fullWidth");
  loading && (classString += " Button--loading");
  var elementProps = Object.assign({}, props);
  delete elementProps.className;
  delete elementProps.active;
  delete elementProps.fullWidth;
  return _react["default"].createElement("button", _extends({
    className: classString,
    style: style
  }, elementProps), _react["default"].createElement(_react["default"].Fragment, null, !iconPosition && icon || iconPosition === "left" ? _react["default"].createElement("div", {
    className: "Button__icon"
  }, icon) : "", children, iconPosition === "right" ? _react["default"].createElement("div", {
    className: "Button__icon"
  }, icon) : ""));
};

exports.Button = Button;
Button.propTypes = {
  /** A string containing the variation of the button. 
   * Multiple variants are allowed and should be separated by a space.
   * 
   * The available variants are "contained", "raised", "link" */
  variant: _propTypes["default"].string,

  /** The size of the button. 
   * 
   * Available sizes are: "small", "large". */
  size: _propTypes["default"].oneOf(['small', 'tiny', 'large']),

  /** The button will be set to a loading state. 
   * 
   * Note: Will also disable the button when set to true.  */
  loading: _propTypes["default"].bool,

  /** Defined color classes for the button. Available colors are: "white", "primary". 
   * 
   * Combination of colors separated by a space may be supported depending on the scheme. */
  color: _propTypes["default"].string,

  /** The button will be set to disabled. */
  disabled: _propTypes["default"].bool,

  /** Icon that should be passed into the button. 
   * 
   * Important to use this prop instead of passing it in as a children. */
  icon: _propTypes["default"].element,

  /** Defines where to position the icon. 
   * 
   * Currently supported is "left", "right". Default is left. */
  iconPosition: _propTypes["default"].oneOf(['left', 'right']),

  /** The button will cover 100% of the width. */
  fullWidth: _propTypes["default"].bool
};