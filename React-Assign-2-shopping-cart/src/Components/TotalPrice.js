export default function TotalPrice(props) {
  let total = 0;

  props.price.map((item) => {
    return (total += item.price * item.qty);
  });

  return <button>Total: {total}</button>;
}
