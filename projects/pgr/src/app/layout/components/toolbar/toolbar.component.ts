import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { THEME } from 'projects/ui-tools/src/lib/enums/theme.enum';

@Component({
  selector: 'pgr-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggle = new EventEmitter();

  isOpened : boolean= false;
  form = new FormGroup({theme : new FormControl(false)});

  constructor() { }

  ngOnInit(): void {
    this.form.get('theme')?.valueChanges.subscribe(isDark=>{
      if(isDark){
        document.body.classList.replace(THEME.LIGHT, THEME.DARK)
      } else {
        document.body.classList.replace(THEME.DARK, THEME.LIGHT)
      }
    })
  }

  toggleButton(){
    this.isOpened = !this.isOpened;
    this.toggle.emit(this.isOpened)
  }

}
