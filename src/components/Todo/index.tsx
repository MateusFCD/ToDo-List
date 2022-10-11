import { Container, Box } from "@mui/material";
import { Input, Button, TasksCreated, TasksDone, SpanCount } from "../../theme";
import { PlusCircle } from "phosphor-react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Task } from "../Task";
import { Warning } from "../Warning";

import { FormControlLabel } from "@mui/material";
import CheckBox from "@mui/material/Checkbox";

export function Todo() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [done, setDone] = useState<boolean[]>([[]]);

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

  const CountTasksDone = (event: any) => {
    //React.ChangeEvent<HTMLInputElement> : tipo de event ** ver ajuda nisso.
    setDone([event.target.checked]);
  };

  const count = tasks.length;

  function Convert() {
    if (done === true) {
      return 1;
    } else {
      return 0;
    }
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
            Concluídas <SpanCount>{`${Convert()} de ${count}`}</SpanCount>
          </TasksDone>
        </Box>

        <Box>
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return (
                <>
                  <Task key={task} content={task} onDeleteTask={deleteTask}>
                    <FormControlLabel
                      control={<CheckBox checked={done[[]]} />}
                      label={task}
                      onChange={CountTasksDone}
                    />
                  </Task>
                </>
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
