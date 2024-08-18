import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from './LocationItemCard.module.scss';

import "swiper/css";
import "swiper/css/pagination";

const blankImage = "https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg";

export const LocationItemCard = (props) => {
  const {
    name: itemName, 
    images = [], 
    sizes = []
  } = props;
  const [isShowMore, setIsShowMore] = useState(false);
  const onDelete = () => {}

  return props? (
    <div className={isShowMore ? styles.itemCardContainerFull : styles.itemCardContainer}>
        <div className={styles.swiperContainer}>
          <Swiper modules={[Pagination]} className="mySwiper">
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
            </Swiper>
        </div>
        <div className={styles.itemInfoWrapper}>
            <div className={styles.itemTitle}>
              {itemName}
            </div>
            {sizes 
              ? sizes.slice(0, isShowMore ? 2 : sizes.length).map(size => (
                <div className={styles.quntitiesWrap}>
                  <span>{size.name}</span>
                  <span>Available #</span>
                  <span>
                    <input 
                      name="quantity" 
                      type="text"
                      placeholder='0'
                      />
                  </span>
                </div>
              ))
              : null
            }
            {
              sizes.length > 2 && 
                <div className={styles.showMore} onClick={()=> setIsShowMore(!isShowMore)}>
                  {isShowMore ? 'SHOW MORE' : 'SHOW LESS'}
                </div>
            }
          </div>
    </div>
  ): null;
}

export default LocationItemCard;