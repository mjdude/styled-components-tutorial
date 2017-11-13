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

const Gallery = styled.div`
 display: flex;
 flex-wrap: wrap;
`

const Thumbnail = styled.img`
  flex-grow: 1;
  width: 300px;
  height: 250px;
  padding: 5px;
  margin@ 15px;
  border: 1px solid ${mainColor};
  border-radius: 8px;
`

class App extends Component {
  render() {

    const thumbnails = Array.from({ length: 5 }, (_, index) => {
      return <Thumbnail key={index + 1} src={require(`../assets/thumbnail-${index + 1}.jpeg`)} />;
    });
    return (
      <div className={this.props.className}>
        <Title color={mainColor}>Mystagram</Title>
        <Gallery>
          {thumbnails}
        </Gallery>
      </div>
    );
  }
}

export default styled(App)`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

