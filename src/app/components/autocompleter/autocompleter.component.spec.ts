import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleterComponent } from './autocompleter.component';

describe('AutocompleterComponent', () => {
  let autocompleter: AutocompleterComponent

  beforeEach(() => {
    autocompleter = new AutocompleterComponent();
  });

  it('should filter all items containing e', () => {
    autocompleter.data = [
      {x : 'ho'},
      {x : 'hoi'},
      {x : 'hey'},
    ];
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();
    expect(autocompleter.results).toEqual([{x : 'hey'}]);
  });

  it('should filter all items containing e and no duplicate results', () => {
    autocompleter.data = [
      {x : 'ho', y : 'hallo'},
      {x : 'hoi', y : 'hello'},
      {x : 'hey', y : 'hello'},
    ];
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();
    expect(autocompleter.results).toEqual([
      {x : 'hoi', y : 'hello'},
      {x : 'hey', y : 'hello'}
    ]);
  });

  it('should autoComplete with case-insensitive values and query', () => {
    autocompleter.data = [
      {x : 'ho'},
      {x : 'hei'},
      {x : 'hEy'}
    ];
    autocompleter.query.setValue('e');
    autocompleter.autocomplete();
    expect(autocompleter.results).toEqual([
      {x : 'hei'},
      {x : 'hEy'}
    ]);
  });

  it('should ignore falsy values', () => {
    // Remark: all these values are falsy values
    autocompleter.data = [
      {x : undefined},
      {x : null},
      {x : false}
    ];
    autocompleter.query.setValue('E');
    autocompleter.autocomplete();
    expect(autocompleter.results.length).toEqual(0);
  });

  it('should autoComplete on numbers', () => {
    autocompleter.data = [
      {x : 1},
      {x : 'a'}
    ];
    autocompleter.query.setValue(1);
    autocompleter.autocomplete();
    expect(autocompleter.results).toEqual([
      {x : 1}
    ]);
  });
});
