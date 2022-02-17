import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import ColorApp from  "./ColorApp"


export default function App() {
  const List = [{ index: "1", name: "Ishan" }, { index: "2", name: "Katherine" }, { index: "3", name: "shefali" }, { index: "4", name: "Harshit" }, { index: "5", name: "Urvi" }]
  const Name = "Harshit Kumar";

  const [counter, setcounter] = useState(0);

  return (
    <ScrollView>
      <View>

        <FlatList
          style={styles.flatlist_style}

          data={List}
          renderItem={(element) => {

            return <View>
              <Text style={styles.textstyle}>{element.item.name}</Text>
              <Image style={styles.imagedimension} source={require('./assets/pic1.jpg')}></Image>
              <Button style={styles.buttonstyle} title="Click in Here" onPress={() => {
                Alert.alert(`Hello ${element.item.name}`)
              }} />
            </View>
          }}

          keyExtractor={(key) => {
            return key.index;
          }}

          horizontal

          showsHorizontalScrollIndicator={false}

        />

        <View style={styles.div}>
          <Text style={styles.Heading}>Increment Decrement Calculator</Text>
          <View style={styles.CalculatorBox}>

            <Text style={styles.display}> {counter} </Text>

            <TouchableOpacity style={styles.CommonButton} onPress={() => {
              setcounter(counter + 10)
            }}>
              <Text style={styles.textcolor}>Increment +10</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.CommonButton} onPress={() => {
              setcounter(0);
            }}>
              <Text style={styles.textcolor}>RESET</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.CommonButton} onPress={() => {
              if (counter > 0)
                setcounter(counter - 10)
            }}>
              <Text style={styles.textcolor}>Decrement -10</Text>
            </TouchableOpacity>

          </View>
        </View>

        <ColorApp/>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  flatlist_style: {
    color: "red",
    textAlign: "center",
    margin: 20, padding: 10,
  },
  textstyle: {
    fontSize: 30,
    padding: 30,
    backgroundColor: "black",
    margin: 10,
    color: "white",
  },
  imagedimension: {

    width: 200,
    height: 200,
    padding: 10, margin: 10,
  },
  buttonstyle: {
    padding: 10,
    margin: 10,

  },

  div: {

    borderWidth: 2,

  },
  Heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'red',
    textAlign: 'center'

  },
  display: {

    fontSize: 30,
    fontWeight: "bold", textAlign: "center"
  },
  CalculatorBox: {
   
    

  },
  CommonButton: {
    width: 150,
    padding: 15,
    margin: 5,
    backgroundColor: "black",
  },
  textcolor: {

    textAlign: "center",
    color: 'white',

  },
 

});
