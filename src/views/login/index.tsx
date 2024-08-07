import { useLoginVeiwModel } from "./veiwModel";

export const Login = (): any => {
  const { CurrentAuthComponent } = useLoginVeiwModel();
  console.log("name", CurrentAuthComponent.name);

  return <CurrentAuthComponent />;
};
