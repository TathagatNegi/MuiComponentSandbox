import "./styles.css";
import { useState } from "react";

//examples
import MuiDropdownStandard from "./MuiDropdownExamples/MuiDropdownStandard";
import MuiDropdownFilled from "./MuiDropdownExamples/MuiDropdownFilled";
import MuiDropdownOutlined from "./MuiDropdownExamples/MuiDropdownOutlined";
import MuiDropdownOutlinedMultiple from "./MuiDropdownExamples/MuiDropdownOutlinedMultiple";
//Mui Modal Example
import MuiModalFailure from "./MuiModalExamples/MuiModalFailure";
import MuiModalSuccess from "./MuiModalExamples/MuiModalSuccess";

const Container = ({ children }) => {
  return (
    <div>
      <div style={{ marginBottom: "20px", width: 300 }}>{children}</div>
      <hr />
    </div>
  );
};

const DropdownLabel = ({ children }) => {
  return <p style={{ fontSize: 14, textAlign: "left" }}>{children}</p>;
};

export default function App() {
  //const dispatch = useDispatch();
  const allOptions = [
    { ID: 1, Name: "A" },
    { ID: 2, Name: "Anchal" },
    { ID: 3, Name: "Saurabh" },
    { ID: 4, Name: "Tathagat" },
    { ID: 5, Name: "Piyush" }
  ];

  const [EmployeesSelected, SelectEmployees] = useState([allOptions[1]]);

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}

      <h2>Mui Dropdown Examples</h2>
      <Container>
        <DropdownLabel>MuiDropdownStandard</DropdownLabel>
        <MuiDropdownStandard allOptions={allOptions} />
      </Container>

      <Container>
        <DropdownLabel>MuiDropdownFilled</DropdownLabel>
        <MuiDropdownFilled allOptions={allOptions} />
      </Container>

      <Container>
        <DropdownLabel>MuiDropdownOutlined</DropdownLabel>
        <MuiDropdownOutlined allOptions={allOptions} />
      </Container>

      <Container>
        <DropdownLabel>MuiDropdownOutlinedMultiple</DropdownLabel>
        <MuiDropdownOutlinedMultiple allOptions={allOptions} />
      </Container>

      <h2>Mui Modal Examples</h2>
      <Container>
        <DropdownLabel>Failue Modal</DropdownLabel>
        <DropdownLabel>
          {" "}
          <MuiModalFailure />
        </DropdownLabel>
        <DropdownLabel>Success Modal</DropdownLabel>
        <DropdownLabel>
          {" "}
          <MuiModalSuccess />
        </DropdownLabel>
      </Container>
    </div>
  );
}
