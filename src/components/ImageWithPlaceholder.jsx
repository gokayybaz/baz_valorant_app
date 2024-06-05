import React, { useState } from 'react';

export const ImageWithPlaceholder = ({ src, alt, placeholder, className, width, placeholderWidth }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div style={{ position: 'relative' }}>
            {!loaded && <img src={placeholder} width={placeholderWidth} alt="placeholder" style={{ position: 'absolute', top: 0, left: 0 }} />}
            <img
                src={src}
                width={width}
                className={className}
                alt={alt}
                onLoad={() => setLoaded(true)}
                style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s' }}
            />
        </div>
    );
};
