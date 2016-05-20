(function() {
    var app = angular.module('website', []);
    
    app.controller('WebsiteController', function(){
        this.person = person;
        this.site = site;
        this.media = media;
        this.blog = blog;
    });
    
    app.controller("PanelController", function(){
        this.tab = 1;
        
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });
    
    var person = {
        name: 'Sean Anthony Miller',
        title: 'Software Engineer',
        phone: '484-336-3952',
        email: 'samiller2013@outlook.com',
        image: 'thumb.png',
        testurl: 'https://www.facebook.com/',
    };
    
    var site = {
        brand: 'smiller.io',
    };
    
    var media = [
        {
            name: 'twitter',
            image:'twitter.png',
            url:'https://www.twitter.com/',
        }, {
            name: 'facebook',
            image: 'facebook.png', 
            url:'https://www.facebook.com/',
        }, {
            name: 'linkedin',
            image: 'linkedin.png',
            url: 'https://www.linkedin.com/in/samiller13',
        }, {
            name: 'youtube',
            image: 'youtube.png',
            url: 'https://www.youtube.com/',
        }, {
            name: 'pinterest',
            image: 'pinterest.png',
            url: 'www.pinterest.com',
        }, {
            name: 'instagram',
            image: 'instagram.png',
            url: 'https://instagram.com/',
    }];
    
    var blog = [
        {
            title: "Test",
            snippet: "test snippet - brief introduction",
            body: "this is a test body of a blog message",
        },
        {
            title: "Test 2",
            snippet: "test snippet 2 - brief introduction",
            body: "this is a test body of a blog message 2",
    }];

})();