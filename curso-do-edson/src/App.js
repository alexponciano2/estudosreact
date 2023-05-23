import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/db.json"

function App() {
  return (
    <>
      <Header />
      <Banner image='home' />
      <Container>
        <h2>Geografia</h2>
        <section className="cards">
          {videos.map((video) => <Card id={video.id} key={video.id} />)}
        </section>

        <h2>Como fazer e como usar</h2>
        <section className="cards">
          {videos.map((video) => <Card id={video.id} key={video.id} />)}
        </section>

        <h2>Geografia e Astronomia</h2>
        <section className="cards">
          {videos.map((video) => <Card id={video.id} key={video.id} />)}
        </section>

        <h2>Climatologia, Meteorologia e Vegetação</h2>
        <section className="cards">
          {videos.map((video) => <Card id={video.id} key={video.id} />)}
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default App;