var DISPLAY_MODE = 'list';      // list, thumbnail
var DISPLAY_BY   = 'score';     // score, stn, hol
var SORT_BY      = 'score2';    // score2, cost
var FILTERED_DB  = null;        // after filter db
var GENDER       = 0;           // 0 - female, 1 - male
var BRAVE_LV     = 20;          // 0, 15, 20

function update_items(){

    var db = [];

    // ########## FILTER ###########

    var txt_title    = $('#txt-title').val();
    var cmb_type     = $('#cmb-type').val();
    var cmb_material = $('#cmb-material').val();
    var cmb_hole     = $('#cmb-hole').val();
    var cmb_skill    = $('#cmb-skill').val();
    var cmb_element  = $('#cmb-element').val();
    var cmb_stone    = $('#cmb-stone').val();

    // setup db space
    if(cmb_type == ''){ // all
        db = db.concat(CRYSTALS);
        db = db.concat(WOODS);
        db = db.concat(IRONS);
        db = db.concat(FRAGMENTS);
        db = db.concat(HORNS);
        db = db.concat(WEAPONS);
    }
    else if(cmb_type.indexOf('Equipment') > -1){ // equipment
        db = db.concat(CRYSTALS);
        db = db.concat(WOODS);
        db = db.concat(IRONS);
        db = db.concat(FRAGMENTS);
        db = db.concat(HORNS);
    }
    else { // weapon
        db = db.concat(WEAPONS);
    }

    // handle something on the fly
    $.each(db, function(i, r){
        // handle bravanization stat
        if(BRAVE_LV > 0){
            var brave_rate = r.brave_rate || 1;
            var cur_brave_lv = r.rank == RANK_S ? 10 : BRAVE_LV; // S limit +10
            braved_score = r.score + ( r.score * brave_rate * 0.01 * cur_brave_lv );
            r.score2 = Math.floor( braved_score );
        }
        else {
            r.score2 = r.score;
        }
        // handle slots
        /*
        r.slots  - current slots
        r.slots1 - female/weapon slots
        r.slots2 - male slots
        */
        if(r.type.indexOf('Equipment') > -1){
            if(!r.slots1){ r.slots1 = r.slots; } // first time
            r.slots = GENDER == 0 ? r.slots1 : r.slots2 || r.slots1;
        }
    });

    // title filter
    if(txt_title){
        if( [ 'godeyes' ].indexOf(txt_title) == -1 ){
            db = db.filter(function(o){
                if(o.name2){
                    return (o.name.toLowerCase().indexOf(txt_title.toLowerCase()) > -1)
                        || (o.name2.toLowerCase().indexOf(txt_title.toLowerCase()) > -1);
                }
                else {
                    return o.name.toLowerCase().indexOf(txt_title.toLowerCase()) > -1;
                }
            });
        }
    }

    // checkbox filter
    if($('#chk-limited').is(':checked')){
        db = db.filter(function(o){
            return o.limited;
        });
    }
    if($('#chk-event').is(':checked')){
        db = db.filter(function(o){
            return o.evt;
        });
    }

    // type filter
    if(cmb_type){
        if(cmb_type == 'Equipment'){
            // do nothing
        }
        else if(cmb_type == 'Weapon'){
            // do nothing
        }
        else {
            db = db.filter(function(o){
                return cmb_type.indexOf(o.type) > -1;
            });
        }
    }

    // meterial filter
    if(cmb_material){
        db = db.filter(function(o){
            return o.material == cmb_material;
        });
    }

    // hole filter
    if(cmb_hole){
        db = db.filter(function(o){
            return o.slots.indexOf(cmb_hole) > -1;
        });
    }

    // skill filter
    if(cmb_skill){
        db = db.filter(function(o){
            if(o.skill){
                var item = SKILLS.filter(function(s){ return o.skill == s.code })[0];
                if(item){
                    return item.name.indexOf(cmb_skill) > -1;
                }
            }
            return false;
        });
    }

    // element filter
    if(cmb_element){
        db = db.filter(function(o){
            return o.slots.indexOf(cmb_element) > -1;
        });
    }

    // stone filter
    if(cmb_stone){
        db = db.filter(function(o){
            if( [ 'ATK', 'DEF', 'HP' ].indexOf( cmb_stone ) > -1 ){
                return find_stones_by_desc( o.slots, cmb_stone + ".+\\+.+%" ).length > 0;
            }
            else if( cmb_stone == 'CMB' ){
                return find_stones_by_desc( o.slots, 'Combo' + ".+\\+.+%" ).length > 0;
            }
            else if( cmb_stone == 'SKL' ){
                return find_stones_by_desc( o.slots, 'Skill' + ".+\\+.+%" ).length > 0;
            }
            else if( cmb_stone == 'SKA' ){
                return find_stones_by_desc( o.slots, "Gauge \\+.+% / turn" ).length > 0;
            }
            else if( cmb_stone == 'QUI' ){
                return find_stones_by_desc( o.slots, 'Turn comes' ).length > 0;
            }
            else if( cmb_stone == 'HAS' ){
                return find_stones_by_desc( o.slots, 'Distance' ).length > 0;
            }
            else if( cmb_stone == 'HEA' ){
                return find_stones_by_desc( o.slots, 'Heal' ).length > 0;
            }
            else if( cmb_stone == 'TOP' ){
                return find_stones_by_desc( o.slots, "Party Gauge \\+.+% / turn" ).length > 0;
            }
            else if( cmb_stone == 'LSG' ){
                return find_stones_by_desc( o.slots, 'Party Heal' ).length > 0;
            }
            else {
                return o.slots.indexOf(cmb_stone) > -1;
            }
        });
    }

    // ########## SORT ###########

    if(cmb_hole){
        db.sort(function(a, b){
            var cnt_a = a.slots.split(cmb_hole).length-1;
            var cnt_b = b.slots.split(cmb_hole).length-1;
            return cnt_a == cnt_b ? b[SORT_BY] - a[SORT_BY]
                                  : cnt_b - cnt_a;
        });
    }
    else if(cmb_stone){
        var cnt_a = 0;
        var cnt_b = 0;
        db.sort(function(a, b){
            cnt_a = 0;
            cnt_b = 0;
            if([ 'ATK', 'DEF', 'HP' ].indexOf(cmb_stone) > -1){
                cnt_a = find_stones_by_desc( a.slots, cmb_stone + ".+\\+.+%" ).reduce(function(prev, cur){ return prev + cur.desc.match(cmb_stone + '.+?\\+(.+?)%')[1]*1; }, 0);
                cnt_b = find_stones_by_desc( b.slots, cmb_stone + ".+\\+.+%" ).reduce(function(prev, cur){ return prev + cur.desc.match(cmb_stone + '.+?\\+(.+?)%')[1]*1; }, 0);
            }
            else if( 'CMB' == cmb_stone ){
                cnt_a = find_stones_by_desc( a.slots, 'Combo' + ".+\\+.+%" ).reduce(function(prev, cur){ return prev + cur.desc.match(/combo.+?\+(.+?)%/i)[1]*1; }, 0);
                cnt_b = find_stones_by_desc( b.slots, 'Combo' + ".+\\+.+%" ).reduce(function(prev, cur){ return prev + cur.desc.match(/combo.+?\+(.+?)%/i)[1]*1; }, 0);
            }
            else if( 'SKL' == cmb_stone ){
                cnt_a = find_stones_by_desc( a.slots, 'Skill' + ".+\\+.+%" ).reduce(function(prev, cur){ return prev + cur.desc.match(/skill.+?\+(.+?)%/i)[1]*1; }, 0);
                cnt_b = find_stones_by_desc( b.slots, 'Skill' + ".+\\+.+%" ).reduce(function(prev, cur){ return prev + cur.desc.match(/skill.+?\+(.+?)%/i)[1]*1; }, 0);
            }
            else if( 'SKA' == cmb_stone ){
                cnt_a = find_stones_by_desc( a.slots, "Gauge \\+.+% / turn" ).reduce(function(prev, cur){ return prev + cur.desc.match('Gauge \\+(.+)% / turn')[1]*1; }, 0);
                cnt_b = find_stones_by_desc( b.slots, "Gauge \\+.+% / turn" ).reduce(function(prev, cur){ return prev + cur.desc.match('Gauge \\+(.+)% / turn')[1]*1; }, 0);
            }
            else if( 'QUI' == cmb_stone ){
                cnt_a = find_stones_by_desc( a.slots, 'Turn comes' ).reduce(function(prev, cur){ return prev + get_quick_lv_from_desc(cur.desc) }, 0);
                cnt_b = find_stones_by_desc( b.slots, 'Turn comes' ).reduce(function(prev, cur){ return prev + get_quick_lv_from_desc(cur.desc) }, 0);
            }
            else if( 'HAS' == cmb_stone ){
                cnt_a = find_stones_by_desc( a.slots, 'Distance' ).reduce(function(prev, cur){ return prev + cur.desc.match(/distance.+?\+(.+?)%/i)[1]*1; }, 0);
                cnt_b = find_stones_by_desc( b.slots, 'Distance' ).reduce(function(prev, cur){ return prev + cur.desc.match(/distance.+?\+(.+?)%/i)[1]*1; }, 0);
            }
            else if( 'HEA' == cmb_stone ){
                cnt_a = find_stones_by_desc( a.slots, 'Heal' ).reduce(function(prev, cur){ return prev + cur.desc.match(' \\+(\\d+)%')[1]*1; }, 0);
                cnt_b = find_stones_by_desc( b.slots, 'Heal' ).reduce(function(prev, cur){ return prev + cur.desc.match(' \\+(\\d+)%')[1]*1; }, 0);
            }
            else if( 'TOP' == cmb_stone ){
                cnt_a = find_stones_by_desc( a.slots, "Party Gauge \\+.+% / turn" ).reduce(function(prev, cur){ return prev + cur.desc.match('Party Gauge \\+(.+)% / turn')[1]*1; }, 0);
                cnt_b = find_stones_by_desc( b.slots, "Party Gauge \\+.+% / turn" ).reduce(function(prev, cur){ return prev + cur.desc.match('Party Gauge \\+(.+)% / turn')[1]*1; }, 0);
            }
            else if( 'LSG' == cmb_stone ){
                cnt_a = find_stones_by_desc( a.slots, 'Party Heal' ).reduce(function(prev, cur){ return prev + cur.desc.match('Party Heal \\+(\\d+)%')[1]*1; }, 0);
                cnt_b = find_stones_by_desc( b.slots, 'Party Heal' ).reduce(function(prev, cur){ return prev + cur.desc.match('Party Heal \\+(\\d+)%')[1]*1; }, 0);
            }
            else {
                cnt_a = find_stones_by_type( a.slots, cmb_stone ).reduce(function(prev, cur){ return prev + cur.lv; }, 0);
                cnt_b = find_stones_by_type( b.slots, cmb_stone ).reduce(function(prev, cur){ return prev + cur.lv; }, 0);
            }
            return cnt_a == cnt_b ? b[SORT_BY] - a[SORT_BY]
                                  : cnt_b - cnt_a;
        });
    }
    else { // sort_by ( score, cost )
        db.sort(function(a, b){
            return b[SORT_BY] - a[SORT_BY];
        });
    }

    // ########## TOP 30 ###########

    if( txt_title != 'godeyes' ){
        db = db.slice(0, 30);
    }

    // ########## UPDATE FILTERED_DB ###########
    
    FILTERED_DB = db;

    // ########## GEN TABLES ###########

    $('#total').html('Top ' + db.length + ' records');

    $('.item-wrapper').html('');
    $('.item-wrapper').append("<div class='row'>");
    if( DISPLAY_MODE == 'list' ){
        $(db).each(function(i, r){
            var html = gen_item_list(i, r, BRAVE_LV);
            $('.item-wrapper .row').append(html);
        });
        marquee_long_text('#db .item');
    }
    else {
        $(db).each(function(i, r){
            var html = gen_item_thb(i, r, BRAVE_LV);
            $('.item-wrapper .row').append(html);
        });
    }
}

