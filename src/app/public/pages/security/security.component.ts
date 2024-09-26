import { Component } from '@angular/core';
import {MatLine} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatList, MatListItem} from "@angular/material/list";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [
    MatLine,
    MatIcon,
    MatListItem,
    MatList,
    NgForOf
  ],
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent {

}