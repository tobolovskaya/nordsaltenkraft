import { useState } from 'react';
import styles from './Styret.module.css';


const boardMembers = [
  {
    name: "Sten-Rune Brekke",
    role: "Styrets leder",
    deputy: "Linn Kristin Hauge",
    img: "https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/sten-rune_brekke.jpg",
  },
  {
    name: "Jan-Folke Sandnes",
    role: "Styrets nestleder",
    deputy: "Asbjørn Bye",
    img: "https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/jan-folke_sandnes.jpg",
  },
  {
    name: "Liv Røfvaag",
    role: "Styremedlem",
    deputy: "Geir Anders Hetta Berg",
    img: "https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/liv_reffhaug.jpg",
  },
  {
    name: "Wibecke Aasjord Juul",
    role: "Styremedlem",
    deputy: "Kine Renate Berg",
    img: "https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/wibeke_aasjord_juul.jpg",
  },
  {
    name: "Lisbeth Korneliussen",
    role: "Styremedlem",
    deputy: "Svein Helge Nøstdal",
    img: "https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/lisbeth_korneliussen.jpg",
  },
  {
    name: "Jan-Erik Skogvold",
    role: "Styremedlem",
    deputy: "Tordis Sofie Langseth",
    img: "https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/jan-erik_skogvold.jpg",
  },
  {
    name: "Audun Kosmo",
    role: "Styremedlem (ansattvalgt)",
    deputy: "Thorbjørn Solhaug Olsen",
    img: "https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/05/nord-saltenkraft_2025_25_.jpg",
  },
  {
    name: "Emil Risvik Buseth",
    role: "Styremedlem (ansattvalgt)",
    deputy: "Frode Tiltvik",
    img: "/",
  },
];

const Styret = () => {
  const [lightboxImg, setLightboxImg] = useState(null);
  const closeLightbox = () => setLightboxImg(null);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Styret</h1>
      <section className={styles.section}>
      <img
          src="https://nordsaltenkraft.no/sites/n/nordsaltenkraft.no/files/2025/04/nord-saltenkraft_2025_2_.jpg"
          alt="Styret"
          style={{ maxWidth: "400px", flex: "1 1 300px" }}
        />
      <p className={styles.intro}>
      Selskapsvedtektene slår fast at styret skal bestå av minimum seks og maksimum åtte medlemmer. 
      Seks av medlemmene skal være aksjonærvalgte, mens inntil to av medlemmene skal velges av og blant selskapets ansatte. 
      De tre eierkommunene Hamarøy, Steigen og Sørfold samt Salten Kraftsamband AS har inngått en aksjonæravtale 
      hvor det er bestemt at hver av partene skal utpeke 1 styremedlem hver. I tillegg velges 1 styremedlem blant B-aksjonærene. 
      Styret velges formelt av generalforsamlingen, som også velger styrets leder og nestleder.
      </p>
      </section>

      <div className={styles.boardGrid}>
        {boardMembers.map((member, idx) => (
          <div key={idx} className={styles.boardCard}>
            <img src={member.img} alt={member.name} className={styles.boardImage} />
            <div>
              <strong>{member.name}</strong><br />
              {member.role}<br />
              <em>Varamedlem: {member.deputy}</em>
            </div>
          </div>
        ))}
      </div>

      {lightboxImg && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <img src={lightboxImg} alt="Full view" />
        </div>
      )}
    </div>
  );
};

export default Styret;
