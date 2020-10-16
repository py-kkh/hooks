import { act, renderHook } from "@testing-library/react-hooks";
// import useDynamicList from "../index";

// const setUp = <T>(initialValue?: any) =>
//   renderHook(() => useDynamicList<T>(initialValue));

// interface Person {
//   name: string;
//   age: number;
// }

// const initialValue: Person[] = [
//   { name: "aaa", age: 18 },
//   { name: "bbb", age: 19 },
//   { name: "ccc", age: 20 },
// ];

// describe("useDynamicList", () => {
//   it("shoule be defined", () => {
//     expect(useDynamicList).toBeDefined();
//   });

//   it("initialValue shoule work", () => {
//     const hook = setUp<Person>(initialValue);

//     const returnValue = hook.result.current;

//     expect(returnValue.list.length).toEqual(3);
//     expect(returnValue.list).toMatchObject(initialValue);
//   });

//   it("methods should work", () => {
//     const hook = setUp<Person>(initialValue);

//     const returnValue = hook.result.current;

//     expect(returnValue.list).toMatchObject(initialValue);
//     console.log(
//       hook.result.current.list.map((_, i) => hook.result.current.getKey(i))
//     );
//     // push
//     act(() => {
//       hook.result.current.push({ name: "ddd", age: 21 });
//     });

//     console.log(
//       hook.result.current.list.map((_, i) => hook.result.current.getKey(i))
//     );
//     expect(hook.result.current.list.length).toEqual(4);
//     expect(hook.result.current.list[3].name).toEqual("ddd");

//     // pop
//     act(() => {
//       hook.result.current.pop();
//     });
//     console.log(
//       hook.result.current.list.map((_, i) => hook.result.current.getKey(i))
//     );
//     expect(hook.result.current.list.length).toEqual(3);
//   });
// });
