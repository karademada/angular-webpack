const SubHeaderComponent = {
    template:`
        <md-toolbar class="subheader">
            <div class="md-toolbar-tools" layout="row" layout-xs="column" flex>
                <span flex="none">Don't forget to</span>
                <span class="text-link" fex="none">update your assets !</span>
                <span class="separator-sub"></span>
                <span class="date"> View at </span>
                <md-datepicker class="myDatePicker" ng-model="myDate" md-placeholder="Enter date"
                               md-min-date="minDate" md-max-date="maxDate"></md-datepicker>
                <span class="separator-sub"></span>
                <span class="currency">Currency</span>
                <form name="currencyForm" novalidate>
                    <md-input-container class="currency">
                        <md-select ng-model="app.currency" placeholder="EURO">
                            <md-option ng-repeat="state in subheader.currencies" value="{{state.id}}">
                                {{state.country}}
                            </md-option>
                        </md-select>
                    </md-input-container>
                </form>

                <span class="separator-sub"></span>
                <md-switch layout-padding class="md-primary" ng-model="data.cb" aria-label="change currency"
                           ng-change="subheader.changePercent(data)">
                    %
                </md-switch>
                <span flex></span>
                <span class="separator-sub"></span>
                <span class="text-link">Print</span>
            </div>
        </md-toolbar>
    `
};

export default SubHeaderComponent;
