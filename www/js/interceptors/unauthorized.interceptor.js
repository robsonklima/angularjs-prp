app.factory("unauthorizedInterceptor", function ($q, $location) {
	return {
		responseError: function (rejection) {
			if (rejection.status === 401) {
				$location.path("login");
			}
			return $q.reject(rejection);
		}
	};
});