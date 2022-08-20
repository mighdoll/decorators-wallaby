export function Awesome(howAwesome: any) {
  console.log("where is..");
  return function (target: any) {
    console.log("logging?");
    target.prototype.howAwesome = howAwesome;
  };
}
