import React, { useEffect, useState } from 'react';

import SpaceshipList from './SpaceshipList';

import { DivSpaceships, ImageStyle, SpaceshipTitle } from '../styled-components';

import Milleniun from '../assets/images/mf.png';

export const Spaceships = () => {
    return (
        <>
            <DivSpaceships>
                <SpaceshipTitle >Starships</SpaceshipTitle>
                <div style={{ position: 'relative' }}>
                    <ImageStyle src={Milleniun} />
                </div>
            </DivSpaceships >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <SpaceshipList />
            </div>
        </>
    )
}
// export default Spaceships;