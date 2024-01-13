import TabButton from "./TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
export default function Examples() {
  const [selectedTopic, setSelctedTopic] = useState("");

  function HandleClick(selected) {
    setSelctedTopic(selected);
    console.log(selectedTopic);
  }
  let Tabcontent = <p>please tab a button here</p>;
  if (selectedTopic) {
    Tabcontent = (
      <div id="tab-contnet">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="examples" id="examples">
      <Tabs
        // ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelectd={selectedTopic === "components"}
              onClick={() => HandleClick("components")}
            >
              components
            </TabButton>
            <TabButton
              isSelectd={selectedTopic === "jsx"}
              onClick={() => HandleClick("jsx")}
            >
              jsx
            </TabButton>
            <TabButton
              isSelectd={selectedTopic === "props"}
              onClick={() => HandleClick("props")}
            >
              props
            </TabButton>
            <TabButton
              isSelectd={selectedTopic === "state"}
              onClick={() => HandleClick("state")}
            >
              state
            </TabButton>
          </>
        }
      >
        {Tabcontent}
      </Tabs>
    </Section>
  );
}
