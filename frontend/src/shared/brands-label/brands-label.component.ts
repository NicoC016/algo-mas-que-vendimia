import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brands-label',
  templateUrl: './brands-label.component.html',
  styleUrls: ['./brands-label.component.css']
})
export class BrandsLabelComponent {
  @Input() brandLabel:any;

}
