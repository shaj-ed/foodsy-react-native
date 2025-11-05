import cartIcon from "@/assets/icons/bag.png";
import homeIcon from "@/assets/icons/home.png";
import searchIcon from "@/assets/icons/search.png";
import userIcon from "@/assets/icons/user.png";
import cn from 'clsx';
import { Tabs } from 'expo-router';
import { Image, ImageSourcePropType, Text, View } from 'react-native';

type Props = {
    text: string,
    focused: boolean,
    icon: ImageSourcePropType
}

const TabBarIcon = ({text, focused, icon}: Props) => {
    return (
        <View className="flex min-w-20 items-center justify-center min-h-full gap-1 mt-12">
            <Image source={icon} resizeMode="contain" className="size-8" tintColor={focused ? "purple" : 'gray'} />
            <Text className={cn('text-sm font-bold', focused ? 'text-primary':'text-gray-400')}>
                {text}
            </Text>
        </View>
    )
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={
        {
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                marginHorizontal: 20,
                height: 80,
                position: 'absolute',
                bottom: 70,
                backgroundColor: 'white',
                shadowColor: '#1a1a1a',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 5
            }
        }
    }>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon text='Home' focused={focused} icon={homeIcon} />,
        }}
      />
       <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIcon text='Serch' focused={focused} icon={searchIcon} />,
        }}
      />
       <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => <TabBarIcon text='Cart' focused={focused} icon={cartIcon} />,
        }}
      />
       <Tabs.Screen
        name="user"
        options={{
          title: 'User',
          tabBarIcon: ({ focused }) => <TabBarIcon text='User' focused={focused} icon={userIcon} />,
        }}
      />
    </Tabs>
  );
}
