export default function MenuCard({data}) {

    const lis = data.map((product,index) => <li key={index}>{product.name} <span>$ {product.price}</span></li>);

    return(
        <ul className="card">
            <li>The Product <span>Price</span></li>
            {lis}
        </ul>
    );
}