function marquee_long_text(sel){
    $.each($(sel), function(i, r){
        var row_w   = $(r).width();
        var av_w    = $(r).find('.avatar').width();
        var info_w  = $(r).find('.item-info').width();
        if(av_w+info_w+11 > row_w){
            var title = $(r).find('.title').text();
            $(r).find('.title').html('<marquee>' + title + '</marquee>');
            $(r).find('.title').width( row_w-av_w-10 );
        }
        var sk_w = $(r).find('.skill').width();
        if((sk_w) && (av_w+sk_w+11 > row_w)){
            $(r).find('.skill').wrapInner('<marquee>');
            $(r).find('.skill').width( row_w-av_w-10 );
        }
    });
}

function gen_item_list(i, r, brave_lv, gender){
    if((brave_lv > 10)&&(r.rank == RANK_S)){
        brave_lv = 10;
    }
    if(typeof gender == 'undefined'){
        gender = GENDER;
    }
    var equip_flag = r['type'].indexOf('Equipment') > -1;
    // prepare html
    var img_icons = "<div class='avatar pull-left'>";
    if(equip_flag){
        var suffix = gender == 0 ? null : '_2';
        img_icons += gen_thumbnail(r, suffix, brave_lv);
    }
    else { // weapon
        img_icons += gen_thumbnail(r, null, brave_lv);
    }
    img_icons += '</div>';
    var name    = r.name;
    if(equip_flag && gender == 1){
        name  = r.name2  || r.name;
    }
    var limited = '';
    var evt     = '';
    var score   = brave_lv > 0 ? r.score2 : r.score;
    var score_i = r.type;
    var cost    = '';
    var skill   = '';
    // name, limited, event
    if( r.limited ){
        name = "<div class='limited title txt'>" + name + "</div>";
        limited = ' <span class="badge limited">LIMITED</span>';
    }
    else if( r.evt ){
        name = "<div class='evt title txt'>" + name + "</div>";
        evt = ' <span class="badge evt">EVENT</span>';
    }
    else {
        name = "<div class='title txt'>" + name + "</div>";
    }
    // score
    if( r.type.indexOf('Weapon') > -1 ){
        score_i = 'Weapon';
    }
    score = "<img class='icon35' src='./img/ic/" + score_i + ".png' /> "
          + "<b class='" + score_i.toLowerCase() + "'>" + score + "</b> ";
    // cost
    if( r.cost ){
        cost = "<img class='icon35' src='./img/ic/icon_cost.png'> " + r.cost;
    }
    else {
        cost = "<img class='icon35' src='./img/ic/icon_cost.png'> ?&nbsp;";
    }
    // skill
    if(r.skill){
        var sk = SKILLS.filter(function(s){ return r.skill == s.code })[0];
        skill = "<div class='skill txt'>" + sk.name + "</div>";
    }
    // slots
    return "<div class='item col-xs-12 col-sm-6 col-md-4'>"
            + img_icons
            + "<div class='item-info pull-left'>"
                + "<h4>"
                    + name
                    + '<div>'
                        + score
                        + cost
                        + limited
                        + evt
                    + '</div>'
                    + skill
                    + '<div>'
                        + gen_slots(r['slots'], brave_lv)
                    + '</div>'
                + "</h4>"
            + "</div>"
        + "</div>";
}

