
export function Awesome(howAwesome:any) {
  return function(target:any) {
    target.prototype.howAwesome = howAwesome;
  }
}

@Awesome("11")
export class Example {
  prop = 7;
}
