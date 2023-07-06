import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import styles from './ItemCard.module.scss';
import { EllipsisVerticalIcon, StarIcon, HeartIcon } from 'components/Atoms/Icons'

import "swiper/css";
import "swiper/css/pagination";

const blankImage = "https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg";

export const ItemCard = ({
  id, 
  name: itemName, 
  images, 
  sizes, 
  ingrediances, 
  reviews = [],
  shopItemsId
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const onDelete = () => {}

  return(
    <div className={styles.itemCardContainer}>
        <div className={styles.swiperContainer}>
          <span className={styles.itemEditWrap}>
            <span className={styles.itemEdit} onClick={()=> setIsEdit(!isEdit)}>
              <span className={styles.itemEditIcon}>
                <EllipsisVerticalIcon size="1x"/>
              </span> 
              {isEdit && 
                <ul className={styles.dropDown}>
                  <li onClick={()=> console.log('on click edit')}>
                    edit item
                  </li>
                  <li onClick={onDelete}>
                    delete item
                  </li>
                </ul>}
            </span>
          </span>
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
              {images ?
                images.map((list) => 
                  <SwiperSlide key={list.itemName}>
                    <div
                      className={styles.swipWrap}
                      style={{ backgroundImage: `url(${ list?.src ? list?.src : blankImage })` }} />
                  </SwiperSlide>
                ) : 
                <div
                  className={styles.swipWrap}
                  style={{ backgroundImage: `url(${ blankImage })` }} >
                    <a href={`/shop/${shopItemsId}/i/${id}`}>
                      <h4>{itemName}</h4>
                    </a> 
                </div>
              }
            </Swiper>
        </div>
        <div className={styles.itemInfoWrapper}>
          <div>
            <div className={styles.itemTitle}>{itemName}</div>
            {sizes[0]['price'] ?       
              <div className={styles.priceWrapper}>
                <span className={styles.priceText}>${sizes[0]['price']}</span> 
                <span className={styles.typeText}>{sizes[0]['name']}</span>
              </div>
              : <div className={styles.priceWrapper}>Check price with show owner</div>
            }
            { reviews.length > 0 && 
              <div>
                <StarIcon size="1x" className={styles.starIcon}/> {`(${reviews.length})`}
              </div>
            }
          </div>
          <div>
            <HeartIcon size="1x" className={styles.heartIcon}/>
          </div>
        </div>
    </div>
  );
}

export default ItemCard;