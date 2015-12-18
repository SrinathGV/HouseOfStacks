﻿var Query = {};
var latlong = {};
var CountryData = {}
//test
//AmCharts.ready(function (){
    latlong["AD"] = { "latitude": 42.5, "longitude": 1.5 };
    latlong["AE"] = { "latitude": 24, "longitude": 54 };
    latlong["AF"] = { "latitude": 33, "longitude": 65 };
    latlong["AG"] = { "latitude": 17.05, "longitude": -61.8 };
    latlong["AI"] = { "latitude": 18.25, "longitude": -63.1667 };
    latlong["AL"] = { "latitude": 41, "longitude": 20 };
    latlong["AM"] = { "latitude": 40, "longitude": 45 };
    latlong["AN"] = { "latitude": 12.25, "longitude": -68.75 };
    latlong["AO"] = { "latitude": -12.5, "longitude": 18.5 };
    latlong["AP"] = { "latitude": 35, "longitude": 105 };
    latlong["AQ"] = { "latitude": -90, "longitude": 0 };
    latlong["AR"] = { "latitude": -34, "longitude": -64 };
    latlong["AS"] = { "latitude": -14.3333, "longitude": -170 };
    latlong["AT"] = { "latitude": 47.3333, "longitude": 13.3333 };
    latlong["AU"] = { "latitude": -27, "longitude": 133 };
    latlong["AW"] = { "latitude": 12.5, "longitude": -69.9667 };
    latlong["AZ"] = { "latitude": 40.5, "longitude": 47.5 };
    latlong["BA"] = { "latitude": 44, "longitude": 18 };
    latlong["BB"] = { "latitude": 13.1667, "longitude": -59.5333 };
    latlong["BD"] = { "latitude": 24, "longitude": 90 };
    latlong["BE"] = { "latitude": 50.8333, "longitude": 4 };
    latlong["BF"] = { "latitude": 13, "longitude": -2 };
    latlong["BG"] = { "latitude": 43, "longitude": 25 };
    latlong["BH"] = { "latitude": 26, "longitude": 50.55 };
    latlong["BI"] = { "latitude": -3.5, "longitude": 30 };
    latlong["BJ"] = { "latitude": 9.5, "longitude": 2.25 };
    latlong["BM"] = { "latitude": 32.3333, "longitude": -64.75 };
    latlong["BN"] = { "latitude": 4.5, "longitude": 114.6667 };
    latlong["BO"] = { "latitude": -17, "longitude": -65 };
    latlong["BR"] = { "latitude": -10, "longitude": -55 };
    latlong["BS"] = { "latitude": 24.25, "longitude": -76 };
    latlong["BT"] = { "latitude": 27.5, "longitude": 90.5 };
    latlong["BV"] = { "latitude": -54.4333, "longitude": 3.4 };
    latlong["BW"] = { "latitude": -22, "longitude": 24 };
    latlong["BY"] = { "latitude": 53, "longitude": 28 };
    latlong["BZ"] = { "latitude": 17.25, "longitude": -88.75 };
    latlong["CA"] = { "latitude": 54, "longitude": -100 };
    latlong["CC"] = { "latitude": -12.5, "longitude": 96.8333 };
    latlong["CD"] = { "latitude": 0, "longitude": 25 };
    latlong["CF"] = { "latitude": 7, "longitude": 21 };
    latlong["CG"] = { "latitude": -1, "longitude": 15 };
    latlong["CH"] = { "latitude": 47, "longitude": 8 };
    latlong["CI"] = { "latitude": 8, "longitude": -5 };
    latlong["CK"] = { "latitude": -21.2333, "longitude": -159.7667 };
    latlong["CL"] = { "latitude": -30, "longitude": -71 };
    latlong["CM"] = { "latitude": 6, "longitude": 12 };
    latlong["CN"] = { "latitude": 35, "longitude": 105 };
    latlong["CO"] = { "latitude": 4, "longitude": -72 };
    latlong["CR"] = { "latitude": 10, "longitude": -84 };
    latlong["CU"] = { "latitude": 21.5, "longitude": -80 };
    latlong["CV"] = { "latitude": 16, "longitude": -24 };
    latlong["CX"] = { "latitude": -10.5, "longitude": 105.6667 };
    latlong["CY"] = { "latitude": 35, "longitude": 33 };
    latlong["CZ"] = { "latitude": 49.75, "longitude": 15.5 };
    latlong["DE"] = { "latitude": 51, "longitude": 9 };
    latlong["DJ"] = { "latitude": 11.5, "longitude": 43 };
    latlong["DK"] = { "latitude": 56, "longitude": 10 };
    latlong["DM"] = { "latitude": 15.4167, "longitude": -61.3333 };
    latlong["DO"] = { "latitude": 19, "longitude": -70.6667 };
    latlong["DZ"] = { "latitude": 28, "longitude": 3 };
    latlong["EC"] = { "latitude": -2, "longitude": -77.5 };
    latlong["EE"] = { "latitude": 59, "longitude": 26 };
    latlong["EG"] = { "latitude": 27, "longitude": 30 };
    latlong["EH"] = { "latitude": 24.5, "longitude": -13 };
    latlong["ER"] = { "latitude": 15, "longitude": 39 };
    latlong["ES"] = { "latitude": 40, "longitude": -4 };
    latlong["ET"] = { "latitude": 8, "longitude": 38 };
    latlong["EU"] = { "latitude": 47, "longitude": 8 };
    latlong["FI"] = { "latitude": 62, "longitude": 26 };
    latlong["FJ"] = { "latitude": -18, "longitude": 175 };
    latlong["FK"] = { "latitude": -51.75, "longitude": -59 };
    latlong["FM"] = { "latitude": 6.9167, "longitude": 158.25 };
    latlong["FO"] = { "latitude": 62, "longitude": -7 };
    latlong["FR"] = { "latitude": 46, "longitude": 2 };
    latlong["GA"] = { "latitude": -1, "longitude": 11.75 };
    latlong["GB"] = { "latitude": 54, "longitude": -2 };
    latlong["GD"] = { "latitude": 12.1167, "longitude": -61.6667 };
    latlong["GE"] = { "latitude": 42, "longitude": 43.5 };
    latlong["GF"] = { "latitude": 4, "longitude": -53 };
    latlong["GH"] = { "latitude": 8, "longitude": -2 };
    latlong["GI"] = { "latitude": 36.1833, "longitude": -5.3667 };
    latlong["GL"] = { "latitude": 72, "longitude": -40 };
    latlong["GM"] = { "latitude": 13.4667, "longitude": -16.5667 };
    latlong["GN"] = { "latitude": 11, "longitude": -10 };
    latlong["GP"] = { "latitude": 16.25, "longitude": -61.5833 };
    latlong["GQ"] = { "latitude": 2, "longitude": 10 };
    latlong["GR"] = { "latitude": 39, "longitude": 22 };
    latlong["GS"] = { "latitude": -54.5, "longitude": -37 };
    latlong["GT"] = { "latitude": 15.5, "longitude": -90.25 };
    latlong["GU"] = { "latitude": 13.4667, "longitude": 144.7833 };
    latlong["GW"] = { "latitude": 12, "longitude": -15 };
    latlong["GY"] = { "latitude": 5, "longitude": -59 };
    latlong["HK"] = { "latitude": 22.25, "longitude": 114.1667 };
    latlong["HM"] = { "latitude": -53.1, "longitude": 72.5167 };
    latlong["HN"] = { "latitude": 15, "longitude": -86.5 };
    latlong["HR"] = { "latitude": 45.1667, "longitude": 15.5 };
    latlong["HT"] = { "latitude": 19, "longitude": -72.4167 };
    latlong["HU"] = { "latitude": 47, "longitude": 20 };
    latlong["ID"] = { "latitude": -5, "longitude": 120 };
    latlong["IE"] = { "latitude": 53, "longitude": -8 };
    latlong["IL"] = { "latitude": 31.5, "longitude": 34.75 };
    latlong["IN"] = { "latitude": 20, "longitude": 77 };
    latlong["IO"] = { "latitude": -6, "longitude": 71.5 };
    latlong["IQ"] = { "latitude": 33, "longitude": 44 };
    latlong["IR"] = { "latitude": 32, "longitude": 53 };
    latlong["IS"] = { "latitude": 65, "longitude": -18 };
    latlong["IT"] = { "latitude": 42.8333, "longitude": 12.8333 };
    latlong["JM"] = { "latitude": 18.25, "longitude": -77.5 };
    latlong["JO"] = { "latitude": 31, "longitude": 36 };
    latlong["JP"] = { "latitude": 36, "longitude": 138 };
    latlong["KE"] = { "latitude": 1, "longitude": 38 };
    latlong["KG"] = { "latitude": 41, "longitude": 75 };
    latlong["KH"] = { "latitude": 13, "longitude": 105 };
    latlong["KI"] = { "latitude": 1.4167, "longitude": 173 };
    latlong["KM"] = { "latitude": -12.1667, "longitude": 44.25 };
    latlong["KN"] = { "latitude": 17.3333, "longitude": -62.75 };
    latlong["KP"] = { "latitude": 40, "longitude": 127 };
    latlong["KR"] = { "latitude": 37, "longitude": 127.5 };
    latlong["KW"] = { "latitude": 29.3375, "longitude": 47.6581 };
    latlong["KY"] = { "latitude": 19.5, "longitude": -80.5 };
    latlong["KZ"] = { "latitude": 48, "longitude": 68 };
    latlong["LA"] = { "latitude": 18, "longitude": 105 };
    latlong["LB"] = { "latitude": 33.8333, "longitude": 35.8333 };
    latlong["LC"] = { "latitude": 13.8833, "longitude": -61.1333 };
    latlong["LI"] = { "latitude": 47.1667, "longitude": 9.5333 };
    latlong["LK"] = { "latitude": 7, "longitude": 81 };
    latlong["LR"] = { "latitude": 6.5, "longitude": -9.5 };
    latlong["LS"] = { "latitude": -29.5, "longitude": 28.5 };
    latlong["LT"] = { "latitude": 55, "longitude": 24 };
    latlong["LU"] = { "latitude": 49.75, "longitude": 6 };
    latlong["LV"] = { "latitude": 57, "longitude": 25 };
    latlong["LY"] = { "latitude": 25, "longitude": 17 };
    latlong["MA"] = { "latitude": 32, "longitude": -5 };
    latlong["MC"] = { "latitude": 43.7333, "longitude": 7.4 };
    latlong["MD"] = { "latitude": 47, "longitude": 29 };
    latlong["ME"] = { "latitude": 42.5, "longitude": 19.4 };
    latlong["MG"] = { "latitude": -20, "longitude": 47 };
    latlong["MH"] = { "latitude": 9, "longitude": 168 };
    latlong["MK"] = { "latitude": 41.8333, "longitude": 22 };
    latlong["ML"] = { "latitude": 17, "longitude": -4 };
    latlong["MM"] = { "latitude": 22, "longitude": 98 };
    latlong["MN"] = { "latitude": 46, "longitude": 105 };
    latlong["MO"] = { "latitude": 22.1667, "longitude": 113.55 };
    latlong["MP"] = { "latitude": 15.2, "longitude": 145.75 };
    latlong["MQ"] = { "latitude": 14.6667, "longitude": -61 };
    latlong["MR"] = { "latitude": 20, "longitude": -12 };
    latlong["MS"] = { "latitude": 16.75, "longitude": -62.2 };
    latlong["MT"] = { "latitude": 35.8333, "longitude": 14.5833 };
    latlong["MU"] = { "latitude": -20.2833, "longitude": 57.55 };
    latlong["MV"] = { "latitude": 3.25, "longitude": 73 };
    latlong["MW"] = { "latitude": -13.5, "longitude": 34 };
    latlong["MX"] = { "latitude": 23, "longitude": -102 };
    latlong["MY"] = { "latitude": 2.5, "longitude": 112.5 };
    latlong["MZ"] = { "latitude": -18.25, "longitude": 35 };
    latlong["NA"] = { "latitude": -22, "longitude": 17 };
    latlong["NC"] = { "latitude": -21.5, "longitude": 165.5 };
    latlong["NE"] = { "latitude": 16, "longitude": 8 };
    latlong["NF"] = { "latitude": -29.0333, "longitude": 167.95 };
    latlong["NG"] = { "latitude": 10, "longitude": 8 };
    latlong["NI"] = { "latitude": 13, "longitude": -85 };
    latlong["NL"] = { "latitude": 52.5, "longitude": 5.75 };
    latlong["NO"] = { "latitude": 62, "longitude": 10 };
    latlong["NP"] = { "latitude": 28, "longitude": 84 };
    latlong["NR"] = { "latitude": -0.5333, "longitude": 166.9167 };
    latlong["NU"] = { "latitude": -19.0333, "longitude": -169.8667 };
    latlong["NZ"] = { "latitude": -41, "longitude": 174 };
    latlong["OM"] = { "latitude": 21, "longitude": 57 };
    latlong["PA"] = { "latitude": 9, "longitude": -80 };
    latlong["PE"] = { "latitude": -10, "longitude": -76 };
    latlong["PF"] = { "latitude": -15, "longitude": -140 };
    latlong["PG"] = { "latitude": -6, "longitude": 147 };
    latlong["PH"] = { "latitude": 13, "longitude": 122 };
    latlong["PK"] = { "latitude": 30, "longitude": 70 };
    latlong["PL"] = { "latitude": 52, "longitude": 20 };
    latlong["PM"] = { "latitude": 46.8333, "longitude": -56.3333 };
    latlong["PR"] = { "latitude": 18.25, "longitude": -66.5 };
    latlong["PS"] = { "latitude": 32, "longitude": 35.25 };
    latlong["PT"] = { "latitude": 39.5, "longitude": -8 };
    latlong["PW"] = { "latitude": 7.5, "longitude": 134.5 };
    latlong["PY"] = { "latitude": -23, "longitude": -58 };
    latlong["QA"] = { "latitude": 25.5, "longitude": 51.25 };
    latlong["RE"] = { "latitude": -21.1, "longitude": 55.6 };
    latlong["RO"] = { "latitude": 46, "longitude": 25 };
    latlong["RS"] = { "latitude": 44, "longitude": 21 };
    latlong["RU"] = { "latitude": 60, "longitude": 100 };
    latlong["RW"] = { "latitude": -2, "longitude": 30 };
    latlong["SA"] = { "latitude": 25, "longitude": 45 };
    latlong["SB"] = { "latitude": -8, "longitude": 159 };
    latlong["SC"] = { "latitude": -4.5833, "longitude": 55.6667 };
    latlong["SD"] = { "latitude": 15, "longitude": 30 };
    latlong["SE"] = { "latitude": 62, "longitude": 15 };
    latlong["SG"] = { "latitude": 1.3667, "longitude": 103.8 };
    latlong["SH"] = { "latitude": -15.9333, "longitude": -5.7 };
    latlong["SI"] = { "latitude": 46, "longitude": 15 };
    latlong["SJ"] = { "latitude": 78, "longitude": 20 };
    latlong["SK"] = { "latitude": 48.6667, "longitude": 19.5 };
    latlong["SL"] = { "latitude": 8.5, "longitude": -11.5 };
    latlong["SM"] = { "latitude": 43.7667, "longitude": 12.4167 };
    latlong["SN"] = { "latitude": 14, "longitude": -14 };
    latlong["SO"] = { "latitude": 10, "longitude": 49 };
    latlong["SR"] = { "latitude": 4, "longitude": -56 };
    latlong["ST"] = { "latitude": 1, "longitude": 7 };
    latlong["SV"] = { "latitude": 13.8333, "longitude": -88.9167 };
    latlong["SY"] = { "latitude": 35, "longitude": 38 };
    latlong["SZ"] = { "latitude": -26.5, "longitude": 31.5 };
    latlong["TC"] = { "latitude": 21.75, "longitude": -71.5833 };
    latlong["TD"] = { "latitude": 15, "longitude": 19 };
    latlong["TF"] = { "latitude": -43, "longitude": 67 };
    latlong["TG"] = { "latitude": 8, "longitude": 1.1667 };
    latlong["TH"] = { "latitude": 15, "longitude": 100 };
    latlong["TJ"] = { "latitude": 39, "longitude": 71 };
    latlong["TK"] = { "latitude": -9, "longitude": -172 };
    latlong["TM"] = { "latitude": 40, "longitude": 60 };
    latlong["TN"] = { "latitude": 34, "longitude": 9 };
    latlong["TO"] = { "latitude": -20, "longitude": -175 };
    latlong["TR"] = { "latitude": 39, "longitude": 35 };
    latlong["TT"] = { "latitude": 11, "longitude": -61 };
    latlong["TV"] = { "latitude": -8, "longitude": 178 };
    latlong["TW"] = { "latitude": 23.5, "longitude": 121 };
    latlong["TZ"] = { "latitude": -6, "longitude": 35 };
    latlong["UA"] = { "latitude": 49, "longitude": 32 };
    latlong["UG"] = { "latitude": 1, "longitude": 32 };
    latlong["UM"] = { "latitude": 19.2833, "longitude": 166.6 };
    latlong["US"] = { "latitude": 38, "longitude": -97 };
    latlong["UY"] = { "latitude": -33, "longitude": -56 };
    latlong["UZ"] = { "latitude": 41, "longitude": 64 };
    latlong["VA"] = { "latitude": 41.9, "longitude": 12.45 };
    latlong["VC"] = { "latitude": 13.25, "longitude": -61.2 };
    latlong["VE"] = { "latitude": 8, "longitude": -66 };
    latlong["VG"] = { "latitude": 18.5, "longitude": -64.5 };
    latlong["VI"] = { "latitude": 18.3333, "longitude": -64.8333 };
    latlong["VN"] = { "latitude": 16, "longitude": 106 };
    latlong["VU"] = { "latitude": -16, "longitude": 167 };
    latlong["WF"] = { "latitude": -13.3, "longitude": -176.2 };
    latlong["WS"] = { "latitude": -13.5833, "longitude": -172.3333 };
    latlong["YE"] = { "latitude": 15, "longitude": 48 };
    latlong["YT"] = { "latitude": -12.8333, "longitude": 45.1667 };
    latlong["ZA"] = { "latitude": -29, "longitude": 24 };
    latlong["ZM"] = { "latitude": -15, "longitude": 30 };
    latlong["ZW"] = { "latitude": -20, "longitude": 30 };
