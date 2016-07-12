const AppComponent = {
    template:`
    <header></header>
    <subheader></subheader>
    <main layout="row" flex ng-class="{'little-menu':littleMenu}">
        <sidepanel flex="15"></sidepanel>
        <div flex>
            <div class="submenu" flex>
            <span class="category-nav" layout="row" layout-padding>
                <span flex>< BY GEOGRAPHY</span>
                <span>BY ASSET > </span>
            </span>
            <h2 class="state-label" layout="row" layout-align="center center">GLOBAL WEATLH</h2>
            </div>
            <div class="bgl-breadcrumb">
                <md-icon md-svg-icon="assets/img/ic_home_black_24px.svg"></md-icon>
                <div class="breadcrumbs" ncy-breadcrumb ncy-breadcrumb-separator="> "></div>
            </div>
            <section flex layout-padding>
                <article>
                    <ui-view></ui-view>
                </article>
            </section>
        </div>
    </main>
     <footer layout-fill>
            <div layout="row" layout-align="center center" layout-padding>
                <span>VISION</span>
                <span>DETAILED VIEW</span>
                <span>MANAGE ASSETS</span>
            </div>
            <md-divider layout-padding></md-divider>
            <div class="cgv" layout="row" layout-align="center center" layout-padding>
                <span>Plan du site</span>
                <span class="separator"></span>
                <span>Mentions légales</span>
                <span class="separator"></span>
                <span class="reset">Politique Cookies</span>
            </div>
            <p layout="row" layout-align="center center">@ 2016 by bglbnpparibas</p>
     </footer>
  `
};

export default AppComponent;
