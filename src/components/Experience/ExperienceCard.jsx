import './ExperienceCard.css';

function ExperienceCard({ experience, language }) {
    const isEnglish = language === 'en';

    return (
        <article className="experience-card">
            <div className="experience-heading">
                <div>
                    <span className="experience-period">{isEnglish ? experience.period_en : experience.periode}</span>
                    <h3>{isEnglish ? experience.poste_en : experience.poste}</h3>
                </div>
                <span className="experience-organization">{isEnglish ? experience.organisme_en : experience.organisme}</span>
            </div>
            <p>{isEnglish ? experience.description_en : experience.description}</p>
            {(isEnglish ? experience.missions_en : experience.missions)?.length > 0 && (
                <ul>
                    {(isEnglish ? experience.missions_en : experience.missions).map((mission) => (
                        <li key={mission}>{mission}</li>
                    ))}
                </ul>
            )}
        </article>
    );
}

export default ExperienceCard;