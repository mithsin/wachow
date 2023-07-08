import { useParams } from "react-router-dom";


export const ShopItem = () => {

  const { shopId, itemId } = useParams();
  console.log('shopId-->: ', shopId)
  console.log('itemId-->: ', itemId)

  return (
    <div>
      <h1>ShopItem page</h1>
    </div>
  )
}
