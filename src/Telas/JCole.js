import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import estilos from '../StyleSheet/estilos'
import { useNavigation } from "@react-navigation/native";
import { Picker } from "react-native";


let index = 0
let Titulos = ['J. Cole em 2011', 'J. Cole em 2014', 'J. Cole em 2024']
let imgs = [require('../img/jcole-antes.jpg'), require('../img/jcole-204.jpg'), require('../img/jcole-depois.jpg')]
let Textos = ['O ano era 2011, J. Cole ainda estava se descobrindo como artista, o que não o impediu de demonstrar seu talento', '2014 ele tinha acabado de se descobrir, lançando seu aclamado álbum "2014 forrest hill drive", ganhando muita visibilidade, se tornando uma promessa', '2024 e ele já é um artista consolidado e com muitos fãs, sua aparencia mudou dastricamente']


function jcole() {
    const [TituloAtual, setTituloAtual] = useState('J. Cole em 2011')
    const [ImgAtual, setimgPadrao] = useState(require('../img/jcole-antes.jpg'))
    const [Texto, SetTexto] = useState('O ano era 2011, J. Cole ainda estava se descobrindo como artista, o que não o impediu de demonstrar seu talento');
    const nav = useNavigation()
    const [itemSelecionado, setItemSelecionado] = useState(0)

    function Alterar(item) {
        setTituloAtual(Titulos[item])
        setimgPadrao(imgs[item])
        SetTexto(Textos[item])
        setItemSelecionado(item)
       
    }
    function acessaTela() {
        // nav.goBack();
        nav.navigate('Tela_Principal');
    }
    return (
        <View>
            <Image style={{ height: 200, width: 200 }} source={ImgAtual} />
            <Text style={estilos.Tela_Principal_Titulo}>{TituloAtual}</Text>
            <Text>{Texto}</Text>

            <Picker style={{ height: 50 }}
                selectedValue={itemSelecionado} onValueChange={Alterar}>
                <Picker.Item label="antes" value="0" />
                <Picker.Item label="2014" value="1" />
                <Picker.Item label="depois" value="2" />

            </Picker>
            <TouchableOpacity onPress={acessaTela}>
                <Text style={estilos.Tela_Principal_botao}>Próxima tela</Text>

            </TouchableOpacity>
        </View>

    );
}
export default jcole;