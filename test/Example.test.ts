import { Example } from './../src/Example';

test("decorator", () => {
  const e = new Example() as any;
  expect(e["howAwesome"]).toEqual("11");
})