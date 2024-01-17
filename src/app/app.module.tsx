import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

import { PanelComponent } from "./components/panel/panel.component";
import { ItemsListComponent } from "./components/items-list/items-list.component";
import { ItemsDetailComponent } from "./components/items-detail/items-detail.component";
import { AddItemsComponent } from "./components/add-items/add-items.component";
import { ItemdataService } from "./service/itemdata.service";

@NgModule({
    declarations: [
        AppComponent,
        PanelComponent,
        ItemsListComponent,
        ItemsDetailComponent,
        AddItemsComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        MatGridListModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        HttpClientModule,
    ],
    providers: [ItemdataService],
    bootstrap: [AppComponent]
})

export class Appmodule { }