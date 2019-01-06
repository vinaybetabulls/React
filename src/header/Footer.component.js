import React, { Component } from 'react';
import { Card, CardFooter } from 'reactstrap';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <Card className="sticky-footer">
                    <CardFooter className="text-muted">Footer....</CardFooter>
                </Card>
            </div>
        );
    }
}
export default Footer;