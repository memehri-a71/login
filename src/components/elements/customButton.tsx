import { Button } from "@mui/material";

export const CustomButton = (props:any) => {
  const { children, type = "submit" } = props;
  return (
    <Button type={type} variant="contained" fullWidth color="success">
      {children}
    </Button>
  );
};
