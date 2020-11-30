import styled from 'styled-components';

export const DivSpaceships = styled.div`
    position:relative;
    display:flex;
    padding-top:30px;
    margin: 50px auto;
    border: 2px solid black;
    border-radius: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width:500px;
    max-height:200px;`

export const ImageStyle = styled.img`
    flex:1;    
    width: 100%;
    height:auto;`

export const SpaceshipTitle = styled.p`
    flex:1;    
    font-size: 25px;
    padding-left: 25px;
    font-family: Starjedi;`

export const WelcomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    height: 90vh;`

export const WelcomeText = styled.h1`
    font-family: Starjedi;`