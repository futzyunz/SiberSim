import { Stack } from "expo-router";

export default function MainLayout() {
    return (
        <Stack
            initialRouteName="welcome"
            screenOptions={{
                title: "Begineer's Welcome Page",
                headerShown: false,
            }}
        >
            <Stack.Screen name="welcome" options={{ title: "Welcome Page" }} />
            <Stack.Screen
                name="onboard/index"
                options={{ title: "Onboard Page" }}
            />
            <Stack.Screen name="login" options={{ title: "Login Page" }} />
            <Stack.Screen
                name="register"
                options={{ title: "Register Page" }}
            />
            <Stack.Screen
                name="forgotpassword/index"
                options={{ title: "Forgot Password" }}
            />
            {/*
            <Stack.Screen
                name="(pages)/forgotpassword/newPassword"
                options={{
                    title: "New Password Page",
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(pages)/forgotpassword/verification"
                options={{
                    title: "Verification Page",
                    headerShown: false,
                }}
            />
            */}
        </Stack>
    );
}
