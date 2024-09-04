import React, { useState } from "react";
import { View, Text, Image, Switch, TouchableOpacity } from "react-native";
import estilos from '../StyleSheet/estilos'
import { useNavigation } from "@react-navigation/native";


function Eminem() {
    const [ligado, setLigado] = useState(false);
    const [Titulo, setTitulo] = useState('Eminem em 2002');
    const [Texto, setTexto] = useState('Ano em que lançou The Eminem Show e estreou seu filme 8 Mile')
    const [imgPadrao, setImgPadrao] = useState(require('../img/eminem-antes.jpg'))
    const eminemAntes = require('../img/eminem-antes.jpg');
    const eminemDepois = require('../img/eminem-depois.jpg');
    const nav = useNavigation()
    function acessaTela() {
        // nav.goBack();
        nav.navigate('Kendrick');
    }
    function Trocar() {
        if (ligado) {
            setLigado(false);
            setTitulo('Eminem em 2002')
            setTexto('Ano em que lançou The Eminem Show e estreou seu filme 8 Mile')
            setImgPadrao(eminemAntes)
        } else {
            setLigado(true);
            setTitulo('Eminem em 2024')
            setTexto('Uma mudança tremenda no visual, lançou seu novo albúm "The Death of Slim Shady')
            setImgPadrao(eminemDepois)
        }
    }

    return (
        <View>
       
            <Image source={imgPadrao} style={estilos.Img_art} />
      
            <TouchableOpacity onPress={Trocar}
                style={estilos.textoBotao}>
                <Text style={estilos.Titulo}>{Titulo}</Text>
                <Text> {Texto}</Text>
            </TouchableOpacity>
            <Switch
                value={ligado}
                onValueChange={Trocar} />
            <TouchableOpacity
                onPress={acessaTela}>
                <Text style={estilos.Tela_Principal_botao}>Próxima tela</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Eminem;