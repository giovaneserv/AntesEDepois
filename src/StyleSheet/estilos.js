import React from "react";
import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    Tela_Principal_Fundo: {
        flex: 1,
    },
    Tela_Principal_Titulo: {
        textAlign: 'center', fontSize: 30
    },
    Tela_Principal_SubTitulo: {
        textAlign: 'center', fontSize: 20
    },
    Tela_Principal_Img: {
        alignSelf: 'center', width: 200, height: 200
    },
    Img_art: {
        width: 200, height: 200
    },
    Tela_Principal_botao: {
        width: 100, textAlign: 'center', marginBottom: 5, fontSize: 15, borderColor: 'red', borderRadius: 10, borderWidth: 2
    },
    Tela_Principal_Rodape: {
        flexDirection: 'row', flex: 0.08, verticalAlign: 'center', justifyContent: 'space-evenly', borderTopWidth: 1, borderColor: 'black'
    },
    Cabecalho: {
        flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: 'black'
    },
    Cabecalho_Bruxa: {
        margin: 20, flexDirection: 'row', justifyContent: 'center'
    },
    Cabecalho_textos: {
        flexDirection: 'column', justifyContent: "center"
    },
    cabecalho_titulo: {
        color: 'red', fontSize: 20
    },
    cabecalho_Subtitulo: {
        fontSize: 30,
    },
    Conteudo: {
        padding: 10
    },
    botao: {
        paddingTop: 20,
        padding: 20,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'white',
    },

    ImgCab: {
        margin: 9
    },
    Titulo: {
        color: 'red', fontSize: 20, marginLeft: 10, marginBottom: 10
    },

}
)
export default estilos;