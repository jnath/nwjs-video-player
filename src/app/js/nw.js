var isNode = typeof global == "object" && {}.toString.call(global) == '[object global]';

if(isNode){
    if(process.env.DEBUG){
      require('nw.gui').Window.get().showDevTools();
    }

    // process.on('uncaughtException', function(err) {
    //   console.log(err);
    // });
}