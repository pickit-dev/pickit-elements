"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./Button.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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
  var style = {};
  variant && variant.split(" ").forEach(function (val) {
    classString += " Button--variant--".concat(val);
  });
  color && color.split(" ").forEach(function (val) {
    classString += " Button--color--".concat(val);
  });
  size && size.split(" ").forEach(function (val) {
    classString += " Button--size--".concat(val);
  });

  if (className) {
    classString += " ".concat(className);
  }

  if (disabled) {
    classString += " Button--disabled";
  }

  if (icon) {
    classString += " Button--withIcon";
  }

  if (fullWidth) {
    classString += " Button--fullWidth";
  }

  if (loading) {
    classString += " Button--loading";
  }

  if (background) {
    style.background = background;
  }

  var elementProps = Object.assign({}, props);
  delete elementProps.className;
  delete elementProps.active;
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