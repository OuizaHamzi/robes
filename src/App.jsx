import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import styles from "./assets/styles/App.module.scss";
function App() {
  return (
    <div className={`${styles.appContainer} d-flex flex-column`}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
