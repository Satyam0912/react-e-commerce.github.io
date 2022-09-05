import CardComponent from '../Components/CardComponent/CardComponent';
import { useProduct } from '../Context/ProductContext';

const Favourite = () => {

    const { favItems, favItemsCnt } = useProduct();

    return (
        <div className='favourite'>
            <div className='d-flex justify-content-evenly'>
                <h3>Total Favourite Items: {favItemsCnt}</h3>
            </div>
            <br />
            <div className='d-flex flex-wrap'>
                {
                    favItems ? Array.from(favItems.values()).map((item, index) => {
                        return (
                            <CardComponent key={index} item={item} />
                        )
                    }) : <></>
                }
            </div>
        </div>
    )
}

export default Favourite