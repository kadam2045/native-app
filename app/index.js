import { Image, ScrollView, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context"; // its ensure that our content doesnt overlap with bottom bar for all devices phione
import { images } from "../constants";
import CustomButtom from "../components/CustomButtom";
import { StatusBar } from "expo-status-bar";



export default function App() {
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center min-h-[85vh] px-4">
                    <Image
                        source={images.logo}
                        className="w-[130px] min-h-[85px]"
                        resizeMode="contain"
                    />
                    <Image
                        source={images.cards}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode="contain"
                    />
                    <View className="relative mt-5 ">
                        <Text className="text-3xl text-white font-bold text-center">Discover Endlesss Possibilties</Text>
                        <Image
                            source={images.path}
                            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                            resizeMode="contain"
                        />
                    </View>
                    <Text className="text-lg font-pregular text-gray-100 mt-7 text-center">Createivity meets innvation: embark on a journy of limitless</Text>

                    <CustomButtom
                        title="Continue with Email"
                        handlePress={() => router.push('/sign-in')}
                        containerStyle="w-full mt-7"
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
    );
}


