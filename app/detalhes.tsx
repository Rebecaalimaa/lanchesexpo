import { router, useLocalSearchParams } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { lanches } from "../assets/mockups/lanches";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff0f5",
        padding: 20,
    },
    nome: {
        fontWeight: "bold",
        fontSize: 26,
        color: "#806",
        marginTop: 10,
        marginBottom: 10,
        textAlign: "center",
    },
    ingredientes: {
        fontSize: 16,
        color: "#444",
        textAlign: "center",
        marginBottom: 20,
    },
    listaIngredientes: {
        alignSelf: "flex-start",
        marginLeft: 20,
        marginBottom: 20,
    },

    ingredienteItem: {
        fontSize: 16,
        color: "#444",
        marginBottom: 4,
    },
    imagem: {
        width: "100%",
        height: 200,
        borderRadius: 12,
        marginBottom: 20,
        backgroundColor: "#eee",
        resizeMode: "cover",
    },
    botao: {
        marginTop: 30,
        width: "80%",
    }
});


export default function Index() {

    const { id } = useLocalSearchParams();
    let indice = lanches.findIndex((lanches) => lanches.id === Number(id));

    function voltar() {
        router.back();
    }

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.nome}>{lanches[indice].nome}</Text>
            <View style={styles.listaIngredientes}>
                {lanches[indice].ingredientes.map((item, index) => (
                    <Text key={index} style={styles.ingredienteItem}>• {item}</Text>
                ))}
            </View>

            <Image source={{ uri: lanches[indice].image }} style={styles.imagem} />
            <Button
                title="Voltar"
                color="#rgba(219, 114, 191, 1)"
                onPress={voltar}
            />
        </View>
    );
}