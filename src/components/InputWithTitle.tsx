import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors'

type Props = {
    rightIcon?: string
    title: string
}

const InputWithTitle = ({ rightIcon = '', title = 'Email' }: Props) => {
    return (
        <View style={{ marginTop: 16 }} >

            <Text style={styles.titleTxt} >{title}</Text>
            <View style={styles.inputStyle} >
                <TextInput style={{ flex: 1 }} />

                {rightIcon ? <Image source={rightIcon} style={{ marginLeft: 10 }} /> : null}


            </View>
        </View>
    )
}

export default InputWithTitle

const styles = StyleSheet.create({
    titleTxt: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.darkColor,
        textTransform: 'uppercase',
        marginBottom: 10
    },
    inputStyle: {

        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: colors.gray,
        height: 48


    }
})