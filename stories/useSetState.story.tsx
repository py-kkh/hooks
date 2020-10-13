import { storiesOf } from "@storybook/react";
import * as React from "react";
import { useSetState } from "../src";
import ShowDocs from "./utils/ShowDocs";

interface State {
  hello: string;
  count: number;
  [key: string]: any;
}

const Demo = () => {
  const [state, setState] = useSetState<State>({
    hello: "",
    count: 0,
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => setState({ hello: "world" })}>set hello</button>
      <button onClick={() => setState({ foo: "bar" })}>set foo</button>
      <button
        onClick={() => {
          setState((prevState: any) => ({
            count: prevState.count === undefined ? 0 : prevState.count + 1,
          }));
        }}
      >
        count + 1
      </button>
    </div>
  );
};

storiesOf("useSetState", module)
  .add("Docs", () => (
    <ShowDocs md={require("../src/useCounter/index.zh-CN.md")} />
  ))
  .add("Demo", () => <Demo />);
