/***  App JS  ***/

function PrintElem(elem)
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=100%');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}

function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}

$(document).ready(function() {
  $(".select2").select2();
});

// Time Picker Minute //
  $('#limit').timepicker({
                minuteStep: 1,
                appendWidgetTo: 'body',
                showSeconds: true,
                showMeridian: false,
                defaultTime: false
            });

// Date Picker //
$('#datepicker').datepicker({
    format: 'dd-mm-yyyy',
     defaultDate: new Date()
});

$('#deadline_picker').datepicker({
    format: 'dd-mm-yyyy',
    defaultDate: new Date()
});

/*****   Featured Products Classes   *****/
$('#featured').on('change', function() {
  var params = $( "#featured" ).val();
    var paramsfeatured = params.split('---');
     //alert( paramsfeatured);
     $("#featured_price_1").val( paramsfeatured[1]);
     $("#product_id_1").val( paramsfeatured[5]);

        var totalPoints = 0;
        var featured_qty_1 =  $('#featured_qty_1').val();
        var featured_price_1 = $('#featured_price_1').val();
        totalPoints += featured_qty_1*featured_price_1;
     $("#featured_total_1").val(parseFloat( totalPoints ).toFixed(2) );
})

/** SKU Check  **/
     $('.skucheck').change(function() {
        var sku = $( "#skucheck" ).val();

        $sku = $( "#skucheck" ).val();
        $.ajax({
      url: '/products/'+sku+'/skucheck',
      dataType:'JSON',
        success: function(data){
           if(data === undefined)
           {
              //$("#skuexist").html("<span>"+data.description+"</span>");

           }else{

                $("#skuexist").html("<span>"+data.description+"</span>");
                
           }
        }
    });
 });     

function update_featured()
    {
        var totalPoints = 0;
        var featured_qty_1 =  $('#featured_qty_1').val();
        var featured_price_1 = $('#featured_price_1').val();
        totalPoints += featured_qty_1*featured_price_1;
         $("#featured_total_1").val(parseFloat( totalPoints ).toFixed(2) );
    
    }

    $('#featured_2').on('change', function() {
    var params = $( "#featured_2" ).val();
    var paramsfeatured = params.split('---');
     //alert( paramsfeatured[1]);
     $("#featured_price_2").val( paramsfeatured[1]);
     $("#product_id_2").val( paramsfeatured[5]);

        var totalPoints = 0;
        var featured_qty_2 =  $('#featured_qty_2').val();
        var featured_price_2 = $('#featured_price_2').val();
        totalPoints += featured_qty_2*featured_price_2;
     $("#featured_total_2").val(parseFloat( totalPoints ).toFixed(2) );
})

function update_featured_2()
    {
        var totalPoints = 0;
        var featured_qty_2 =  $('#featured_qty_2').val();
        var featured_price_2 = $('#featured_price_2').val();
        totalPoints += featured_qty_2*featured_price_2;
         $("#featured_total_2").val(parseFloat( totalPoints ).toFixed(2) );
    
    }
$('#featured_3').on('change', function() {
  var params = $( "#featured_3" ).val();
    var paramsfeatured = params.split('---');
     //alert( paramsfeatured[1]);
     $("#featured_price_3").val( paramsfeatured[1]);
     $("#product_id_3").val( paramsfeatured[5]);

        var totalPoints = 0;
        var featured_qty_3 =  $('#featured_qty_3').val();
        var featured_price_3 = $('#featured_price_3').val();
        totalPoints += featured_qty_2*featured_price_3;
     $("#featured_total_3").val(parseFloat( totalPoints ).toFixed(2) );
})


function update_featured_3()
    {
        var totalPoints = 0;
        var featured_qty_3 =  $('#featured_qty_3').val();
        var featured_price_3 = $('#featured_price_3').val();
        totalPoints += featured_qty_3*featured_price_3;
         $("#featured_total_3").val(parseFloat( totalPoints ).toFixed(2) );
    
    }
//***  End featured    ***//
/*** take procedure type id ***/
$('#proceduretype_id').on('change', function() {
    var num = $( "#proceduretype_id" ).val();
    var numparm = num.split('---');
     $("#proceduretype_num").val(parseFloat( numparm[1] ).toFixed(2) );
})
/*** end procedure type id ***/

