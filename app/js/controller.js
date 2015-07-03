SPA.Controller = Marionette.Controller.extend({
  initialize: function(options) {
    this._router = options.router;
    this._contacts = options.contacts;
    this._proxy = options.proxy;
  },

  showContacts: function() { 
    // レイアウトビュー
    var layoutView = new SPA.Views.LayoutView();
    // コントローラーレイアウトビュー
    var controllerLayoutView = new SPA.Views.ControllerLayoutView();

    // ソートビュー
    var sortView = new SPA.Views.SortView({
      collection: this._proxy
    });
    // パーページビュー
    var perpageView = new SPA.Views.PerpageView({
      collection: this._proxy
    });

    // サーチビュー
    var searchView = new SPA.Views.SearchView({
      collection: this._proxy
    });

    // ヘッダービュー
    var headerView = new SPA.Views.HeaderView();
    // コレクションビュー
    var contactsView = new SPA.Views.Contacts({
      collection: this._proxy
    });
    // ページネーションビュー
    var paginationView = new SPA.Views.paginationView({
      collection: this._proxy
    });

    // イベントリスニング
    this.listenTo(contactsView, 'addContact:clicked', this.newContact);
    this.listenTo(contactsView, 'childview:delete:clicked', function(contactView) {
      contactView.model.destroy();
    });
    this.listenTo(contactsView, 'childview:edit:clicked', function(contactView) {
      this.editContact(contactView.model.id);
    });

    // まずはレイアウトビューを先に表示させる
    SPA.mainRegion.show(layoutView); 
    // リージョンを別のビューで埋める
    layoutView.getRegion('header').show(headerView);
    layoutView.getRegion('content').show(contactsView);
    layoutView.getRegion('pagination').show(paginationView);

    // まずはコントローラーレイアウトビューを先に表示させる
    layoutView.getRegion('controller').show(controllerLayoutView);
    // コントローラーレイアウトビューのリージョンを別のビューで埋める
    controllerLayoutView.getRegion('search').show(searchView);
    controllerLayoutView.getRegion('perpage').show(perpageView);
    controllerLayoutView.getRegion('sort').show(sortView);


  
    this._router.navigate('contacts');
  },

  newContact: function() {
    var layoutView = new SPA.Views.LayoutView();

    var headerView = new SPA.Views.HeaderView();

    var newContactForm = new SPA.Views.ContactForm({
      model: new SPA.Models.Contact()
    });
    // イベントリスニング
    this.listenTo(newContactForm, 'form:submitted', function(attrs) {
      attrs.avatar = 'http://robohash.org/' + _.random(1, 15) + '?size=140x140';
      this._contacts.create(attrs);
      this.showContacts();
    });

    this.listenTo(newContactForm, 'form:canceled', this.showContacts);

    // まずはレイアウトビューを先に表示させる
    SPA.mainRegion.show(layoutView);
　　// リージョンを別のビューで埋める
   layoutView.getRegion('header').show(headerView);
   layoutView.getRegion('content').show(newContactForm);

    this._router.navigate('contacts/new');
  },

  editContact: function(id) {
    var layoutView = new SPA.Views.LayoutView();

    var headerView = new SPA.Views.HeaderView();


    var contact = this._contacts.get(id);
    var editContactForm;

    if (contact) {
      editContactForm = new SPA.Views.ContactForm({
          model: contact
      });
      // イベントリスニング
      this.listenTo(editContactForm, 'form:submitted', function(attrs) {
        contact.save(attrs);
        this.showContacts();
      });
      // イベントリスニング
      this.listenTo(editContactForm, 'form:canceled', this.showContacts);

      // まずはレイアウトビューを表示させる
      SPA.mainRegion.show(layoutView);
      // レイアウトビューのリージョンに個別のビューを表示させる
      layoutView.getRegion('header').show(headerView);
   　　layoutView.getRegion('content').show(editContactForm);

      this._router.navigate('contacts/edit/' + id);
    } else {
      this.showContacts();
    }
  }
});
