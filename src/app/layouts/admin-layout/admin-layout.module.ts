import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AjouterClientComponent } from '../../client/ajouter-client/ajouter-client.component';
import { ClientComponent } from '../../client/client.component';
import {MatSelectModule} from '@angular/material/select';
import { AjouterPrivilegeComponent } from '../../privileges/ajouter-privilege/ajouter-privilege.component';
import { ModifierPrivilegeComponent } from '../../privileges/modifier-privilege/modifier-privilege.component';
import { PrivilegesComponent } from '../../privileges/privileges.component';
import { AjouterUtilisateurComponent } from '../../utilisateurs/ajouter-utilisateur/ajouter-utilisateur.component';
import { ModifierUtilisateurComponent } from '../../utilisateurs/modifier-utilisateur/modifier-utilisateur.component';
import { UtilisateursComponent } from '../../utilisateurs/utilisateurs.component';
import { DossierComponent } from '../../dossier/dossier.component';
import { FichierComponent } from '../../fichier/fichier.component';
import { ModalModule } from 'ngx-bootstrap/modal';





// we need to import the menu trigger
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  imports: [


    MatMenuModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
    MatSelectModule,
    ModalModule.forRoot(),


  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    ClientComponent,
    AjouterClientComponent,
    UtilisateursComponent,
    AjouterUtilisateurComponent,
    ModifierUtilisateurComponent,
    PrivilegesComponent,
    AjouterPrivilegeComponent,
    ModifierPrivilegeComponent,
    DossierComponent,
    FichierComponent

  ]
})

export class AdminLayoutModule {}
