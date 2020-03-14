import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone',
            //headerStyle: { backgroundColor: '#eee'}
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: '#333'}
    }
});

export default AboutStack;