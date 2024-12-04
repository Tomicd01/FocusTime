import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { colors } from '../utils/colors';
import { Countdown } from "../components/CountDown";
import { RoundedButton } from "../components/RoundedButton";
import { sizes, spacing } from "../utils/sizes";
//import * as Progress from 'react-native-progress';
import { Timing } from "./Timing";
import { useKeepAwake } from 'expo-keep-awake';

const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS
]


export const Timer = ({focusSubject, onTimerEnd, clearSubject}) => {
    const [isStarted, setIsStarted ] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.1);

    const onEnd = (reset) => {
        Vibration.vibrate(PATTERN);
        setIsStarted(false);
        setProgress(1);
        reset();
        onTimerEnd(focusSubject);
    }

    useKeepAwake();

    return (
    <View style={styles.container}>
        <View style={styles.countdown}>
            <Countdown 
                minutes={minutes} 
                onProgress={(progress) => {setProgress(progress)}} 
                style={styles.countdown} 
                isPaused={!isStarted} 
                onEnd={onEnd}/>
            <View style={{ paddingTop: spacing.xl }}>
                <Text style={styles.title}>Focusing on: </Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
        </View>
        <View style={{ paddingTop: spacing.xxl }}>
     
        </View>
        <View style={styles.timingWrapper}>
            <Timing onChangeTime={setMinutes}/>
        </View>
        <View style={styles.buttonWrapper}>
            {isStarted ? 
            <RoundedButton title='pause' onPress={() => setIsStarted(false)}/>
            :<RoundedButton title='start' onPress={() => setIsStarted(true)}/> 
             }
        </View>
        <View style={styles.clearSubjectWrapper}>
            <RoundedButton title='-' onPress={clearSubject} size={50}/>
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    timingWrapper: {
        flex: 0.1,
        alignItems: 'center',
        paddingTop: spacing.xxl,
        flexDirection: 'row'
    },
    countdown : {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    clearSubjectWrapper: {
        flex: 0.1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title : {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    task: {
        color:colors.white,
        textAlign: 'center'
    }
})

