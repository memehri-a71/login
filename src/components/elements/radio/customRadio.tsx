import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export const CustomRadio = (props) => {
  const { onChange } = props;
  return (
    <RadioGroup {...props} onChange={(event) => onChange(event.target.value)}>
      <div className="flex items-center">
        <label>نوع نمایندگی:</label>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </div>
    </RadioGroup>
  );
};
