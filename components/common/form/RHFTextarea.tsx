import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Text, TextInput } from "react-native";

type RHFTextareaProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  numberOfLine?: number;
};

const RHFTextarea = <T extends FieldValues>({
  name,
  control,
  label,
  placeholder = "Enter description",
  numberOfLine = 4,
}: RHFTextareaProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          <Text className="text-gray-400 text-xl mt-6 mb-4">{label}</Text>

          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            placeholder={placeholder}
            multiline
            numberOfLines={numberOfLine}
            textAlignVertical="top"
            className="border text-white border-gray-600 px-4 py-4 rounded focus:border-yellow-300"
            placeholderTextColor="#999999"
            style={{
              height: 120,
              borderWidth: 1,
              padding: 12,
            }}
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

export default RHFTextarea;
