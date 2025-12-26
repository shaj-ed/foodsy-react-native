import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Text, TextInput } from "react-native";

type RHFInputTextProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  autoComplete?: "off" | "username" | "password" | "email" | "name" | "tel";
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLine?: number;
};

const RHFInputText = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder = "Enter value",
  autoComplete = "off",
  secureTextEntry = false,
}: RHFInputTextProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          <Text className="text-gray-400 text-xl mt-6 mb-4">{label}</Text>

          <TextInput
            secureTextEntry={secureTextEntry}
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className="border text-white border-gray-600 px-4 py-4 rounded focus:border-yellow-300"
            placeholderTextColor="#999999"
          />

          {error && (
            <Text className="text-red-500 mt-2 font-medium">
              {error.message}
            </Text>
          )}
        </>
      )}
    />
  );
};

export default RHFInputText;
