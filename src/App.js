import store from "./redux/store";
import { Provider } from "react-redux";
import BoardGrid from "./components/BoardGrid";
import { Game } from "./pages/Game";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Lobby } from "./pages/Lobby";
import { Credits } from "./pages/Credits";
import { ConfigGame } from "./pages/ConfigGame";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Lobby />} />
            <Route path="credits" element={<Credits />} />
            <Route path="game" element={<Game />}>
              <Route path="/game/start" element={<BoardGrid />} />
              <Route index element={<ConfigGame />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
