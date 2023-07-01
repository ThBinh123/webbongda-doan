
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import imagehot1 from "../../../imgsProduct/giay-da-bong-copa.jpg"
import imagehot2 from "../../../imgsProduct/giayPuma.jpg"
import imagehot3 from "../../../imgsProduct/giayAdidasKd1.jpg"
import imagehot4 from "../../../imgsProduct/giayNikeTiempo.jpg"
import imagehot5 from "../../../imgsProduct/giayCr7.jpg"
import { Link } from 'react-router-dom';
import {FaSearchDollar} from "react-icons/fa"
import {AiFillEye} from "react-icons/ai"

import "./Swiper.css"
function swiper() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            <SwiperSlide className='box-swiper'>
                <img className='image' src={imagehot1} ></img>
                <a href="/SanPham/Giay/3" className='linkswiper'><AiFillEye/></a>
                <p className='nameswiper'>Giày Bóng Đá Adidas-Copa</p>
            </SwiperSlide>
            <SwiperSlide className='box-swiper'>
                <img className='image' src={imagehot2}  ></img>
                <a href="/SanPham/Giay/4" className='linkswiper'><AiFillEye/></a>
                <p className='nameswiper'>Giày PUMA Trắng</p>
            </SwiperSlide>
            <SwiperSlide className='box-swiper'>
                <img className='image' src={imagehot3}></img>
                <a href="/SanPham/Giay/9" className='linkswiper'><AiFillEye/></a>
                <p className='nameswiper'>Giày Adidas Không Dây Xanh</p>
            </SwiperSlide>
            <SwiperSlide className='box-swiper'>
                <img className='image' src={imagehot4} ></img>
                <a href="/SanPham/Giay/12" className='linkswiper'><AiFillEye/></a>
                <p className='nameswiper'>Giày Tiempo</p>
            </SwiperSlide>
            <SwiperSlide className='box-swiper'>
                <img className='image' src={imagehot5}></img>
                <a href="/SanPham/Giay/11" className='linkswiper'><AiFillEye/></a>
                <p className='nameswiper'>Giày CR7</p>
            </SwiperSlide>

        </ Swiper>
    )
}
export default swiper;