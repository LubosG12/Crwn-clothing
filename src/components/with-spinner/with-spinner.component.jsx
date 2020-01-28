import React from 'react';

import './with-spinner.styles.scss';

const WithSpinner = WrappedComponent => ( {isLoading , ...otherProps}) => {
    return isLoading ? (
        <div className="spinneroverlay">
            <div className="spinnercontainer"></div>
        </div>
    ) : (
        <WrappedComponent { ...otherProps} />
    )
}

export default WithSpinner;