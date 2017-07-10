app.config(function($httpProvider) {
    $httpProvider.interceptors.push("loadingInterceptor");
    $httpProvider.interceptors.push("unauthorizedInterceptor");
});
