import Link from 'next/link'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './Cards.module.scss';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";


// import required modules
import { EffectCube, Pagination } from "swiper";

export const CarouselCubeCard = ({data}) => {
    const {id: shopId, shopName, images, pickUpLocations} = data
  return (
    <div className={styles.cardContainer}>
        <div className={styles.imageWrap}>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                { images && images.map(list => {
                        return(
                        <SwiperSlide key={list.name} >
                            <div 
                                className={styles.swipWrap}
                                style={{backgroundImage: "url(" + list.src + ")"}}
                                >
                                {list.itemId 
                                    ? <Link href={`/shop/${shopId}/i/${list.itemId}`}>
                                        <h4>{list.name}</h4>
                                    </Link> 
                                    : <h4>{list.name}</h4>
                                }
                            </div> 
                        </SwiperSlide>
                    )})
                }
            </Swiper>
        </div>
        <div>
            <Link href={`/shop/${shopId}`}> <h3 className={styles.itemTitle}>{shopName}</h3></Link>
        </div>
    </div>
  );
}

export default CarouselCubeCard;