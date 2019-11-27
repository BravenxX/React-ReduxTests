import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Finanzas from "./Finanzas";

configure({ adapter: new Adapter() });

describe("Finanzas", () => {
  it("llama a eliminarfinanzas onclick", () => {
    const finanzas = [
      { desc: "Finanza1", cant: 100 },
      { desc: "Finanza2", cant: 70 }
    ];
    const eliminarFinanza = jest.fn();

    const wrapper = shallow(
      <Finanzas finanzas={finanzas} eliminarFinanza={eliminarFinanza} />
    );
    wrapper
      .find("button")
      .at(0)
      .simulate("click");

    expect(eliminarFinanza.mock.calls).toEqual([[0]]);

    const resultado1 = wrapper.text().includes("Finanza1");
    const resultado2 = wrapper.text().includes("Finanza2");

    expect(resultado1).toEqual(true);
    expect(resultado2).toEqual(true);
  });
});
