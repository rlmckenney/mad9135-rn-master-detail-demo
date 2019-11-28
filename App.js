import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Home from './screens/Home.hooks.js'
import MovieDetails from './screens/MovieDetails'

// See docs https://reactnavigation.org/docs/en/stack-navigator.html
const AppNavigator = createStackNavigator({
  // The keys in this object are the route names.
  // We can use the object assignment syntax.
  Home: {
    screen: Home,
    // This will override any options set on the class component.
    navigationOptions: { 
      title: 'Movie List',
    }
  },
  // Or, the component assignment syntax.
  MovieDetail: MovieDetails
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: 'hsl(220, 60%, 90%)'}
  }
})

export default createAppContainer(AppNavigator)
