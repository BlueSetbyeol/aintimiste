import { Link } from "react-router-dom";
import logoVerticalBlanc from "../../assets/img/logo-vertical-blanc.svg";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <article className="information">
        <img
          src={logoVerticalBlanc}
          alt="logo aintimiste"
          className="logo_footer"
        />
        <section>
          <p>4 RUE DE LA POMPE</p>
          <p>01450 Poncin</p>
        </section>
        <section>
          <p>Tél. :+33474380666</p>
          <p>contact@aintimiste.fr</p>
        </section>
        <section>
          <div className="contact">
            <p>INSCRIVEZ VOUS A NOS ACTIVITES</p>
            <p className="underlined_text">S'ABONNER</p>
          </div>
          <div className="footer_social_link">
            <Link to="https://www.facebook.com/AinTimiste/" target="_blank">
              <img src={facebook} alt="lien pour facebook" />
            </Link>
            <Link
              to="https://www.instagram.com/aintimiste_3.0/"
              target="_blank"
            >
              <img src={instagram} alt="lien pour instagram" />
            </Link>
          </div>
        </section>
      </article>
      <article className="visit">
        <section>
          <p>LA TABLE GASTRONOMIQUE</p>
          <p>Dimanche et Lundi : Fermé</p>
          <p>Du mardi au samedi de 12:30–13:30 / 19:30–21:00</p>
          <p className="underlined_text">RESERVER UNE TABLE</p>
        </section>
        <section>
          <p>Nos coffrets cadeaux</p>
          <p>Chèques & coffrets cadeaux du Restaurant AinTimiste</p>
          <Link
            to="https://aintimiste.secretbox.fr/"
            target="_blank"
            className="underlined_text"
          >
            OFFRIR UN COFFRET CADEAU
          </Link>
        </section>
      </article>
      <article className="legals">
        <p>
          DESIGN ET REFERENCEMENT WWW.API-AND-YOU.COM - ｢∫｣ SITE OFFICIEL -
          Mentions légales - Confidentialité - Gestion des cookies
        </p>
      </article>
    </footer>
  );
}
