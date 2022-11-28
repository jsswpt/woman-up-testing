import React, { useEffect } from "react";

import { IconButton } from "shared/ui/button/icon-button";
import { MdCheck, MdEdit } from "react-icons/md";
import { useStore } from "effector-react";
import { useToggleTaskFeature } from "../model";

const ToggleTaskStateFeature = (props: { taskId: string }) => {
  const model = useToggleTaskFeature(props.taskId);

  return (
    <IconButton
      color="primary"
      variant="outlined"
      size="large"
      onClick={model.toggleTaskState}
      // onClick={() => toggleTaskState()}
    >
      {model?.findedTask.isDone ? <MdCheck /> : <></>}
    </IconButton>
  );
};

export default ToggleTaskStateFeature;
