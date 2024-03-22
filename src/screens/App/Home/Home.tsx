import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'

type Props = {}

const Home = (props: Props) => {

    const route: any = useRoute()
    const fid = route?.params?.fid
    const neynarApiKey: any = '1BC4AEC2-10F0-4C7D-886D-B77BF6F59C5E'

    useEffect(() => {
        getDataFromApi()
    }, [])


    const getDataFromApi = async () => {
        try {
            const response = await axios.get(`https://api.neynar.com/v1/farcaster/user?fid=${fid}`, { headers: { 'api_key': neynarApiKey } })
            const userData = response?.data?.result
            const convertJson = userData?.json()
            console.log(convertJson, "responseresponseresponseresponseresponseresponse")

        }
        catch (err) {
            console.log(err, "errrrrr")
        }
    }


    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})