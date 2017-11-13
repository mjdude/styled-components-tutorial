import React, { Component } from 'react';
import styled from "styled-components";

const mainColor = `indianred`;

const Title = styled.h1`
 color: ${props => props.color || 'goldenrod'}
`;

class App extends Component {
  render() {
    return (
      <div>
        <Title color={mainColor}>Mystagram</Title>
      </div>
    );
  }
}

export default App;

