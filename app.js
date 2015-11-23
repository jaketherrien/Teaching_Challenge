// Create a generic function to log the response from Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

// Create a new instance of the Mandrill class from the mandrill
// library. It takes one parameter, your API key.

var m = new mandrill.Mandrill('your_API_key');

// Ping your Mandrill account using the users/ping method

m.users.ping(function(res) {
    log(res);
    }, function(err) {
    log(err);
    });