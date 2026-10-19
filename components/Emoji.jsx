import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Emoji(){
    
    const [emoji, setEmoji] = useState(true)

    function AlternarEmoji(){
        if(emoji){
            setEmoji(false)
        }
        else{
            setEmoji(true)
        }
    }
    return(
        <View style = {styles.container}>
            <Text>{emoji ? "😐" : "😁"}</Text>
            <Button onPress={AlternarEmoji} title="Mudar Emoji"/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },

    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },


});