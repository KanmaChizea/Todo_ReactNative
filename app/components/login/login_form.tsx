import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Colors from '../../styles/colors';

interface CustomTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const InputForm = ({
  /// value of the text field
  value,
  onChangeText,
  /// hint text
  placeholder,
  secureTextEntry = false,
}: CustomTextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      <TextInput
        style={[styles.inputField, isFocused && styles.inputFieldFocused]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        cursorColor={Colors.green}
        selectionColor={Colors.green}
        placeholderTextColor={Colors.grey2}
        secureTextEntry={secureTextEntry}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 24,
    borderRadius: 12,
    fontSize: 14,
  },
  inputFieldFocused: {
    height: 40,
    borderWidth: 1.5,
    borderColor: Colors.green,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 24,
    borderRadius: 12,
    fontSize: 14,
  },
});

export default InputForm;
