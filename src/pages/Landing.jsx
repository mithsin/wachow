import { useState, useEffect } from 'react';
import styles from './page.module.scss'

import { useDispatch } from "react-redux";
import { fetchMultipleItemsState } from "slices/userSlice";

import { SearchInput } from 'components/Atoms/Inputs';
import { CarouselCubeCard } from 'components/Molecules/Cards';
import { SectionAndTitle } from 'components/Molecules/Sections';

import { mockHomeData } from 'mockData/HomeMockData';



export const Landing = () => {
  const dispatch = useDispatch();
  const [ itemsListState, setItemsListState ] = useState({})

  useEffect(()=> {
    getItemsList()
  },[])

  const getItemsList = async() => {
    await dispatch(fetchMultipleItemsState(3))
      .then(res => 
        setItemsListState(res)
        )
  }
  // console.log('itemsListState-->: ', itemsListState)
  // const sellerData = mockHomeData.sellers ?? [];
  return (
    <div>
      <div className={styles.heroContainer}>
        <div className={styles.heroWrapper}>
          <SearchInput />
        </div>
      </div>
      <SectionAndTitle 
        title="Top Chow" 
        sectionClass={styles.cardSectionWrap}
        bodyWrapperClass={styles.cardsSection}>
        {
          (itemsListState?.length > 0) && (
            itemsListState?.map((seller) => <CarouselCubeCard key={seller?.id} {...seller}/>)
          )
        }
      </SectionAndTitle>
    </div>
  )
}
