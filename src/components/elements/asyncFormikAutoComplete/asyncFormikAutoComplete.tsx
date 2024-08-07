import { useState } from "react";
import { axiosGet } from "../../../configs/httpService/httpService";
import { FormikAutoComplete } from "../autoComplete/formikAutoComplete";
import { useQuery } from "@tanstack/react-query";

export const AsyncFormikAutoComplete = (props): JSX.Element => {
  const { url, queryKey = "gg", name } = props;
  const [open, setOpen] = useState(false);

  const { data = [], isLoading } = useQuery({
    queryKey: [queryKey],
    queryFn: () => axiosGet({ url: url }),
    enabled: open,
    staleTime: 300000,
  });

  return (
    <FormikAutoComplete
      {...props}
      optionList={data}
      // autoCompleteLabel={label}
      isLoading={isLoading}
      setOpen={setOpen}
    />
  );
};
