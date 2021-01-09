$('#inputc').on('input', function (e) {
    $("#numcarte").html($(this).val());
});
document.getElementById('inputc').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
});