import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ClientComponent } from '../../client/client.component';
import { AjouterClientComponent } from '../../client/ajouter-client/ajouter-client.component';
import { DossierComponent } from '../../dossier/dossier.component';
import { FichierComponent } from '../../fichier/fichier.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'client',         component: ClientComponent },
    { path: 'client/ajouter',  component: AjouterClientComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'drive',         component: DossierComponent },
    { path: 'fichier',        component: FichierComponent },
    { path: 'table',        component: TableListComponent }

];
