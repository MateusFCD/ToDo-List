import { ButtonDelete, TaskTodo } from "../../theme";
import { Trash } from "phosphor-react";

interface PropsTask {
  content: string;
  children: any;
  onDeleteTask: (task: string) => void;
}

export function Task({ content, onDeleteTask, children }: PropsTask) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <TaskTodo>
      {children}
      <ButtonDelete onClick={handleDeleteTask}>
        <Trash size={20} />
      </ButtonDelete>
    </TaskTodo>
  );
}
