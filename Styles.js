import {StyleSheet, Dimensions} from 'react-native'
// Constants
const {WIDTH, HEIGHT}= Dimensions.get('window')

/**
 * Stylesheet used throughout the application
 */
export default StyleSheet.create({
    container: {
        marginTop:10,
        flex: 1,
        backgroundColor: '#F5F5F5',
     
    },
    feed:{
        marginHorizontal:16,
        
    },
    feedItem:{
        backgroundColor:"#fff",
        padding:8,
        flexDirection:'column',
        marginVertical:8

    },
    newsCard:{
        height:80,
        flex:1,
        justifyContent:"space-between",
        flexDirection:'row',
    },
    text: {
        fontSize: 14,
        fontFamily: "HelveticaNeue-Bold",
        color: "rgba(0,0,0,.84)",
        width:'70%',
        alignSelf:'center'
       
    },
    date:{
        fontSize: 12,
        fontFamily: "HelveticaNeue-Bold",
        color: '#ccc',
        marginLeft: 8
    },
    img:{
        height: 75,
        width: 75,
        backgroundColor: '#eaeaea',
        marginLeft:4,
        marginTop:10,
        alignSelf:'center'
    },
    bottom:{
        flex:2,
        flexDirection: "row",
        marginLeft: '25%'
    },
    source:{
        paddingLeft:20,
        fontSize: 12,
        fontFamily:  "HelveticaNeue-Bold",
        color:'#7A94CE',
    },
})