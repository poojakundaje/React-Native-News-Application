import React from "react"
import { StyleSheet, Text, View} from 'react-native';

/**
 * prints today's date to the page as a header 
 */
function Header (){

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    
    return(
        <View style={styles.header}>
            <Text style={styles.font}>
                {date}th {month}, {year}
            </Text>
        </View>
        
    )
}

//style for today's date 
const styles= StyleSheet.create({
    font:{
        fontSize:12,
        fontFamily: "HelveticaNeue-Bold", 
        fontWeight: "300",
        color: '#414141', 
        letterSpacing: 0.4,
    },
    header:{
        alignSelf: 'center',
        display:'flex',
        paddingBottom:8
    },
});
export default Header