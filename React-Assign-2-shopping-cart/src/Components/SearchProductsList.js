export default function searchProductsList(props)
{
    return (
        <div>
        {props.products.map((product) =>
        {
            return(
                <ul>
                {product.title}
                </ul>
            );
        })}
        </div>
    );
}