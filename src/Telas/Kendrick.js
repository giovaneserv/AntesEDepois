import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import estilos from '../StyleSheet/estilos'
import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";

function Kendrick() {
    const [TituloAtual, setTituloAtual] = useState('Kendrick Lamar em 2012');
    const [TextoAtual, setTextoAtual] = useState('Nesse ano ele tinha acabado de lançar Good Kid, M.A.a.d City,ele não tinha suas memoráveis tranças')
    const [imgPadrao, setImgPadrao] = useState(require('../img/kendrick-antes.jpg'))
    function Desliza(index) {
        setTituloAtual(Titulos[index])
        setTextoAtual(Textos[index])
        setImgPadrao(imgs[index]

        )
    }
    const Titulos = ['Kendrick Lamar em 2012', 'Kendrick Lamar em 2015', 'Kendrick Lamar em 2017', 'Kendrick Lamar em 2024']
    const Textos = ['Nesse ano ele tinha acabado de lançar Good Kid, M.A.a.d City, ele não tinha suas memoráveis tranças', 'em 2015, Kendrick lança seu mais aclamado álbum "To Pimp A Butterfly", sendo o segundo álbum que mais venceu grammys da história, ficando apenas atrás de Thriller, do lendário Michael Jackson', '2017 foi o início de seu auge, com o álbum DAMN. Kendrick explodiu no mundo inteiro chegando nos primeiros lugares das paradas, se consolidando como um dos maiores rappers, não só da sua geração, como também da história', 'Depois de um hiato de 5 anos, Kendrick voltou em 2022 com seu álbum "Mr. Morale & The Big Steppers, muito aclamado pela critica pelos fãs, que a muito tempo estavam esperando pelo novo álbum.']
    const imgs = [require('../img/kendrick-antes.jpg'), require('../img/kendrick-2015.jpg'), require('../img/kendrick-2017.jpg'), require('../img/kendrick-depois.jpg')]
    const nav = useNavigation()

    function acessaTela() {
        // nav.goBack();
        nav.navigate('JCole');
    }

    return (
        <View>
            <Image source={imgPadrao} style={estilos.Img_art} />
            <Text>{TituloAtual}</Text>
            <Text>{TextoAtual}</Text>
            <Slider style={{ marginBottom: 30 }} step={1}
                minimumValue={0} maximumValue={Textos.length -1}
                minimumTrackTintColor="red"
                maximumTrackTintColor="white"
                onValueChange={Desliza} />
            <TouchableOpacity
                onPress={acessaTela}>
                <Text style={estilos.Tela_Principal_botao}>Próxima tela</Text>
            </TouchableOpacity>
        </View>
    );
}
export default Kendrick;