import { Text, View } from "react-native";
import styles from "./style";


export default function ResultFrete(props){
    return(
        <View style={styles.resultadoFrete}>
            <Text style={styles.infoFrete}>{props.mensageResult}</Text>
            <Text style={styles.numFrete}>{props.resultFrete}</Text>
        </View>
    )
}