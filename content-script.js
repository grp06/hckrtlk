$( document ).ready(function() {
    var navLinks = $('.nav-links')
    console.log(navLinks)

    var ref = new Firebase("https://hckrtlk.firebaseio.com");
    var linksRef = ref.child('clickedLinks');
    var url = window.location.href;


    linksRef.on('value', function(snapshot) {

        console.log('snapshot = ', snapshot)
    });


      firebase.database().ref('clickedLinks/').set({
        url: url
      });
    



    console.log('ref == ', ref)
});