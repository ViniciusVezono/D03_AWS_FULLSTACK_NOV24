import Titles from '../Titles/Titles';

import style from './InstructionCards.module.css';
import { CardsProps } from './InstructionCard.types';

const InstructionCards = ({ icon, title, description }: CardsProps) => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={icon} alt={`the ${title} step to take care`} />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <Titles titleText="" highlightText="" text={description} />
      </div>
    </div>
  );
};

export default InstructionCards;
