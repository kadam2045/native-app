import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButtom from "../../components/CustomButtom";
import { Link } from "expo-router";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleSubmit = () => {};
  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[88vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButtom
            title="Sign In"
            handlePress={handleSubmit}
            containerStyle="mt-7"
            isLoading={isSubmiting}
          />

          <View className="flex flex-row justify-center gap-2 pt-5">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't Have Account?
            </Text>
            <Link
              href="/sign-up"
              className="text-secondary font-psemibold text-lg"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
