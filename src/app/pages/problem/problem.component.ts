import { CodeLanguage } from '@core/types/problem';
import { ProblemsService } from '@core/services';
import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Problem } from '@core/types';
import { editor } from 'monaco-editor';
import { GraphicDirective } from '@features/graphic/graphic.directive';

declare const monaco: any;

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.less'],
})
export class ProblemComponent implements OnInit {
  problem?: Problem;
  type?: { label: string; icon: string };

  languages: CodeLanguage[] = [];
  selected: CodeLanguage = 'typescript';
  editor?: editor.ICodeEditor | editor.IEditor;
  inputValue: string = '';
  example?: { input: any; output: any };

  @ViewChild('graphic') graphic: TemplateRef<GraphicDirective> | undefined;

  constructor(
    private route: ActivatedRoute,
    private problemsService: ProblemsService,
    private viewContainerRef: ViewContainerRef
  ) {}

  get editorOption() {
    return {
      theme: 'vs-dark',
      language: this.selected,
    };
  }

  onLangChang(lang: CodeLanguage) {
    if (this.editor && this.problem)
      this.editor.setModel(
        monaco.editor.createModel(this.problem.solutions[lang] || '', lang)
      );
  }

  onEditorInit(e: any) {
    this.editor = e;
    this.onLangChang(this.selected);
  }

  onExampleChange(example?: { input: any; output: any }) {
    if (example) {
      this.example = example;
    }
  }

  customize() {
    if (this.valid())
      this.example = {
        input: this.inputValue.split('\r\n').map((data) => this.parse(data)),
        output: undefined,
      };
    else {
      // TODO:
      alert('format error');
    }
  }

  parse(data: string) {
    if (!isNaN(Number(data))) return Number(data);
    if (data.startsWith('[') && data.endsWith(']')) return JSON.parse(data);
    return data;
  }

  valid() {
    const data = this.inputValue.split('\r\n').map((data) => this.parse(data));
    if (data.length !== this.problem?.examples[0].input.length) return false;
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i] !== typeof this.problem?.examples[0].input[i])
        return false;
    }
    return true;
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      const problemId = id;
      this.problem = this.problemsService.getById(Number(problemId));
      if (this.problem) {
        this.type = this.problemsService.types.find(
          ({ label }) => label == this.problem?.type
        );
        this.languages = Object.keys(this.problem.solutions) as CodeLanguage[];
        this.onExampleChange(this.problem.examples[0]);
        this.onLangChang(this.selected);
      }
    });
  }
}
