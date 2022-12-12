import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../routing/routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { AppGuard } from 'src/guards/app.guard';
import { ServSetsListComponent } from './serv-sets-list/serv-sets-list.component';

import { ServSetsAddComponent } from './serv-sets-add/serv-sets-add.component';

//import { environment } from '../environments/environment';
import { GroupedTableComponent } from './grouped-table/grouped-table.component';

import { jwtInterceptorProvider } from 'src/shared/jwt.interceptor';
import { A11yModule } from '@angular/cdk/a11y';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { ServFieldsComponent } from './serv-fields/serv-fields.component';
import { ServFieldsDialogComponent } from './serv-fields-dialog/serv-fields-dialog.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { GroupedbufPhysicalListComponent } from './groupedbuf-physical-list/groupedbuf-physical-list.component';
import { GroupedbufFieldsPhysicalListComponent } from './groupedbuf-fields-physical-list/groupedbuf-fields-physical-list.component';
import { EditgrbufsComponent } from './editgrbufs/editgrbufs.component';
import { EditGroupedPhysBuffsComponent } from './edit-grouped-phys-buffs/edit-grouped-phys-buffs.component';
import { GrphysBuffDialogComponent } from './grphys-buff-dialog/grphys-buff-dialog.component';
import { FullsyncintervalsDialogComponent } from './fullsyncintervals-dialog/fullsyncintervals-dialog.component';
import { GroupedbufLogicalListComponent } from './groupedbuf-logical-list/groupedbuf-logical-list.component';
import { EditGrLogicBuffComponent } from './edit-gr-logic-buff/edit-gr-logic-buff.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    ServSetsListComponent,
    ServSetsAddComponent,
    GroupedTableComponent,
    ServFieldsComponent,

    ServFieldsDialogComponent,

    AdminListComponent,

    GroupedbufPhysicalListComponent,

    GroupedbufFieldsPhysicalListComponent,

    EditgrbufsComponent,

    EditGroupedPhysBuffsComponent,

    GrphysBuffDialogComponent,

    FullsyncintervalsDialogComponent,

    GroupedbufLogicalListComponent,

    EditGrLogicBuffComponent
  ],
  entryComponents: [ServFieldsDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatInputModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [jwtInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
