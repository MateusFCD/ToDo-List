import { createTheme, TextField } from "@mui/material";
import styled from "styled-components";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4EA8DE  ",
      dark: "#1E6F9F",
      700: "#0D0D0D",
      500: "#262626",
      400: "#333333",
      300: "#808080",
      200: "#D9D9D9",
      100: "#F2F2F2",
    },
    secondary: {
      main: "#8284FA ",
      dark: "#5E60CE ",
    },
    background: {
      default: "#1A1A1A", //600
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export const To = styled.span`
  font-size: 2.5rem;
  font-weight: 900;
  color: #4ea8de;
  margin-left: 12%;
`;

export const Do = styled.span`
  font-size: 2.5rem;
  font-weight: 900;
  color: #8284fa;
`;

export const Input = styled.input`
  background-color: #262626;
  width: 39.875rem;
  height: 3.375rem;
  border-radius: 8px;
  margin-right: 0.5rem;
  padding: 1rem;
  border-color: rgba(38, 38, 38, 0.1);
  font-family: "Inter";
  font-size: 1rem;
  color: #808080;
`;

export const Button = styled.button`
  background-color: #1e6f9f;
  width: 5.938rem;
  height: 3.25rem;
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.875rem;
  color: #f2f2f2;
  font-weight: 700;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  gap: 8px;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: #4ea8de;
  }
`;

export const TasksCreated = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #4ea8de;
`;

export const TasksDone = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #8284fa;
`;

export const TaskTodo = styled.div`
  box-sizing: border-box;
  display: flex;
  word-wrap: break-word;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  width: 46rem;
  height: 4.5rem;
  background: #262626;
  border: 1px solid #333333;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  margin-top: 1.5rem;
  color: #f2f2f2;
`;

export const ButtonDelete = styled.button`
  background: none;
  border: none;
  display: block;
  position: absolute;
  left: 76%;
  right: 24%;
  color: #808080;
  cursor: pointer;
`;

export const SpanCount = styled.span`
  width: 24px;
  height: 19px;
  padding: 2px 8px;
  background: #333333;
  color: #f2f2f2;
  border-radius: 999px;
`;

export const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  svg {
    color: #808080;
    margin-bottom: 16px;
  }

  p {
    font-size: 1rem;
    font-weight: 700;
    color: #808080;
    line-height: 22.4px;
    padding: 0;
    margin: 0;

    :after {
      font-weight: 400;
    }
  }
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;

  width: 1.15rem;
  height: 1.15rem;
  background-color: #262626;
  border: 2px solid #4ea8de;
  border-radius: 100%;
  transform: translateY(-0.075em);
  cursor: pointer;

  display: grid;
  place-content: center;

  ::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    background-color: #f2f2f2;
    transform-origin: bottom left;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  :checked {
    background-color: #8284fa;
    border-color: #8284fa;
  }

  :checked::before {
    transform: scale(1);
  }

  :focus {
    outline: max(2px, 0.15em) solid #8284fa;
    outline-offset: max(2px, 0.15em);
  }

  :checked + p {
    text-decoration: line-through;
    color: #808080;
  }
`;
