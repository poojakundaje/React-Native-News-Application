import React, {Component} from 'react';
import {  View, 
          FlatList, 
          ActivityIndicator,  
          TouchableOpacity,
          RefreshControl} from 'react-native';


// Imported Components
import Styles from "../Styles"
import Header from "../components/Header"
import ArticleItem from '../components/ArticleItem';



/**
 * initializes the class, state holds articles and determines whether page is rendered through the loading boolean 
 */
class HomeScreen extends Component {
  constructor(props){
    super(props)
  
    this.state={
      articles: [],
      loading:true,
      refreshing:false,
    }

  }

  /**
   * fetch data from NEWS API (https://newsapi.org/docs) as soon as the app is opened
   */
  componentDidMount() {
       this.getData()
       
  }

  /**
   * fetch data from NEWS API (https://newsapi.org/docs)
   */
  getData = async () => {
    const response = await fetch(`${"https://newsapi.org/v2/top-headlines?"}country=${"us"}&apiKey=${"a62f88c8cf294da78be311e686dacaf3"}&pageSize=100`)
    const data = await response.json();
    
    this.setState({ 
      articles: data.articles,
      loading:false,
      refreshing: false,
    })
  }




  /**
   * display header (contianing today's date) and list of articles from today's headlines. If you click on the 
   * article you can read a brief description of the article. At the bottom of this rendered page there are other 
   * articles published by this source. 
   */
  render(){
    
    //if the page is loading, return an activity indicator 
    if(this.state.loading){
        return <ActivityIndicator/>
    }
    else{

      //render the home screen 
      return(
        
        <View style={Styles.container}>

          <View>
            <Header style={Styles.header}/>
          </View>

           <View>
            {/* {this.state.articles.urlToImage !==null &&  */}
            
              <FlatList
                style={Styles.feed}
                data={this.state.articles}
                keyExtractor={(item) => item.url}
                refreshControl={
                  <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this.getData}
                  />
                }
                renderItem={({item})=> (
                  <View style={Styles.feedItem}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ArticleDetailsScreen', {'items':item})}> 
                        <ArticleItem item={item}/>                
                    </TouchableOpacity>
                  </View>
                )}            
              />  
            </View> 
        </View>
      );
    }
    
  }
}


export default HomeScreen
