import { Button, ButtonProps } from "@mui/material";

interface StyledButtonProps extends ButtonProps {}
export default function StyledButton({
  children,
  ...props
}: StyledButtonProps) {
  console.log(props);
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        background: "#2C2C2C",
        borderRadius: "12px",
        textTransform: "none",
        padding: "8px 60px",
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
