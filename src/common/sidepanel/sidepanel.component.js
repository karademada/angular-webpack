const SidepanelComponent = {
    template:`
        <aside class="aside-menu" flex style="background-color: #40403e">
        <div class="title" ng-click="littleMenu= !littleMenu">
            <img layout-padding src="assets/img/menu.png" />
        </div>
        <nav>

            <!-- TODO make dynamic with object and loop setting -->
            <ul>
                <li class="vision">
                    <a ui-sref="login">
                        <span>Vision</span>
                    </a>
                </li>
                <li class="detail">
                    <a ui-sref="login">
                        <span>Detailled View</span>
                    </a>
                <li class="manage">
                    <a ui-sref="manage-assets.home">
                        <span>Manage assets</span>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
    `
};

export default SidepanelComponent;
