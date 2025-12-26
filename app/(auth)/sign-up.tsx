import RHFInputText from "@/components/common/form/RHFInputText";
import RHFTextarea from "@/components/common/form/RHFTextarea";
import {
  initSignupFormValues,
  SignupForm,
  signUpSchema,
} from "@/src/validators/auth.schema";
import { useAuthStore } from "@/store/auth.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SignUp = () => {
  const router = useRouter();
  const signUp = useAuthStore((e) => e.signUp);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: initSignupFormValues,
  });

  const onSignup = async (data: SignupForm) => {
    try {
      const { confirmPassword, ...sendvalues } = data;
      await signUp(sendvalues);
      Alert.alert("Success", "Registration successfull, yuou can login now");
      router.push("/(auth)/sign-in");
    } catch (error) {
      Alert.alert("Error", "Registration failed try again");
    }
  };

  return (
    <View className="px-10">
      <Text className="text-gray-100 text-3xl text-center font-semibold">
        Sign Up
      </Text>

      <RHFInputText<SignupForm>
        name="username"
        control={control}
        label="Username"
        placeholder="Enter username"
      />

      <RHFInputText<SignupForm>
        name="email"
        control={control}
        label="Email"
        placeholder="Enter email"
      />

      <RHFInputText<SignupForm>
        name="password"
        control={control}
        label="Password"
        placeholder="Enter password"
        secureTextEntry
      />

      <RHFInputText<SignupForm>
        name="confirmPassword"
        control={control}
        label="Confirm Password"
        placeholder="Renter password"
        secureTextEntry
      />

      <RHFInputText<SignupForm>
        name="phoneNumber"
        control={control}
        label="Phone number"
        placeholder="Enter phone number"
      />

      <RHFTextarea<SignupForm>
        name="address"
        control={control}
        label="Address"
        placeholder="Enter address"
        numberOfLine={4}
      />

      <TouchableOpacity
        className="p-3 bg-yellow-200 rounded mt-6"
        onPress={handleSubmit(onSignup)}
      >
        <View className="flex-row items-center justify-center gap-5">
          <Text className="text-xl text-gray-700">Register</Text>
          {isSubmitting && <ActivityIndicator size="small" color="#be29ec" />}
        </View>
      </TouchableOpacity>

      <View className="flex-row items-center gap-2 justify-center mt-6">
        <Text className="text-lg text-gray-300">Already have an account?</Text>
        <TouchableOpacity onPress={() => router.push("/sign-in")}>
          <Text className="text-indigo-400">Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
