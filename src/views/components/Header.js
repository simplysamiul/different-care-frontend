import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import headerOne from '../../assestes/img/header-1.png';

const Header = () => {
    return (
        <Carousel>
                <div>
                    <img src={headerOne} alt="" />
                    <p className="legend">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur dolores molestias laudantium quidem officia eligendi laborum quae et officiis voluptatum. Tenetur debitis molestias explicabo deserunt est facilis quam totam eius dolorem sit beatae cumque saepe enim consequuntur architecto a delectus asperiores, corporis expedita veniam neque laudantium reprehenderit eaque? Voluptatibus, dolorum?</p>
                </div>
                <div>
                    {/* <img src="assets/2.jpeg" /> */}
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    {/* <img src="assets/3.jpeg" /> */}
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
};

export default Header;