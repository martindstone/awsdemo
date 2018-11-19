function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function send(routing_key, payload) {
	var desc = payload['description'] || 'unknown';
	var message = {
		type: "POST",
		dataType: "json",
		contentType: "application/json",
		headers: {
			"Accept": "application/vnd.pagerduty+json;version=2.0"
		},
		url: `https://events.pagerduty.com/integration/${routing_key}/enqueue`,
		data: JSON.stringify(payload),
		success: function(data) {
			$('#result').append(`Sent a ${desc} event to ${routing_key}<br>`);
		},
		error: function(jqXHR, textStatus, textError) {
			console.log(jqXHR);
			$('#result').append(`Error sending ${desc} event to ${routing_key}<br>`);
		}

	}
	
	$.ajax(message);
}

function populateSendSelects() {
	var station = $('#station-select').val();

	$('#payload-select').html('');
	$('#service-select').html('');
	$('#sequence-select').html('');

	$('#sequence-send-button').unbind("click");
	$('#send-button').unbind("click");

	Object.keys(payloads).forEach(function(name) {
		$('#payload-select').append($('<option/>', {
			value: name,
			text: name
		}));
	});
	$('#payload-select').selectpicker('refresh');

	Object.keys(services[station]).forEach(function(name) {
		$('#service-select').append($('<option/>', {
			value: services[station][name],
			text: name
		}));
	});
	$('#service-select').selectpicker('refresh');

	Object.keys(sequences[station]).forEach(function(name) {
		$('#sequence-select').append($('<option/>', {
			value: name,
			text: name
		}));
	});
	$('#sequence-select').selectpicker('refresh');

	$('#send-button').click(function() {
		var key = $('#service-select').val();
		var payload_name = $('#payload-select').val();
		send(key, payloads[payload_name]);
	});

	$('#sequence-send-button').click(function() {
		console.log(`oh hi ${station}: ${$('#sequence-select').val()}`);
		var sequence = sequences[station][$('#sequence-select').val()];
		sequence.forEach(function(event) {
			setTimeout(send, event['delay'] * 1000, event['routing_key'], event['payload']);
		});
	});
}

var station = getParameterByName("station");

function main() {
	$('.selectpicker').selectpicker();

	Object.keys(sequences).forEach(function(name) {
		$('#station-select').append($('<option/>', {
			value: name,
			text: name
		}));
	});
	$('#station-select').selectpicker('refresh');

	$('#station-select').change(function() {
		populateSendSelects();
	});
	populateSendSelects();
}

$(document).ready(main);
