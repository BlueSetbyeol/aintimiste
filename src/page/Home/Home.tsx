import ImageText from "../../components/ImageText/ImageText";
import TextImageInfo from "../../assets/text";

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
