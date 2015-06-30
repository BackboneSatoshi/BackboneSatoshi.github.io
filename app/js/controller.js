SPA.Controller = Marionette.Controller.extend({
  initialize: function(options) {
    this._router = options.router;
    this._contacts = options.contacts;

    this._contacts.fetch();

    if (this._contacts.isEmpty()) {
      this._createSampleData();
    }
    console.log("controller initialize")
  },

  showContacts: function() { 
  console.log("calling show contacts ");
    var layoutView = new SPA.Views.LayoutView();
    var headerView = new SPA.Views.HeaderView();
    var contactsView = new SPA.Views.Contacts({
      collection: this._contacts
    });

    // イベントリスニング
    this.listenTo(contactsView, 'addContact:clicked', this.newContact);
    this.listenTo(contactsView, 'childview:delete:clicked', function(contactView) {
      contactView.model.destroy();
    });
    this.listenTo(contactsView, 'childview:edit:clicked', function(contactView) {
      this.editContact(contactView.model.id);
    });

    SPA.mainRegion.show(layoutView); 
    layoutView.getRegion('header').show(headerView);
    layoutView.getRegion('content').show(contactsView);

    

    this._router.navigate('contacts');
  },

  newContact: function() {
    var newContactForm = new SPA.Views.ContactForm({
      model: new SPA.Models.Contact()
    });

    this.listenTo(newContactForm, 'form:submitted', function(attrs) {
      attrs.avatar = _.random(1, 15) + '.jpg';
      this._contacts.create(attrs);
      this.showContacts();
    });

    this.listenTo(newContactForm, 'form:canceled', this.showContacts);

    SPA.mainRegion.show(newContactForm);

    this._router.navigate('contacts/new');
  },

  editContact: function(id) {
    var contact = this._contacts.get(id),
        editContactForm;

    if (contact) {
      editContactForm = new SPA.Views.ContactForm({
          model: contact
      });

      this.listenTo(editContactForm, 'form:submitted', function(attrs) {
        contact.save(attrs);
        this.showContacts();
      });

      this.listenTo(editContactForm, 'form:canceled', this.showContacts);

      SPA.mainRegion.show(editContactForm);

      this._router.navigate('contacts/edit/' + id);
    } else {
      this.showContacts();
    }
  },

  _createSampleData: function() {
    _.each([
      {
        id: 1,
        name : 'Terrence S. Hatfield',
        tel: '651-603-1723',
        email: 'TerrenceSHatfield@rhyta.com',
        avatar: '1.jpg'
      },
      {
        id: 2,
        name : 'Chris M. Manning',
        tel: '513-307-5859',
        email: 'ChrisMManning@dayrep.com',
        avatar: '2.jpg'
      },
      {
        id: 3,
        name : 'Ricky M. Digiacomo',
        tel: '918-774-0199',
        email: 'RickyMDigiacomo@teleworm.us',
        avatar: '3.jpg'
      },
      {
        id: 4,
        name : 'Michael K. Bayne',
        tel: '702-989-5145',
        email: 'MichaelKBayne@rhyta.com',
        avatar: '4.jpg'
      },
      {
        id: 5,
        name : 'John I. Wilson',
        tel: '318-292-6700',
        email: 'JohnIWilson@dayrep.com',
        avatar: '5.jpg'
      },
      {
        id: 6,
        name : 'Rodolfo P. Robinett',
        tel: '803-557-9815',
        email: 'RodolfoPRobinett@jourrapide.com',
        avatar: '6.jpg'
      }], function(contact) {
        this._contacts.create(contact);
      }, this);
  }
});
