import { use, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Curtidas(){

    const[curtidas, setCurtidas] = useState(0)

    function adicionarCurtida(){
        setCurtidas(curtidas + 1)
    }
    function removerCurtida(){
        if(curtidas > 0){
            setCurtidas(curtidas - 1)
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>{`Curtidas ${curtidas}`}</Text>

            <Button onPress={adicionarCurtida}
                    title = "Adicionar Curtida"
            /> 
            
            <Button onPress={removerCurtida}
                    title = "Remover Curtida"
            /> 

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

    texto: {
        fontSize: 20,
        color: "#007AFF",
    },
})