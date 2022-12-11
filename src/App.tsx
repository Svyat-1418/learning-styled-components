import './App.css';
import {Wrapper} from "./ui/components/Wrapper/Wrapper";
import {Title} from "./ui/components/Title/Title";
import {Button} from "./ui/components/Button/Button";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Title>
          I succeeded in that!
        </Title>

        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </Wrapper>
    </div>
  );
}

export default App;

