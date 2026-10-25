import Techno from '../Techno/Techno';

function Card({ projet, description, techno, visuel, lien, copy }) {
    const videoSource = visuel?.startsWith('/')
        ? `${process.env.PUBLIC_URL}${visuel}`
        : visuel;

    return (
        <div className="card">
            <div className="image">
                <video controls width="250" muted loop playsInline>
                    <source src={videoSource} type="video/mp4" />
                </video>
            </div>
            <div className='body'>
                <div className="card-title-block"> 
                    <span className="project-kicker">{copy.label}</span>
                    <h3 className="name-project">{projet}</h3>
                </div>
                <p className="description-project">{description}</p>
                <div className="project-technologies">
                    {techno.map((item, index) => (
                        <Techno key={index} nom={item} />
                    ))}
                </div>
                {/* <a href={lien} target="_blank" className="project-link">
                    Voir le projet
                </a> */}
            </div>
            <div className="card-footer">
                <a href={lien} target="_blank" rel="noopener noreferrer" className="project-link">{copy.link}</a>
            </div>
        </div>
    )
}
export default Card;