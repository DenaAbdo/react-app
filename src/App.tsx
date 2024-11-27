import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const hanldeSelectItem = (item: string) => {
  //   console.log(item);
  const [alertVisible, setAlertVisablity] = useState(false);
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={hanldeSelectItem}
      /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisablity(false)}>
          AlertI'm clicked :o Thx ;){" "}
        </Alert>
      )}
      <Button onClick={() => setAlertVisablity(true)}>Click Me!</Button>
    </div>
  );
}
export default App;
