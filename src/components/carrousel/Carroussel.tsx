import { useState } from "react";
import "./Carrousel.css";
import image1 from "../../assets/img/eleveur_img.jpeg";
import image2 from "../../assets/img/artisan_img.jpeg";

export default function Carrousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const images = [image1, image2];

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carrousel">
            <img src={images[currentIndex]} alt="Producteurs" className="carrousel-image" />
            
            <div className="carrousel-content">
                <h2>PRODUCTEURS & TERRITOIRE</h2>
                <div className="carrousel-dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="social-icons">
                <a href="#" aria-label="Facebook">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    );
}