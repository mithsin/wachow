/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      shops {
        items {
          id
          phone
          email
          description
          shopName
          createdAt
          updatedAt
          userShopsId
          owner
        }
        nextToken
      }
      createdDate
      firstName
      lastName
      phone
      email
      isSeller
      images {
        id
        name
        src
        shopId
        itemId
      }
      address {
        street
        city
        state
        zipCode
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      shops {
        items {
          id
          phone
          email
          description
          shopName
          createdAt
          updatedAt
          userShopsId
          owner
        }
        nextToken
      }
      createdDate
      firstName
      lastName
      phone
      email
      isSeller
      images {
        id
        name
        src
        shopId
        itemId
      }
      address {
        street
        city
        state
        zipCode
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      shops {
        items {
          id
          phone
          email
          description
          shopName
          createdAt
          updatedAt
          userShopsId
          owner
        }
        nextToken
      }
      createdDate
      firstName
      lastName
      phone
      email
      isSeller
      images {
        id
        name
        src
        shopId
        itemId
      }
      address {
        street
        city
        state
        zipCode
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createShop = /* GraphQL */ `
  mutation CreateShop(
    $input: CreateShopInput!
    $condition: ModelShopConditionInput
  ) {
    createShop(input: $input, condition: $condition) {
      id
      parantId {
        id
        shops {
          nextToken
        }
        createdDate
        firstName
        lastName
        phone
        email
        isSeller
        images {
          id
          name
          src
          shopId
          itemId
        }
        address {
          street
          city
          state
          zipCode
        }
        createdAt
        updatedAt
        owner
      }
      phone
      email
      description
      shopName
      pickUpLocation {
        id
        street
        city
        state
        zipCode
        calendar {
          id
          title
          description
          attendees
          startDate
          endDate
        }
      }
      images {
        id
        name
        src
        shopId
        itemId
      }
      menu {
        id
        description
        title
        categories {
          id
          categoryName
          items
        }
      }
      items {
        items {
          id
          shopName
          name
          ingrediances
          createdAt
          updatedAt
          shopItemsId
          orderItemsId
          locationItemsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userShopsId
      owner
    }
  }
`;
export const updateShop = /* GraphQL */ `
  mutation UpdateShop(
    $input: UpdateShopInput!
    $condition: ModelShopConditionInput
  ) {
    updateShop(input: $input, condition: $condition) {
      id
      parantId {
        id
        shops {
          nextToken
        }
        createdDate
        firstName
        lastName
        phone
        email
        isSeller
        images {
          id
          name
          src
          shopId
          itemId
        }
        address {
          street
          city
          state
          zipCode
        }
        createdAt
        updatedAt
        owner
      }
      phone
      email
      description
      shopName
      pickUpLocation {
        id
        street
        city
        state
        zipCode
        calendar {
          id
          title
          description
          attendees
          startDate
          endDate
        }
      }
      images {
        id
        name
        src
        shopId
        itemId
      }
      menu {
        id
        description
        title
        categories {
          id
          categoryName
          items
        }
      }
      items {
        items {
          id
          shopName
          name
          ingrediances
          createdAt
          updatedAt
          shopItemsId
          orderItemsId
          locationItemsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userShopsId
      owner
    }
  }
`;
export const deleteShop = /* GraphQL */ `
  mutation DeleteShop(
    $input: DeleteShopInput!
    $condition: ModelShopConditionInput
  ) {
    deleteShop(input: $input, condition: $condition) {
      id
      parantId {
        id
        shops {
          nextToken
        }
        createdDate
        firstName
        lastName
        phone
        email
        isSeller
        images {
          id
          name
          src
          shopId
          itemId
        }
        address {
          street
          city
          state
          zipCode
        }
        createdAt
        updatedAt
        owner
      }
      phone
      email
      description
      shopName
      pickUpLocation {
        id
        street
        city
        state
        zipCode
        calendar {
          id
          title
          description
          attendees
          startDate
          endDate
        }
      }
      images {
        id
        name
        src
        shopId
        itemId
      }
      menu {
        id
        description
        title
        categories {
          id
          categoryName
          items
        }
      }
      items {
        items {
          id
          shopName
          name
          ingrediances
          createdAt
          updatedAt
          shopItemsId
          orderItemsId
          locationItemsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      userShopsId
      owner
    }
  }
`;
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      id
      shopItemId {
        id
        parantId {
          id
          createdDate
          firstName
          lastName
          phone
          email
          isSeller
          createdAt
          updatedAt
          owner
        }
        phone
        email
        description
        shopName
        pickUpLocation {
          id
          street
          city
          state
          zipCode
        }
        images {
          id
          name
          src
          shopId
          itemId
        }
        menu {
          id
          description
          title
        }
        items {
          nextToken
        }
        createdAt
        updatedAt
        userShopsId
        owner
      }
      shopName
      name
      images {
        id
        name
        src
        shopId
        itemId
      }
      sizes {
        id
        name
        price
      }
      ingrediances
      createdAt
      updatedAt
      shopItemsId
      orderItemsId
      locationItemsId
      owner
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      id
      shopItemId {
        id
        parantId {
          id
          createdDate
          firstName
          lastName
          phone
          email
          isSeller
          createdAt
          updatedAt
          owner
        }
        phone
        email
        description
        shopName
        pickUpLocation {
          id
          street
          city
          state
          zipCode
        }
        images {
          id
          name
          src
          shopId
          itemId
        }
        menu {
          id
          description
          title
        }
        items {
          nextToken
        }
        createdAt
        updatedAt
        userShopsId
        owner
      }
      shopName
      name
      images {
        id
        name
        src
        shopId
        itemId
      }
      sizes {
        id
        name
        price
      }
      ingrediances
      createdAt
      updatedAt
      shopItemsId
      orderItemsId
      locationItemsId
      owner
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      id
      shopItemId {
        id
        parantId {
          id
          createdDate
          firstName
          lastName
          phone
          email
          isSeller
          createdAt
          updatedAt
          owner
        }
        phone
        email
        description
        shopName
        pickUpLocation {
          id
          street
          city
          state
          zipCode
        }
        images {
          id
          name
          src
          shopId
          itemId
        }
        menu {
          id
          description
          title
        }
        items {
          nextToken
        }
        createdAt
        updatedAt
        userShopsId
        owner
      }
      shopName
      name
      images {
        id
        name
        src
        shopId
        itemId
      }
      sizes {
        id
        name
        price
      }
      ingrediances
      createdAt
      updatedAt
      shopItemsId
      orderItemsId
      locationItemsId
      owner
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      items {
        items {
          id
          shopName
          name
          ingrediances
          createdAt
          updatedAt
          shopItemsId
          orderItemsId
          locationItemsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      items {
        items {
          id
          shopName
          name
          ingrediances
          createdAt
          updatedAt
          shopItemsId
          orderItemsId
          locationItemsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      items {
        items {
          id
          shopName
          name
          ingrediances
          createdAt
          updatedAt
          shopItemsId
          orderItemsId
          locationItemsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      items {
        items {
          id
          shopName
          name
          ingrediances
          createdAt
          updatedAt
          shopItemsId
          orderItemsId
          locationItemsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      items {
        items {
          id
          shopName
          name
          ingrediances
          createdAt
          updatedAt
          shopItemsId
          orderItemsId
          locationItemsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      items {
        items {
          id
          shopName
          name
          ingrediances
          createdAt
          updatedAt
          shopItemsId
          orderItemsId
          locationItemsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
