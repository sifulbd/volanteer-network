import React from 'react';

const volanteer = ({vt}) => {
    return (
        <>
             <tr>
                <td>{vt.name}</td>
                <td>{vt.Email}</td>
                <td>{vt.ReactDatepicker}</td>
                <td>{vt.description}</td>
            </tr>
        </>
    );
};

export default volanteer;