import styled from 'styled-components';
import { shade } from 'polished';

export const HeaderPiano = styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 background: black;

 input{
   margin: 20px;
 }

`;

export const Container = styled.div`
display: flex;
background: black;
width: 100%;
justify-content: center;


.initialkey{
  display: flex;
  background: #FFFFFF;
  width: 100px;
  margin-right: 4px;
  align-items: end;
  height: 450px;
    &:hover {
    background: ${shade(0.2, '#FFFFFF')};
  }
}
.key{
  display: flex;
  background: #FFFFFF;
  width: 100px;
  margin-right: 4px;
  align-items: end;
  height: 450px;
  
  &:hover {
    background: ${shade(0.2, '#FFFFFF')};
  }

  .blackkey{
    display: block;
    position: relative;
    bottom: 200px;
    left: -40px;
    background: black;
    width: 280px;
    height: 250px;
  }

}




`;
