import React from 'react';

const page = ({ params }: any) => {
    return (
        <div>checkout  {params.checkout_id}</div>
    );
};

export default page;