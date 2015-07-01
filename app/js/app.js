// ネームスペース
var SPA = new Marionette.Application({
  Models: {},
  Collections: {},
  Views: {}
});

SPA.addRegions({
  mainRegion: "#base"
});

SPA.addInitializer(function(data) {
  // コレクションの初期化
  var contacts = new SPA.Collections.Contacts();
  // Backbone.Obscuraでコレクションをプロキシーする
  var proxy = new Backbone.Obscura(contacts);
  // デフォルトで１ページあたりのmodelの表示量を決める
  proxy.setPerPage(8);

  // ルーターの初期化
  var router = new SPA.Router();

  // コントローラーの初期化
  var controller = new SPA.Controller({
        contacts: contacts,
        proxy: proxy,
        router: router
      });

　//ルーティング処理
  router.processAppRoutes(controller, {
    'contacts': 'showContacts',
    'contacts/new': 'newContact',
    'contacts/edit/:id': 'editContact'
  });

 
});


SPA.on('start', function(options){
  if (Backbone.history){
    console.log("history start");
    Backbone.history.start();
  }

});
