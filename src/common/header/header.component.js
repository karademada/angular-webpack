const HeaderComponent = {
    template:`
        <md-content layout="row" ng-cloak>
            <md-toolbar>
                <div class="md-toolbar-tools">
                    <img class="logo" src="../assets/img/logo-bgl.png" layout-fill-gt="20"/>
                    <span flex></span>
                    <span class="bank-label">My Bank </span>
                    <span class="bank-separator"> : </span>
                    <span>(+352) 42 42-65 01</span>
                    <span class="separator"></span>
                    <span class="text-link">Logout</span>
                </div>
            </md-toolbar>
        </md-content>
    `
};

export default HeaderComponent;
