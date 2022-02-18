import {useState} from 'react'
import { Carousel } from 'react-bootstrap'
import PS5 from '../assets/ps5console.png';
import TeddyBear from '../assets/teddybear.png'
import Guitar from '../assets/guitar.png'

export const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} style={{width: "800px", marginTop: "220px", height: "500px"}}>
      <Carousel.Item style={{width: "800px"}} className="contents">
        <img
          style={{width: "300px", height: "400px"}}
          src={PS5}
          alt="Playstation 5"
        />
        <Carousel.Caption className="description">
          <h3>Playstation 5</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width: "800px"}} className="contents">
        <img
          style={{width: "300px", height: "400px"}}
          src={TeddyBear}
          alt="Second slide"
        />

        <Carousel.Caption className="description">
          <h3>Teddy Bear</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{width: "800px"}} className="contents">
        <img
          style={{width: "200px", height: "400px"}}
          src={Guitar}
          alt="Third slide"
        />

        <Carousel.Caption className="description">
          <h3>Electric Guitar</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}