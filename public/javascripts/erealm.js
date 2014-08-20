/**
 * Copyright 2014 eRealm Sdn.Bhd.
 *
 * Created by dang on 2/08/2014
 */

var erealm = angular.module('erealm', ['ui.bootstrap','pascalprecht.translate','ngCookies']);
erealm.config(['$translateProvider', function($translateProvider){

    // Adding a translation table for the English language
    $translateProvider.translations('en', {
        //app/views/layouts/master.hbs
        "maintittle": "Erealm Info & Tech",
        "subtittle": "Hello, We are",

        //app/views/layouts/master.hbs
        "home": "HOME",
        "work": "WORK",
        "about": "ABOUT",
        "contact": "CONTACT",
        "ourlove": "WE LOVE SOFTWARE",
        "love.content1": "We create custom, web software.  We can help you navigate technical complexity to solve your problems and see your ideas evolve into working solutions.  We designing and rolling out custom enterprise and web-based solutions across the world.",
        "love.content2":"We understand the challenges and opportunities your business faces. And it’s our business to help you succeed, while saving you time and money. We keep technology simple, but offer expert help and resources should you need them.",
        "learnaboutus":"Learn more about us ›",

        //app/views/index.hbs
        "say.hello": "SAY HELLO",
        "say.content": "We’d love to hear from you and answer any questions you may have. Send us an email, complete our project planner, stay in touch and follow us on twitter.",
        "follow.us":"Follow us on Twitter",
        "submit": "Submit your project plan to us",
        "what.welove":"WHAT WE LOVE",
        "love.one": "We love learning, developing and pushing ourselves and we embrace the latest ideas through lots of industry reading and conference-going.",
        "love.two": "We love Java, C#, Object C, JavaScript, CSS, HTML language. We use Jquery, AngularJs, Node.js, Express, Asp.net, JSP,MSSQL, MySQL, Oracle, MongoDB, Couchbase to create web site",
        "love.three": "We love Apple products. We use our Macbooks Pros, iPads and iPhones for work because we love using beautifully designed things.",
        "love.four": "We love being a professional team and working directly with you on all your projects. We love to talk and discover your ideas.",
        "how.help": "Learn how we can help your startup take off.",
        "touch.us": "Get in touch with us ›",
        "copyright": "© Copyright Erealm Info & Tech Sdn Bhd. 2014-2014. · All rights reserved. Registered in Malaysia · Company number 1090229-T",
        "powerby": "Code licensed under the The MIT License. Powered by ",
        "by.name": "Erealm"
    });

    // Adding a translation table for the Russian language
    $translateProvider.translations('cn', {
        //app/views/layouts/master.hbs

        "maintittle": "西安瑞木信息技术有限公司",
        "subtittle": "您好，我们是",

        //app/views/layouts/master.hbs
        "home": "主页",
        "work": "公司项目",
        "about": "关于我们",
        "contact": "联系我们",
        "ourlove": "我们热爱软件",
        "love.content1": "我们开发自定义,网络软件。我们可以引导您克服复杂的技术难题来解决你的问题,将您的想法变成工作的解决方案。我们设计和推出定制世界各地企业和基于web的解决方案。",
        "love.content2":"我们理解您的业务面临的挑战和机遇。我们的业务将帮助您成功,同时也节约您的时间和金钱。我们让技术简单,但是提供专家的帮助和资源是您一定需要的。",
        "learnaboutus":"关于我们了解更多 ›",

        //app/views/index.hbs
        "say.hello": "您好",
        "say.content": "我们很想听听并回答您有可能问的的任何问题。发封邮件给我们,完成我们的项目计划,并在twitter上保持联系。",
        "submit": "向我们提交您的项目计划",
        "what.welove":"我们热爱",
        "love.one": "我们爱学习、发展和通过大量的阅读和利用经常外出开会时间发展和实现我们的最新想法。",
        "love.two": "我们热爱 Java, C#, Object C, JavaScript, CSS, HTML language.我们使用 Jquery, AngularJs, Node.js, Express, Asp.net, JSP,MSSQL, MySQL, Oracle, MongoDB, Couchbase to create web site",
        "love.three": "我们热爱苹果的产品。我们使用macbook优点,ipad和iphone的工作,因为我们喜欢使用设计精美的东西。",
        "love.four": "我们作为一个专业的团队和直接为你所爱的的项目工作。我们喜欢交谈和发现你的想法。",
        "how.help": "了解我们，助您成功",
        "touch.us": "联系我们 ›",
        "copyright": "© Copyright 西安瑞木信息技术有限公司 2014-2014。版权所有。马来西亚公司注册号码  1090229-T",
        "powerby": "MIT许可",
        "by.name": "西安瑞木信息技术有限公司注册",
    });

    // Tell the module what language to use by default
    $translateProvider.preferredLanguage('en');

    // Tell the module to store the language in the cookie
    $translateProvider.useCookieStorage();

}]);
// window scroll event.
erealm.directive("scroll", function ($window) {
    return function(scope) {
        angular.element($window).bind("scroll", function() {
            scope.showFixedHeader = ($window.document.body.scrollTop > 280);
            scope.$apply();
        });
    };
});

