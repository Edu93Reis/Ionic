import { Component } from '@angular/core';

import { FeedPage } from '../feed/feed';
import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';
import { SobrePage } from '../sobre/sobre';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FeedPage;
  tab3Root = PerfilPage;
  tab4Root = SobrePage;
  tab5Root = ConfiguracoesPage;

  constructor() {

  }
}
