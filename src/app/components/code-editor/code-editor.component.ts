import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import * as ace from 'ace-builds';
import { NgProgress, NgProgressRef, NgProgressModule } from 'ngx-progressbar';
import { CodeFormService } from 'src/app/services/code-form.service';
@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css'],
})
export class CodeEditorComponent {
  progressRef!: NgProgressRef;
  constructor(
    private codeFormService: CodeFormService,
    private progress: NgProgress
  ) {}
  @ViewChild('editor')
  private editor!: ElementRef<HTMLElement>;
  timeComplexity = '';
  // 4️⃣
  ngAfterViewInit(): void {
    ace.config.set('fontSize', '14px');
    ace.config.set(
      'basePath',
      'https://unpkg.com/ace-builds@1.4.12/src-noconflict'
    );
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue(
      'def foo(n, k):\naccum = 0\nfor i in range(n):\n    for l in range(k):\n        accum += i\nreturn accum\n'
    );
    aceEditor.setTheme('ace/theme/twilight');
    aceEditor.session.setMode('ace/mode/python');
  }
  ngOnInit() {
    this.progressRef = this.progress.ref('myProgress');
  }
  async submitCode() {
    this.timeComplexity = '';
    this.progressRef.start();
    const aceEditor = ace.edit(this.editor.nativeElement);
    const response = await this.codeFormService.getTimeComplexity(
      aceEditor.getValue()
    );
    if (response) {
      this.progressRef.complete();
    }
    console.log(response);
    this.timeComplexity = response;
  }
  resetCode() {
    this.timeComplexity = '';
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue(
      'def foo(n, k):\naccum = 0\nfor i in range(n):\n    for l in range(k):\n        accum += i\nreturn accum\n'
    );
  }
}
