import { ClipboardText } from "phosphor-react";
import { WarningContainer } from "../../theme";

export function Warning() {
  return (
    <WarningContainer>
      <ClipboardText size={60} />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </WarningContainer>
  );
}
