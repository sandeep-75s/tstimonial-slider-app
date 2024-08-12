import './Cards.css'
import Card from "./Card";
function Cards(){
    return(
        <div className="cards">
            {/* <div className='h-div' > */}
                <h1 className='h-div' >Our Testimonials</h1>
            {/* </div> */}
            <div className='line'>

            </div>
            <div className='card-parent'>
                <Card/>
            </div>
        </div>
    );
}
export default Cards;