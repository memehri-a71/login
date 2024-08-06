import { Button } from "@mui/material";
import { Children } from "../../types/common";

export const CustomButton = ({ children }: Children) => {
  return (
    <Button variant="contained" fullWidth color="success">
      {children}
    </Button>
  );
};
