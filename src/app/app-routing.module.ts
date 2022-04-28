import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'trial',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'trial',
    loadChildren: () => import('./trial/trial.module').then(m => m.TrialPageModule)
  },
  {
    path: 'contest',
    loadChildren: () => import('./contest/contest.module').then( m => m.ContestPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'league',
    loadChildren: () => import('./league/league.module').then( m => m.LeaguePageModule)
  },
  {
    path: 'learning',
    loadChildren: () => import('./learning/learning.module').then( m => m.LearningPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
