"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Component Spinner
 * @returns render
 */
const ModalSpinner = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__spinner-loading"
  });
};

var _default = ModalSpinner;
exports.default = _default;