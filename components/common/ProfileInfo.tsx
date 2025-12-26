import { Image, ImageSourcePropType, Text, View } from "react-native";

type ProfileInfoProps = {
  icon: ImageSourcePropType;
  label: string;
  value: string;
};

const ProfileInfo = ({ icon, label, value }: ProfileInfoProps) => {
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

export default ProfileInfo;
