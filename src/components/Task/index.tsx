import { ButtonDelete, TaskTodo } from "../../theme";
import { FormControlLabel } from "@mui/material";
import CheckBox from "@mui/material/Checkbox";
import { Trash } from "phosphor-react";
import React, { SyntheticEvent, useState } from "react";

interface PropsTask {
  content: string;
  onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask }: PropsTask) {
  const [done, setDone] = useState(false);
  console.log({ done });

  const handleTaskDone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDone(event.target.checked);
  };

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <TaskTodo >
      <FormControlLabel
        control={<CheckBox checked={done} />}
        label={content}
        onChange={handleTaskDone}
      />
      <ButtonDelete onClick={handleDeleteTask}>
        <Trash size={20} />
      </ButtonDelete>
    </TaskTodo>
  );
}
