import { useLoginVeiwModel } from "./imports";


export const Login = () => {
  const { CurrentAuthComponent } = useLoginVeiwModel();

  return <CurrentAuthComponent />;
};
