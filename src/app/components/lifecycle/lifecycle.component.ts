import {Component, OnDestroy, OnInit} from '@angular/core';
import { Contact } from '../../models/contact';
import { HighLighterService } from '../../services/high-lighter.service';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnDestroy {

  contacts: Contact[];
  private intervalTimer: any;

  constructor(private highlighterService: HighLighterService) {
    // Eigenlijk alleen maar dependencies beschikbaar maken
    console.log('[lc] constructor called');
  }

  ngOnInit(): void {
    console.log('[lc] ngOnInit called');
    // this.frameworks = //haal die data maar op
    this.intervalTimer = setInterval( () => { console.log('[lc] timerInterval fired'); }, 1000);
  }

  ngOnDestroy(): void {
    // opruimen connecties
    // timers opruimen
    // camera API
    // opruimen observables => unsubscriben
    console.log('[lc] ngOnDestroy called');
    clearInterval(this.intervalTimer);
  }


}
