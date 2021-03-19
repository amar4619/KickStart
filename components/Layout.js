import React from 'react';
import Header from './Header';
import {Container} from 'semantic-ui-react';

export default props => {
    return (
        
        <Container>
            <Header />
            <h1>I m A header</h1>
            {props.children}
           
        </Container>

        
    );
};