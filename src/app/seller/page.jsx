// export const getServerSideProps = async(context) =>{
//   console.log('context-->: ', context)
//   console.log('req--->: ', context.req)

//   return {
//     props: {test: 'abc'}
//   };
// }

export default function Seller(props) {
  console.log('props--->: ', props)
  return (
    <div>
      <h1>Seller page</h1>
    </div>
  )
}

