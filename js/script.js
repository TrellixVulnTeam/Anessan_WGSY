let waypoint = new Waypoint({

    element: document.getElementById('waypoint'),

    handler: function(direction) {
      let navButton = document.querySelector('._anim-items')
      if(direction === 'down') {
        navButton.classList.add('_active')
      } else {
        navButton.classList.remove('_active');
      }
    },

    offset: -50
  })