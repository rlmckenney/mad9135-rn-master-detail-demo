import React, { Component } from 'react'
import { Container, Content, Text } from 'native-base'
import { StyleSheet } from 'react-native'

export default class MovieDetails extends Component {
  static navigationOptions = ({navigation}) => {
    const { title } = navigation.getParam('movie')
    return { title }
  }

  render() {
    const movie = this.props.navigation.getParam('movie')

    return (
      <Container>
        <Content style={s.container}>
          <Text style={s.title}>{movie.title}</Text>
          <Text style={s.released}>Release in {movie.releaseYear}</Text>
          <Text style={s.description}>
            Sit nisi aute enim ut esse velit eu ad enim laboris nostrud 
            exercitation excepteur. Ad sint in commodo qui ipsum exercitation 
            aliquip Lorem exercitation proident exercitation sunt. Et nisi 
            cillum nostrud ex quis non exercitation proident pariatur aliquip.
          </Text>
        </Content>
      </Container>
    )
  }
}

const s = StyleSheet.create({
  container: { padding: 24 }, 
  title: { fontSize: 24, fontWeight: '600'},
  released: { marginTop: 12, color: '#777' },
  description: { marginTop: 32 }
})