$('#btnNavbar').click(function() {
    $("#app").css({
        'marginLeft': '70vw',
        'position' : 'fixed',
        'transitionDuration' : '1s',
    });
});

$('#tutupMenu').click(function() {
    $("#app").css({
        'marginLeft': '0',
        'width' : '100vw',
        'transitionDuration' : '1s',    
    });
})

$('#cameraStart').hide();
$('#notifSukses').hide();
$('#error_already_data').hide();
$('#other_error').hide();
$('.closeRiwayat').hide();

$('#notifSukses').click(function() {
    $(this).css({
        'display': 'none',
    });
});

$('#other_error').click(function() {
    $(this).css({
        'display': 'none',
    });
});

$('#error_already_data').click(function() {
    $(this).css({
        'display': 'none',
    });
});

$('#riwayatScan').click(function() {
    
    $(this).css({
        'top' : '20%',
        'position' : 'fixed',
        'height' : '70vh',
        'width' : '100%',
        'z-index' : '999999999999999',
        'paddingTop' : '12px',
        'transitionDuration' : '1s',    
    })

    $('.closeRiwayat').show();
});

$('.closeRiwayat').click(function() {
    location.reload();
})