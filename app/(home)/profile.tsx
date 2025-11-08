import mailIcon from "@/assets/icons/envelope.png";
import addressIcon from "@/assets/icons/location.png";
import phoneIcon from "@/assets/icons/phone.png";
import useIcon from "@/assets/icons/user.png";
import profileImage from "@/assets/images/avatar.png";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView>
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
        <ProfileInfo icon={useIcon} label="Full Name" value="Mohammad Shajed" />
        <ProfileInfo icon={mailIcon} label="Email" value="shajed@gmail.com" />
        <ProfileInfo icon={phoneIcon} label="Phone" value="01989898989" />
        <ProfileInfo
          icon={addressIcon}
          label="Address"
          value="Niketon, Gulshan, Dhaka"
        />
      </View>

      <View className="px-4 mt-7">
        <TouchableOpacity className="p-4 w-full border border-amber-700 rounded-full bg-slate-200 mb-5">
          <Text className="text-center text-lg text-amber-700 font-semibold">
            Edit Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="p-4 w-full border border-amber-700 rounded-full bg-slate-100">
          <Text className="text-center text-lg text-amber-700 font-semibold">
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

type Props = {
  icon: ImageSourcePropType;
  label: string;
  value: string;
};

const ProfileInfo = ({ icon, label, value }: Props) => {
  return (
    <View className="flex-row gap-5 items-center">
      <View className="w-[45px] h-[45px] bg-slate-200 items-center justify-center rounded-full">
        <Image source={icon} resizeMode="contain" className="size-8" />
      </View>

      <View>
        <Text className="text-gray-500 text-xl">{label}</Text>
        <Text className="text-black font-semibold text-xl">{value}</Text>
      </View>
    </View>
  );
};

export default Profile;
