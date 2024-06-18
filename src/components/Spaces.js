// src/components/Spaces.js
// src/components/Spaces.js
import React from 'react';
import './Spaces.css';

import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

const Spaces = () => {
    return (
        <section className="spaces" id="spaces">
            <h2>28 Spectacular Spaces</h2>
            <h4>Rooms with private toilet and kitchen</h4>
            <div className="gallery">
                <img src="../images/image1.png" alt="Room Image" />
                <img src="../images/image2.png" alt="Lounge Image" />
                {/* Add more images as necessary */}
            </div>
        </section>
    );
};

export default Spaces;
