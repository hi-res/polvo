;(function(){
// POLVO :: HELPERS

// POLVO :: LOADER
function require(path, parent){
  var m, realpath;

  if(parent)
  {
    realpath = require.mods[parent].aliases[path];
    if(!realpath) realpath = require.virtual( path );
  }
  else
    realpath = path;

  if(!(m = require.mods[realpath]))
    return console.error('Module not found: ', path);

  if(!m.init)
  {
    m.factory.call(this, require.local(realpath), m.module, m.module.exports);
    m.init = true;
  }

  return m.module.exports;
}

require.mods = {}

require.local = function( path ){
  return function( id ) { return require( id, path ); }
}

require.register = function(path, mod, aliases){
  require.mods[path] = {
    factory: mod,
    aliases: aliases,
    module: {exports:{}}
  };
}

require.virtual = function(path) {
  for(var virtual in require.virtual.conf)
    if(path.indexOf(virtual) == 0)
      return require.virtual.conf[virtual] + path.match(/\/(.+)/)[0];
  return null;
}

require.virtual.conf = undefined;
// POLVO :: MERGED FILES
require.register('src/app', function(require, module, exports){
var nofound;

nofound = require('./not/existent');

}, {});
// POLVO :: INITIALIZER
require('src/app');
/*
//@ sourceMappingURL=data:application/json;charset=utf-8;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJhcHAuanMiLAogICJzZWN0aW9ucyI6IFsKICAgIHsKICAib2Zmc2V0IjogewogICAgImxpbmUiOjUxLAogICAgImNvbHVtbiI6MAogIH0sCiAgIm1hcCI6IHsKICAgICJ2ZXJzaW9uIjogMywKICAgICJmaWxlIjogImFwcC5qcyIsCiAgICAic291cmNlcyI6IFsic3JjL2FwcC5jb2ZmZWUiXSwKICAgICJzb3VyY2VzQ29udGVudCI6IFsibm9mb3VuZCA9IHJlcXVpcmUgJy4vbm90L2V4aXN0ZW50JyJdLAogICAgIm5hbWVzIjogW10sCiAgICAibWFwcGluZ3MiOiAiQUFBQSxJQUFBLEdBQUE7O0FBQUEsQ0FBQSxFQUFVLElBQVYsU0FBVSIKICB9Cn0KICBdCn0=
*/})()