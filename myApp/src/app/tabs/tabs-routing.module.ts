import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../feed/feed.module').then(m => m.FeedPageModule)
          }
        ]
      },
      {
        path: 'configuracoes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../configuracoes/configuracoes.module').then(m => m.ConfiguracoesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'home/tabs/feed',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home/tabs/feed',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
