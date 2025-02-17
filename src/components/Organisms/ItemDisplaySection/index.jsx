import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { formatter } from '@src/utils/jsHelper';
import { Button } from 'components/Atoms/Buttons';
import styles from './ItemDisplaySection.module.scss';

import { StarIcon, HeartIcon } from 'components/Atoms/Icons';

import "swiper/css";
import "swiper/css/pagination";

const blankImage = "https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg";

export const ItemDisplaySection = (props) => {
  const {
    id, 
    name: itemName, 
    images = [], 
    sizes = [], 
    ingrediances, 
    reviews = [],
    shopId,
    isSellerPage,
    description
  } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [isUpdateItemOpen, setIsUpdateItemOpen] = useState(false);

  const SizeContent = ({sizeInfo}) => {
    if(sizeInfo?.length > 0){
      return sizeInfo.map(si => {
        return (
          <div className={styles.priceWrapper}>
            <span className={styles.priceText}>{formatter.format(si['price'])}</span> 
            <span className={styles.typeText}>{si['name']}</span>
          </div>
        ) 
      }) 
    } else {
      return <div className={styles.priceWrapper}>Check price with shop owner</div>
    }
  }

  return(
    <div className={styles.ItemDisplaySectionContainer}>
      <div className={styles.swiperContainer}>
        {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
              { images?.length > 0 ?
                images?.map((list, i) => 
                  <SwiperSlide key={`${list.itemName}--${i}`}>
                    <div
                      className={styles.swipWrap}
                      style={{ backgroundImage: `url(${ list?.src ? list?.src : blankImage })` }} />
                  </SwiperSlide>
                ) : 
                <div
                  className={styles.swipWrap}
                  style={{ backgroundImage: `url(${ blankImage })` }} />
              }
            </Swiper> */}
        </div>
        <div className={styles.itemInfoWrapper}>
          <div>
            <div className={styles.itemTitle}>
              {itemName}
            </div>
            <SizeContent sizeInfo={sizes} />
            { reviews?.length > 0 && 
              <div>
                <StarIcon size="1x" className={styles.starIcon}/> {`(${reviews?.length})`}
              </div>
            }
          </div>
          <div>
            <HeartIcon size="1x" className={styles.heartIcon}/>
          </div>
        </div>
        {description && 
          <div>
            {description}
          </div>
        }
        {
          ingrediances && <div>{ingrediances}</div>
        }
        <Button 
          label="Add to cart"
          onClick={() => { console.log('add to cart click')}}/>
    </div>
  );
}

export default ItemDisplaySection;