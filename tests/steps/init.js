let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.restaurants_api   = "https://jh1zwe4wq8.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
  process.env.restaurants_table = "restaurants-dev-alan"
  process.env.AWS_REGION        = "eu-west-1"

  initialized = true
}

module.exports = {
  init
}

process.env.order_events_stream = 'orders-dev-alan'
process.env.restaurant_notification_topic = 'restaurants-dev-alan'
process.env.TEST_ROOT = 'https://jh1zwe4wq8.execute-api.eu-west-1.amazonaws.com/dev'
