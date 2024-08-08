export interface InitialValuesAgentInfo {
  address: string;
  province: Record<string, any>;
  agencyCode: string;
  insuranceBranch: Record<string, any>;
  phone: string;
  cityCode: string;
  city: Record<string, any>;
  agencyType: string;
  agencyName: string;
}
export interface UseAgentInfo {
  initialValues: InitialValuesAgentInfo;
  validationSchema: any;
  onSubmit: (values: InitialValuesAgentInfo) => void;
  isPending: boolean;
  handleSearchAgentCode: (value: any, setFeildValue: any) => void;
}
