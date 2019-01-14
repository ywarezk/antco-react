import React from 'react';

// i will see this in the url /
export default function Home(props) {
    const navigateToAbout = () => {
        props.history.push('/about');
    }

    return (
        <div>
            <h1>
                Hello im in the hompage
            </h1>
            <button onClick={navigateToAbout}>
                Navigate to about page
            </button>
        </div>
        
    )
}