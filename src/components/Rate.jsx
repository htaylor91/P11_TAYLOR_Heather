import starEmpty from '../assets/starEmpty.svg';
import starFull from '../assets/starFull.svg';
import '../styles/Rate.css'

export default function Rate({rate}){
    let fullStars = Array.from({ length: rate }, (value, index) => index);
    let emptyStars = Array.from({ length: 5 - rate }, (value, index) => index);
    
    return (
        <div className="rate">
        {
            fullStars.map((star, index) => {
                return (<img key={index} alt="star" className="star" src={starFull}></img>)
            })
        }
        {
            emptyStars.map((star, index) => {
                return (<img key={index} alt="star" className="star" src={starEmpty}></img>)
            })
        }
        </div>
    )
}