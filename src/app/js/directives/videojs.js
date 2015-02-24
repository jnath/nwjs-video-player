define(['./module', 'video-js', 'video-js-chromecast-nw'], function (directives, videojs) {
    directives.directive('videojs', function () {
      var linker = function (scope, element, attrs){
        var setup = {
          // 'techOrder' : ['html5', 'flash'],
          // 'controls' : true,
          // 'preload' : 'auto',
          // 'autoplay' : false,
          plugins: {
            chromecast: [
              { text: '1배속', rate: 1, selected: true },
              { text: '2배속', rate: 2 },
              { text: '4배속', rate: 4 },
              { text: '8배속', rate: 8 }
            ],
            // speed: [
            //   { text: '1배속', rate: 1, selected: true },
            //   { text: '2배속', rate: 2 },
            //   { text: '4배속', rate: 4 },
            //   { text: '8배속', rate: 8 }
            // ]
          }
        };

        attrs.id = 'videojs';
        attrs.class = 'video-js vjs-default-skin';
        element.attr('id', attrs.id);
        element.attr('class', attrs.class);
        element.attr('poster', 'http://video-js.zencoder.com/oceans-clip.png');
        var player = vjs(attrs.id, setup, function(){
          this.src('http://video-js.zencoder.com/oceans-clip.mp4');
        });
      };
      return {
          restrict : 'A',
          link : linker
      };
  });
});
