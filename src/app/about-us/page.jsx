import Header from "@/components/Header";
import styles from "./pageStyle.module.css";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className={styles?.backImage}>
      <Header />
      <div className={styles?.container}>
        <h4 className={styles?.heading}>About Us</h4>
        <div className={styles?.paragraphContainer}>
          <p className={styles?.pTag}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non
            error officiis. Veniam velit consequuntur eligendi consectetur eos
            necessitatibus amet ratione vel. Repellat sed soluta expedita
            ratione quae id nesciunt similique ab molestias fugiat officia iusto
            dolorem mollitia, maandae dolor eaque Consequatur iste modi delectus
            atque, alias tempora nulla officia, ratione velit, laboriosam
            molestiae aliquid. Cupiditate accusamus tempora adipisci libero quia
            totam obcaecati! Expedita, nisi dolor? Velit aliquam saepe minima
            beatae explicabo sapiente quibusdam minus officiis deserunt nulla?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat adipisci officiis sequi nisi omnis rerum a vero cum optio natus, unde nihil nulla? Excepturi ipsam sequi iusto nobis similique quis assumenda doloremque earum ipsum recusandae! Facere praesentium a, labore optio commodi impedit maiores fugit velit, quae possimus distinctio aperiam veritatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus a aliquid quibusdam reiciendis consequuntur ad unde molestias veniam nihil, sit nemo eveniet tempore laborum expedita! Voluptatum iusto tempora ea maiores ad nesciunt hic optio, eaque nisi minus recusandae eius!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
