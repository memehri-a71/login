import { useEffect, useRef } from "react";
import { FormikTextField } from "../textField/formikTextField";
import { useFormikContext } from "formik";
import { NUMBER_REGEX } from "../../../constants/constant";

export const InputOtp = ({ length = 5, disabled = false }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const formikProps = useFormikContext();
  const otp = new Array(length).fill("");

  const handleChange = (index: any, e: any) => {
    const value = e.target.value;
    if (!NUMBER_REGEX.test(value)) {
      formikProps.setFieldValue(`name${index}`, "");
    }
    if (
      value &&
      NUMBER_REGEX.test(value) &&
      index < length - 1 &&
      inputRefs.current[index + 1]
    ) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e: any, index: any) => {
    if (e?.key === "Backspace" && index > 0 && inputRefs.current[index - 1]) {
      formikProps.setFieldValue(`name${index}`, "");
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  return (
    <div
      className="flex !justify-center !items-center gap-x-2 text-red-600 pb-10"
      style={{ direction: "ltr" }}
    >
      {otp.map((_value, index) => {
        return (
          <FormikTextField
            key={`index-${index}`}
            fullWidth={false}
            disabled={disabled}
            showErrorText={false}
            inputProps={{
              autoComplete: "off",
              maxLength: 1,
              className:
                "!rounded-xl !font-bold !text-xl  text-center h-14 w-14",
              type: "tel",
            }}
            inputRef={(input: HTMLInputElement | null) => {
              if (input) {
                inputRefs.current[index] = input;
              }
            }}
            name={`name${index}`}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e: any) => {
              handleKeyDown(e, index);
            }}
          />
        );
      })}
    </div>
  );
};
