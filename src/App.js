import React, { useState } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import './style.css';
import Detail from './Detail';
import StarRating from './StarRating';

function App() {
  return (
    <div className='App'>
      <Container>
        <Route path='/' exact>
          <h3 style={{ textAlign: 'center' }}>내 일주일은?</h3>
          <StarRating />
        </Route>
        <Route path='/detail'>
          <Detail />
        </Route>
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 250px;
  height: 550px;
  background-color: #fff;
  padding: 25px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
