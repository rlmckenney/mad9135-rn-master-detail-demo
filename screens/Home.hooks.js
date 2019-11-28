import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { FlatList } from 'react-native'
import { Container, Content, Spinner } from 'native-base'
import MovieListItem from '../components/MovieListItem'

export default function Home () {
  const [movieList, setMovieList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  const loadData = () => {
    fetch('https://facebook.github.io/react-native/movies.json')
    .then(response => response.json())
    .then(data => {
      // Added setTimeout here only to simulate a slow loading API.
      // This will let us see the spinner.
      setTimeout(() => {
        setMovieList(data.movies)
        setIsLoading(false)
      }, 3000)
    })
  }

  const loadFonts = () => {
    Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    })
  }

  useEffect(() => {
    loadData()
    loadFonts()
  }, [])
  // The empty array as a second argument above tells React to only call
  // useEffect on the first render -- just like componentDidMount in class components. 
  // See docs https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

  if (isLoading) return <Spinner color='hsl(220, 60%, 90%)' />

  return (
    <Container>
      <Content>
        <FlatList 
          data={movieList}
          keyExtractor={item => item.id}
          renderItem={({item}) => <MovieListItem movie={item} />}
        />
      </Content>
    </Container>
  )
}
