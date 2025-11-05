import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";

type TSignUpValues = {
    email: string,
    username: string,
    password: string
}

const SignUp = () => {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [signInValues, setSignValues] = useState<TSignUpValues>({email: "", username: "", password: ""})

    return (
        <View className="px-10">
            <Text className="text-gray-100 text-3xl text-center font-semibold">Sign Up</Text>

            <View className="mt-6">
                <Text className="text-gray-400 text-xl mb-4">Full name</Text>
                <TextInput
                    value={signInValues.username}
                    onChangeText={(text) => setSignValues((prev) => ({...prev, username: text}))}
                    className="border border-gray-600 px-4 py-4 rounded focus:border-yellow-300"
                    placeholder="Enter full name"
                    placeholderTextColor="#999999"
                    keyboardType="default"
                />
            </View>

            <View className="mt-4">
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

            <View className="mt-4">
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

            <TouchableOpacity className="p-3 bg-yellow-200 rounded mt-6">
                <View className="flex-row items-center justify-center gap-5">
                    <Text className="text-xl text-gray-700">Register</Text>
                    {
                        isSubmitting &&
                        <ActivityIndicator size='large' color='#be29ec' />
                    }
                </View>
            </TouchableOpacity>

            <View className="flex-row items-center gap-2 justify-center mt-6">
                <Text className="text-lg text-gray-300">Already have an account?</Text>
                <TouchableOpacity onPress={() => router.push('/sign-in')}>
                    <Text className="text-indigo-400">Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp;