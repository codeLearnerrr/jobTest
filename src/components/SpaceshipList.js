import React, { useEffect, useState } from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import axios from 'axios';

export const getRequest = () => {
    return axios.get('https://swapi.dev/api/starships/2/')
        .then(({ data }) => data)
        .catch(err => console.log(err))


};


const SpaceshipList = () => {
    const [responseData, setResponseData] = useState('');

    useEffect(() => {
        getRequest().then((response) => {
            setResponseData(response || 'Invalid query. Please, check the documentation at https://swapi.dev/');
        })
    }, []);

    return (
        <>
            <Card style={{ width: '300px', marginBottom: '20px' }}>
                <CardBody>
                    <CardTitle tag="h6">{responseData.name}</CardTitle>
                    <CardText>$  {responseData.cost_in_credits} -  Speed {responseData.max_atmosphering_speed} L/Y</CardText>
                </CardBody>
            </Card>
        </>
    )
}

export default SpaceshipList;