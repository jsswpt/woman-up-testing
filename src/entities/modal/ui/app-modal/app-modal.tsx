import { useStore } from "effector-react";
import {
  $isOpen,
  $currentChild,
  setCurrentChild,
  toggleIsOpen,
} from "entities/modal/model";
import { Modal } from "shared/ui/modal/modal";

import st from "./styles.module.scss";

export const AppModal = () => {
  const isOpen = useStore($isOpen);
  const currentChild = useStore($currentChild);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => toggleIsOpen(false)}
      className={st.modal}
    >
      {currentChild ? currentChild : <></>}
    </Modal>
  );
};
