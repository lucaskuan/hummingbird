HB.Router.reopen({
  location: 'history'
});

HB.Router.map(function() {
  this.resource('anime', {path: '/anime/:id'}, function() {
    this.resource('episodes', {path: '/episodes'}, function () {
       this.route('show', {path: '/:episode_id'});
    });
    this.resource('reviews', {path: '/reviews'}, function() {
      this.route('show', {path: '/:review_id'});
    });
  });

  this.resource('manga', {path: '/manga/:id'}, function() {
    this.route('reviews');
  });

  this.resource('user', {path: '/users/:id'}, function() {
    this.route('library');
    this.route('manga_library', {path: 'library/manga/'});
    this.route('reviews');
    this.route('following');
    this.route('followers');
  });

  this.route('sign-in');
  this.route('settings');
  this.route('dashboard');
  this.route('notifications');

  this.route('chat');
  this.route('apps');
  this.route('search');

  this.route('privacy');
  this.route('kotodama');
});
