import Image from "next/image";
import styles from "../styles/TeamMemberCard.module.css";

const TeamMemberCard = ({ image, name, role }) => {
  return (
    <div className={styles?.container}>
      <Image className={styles?.dp} src={image} alt="Team Member" />
      <div className={styles?.contentContainer}>
        <h3 className={styles?.name}>{name}</h3>
        <p className={styles?.role}>{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
