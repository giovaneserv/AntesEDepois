import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import estilos from '../StyleSheet/estilos'
import { useNavigation } from "@react-navigation/native";

function Tela_Principal() {
    let img = require('../img/kendrick-depois.jpg')
    let autor = "Giovane Servian"
    let data = '2024'
    const nav = useNavigation()
    function acessaTela() {
        
            nav.navigate("Eminem")

    }
    return (
        <View style={estilos.Tela_Principal_Fundo}>
            <View>
                <Text style={estilos.Tela_Principal_SubTitulo}>Tela Principal</Text>
                <Text style={estilos.Tela_Principal_Titulo}>Stack Navigation</Text>
                <Text style={estilos.Tela_Principal_SubTitulo}>Antes e depois dos Artistas</Text>
                <Image source={img} style={estilos.Tela_Principal_Img} />
            </View>
            <View style={{ alignItems: 'center', flex: 0.85 }}>
                <Text style={estilos.Tela_Principal_SubTitulo}>Curiosidades</Text>
                <TouchableOpacity
                    onPress={() => acessaTela('C')}
                >
                    <Text style={estilos.Tela_Principal_botao}>Primeiro Artista</Text>
                </TouchableOpacity>
               
            </View>
            <View style={estilos.Tela_Principal_Rodape}>
                <Text>{autor}</Text>
                <Text>{data}</Text>
            </View>
        </View>
    );
}

export default Tela_Principal;