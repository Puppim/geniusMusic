import React, { useState, useEffect} from 'react';

import { Container, HeaderPiano } from './styles';
import Display from './Display';
import Button from '../Button';
interface keys{

}

 
const PianoKeyboad: React.FC<keys> = ({ children, ...rest }) => {

  const initial:number[] = [];
  const [start , setStart] = useState(false);
  const [name , setName] = useState('');
  const [order , setOrde] = useState<number[]>(initial);
  const [clickedOrder, setClickedOrder] = useState<number[]>([]);
  const [score,setScore] = useState(0);
  const [note,setNote] = useState('');

  let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 7);
    setOrde([...order, (colorOrder+1)]);
    setClickedOrder(initial);
    
  }

  let nextLevel = () => {
    
    shuffleOrder(); 
    play();
  }

  let playGame = () => {
    if(start){
      alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
      setOrde(initial);
      setClickedOrder(initial);
      setScore(0);
      nextLevel();
    }
 
  }

  const gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em "START" para iniciar um novo jogo`);

    setOrde(initial);
    setClickedOrder(initial);
    setStart(false);
}


const converNumberNotes = (note:number ) => {
  if(note === 1) {
      return "Dó";
  } else if(note === 2) {
      return "Ré";
  } else if (note === 3) {
      return "Mi";
  } else if (note === 4) {
      return "Fá";
  } else if (note === 5) {
    return "Sol";
  } else if (note === 6) {
    return "Lá";
  }else if (note === 7) {
    return "Sí";
  }else{
    return "";
  }
}

const checkOrder = () => {
  let flag = true;
 
  for(let i in clickedOrder) {
    if(clickedOrder[i] !== order[i]) {
        setStart(false);
        flag = false;
        gameOver();
        break;
    }
  }
    if(flag && start){
      if(clickedOrder.length === order.length ) {
        alert(`Pontuação: ${score+1}\nVocê acertou! Iniciando próximo nível!`);
        setScore(score+1);
        nextLevel();
        play();
      }
    }
}


const play = ( )=>{
    setNote(converNumberNotes(order[order.length-1]));
    setTimeout(() => { setNote('');},1000);
}

let click = (note:number) => {
  if(start){
    setClickedOrder([...clickedOrder, note]);
  }
}

const getName = (e: React.ChangeEvent<HTMLInputElement>)=> {
  setName(e.target.value);
}
  useEffect( ()=>{checkOrder();},[clickedOrder]);
  useEffect( ()=>{play();},[order]);
  useEffect( ()=>{playGame();},[start]);

  return ( 
  <>
  <HeaderPiano>
    <input  onChange={getName} type="text" placeholder='Digite seu nome...' />
    <Button onClick={()=>setStart(true)}>START!</Button>
    <Display notes={note} player={name} score={score} status={start?'Em game':'Fim de Jogo'} ></Display>   
  </HeaderPiano>
 
  <Container  {...rest}>
    <div onClick={()=>click(1)} className="initialkey">
    DÓ
    </div>
    <div onClick={()=>click(2)} className="key">
      <div className="blackkey"></div>
    RÉ
    </div>
    <div onClick={()=>click(3)} className="key">
      <div className="blackkey"></div>
    MI
    </div>
    <div onClick={()=>click(4)} className="key">
      <div className="blackkey"></div>
    FÁ
    </div>
    <div onClick={()=>click(5)} className="key">
      <div className="blackkey"></div>
    SOL
    </div>
    <div onClick={()=>click(6)} className="key">
      <div className="blackkey"></div>
    LÁ
    </div>
    <div onClick={()=>click(7)} className="key">
      <div className="blackkey"></div>
    SÍ
    </div>
  </Container>
  </>
);}

export default PianoKeyboad;
