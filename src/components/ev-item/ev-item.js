import { Component } from 'react';
import EventService from '../../services/EventService';
import { FaBookmark } from 'react-icons/fa';
import './ev-item.css';
import {Card, Row, Col} from 'react-bootstrap';

let eventService = new EventService([{}]);

eventService.getAllInfo()
.then (res => console.log(res.map(({name, date}) => ({name, date}))));

class EvItem extends Component {
  constructor(props) {
    super(props);
    this.updateBlock();
  }
  state = {
    name: null,
    date: null,
    city: null,
    image: null
  }

  eventService = new EventService([{}]);

  updateBlock = () => {
    this.eventService
        .getAllInfo()
        .then(res => {
          this.setState({ 
            name: res[0].name,
            date: res[0].date.slice(0,2,3,4,5,6,7,8),
            city: res[0].city,
            image: res[0].image
         })
      })
  }

    render() {
    
      const {name, date, image} = this.state;
      return (
        <Row xs={1} md={2} className="g-6">
          {Array.from({ length: 2 }).map((_, idx) => (
            <Col>
              <Card className="card text-white">
                <Card.Body className="card_body">
                  <div className="card_img">
                    <Card.Img   src={image} alt="Card image"  className="center" />
                  </div>
                      <Card.ImgOverlay>
                          <div className="card_mark">
                                <div className="card_day">
                                  {date}                                 
                                </div>                              
                                <div className="card_bookmark" >
                                  <FaBookmark/>
                                </div>  
                          </div>
                          <Card.Title  className="card_title"> {name} </Card.Title>
                      </Card.ImgOverlay>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )
    }
}

export default EvItem;