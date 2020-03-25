import React from "react";
import { doniraj } from "../../moc/doniraj";
import useToggle from "../hooks/useToggle";

const labelValues = () => {
  const [selected, toggleSelected] = useToggle(false);

  return (
    <div>
      doniraj.map((doniraj) =>
      <ul className="label-ul">
        {doniraj.items.map(sub => (
          <li
            className={selected ? "labels-li label-selected" : "labels-li"}
            key={sub.id}
            onClick={toggleSelected}
          >
            {sub.name}
          </li>
        ))}
      </ul>
      );
    </div>
  );
};
export default labelValues;
