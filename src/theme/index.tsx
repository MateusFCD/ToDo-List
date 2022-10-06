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
  margin-right: 8px;
  padding: 16px;
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
  padding: 16px;
  font-size: 0.875rem;
  color: #f2f2f2;
  font-weight: 700;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  gap: 8px;
`;
