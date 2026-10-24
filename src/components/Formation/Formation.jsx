import './formation.css';

function Formation({ formations, language }) {
    return (
        <div className="education-list">
            {formations.map((formation) => (
                <article className="education-item" key={formation.id}>
                    <span className="section-label">
                        {language === 'en' ? formation.status_en : formation.status}
                    </span>
                    <h3>{language === 'en' ? formation.title_en : formation.title}</h3>
                    <p>
                        {formation.school}
                        {formation.detail && ` · ${language === 'en' ? formation.detail_en : formation.detail}`}
                    </p>
                    {(language === 'en' ? formation.description_en || formation.description : formation.description) && (
                        <p className="education-description">
                            {language === 'en' ? formation.description_en || formation.description : formation.description}
                        </p>
                    )}
                </article>
            ))}
        </div>
    );
}

export default Formation;