import { renderHook, act } from "@testing-library/react-hooks";
import useSetState from "../index";

const setUp = (initialState?: Record<string, any>) =>
  renderHook(() => useSetState(initialState));

it("it should init state and setter", () => {
  const { result } = setUp({ foo: "bar" });

  const [state, setState] = result.current;

  expect(state).toEqual({ foo: "bar" });
  expect(setState).toBeInstanceOf(Function);
});

it("should init empty state if not initial state provided", () => {
  const { result } = setUp();

  expect(result.current[0]).toEqual({});
});

it("should merge changes into current state when providing object", () => {
  const { result } = setUp({ foo: "bar", count: 1 });
  const [state, setState] = result.current;

  act(() => {
    setState({ count: state.count + 1, someBool: true });
  });

  expect(result.current[0]).toEqual({ foo: "bar", count: 2, someBool: true });
});

it("should merge changes into current state when providing function", () => {
  const { result } = setUp({ foo: "bar", count: 1 });
  const [, setState] = result.current;

  act(() => {
    setState(prevState => ({ count: prevState.count + 1, someBool: true }));
  });

  expect(result.current[0]).toEqual({ foo: "bar", count: 2, someBool: true });
});
