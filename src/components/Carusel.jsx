import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { CardCarusel } from "./CardCarusel";

const items = [
  'https://picsum.photos/id/1018/600/400',
  'https://picsum.photos/id/1015/600/400',
  'https://picsum.photos/id/1019/600/400',
  'https://picsum.photos/id/1020/600/400',
  'https://picsum.photos/id/1021/600/400',
  'https://picsum.photos/id/1022/600/400',
  'https://picsum.photos/id/1023/600/400',
  'https://picsum.photos/id/1024/600/400',
];

function Carusel() {
    return(
        <Swiper
            modules={[Navigation]}
            navigation
            loop
            spaceBetween={16}
            breakpoints={{
                0:   { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024:{ slidesPerView: 3 },
            }}
            >
            {items.map((src, i) => (
                <SwiperSlide key={i}>
                    <CardCarusel image={src} title="card1" description="nanais"/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Carusel;