//});


$(document).ready(function () {

    var dt_from = "2015-01-01";
    var dt_to = "2015-12-24";

    $('.slider-time').html(dt_from);
    $('.slider-time2').html(dt_to);
    var min_val = Date.parse(dt_from) / 1000;
    var max_val = Date.parse(dt_to) / 1000;

    function zeroPad(num, places) {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
    }
    function formatDT(__dt) {
        var year = __dt.getFullYear();
        var month = zeroPad(__dt.getMonth() + 1, 2);
        var date = zeroPad(__dt.getDate(), 2);
        var hours = zeroPad(__dt.getHours(), 2);
        var minutes = zeroPad(__dt.getMinutes(), 2);
        var seconds = zeroPad(__dt.getSeconds(), 2);
        return year + '-' + month + '-' + date;//+ ' ' + hours + ':' + minutes + ':' + seconds;
    };


    $("#slider-range,#slider-range_small").slider({
        range: true,
        min: min_val,
        max: max_val,
        step: 10,
        values: [min_val, max_val],
        slide: function (e, ui) {
            var dt_cur_from = new Date(ui.values[0] * 1000); //.format("yyyy-mm-dd hh:ii:ss");
            $('.slider-time').html(formatDT(dt_cur_from));

            var dt_cur_to = new Date(ui.values[1] * 1000); //.format("yyyy-mm-dd hh:ii:ss");                
            $('.slider-time2').html(formatDT(dt_cur_to));
        }
    });

    $("#slider-range,#slider-range_small").children('span').each(function (key) {
        if (key % 2 == 1) {
            $(this).addClass('fa fa-backward');
            //$(this).append('<i class="glyphicon glyphicon-hand-left glyphicon-inverse"/>')
        }
        else {
            $(this).addClass('fa fa-forward');
        }

    })
    
    $('#query,#query_small').autocomplete({
        source: function (request, response) {
            $.get("Test/Suggest/" + request.term, function (data) {
                // assuming data is a JavaScript array such as
                var arr = [{ 'label': 'C++', 'value': 'C++' }, { 'label': 'Java', 'value': 'Java' }];
                // and not a string
                response(data);
                //this._renderMenu(this.children('ul'), data);
            });

        }
        ,
        minLength: 3,
        delay: 50,
        select: function (event, ui) {
            if ($('#logo_small').is(":visible")) {
                $('#search_small').click();
            }
            else {
                $('#search').click();
            }
        }
    }).data("uiAutocomplete")._renderMenu = function (ul, items) {
        var that = this;
        $.each(items, function (index, item) {
            that._renderItemData(ul, item);
        });
        $(ul).find("li:odd").addClass("odd");
    };
    $('.lang-selector').click(function () {
        var queryTerm = $('#logo_small').is(":visible") ? $('#query_small').val() : $('#query').val();
        $('#noresults').hide();
        $(".lang-selection:first-child").html($(this).text() + ' <span class="caret"></span>');
        $(".lang-selection:first-child").val($(this).data('value'));


        var trimmedLanguage = $(this).text();

        var lang = $(this).text() == "All Languages" ? "*" : trimmedLanguage.substring(0, trimmedLanguage.indexOf("(") - 1);

        $(".user").off();
        if ($('#logo_small').is(":visible")) {
            $('#products').empty();
            $('#loading_small').show(100);
        }
        var selection = $("#slider-range").slider("values");
        var startDate = new Date(selection[0] * 1000);
        var endDate = new Date(selection[1] * 1000);
        Query["Query"] = queryTerm;
        Query["StartTime"] = startDate.toGMTString();
        Query["EndTime"] = endDate.toGMTString();        
        Query["Lang"] = lang;
        $.ajax({
            type: "POST",
            url: "Test/Query/",
            data: JSON.stringify(Query),
            contentType: "application/json",
            success: function (data) {
                PaintData(data);
            },
            dataType: "json"
        });
        GetMapDataAndPaint(Query);
        GetSentimentData(Query);
    });
    //$('#query,#query_small').on('keyup', function (ev) {

    //    ev.stopPropagation();
    //    ev.preventDefault();

    //    //filter out up/down, tab, enter, and escape keys
    //    if ($.inArray(ev.keyCode, [40, 38, 9, 13, 27]) === -1) {

    //        var self = $(this);

    //        //set typeahead source to empty
    //        //self.data('typeahead').source = [];
    //        if ($(this).val().length == 0)
    //        {
    //            $('.suggests').empty();
    //            return;
    //        }
    //        if ($('.suggests').first().val() == $(this).val())
    //        {
    //            return;

    //        }

    //        //active used so we aren't triggering duplicate keyup events
    //        if (!self.data('active') && self.val().length > 0) {

    //            self.data('active', true);
    //            var query = $(this).val();
    //            //Do data request. Insert your own API logic here.
    //            $.get("Test/Suggest/"+query, function (data) {

    //                //set this to true when your callback executes
    //                self.data('active', true);
    //                $('.suggests').empty();
    //                //Filter out your own parameters. Populate them into an array, since this is what typeahead's source requires
    //                var arr = [],
    //                    i = data.length;
    //                while (i--) {
    //                    if (data[i].name == query)
    //                    {
    //                        $('.suggests').append('<li href="#" class="list-group-item active" style="cursor:pointer">' + data[i].name + '</li>')
    //                    }
    //                    else {
    //                        $('.suggests').append('<li href="#" class="list-group-item" style="cursor:pointer">' + data[i].name + '</li>')
    //                    }

    //                }
    //                $('.suggests').append('<li role="presentation" class="sbsb_c gsfs sbsb_d" dir="ltr" style="text-align: left;"><div role="option" id="sbse2"><div class="sbqs_a"></div><div class="sbqs_c">hell<b>o</b></div></div></li>');



    //                //trigger keyup on the typeahead to make it search
    //                self.trigger('keyup');

    //                //All done, set to false to prepare for the next remote query.
    //                self.data('active', false);

    //            });

    //        }
    //    }
    //});;

    // Send an AJAX request

    $('#search,#search_small').click(function () {
        var queryTerm = $('#logo_small').is(":visible") ? $('#query_small').val() : $('#query').val();
        $('#noresults').hide();
        $('.suggests').empty();
        $(".lang-selection:first-child").html('All Languages <span class="caret"></span>');
        $(".lang-selection:first-child").val($(this).data('value'));
        if ($('#logo_small').is(":visible")) {
            $('#products').empty();
            $('#loading_small').show(100);
            $('.sentiment-loader').show();
            $('.summary-loader').show();
            $('.map-loader').show();
        }
        else {
            $('#loading').show(25);
        }

        var selection = $('#logo_small').is(":visible") ? $("#slider-range_small").slider("values") : $("#slider-range").slider("values");
        var startDate = new Date(selection[0] * 1000);
        var endDate = new Date(selection[1] * 1000);
        Query["Query"] = queryTerm;
        Query["StartTime"] = startDate.toGMTString();
        Query["EndTime"] = endDate.toGMTString();
        $.ajax({
            type: "POST",
            url: "Test/Query/",
            data: JSON.stringify(Query),
            contentType: "application/json",
            success: function (data) {

                PaintData(data);
            },
            dataType: "json"
        });
        GetMapDataAndPaint(Query);
        GetSentimentData(Query);

    });



});
function PaintData(data) {
    $('.loading').hide();
    var score = data["maxScore"];
    var template = '<div class="panel panel-info " style="margin-bottom:0px !important"><div class="panel-heading"><span><img src="#profile_img#"><h3 style="display:inline-block" class="panel-title"> #user#</h3></span><h3 class="panel-title timeLine fa fa-calendar-check-o pull-right"> #user_time#</h3></div><div class="panel-body">#content#</div><div class="panel-footer">#tags#</div></div>	<div class="com-md-10" style="padding-top:0px !important;margin-bottom:10px !important"><span style="float:left;background-color:cornflowerblue;height:5px;width:#percent_width#%"></span></div>';
    var summaryLinkTemplate = '<a href="#summaryLink#" target="_blank">read more.</a>';
    
    $('#products').empty();

    summaryLinkTemplate = summaryLinkTemplate.replace("#summaryLink#", data["summaryLink"]);
    $("#summary").children().children('.panel-heading').html(Query["Query"] + "" + (data["translation"] ? ("(" + data["translation"] + ")") : ("")));
    $("#summary").children().children('.panel-body').html(data["Summary"] + ".." + summaryLinkTemplate);

    //$("#logo_big").hide('size', { origin: ["top", "right"] }, 1000);
    $("#logo_big").fadeOut(50, function () {

    });

    $('#query_small').val(Query["Query"]);
    $("#logo_small").show(10, function () {
        //
    });

    if (data["result"] && data["result"].length == 0) {
        $('#noresults').show(250);
    }

    // On success, 'data' contains a list of products.
    $.each(data["result"], function (key, item) {

        //console.log('score : ' + score + ' currentscore : ' + item["score"]);
        var barValue = (item["score"] / score) * 100;
        var tagElement = "";
        if (item["HashTags"]) {
            $.each(item["HashTags"], function (key1, tag) {
                tagElement = tagElement + '<span class="tag btn btn-info btn-xs" style="margin-left : 5px"><i class="fa fa-hashtag"></i>' + tag + '</span>'
            })
        }

        // Add a list item for the product.
        var itemHtml = template.replace('#tags#', tagElement);
        itemHtml = itemHtml.replace('#content#', item["Text"]);
        itemHtml = itemHtml.replace('#percent_width#', barValue);
        itemHtml = itemHtml.replace('#user_time#', item["CreatedAt"]);
        itemHtml = itemHtml.replace('#user#', item["Author"]);
        itemHtml = itemHtml.replace('#profile_img#', item["imgUrl"]);
        itemHtml = itemHtml.replace('#lang#', item["Lang"]);
        $(itemHtml).appendTo($('#products'));
    });



    if ($('#logo_small').is(":visible") && $('#logo_small').is(":visible") == true) {
        var height = $('#summary').css('height');
        $('#mapTag').css('height', height > 200 ? height : 200);
        $('.summary-loader').hide();
        $('.map-loader').hide();
        $('#summary').show(200);
        $('#mapTag').show(200);
    }

    $('.user,.timeLine').css("cursor", "pointer");

    $('.tag').click(function () {
        var queryTerm = $('#logo_small').is(":visible") ? $('#query_small').val() : $('#query').val();
        $(".lang-selection:first-child").html('All Languages <span class="caret"></span>');
        $(".lang-selection:first-child").val($(this).data('value'));
        $('#noresults').hide();
        $(".tag").off();
        if ($('#logo_small').is(":visible")) {
            $('#products').empty();
            $('#loading_small').show(100);
        }
        var selection = $("#slider-range").slider("values");
        var startDate = new Date(selection[0] * 1000);
        var endDate = new Date(selection[1] * 1000);

        Query["Query"] = queryTerm;
        Query["StartTime"] = startDate.toGMTString();
        Query["EndTime"] = endDate.toGMTString();
        Query["HashTag"] = $(this).text();
        
        $.ajax({
            type: "POST",
            url: "Test/Query/",
            data: JSON.stringify(Query),
            contentType: "application/json",
            success: function (data) {
                PaintData(data);
            },
            dataType: "json"
        });

        GetMapDataAndPaint(Query);
    });

    

    $('.timeLine').click(function () {
        var queryTerm = $('#logo_small').is(":visible") ? $('#query_small').val() : $('#query').val();

        $(".timeLine").off();
        if ($('#logo_small').is(":visible")) {
            $('#products').empty();
            $('#loading_small').show(100);
        }
        var selection = $("#slider-range").slider("values");
        var startDate = new Date(selection[0] * 1000);
        var endDate = new Date(selection[1] * 1000);

        //Query = {
        //    "Query": queryTerm,
        //    "StartTime": $(this).text(),
        //    "TimeLineChange": true
        //};

        Query["Query"] = queryTerm;
        Query["StartTime"] = $(this).text();
        Query["TimeLineChange"] = true;

        $.ajax({
            type: "POST",
            url: "Test/Query/",
            data: JSON.stringify(Query),
            contentType: "application/json",
            success: function (data) {
                PaintData(data);
            },
            dataType: "json"
        });

        Query["TimeLineChange"] = false;

        GetMapDataAndPaint(Query);
    });
    return false;
}
function GetSentimentData(Query)
{
    $.ajax({
        type: "POST",
        url: "Test/Sentiment/",
        data: JSON.stringify(Query),
        contentType: "application/json",
        success: function (data) {
            $('#sentiment').empty();
            $('.sentiment-loader').hide();
            var height = $('#summary').css('height');
            var requiredHeight = height > 200 ? height : 200;
            $('#sentiment').css('height', requiredHeight);

            var plot1 = $.jqplot('sentiment', [[['positive', data['positiveValue']], ['negative', data['negativeValue']]]], {
                grid: {
                    drawBorder: false,
                    drawGridlines: false,
                    background: '#ffffff',
                    shadow: false
                },
                axesDefaults: {

                },
                seriesDefaults: {
                    renderer: $.jqplot.PieRenderer,
                    rendererOptions: {
                        showDataLabels: true,
                        diameter: requiredHeight * 0.8
                    }
                },
                seriesColors: ["#01DFA5", "#DBA901"]
                ,
                legend: {
                    show: true,
                    placement: 'outside',
                    rendererOptions: {
                        numberRows: 2
                    },
                    marginTop: '8px',
                    marginLeft: (requiredHeight * -0.25)
                },
                height: requiredHeight,
                animate: true
            });
            var topHeight = ($('#box').height() - 20) * -1;
            $('#results_div').css('min-height', ($(window).height() - $('#box').height()))
            $('#sentiment').css('top', topHeight);
            $('#summary').css('top', topHeight);
            $('#mapTag').css('top', topHeight);
        },
        dataType: "json"
    });
}

