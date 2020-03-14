import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone',
            headerStyle: { backgroundColor: '#eee'}
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            //headerStyle: { backgroundColor: '#eee'}
        }
    },
    About: {
        screen: About
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#333'}
    }
});

export default createAppContainer(HomeStack);