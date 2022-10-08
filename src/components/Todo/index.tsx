import { Container, Box } from "@mui/material";
import { Input, Button, TasksCreated, TasksDone, SpanCount } from "../../theme";
import { PlusCircle } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Task } from "../Task";

export function Todo() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask() {
    event?.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }

  function handleNewTaskChange() {
    setNewTaskText(event?.target.value);
  }

  function deleteTask(tasksToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== tasksToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  const count = tasks.length;

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
            onChange={handleNewTaskChange}
          />
          <Button type="submit">
            Criar
            <PlusCircle size={20} />
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItens: "flex-end",
            gap: "530px",
            marginTop: "4rem",
          }}
        >
          <TasksCreated>
            Tarefas criadas <SpanCount>{count}</SpanCount>
          </TasksCreated>
          <TasksDone>
            Concluídos <SpanCount></SpanCount>
          </TasksDone>
        </Box>

        <Box>
          {tasks.map((task) => {
            return <Task key={task} content={task} onDeleteTask={deleteTask} />;
          })}
        </Box>
      </form>
    </Container>
  );
}