function GetMapDataAndPaint(Query) {
    $.ajax({
        type: "POST",
        url: "Test/Map/",
        data: JSON.stringify(Query),
        contentType: "application/json",
        success: function (data) {

            //if (Query["Lang"] && Query["Lang"].length > 0)
            //{
            //    $(".lang-selection:first-child").html(Query["Lang"] + ' <span class="caret"></span>');
            //    $(".lang-selection:first-child").val(Query["Lang"]);
            //}
            
            $.each(data["codes"], function (i, e) {
                if (e.language == Query["Lang"])
                {
                    $('.' + e.language).addClass('active');
                }
                $('.' + e.language).text(e.language + " (" + e.count + ")");
            });

            

            var mapData = data["mapData"];//JSON.stringify(data);

            var map;
            var minBulletSize = 3;
            var maxBulletSize = 40;
            var min = Infinity;
            var max = -Infinity;
            CountryData = mapData.map(function (k) { return k.name });
            
            //if (Query["Location"] && Query["Location"].length > 0) {
            //    $(".country-select").val(Query["Location"]);
            //}

            $('.country-select').empty();
            $('.country-select').append('<option></option>');

            $.each(mapData, function (i, e) {
                if (e.name == Query["Location"])
                {
                    $('.country-select').append('<option selected="selected">' + e.name + " (" + e.value + ")" + '</option>');
                }
                else {
                    $('.country-select').append('<option>' + e.name + " (" + e.value + ")" + '</option>');
                }
                
            });

            $(".country-select").select2({
                placeholder: "Country",
                dropdownAutoWidth: true,
                allowClear: true,
            });
            
            
            
            $('.country-select').on("change", function (e) {
                var trimmedLanguage = $(".country-select option:selected").text();

                Query["Location"] = trimmedLanguage.substring(0, trimmedLanguage.indexOf("(") - 1);
                //Query["Location"] = $(".country-select option:selected").text();;                
                $('#search_small').click();
            });
            //$(".country-select").select2("data", CountryData, true);;
            //$(".country-select").select2("updateResults");
            // get min and max values
            for (var i = 0; i < mapData.length; i++) {
                var value = mapData[i].value;
                if (value < min) {
                    min = value;
                }
                if (value > max) {
                    max = value;
                }
            }

            // build map
            //AmCharts.ready(function () {
            AmCharts.theme = AmCharts.themes.dark;
            map = new AmCharts.AmMap();

            map.addTitle("Popularity of tweet", 12);
            map.areasSettings = {
                unlistedAreasColor: "#000000",
                unlistedAreasAlpha: 0.3
            };
            map.imagesSettings.balloonText = "<span style='font-size:14px;'><b>[[title]]</b>: [[value]]</span>";

            var dataProvider = {
                mapVar: AmCharts.maps.worldLow,
                images: []
            }

            // create circle for each country


            // it's better to use circle square to show difference between values, not a radius
            var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
            var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

            // create circle for each country
            for (var i = 0; i < mapData.length; i++) {
                var dataItem = mapData[i];
                var value = dataItem.value;
                // calculate size of a bubble
                var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
                if (square < minSquare) {
                    square = minSquare;
                }
                var size = Math.sqrt(square / (Math.PI * 2));
                var id = dataItem.code;

                dataProvider.images.push({
                    type: "circle",
                    width: size,
                    height: size,
                    color: dataItem.color,
                    longitude: latlong[id].longitude,
                    latitude: latlong[id].latitude,
                    title: dataItem.name,
                    value: value
                });
            }



            // the following code uses circle radius to show the difference
            /*
            for (var i = 0; i < mapData.length; i++) {
                var dataItem = mapData[i];
                var value = dataItem.value;
                // calculate size of a bubble
                var size = (value - min) / (max - min) * (maxBulletSize - minBulletSize) + minBulletSize;
                if (size < minBulletSize) {
                    size = minBulletSize;
                }
                var id = dataItem.code;
        
                dataProvider.images.push({
                    type: "circle",
                    width: size,
                    height: size,
                    color: dataItem.color,
                    longitude: latlong[id].longitude,
                    latitude: latlong[id].latitude,
                    title: dataItem.name,
                    value: value
                });
            }*/

            map.dataProvider = dataProvider;
            map.export = {
                enabled: true
            }

            map.write("mapTag");
            //});
        },
        dataType: "json"
    });
}