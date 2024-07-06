import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <section className="blog" id="blog">
            <div className="container">
                <h2 className="animate-fade-in">Our Blog</h2>
                <div className="blog-post animate-slide-up">
                    <h3>Discover Ibadan: A Blend of Tradition and Modernity</h3>
                    <p>
                        Ibadan, the capital of Oyo State, Nigeria, is a city steeped in history and culture. It is known for its ancient landmarks, bustling markets, and vibrant arts scene. From the historic Cocoa House to the serene Agodi Gardens, Ibadan offers a unique blend of tradition and modernity that appeals to both residents and visitors alike.
                    </p>
                    <p>
                        At Wakimi Hostel, we believe in connecting our guests with the rich cultural tapestry of Ibadan. Our blog provides insights into the best places to visit, local events, and tips for making the most of your stay in this dynamic city. Whether you're exploring the vibrant nightlife or seeking tranquility in nature, Ibadan has something for everyone.
                    </p>
                </div>
                <div className="blog-post animate-slide-up">
                    <h3>Life at Wakimi Hostel</h3>
                    <p>
                        Wakimi Hostel is more than just a place to stay; it's a community. Our modern amenities, including a gym, game center, and 24/7 security, ensure that you have a comfortable and safe experience. Our dedicated staff is always here to help you with any needs you may have, from housekeeping to local recommendations.
                    </p>
                    <p>
                        Our blog features stories from our residents, showcasing their experiences and the vibrant community life at Wakimi Hostel. Learn about the exciting events we host, from fitness classes to cultural nights, and get to know the people who make our hostel a home away from home.
                    </p>
                </div>
                <div className="blog-post animate-slide-up">
                    <h3>Tips for a Great Stay at Wakimi Hostel</h3>
                    <p>
                        Whether you're a student, professional, or traveler, Wakimi Hostel offers the perfect environment for a productive and enjoyable stay. Here are some tips to help you make the most of your time with us:
                    </p>
                    <ul>
                        <li><strong>Stay Active:</strong> Make use of our state-of-the-art gym to stay fit and healthy.</li>
                        <li><strong>Explore Ibadan:</strong> Take advantage of our prime location to visit nearby attractions and immerse yourself in the local culture.</li>
                        <li><strong>Join Events:</strong> Participate in our community events to meet new people and make lasting memories.</li>
                        <li><strong>Stay Connected:</strong> Follow us on social media for the latest updates and special offers.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Blog;
