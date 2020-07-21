import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import { WebView } from 'react-native-webview';

/**
 * links the user to the original article through WebView when the "read more" option is selected
 * @param {navigation} param link to the original article 
 */
function ArticleWebScreen({navigation}){
    const item= navigation.getParam('items')

    return(   
        <WebView source={{ uri: item.url }}
            startInLoadingState={true}
            onError={() => alert("Failed to load article.")}
            renderLoading={() => <ActivityIndicator style={{paddingVertical: 38}}/> }
         />
        
    )
}

export default ArticleWebScreen