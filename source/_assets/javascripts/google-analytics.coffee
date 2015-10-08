root = exports ? this
root._gaq = [['_setAccount', 'UA-1642439-38'], ['_trackPageview']]

insertGAScript = ->
  ga = document.createElement 'script'
  ga.type = 'text/javascript'
  ga.async = true

  proto = document.location.protocol
  proto = if (proto is 'https:') then 'https://ssl' else 'http://www'
  ga.src = "#{proto}.google-analytics.com/ga.js"
  
  s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore ga, s

insertGAScript()