import React from 'react';
import { Puff } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div>
            <Puff
                height="80"
                width="80"
                radius={1}
                color="#cf173c"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loading;