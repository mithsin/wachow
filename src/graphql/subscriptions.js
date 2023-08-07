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
          __typename
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
          __typename
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
          __typename
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
          description
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
      userShopsId
      owner
      __typename
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
          description
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
      userShopsId
      owner
      __typename
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
          description
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
      userShopsId
      owner
      __typename
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
      description
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
      description
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
      description
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onCreateLocation(filter: $filter, owner: $owner) {
      id
      title
      address {
        street
        city
        state
        zipCode
        __typename
      }
      dateTime {
        data
        times
        __typename
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onUpdateLocation(filter: $filter, owner: $owner) {
      id
      title
      address {
        street
        city
        state
        zipCode
        __typename
      }
      dateTime {
        data
        times
        __typename
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onDeleteLocation(filter: $filter, owner: $owner) {
      id
      title
      address {
        street
        city
        state
        zipCode
        __typename
      }
      dateTime {
        data
        times
        __typename
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
