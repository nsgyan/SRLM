import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpperCase]'
})
export class UpperCaseDirective {
@HostListener('input',['$event']) onInput(event:{target:{value:String;};}){
  event.target.value= event.target.value.toUpperCase()
  return true
}
 

}
