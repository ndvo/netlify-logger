exports.handler = async function(event, context) {
  console.log("Event:", event);
  return {
    statusCode: 200,
    body: JSON.stringify({ok: true, details: event})
  };
}
