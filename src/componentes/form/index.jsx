import React, { useState } from "react";
import { View, Text, Vibration, TextInput,  TouchableOpacity, ScrollView, Pressable, Keyboard } from "react-native";
import ResultFrete from "./resultfrete";
import styles from "./style";



export default function Form(){
    const [valorFrete,setValorFrete] = useState([])
    const [km,setKm] = useState([])
    const [peso,setPeso] = useState([])
    const [fuel,setFuel] = useState([])
    const [media,setMedia] = useState([])
    const [mensagemFrete, setMensagemFrete] = useState("Preencha todos os dados")
    const [frete, setFrete] = useState([])
    const [textButton,setTextButton] = useState("Calcular")
    const [errorMensagem, setErrorMensagem] = useState([]);


// FUNÇAO DO CALCULO DO QUE SOBRA DO FRETE // 
    function calculadora (){
        let formatFuel = fuel.replace(",", ".")
        let format = media.replace(",", ".")
        let money = setFrete((valorFrete * peso - formatFuel * (format / km)).toFixed(2))
        return Math.round(Math.floor(money))
    }


// API DE AVISO //
     function warning(){
        if(valorFrete == 0){
            Vibration.vibrate();
            setErrorMensagem("Campo Obrigatório*")
        }
     }   
// FUNÇAO QUE VAI VALIDAR OS DADOS //
    function Validar(){
        if(valorFrete != 0 && km != 0 && peso != 0 && fuel != 0 && media != 0){
            calculadora()
            setValorFrete([])
            setKm([])
            setFuel([])
            setPeso([])
            setMedia([])
            setMensagemFrete("Irá Sobrar desse frete: R$")
            setTextButton("Calcular Novamente")
            setErrorMensagem([])
            return
        }
        warning()
        setFrete(null)
        setTextButton("Calcular")
        setMensagemFrete("Preencha todos os dados!")
    }

    return(
         <View onPress={Keyboard.dismiss}  style={styles.formContext}>
                    <ScrollView>
                        <View style={styles.form}>
                            <Text style={styles.formLabel}>Valor do Frete</Text>
                            <Text style={styles.erroMensagem}>{errorMensagem}</Text>
                            <TextInput style={styles.input} placeholder="Ex. R$275 a Ton" keyboardType="numeric" onChangeText={setValorFrete} value={valorFrete}/>


                            <Text style={styles.formLabel}>Distância Total</Text>
                            <Text style={styles.erroMensagem}>{errorMensagem}</Text>
                            <TextInput style={styles.input} placeholder="Em Km" keyboardType="numeric" onChangeText={setKm} value={km}/>


                            <Text style={styles.formLabel}>Peso Total</Text>
                            <Text style={styles.erroMensagem}>{errorMensagem}</Text>
                            <TextInput style={styles.input} placeholder="Peso Carregado" keyboardType="numeric" onChangeText={setPeso} value={peso}/>


                            <Text style={styles.formLabel}>Valor do Oléo Diesel</Text>
                            <Text style={styles.erroMensagem}>{errorMensagem}</Text>
                            <TextInput style={styles.input} placeholder="Ex. 5,5/5.5" keyboardType="numeric" onChangeText={setFuel} value={fuel}/>


                            <Text style={styles.formLabel}>Média do caminhão</Text>
                            <Text style={styles.erroMensagem}>{errorMensagem}</Text>
                            <TextInput style={styles.input} placeholder="Km/L" keyboardType="numeric" onChangeText={setMedia} value={media}/>


                            
                            <TouchableOpacity onPress={() =>{Validar()}} style={styles.buttonCal}>
                                    <Text style={styles.textButtonCal}>{textButton}</Text>
                            </TouchableOpacity>
                            
                        </View>
                        <ResultFrete mensageResult={mensagemFrete} resultFrete={frete}/>
                </ScrollView>
            </View>
    )
}