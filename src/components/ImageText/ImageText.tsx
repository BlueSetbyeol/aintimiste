import "./ImageText.css";
import { Link } from "react-router-dom";

interface ImageTextProps {
  image: string;
  titre: string;
  texte1: string;
  texte2: string;
  lien1: string[];
  lien2: string[];
  imageSide: string;
}

export default function ImageText({
  image,
  titre,
  texte1,
  texte2,
  lien1,
  lien2,
  imageSide,
}: ImageTextProps) {
  return (
    <article className={imageSide === "left" ? "image_left" : "image_right"}>
      <div className="paragraph_image">
        <img src={image} alt="image du paragraph" />
      </div>
      <section className="section_information">
        <h2>{titre}</h2>
        <p>{texte1}</p>
        <p>{texte2}</p>
        <Link to={lien1[0]}>{lien1[1]}</Link>
        <Link to={lien2[0]}>{lien2[1]}</Link>
      </section>
    </article>
  );
}
