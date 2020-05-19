import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-autocompleter',
  templateUrl: './autocompleter.component.html',
  styleUrls: ['./autocompleter.component.css']
})
export class AutocompleterComponent implements OnInit {
  query = new FormControl();
  @Input() data: any[];
  results: any[];

  constructor() { }

  ngOnInit(): void {
  }

  autocomplete() {
    this.results = [];
    for (const result of this.data) {
      for (const prop of Object.keys(result)) {
        if (result[prop] && result[prop].toString().toLowerCase().includes(this.query.value.toString().toLowerCase())) {
          this.results.push(result);
          break;
        }
      }
    }
  }

}
