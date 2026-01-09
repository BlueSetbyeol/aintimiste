import ImageText from "../../components/ImageText/ImageText";

import appiculteurs from "../../assets/img/apiculteurs_img.jpeg";
import morille from "../../assets/img/plat_morilles_img.jpeg";

let TextImageInfo = [
  {
    image: { url: appiculteurs },
    titre:
      "L’artisanat au cœur de l’expérience : l’amour des matières et des rencontres sincères",
    texte1:
      "Dans la salle, l’amour des matières et de l’artisanat traverse la décoration. Chaque meuble et chaque détail de la mise en place est pensé pour mettre en valeur le travail des talents français. Certains contenants portent par exemple cette signature de la matière brute et travaillée avec soin. Réalisés par un ami potier du Chef, Jean-Luc FROMENT, avec qui s’est nouée une relation presque filiale, ils témoignent de  cet attachement aux relations humaines authentiques.",
    texte2:
      "Le couteau, œuvre d’un coutelier de Thiers, est posé sur un support en bois réalisé par l'ébéniste MADERA dès le début du repas, rappelant l’importance du travail manuel et de la qualité des outils dans l’univers d’AinTimiste.",
    lien1: ["", "LIRE LA SUITE +"],
    lien2: ["producteurs-territoire", "PRODUCTEURS & TERRITOIRE"],
  },
  {
    image: { url: morille },
    titre: "La cuisine du Chef BUSSET :une identité culinaire singulière",
    texte1:
      "C’est la passion pour la cuisine transmise par sa grand-mère et son parcours unique qui ont forgé l’identité culinaire de ce Chef étoilé : loin d’une formation classique derrière les fourneaux, il a affiné son sens de l’observation, de l’accueil et du service lors de sa formation et de ses expériences, construisant avec passion son identité culinaire en observant et en apprenant au contact des clients et des grandes maisons où il a travaillé…",
    texte2: "",
    lien1: ["", "LIRE LA SUITE +"],
    lien2: ["producteurs-territoire", "PRODUCTEURS & TERRITOIRE"],
  },
];

export default function Home() {
  return (
    <>
      <section>
        <ImageText
          image={TextImageInfo[1].image.url}
          titre={TextImageInfo[1].titre}
          texte1={TextImageInfo[1].texte1}
          texte2={TextImageInfo[1].texte2}
          lien1={TextImageInfo[1].lien1}
          lien2={TextImageInfo[1].lien2}
          imageSide={"right"}
        />
        <ImageText
          image={TextImageInfo[0].image.url}
          titre={TextImageInfo[0].titre}
          texte1={TextImageInfo[0].texte1}
          texte2={TextImageInfo[0].texte2}
          lien1={TextImageInfo[0].lien1}
          lien2={TextImageInfo[0].lien2}
          imageSide={"left"}
        />
      </section>
    </>
  );
}
