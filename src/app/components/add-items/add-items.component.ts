import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemdataService } from '../../service/itemdata.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrl: './add-items.component.scss',
})
export class AddItemsComponent implements OnInit {
 @Output() sendToParent = new EventEmitter();

  newItem = {_id:'',  title: '', description: '' };
  constructor(private itemDataService: ItemdataService) { }

  ngOnInit(): void {

  }

  initializeData() {
    this.newItem = {_id:'',  title: '', description: '' }
  }

  handleClickAddNewItems() {
    this.sendToParent.emit(this.newItem);
    this.initializeData();
  }
}
