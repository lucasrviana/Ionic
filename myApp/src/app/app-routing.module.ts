import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  // {
  //   path: 'configuracoes',
  //   loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  // },
  // {
  //   path: 'sobre',
  //   loadChildren: () => import('./sobre/sobre.module').then( m => m.SobrePageModule)
  // },
  // {
  //   path: 'perfil',
  //   loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  // },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
