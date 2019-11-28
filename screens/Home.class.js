import React, { Component } from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { FlatList } from 'react-native'
import { Container, Content, Spinner } from 'native-base'
import MovieListItem from '../components/MovieListItem'

export default class Home extends Component {
  state = {
    movieList: [],
    isLoading: true
  }
  
  loadData = () => {
    fetch('https://facebook.github.io/react-native/movies.json')
    .then(response => response.json())
    .then(data => {
      // Added setTimeout here only to simulate a slow loading API.
      // This will let us see the spinner.
      setTimeout(() => {
        this.setState({ 
          movieList: data.movies,
          isLoading: false 
        })
      }, 3000)
    })
  }

  loadFonts = () => {
    Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    })
  }

  componentDidMount () {
    this.loadData()
    this.loadFonts()
  }

  render() { 
    if (this.state.isLoading) return <Spinner color='hsl(220, 60%, 90%)' />
    
    return (
      <Container>
        <Content>
          <FlatList 
            data={this.state.movieList}
            keyExtractor={item => item.id}
            renderItem={({item}) => <MovieListItem movie={item} />}
          />
        </Content>
      </Container>
    )
  }
}
