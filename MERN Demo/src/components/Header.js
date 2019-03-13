import React from 'react';

const Header = (props) => {
    return (
        <header className="App-header">
            <img src={props.logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to a demo of SuS!</h1>
        </header>
    );
};

export default Header;