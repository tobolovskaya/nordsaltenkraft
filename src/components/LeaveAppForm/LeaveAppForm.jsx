import React from 'react';
import styles from './LeaveAppForm.module.css';

const LeaveAppForm = () => {
  return (
    <section id="application-form" className={styles.Section}>
      <div className={styles.container}>
        <h2 className={styles.sectiontitle}>
          Kundeservice kraftsalg
        </h2>
        <p className={styles.sectionsubtitle}>
          Vi hjelper deg med spørsmål vedrørende strømprodukter og tilhørende faktura, adresseforandring, melding av inn/utflytting, måleravlesing og så videre.
        </p>
        <div className={styles.appFormContainer}>
          <div className={styles.appThumb}>
            <div className={styles.appTextbox}>
              <h3 className={styles.appName}>Telefon: 75 77 10 30</h3>
              <p className={styles.appDesc}>
                Åpningstid: kl 08.00 - 15.00<br />
                E-post: kundeservice@nordsaltenkraft.no<br />
                Du kan også benytte skjemaet ved siden.
              </p>
            </div>
          </div>
          <form className={styles.applicationForm} name="reviews" autoComplete="on">
            <div className={styles.formWrapper}>
              <label className={styles.formLabel} htmlFor="user-name"></label>
              <input
                className={styles.formInput}
                type="text"
                name="user-name"
                id="user-name"
                placeholder="Navn"
                required
              />
            </div>
            <div className={styles.formWrapper}>
              <label className={styles.formLabel} htmlFor="user-email"></label>
              <input
                className={styles.formInput}
                type="email"
                name="user-email"
                id="user-email"
                placeholder="E-post"
                pattern="^[\w\.-]+@[\w\.-]+\.\w+$"
                required
              />
            </div>
            <div className={styles.formWrapper}>
              <label className={styles.formLabel} htmlFor="user-phone"></label>
              <input
                className={styles.formInput}
                type="tel"
                name="user-phone"
                id="user-phone"
                placeholder="Telefon"
                pattern="^0\d{9}$"
                required
              />
            </div>
            <div className={styles.formWrapper}>
              <label className={styles.formLabel} htmlFor="user-kundenummer"></label>
              <input
                className={styles.formInput}
                type="tel"
                name="user-kundenummer"
                id="user-kundenummer"
                placeholder="Kundenummer"
                pattern="^0\d{9}$"
                required
              />
            </div>
            <div className={styles.formCommentWrapper}>
              <label className={styles.formLabel} htmlFor="user-comment"></label>
              <textarea
                className={styles.formTextarea}
                name="user-comment"
                rows="5"
                placeholder="Din henvendelse"
                id="user-comment"
              ></textarea>
            </div>
            <button className={`${styles.formButton} ${styles.button} ${styles.btn}`} type="submit">
              Send
            </button>
            <p className={styles.agreementText}>
              By clicking on “Send” button, you agree to our{' '}
              <a
                className={styles.formAgreementLink}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              , and&nbsp;allow&nbsp;Promodo to use this information for marketing purposes.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeaveAppForm;
