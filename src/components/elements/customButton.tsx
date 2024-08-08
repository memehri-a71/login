import { Button } from "@mui/material";

export const CustomButton = (props: any) => {
  const { children, type = "submit", variant = "contained", onClick } = props;
  return (
    <Button
      type={type}
      variant={variant}
      fullWidth
      color="success"
      onClick={onClick}
      disableRipple
    >
      {children}
    </Button>
  );
};
