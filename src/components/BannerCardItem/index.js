import './index.css'

const BannerCardItem = props => {
  const {bannerCardData} = props
  const {headerText, description, className} = bannerCardData
  return (
    <div className={`${className} banner-card-container`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="desc">{description}</p>
        <button className="buttons" type="button">
          Show More
        </button>
      </div>
    </div>
  )
}

export default BannerCardItem
