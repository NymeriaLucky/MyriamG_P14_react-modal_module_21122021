"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _CustomIcons = _interopRequireDefault(require("./CustomIcons"));

var _ModalSpinner = _interopRequireDefault(require("./ModalSpinner"));

const _excluded = ["icon", "showModal", "showSpinner", "setShowModal", "setShowSpinner", "showClose", "showFade", "unLockClose"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * component modal have a multiple props for personalize the modal,
 * Any props have a default property and have a default props in the useModal hooks
 * @param {props} props props for the component Modal
 * @returns
 */
function Modal(_ref) {
  let {
    icon = "cross",
    showModal,
    showSpinner,
    setShowModal,
    setShowSpinner,
    showClose = true,
    showFade = false,
    unLockClose = true
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  /**
   * Escape Close function
   * useEffect for listen the keypress
   */
  const Keypress = (0, _react.useCallback)(e => {
    if (e.key === "Escape" && showModal) {
      setShowModal(!showModal);
      setShowSpinner(!showSpinner);
    }
  }, [setShowModal, showModal, setShowSpinner, showSpinner]);
  (0, _react.useEffect)(() => {
    if (unLockClose) {
      window.addEventListener("keyup", Keypress);
      return () => window.removeEventListener("keyup", Keypress);
    }
  }, [Keypress, unLockClose]);
  /**
   * fadeOut function, make a delay when the modal closed for get fade out animation
   * add a className modal__fade-out
   */

  const [fadeOut, setFadeOut] = (0, _react.useState)("");

  const close = () => {
    if (showFade) {
      setFadeOut("modal__fade-out");
      setTimeout(setShowModal, 2000);
      setTimeout(setShowSpinner, 100);
    } else {
      setShowSpinner();
      setShowModal();
    }
  };

  return showModal ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
    className: [showFade ? "modal__fade-in" : "", fadeOut].join(" ")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__layout"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__container"
  }, showClose ? /*#__PURE__*/_react.default.createElement(_CustomIcons.default, {
    icon: icon,
    unLockClose: unLockClose,
    close: close
  }) : "", /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__contain"
  }, props.children)))), document.body) : showSpinner ? /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__layout"
  }, /*#__PURE__*/_react.default.createElement(_ModalSpinner.default, null)), document.body) : "";
}

var _default = Modal;
exports.default = _default;