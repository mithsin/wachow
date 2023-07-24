/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateShop = /* GraphQL */ `
  subscription OnCreateShop(
    $filter: ModelSubscriptionShopFilterInput
    $owner: String
  ) {
    onCreateShop(filter: $filter, owner: $owner) {
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
export const onUpdateShop = /* GraphQL */ `
  subscription OnUpdateShop(
    $filter: ModelSubscriptionShopFilterInput
    $owner: String
  ) {
    onUpdateShop(filter: $filter, owner: $owner) {
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
export const onDeleteShop = /* GraphQL */ `
  subscription OnDeleteShop(
    $filter: ModelSubscriptionShopFilterInput
    $owner: String
  ) {
    onDeleteShop(filter: $filter, owner: $owner) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem(
    $filter: ModelSubscriptionItemFilterInput
    $owner: String
  ) {
    onCreateItem(filter: $filter, owner: $owner) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem(
    $filter: ModelSubscriptionItemFilterInput
    $owner: String
  ) {
    onUpdateItem(filter: $filter, owner: $owner) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem(
    $filter: ModelSubscriptionItemFilterInput
    $owner: String
  ) {
    onDeleteItem(filter: $filter, owner: $owner) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onCreateOrder(filter: $filter, owner: $owner) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onUpdateOrder(filter: $filter, owner: $owner) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder(
    $filter: ModelSubscriptionOrderFilterInput
    $owner: String
  ) {
    onDeleteOrder(filter: $filter, owner: $owner) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onCreateLocation(filter: $filter, owner: $owner) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onUpdateLocation(filter: $filter, owner: $owner) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onDeleteLocation(filter: $filter, owner: $owner) {
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
