"use client"

import { useState } from "react";
import ButtonDefault from "@/ui/Buttons/Default";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SliderBox = () => {
    const router = useRouter();
    const [slide, setSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // fade: true,
        arrows: false,
    };

    function fillControlls(index: number) {
        const controls = [];

        for (let i = 0; i < 5; i++) {
            controls.push(
                <div
                    key={i}
                    className={`${styles.Control} ${i === index ? styles.Active : ""}`}
                    onClick={() => setSlide(i)}
                ></div>
            );
        }

        return controls;
    }

    return (
        <Slider {...settings}>
            {[0, 1, 2, 3, 4].map((index) => (
                <div key={index}>
                    <section
                        className={`${styles.Slider} ${index === slide ? styles.ActiveSlide : ""}`}
                        style={{ background: `url("/Home_Slider_${index}.png") no-repeat` }}
                    >
                        <div className={styles.Box}>
                            <h1>Паронит ПОН-Б 3мм (1500х1700)</h1>
                            <ul>
                                <li>ГОСТ 481-80</li>
                                <li>В наличии </li>
                            </ul>
                            <ButtonDefault onClick={() => router.push("/catalog")}>Перейти в каталог</ButtonDefault>
                        </div>
                        <div className={styles.Controlls}>{fillControlls(index)}</div>
                    </section>
                </div>
            ))}
        </Slider>
    )
}

export default SliderBox