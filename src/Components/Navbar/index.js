import React from 'react'
import { Link } from 'react-router-dom';
import { useProduct } from '../../Context/ProductContext';
import styles from './styles.module.css';

const Navbar = () => {

    const { categories, setCategory } = useProduct();

    return (<>

        <div className='bg-zinc-900/10 mt-3 mx-auto h-[2px] shadow-sm'></div>
        <nav className={styles.categoryNav}>
            <>
                <Link to='/' className={styles.categoryLink}>
                    <h1 className='truncate capitalize mx-4' onClick={() => setCategory("")}>All</h1>
                </Link>
            </>
            {
                categories && categories.map((i, index) => (
                    <div key={index}>
                        <Link to={`/${i}`} className={styles.categoryLink}>
                            <h1 className='truncate capitalize mx-4' onClick={() => setCategory(i)}>{i}</h1>
                        </Link>
                    </div>
                ))
            }
            <>
                <Link to='/cart' className={styles.categoryLink}>
                    <h1 className='truncate capitalize mx-4'>Cart</h1>
                </Link>
                <Link to='/favourite' className={styles.categoryLink}>
                    <h1 className='truncate capitalize mx-4'>Favourite</h1>
                </Link>
            </>
        </nav>
        <div className='bg-zinc-900/10 mx-auto h-[2px] shadow-sm'></div>
    </>
    )
}

export default Navbar