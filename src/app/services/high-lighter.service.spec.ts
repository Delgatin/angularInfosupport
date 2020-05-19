import { TestBed } from '@angular/core/testing';

import { HighLighterService } from './high-lighter.service';
import {AutocompleterComponent} from '../components/autocompleter/autocompleter.component';

describe('HighLighterService', () => {
  let service: HighLighterService;
  let autocompleter: AutocompleterComponent;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighLighterService);
    autocompleter = new AutocompleterComponent(service);
  });

  it('When entering the value in an input box the first matching entry should be highlighted', () => {
    // setup The A van Arrange (klaar zetten.)
    // Black box approach, we don't assume any knowledge of the component
    autocompleter.data = [
      {x : 'ho'},
      {x : 'hei'},
      {x : 'hEy'}
    ];
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();

    // Act
    autocompleter.next();
    expect(autocompleter.results[0].highlight).toBe(true);
  });

  it ('Should navigate from the highlighted item to the next', () => {
    autocompleter.data = [
      {x : 'ho'},
      {x : 'hei'},
      {x : 'hEy'}
    ];
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();
    autocompleter.next();
    autocompleter.next();
    expect(autocompleter.results[0].highlight).toBe(undefined);
    expect(autocompleter.results[1].highlight).toBe(true);
  });

  it ('Should navigate from the highlighted from the last highlited item to the first', () => {
    autocompleter.data = [
      {x : 'ho'},
      {x : 'hei'},
      {x : 'hEy'}
    ];
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();
    for (const result of autocompleter.results) {
      autocompleter.next();
    }
    expect(autocompleter.results[0].highlight).toBe(undefined);
    expect(autocompleter.results[autocompleter.results.length - 1].highlight).toBe(true);
    autocompleter.next();
    expect(autocompleter.results[0].highlight).toBe(true);
    expect(autocompleter.results[autocompleter.results.length - 1].highlight).toBe(undefined);
  });
});
