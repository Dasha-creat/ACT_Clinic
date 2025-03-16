import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { ReviewCard } from "../../../entities/Review";
import { arrow_right, arrow_left } from "../../../shared/assets";
import "./ReviewSlider.css";
import { useEffect, useState } from "react";

export function ReviewSlider({ reviews }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const breakpointsConfig = {
        1024: { slidesPerView: 2.2 },
        1440: { slidesPerView: 3.3 },
    }

    const handleSwiperInit = (swiper) => {
        if (!isMobile) {
            swiper.on("slideChange", () => {
                document
                    .querySelector(".review-slider__button-prev")
                    .classList.toggle("review-slider__button--disabled", swiper.isBeginning)
                document
                    .querySelector(".review-slider__button-next")
                    .classList.toggle("review-slider__button--disabled", swiper.isEnd)
            })
        }
    }

    return (
        <div className="review-slider">
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={24}
                slidesPerView={1.1}
                navigation={!isMobile && { prevEl: ".review-slider__button-prev", nextEl: ".review-slider__button-next" }}
                breakpoints={breakpointsConfig}
                onInit={handleSwiperInit}
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <ReviewCard
                            userName={review.user_name}
                            date={review.date}
                            title={review.title_review}
                            text={review.review}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {!isMobile && (
                <div className="review-slider__navigation">
                    <button className="review-slider__button review-slider__button-prev review-slider__button--disabled">
                        <img src={arrow_left} alt="arrow-left" />
                    </button>
                    <button className="review-slider__button review-slider__button-next">
                        <img src={arrow_right} alt="arrow-right" />
                    </button>
                </div>
            )}
        </div>
    )
}