function gen_item_thb(i, r, brave_lv){
    suffix = null;
    if(r.type.indexOf('Equipment') > -1){
        suffix = GENDER == 0 ? null : '_2';
    }
    var img = gen_thumbnail(r, suffix, brave_lv);
    var label = '';
    var stn_v = $('#cmb-stone').val();
    var hol_v = $('#cmb-hole').val();
    if(( DISPLAY_BY == 'stn' )&&( stn_v != '' )){
        // display filtered icons
        var fslots = null;
        if([ 'ATK', 'DEF', 'HP' ].indexOf( stn_v ) > -1){
            // fslots = find_stones_by_desc( r.slots + "\\+.+%", stn_v ).map(function(o){ return o.raw_code; }).join('-');
            label = find_stones_by_desc( r.slots, stn_v + '.+\\+.+%' ).reduce(function(prev, cur){ return prev + cur.desc.match(stn_v + '.+?\\+(.+?)%')[1]*1; }, 0);
        }
        else if( 'CMB' == stn_v ){
            // fslots = find_stones_by_desc( r.slots, 'Combo' ).map(function(o){ return o.raw_code; }).join('-');
            label = find_stones_by_desc( r.slots, 'Combo' + '.+\\+.+%' ).reduce(function(prev, cur){ return prev + cur.desc.match(/combo.+?\+(.+?)%/i)[1]*1; }, 0);
        }
        else if( 'SKL' == stn_v ){
            // fslots = find_stones_by_desc( r.slots, 'Skill' ).map(function(o){ return o.raw_code; }).join('-');
            label = find_stones_by_desc( r.slots, 'Skill' + '.+\\+.+%' ).reduce(function(prev, cur){ return prev + cur.desc.match(/skill.+?\+(.+?)%/i)[1]*1; }, 0);
        }
        else if( 'SKA' == stn_v ){
            // fslots = find_stones_by_desc( r.slots, "Gauge.+turn" ).map(function(o){ return o.raw_code; }).join('-');
            label = find_stones_by_desc( r.slots, 'Gauge.+turn' ).reduce(function(prev, cur){ return prev + cur.desc.match('Gauge \\+(.+)% / turn')[1]*1; }, 0);
        }
        else if( 'QUI' == stn_v ){
            fslots = find_stones_by_desc( r.slots, "Turn comes" ).map(function(o){ return o.raw_code; }).join('-');
        }
        else if( 'HAS' == stn_v ){
            // fslots = find_stones_by_desc( r.slots, "Distance" ).map(function(o){ return o.raw_code; }).join('-');
            label = find_stones_by_desc( r.slots, 'Distance' ).reduce(function(prev, cur){ return prev + cur.desc.match(/distance.+?\+(\d+?)%/i)[1]*1; }, 0);
        }
        else if( 'HEA' == stn_v ){
            // fslots = find_stones_by_desc( r.slots, "Heal" ).map(function(o){ return o.raw_code; }).join('-');
            label = find_stones_by_desc( r.slots, 'Heal' ).reduce(function(prev, cur){ return prev + cur.desc.match('\\+(\\d+)%')[1]*1; }, 0);
        }
        else if( 'TOP' == stn_v ){
            label = find_stones_by_desc( r.slots, 'Party Gauge.+turn' ).reduce(function(prev, cur){ return prev + cur.desc.match('Party Gauge \\+(.+)%')[1]*1; }, 0);
        }
        else if( 'LSG' == stn_v ){
            label = find_stones_by_desc( r.slots, 'Party Heal' ).reduce(function(prev, cur){ return prev + cur.desc.match('Party Heal \\+(\\d+)%')[1]*1; }, 0);
        }
        else {
            var fslots = slots_to_arr(r.slots).filter(function(o){ return o.indexOf(stn_v) > -1; }).join('-');
        }
        // render label
        if( fslots != null ){ // icon
            label = gen_slots(fslots).replace(/icon3/g, 'icon4').replace(/icon2/g, 'icon2-xs');
        }
        else { // simple text percent
            label = "<b>" + label + "%</b>";
        }
    }
    else if(( DISPLAY_BY == 'hol' )&&( hol_v != '' )){
        var fslots = slots_to_arr(r.slots).filter(function(o){
            return o.indexOf(hol_v) > -1;
        }).join('-');
        label = gen_slots(fslots).replace(/icon3/g, 'icon4').replace(/icon2/g, 'icon2-xs');
    }
    else { // score or cost
        if( r.limited ){
            label = "<span class='h4 limited txt'>" + r[SORT_BY] + "</span>";
        }
        else if( r.evt ){
            label = "<span class='h4 evt txt'>" + r[SORT_BY] + "</span>";
        }
        else {
            label = "<span class='h4 txt'>" + r[SORT_BY] + "</span>";
        }
        // prepend with icon
        var label_i = null;
        if( SORT_BY == 'cost' ){
            label_i = 'icon_cost';
        }
        else if( r.type.indexOf('Weapon') > -1 ){
            label_i = 'Weapon';
        }
        else {
            label_i = r.type;
        }
        label = "<img class='icon4' src='./img/ic/" + label_i + ".png' /> " + label;
    }
    // return
    return "<div class='thb-item col-xs-4 col-sm-2'>"
            + img
            + "<div class='thb-txt'>" + label + "</div>"
            + "</div>";
}

function db_info(){
    var total = 0;
    $([
        ['weapon',  WEAPONS],
        ['wood',    WOODS],
        ['fragment',FRAGMENTS],
        ['horn',    HORNS],
        ['iron',    IRONS],
        ['crystal', CRYSTALS],
    ]).each(function(i, r){
        var size = r[1].length;
        if(r[0] == 'iron'){
            size -= 1;
        }
        else if(r[0] == 'horn'){ 
            size -= 2;
        }
        else if(r[0] == 'crystal'){ 
            size -= 1;
        }
        else if(r[0] == 'weapon'){ 
            size -= 14;
        }
        console.log(r[0] + ': ' + size);
        total += size;
    });
    return total;
}

function set_val(sel, val){
    $(sel).val(val);
    update_items();
}
