import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from  './scr/components/Header' ;

export default function App() {
  const tasks = ['Task 1' , 'Task 2' , 'Task 3 ', 'Task 4' , 'Task 5' ];
  return (
    <View style={styles.container}>
      <Header />
      <View>
       {tasks.map((task) => (  
        <Text>{task}</Text>
  ))}                                    
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
},
})