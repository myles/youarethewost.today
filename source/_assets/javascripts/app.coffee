#= require google-analytics

$(document).ready ->
  GoogleAnalytics.init 'UA-1642439-38'

  $('a[href^="http://"],a[href^="https://"]')
      .not("[href*='#{location.hostname}']")
      .click (e) ->

    GoogleAnalytics.trackEvent 'external', 'click', $(this).attr('href')

  if YouAreTheWorstTodayDetails.date
    date_year = YouAreTheWorstTodayDetails.date.substring(0, 4)
    date_month = YouAreTheWorstTodayDetails.date.substring(0, 7)
    date_day = YouAreTheWorstTodayDetails.date.substring(0, 10)

    GoogleAnalytics.trackEvent 'year', date_year, 'Year'
    GoogleAnalytics.trackEvent 'month', date_month, 'Month'
    GoogleAnalytics.trackEvent 'day', date_day, 'Day'

  SVGInjector jQuery('.iconic')

  jQuery('h1').slabText({fontRatio: 0})
  jQuery('h2').slabText({fontRatio: 0})

  return
