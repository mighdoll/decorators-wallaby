import {Awesome} from '../src/Example';

@Awesome("11")
class Example {
  prop = 7;
}

test("decorator", () => {
  const e = new Example() as any;
  expect(e["howAwesome"]).toEqual("11");
});
