import "./expertise.css"
import { expertise } from "../utils/expertise"

const Expertises = () => {

  return (
    <div className="skills-section" id="expertise-section">
        <h5>My Skills</h5>
        <h2>My Expertise</h2>
        <div className="skill-cards">
        {expertise.map(({id, name, Icon, title}) => (
            <div key={id} className="card">
                <Icon size="80px" className="card-icon"/>
                <br/>
                <h3>{name}</h3>
                <p>{title}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Expertises