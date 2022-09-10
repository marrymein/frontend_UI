$(document).ready(function(){
    // click by next and prev btn

//---------------- next btn 
$('#n-form2').click(function(){
    $('#form-1').hide();
    $('#form-2').show();
    $('#form-3').hide();
    $('#form-4').hide();
    $('#basic').removeClass('active');
    $('#personal').addClass('active');
    $('#residential').removeClass('active');
    $('#family-bg').removeClass('active');
    
})
$('#n-form3').click(function(){
    $('#form-1').hide();
    $('#form-2').hide();
    $('#form-3').show();
    $('#form-4').hide();
    $('#basic').removeClass('active');
    $('#personal').removeClass('active');
    $('#residential').addClass('active');
    $('#family-bg').removeClass('active');
})
$('#n-form4').click(function(){
    $('#form-1').hide();
    $('#form-2').hide();
    $('#form-3').hide();
    $('#form-4').show();
    $('#basic').removeClass('active');
    $('#personal').removeClass('active');
    $('#residential').removeClass('active');
    $('#family-bg').addClass('active');
})
// ----------- prev btn
$('#p-form1').click(function(){
    $('#form-1').show();
    $('#form-2').hide();
    $('#form-3').hide();
    $('#form-4').hide();
    $('#basic').addClass('active');
    $('#personal').removeClass('active');
    $('#residential').removeClass('active');
    $('#family-bg').removeClass('active');
})
$('#p-form2').click(function(){
    $('#form-1').hide();
    $('#form-2').show();
    $('#form-3').hide();
    $('#form-4').hide();
    $('#basic').removeClass('active');
    $('#personal').addClass('active');
    $('#residential').removeClass('active');
    $('#family-bg').removeClass('active');
})
$('#p-form3').click(function(){
    $('#form-1').hide();
    $('#form-2').hide();
    $('#form-3').show();
    $('#form-4').hide();
    $('#basic').removeClass('active');
    $('#personal').removeClass('active');
    $('#residential').addClass('active');
    $('#family-bg').removeClass('active');
})






// click on nav
$('#basic').click(function(){
    $('#form-1').show();
    $('#form-2').hide();
    $('#form-3').hide();
    $('#form-4').hide();
    $('#basic').addClass('active')
    $('#personal').removeClass('active')
    $('#residential').removeClass('active')
    $('#family-bg').removeClass('active')
})
$('#personal').click(function(){
    $('#form-1').hide();
    $('#form-2').show();
    $('#form-3').hide();
    $('#form-4').hide();
    $('#basic').removeClass('active')
    $('#personal').addClass('active')
    $('#residential').removeClass('active')
    $('#family-bg').removeClass('active')
})
$('#residential').click(function(){
    $('#form-1').hide();
    $('#form-2').hide();
    $('#form-3').show();
    $('#form-4').hide();
    $('#basic').removeClass('active')
    $('#personal').removeClass('active')
    $('#residential').addClass('active')
    $('#family-bg').removeClass('active')
})
$('#family-bg').click(function(){
    $('#form-1').hide();
    $('#form-2').hide();
    $('#form-3').hide();
    $('#form-4').show();
    $('#basic').removeClass('active')
    $('#personal').removeClass('active')
    $('#residential').removeClass('active')
    $('#family-bg').addClass('active')
})





})
