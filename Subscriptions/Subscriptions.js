function ReportSubscriptionCtl($scope, $http) {
    /// Add your stuff here
    var vm = $scope;
    vm.ReportsSubcriptionList = 'Subscription List';
    vm.AddButton =true;
    vm.ClearButton = true;


      vm.readSubscriptionList = function () {
        spcrud.read($http, vm.ReportsSubcriptionList).then(function (resp) {
            if (resp.status === 200)
                var myJSON = JSON.stringify(resp.data.d.results);
            vm.SubscriptionListItems = resp.data.d.results;
        }, function (error) {
            console.log('error', error);
        });

    };
     vm.readSubscriptionList();
/*-------------------------------------------------- Claer Form -----------------------------------------------  */
      vm.claer = function () {
        vm.Sub = null;
        // vm.SaveButton = vm.SaveButton ? false : false;
        // vm.IsVisible = vm.IsVisible ? false : false;
        // vm.AddButton = vm.AddButton ? true : true;
    }
/*-------------------------------------------------- End -----------------------------------------------  */    
}

angular.module('ReportSubscriptionApp', []).controller('ReportSubscriptionCtl', ReportSubscriptionCtl);