import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { CustomRadioProps } from "../../../types/radio";

export const CustomRadio = (props: CustomRadioProps) => {
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
        <p>{title}:</p>
        <RadioGroup
          name={name}
          value={value}
          onChange={onChange}
          defaultValue={options[0]}
        >
          <div className="flex gap-2">
            {options.map((option: Record<string, any>) => (
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
