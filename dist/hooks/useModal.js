"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

/**
 * Hook useModal manage display of Modal and the spinner
 * @returns props
 */
const useModal = () => {
  const [isShowingModal, setIsShowingModal] = (0, _react.useState)(false);
  const [isShowingSpinner, setIsShowingSpinner] = (0, _react.useState)(false);

  function setShowModal() {
    setIsShowingModal(!isShowingModal);
  }

  function setShowSpinner() {
    setIsShowingSpinner(!isShowingSpinner);
  }

  return [isShowingModal, setShowModal, isShowingSpinner, setShowSpinner];
};

var _default = useModal;
exports.default = _default;