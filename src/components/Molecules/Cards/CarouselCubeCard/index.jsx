import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCube } from "swiper/modules";
import styles from './Cards.module.scss';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";


const blankImage = "https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg";

export const CarouselCubeCard = (props) => {
    const { id: itemId, shopId, shopName, images, pickUpLocations } = props

    const linkUrl = `/shop/${shopId}/i/${itemId}`;

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
                    className="mySwiper">
                    {images?.length > 0 ?
                        images?.map((list, i) => {
                            return (
                                <SwiperSlide key={list.name} >
                                    <div
                                        className={styles.swipWrap}
                                        style={{ backgroundImage: `url(${list?.src ? list?.src : blankImage})` }} />
                                </SwiperSlide>
                            )
                        })
                        : <div
                            className={styles.swipWrap}
                            style={{ backgroundImage: `url(${blankImage})` }} />
                    }
                </Swiper>
            </div>
            <div>
                <Link to={linkUrl} className={styles.itemTitle}>
                    <h3>{shopName}</h3>
                </Link>
            </div>
        </div>
    );
}

export default CarouselCubeCard;


// {
//     "id": "9944490b-1a1a-45b2-93a9-fbbf995f3266",
//     "shopItemId": {
//         "id": "c782a8de-e981-4b3f-8de3-5ab29106aa9b",
//         "phone": "1234123443",
//         "email": null,
//         "description": null,
//         "shopName": "paf1100 shop",
//         "createdAt": "2023-07-12T15:00:19.447Z",
//         "updatedAt": "2023-07-12T15:00:19.447Z",
//         "userShopsId": "549804b8-4061-704a-a307-dce1b2816c2d",
//         "owner": "549804b8-4061-704a-a307-dce1b2816c2d",
//         "__typename": "Shop"
//     },
//     "shopName": "paf1100 shop",
//     "name": "monkey food",
//     "images": [
//         {
//             "id": "7ca7a81e-00f2-4608-a1d1-630a0b344a69",
//             "name": "dasdlkfjaslkfja.png",
//             "src": "https://res.cloudinary.com/paf1david/image/upload/c_scale,w_780,ar_1:1,c_fill/v1689174027/pafpay/ikc6vwo7c4bulxndstyf.png",
//             "shopId": null,
//             "itemId": "9944490b-1a1a-45b2-93a9-fbbf995f3266",
//             "__typename": "Images"
//         }
//     ],
//     "sizes": [
//         {
//             "id": "69f0bf7c-9a83-4bd8-b841-debd461c2bc5",
//             "name": "Regular",
//             "price": "3.55",
//             "__typename": "Size"
//         }
//     ],
//     "ingrediances": "this is money food ingrediances",
//     "createdAt": "2023-07-12T15:00:51.154Z",
//     "updatedAt": "2023-07-12T15:00:51.154Z",
//     "shopId": "c782a8de-e981-4b3f-8de3-5ab29106aa9b",
//     "orderItemsId": null,
//     "locationItemsId": null,
//     "owner": "549804b8-4061-704a-a307-dce1b2816c2d",
//     "__typename": "Item"
// }