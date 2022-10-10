import { Container, Box } from "@mui/material";
import { Input, Button, TasksCreated, TasksDone, SpanCount } from "../../theme";
import { PlusCircle } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Task } from "../Task";
import { Warning } from "../Warning";

export function Todo() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [done, setDone] = useState(false);

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

  function CountTasksDone() {
    setDone(true);
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
            gap: "400px",
            marginTop: "4rem",
          }}
        >
          <TasksCreated>
            Tarefas criadas <SpanCount>{count}</SpanCount>
          </TasksCreated>
          <TasksDone>
            Concluídas <SpanCount>{`${count} de ${count}`}</SpanCount>
          </TasksDone>
        </Box>

        <Box>
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return (
                <Task
                  key={task}
                  content={task}
                  onDeleteTask={deleteTask}
                  onCountTaskDone={CountTasksDone}
                />
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
