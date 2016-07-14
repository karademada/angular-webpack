import SidePanelController from './sidepanel.controller';
const SidepanelComponent = {
    controller:SidePanelController,
    controllerAs:'sidepanel',
    template:`
        <aside class="aside-menu" flex>
        <div class="title" ng-click="sidepanel.closeMenu()">
            <img layout-padding src="assets/img/menu.png" />
        </div>
        <nav>

            <!-- TODO make dynamic with object and loop setting -->
            <ul>
                <li class="vision">
                    <a>
                        <span>Vision</span>
                    </a>
                </li>
                <li class="detail">
                    <a>
                        <span>Detailled View</span>
                    </a>
                <li class="manage">
                    <a>
                        <span>Manage assets</span>
                    </a>
                </li>
            </ul>
        </nav>
    </aside>
    `
};

export default SidepanelComponent;
