import { ButtonDelete, TaskTodo } from "../../theme";
import CheckBox from "@mui/material/Checkbox";
import { Trash } from "phosphor-react";

interface PropsTask {
  content: string;
  onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask }: PropsTask) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <TaskTodo>
      <CheckBox />
      {content}
      <ButtonDelete onClick={handleDeleteTask}>
        <Trash size={20} />
      </ButtonDelete>
    </TaskTodo>
  );
}
