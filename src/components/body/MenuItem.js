import React from "react";
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap';

const MenuItem = props => {
    return(
        <div >
            <Card style= {{margin: "10px"}}>
                <CardBody>
                    <CardImg 
                        width="100%" 
                        alt={props.name} 
                        src = {props.dish.image} 
                        style = {{opacity:".6"}} />
                    <CardImgOverlay>
                        <CardTitle 
                            style = {{color: "Black", cursor: "pointer"}}
                            onClick = {props.DishSelect}
                            //onClick = {() => props.onDishSelect(props.dish)} 
                        >
                                 {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>

        </div>
    );
}

export default MenuItem;