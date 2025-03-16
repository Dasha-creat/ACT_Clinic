import { Header, InfoBlock, Advantages, TextPromoPrizeBlock, Quiz, ImplantsList, Answers, Experts, BeforeAfterBlock, Stages, Reviews } from "../../../widgets/index"
import "./MainPage.css"

export function MainPage() {
  return (
    <>
      <div className="image-container">
        <Header />
        <InfoBlock />
      </div>

      <div className="main-info-container">
        <Advantages />

        <div className="promo-quiz">
          <TextPromoPrizeBlock />

          <Quiz />
        </div>
      </div>

      <div className="container-full">
        <BeforeAfterBlock />
        <Experts />
      </div>

      <div className="container-middle">
        <ImplantsList />
      </div>

      <div className="container-full">
        <Stages />
      </div>

      <div className="container-full">
        <Answers />
      </div>

      <div className="container-full-gradient">
        <Reviews />
      </div>
    </>
  )
}
