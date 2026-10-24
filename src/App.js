import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Profil from './components/Profil/Profil'
import ExperienceCard from './components/Experience/ExperienceCard';
import Competences from './components/Competences/Competences';
import Formation from './components/Formation/Formation';
import projets from "./data/projets.json";
import experiences from "./data/experiences.json";
import formations from "./data/formation.json";
import traductions from "./data/traductions";

function App() {
  const [theme, setTheme] = useState(() => (
    window.localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'
  ));
  const [language, setLanguage] = useState(() => (
    window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'fr'
  ));
  const copy = traductions[language];

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="portfolio" data-theme={theme}>
      <header className="site-header">
        <div className="container header-content">
          <a className="brand" href="#accueil">Coralie Tosten</a>
          <nav aria-label={copy.navigationLabel}>
            <a href="#profil">{copy.navigation.profile}</a>
            <a href="#projets">{copy.navigation.projects}</a>
            <a href="#experiences">{copy.navigation.experiences}</a>
            <a href="#competences">{copy.navigation.skills}</a>
            <a href="#formation">{copy.navigation.education}</a>
          </nav>
          <div className="header-actions">
            <button
              className="language-toggle"
              type="button"
              aria-label={copy.switchLanguage}
              title={copy.switchLanguage}
              onClick={() => setLanguage((currentLanguage) => currentLanguage === 'fr' ? 'en' : 'fr')}
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              className="theme-toggle"
              type="button"
              aria-label={`${copy.switchTheme} ${theme === 'dark' ? copy.theme.light : copy.theme.dark}`}
              aria-pressed={theme === 'light'}
              onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
            >
              <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true" />
              <span>{theme === 'dark' ? copy.theme.light : copy.theme.dark}</span>
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="container page-section" id="profil">
          <div className="section-heading">
            <span className="section-tag">01 · {copy.sections.aboutTag}</span>
            <h2>{copy.navigation.profile}</h2>
          </div>
          <Profil copy={copy.profile} />
        </section>
        <section className="container page-section" id="projets">
          <div className="section-heading">
            <span className="section-tag">02 · {copy.sections.projectsTag}</span>
            <h2>{copy.navigation.projects}</h2>
          </div>
          <div className="projects">
            {projets.map((projet) => (
              <Card
                key={projet.id}
                projet={projet.nom}
                description={language === 'en' ? projet.description_en : projet.description}
                techno={projet.technologies}
                visuel={projet.image ?? projet.video}
                lien={projet.lien}
                copy={copy.projectCard}
              />
            ))}
          </div>
        </section>
        <section className="container page-section" id="experiences">
          <div className="section-heading">
            <span className="section-tag">03 · {copy.sections.experiencesTag}</span>
            <h2>{copy.navigation.experiences}</h2>
          </div>
          {experiences.length > 0 ? (
            <div className="experience-list">
              {experiences.map((experience) => (
                <ExperienceCard key={experience.id} experience={experience} language={language} />
              ))}
            </div>
          ) : (
            <p className="empty-state">{copy.experienceEmpty}</p>
          )}
        </section>
        <section className="container page-section" id="competences">
          <div className="section-heading">
            <span className="section-tag">04 · {copy.sections.skillsTag}</span>
            <h2>{copy.navigation.skills}</h2>
          </div>
          <Competences language={language} />
        </section>
        <section className="container page-section" id="formation">
          <div className="section-heading">
            <span className="section-tag">05 · {copy.sections.educationTag}</span>
            <h2>{copy.navigation.education}</h2>
          </div>
          <Formation formations={formations} language={language} />
        </section>
      </main>
      <footer className="site-footer">
        <div className="container">Coralie Tosten · {copy.footer}</div>
      </footer>
    </div>
  );
}

export default App;
