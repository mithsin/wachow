import styles from './page.module.scss'

import { SearchInput } from 'components/Atoms/Inputs';
import { CarouselCubeCard } from 'components/Molecules/Cards';
import { SectionAndTitle } from 'components/Molecules/Sections';

import { mockHomeData } from 'mockData/HomeMockData';

export const Landing = () => {

  const sellerData = mockHomeData.sellers ?? [];
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
          (sellerData.length > 0) && (
            sellerData?.map((seller) => <CarouselCubeCard key={seller?.shopName ? seller?.shopName : ""} data={seller}/>)
          )
        }
      </SectionAndTitle>
    </div>
  )
}
