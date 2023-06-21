export default function Listing(props) {
    const data = props.items.filter(el => el.state == 'active')
    return (
        < div className="item-list" >
            {data.map(el => {
                
                return (
                    <div className="item" key={el.listing_id} >
                        <div className="item-image">
                            <a href={el.url}>
                                <img src={el.MainImage.url_570xN} />
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{el.title} </p>
                            <p className="item-price">{el.currency_code} {el.price}</p>
                            <p className={el.quantity < 10 ? 'item-quantity level-low' : el.quantity < 20 ? 'item-quantity level-medium' : 'item-quantity level-high'}>{el.quantity}</p>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}