import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {HighLighterService} from '../../services/high-lighter.service';

@Component({
  selector: 'app-autocompleter',
  templateUrl: './autocompleter.component.html',
  styleUrls: ['./autocompleter.component.css']
})
export class AutocompleterComponent implements OnInit {
  query = new FormControl();
  @Input() data: any[];
  results: any[];
  @Input() displayProperty: string;
  @Output() itemSelected = new EventEmitter();

  constructor(private highlighterService: HighLighterService) { }

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

  next() {
    this.highlighterService.next(this.results);
  }

  previous() {
    this.highlighterService.previous(this.results);
  }

  select() {
    const selectedItem = this.results.find( r => r.highlight);
    this.itemSelected.emit(selectedItem);
  }
}
