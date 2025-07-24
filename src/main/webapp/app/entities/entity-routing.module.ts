import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'pessoa',
        data: { pageTitle: 'gatewayMiniCursoApp.minicursoPessoa.home.title' },
        loadChildren: () => import('./minicurso/pessoa/pessoa.module').then(m => m.MinicursoPessoaModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
