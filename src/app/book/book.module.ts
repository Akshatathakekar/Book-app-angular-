import { NgModule } from '@angular/core';
import { Browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';
import { BookListcomponent } from './book-list.component';
import { BookDetailsComponent } from './book-details.component';
import { RouterModule } from '@angular/router';
import { bookRoutes } from './book.routes';
import { HttpClientModule} from '@angular/common/http';
import { BookService } from './book.service';

@NgModule({

    declarations:[
        BookListcomponent,
        BookDetailsComponent
    ],
    imports:[
        BrowserModule,
        RouterModule.forChild(bookRoutes),
        HttpClientModule
    ],
    exports:[
        BookListcomponent,
        BookDetailsComponent,
        RouterModule
    ],
    providers:[BookService]
})
export class BookModule{

}