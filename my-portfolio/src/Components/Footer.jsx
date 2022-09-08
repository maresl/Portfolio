import React from 'react';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
            <p>Designed and Built by Leslie Mares &copy; {year} </p>
        </div>
    );
}

export default Footer;