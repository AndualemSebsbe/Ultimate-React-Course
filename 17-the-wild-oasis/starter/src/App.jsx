import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
  padding: 20px;
  background-color: orangered;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as='h1'>The Wild Oasis</Heading>
        <Heading as='h2'>Check in and out</Heading>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>
        <Heading as='h3'>Form</Heading>
        <div style={{ display: "flex" }}>
          <Input type="number" placeholder="Number of guests" />
          <Input type="number" placeholder="Number of guests" />
        </div>
      </StyledApp>
    </>
  );
}
export default App;
