# This "input" configures a global authorization rule to enable public access to
# all models in this schema. Learn more about authorization rules here: https://docs.amplify.aws/cli/graphql/authorization-rules
input AMPLIFY { globalAuthRule: AuthRule = { allow: public } } # FOR TESTING ONLY!

type User @model @auth(rules: [{ 
    allow: owner, 
    ownerField: "owner", 
    operations: [create, read, update] 
  }]) {
  id: ID!
  shops: [Shop] @hasMany
  createdDate: String
  firstName: String
  lastName: String
  phone: String
  email: String
  isSeller: Boolean
  images: [Images]
  address: Address
}

type Shop @model @auth(rules: [
  { allow: public, operations: [read]},
  { 
    allow: owner, 
    ownerField: "owner", 
    operations: [create, read, update, delete] 
  }
]) {
  id: ID!
  parantId: User @belongsTo
  phone: String
  email: String
  description: String
  shopName: String! 
  pickUpLocation: [PickUpLocation]
  images: [Images]
  menu: Menu
  items: [Item] @hasMany
}

type Item @model @auth(rules: [
  { allow: public, operations: [read]},
  { 
    allow: owner, 
    ownerField: "owner", 
    operations: [create, read, update, delete] 
  }
]) {
  id: ID!
  shopId: Shop @belongsTo
  shopName: String
  name: String
  images: [Images]
  sizes: [Size]
  ingrediances: String
}

type Address {
    street: String
    city: String
    state: String
    zipCode: String
}

type Images {
  id: ID!
  name: String
  src: String!
  shopId: String
  itemId: String  
}

type PickUpLocation {
  id: ID!
  street: String
  city: String
  state: String
  zipCode: String
  calendar: [Calendar]
}

type Calendar {
  id: ID!
  title: String
  description: String
  attendees: String
  startDate: String
  endDate: String
}

type Menu {
  id: ID!
  description: String
  title: String
  categories: [Categories]
}

type Categories {
  id: ID!
  categoryName: String
  items: [String] 
}

type Size {
  id: ID!
  name: String
  price: String
}
