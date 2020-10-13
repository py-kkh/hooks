import { act, renderHook } from "@testing-library/react-hooks";
import useCounter from "../index";

const setUp = (initialValue?: number) =>
  renderHook(() => useCounter(initialValue));

it("should init counter and utils", () => {
  const { result } = setUp(5);
  expect(result.current.count).toBe(5);
  expect(result.current).toStrictEqual({
    count: 5,
    inc: expect.any(Function),
    dec: expect.any(Function),
  });
});

it("should init counter to 0 if not initial value received", () => {
  const { result } = setUp();

  expect(result.current.count).toBe(0);
});

it("should init counter to negative number", () => {
  const { result } = setUp(-2);

  expect(result.current.count).toBe(-2);
});

it("should increment by 1 if not value received", () => {
  const { result } = setUp(5);
  const { inc } = result.current;

  act(() => inc());

  expect(result.current.count).toBe(6);
});

it("should decrement by 1 if not value received", () => {
  const { result } = setUp(5);
  const { dec } = result.current;

  act(() => dec());

  expect(result.current.count).toBe(4);
});
