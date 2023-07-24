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
      nextToken
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
          description
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
      nextToken
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
      description
      createdAt
      updatedAt
      shopItemsId
      orderItemsId
      locationItemsId
      owner
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
        description
        createdAt
        updatedAt
        shopItemsId
        orderItemsId
        locationItemsId
        owner
      }
      nextToken
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
          description
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
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
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
          description
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
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
