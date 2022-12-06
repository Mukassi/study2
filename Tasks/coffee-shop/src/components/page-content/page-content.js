import './page-content.css';
import beansLogo from '../../resourses/img/beansLogo.svg'


const PageContent = () => {
    return (
        <div className="pageContent">
            <h1 className="header">Everything You Love About Coffee</h1>
            <img src={beansLogo} alt="beansLogo"/>
            <span className='page-text'>We makes every day full of energy and taste</span>
            <span className="page-text">Want to try our beans?</span>
            <button className='btn-more'>More</button>
        </div>
    )
}

export default PageContent