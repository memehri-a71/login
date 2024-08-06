import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { axiosGet } from "../../../configs/httpService/httpService";

export const CustomAutoComplete = (props) => {
  const { onChange, url, optionLabel, placeholder, disabled, name } = props;
  const [open, setOpen] = useState(false);

  const { data: options = [], isLoading } = useQuery({
    queryKey: [name],
    queryFn: () => axiosGet({ url: url }),
    enabled: open,
    staleTime: 300000,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Autocomplete
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      options={Array.isArray(options) ? options : [options]}
      getOptionLabel={(option) => option[optionLabel]}
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
  );
};

// import { Autocomplete, CircularProgress, TextField } from "@mui/material";
// import { useQuery } from "@tanstack/react-query";
// import React, { useEffect, useState } from "react";
// import { axiosGet } from "../../configs/httpService/httpService";
// import { PROVINCES_WOP } from "../../constants/endPoints";

// export const CustomAutoComplete = ({options}) => {
//   // const [open, setOpen] = useState(false);
//   // const [options, setOptions] = useState([]);
//   // const loading = open && options.length === 0;
//   // const selectFunction = (data) => {
//   //   setOptions(data);
//   // };
//   // const { data, isLoading } = useQuery({
//   //   queryKey: ["provinceOption"],
//   //   queryFn: () =>
//   //     axiosGet({
//   //       url: PROVINCES_WOP,
//   //     }),
//   //   enabled: open,
//   //   select: selectFunction,
//   // });

//   // const loading = isLoading;

//   // useEffect(() => {
//   //   let active = true;

//   //   if (!loading) {
//   //     return undefined;
//   //   }

//   //   (async () => {
//   //     const response = await fetch(
//   //       "https://jsonplaceholder.typicode.com/posts"
//   //     );

//   //     const countries = await response.json();

//   //     if (active) {
//   //       setOptions(countries);
//   //     }
//   //   })();

//   //   return () => {
//   //     active = false;
//   //   };
//   // }, [loading]);

//   // React.useEffect(() => {
//   //   if (!open) {
//   //     setOptions([]);
//   //   }
//   // }, [open]);

//   return (
//     <Autocomplete
//       id="asynchronous-demo"
//       sx={{ width: 300 }}
//       // open={open}
//       // loading={loading}
//       // onOpen={() => {
//       //   setOpen(true);
//       // }}
//       // onClose={() => {
//       //   setOpen(false);
//       // }}
//       isOptionEqualToValue={(option, value) => option.title === value.title}
//       getOptionLabel={(option) => option.title}
//       options={options}
//       renderInput={(params) => {
//         return (
//           <TextField
//             {...params}
//             label="Asynchronous"
//             InputProps={{
//               ...params.InputProps,
//               endAdornment: (
//                 <React.Fragment>
//                   {/* {isLoading ? (
//                     <CircularProgress color="inherit" size={20} />
//                   ) : null} */}
//                   {params.InputProps.endAdornment}
//                 </React.Fragment>
//               ),
//             }}
//           />
//         );
//       }}
//     />
//   );
// };

// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import CircularProgress from '@mui/material/CircularProgress';
// import axios from 'axios';

// export const CustomAutoComplete = () => {
//   const [options, setOptions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [open, setOpen] = useState(false);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       setOptions(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOpen = () => {
//     setOpen(true);
//     if (options.length === 0) {
//       fetchData();
//     }
//   };

//   return (
//     <Autocomplete
//       open={open}
//       fullWidth
//       onOpen={handleOpen}
//       onClose={() => setOpen(false)}
//       options={options}
//       getOptionLabel={(option) => option.title}
//       loading={loading}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label="Select an option"
//           variant="outlined"
//           InputProps={{
//             ...params.InputProps,
//             endAdornment: (
//               <>
//                 {loading ? <CircularProgress color="inherit" size={20} /> : null}
//                 {params.InputProps.endAdornment}
//               </>
//             ),
//           }}
//         />
//       )}
//     />
//   );
// };
