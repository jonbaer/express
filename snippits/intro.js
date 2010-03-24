require.paths.unshift('path/to/express/lib')
require('express')

get('/', function(){
  this.redirect('/hello/world')
})

get('/hello/world', function(){
  return 'Hello World'
})

run()