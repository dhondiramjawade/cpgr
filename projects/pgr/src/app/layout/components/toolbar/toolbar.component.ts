import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { THEME } from 'projects/ui-tools/src/lib/enums/theme.enum';
import { EnvironmentService } from 'projects/ui-tools/src/lib/services/environment.service';

@Component({
  selector: 'pgr-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggle = new EventEmitter();

  isOpened : boolean= false;
  form = new FormGroup({theme : new FormControl(true)});

  constructor(private _envService : EnvironmentService) { }

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

  isDarkTheme(evt: Event){
    const flag = (<HTMLInputElement>evt.target).checked;
    const theme = flag? THEME.DARK: THEME.LIGHT;
    document.body.setAttribute('data-bs-theme', theme);
    this._envService.theme = theme;
  }

}
