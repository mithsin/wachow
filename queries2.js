/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
          __typename
          items {
            items {
              id
              ingrediances
              locationItemsId
              name
              orderItemsId
              owner
              shopItemsId
              shopName
              sizes {
                id
                name
                price
              }
              images {
                id
                itemId
                name
                shopId
                src
              }
            }
          }
        }
        nextToken
        __typename
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
        __typename
      }
      address {
        street
        city
        state
        zipCode
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        shops {
          nextToken
          __typename
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
          __typename
        }
        address {
          street
          city
          state
          zipCode
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getShop = /* GraphQL */ `
  query GetShop($id: ID!) {
    getShop(id: $id) {
      id
      parantId {
        id
        shops {
          nextToken
          __typename
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
          __typename
        }
        address {
          street
          city
          state
          zipCode
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
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
          __typename
        }
        __typename
      }
      images {
        id
        name
        src
        shopId
        itemId
        __typename
      }
      menu {
        id
        description
        title
        categories {
          id
          categoryName
          items
          __typename
        }
        __typename
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
          sizes {
            id
            name
            price
          }
          images {
            id
            itemId
            name
            shopId
            src
          }
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userShopsId
      owner
      __typename
    }
  }
`;
export const getShopPublic = /* GraphQL */ `
  query GetShop($id: ID!) {
    getShop(id: $id) {
      id
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
          __typename
        }
        __typename
      }
      images {
        id
        name
        src
        shopId
        itemId
        __typename
      }
      menu {
        id
        description
        title
        categories {
          id
          categoryName
          items
          __typename
        }
        __typename
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
          sizes {
            id
            name
            price
          }
          images {
            id
            itemId
            name
            shopId
            src
          }
          __typename
        }
        nextToken
        __typename
      }
      __typename
    }
  }
`;
export const listShops = /* GraphQL */ `
  query ListShops(
    $filter: ModelShopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShops(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          __typename
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
          __typename
        }
        images {
          id
          name
          src
          shopId
          itemId
          __typename
        }
        menu {
          id
          description
          title
          __typename
        }
        items {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userShopsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
          __typename
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
          __typename
        }
        images {
          id
          name
          src
          shopId
          itemId
          __typename
        }
        menu {
          id
          description
          title
          __typename
        }
        items {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        userShopsId
        owner
        __typename
      }
      shopName
      name
      images {
        id
        name
        src
        shopId
        itemId
        __typename
      }
      sizes {
        id
        name
        price
        __typename
      }
      ingrediances
      createdAt
      updatedAt
      shopItemsId
      orderItemsId
      locationItemsId
      owner
      __typename
    }
  }
`;
export const getItemPublic = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      shopName
      name
      images {
        id
        name
        src
        shopId
        itemId
        __typename
      }
      sizes {
        id
        name
        price
        __typename
      }
      ingrediances
      shopItemsId
      orderItemsId
      locationItemsId
      __typename
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        shopItemId {
          id
          phone
          email
          description
          shopName
          createdAt
          updatedAt
          userShopsId
          owner
          __typename
        }
        shopName
        name
        images {
          id
          name
          src
          shopId
          itemId
          __typename
        }
        sizes {
          id
          name
          price
          __typename
        }
        ingrediances
        createdAt
        updatedAt
        shopItemsId
        orderItemsId
        locationItemsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        items {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        items {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
