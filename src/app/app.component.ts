import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'bp-prototype2';

  editorForm: FormGroup;

  content: string;

  ngOnInit(): void {
    this.editorForm = new FormGroup({editor: new FormControl(null)});
  }

  onSubmit() {
    this.content = this.editorForm.get('editor').value;
    console.log(this.editorForm.get('editor').value);
  }
}
