// Obtiene timestamp de inicio y de fin
var request_start_time = context.getVariable('client.received.start.timestamp');
var request_end_time   = context.getVariable('system.timestamp');

// Obtiene tiempo total de la peticion 
var total_proxy_time = String(request_end_time-request_start_time);

//Asigna a variable de flujo
context.setVariable('latency', total_proxy_time);
