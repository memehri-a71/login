import { Button } from "@mui/material";

export const CustomButton = (props: any) => {
  const {
    children,
    type = "submit",
    variant = "contained",
    onClick,
    color = "primary",
  } = props;
  return (
    <Button
      type={type}
      variant={variant}
      fullWidth
      color={color}
      onClick={onClick}
      disableRipple
    >
      {children}
    </Button>
  );
};
