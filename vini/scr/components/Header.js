import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
          <Text style = {{ color:'white' , fontSize: 20 }}>
             Séries que eu gosto ai 
          </Text>
        </View>
    );
}

const styles = StyleSheet.create( {
    header : {
        backgroundColor: "blue" ,
        width: '100%',
        height: 50 ,
        alignItems: 'center',
        justifyContent: 'center',
    }
    });
