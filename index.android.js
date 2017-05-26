import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import {Header,Left,Icon,Body,Title, Form,Label,Input,Item, Container, Content, Button, Text } from 'native-base';

export default class app extends Component {
  render() {
    return (

      <Container>
                <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                    <Body>
                        <Title>GitAPP</Title>
                    </Body>
                </Header>
                <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                        </Form>
                    </Content>
            </Container>
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('app', () => app);
