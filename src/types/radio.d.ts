export interface CustomRadioProps {
    onChange: (value: any) => void;
    options: Record<string, any>[];
    name: string;
    value: any;
    optionValue: string;
    optionLable: string;
    title?: string;
  }