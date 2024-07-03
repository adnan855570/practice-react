type Props = {
    item : {
        name : string;
        quantity : number;
    }
}

const MenuItem = (props : Props) => {
  return (
    <li className="flex gap-4 text-xl justify-between">
        <h1>{props.item.name}</h1>
        <span>{props.item.quantity}</span>
    </li>
  )
}

export default MenuItem