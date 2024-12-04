import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { sizes } from "../utils/sizes";

export const FocusHistory = ({history}) => {
    if(history === false || history.length == 0){
        return (
            <View>We haven't focused on anything yet. </View>
        );
    }

    const renderItem = ({item}) => (
        <Text style={styles.item}>- {item}</Text>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Things we've focused on:</Text>
            <FlatList
                data={history}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 50,
        flex: 1
    },
    title: {
        color: colors.white,
        fontSize: sizes.md,
        textAlign: 'left',
        paddingTop: 50,
    },
    item: {
        fontSize: sizes.md,
        color: colors.white,
        paddingTop: sizes.sm
    }
});

