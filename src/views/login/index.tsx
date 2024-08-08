import { useLoginVeiwModel } from "./imports";


export const Login = (): any => {
  const { CurrentAuthComponent } = useLoginVeiwModel();

  return <CurrentAuthComponent />;
};
