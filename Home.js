import React from "react";
import { Button, ListGroup } from "react-bootstrap";
const Home = () => {
    return(
        <div>
            <div>
                Tours
            </div>
            <ListGroup>
                <ListGroup.Item>
                    <span>JUL16</span>
                    <span>DETROIT, MI</span>
                    <span>DTE ENERGY MUSIC THEATRE</span>
                    <Button>Buy Tickets</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span>JUL19</span>
                    <span>TORONTO,ON</span>
                    <span>BUDWEISER STAGE</span>
                    <Button>Buy Tickets</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span>JUL22</span>
                    <span>BRISTOW, VA</span>
                    <span>JIGGY LUBE LIVE</span>
                    <Button>Buy Tickets</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span>JUL29</span>
                    <span>PHOENIX, AZ</span>
                    <span>AK-CHIN PAVILION</span>
                    <Button>Buy Tickets</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span>AUG 2</span>
                    <span>LAS VEGAS, NV</span>
                    <span>T-MOBILE ARENA</span>
                    <Button>Buy Tickets</Button>
                </ListGroup.Item>
                <ListGroup.Item>
                    <span>AUG 7</span>
                    <span>CONCORD, CA</span>
                    <span>CONCORD PAVILION</span>
                    <Button>Buy Tickets</Button>
                </ListGroup.Item>
                
            </ListGroup>
        </div>
    )
};

export default Home;