# Add a GraphQL API to a React Native App with AWS Amplify

[Egghead.io](https://egghead.io/lessons/react-add-a-graphql-api-to-a-react-native-app-with-aws-amplify)

```js
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { API, graphqlOperation } from 'aws-amplify'
import { listBooks } from './src/graphql/queries'

export default class App extends Component {
  state = { books: [] }
  async componentDidMount() {
    const bookData = await API.graphql(graphqlOperation(listBooks))
    this.setState({ books: bookData.data.listBooks.items })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        {
          this.state.books.map((b, i) => <Text key={i}>{b.name}</Text>)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
```