
function Profil({ copy }) {
    return (
        <div className='card profile-card'>
            <h1>Coralie Tosten</h1>
            <span>{copy.headline}</span>
            <p>{copy.description}</p>
            <div className='liens'>
                <a href='https://www.linkedin.com/in/coralie-tosten/' aria-label={copy.linkedin}><i className="fa-brands fa-square-linkedin"></i></a>
                <a href='https://github.com/coralietosten' aria-label={copy.github}><i className="fa-brands fa-square-github"></i></a>
            </div>
            <div className="info-importantes">
                <div className="mini-carte">
                    <div>
                        <span id="title">{copy.availability.title}</span>
                        <i className="fa-solid fa-calendar" aria-hidden="true"></i>
                    </div>
                    <h3>{copy.availability.date}</h3>
                    <span id="detail">{copy.availability.detail}</span>
                </div>
                <div className="mini-carte">
                    <div>
                        <span id="title">{copy.education.title}</span>
                        <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                    </div>
                    <h3>Polytech Nantes</h3>
                    <span id="detail">{copy.education.detail}</span>
                </div>
                <div className="mini-carte">
                    <div>
                        <span id="title">{copy.field.title}</span>
                        <i className="fa-solid fa-hexagon-nodes" aria-hidden="true"></i>
                    </div>
                    <h3>{copy.field.heading}</h3>
                    <span id="detail">{copy.field.detail}</span>
                </div>

            </div>
        </div>
    )
}
export default Profil;