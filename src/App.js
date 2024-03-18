import Card from "./components/Card";
import Header from "./components/Header";
import Drawwer from "./components/Drawwer";

function App() {
  return (
    <div className="wrapper clear">
      <Drawwer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск по товарам..." type="text" />
          </div>
        </div>
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
