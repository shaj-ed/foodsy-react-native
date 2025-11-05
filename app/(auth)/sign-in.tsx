import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

type TSignInValues = {
    email: string,
    password: string
}

const SignIn = () => {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [signInValues, setSignValues] = useState<TSignInValues>({email: "", password: ""})

    const onSignIn = () => {
        Alert.alert("Success", "Log in successfully")
    }

    return (
        <View className="px-10">
            <Text className="text-gray-100 text-3xl text-center font-semibold">Sign In</Text>

            <View className="mt-8">
                <Text className="text-gray-400 text-xl mb-4">Email address</Text>
                <TextInput
                    value={signInValues.email}
                    onChangeText={(text) => setSignValues((prev) => ({...prev, email: text}))}
                    className="border border-gray-600 px-4 py-4 rounded focus:border-yellow-300"
                    placeholder="Enter email address"
                    placeholderTextColor="#999999"
                    keyboardType="default"
                />
            </View>

            <View className="mt-5">
                <Text className="text-gray-400 text-xl mb-4">Password</Text>
                <TextInput
                    value={signInValues.password}
                    onChangeText={(text) => setSignValues((prev) => ({...prev, password: text}))}
                    className="border border-gray-600 px-4 py-4 rounded focus:border-yellow-300"
                    placeholder="*****"
                    placeholderTextColor="#999999"
                    secureTextEntry={true}
                    keyboardType="default"
                />
            </View>

            <TouchableOpacity className="p-3 bg-yellow-200 rounded mt-6" onPress={onSignIn}>
                <View className="flex-row items-center justify-center gap-5">
                    <Text className="text-xl text-gray-700">Login</Text>
                    {
                        isSubmitting &&
                        <ActivityIndicator size='large' color='#be29ec' />
                    }
                </View>
            </TouchableOpacity>

            <View className="flex-row items-center gap-2 justify-center mt-6">
                <Text className="text-lg text-gray-300">Don't have an account?</Text>
                <TouchableOpacity onPress={() => router.push('/sign-up')}>
                    <Text className="text-indigo-400">Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn;