import { InputProps } from 'react-native-elements';

export interface commonInputPropsType extends InputProps {
  field: {
    name: string;
    onBlur: (name: string) => void;
    onChange: any;
    value: string;
  };
  form: {
    errors: any;
    setFieldTouched: (name: string) => void;
    touched: any;
  };
}
