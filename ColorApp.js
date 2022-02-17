import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, StyleSheet, FlatList } from 'react-native'


const ColorApp = () => {


    const [list, setlist] = useState([]);


    const randomcolor = () => {

        let red = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);

        return `rgb(${red},${green},${blue})`
    }



    return <View style={styles.ColorApp}>

        <TouchableOpacity
            style={styles.GenerateButton}
            onPress={
                () => {
                    setlist([...list, randomcolor()]);
                }
            }
        >
            <Text style={[styles.textstyle, { margin: 10, padding: 10 }]}>Click here to generate Random Color</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.GenerateButton}
            onPress={
                () => {
                    setlist([]);
                }
            }
        >
            <Text style={[styles.textstyle, { margin: 10, padding: 10 }]}>RESET</Text>
        </TouchableOpacity>

        <View style={{ borderWidth: 1, borderColor: "yellow", display: "flex", alignItems: "center" }} >
            {/* color display area */}

            <FlatList

                data={list}

                renderItem={
                    (element) => {
                        return (<View style={[styles.Box, { backgroundColor: `${element.item}` }]}>
                            {/* Box */}
                            <Text style={styles.textstyle}>{`${element.item}`}</Text>
                        </View>
                        );
                    }
                }

            />




        </View>

    </View>
}

const styles = StyleSheet.create({
    ColorApp: {

        borderWidth: 2,
        borderColor: 'black',
        marginVertical: 10,
    },
    textstyle: {

        color: 'white', textAlign: 'center'
    },
    GenerateButton: {

        backgroundColor: "#1e90ff",
        marginVertical:10,

    },
    Box: {


        width: 300,
        height: 50,
        margin: 5,

    },

});

export default ColorApp;