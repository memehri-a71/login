import { useLoginVeiwModel } from "./veiwModel";

export const Login = (): any => {
  const { CurrentAuthComponent } = useLoginVeiwModel();

  return <CurrentAuthComponent />;
};


