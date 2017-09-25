import { Component } from '@angular/core';

import { Pagina2Page } from '../pagina2/pagina2';
import { Pagina3Page } from '../pagina3/pagina3';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Pagina2Page;
  tab3Root = Pagina3Page;

  constructor() {

  }
}