/***  sum all total featured  ***/
function update_sum_featured_ant_total()
{
    var all_total = 0;
    var featured_1  = Number($('#featured_total_1').val());
    var featured_2  = Number($('#featured_total_2').val());
    var featured_3  = Number($('#featured_total_3').val());
    
    all_total += all_total+featured_1+featured_2+featured_3;
    
    $('#featured_total_all').val(parseFloat( all_total ).toFixed(2));

}
/***  end  total featured  ***/
function take_featured_vat()
{
    var featured_all = Number($('#featured_total_all').val());
    var featured_inc =  featured_all*1.24;
    $('#featured_total_all_inc').val(parseFloat( featured_inc ).toFixed(2));
}
function take_featured_inc_vat()
{
    var featured_all = Number($('#featured_total_all').val());
    var featured_inc = Number($('#featured_total_all_inc').val());
    var featured_vat_only = featured_inc-featured_all
    $('#featured_total_all_fpa').val(parseFloat( featured_vat_only ).toFixed(2));
}
/***  Hide Un Hide Extra Featured ***/
$('#extra_p').click(function() {
    if( $(this).is(':checked')) {
        $("#extra_prod").show();
       
    } else {
        $("#extra_prod").hide();
    }
}); 
$(document).on("change","#order_form input",function(){
        
        var subtotal  = 0;
        var $tr    = $(this).closest( "tr" );
        var $table = $tr.closest( "table" );

        var qty    = parseInt( $tr.find('.form_qty').val(), 10 );
        var price  = $tr.find('.form_price').val();
        var fpa    = parseInt( $tr.find('.form_row_vatperc').val(), 10 );
        var disq   = $tr.find('.form_row_disq').val();

        subtotal = qty*price;
        disqtotal = 0;
        disqtotal = (disq / 100)*price;

        fpaline = subtotal*fpa /100;

        subtotaldiq = subtotal-disqtotal;
        $tr.find('.form_row_total').val( parseFloat( subtotaldiq ).toFixed(2) );
        $tr.find('.form_row_vattotal').val( parseFloat( fpaline ).toFixed(2) );

        update_total();
        update_fpa_total();
        update_inc_total();
        update_sum_featured_ant_total();


    });

    $('.form-control').change(function() {
        update_total();
        update_fpa_total();
        update_inc_total();
        update_featured();
        update_featured_2();
        update_featured_3();
        update_sum_featured_ant_total();
        update_total();
        update_fpa_total();
        update_inc_total();
        update_sum_featured_ant_total();
        take_featured_vat();
        take_featured_inc_vat();
        
    });

    function update_total()
    {
        var sum = 0;
        var feattured_total = Number($('#featured_total_all').val());
        $('.form_row_total').each(function() {
            var subtotal  =  parseFloat( $(this).val() );
            sum = sum + subtotal+feattured_total;
        });
        //just update the total to sum
        $('#order_form').find('#total_all').val( parseFloat( sum ).toFixed(2) );
    }

    function update_fpa_total()
    {
        var sum = 0;
        var featured_fpa = Number($('#featured_total_all_fpa').val());
        $('.form_row_vattotal').each(function() {
            var fpaline  =  parseFloat( $(this).val() );
            sum = sum + fpaline+featured_fpa;
        });
        //just update the total to sum vat
        $('#order_form').find('#total_vat').val( parseFloat( sum ).toFixed(2) );
    }
    function update_inc_total(){

        var inc = 0;
        var a = parseFloat($('#total_all').val());
        var b = parseFloat($('#total_vat').val());
        var inc = parseFloat(a)+ parseFloat(b)

        $("#total_inc").val(parseFloat( inc ).toFixed(2));

    }

function deleterow() {
        document.getElementById("tbody").deleteRow(-1);
    };

    function deleteRow(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("table").deleteRow(i);
    }

$('#product_id').on('change', function() {
  var params = $( "#product_id" ).val();
    var paramsArray = params.split('---');
    event.preventDefault();
    var newRow = jQuery(
        '<tr >' +
        '<td style="text-align: center">' +
        '<input class="form-control-table" size="5" type="text" value="'+paramsArray[0]+'" name="code[]" />'+
        '</td>' +
        '<td  style="text-align: left" >' +
        '<input class="form-control-table" size="40"  type="text" value="'+paramsArray[6]+'" name="name[]" readonly />' +
        '</td>' +
        '<td  style="text-align: center">' +
        '<input class="form-control-table form_qty" size="4" maxlength="4" id="qty" type="text" value="1" name="qty[]"/>'+
        '</td>' +
        '<td style="text-align: center">' +
        '<input class="form-control-table form_price"  size="7" type="text" value="'+paramsArray[1]+'" name="pricew[]" min="0" />' +
        '</td>' +
        '<td  style="text-align: center">' +
        '<input class="form-control-table form_row_disq" size="7" type="text" value="0" name="total_disq[]"  />' +
        '</td>' +
        '<td  style="text-align: center">' +
        '<input class="form-control-table form_row_total" size="7" type="text" name="total_price[]" readonly />' +
        '</td>' +
        '<td  style="text-align: center">' +
        '<input class="form-control-table form_row_vatperc" size="7" type="text" value="24%" name="vatper[]" readonly />' +
        '</td>' +
        '<td  style="text-align: center">' +
        '<input class="form-control-table readonly form_row_vattotal" size="7" type="text" readonly name="form_row_vattotal[]" readonly />' +
        '</td>' +
        //'<td>' +
        //'<input class="form-control-table form_ypoloipo" type="number" value="'+paramsArray[6]+'" name="qty1[]" readonly />' +
        //'</td>' +
        '<td>' +
        '<input type="button"class="btn btn-danger waves-effect waves-light" value="Διαγραφή" onclick="deleteRow(this)">' +
        '</td>' +
        '<td>' +
        '<input class="form-control-table" type="hidden" value="'+paramsArray[2]+'" name="vat[]" />' +
        '</td>' +
        '<td>' +
        '<input class="form-control-table" type="hidden" value="'+paramsArray[3]+'" name="mtrunit1[]" />' +
        '</td>' +
        '<td>' +
        '<input class="form-control-table" type="hidden" value="'+paramsArray[4]+'" name="mtrcategory[]" />' +
        '</td>' +
        '<td>' +
        '<input class="form-control-table" type="hidden" value="'+paramsArray[5]+'" name="mtrl[]" />' +
        '</td>' +
        '</tr>');
      jQuery('table.table').append(newRow);
    var count = $('#tbody tr').length;
    $('#counter').html(count);
});
