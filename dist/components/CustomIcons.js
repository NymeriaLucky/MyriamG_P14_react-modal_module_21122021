"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ri = require("react-icons/ri");

var _bs = require("react-icons/bs");

var _ti = require("react-icons/ti");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Component for customize the close icon of the modal
 * @param {props} props the props of the component
 * @returns 
 */
function CustomIcons(_ref) {
  let {
    icon,
    unLockClose,
    close
  } = _ref;

  if (icon === "cross") {
    return /*#__PURE__*/_react.default.createElement(_ri.RiCloseFill, {
      className: "modal__close-btn",
      "aria-label": "Close modal",
      onClick: unLockClose ? close : ""
    });
  }

  if (icon === "exclamation") {
    return /*#__PURE__*/_react.default.createElement(_bs.BsExclamation, {
      className: "modal__close-btn",
      "aria-label": "Close modal",
      onClick: unLockClose ? close : ""
    });
  }

  if (icon === "heart") {
    return /*#__PURE__*/_react.default.createElement(_ti.TiHeart, {
      className: "modal__close-btn",
      "aria-label": "Close modal",
      onClick: unLockClose ? close : ""
    });
  }

  if (icon === "star") {
    return /*#__PURE__*/_react.default.createElement(_ti.TiStar, {
      className: "modal__close-btn",
      "aria-label": "Close modal",
      onClick: unLockClose ? close : ""
    });
  }
}

var _default = CustomIcons;
exports.default = _default;