import Carrousel from "../../components/carrousel/Carroussel";
import "./Producteurs.css";

export default function Producteurs() {
    return (
        <>
            <Carrousel />
            <div className="producteurs-container">
                {/* Section 1 */}
                <div className="producteur-card">
                    <h2>FRUITS, LÉGUMES</h2>
                    <ul>
                        <li>Audrey et Benoît DELOFFRE à Romain, maraîchers « 3 étoiles », passionnés du végétal, nous fournissent le meilleur de leur campagne Rémoise</li>
                        <li>« Abies Lagrimus » de Claude SARDA, l'aventurier du mont Canigou, créateur de saveurs naturelles à partir des « larmes » de sapin pyrénéennes</li>
                        <li>Perrine et Étienne des « Agrumes Schaller-Bachès », à Eus, spécialistes mondiaux de ces divins fruits acidulés, à jus, à zeste et à ziste. Une ode parfumée et un terrain d'expression infini</li>
                    </ul>
                </div>

                {/* Section 2 */}
                <div className="producteur-card">
                    <h2>FLEURS, POUSSES</h2>
                    <ul>
                        <li>Véronique BRIDAY, aux portes de Cerdon et ses magnifiques jardins aux ressources florales exceptionnelles</li>
                        <li>Camille et Théo, « les pousses d'or », à Lyon qui nous livrent leur monde végétal si savoureux</li>
                        <li>Carine de « Cléa et les micro-pousses » et sa micro-ferme vertueuse au service du goût, à Bénigne dans l'Ain</li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div className="producteur-card">
                    <h2>FROMAGES, CRÈMERIE</h2>
                    <ul>
                        <li>Emily MANOS, qui a su redonner ses lettres de noblesses au Ramequin du Bugey, produit identitaire de notre terroir, m'inspirant mon « fromage signature » au caractère bien trempé.</li>
                    </ul>
                    <p className="subtitle">Pour leurs fromages de caractère affinés à cœur :</p>
                    <ul>
                        <li>Fabien PICARD, à Bourg-en-Bresse (01)</li>
                        <li>La Fruitière « MONTS ET TERROIRS » de Poncin (01)</li>
                    </ul>
                </div>

                {/* Section 4 */}
                <div className="producteur-card">
                    <h2>VIANDES</h2>
                    <ul>
                        <li>Aymeric MARION, notre boucher de Péronnas, si précieux et attentionné dans la sélection de ses viandes, volailles et abats.</li>
                        <li>Jérôme COMPAGNON, éleveur de bœuf "Black-Angus" à Château-Gaillard (01), viande racée et persillée d'exception.</li>
                        <li>Philippe HÉRITIER à Poisy (74) pour l'extrême qualité et tendreté de ses escargots.</li>
                    </ul>
                </div>

                {/* Section 5 */}
                <div className="producteur-card">
                    <h2>POISSONS</h2>
                    <ul>
                        <li>Stéphane « d'Homards Acadiens », à Marlieux (01) pour ses livraisons quotidiennes de produits marins et lacustres d'une fraîcheur extrême.</li>
                        <li>La prestigieuse maison « Pétrossian », à Paris pour ses produits marins d'exception que l'on ne présente plus...</li>
                    </ul>
                </div>

                {/* Section 6 */}
                <div className="producteur-card">
                    <h2>CHOCOLATS, CONFISERIES, MIELS, ÉPICES</h2>
                    <ul>
                        <li>Éric BIANCO, « Le Ruchet de la Bierle » à Poncin pour ses miels savoureux.</li>
                        <li>Sandrine CHAPPAZ, Chocolatier, Confiseur Made in Chartreuse.</li>
                        <li>Max DAUMIN et ses épices enivrantes moulues à Leyssard (01).</li>
                        <li>Les « Épices Roellinger », à Cancale qui permettent de sublimer nos créations avec subtilité et élégance</li>
                    </ul>
                </div>

                {/* Section 7 */}
                <div className="producteur-card">
                    <h2>BOISSONS</h2>
                    <ul>
                        <li>Paul (69), Christophe (38), Lionel (39), Renaud (01), Marie Lou et Charles (01), Sébastien (01), Clément (01) mes agents en vins au TOP.</li>
                        <li>Nico et Emeline, « Brasserie de la Grange Noire », à Mortaray (01) pour leurs bières uniques et racées.</li>
                        <li>Amandine et Tristan de "Nos Jardins (pas si) Imparfaits" (que ça) pour leurs délicieux nectars fruités et sodas bio.</li>
                    </ul>
                </div>

                {/* Section 8 */}
                <div className="producteur-card">
                    <h2>PAINS</h2>
                    <p className="subtitle">Pour leurs produits boulangers d'exception :</p>
                    <ul>
                        <li>Fred et Laetitia PEUILLON de la « Maison LOU PAN », à Bourg-en-Bresse</li>
                        <li>Régis THERON, à Poncin</li>
                    </ul>
                </div>
            </div>
        </>
    );
}