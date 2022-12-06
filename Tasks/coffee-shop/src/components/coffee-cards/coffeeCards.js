import './coffeeCards.css';
import solimo from '../../resourses/img/coffee/Solimo.png'

const CoffeeCard = () => {
    return(
        <div className="card-wrapper">
            <img src={solimo} alt="" />
            <div className="coffee-name">Solimo Coffee Beans 2 kg</div>
            <div className="price">10.73$</div>
        </div>
    )
}

export default CoffeeCard;