import { Button, CircularProgress } from "@mui/material";

export const CustomButton = (props: any) => {
  const {
    children,
    type = "submit",
    variant = "contained",
    onClick,
    color = "primary",
    isLoading,
  } = props;
  return (
    <Button
      type={type}
      variant={variant}
      fullWidth
      color={color}
      onClick={onClick}
      disableRipple
      disabled={isLoading}
    >
      <div className="flex gap-2 items-center">
        {children}
        {isLoading ? (
          <CircularProgress
            size="20px"
            sx={{
              color: "white",
            }}
          />
        ) : null}
      </div>
    </Button>
  );
};
