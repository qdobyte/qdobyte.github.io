$(document).ready(function () {
    changeAction ();
    });


function changeAction () {
    var page = $('#select1 option:selected').val();
    $('#form').attr('action','lvl'+page+'.html');
}
