import { useState } from 'react'
import ReactCompareImage from 'react-compare-image'
import { slider } from "../../../shared/assets"
import "./BeforeAfterSlider.css"

export const BeforeAfterSlider = ({ beforeImage, afterImage, text }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
  
    const handleSliderChange = (e) => {
        const newPosition = Math.max(0, Math.min(100, ((e.clientX - e.target.offsetLeft) / e.target.offsetWidth) * 100))
        setSliderPosition(newPosition)
    }
  
    const CustomSlider = ({ position, onSliderMove }) => (
        <div
            className="custom-slider"
            style={{ left: `calc(${position}% - 20px)` }}
            onMouseMove={onSliderMove}
        >
            <img src={slider} alt="slider" className="slider-svg" />
        </div>
    )
  
    return (
        <div className='slider-container'>
            <div className='before-after'>
                <ReactCompareImage
                leftImage={beforeImage}
                rightImage={afterImage}
                slider={<CustomSlider position={sliderPosition} onSliderMove={handleSliderChange} />}
                sliderPosition={sliderPosition}
                />
            </div>

            <p className="slider-subtitle font-black line-heigth-110">{text}</p>
        </div>

    )
}