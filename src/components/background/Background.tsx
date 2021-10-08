import { observer } from "mobx-react-lite";
import styled from "styled-components";
import dataStore from "../../store";

const BG = [
  {
    name: 'home',
    background: 'rgba(0, 0, 0, 0.4)',
  },
  {
    name: 'writeup',
    background: 'rgba(0, 0, 0, 0.4)',
  },
  {
    name: 'music-video',
    background: '#FBA667',
  },
  {
    name: 'portraits',
    background: 'hsl(80, 63%, 65%)',
  },
  {
    name: 'sound-gallery',
    background: '#f7bbd3',
  },
  {
    name: 'stories',
    background: '#fffbe8',
  },
  {
    name: 'thanks',
    background: '#fffbe8',
  },
]

const Background = observer(() => {
  return (
    <Wrapper background={BG[dataStore.currentPage].background}>
      
    </Wrapper>
  )
})

export default Background;

type BackgroundProps = {
  background: string
}

const Wrapper = styled.div<BackgroundProps>`
  color: white;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: ${props => props.background || 'white'}
`