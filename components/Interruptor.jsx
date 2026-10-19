import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Interruptor() {
    
    const [luz, setLuz] = useState("Desligada")
    
    function Alternar() {
        if(luz == "Desligada")
        {
            setLuz("Ligada")
        }
        else{
            setLuz("Desligada")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Luz</Text>

            <Text style={styles.luz}>
                {luz}
            </Text>

            <Button
                onPress={Alternar}
                title= {luz === "Ligada" ? "Desligar luz" : "Ligar Luz"}
            />
        </View>
    );
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

    luz: {
        fontSize: 48,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#007AFF",
    },
});