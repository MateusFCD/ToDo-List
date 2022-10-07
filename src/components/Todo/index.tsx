import { Container, Box } from "@mui/material";
import { Input, Button, TasksCreated, TasksDone } from "../../theme";
import { PlusCircle, Trash } from "phosphor-react";
import { useState } from "react";
import { TaskTodo } from "../../theme";
import CheckBox from "@mui/material/Checkbox";

export function Todo() {
  const [taskCreate, setTaskCreate] = useState(0);
  const [done, setDone] = useState(0);
  const [task, setTask] = useState(["Teste"]);
  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask() {
    event?.preventDefault();
    setTask([...task, setNewTask]);
    setNewTask("");
  }

  function handleNewTaskChange() {
    setNewTask(event?.target.value);
  }
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
            value={newTask}
            placeholder="Adicione uma nova tarefa"
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
            Tarefas criadas <span>{taskCreate}</span>
          </TasksCreated>
          <TasksDone>
            Concluídos <span>{done}</span>
          </TasksDone>
        </Box>

        <Box>
          {task.map((task) => {
            return (
              <TaskTodo key={task}>
                <CheckBox />
                {task}
                <Trash size={20} />
              </TaskTodo>
            );
          })}
        </Box>
      </form>
    </Container>
  );
}
