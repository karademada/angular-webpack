import AppController from './app.controller';

const AppComponent = {
    controller:AppController,
    controllerAs:'app',
    template:`
    <header></header>
    <subheader></subheader>
    <main layout="row" flex ng-class="{'little-menu':littleMenu}">
        <sidepanel flex="15" style="background-color: #40403e"></sidepanel>
            <div style="background-color: #f3eeea" flex>
                <img src="assets/img/sub-menu-back.png" height="150" alt="submenu background" style="width: 100%;vertical-align:bottom" ng-click="app.clickMenu()" />
                <span class="category-nav" layout="row" layout-padding>
                    <span flex>< BY GEOGRAPHY</span>
                    <span>BY ASSET > </span>
                </span>
                <span class="state-label" layout="row" layout-align="center center">GLOBAL WEATLH</span>

                <div class="bgl-breadcrumb">
                    <md-icon md-svg-icon="assets/img/ic_home_black_24px.svg" style="color: #009926;position: absolute;top: 30px;left: 5px"></md-icon>
                    <div class="breadcrumbs" ncy-breadcrumb ncy-breadcrumb-separator="> "></div>
                </div>
                <section flex>
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

