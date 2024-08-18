const blankImage = "https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg";
const personImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"

export const mockSellerData = {
  id: "seller-id-abcdefghijklmnopqrstuvwxyz_1",
  shopIds: ["shop-id-abcdefghijklmnopqrstuvwxyz_1"],
  createdDate: "datedatedatedate",
  firstName: "David",
  lastName: "Chen",
  phone: "6781231234",
  email: "testing@test.com",
  isSeller: true,
  images: [personImage],
  address: {
    street: "123 test st",
    city: "marietta",
    state: "ga",
    zipCode: "30066",
  },
  shops: [{
    id: "shop-id-abcdefghijklmnopqrstuvwxyz_1",
    shopName: "Wa Chow Store",
    phone: "6785675678",
    email: "shop@test.com",
    memo: 'WeChat number: 12309481u50123',
    images: [{
      id: "image-id-ko2kjofkjsodfijio2ajsodkfjslfj2",
      name: "sea food fried rice",
      src: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/gpqxcsio/346b0ca2-d43f-4b21-ae6d-004c51b6bc8e"
    },{
      id: "image-id-ko2kjofkjsodfijio2djsodkfjslfj2",
      name: "chicken food fried rice",
      src: "https://urbanblisslife.com/wp-content/uploads/2021/06/Filipino-Pork-BBQ-FEATURE.jpg"
    },{
      id: "image-id-ko2kjofkjsodfijio2jbsodkfjslfj2",
      name: "house fried rice",
      src: "https://littlesunnykitchen.com/wp-content/uploads/2021/07/Grilled-BBQ-Chicken-Recipe-1.jpg"
    },{
      id: "image-id-ko2kjofkjsodfijio2jwsodkfjslfj2",
      name: "beef fried rice",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2M5z7bwh4MD222SynTaONmpFsLtMvdNwf3fi7Ki2BQ&usqp=CAU&ec=48665698"
    }],
    menu: { 
      id: "menu-id-alskdfjo2if2f8sdjif298jsoidfjslfkj2oifjodskfjsf",
      title: 'Main dish',
      description: 'this is main dish description blah blah blah',
      categories: [{
        id: "category-id-1kofjok2jokfjodkjsfok1j2okefjsdokfjo1ad",
        categoryName: "fried rice",
        items: [{
          id: "item-id-1kofjok2jokfjodkjsfok1j2okefjsdokfjo1kds",
          name: "sea food fried rice",
          images: [{
            id: "image-id-ko2kjofkjsodfijio2jsodkfjslfj2",
            itemId: "item-id-1kofjok2jokfjodkjsfok1j2okefjsdokfjo1kds",
            name: 'fried-rice-big',
            src: blankImage
          }],
          sizes: [{
            id: "price-id-lskdjfoqiwjfokjsdflkjwoeifjsodkjfl2",
            name: "small",
            price: "12.55",
          },{
            id: "price-id-lskdjfoqiwjfokjsdflkjwoeifjsodkjflq",
            name: "medium",
            price: "14.55",
          },{
            id: "price-id-lskdjfoqiwjfokjsdflkjwoeifjsodkjflw",
            name: "large",
            price: "16.55",
          }],
          ingrediances: "ingrediances and blah blah blah blha blah blah blah"
        },{
          id: "item-id-1kofjok2jokfjodkjsfok1j2okefjsdokfjo11",
          name: "chicken food fried rice",
          images: [{
            id: "image-id-ko2kjofkjsodfijio2jsodkfjslfj",
            name: 'fried-rice-big',
            src: blankImage
          }],
          sizes: [{
            id: "price-id-lskdjfoqiwjfokjsdflkjwoeifjsodkjfl1",
            name: "small",
            price: "12.55",
          },{
            id: "price-id-lskdjfoqiwjfokjsdflkjwoeifjsodkjfl2",
            name: "medium",
            price: "14.55",
          },{
            id: "price-id-lskdjfoqiwjfokjsdflkjwoeifjsodkjfl3",
            name: "large",
            price: "16.55",
          }],
          ingrediances: "blah blah blah blha blah blah blah"
        }],
      },{
        id: "category-id-1kofjok2jokfjodkjsfok1j2okefjsdokfjo22",
        categoryName: "soup",
        items: [{
          id: "item-id-1kofjok2jokfjodkjsfok1j2okefjsdokfjo22",
          name: "checken soup",
          images: [{
            id: "image-id-ko2kjofkjsodfijio2jsodkfjslfj",
            name: 'checken-soup-big',
            src: blankImage
          }],
          sizes: [{
            id: "price-id-lskdjfoqiwjfokjsdflkjwoeifjsodkj22",
            name: "small",
            price: "12.55",
          },{
            id: "price-id-lskdjfoqiwjfokjsdflkjwoeifjsodkjfl",
            name: "medium",
            price: "14.55",
          },{
            id: "price-id-lskdjfoqiwjfokjsdflkjwoeifjsodkjfl",
            name: "large",
            price: "16.55",
          }],
          ingrediances: "ingrediances and blah blah blah blha blah blah blah"
        }],
      }]
    },
    pickUpLocations: [{
      id: "location-id-o2fjoiajsdfoij2ofjlsfdjo2ijo2",
      street: "123 testing street",
      city: "Marietta",
      state: "GA",
      zipCode: 30096,
      calendar: [],
    }]
  }]
}