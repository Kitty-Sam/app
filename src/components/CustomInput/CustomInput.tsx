import React from 'react';
import { Text, TextInput } from 'react-native';
import { COLORS } from '../../theme/colors';
import { commonInputPropsType } from './types';
import { styles } from './styles';

export const CustomInput = (props: commonInputPropsType) => {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <TextInput
        placeholderTextColor={COLORS.TEXT_COLORS.soya_Bean}
        style={[styles.textInput, hasError && styles.errorInput]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};
