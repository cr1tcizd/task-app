import { Input, InputProps } from "@mui/material";

interface StyledInputProps extends InputProps {}

export default function StyledInput(props: StyledInputProps) {
  return (
    <Input
      disableUnderline={true}
      fullWidth
      sx={{
        padding: "4px 8px",
        border: "1px solid #b8b1b1",
        borderRadius: "8px",
        fontFamily: "Times New Roman",
      }}
      {...props}
    />
  );
}
