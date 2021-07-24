import React, { useState } from 'react';
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {

    const [show, setShow] = useState(true)

    return (
        <Alert variant={variant} dismissible show={show} onClose={() => setShow(false)}>
            {children}
        </Alert>
    );
};

Message.defaultProps = {
    variant: 'info'
}

export default Message;
