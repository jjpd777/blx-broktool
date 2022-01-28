import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registro-final',
    loadChildren: () => import('./registro-final/registro-final.module').then( m => m.RegistroFinalPageModule)
  },
  {
    path: 'perfil-main',
    loadChildren: () => import('./perfil-main/perfil-main.module').then( m => m.PerfilMainPageModule)
  },
  {
    path: 'network',
    loadChildren: () => import('./network/network.module').then( m => m.NetworkPageModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then( m => m.PortfolioPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'propiedades',
    loadChildren: () => import('./propiedades/propiedades.module').then( m => m.PropiedadesPageModule)
  },
  {
    path: 'add-propiedad',
    loadChildren: () => import('./add-propiedad/add-propiedad.module').then( m => m.AddPropiedadPageModule)
  },
  {
    path: 'editar-propiedad',
    loadChildren: () => import('./editar-propiedad/editar-propiedad.module').then( m => m.EditarPropiedadPageModule)
  },
  {
    path: 'mis-propiedades',
    loadChildren: () => import('./mis-propiedades/mis-propiedades.module').then( m => m.MisPropiedadesPageModule)
  },
  {
    path: 'detalles-casa',
    loadChildren: () => import('./detalles-casa/detalles-casa.module').then( m => m.DetallesCasaPageModule)
  },
  {
    path: 'promocion-casa',
    loadChildren: () => import('./promocion-casa/promocion-casa.module').then( m => m.PromocionCasaPageModule)
  },
  {
    path: 'interes-casa',
    loadChildren: () => import('./interes-casa/interes-casa.module').then( m => m.InteresCasaPageModule)
  },
  {
    path: 'firma-casa',
    loadChildren: () => import('./firma-casa/firma-casa.module').then( m => m.FirmaCasaPageModule)
  },
  {
    path: 'entrega-casa',
    loadChildren: () => import('./entrega-casa/entrega-casa.module').then( m => m.EntregaCasaPageModule)
  },
  {
    path: 'add-cliente',
    loadChildren: () => import('./add-cliente/add-cliente.module').then( m => m.AddClientePageModule)
  },
  {
    path: 'mis-clientes',
    loadChildren: () => import('./mis-clientes/mis-clientes.module').then( m => m.MisClientesPageModule)
  },
  {
    path: 'editar-cliente',
    loadChildren: () => import('./editar-cliente/editar-cliente.module').then( m => m.EditarClientePageModule)
  },
  {
    path: 'detalles-cliente',
    loadChildren: () => import('./detalles-cliente/detalles-cliente.module').then( m => m.DetallesClientePageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'whatsapp',
    loadChildren: () => import('./whatsapp/whatsapp.module').then( m => m.WhatsappPageModule)
  },
  {
    path: 'clientes-archivados',
    loadChildren: () => import('./clientes-archivados/clientes-archivados.module').then( m => m.ClientesArchivadosPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },  {
    path: 'propiedades-archivadas',
    loadChildren: () => import('./propiedades-archivadas/propiedades-archivadas.module').then( m => m.PropiedadesArchivadasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
