import Ember from 'ember';

var rentals = [{
  id: 1,
  title: 'Xavier Institute for Higher Learning',
  owner: 'Professor Charles Francis Xavier',
  city: 'North Salem',
  type: 'Estate',
  bedrooms: 52,
  image: 'http://41.media.tumblr.com/tumblr_m6pmkg33Ut1ravedjo1_500.png'
}, {
  id: 2,
  title: 'Wayne Manor',
  owner: 'Bruce Wayne',
  city: 'Gotham',
  type: 'Mansion',
  bedrooms: 23,
  image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Wollaton_Park_MMB_07.jpg'
}, {
  id: 3,
  title: 'Grand Old Mansion',
  owner: 'Veruca Salt',
  city: 'San Francisco',
  type: 'Estate',
  bedrooms: 15,
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}];
export default Ember.Route.extend({
  model() {
    return rentals;
  }
});
