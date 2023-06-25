import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-members-card',
  templateUrl: './members-card.component.html',
  styleUrls: ['./members-card.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class MembersCardComponent implements OnInit {
  @Input() member : Member | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
