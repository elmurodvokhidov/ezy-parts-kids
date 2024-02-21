import { useParams } from 'react-router-dom'
import Style from './Product.module.css'

function Product({ products }) {
    const { id } = useParams();

    const product = products.filter(product => product.id === id)[0];

    return (
        <div>
            <div className='my-4 text-3xl'>
                <h1>{product.title}</h1>
                <p>{product.category}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolorem laudantium sint, quod praesentium asperiores modi ipsam minus qui nam!</p>
            </div>
        </div>
    )
}

export default Product