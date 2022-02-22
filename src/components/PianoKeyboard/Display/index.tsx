import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface displayInter{
  player: string;
  score: number;
  status: string;
  notes: string;
}

const Button: React.FC<displayInter> = ({ player, score,status, notes }) => (
  <Container>
    <div className="headDisplay"> 
      <div className="player">
        <h3>Jogador: {player}</h3>
      </div>
    </div>
    <div className="bodyDisplay">
      <h1>{notes}</h1>
    </div>
    <div className="footerDisplay">
      <h3>Score: {score}</h3>
      <h3>{status}</h3>
    </div>
     
  </Container>
);

export default Button;
