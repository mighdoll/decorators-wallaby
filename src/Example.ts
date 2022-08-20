export function Awesome(howAwesome: any) {
  return function (target: any) {
    target.prototype.howAwesome = howAwesome;
  };
}
