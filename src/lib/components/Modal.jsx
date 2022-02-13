import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CustomIcons from "./CustomIcons";

import ModalSpinner from "./ModalSpinner";

/**
 * component modal have a multiple props for personalize the modal,
 * Any props have a default property and have a default props in the useModal hooks
 * @param {props} props props for the component Modal
 * @returns
 */

function Modal({
  icon = "cross",
  showModal,
  showSpinner,
  setShowModal,
  setShowSpinner,
  showClose = true,
  showFade = false,
  unLockClose = true,
  ...props
}) {
  /**
   * Escape Close function
   * useEffect for listen the keypress
   */
  const Keypress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(!showModal);
        setShowSpinner(!showSpinner);
      }
    },
    [setShowModal, showModal, setShowSpinner, showSpinner]
  );

  useEffect(() => {
    if (unLockClose) {
      window.addEventListener("keyup", Keypress);
      return () => window.removeEventListener("keyup", Keypress);
    }
  }, [Keypress, unLockClose]);

  /**
   * fadeOut function, make a delay when the modal closed for get fade out animation
   * add a className modal__fade-out
   */
  const [fadeOut, setFadeOut] = useState("");
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

  return showModal
    ? ReactDOM.createPortal(
        <div className={[showFade ? "modal__fade-in" : "", fadeOut].join(" ")}>
          <div className="modal__layout">
            <div className="modal__container">
              {showClose ? (
                <CustomIcons
                  icon={icon}
                  unLockClose={unLockClose}
                  close={close}
                />
              ) : (
                ""
              )}
              <div className={"modal__contain"}>{props.children}</div>
            </div>
          </div>
        </div>,
        document.body
      )
    : showSpinner
    ? ReactDOM.createPortal(
        <div className="modal__layout">
          <ModalSpinner />
        </div>,
        document.body
      )
    : "";
}

export default Modal;
