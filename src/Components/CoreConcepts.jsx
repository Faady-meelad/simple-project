import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>core concept</h2>
      <ul>
        {CORE_CONCEPTS.map((ConceptItem) => (
          <CoreConcept key={CORE_CONCEPTS.title} {...ConceptItem} />
        ))}
      </ul>
    </section>
  );
}
