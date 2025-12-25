import {
  initLoginFormValues,
  LoginForm,
  loginSchema,
} from "@/src/validators/auth.schema";
import { useAuthStore } from "@/store/auth.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type TSignInValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: initLoginFormValues,
  });

  const onSignIn = async (data: LoginForm) => {
    try {
      await login(data.username, data.password);
      Alert.alert("Success", "Log in successfully");
      router.push("/(home)");
    } catch (error) {
      Alert.alert("Error", "Authentication failed");
    }
  };

  return (
    <View className="px-10">
      <Text className="text-gray-100 text-3xl text-center font-semibold">
        Sign In
      </Text>

      <Controller
        control={control}
        name="username"
        shouldUnregister={false}
        render={({ field }) => (
          <>
            <Text className="text-gray-400 text-xl mb-4">Username</Text>

            <TextInput
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Enter username"
              className="border text-white border-gray-600 px-4 py-4 rounded focus:border-yellow-300"
              placeholderTextColor="#999999"
            />

            {errors.username && (
              <Text className="text-red-500 mt-2 font-medium">
                {errors.username.message}
              </Text>
            )}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <>
            <Text className="text-gray-400 text-xl mt-8 mb-4">Password</Text>

            <TextInput
              secureTextEntry
              value={field.value}
              onChangeText={field.onChange}
              placeholder="*******"
              className="border text-white border-gray-600 px-4 py-4 rounded focus:border-yellow-300"
              placeholderTextColor="#999999"
            />

            {errors.password && (
              <Text className="text-red-500 mt-2 font-medium">
                {errors.password.message}
              </Text>
            )}
          </>
        )}
      />

      <TouchableOpacity
        className="p-3 bg-yellow-200 rounded mt-6"
        onPress={handleSubmit(onSignIn)}
        disabled={isSubmitting}
      >
        <View className="flex-row items-center justify-center gap-5">
          <Text className="text-xl text-gray-700">Login</Text>
          {isSubmitting && <ActivityIndicator size="small" color="#be29ec" />}
        </View>
      </TouchableOpacity>

      <View className="flex-row items-center gap-2 justify-center mt-6">
        <Text className="text-lg text-gray-300">Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/sign-up")}>
          <Text className="text-indigo-400">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
