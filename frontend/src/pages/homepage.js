import Navbar from "../components/NavigationBar/Navbar";
import styles from "../styles/homepage.module.scss"
function Home() {
    return (
        <>
            <Navbar />
            <h1 className={styles.home}>Chi nhánh 20</h1>
            <p className={styles.sub}>Hé lô cả nhà iu của kem</p>
        </>
    )
}
export default Home;