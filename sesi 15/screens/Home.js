import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default function Home({ navigation }) {
    const handleProfile = () => {
        navigation.navigate("Profile", { name: "Hello Profile" })
    }
    const handleText = () => {
        navigation.navigate("Text", { name: "Hello Text" })
    }
    const handleColumn = () => {
        navigation.navigate("Column", { name: "Hello Column" })
    }
    const handleFlatList = () => {
        navigation.navigate("FlatList", { name: "Hello FlatList" })
    }
    const handleScrollView = () => {
        navigation.navigate("ScrollView", { name: "Hello ScrollView" })
    }
    const handleAPIList = () => {
        navigation.navigate("APIList", { name: "Customers" })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome Page Home
            </Text>
            <Text style={{color: "black",fontSize: 20}}>
                Hello World
            </Text>
            <View style={styles.rowButton}>
                <View style={{ flex: 1, marginHorizontal: 1 }}>
                    <Button
                        title='Profile'
                        color="#FF7F50"
                        onPress={() => handleProfile()}
                    />
                </View>
                <View style={{ flex: 1, marginHorizontal: 1 }}>
                    <Button
                        title='Text'
                        color="#CD5C5C"
                        onPress={() => handleText()}
                    />
                </View>
                <View style={{ flex: 1, marginHorizontal: 1 }}>
                    <Button
                        title='Column'
                        color="#FFDAB9"
                        onPress={() => handleColumn()}
                    />
                </View>
            </View>
            <View style={styles.rowButton}>
                <View style={{ flex: 1, marginHorizontal: 1 }}>
                    <Button
                        title='Scroll View'
                        color="#BC8F8F"
                        onPress={() => handleScrollView()}
                    />
                </View>
                <View style={{ flex: 1, marginHorizontal: 1 }}>
                    <Button
                        title='Flat List'
                        color="#E9967A"
                        onPress={() => handleFlatList()}
                    />
                </View>
            </View>
            <View style={styles.rowButton}>
                <View style={{ flex: 1, marginHorizontal: 1 }}>
                    <Button
                        title='Random list'
                        color="#6495ED"
                        onPress={() => handleAPIList()}
                    />
                </View>
            </View>
            <StatusBar style="auto" />
            <Text style={{color: "black",fontSize: 20}}>
                Dibuat oleh: 025 - Taofik Arianto
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8FBC8F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#002B5B',
        fontSize: 30
    },
    rowButton: {
        flexDirection: 'row',
        margin: 1
    },
});
