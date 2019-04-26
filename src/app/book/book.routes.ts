
import {Routes} from "@angular/router";
import { BookListcomponent } from './book-list.component';
import { BookDetailsComponent } from './book-details.component';

export const bookRoutes:Routes=[

    {path:"books/:category" ,component:BookListcomponent},
    {path:"book/:bookId",component:BookDetailsComponent}
];