import React, {Component} from 'react'
import {  Text, 
    View, 
    FlatList, 
    StyleSheet,
    TouchableOpacity} from 'react-native'
import Styles from "../Styles"
import ArticleItem from '../components/ArticleItem';
import moment from "moment"; //for printing how many hours ago the article was posted

const APageUUID=  Math.random () * 10000 // used to navigate to the same screen 


/** 
 * Renders the article's information and more articles from the source (if there are any) 
 * User can click on the read more option to read the original article
 * */
class ArticleDetailsScreen extends Component{
    constructor(){
        super()
        this.state={
            originalArticle: '', //article that the user clicked on 
            articles:[],
            loading: true
        }

    }
   
    /**
     * Fetch articles from the api that are from the same news source as the article that the user clicked on
     * on the home page.
     */
    async componentDidMount(){
        const articleItem= this.props.navigation.getParam('items')
        var sourceName= articleItem.source.name 

        const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=a62f88c8cf294da78be311e686dacaf3")
        const data = await response.json();
        console.log(data)
        //store articles that have the same source name as the article the user clicked on on the home page 
        var filteredArticles= data.articles.filter(article => article.source.name === (sourceName))
        //remove the article from this list that the user originally clicked on 
        filteredArticles= filteredArticles.filter(article => article.title != articleItem.title)

            //set state to the filtered articles, now the page is no longer in a loading state 
            this.setState({ 
                originalArticle: articleItem,
                articles: filteredArticles,
                loading: false
            })
        
    }
    

    render(){

        return(
            <View>
                {/* renders the article information, like the title, author, description and link to original article onto screen */}
                <View style={[Styles.Container, {display:"flex", justifyContent:"space-between"}]}>
                    <View style={{flexDirection:"row", padding:12}}>
                        <Text style={[styles.date,{ fontWeight: 'bold'}]}>Published </Text> 
                        <Text style={styles.date}>{moment(this.state.originalArticle.publishedAt).fromNow()}</Text>
                    </View>
                    
                    <Text style= {styles.title}>{this.state.originalArticle.title}</Text>
                    
                    {this.state.originalArticle.author!==null && <Text style={styles.author}> by {this.state.originalArticle.author}</Text>}
                    <Text style={styles.description}>{this.state.originalArticle.description}</Text>
                    <Text style={styles.readMore} onPress={()=> this.props.navigation.navigate('ArticleWebScreen', {'items': this.state.originalArticle})}>Read more {">"} </Text>

                </View>
                
                <View >
                    {/* if there are any other articles from this source, print them */}
                    {this.state.articles.length >0 && 
                        <View>
                            <View style={styles.divider}/>
                            <Text style={[styles.date, { fontWeight: 'bold', paddingBottom:8}]}>More headlines from {this.state.originalArticle.source.name}</Text>
                            <FlatList
                                data={this.state.articles}
                                keyExtractor={(item) => item.url}
                                renderItem={({item})=> (
                                    <View style={Styles.feedItem}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate({
                                            routeName:'ArticleDetailsScreen', 
                                            params:{'items':item}, 
                                            key: 'ArticleDetailsScreen' + APageUUID})}> 
                                            <ArticleItem item={item}/>                
                                        </TouchableOpacity>
                                    </View>

                                )}            
                            />  
                        </View>
                    }
                </View>

            </View>
        )
    }

}

//styles for article information
const styles = StyleSheet.create({
    date:{
        fontFamily:"HelveticaNeue-Light",
        fontSize:12, 
        color:'#414141',
        textAlign:"center"
    },
    title:{
        textAlign:"center", 
        fontFamily: "HelveticaNeue-Italic", 
        fontWeight: 'bold', 
        fontSize: 23, 
        paddingHorizontal: 10
    },
    author:{
        fontSize: 13, 
        fontFamily: "HelveticaNeue-Medium", 
        lineHeight: 40, 
        paddingLeft:10,
    },
    description:{
        fontFamily:"Helvetica Neue", 
        fontSize:16, 
        justifyContent:"flex-start",
        paddingHorizontal: 10
    },
    readMore:{
        padding:12, 
        textAlign:"right", 
        textDecorationLine: 'underline',
        paddingRight: 40
    },
    divider:{
        marginVertical:20, 
        marginHorizontal: 40, 
        borderBottomColor: 'black', 
        borderBottomWidth: 0.5, 
        borderBottomEndRadius:2
    }

})

export default ArticleDetailsScreen