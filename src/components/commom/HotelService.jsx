import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Header from './Header'
import {FaClock, FaCocktail, FaParking, FaSnowflake, FaTshirt, FaUtensils, FaWifi} from 'react-icons/fa'
const HotelService = () => {
  return (
    <Container className='mb-2'>
      <Header title={"Our services"}/>
        <Row>
          <h4 className='text-center'>
            Services at <span className='hotel-color'>LakeSide Hotel</span>
            <span className='gap-2'>
              <FaClock/> -24 Hour Front desk 
            </span>
          </h4>

        </Row>

    <hr/>
    <Row xs={1} md={2} lg={3} className='g-4 mt-2'>
      <Col>
      <Card>
        <Card.Body>
            <Card.title className='hotel-column'>
              <FaWifi/>WiFi
            </Card.title>
            <Card.Text>
              Stay connected with high-speed Internet access.
            </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Body>
            <Card.title className='hotel-column'>
              <FaUtensils/>BreakFast
            </Card.title>
            <Card.Text>
              Start your day with a delicious BreakFast buffect
            </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Body>
            <Card.title className='hotel-column'>
              <FaTshirt/>Laundry
            </Card.title>
            <Card.Text>
              Keep your clothes clean and fresh with our Laundry Service.
            </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Body>
            <Card.title className='hotel-column'>
              <FaCocktail/>Mini-Bar
            </Card.title>
            <Card.Text>
              Enjoy a refreshing drink or sncak from our in-room mini-bar.
            </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Body>
            <Card.title className='hotel-column'>
              <FaParking/>Parking
            </Card.title>
            <Card.Text>
              Park your car conveniently in our on-site parking lot.
            </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Body>
            <Card.title className='hotel-column'>
              <FaSnowflake/>Air conditioning
            </Card.title>
            <Card.Text>
              Stay cool and comfortable with our air conditioning system.
            </Card.Text>
        </Card.Body>
      </Card>
      </Col>


    </Row>

    </Container>
  )
}

export default HotelService