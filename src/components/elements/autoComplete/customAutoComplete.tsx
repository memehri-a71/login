import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { axiosGet } from "../../../configs/httpService/httpService";
import { HelperText } from "../helperText";
import { useDebounce } from "../../../hook/useDebounce";
import { CustomAutoCompleteProps } from "../../../types/autoComplete";

export const CustomAutoComplete = (props: CustomAutoCompleteProps) => {
  const {
    url = '',
    optionLabel = 'label',
    placeholder,
    disabled,
    error,
    helperText,
    querySearch='',
    onChange,
  } = props;

  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [options, setOptions] = useState<any[]>([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosGet({
        url,
      });
      setOptions(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const inputHandler = useDebounce(async (newInputValue: string) => {
    setOptions([]);
    newInputValue != "" &&
      (await axiosGet({
        url: `${url}&${querySearch}=${newInputValue}`,
      }).then((res) => {
        setOptions(res.response);
      }));
  }, 800);

  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
    setOptions([]);
    if (querySearch == "") {
      fetchData();
    }
  };

  return (
    <div className="w-full">
      <Autocomplete
        {...props}
        open={open}
        onOpen={handleOpen}
        onClose={handleClose}
        onInputChange={(_event, newInputValue) => {
          querySearch!='' && inputHandler(newInputValue);
        }}
        options={Array.isArray(options) ? options : [options]}
        getOptionLabel={(option: Record<string, any>) =>
          option[optionLabel] ? option[optionLabel] : ""
        }
        fullWidth
        size="small"
        disabled={disabled}
        loading={isLoading}
        onChange={(_event, newValue): void => {
          onChange?.(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {isLoading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
      {error ? <HelperText>{helperText}</HelperText> : null}
    </div>
  );
};

