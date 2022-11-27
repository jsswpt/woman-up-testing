import classNames from "classnames";
import React, { useEffect, useMemo, useRef } from "react";
import ReactDOM from "react-dom";
import { useAnimation } from "shared/lib/useAnimation";
import st from "./styles.module.scss";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  className?: any;
  onClose: () => void;
};

export const Modal = (props: ModalProps) => {
  const childrenRef = useRef<HTMLDivElement>(null);
  const animation = useAnimation(props.isOpen, 800);
  const className = props.className || "";

  useEffect(() => {
    if (props.isOpen) {
      animation.toggleAnimation(true);
    } else if (props.isOpen !== animation.isOpen) {
      animation.toggleAnimation(false);
    }
  }, [props.isOpen]);

  //   элемент модального окна
  const modal = useMemo(() => {
    const el = document.createElement("div");
    el.className = classNames(st.modal, className);
    el.addEventListener("click", (evt) => {
      if (!evt.composedPath().includes(childrenRef.current!)) {
        props.onClose();
        animation.toggleAnimation(false);
      }
    });

    return el;
  }, []);

  //   отвечает только за аоткрыто / закрыто
  useEffect(() => {
    if (!animation.isInTransition && !animation.isOpen) {
      modal.remove();
    } else {
      document.body.appendChild(modal);
    }
  }, [animation]);

  //   отвечает за анимацию
  useEffect(() => {
    if (animation.isInTransition && !animation.isOpen) {
      modal.className = classNames(st.modal, className, st.modal_opening);
    } else if (animation.isInTransition && animation.isOpen) {
      modal.className = classNames(st.modal, className, st.modal_closing);
    } else if (!animation.isInTransition && animation.isOpen) {
      modal.className = classNames(st.modal, className, st.modal_opened);
    } else if (!animation.isInTransition && !animation.isOpen) {
      modal.className = classNames(st.modal, className, st.modal_closed);
    }
  }, [animation]);

  return props.isOpen ? (
    ReactDOM.createPortal(<div ref={childrenRef}>{props.children}</div>, modal)
  ) : (
    <></>
  );
};
