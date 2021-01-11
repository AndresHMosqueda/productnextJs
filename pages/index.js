import Head from "next/head";
import ProductDetails from "../components/Products";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ProductDetails />
    </div>
  );
}
