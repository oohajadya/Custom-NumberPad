import React,{useState} from "react";
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NumberPad = () => {

    const Key = ({value, onPress}) => {
        return (
          <TouchableOpacity  onPress={onPress} >
            {value == -1 ?
            <MaterialIcons  name="backspace" color='black' size={45} />
            :
            <Text style={styles.key}>{value}</Text>
            }
          </TouchableOpacity>
        );
      }
    
    const [input,setInput] = useState([]);
    

    const enterField = (value) => {
        if(value == -1)
        {
            let inputs = [...input];
            inputs.splice(-1);
            setInput([...inputs])
            console.log(input)
        }
        else{
            let inputs = [...input];
            inputs.push(value)
            setInput( [...inputs])
            console.log(input)
        }

    }


    return(
        <View style={styles.container}>
            <View style={styles.displayContainer}>
             <Text style={styles.inputText}>{input}</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.keyboardRow}>
                <Key value={1} onPress={() =>enterField(1)} />
                <Key value={2} onPress={()=>enterField(2)} />
                <Key value={3} onPress={()=>enterField(3)} />
                </View>
                <View style={styles.keyboardRow}>
                    <Key  value={4} onPress={()=>enterField(4)} />
                    <Key  value={5} onPress={()=>enterField(5)} />
                    <Key  value={6} onPress={()=>enterField(6)} />
                </View>
                <View style={styles.keyboardRow}>
                    <Key value={7} onPress={()=>enterField(7)} />
                    <Key value={8} onPress={()=>enterField(8)} />
                    <Key value={9} onPress={()=>enterField(9)} />
                </View>
                <View style={styles.keyboardRow}>
                <Key value={-1} onPress={() => enterField(-1)} />
                <Key value={0} onPress={()=>enterField(0)} />
                <MaterialIcons name="check-circle" color='#50C878' size={45} />
               
                </View>
                

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },

    displayContainer:{
        flex:4,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        
    },
    
    inputContainer:{
        flex:3,
        backgroundColor:'#DCDCDC'
    },
    keyboardRow:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    key:{
        fontSize:45,
    
    },
    inputText:{
        borderBottomWidth:1,
        borderColor:'#848482',
        width:'50%',
        height:'10%',
        fontSize:30
        
    }
})

export default NumberPad;