import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { BsExclamation } from "react-icons/bs";
import { TiHeart, TiStar } from "react-icons/ti";

/**
 * Component for customize the close icon of the modal
 * @param {props} props the props of the component
 * @returns 
 */

function CustomIcons({ icon, unLockClose, close }) {
  if (icon === "cross") {
    return (
      <RiCloseFill
        className="modal__close-btn"
        aria-label="Close modal"
        onClick={unLockClose ? close : ""}
      />
    );
  }
  if (icon === "exclamation") {
    return (
      <BsExclamation
        className="modal__close-btn"
        aria-label="Close modal"
        onClick={unLockClose ? close : ""}
      />
    );
  }
  if (icon === "heart") {
    return (
      <TiHeart
        className="modal__close-btn"
        aria-label="Close modal"
        onClick={unLockClose ? close : ""}
      />
    );
  }
  if (icon === "star") {
    return (
      <TiStar
        className="modal__close-btn"
        aria-label="Close modal"
        onClick={unLockClose ? close : ""}
      />
    );
  }
}

export default CustomIcons;
