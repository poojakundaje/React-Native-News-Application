import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import HomeScreen from "../screens/HomeScreen"
import ArticleWebScreen from "../screens/ArticleWebScreen"
import ArticleDetailsScreen from '../screens/ArticleDetailsScreen';

/**
 * handles screen navigations, so the user can go navigate back to the homepage 
 */
const screens ={
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Headlines',
            
        }
    },
    ArticleWebScreen: {
        screen: ArticleWebScreen,
        navigationOptions: {
            //how do i get this to be the title of the article?
            title: ''
        }
    },
    ArticleDetailsScreen: {
        screen: ArticleDetailsScreen,
        navigationOptions: {
            //how do i get this to be the title of the news source?
            title: ''
        }
    },
    
    
    
}

const HomeStack= createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle: {
            height:80,
        },
        headerTintColor: '#1E1611', 
    }
})

const fonts={
    fontSize:35,
    fontFamily: "HelveticaNeue-Bold", 
    fontWeight: "300",
    color: '#1E1611', 
    letterSpacing: 0.4,
}

export default createAppContainer(HomeStack)
