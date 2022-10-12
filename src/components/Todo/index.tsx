import { Container, Box } from "@mui/material";
import {
  Input,
  Button,
  TasksCreated,
  TasksDone,
  SpanCount,
  TaskTodo,
  ButtonDelete,
  CheckBox,
} from "../../theme";
import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { Warning } from "../Warning";

import { Trash } from "phosphor-react";

interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

export function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  console.log(completedTaskCount);

  function handleCreateNewTask() {
    event?.preventDefault();
    if (newTaskText) {
      setTasks([
        ...tasks,
        {
          id: new Date().getMilliseconds(),
          text: newTaskText,
          isCompleted: false,
        },
      ]);
    }
    setNewTaskText("");
  }

  function handleNewTaskChange(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, isCompleted: !task.isCompleted }
          : { ...task }
      )
    );
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const count = tasks.length;

  const handleComplete = (id: number) => {
    let list = tasks.map((task) => {
      let item = {};
      if (task.id == id) {
        if (!task.isCompleted) {
          //Task is pending, modifying it to complete and increment the count
          setCompletedTaskCount(completedTaskCount + 1);
        } else {
          //Task is complete, modifying it back to pending, decrement Complete count
          setCompletedTaskCount(completedTaskCount - 1);
        }
        item = { ...task, isCompleted: !task.isCompleted };
      } else item = { ...task };
      return item;
    });
    setTasks(list as any);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        top: "-25px",
      }}
    >
      <form onSubmit={handleCreateNewTask} action="">
        <Box sx={{ display: "flex" }}>
          <Input
            name="task"
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <Button type="submit" onClick={handleCreateNewTask}>
            Criar
            <PlusCircle size={20} />
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItens: "flex-end",
            gap: "400px",
            marginTop: "4rem",
          }}
        >
          <TasksCreated>
            Tarefas criadas <SpanCount>{count}</SpanCount>
          </TasksCreated>
          <TasksDone>
            Concluídas{" "}
            <SpanCount>{`${completedTaskCount} de ${count}`}</SpanCount>
          </TasksDone>
        </Box>

        <Box>
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return (
                <TaskTodo
                  key={task.id}
                  onChange={() => handleNewTaskChange(task.id)}
                >
                  <CheckBox
                    type="checkbox"
                    readOnly
                    checked={task.isCompleted}
                    onClick={() => handleComplete(task.id)}
                  />
                  <p>{task.text}</p>
                  <ButtonDelete onClick={() => deleteTask(task.id)}>
                    <Trash size={20} />
                  </ButtonDelete>
                </TaskTodo>
              );
            })
          ) : (
            <Warning />
          )}
          ;
        </Box>
      </form>
    </Container>
  );
}
