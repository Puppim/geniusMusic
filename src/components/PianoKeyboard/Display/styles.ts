import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`


background: #3A83E6;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
border-radius: 42px;
height: 300px;
border: 0;
padding: 0px;
width: 700px;
font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 28px;
text-transform: uppercase;
color: #F4F0EF;
margin:10px;
transition: background-color 0.2s;
font-family: 'Press Start 2P', cursive;

.headDisplay{
    display: flex;
    margin:25px;
}
.bodyDisplay{
    display: flex;
    margin:20px;
    justify-content: center;
}
.footerDisplay{
    display: flex;
    margin:25px;
    justify-content: space-between;
}

`;
