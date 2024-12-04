import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { colors } from '../utils/colors';
import { useState } from "react";
import {RoundedButton} from "../components/RoundedButton";
import { sizes } from "../utils/sizes"

export const Focus = ({addSubject}) => {
    const [subject, setSubject] = useState(null);

    return (
    <View style={styles.container}>
        <View style={styles.inputContainer} >
            <TextInput onChangeText={(val) => {setSubject(val)}} placeholder="What would you like to focus on?" style={styles.input}  placeholderTextColor={colors.paleWhite}/>
            <RoundedButton title='+' size={50} onPress={() => addSubject(subject)}/>
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    },
    text: {
        color: colors.white,
    },
    inputContainer: {
        padding: 10,
        color: colors.white,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    input: {
        color: colors.white,
        borderColor: colors.white,
        borderWidth: 1,
        paddingLeft: 10,
        width: '80%',
    },
   
})
