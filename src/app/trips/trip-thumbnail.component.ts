import { Component, Input } from '@angular/core';
import {DataStorageService} from '../services/data-storage.service';
import {Trips} from '../models/trips';

@Component({
  selector: 'trip-thumbnail',
  templateUrl: './trip-thumbnail.component.html',
  styleUrls: ['./trip-thumbnail.component.css']
})
export class TripThumbnailComponent {
  constructor(private dataService: DataStorageService) {}
  @Input() trip: any;
  handleClickMe() {
    (this.dataService.getItems().subscribe((trips: Trips[]) => {console.log(trips);}));
  }
}
