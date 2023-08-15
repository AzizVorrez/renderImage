import React from 'react';
import htmlLogo from './assets/html.png'
import cssLogo from './assets/css.png'
import jsLogo from './assets/js.png'
import reactLogo from './assets/react.png'

const ImageRow = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
             <img src={htmlLogo} alt="" style={{ width: '25%' }} />
             <img src={cssLogo} alt="" style={{ width: '25%' }} />
             <img src={jsLogo} alt="" style={{ width: '25%' }} />
             <img src={reactLogo} alt="" style={{ width: '25%' }} />
        </div>
    );
}

export default ImageRow