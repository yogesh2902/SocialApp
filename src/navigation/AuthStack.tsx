// import React from "react"

// export default function (Stack) {

//     return (
//         <>
//             {!isFirstTime && <Stack.Screen
//                 name={navigationStrings.ON_BOARDING}
//                 component={OnBoarding}
//                 options={{ headerShown: false }}
//             />}
//             <Stack.Screen
//                 name={navigationStrings.INITIAL_AUTH}
//                 component={InitialAuth}
//                 options={{ headerShown: false }}
//             />

//             <Stack.Screen
//                 name={navigationStrings.LOGIN}
//                 component={Login}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name={navigationStrings.SIGNUP}
//                 component={Signup}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name={navigationStrings.OTP_VERIFICATION}
//                 component={OtpVerification}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name={navigationStrings.FORGOT_PASSWORD}
//                 component={ForgotPassword}
//                 options={{ headerShown: false, }}
//             />
//         </>
//     );
// }

import React from 'react'
import Login from '../screens/Auth/Login/Login'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/App/Home/Home';

type Props = {}

const AuthStack = (props: Props) => {

    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Login'}
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={'Home'}
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AuthStack