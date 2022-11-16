import './card.css'
export default function Card(props){
    return (
        <div className="card">
                <div 
                    className="top-image-container" 
                    style={
                        {
                            backgroundColor:getComputedStyle(document.documentElement).getPropertyValue(props.color)
                        }
                    }>
                    <img src={"/images/"+props.icon+".svg"} alt="icon"/>
                </div>
                <div className="values">
                    <div className="top">
                        <span className='title'>{ props.title }</span>
                        <span className='three-dot'>...</span>
                    </div>
                    <div className="current-value">
                        {props.currentValue}
                    </div>
                    <div className="last-week-value">
                        {
                            "Last Week - "+props.lastWeekValue
                        }
                    </div>
            </div>
        </div>
    );
}