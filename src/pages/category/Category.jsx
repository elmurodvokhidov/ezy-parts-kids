import Style from './Category.module.css'
import { NavLink } from 'react-router-dom';

function Category({ products }) {
    return (
        <div className='flex justify-evenly'>
            {
                products.map((product, index) => (
                    <div className='mt-4 text-3xl' key={index}>
                        <h1>{product.title}</h1>
                        <p>{product.category}</p>
                        <NavLink className="text-blue-400" to={`/${product.id}`}>See more</NavLink>
                    </div>
                ))
            }
        </div>
    )
}

export default Category