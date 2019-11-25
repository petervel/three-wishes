const faunadb = require('faunadb'),
  q = faunadb.query;

exports.handler = (event, context, callback) => {
  const adminClient = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  })
  adminClient.query(
    q.CreateCollection({name: "wishes"})
  )

  adminClient.query(
    q.Paginate(q.Collections())
  )
  .then((ret) => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: ret }),
    })
  })
}
