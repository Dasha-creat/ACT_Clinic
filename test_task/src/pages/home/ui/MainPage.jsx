import { Header, InfoBlock, Advantages, TextPromoPrizeBlock, Quiz, ImplantsList, Answers, Experts } from "../../../widgets/index"
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
        <ImplantsList />
        </div>

      </div>
      <div className="container-full">
      <Experts />
      </div>
      <div className="container-full">
      <Answers />
      </div>

    </>
  )
}
