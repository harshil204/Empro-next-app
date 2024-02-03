import Header from "@/components/Header";
import styles from "./pageStyles.module.css";
import TeamMemberCard from "@/components/TeamMemberCard";
import lannister from "../../../public/img/ourTeam/lannister.jpg";
import snow from "../../../public/img/ourTeam/snow.jpg";
import depp from "../../../public/img/ourTeam/depp.jpg";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <div className={styles?.backImage}>
        <Header />
        <div className={styles?.bgContainer}>
          <div className={styles?.container}>
            <h4 className={styles?.heading}>Our Team</h4>

            <div className={styles?.contentContainer}>
              <TeamMemberCard
                image={depp}
                name={"Johnny Depp"}
                role={"Full-stack Developer"}
              />
              <TeamMemberCard
                image={snow}
                name={"Jon Snow"}
                role={"Back-end Expert"}
              />
              <TeamMemberCard
                image={lannister}
                name={"Tyrion Lannister"}
                role={"Frontend developer"}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
