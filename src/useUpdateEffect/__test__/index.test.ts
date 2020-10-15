import { renderHook, act } from "@testing-library/react-hooks";
import useUpdateEffect from "../index";

describe("useUpdateEffect", () => {
  it("should be defined", () => {
    expect(useUpdateEffect).toBeDefined();
  });

  it("should run effect on update", () => {
    let scopeState = 1;
    const effect = jest.fn(() => {
      scopeState = scopeState + 1;
    });

    const { rerender } = renderHook(() => useUpdateEffect(effect));
    expect(effect).not.toHaveBeenCalled();
    expect(scopeState).toBe(1);

    rerender();
    expect(effect.mock.calls.length).toBe(1);
    expect(scopeState).toBe(2);
  });

  it("should run effect when deps update", () => {
    let scopeState = 1;
    const effect = jest.fn(() => {
      scopeState = scopeState + 1;
    });

    const { rerender } = renderHook(() =>
      useUpdateEffect(effect, [scopeState])
    );
    expect(effect).not.toHaveBeenCalled();

    scopeState = 2;

    rerender();
    expect(effect.mock.calls.length).toBe(1);
    expect(scopeState).toBe(3);
  });
});
