import "./styles/normalize.css";
import "./styles/App.css";
import { BlackLab } from "./components/animals/BlackLab";
import { BrownBear } from "./components/animals/BrownBear";
import { Snake } from "./components/animals/Snake";
import { Tiger } from "./components/animals/Tiger";
import { Hippo } from "./components/animals/Hippo";
import { Rhino } from "./components/animals/Rhino";
import { Cheetah } from "./components/animals/Cheetah";
import { Cat } from "./components/animals/Cat";
import { Alligator } from "./components/animals/Alligator";
import { Eagle } from "./components/animals/Eagle";
import { Shark } from "./components/animals/Shark";
import { Elephant } from "./components/animals/Elephant";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="cardsContainer">
          <BlackLab></BlackLab>
          <BrownBear></BrownBear>
          <Snake></Snake>
          <Tiger></Tiger>
          <Hippo></Hippo>
          <Rhino></Rhino>
          <Cheetah></Cheetah>
          <Cat></Cat>
          <Alligator></Alligator>
          <Eagle></Eagle>
          <Shark></Shark>
          <Elephant></Elephant>
        </div>
      </main>
    </>
  );
}

export default App;
