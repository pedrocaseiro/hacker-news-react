import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from 'styles/palette';
import { Wrapper, Title } from './styles'
import List from 'components/List'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>Hacker News Reader</Title>
            <List />
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
