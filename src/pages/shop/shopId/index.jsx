import { useParams } from "react-router-dom";

export const Shop = (props) => {
  console.log(props)
  const { shopId } = useParams();
  console.log('shopId-->: ', shopId)
  return (
    <div>
      <h1>Shop page</h1>
    </div>
  )
}
