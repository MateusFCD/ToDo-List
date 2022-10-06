import { Container, Box } from "@mui/material";
import { Input, Button } from "../../theme";
import { PlusCircle } from "phosphor-react";

export function Todo() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
        top: "-25px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Input placeholder="Adicione uma nova tarefa" />
        <Button type="submit">
          Criar
          <PlusCircle size={20} />
        </Button>
      </Box>

      <Box>
        <span>Tarefas Criadas</span>
        <span>Concluídos</span>
      </Box>

      <Box></Box>
    </Container>
  );
}
