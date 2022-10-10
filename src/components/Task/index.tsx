import { ButtonDelete, TaskTodo } from "../../theme";
import { FormControlLabel } from "@mui/material";
import CheckBox from "@mui/material/Checkbox";
import { Trash } from "phosphor-react";
import React, { SyntheticEvent, useState } from "react";

interface PropsTask {
  content: string;
  onDeleteTask: (task: string) => void;
  onCountTaskDone: (done: boolean) => void;
}

export function Task({ content, onDeleteTask, onCountTaskDone }: PropsTask) {
  function handleTaskDone() {
    onCountTaskDone(false);
  }
  console.log({ handleTaskDone });

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <TaskTodo>
      <FormControlLabel
        control={<CheckBox onChange={handleTaskDone} />}
        label={content}
        onChange={handleTaskDone}
      />
      <ButtonDelete onClick={handleDeleteTask}>
        <Trash size={20} />
      </ButtonDelete>
    </TaskTodo>
  );
}
