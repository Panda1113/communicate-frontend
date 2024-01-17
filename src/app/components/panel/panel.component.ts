import { Component, OnInit, OnChanges, SimpleChange, ChangeDetectorRef } from '@angular/core';
import { ItemdataService } from '../../service/itemdata.service';
import { Item } from '../../service/itemdata.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})

export class PanelComponent implements OnInit {
  constructor(private itemService: ItemdataService, private cdr: ChangeDetectorRef) { }

  itemData: Item[] = []; //the variable to save value that get from server
  detailItemData: Item[] = [];

  ngOnInit(): void {
    this.itemService.getItems().subscribe((resData) => {
      this.itemData = resData;
    });
    this.cdr.detectChanges();
  }

  handleSendFromListPanel($resData:Item) {
    this.detailItemData = [];
    this.detailItemData.push($resData);
  }

  handleSendFromAddItemPanel($resData: Item) {
    const newData = $resData;
    this.itemService.addNewItem(newData).subscribe(($res: Item) => {
      this.itemData.push($res);
    });
  }

  handleSendFromItemDetailPanel($resData:string){
    const deleteId = $resData;
    this.itemService.deleteItem(deleteId).subscribe(($res:any)=>{
      const resdata = $res.data;
      this.detailItemData = [];
      this.itemData = resdata;
    }, (err)=>{console.error("Error" , err)});    
  }
}
