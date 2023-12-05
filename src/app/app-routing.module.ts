import {NgModule} from '@angular/core';
import {NoPreloading, RouterModule, Routes} from '@angular/router';
import {environment} from '@environment/environment';
import {AuthGuard} from '@core/auth.guard';

const GLOBAL_ROUTES: Routes = [
    {path: 'basic', loadChildren: () => import('@basic/basic.module').then(m => m.BasicModule)},
    {path: 'users', loadChildren: () => import('@users/users.module').then(m => m.UsersModule)},
    {
        path: 'signedin', canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        loadChildren: () => import('@signedin/signedin.module').then(m => m.SignedinModule)
    },
    {path: '', redirectTo: 'basic/homepage', pathMatch: 'full'},
    {path: '**', redirectTo: '/basic/homepage'},
];

// canActivate: [AuthGuard], canActivateChild: [AuthGuard]
@NgModule({
    imports: [
        RouterModule.forRoot(GLOBAL_ROUTES,
            {
                enableTracing: environment.routeTracing,
                preloadingStrategy: NoPreloading
            })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
