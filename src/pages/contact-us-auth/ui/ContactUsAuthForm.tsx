import {
  FormControl,
  Input,
  InputLabel,
  Stack,
  StepLabel,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import StyledButton from "shared/ui/StyledButton";
import StyledInput from "shared/ui/StyledInput";
import styled from "styled-components";

const StyledForm = styled.form`
  padding: 25px;
  border: 1px solid #3b3b3b;
  border-radius: 8px;
  background: #fff;
  max-width: 320px;
  width: 100%;
`;

export default function ContactUsAuthForm() {
  return (
    <StyledForm>
      <StyledInput id="name" defaultValue="Value" />
      <StyledInput id="email" defaultValue="Value" />
      <TextareaAutosize
        id="message"
        style={{
          maxWidth: "100%",
          minWidth: "100%",
          minHeight: "100px",
          maxHeight: "250px",
        }}
      />
      <StyledButton>Submit</StyledButton>
    </StyledForm>
  );
}
