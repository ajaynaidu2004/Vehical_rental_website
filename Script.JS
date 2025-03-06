$(document).ready(function() {
    function loadVehicles() {
        $.get("http://localhost:5000/api/vehicles", function(data) {
            $("#vehicles").html("");
            $("#vehicle").html("");
            data.forEach(vehicle => {
                $("#vehicles").append(`
                    <div class="vehicle">
                        <h3>${vehicle.name}</h3>
                        <p>$${vehicle.pricePerDay}/day</p>
                        <button class="rent-btn" data-vehicle="${vehicle.name}">Rent Now</button>
                    </div>
                `);
                $("#vehicle").append(`<option value="${vehicle.name}">${vehicle.name}</option>`);
            });
        });
    }
    loadVehicles();

    $("#bookingForm").submit(function(event) {
        event.preventDefault();
        $.post("http://localhost:5000/api/bookings", {
            name: $("#name").val(),
            vehicle: $("#vehicle").val(),
            days: $("#days").val()
        }, function(response) {
            $("#bookingMessage").text(response.message);
        });
    });
});
