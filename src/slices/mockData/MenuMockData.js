const blankImage = "https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg";

export const mockMenuData = { 
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
}