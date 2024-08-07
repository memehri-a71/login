import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export const CustomRadio = (props) => {
  const {
    onChange,
    options,
    name,
    value,
    optionValue = "value",
    optionLable = "label",
    title,
  } = props;
  return (
    <FormControl component="fieldset">
      <div className="flex items-center w-full">
        <FormLabel component="legend">{title}</FormLabel>
        <RadioGroup
          name={name}
          value={value}
          onChange={onChange}
          defaultValue={options[0]}
        >
          <div className="flex gap-2">
            {options.map((option) => (
              <FormControlLabel
                key={option[optionValue]}
                value={option[optionValue]}
                control={<Radio />}
                label={option[optionLable]}
              />
            ))}
          </div>
        </RadioGroup>
      </div>
    </FormControl>
  );
};
