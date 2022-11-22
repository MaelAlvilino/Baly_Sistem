import axios from "axios";
import { useEffect, useState } from "react";
import { mockBackend } from "../../services/mockBackend";
import Estetica from "../../assets/Estetica.jpg";
import { Modal } from "../homeModal";
import TopBar from "../top-bar/top-bar.component";
import "../usuario/usuario-component.styles.css";

type Card = {
  title: string;
  subTitle: string;
  image: string;
  description: string;
  subDescription: string;
  value: string;
};
function Usuario() {
  const [cardList, setCardList] = useState<Card[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState<Card | null>(null);

  useEffect(() => {
    const response = mockBackend;
    if (response && response.length > 0) {
      setCardList(response);
    }
  }, []);

  function openModal(item: Card) {
    setCurrentCard(item);
    setShowModal(true);
  }

  return (
    <>
      <div className="home-container">
        <h1>conteudo</h1>
        <div className="home-content">
          <div className="cards">
            {cardList &&
              cardList.length > 0 &&
              cardList.map((item: Card, key: number) => (
                <div
                  key={key}
                  onClick={() => openModal(item)}
                  className="home-auction-card"
                >
                  <img src={Estetica}></img>
                  <h4>{item.subTitle}</h4>
                  <span>{item.description} </span>
                  <span>{item.value}</span>
                </div>
              ))}
          </div>
        </div>
        {showModal && currentCard && (
          <Modal
            header={currentCard?.title}
            setShowModal={setShowModal}
            cancelFunction={() => {}}
            confirmFunction={() => {}}
            loadingModal=""
            confirmText="Agendar Procedimento"
          >
            <div className="home-auction-card">
              <img src={Estetica}></img>
              <h4>{currentCard?.subTitle}</h4>
              <span>{currentCard.subDescription} </span>
              <span>{currentCard.value}</span>
              <a>{currentCard.description} </a>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}
export default Usuario;
