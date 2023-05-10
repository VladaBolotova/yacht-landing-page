
import styles from '../styles'

const StartSteps = ({number, text}) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
{text}
    </p>

  </div>
);

export default StartSteps;
