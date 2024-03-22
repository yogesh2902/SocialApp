import { Alert, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import imagePath from '../../../constants/imagePath'
import colors from '../../../styles/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { NeynarSigninButton, ISuccessMessage } from "@neynar/react-native-signin";
import InputWithTitle from '../../../components/InputWithTitle'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const Login = (props: Props) => {

    const insets = useSafeAreaInsets()
    const navigation: any = useNavigation()
    const neynarApiKey = '1BC4AEC2-10F0-4C7D-886D-B77BF6F59C5E'
    const neynarClientId = '9de57566-f2be-4867-bf98-15f4b7f55c22'

    // console.log(process?.env?.NEYNAR_API_KEY, "NEYNAR_API_KEY")
    // const CardView = ({ icon, bgColor = colors.blue, isBorderWidth = false }: any) => {
    //     return (
    //         <TouchableOpacity onPress={() => console.log("click card")} style={{ width: '31%', height: 58, justifyContent: 'center', alignItems: 'center', backgroundColor: bgColor, borderWidth: 2, borderColor: isBorderWidth ? colors.gray40 : bgColor, borderRadius: 16 }}>
    //             <Image source={icon} />
    //         </TouchableOpacity>
    //     )
    // }


    const handleSignin = async (data: ISuccessMessage) => {
        console.log(data, "datadatadatadata")
        // Alert.alert(data.fid + '\n' + data.signer_uuid)
        // console.log(`User with fid -> ${data.fid} can use signer -> ${data.signer_uuid} to interact with farcaster`)
        navigation?.navigate('Home', { fid: data?.fid })
    };

    const handleError = (err: any) => {
        console.log(err)
    }


    let WARPCAST: any = "warpcast"

    return (
        <View style={styles.mainView} >
            <ImageBackground source={imagePath.backImg} style={{ width: '100%', height: '70%', alignItems: 'center', paddingTop: insets?.top + 38 }} >

                <Image source={imagePath.logo} />
            </ImageBackground>
            <View style={styles.absoluteView}>
                {/* <Text style={styles.wlcmTxt} >Welcome Back! </Text>
                <Text style={styles.loginTxt}> Login to continue </Text>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24, justifyContent: 'space-between' }}>

                    <CardView icon={imagePath.fbIcon} />
                    <CardView icon={imagePath.appleIcon} bgColor={colors.darkColor} />
                    <CardView icon={imagePath.googleIcon} bgColor={colors.white} isBorderWidth />

                </View>

                <Text style={styles.orTxt} >Or connect with your email</Text>

                <InputWithTitle title='Email' />
                <InputWithTitle title='Password' /> */}
                <NeynarSigninButton apiKey={neynarApiKey}
                    clientId={neynarClientId}
                    successCallback={handleSignin}
                    errorCallback={handleError}
                    variant={WARPCAST}
                    buttonStyles={{ alignSelf: 'center', borderWidth: 1, borderRadius: 6, borderColor: colors.gray }}


                />
            </View>




        </View>




    )

}

export default Login

const styles = StyleSheet.create({

    mainView: {
        backgroundColor: 'white',
        flex: 1,
    },
    absoluteView: {
        position: 'absolute',
        backgroundColor: colors.white,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        top: '20%',
        right: 0,
        bottom: 0,
        left: 0,
        paddingHorizontal: 24,
        justifyContent: 'center'
    },
    wlcmTxt: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.darkColor
    },
    loginTxt: {
        color: colors.gray,
        fontSize: 14,
        fontWeight: '500',
        marginTop: 8

    },
    orTxt: {
        marginTop: 18,
        fontSize: 12,
        fontWeight: '400',
        color: colors.gray,
        lineHeight: 20,
        textAlign: 'center',
        marginBottom: 16
    }
})