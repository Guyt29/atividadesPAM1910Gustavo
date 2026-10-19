
import { useState } from "react";
import {  StyleSheet, Text, View, TextInput } from "react-native";

export default function NomeUsuario(){
    
    const [nome, setNome] = useState("")
    return(
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={nome}
                onChangeText={setNome}
            />

            <Text style={styles.texto}>
                {nome === "" ? "Digite seu nome" : `Nome: ${nome}`}
            </Text>

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

        input: {
        width: 250,
        height: 45,
        borderWidth: 1,
        borderColor: "#888",
        borderRadius: 8,
        marginBottom: 20,
    },

    texto: {
        fontSize: 20,
        color: "#007AFF",
    },

});