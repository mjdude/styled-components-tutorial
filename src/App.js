import React, { Component } from 'react';
import styled from "styled-components";

const mainColor = `indianred`;

const Title = styled.h1`
 color: ${props => props.color || 'goldenrod'}
 font-size: 2.8em;
 margin: 25px;
 padding-bottom: 20px;
 border-bottom: 20px;
 border-bottom: 1px solid ${mainColor};
 display: inlineblock;
`;

class App extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Title color={mainColor}>Mystagram</Title>
      </div>
    );
  }
}

export default styled(App)`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

