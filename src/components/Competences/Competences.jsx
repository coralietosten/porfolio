import Techno from '../Techno/Techno';
import './Competences.css';

const groupes = {
    fr: [
        { nom: 'Développement', elements: ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'React', 'Node.js', 'Express', 'Java', 'C/C++', 'API REST'] },
        { nom: 'Data & intelligence artificielle', elements: ['Python', 'R', 'Machine learning', 'Clustering', 'PCA', 'Réseaux de neurones','RAG', 'Series temporelles'] },
        { nom: 'Bases de données & outils', elements: ['SQLite', 'PostgreSQL', 'Oracle', 'Docker', 'Git', 'Jupyter Notebook'] },
    ],
    en: [
        { nom: 'Development', elements: ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'React', 'Node.js', 'Express', 'Java', 'C/C++', 'REST API'] },
        { nom: 'Data & artificial intelligence', elements: ['Python', 'R', 'Machine learning', 'Clustering', 'PCA', 'Neural networks', 'RAG','Times series'] },
        { nom: 'Databases & tools', elements: ['SQLite', 'PostgreSQL', 'Oracle', 'Docker', 'Git', 'Jupyter Notebook'] },
    ],
};

function Competences({ language }) {
    return (
        <div className="skills-grid">
            {groupes[language].map((groupe) => (
                <article className="skill-group" key={groupe.nom}>
                    <h3>{groupe.nom}</h3>
                    <div className="skill-tags">
                        {groupe.elements.map((element) => (
                            <Techno key={element} nom={element} />
                        ))}
                    </div>
                </article>
            ))}
        </div>
    );
}

export default Competences;