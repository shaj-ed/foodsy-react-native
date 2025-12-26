import mailIcon from "@/assets/icons/envelope.png";
import addressIcon from "@/assets/icons/location.png";
import phoneIcon from "@/assets/icons/phone.png";
import useIcon from "@/assets/icons/user.png";
import profileImage from "@/assets/images/avatar.png";
import ProfileInfo from "@/components/common/ProfileInfo";
import SafeScreen from "@/components/common/SafeScreen";
import Logout from "@/components/Logout";
import { useAuthStore } from "@/store/auth.store";
import { Redirect } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!user || !isAuthenticated) return <Redirect href="/sign-in" />;

  return (
    <SafeScreen>
      <View className="px-4 my-4">
        <Text className="text-xl font-bold text-center">Profile</Text>
      </View>

      <View className="mt-6">
        <Image
          source={profileImage}
          resizeMode="contain"
          className="size-36 mx-auto"
        />
      </View>

      <View className="gap-6 mx-4 p-4 bg-slate-200 rounded mt-10">
        <ProfileInfo icon={useIcon} label="Full Name" value={user.username} />
        <ProfileInfo icon={mailIcon} label="Email" value={user.email} />
        <ProfileInfo
          icon={phoneIcon}
          label="Phone"
          value={user.phoneNumber ? user.phoneNumber : ""}
        />
        <ProfileInfo
          icon={addressIcon}
          label="Address"
          value={user.address ? user.address : ""}
        />
      </View>

      <View className="px-4 mt-7">
        <TouchableOpacity className="p-4 w-full border border-amber-700 rounded-full bg-slate-200 mb-5">
          <Text className="text-center text-lg text-amber-700 font-semibold">
            Edit Profile
          </Text>
        </TouchableOpacity>

        <Logout />
      </View>
    </SafeScreen>
  );
};

export default Profile;
