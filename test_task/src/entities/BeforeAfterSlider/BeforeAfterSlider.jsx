import ReactCompareImage from 'react-compare-image'
import "./BeforeAfterSlider.css"

export const BeforeAfterSlider = ({ beforeImage, afterImage, text }) => {
    return (
        <div className='slider-container'>
            <div className='before-after'>
                <div className="before-text text-overlay font-white">До</div>
                <div className={`text-overlay after-text font-white`}>После</div>

                <ReactCompareImage
                    leftImage={beforeImage}
                    rightImage={afterImage}
                />
            </div>

            <p className="slider-subtitle font-black line-heigth-110">{text}</p>
        </div>
    )
}