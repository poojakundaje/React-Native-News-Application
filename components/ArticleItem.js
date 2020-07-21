import React from "react";
import { Text, View,Image} from 'react-native';
import Styles from "../Styles"
import moment from "moment"; //for printing how many hours ago the article was posted

function ArticleItem(props){
    return(
        <View>
            <View style={[Styles.newsCard]}>        
            {props.item.urlToImage !=null && <Image source={{uri:props.item.urlToImage}} style={Styles.img}/>}
            <Text style={Styles.text}>
                {props.item.title}
            </Text>

            </View>   
            <View style={[Styles.bottom]}>
                <Text style={[Styles.source]} >
                    {props.item.source.name}
                </Text>

                <Text style={[Styles.date]}>
                    {moment(props.item.publishedAt).fromNow()}
                </Text>
             </View>     

        </View>
            
    )
}

export default ArticleItem;
