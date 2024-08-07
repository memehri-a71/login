import { useState } from "react";
import { axiosGet } from "../../../configs/httpService/httpService";
import { FormikAutoComplete } from "../autoComplete/formikAutoComplete";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "../../../hook/useDebounce";

export const DebounceFormikAutoComplete = (props): JSX.Element => {
  const { url, queryKey = "gg" } = props;
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  //  const { data = [], isLoading } = useQuery({
  //     queryKey: [queryKey],
  //     queryFn: () => axiosGet({ url: url }),
  //     enabled: open,
  //     staleTime: 300000,
  //   });

  const inputHandler = useDebounce(async (newInputValue, provinceId = 8) => {
    console.log(newInputValue);
    // setData([]);
    // newInputValue != "" &&
    //   (await axiosGet({
    //     url: `${INSURANCE_BRANCH}?name=${newInputValue}&insurance=DEY&province=${provinceId}`,
    //   }).then((res) => {
    //     setData(res.response);
    //     console.log(res.response);
    //   }));
  }, 1000);

  return (
    <FormikAutoComplete
      {...props}
      optionList={data}
      inputHandle={inputHandler}
      // isLoading={isLoading}
      setOpen={setOpen}
    />
  );
};
