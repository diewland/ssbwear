var EMU_CHART_KEYS = ['ATK', 'Turn', 'Skill', 'Heal', 'Distance', 'Combo'];
var MY_CHARTS = {
    '#p1': null,
    '#p2': null,
    '#p3': null,
};
var MY_ITEMS = {
    '#p1': [],
    '#p2': [],
    '#p3': [],
};
var TAB_STATE = {
    '#p1': '#p1-sum',
    '#p2': '#p2-sum',
    '#p3': '#p3-sum',
};
var PLAYER_SLOTS   = {};      // player slots
var PLAYER_DESCS   = {};      // player desc
var PLAYER_CHARTS  = {};      // player chart
var PARTY_DESCS    = {};      // party desc
var CUR_MOD_P      = null;    // active emu player

function save_emu_data(){
    localStorage.setItem('my_items',     JSON.stringify(MY_ITEMS));
    localStorage.setItem('player_slots', JSON.stringify(PLAYER_SLOTS));
}

function load_emu_data(){
    var o = localStorage.getItem('my_items');
    if(o != null){
        MY_ITEMS = JSON.parse(o);
    }
    var o = localStorage.getItem('player_slots');
    if(o != null){
        PLAYER_SLOTS = JSON.parse(o);
    }
}

function update_emu_ui(tab_id){
    // sort my_items of current tab
    MY_ITEMS[tab_id].sort(function(a, b){
        var scores = {
            'Weapon': 0,
            'Head'  : 1,
            'Armor' : 2,
        }
        var a_score = scores[a.type2];
        var b_score = scores[b.type2];
        return a_score - b_score;
    });

    $(tab_id + ' .emu-wrapper').html('');
    $.each( MY_ITEMS[tab_id], function(i, r){
        // render item list
        var item_list = gen_item_list(0, r, r.brave_lv, r.gender);
        $(tab_id + ' .emu-wrapper').append(item_list);
        // collect party desc(s)
        var slot_info = get_slot_info( r.slots );
        var desc = $.map(slot_info, function(r, i){
            return r.desc;
        });
        var party_desc = $.grep(desc, function(r){
            return r.match(/Party/)
                   || r.match(/^(\w+) (\w+) (\w+) \+(\d+)%$/)
                   || r.match(/^(\w+) (\w+) (\w+) \+(\d+)%, (\w+) (\w+) (\w+) \+(\d+)%$/);
        })
        $.each(party_desc, function(i, v){
            var idx = desc.indexOf(v);
            desc.splice(idx, 1);
        });
        if(party_desc.length > 0){
            PARTY_DESCS[tab_id+'_'+r.type2] = party_desc;
        }
        PLAYER_DESCS[tab_id+'_'+r.type2] = desc;
    });
    $(tab_id + ' .emu-wrapper').append("<div style='clear: both;'></div>"); // update emu-wrapper height
    marquee_emu_text(tab_id);

    // add remove + mod buttons
    $.each($(tab_id + ' .avatar'), function(i, r){
        $(r).append(
            "<div style='margin-bottom: 5px;'>"
            + "<a class='btn btn-xs btn-danger' href='#' onclick='remove_emu(\"" + tab_id + "\", " + i + ");'>"
            + "<span class='glyphicon glyphicon-trash'></span>"
            + "</a> "
            + "<a class='btn btn-xs btn-primary' href='#' onclick='mod_emu_stones(\"" + tab_id + "\", " + i + ");'>"
            + "<span class='glyphicon glyphicon-cog'></span>"
            + "</a>"
            + "</div>"
        );
    });
}

function calc_effected_party_desc(tab_id){
    var effected_descs = [];
    var all_descs = [];

    // flat party desc
    $.each(PARTY_DESCS, function(k, rr){
        all_descs = all_descs.concat(rr);
    })
    $.each(all_descs, function(i, v){
        var extr = null;
        if(extr = v.match(/Party (\w+) \+(\d+)%, Party (\w+) \+(\d+)% \/ turn/)){
            effected_descs.push(extr[1] + ' +' + extr[2] + '%');
            effected_descs.push(extr[3] + ' +' + extr[4] + '% / turn');
        }
        else if(extr = v.match(/Party ([\w\s]+) \+(\d+)%, Party ([\w\s]+) \+(\d+)%/)){
            effected_descs.push(extr[1] + ' +' + extr[2] + '%');
            effected_descs.push(extr[3] + ' +' + extr[4] + '%');
        }
        else if(v.match(/Party /)){ // single party effect
            effected_descs.push(v.replace('Party ', ''));
        }
        else if(extr = v.match(/^(\w+) (\w+) (\w+) \+(\d+)%$/)){
            var matched = match_desc_critiria(tab_id, extr[1], extr[2]);
            if(matched){ effected_descs.push(extr[3] + ' +' + extr[4] + '%'); }
        }
        else if(extr = v.match(/^(\w+) (\w+) (\w+) \+(\d+)%, (\w+) (\w+) (\w+) \+(\d+)%$/)){
            var matched = match_desc_critiria(tab_id, extr[1], extr[2]);
            if(matched){ effected_descs.push(extr[3] + ' +' + extr[4] + '%'); }
            var matched = match_desc_critiria(tab_id, extr[5], extr[6]);
            if(matched){ effected_descs.push(extr[7] + ' +' + extr[8] + '%'); }
        }
        else {
            alert('Pattern not support --> ' + v);
        }
    })
    return effected_descs;
}

function match_desc_critiria(tab_id, material, type){
    // adjust some values
    if(material == 'Ore'){
        material = 'Crystal';
    }
    else if(material == 'Metal'){
        material = 'Iron';
    }
    if(type == 'helmet'){
        type = 'head';
    }
    material = material.toLowerCase();
    type     = type.toLowerCase();

    // match critiria ?
    var o = $.grep(MY_ITEMS[tab_id], function(r){
        return (r.type2.toLowerCase() == type)
               && (r.material.toLowerCase() == material);
    });
    return o.length == 1;
}

function update_emu_summary(){
    $.each([ '#p1', '#p2', '#p3' ], function(i, tab_id){
        var total_desc  = [];
        $.each([ 'Weapon', 'Head', 'Armor' ], function(i, type){
            var desc = PLAYER_DESCS[tab_id+'_'+type];
            if(desc){ total_desc = total_desc.concat(desc); }

            // update each type info
            o = $.grep(MY_ITEMS[tab_id], function(r){ return r.type2 == type; })[0]
            $(tab_id+' #emu-info .'+type).html('');
            if(o){
                $.map(get_slot_info(o.slots), function(r){
                    if(r.desc){
                        var safe_desc = ("[ " + r.title + " ]\\n" + r.desc).replace(/'/g, "\\x27");
                        var li = "<li onclick='alert(\""+ safe_desc +"\");'>" + r.title + "</li>";
                        $(tab_id+' #emu-info .'+type).append(li);
                    }
                });
            }
        })
        // update summary
        var effected_party_desc = calc_effected_party_desc(tab_id);
        var sum_desc = merge_emu_desc(tab_id, total_desc.concat(effected_party_desc));
        if(sum_desc.length > 0){
            var li_sum = '<li>' + sum_desc.join('</li><li>') + '</li>';
            $(tab_id + ' #emu-sum').html('<ul>' + li_sum + '</ul>');
        }
        else {
            $(tab_id + ' #emu-sum').html('No effect');
        }

        // already on graph tab,
        // reload when something on screen update
        reload_emu_chart(tab_id);
    });

    // save
    save_emu_data();
}

function marquee_emu_text(tab_id){
    marquee_long_text(tab_id+' .item.row .col-xs-12');
}

function remove_emu(tab_id, index){
    var del_type = MY_ITEMS[tab_id][index].type2;
    var del_key  = tab_id + '_' + del_type;

    // update global vars
    MY_ITEMS[tab_id] = $.grep(MY_ITEMS[tab_id], function(r){
        return r.type2 != del_type;
    });
    delete(PLAYER_SLOTS[del_key]);
    delete(PLAYER_DESCS[del_key]);
    delete(PARTY_DESCS[del_key]);

    // update ui
    update_emu_ui(tab_id);
    update_emu_summary();

    return false;
}

function mod_emu_stones(tab_id, index){
    var cur_item  = MY_ITEMS[tab_id][index];
    var cur_key   = tab_id + '_' + cur_item.type2;
    var cur_slots = PLAYER_SLOTS[cur_key];
    if(!cur_slots){
        cur_slots = get_slot_info(cur_item.slots);
        // slots related with bravanization
        if(cur_item.brave_lv < 15){ // 5 standard slots
            cur_slots = cur_slots.slice(0, 5);
        }
        else if(cur_item.brave_lv == 15){ // add 6th slot
            cur_slots = cur_slots.slice(0, 6);
        }
        else if(cur_item.brave_lv == 20){ // add 7th slot
            cur_slots = cur_slots.slice(0, 7);
        }
        PLAYER_SLOTS[cur_key] = cur_slots;
    }
    var html = gen_slots_emu(cur_slots, cur_key);
    $('#emu-modal .els').html(html);
    mod_els_click(cur_key, 0, cur_slots[0].removable);
    $('#emu-modal').modal('show');
    CUR_MOD_P = tab_id;
}

function gen_slots_emu(slots, key){
    var html = [];
    $(slots).each(function(i, r){
        var r_flag = r.removable.toString();
        if(r.img_code){ // fix el
            html.push("<a onclick='mod_els_click(\"" + key + "\", " + i + ", " + r_flag + ");' "
                    + "class='btn btn-default icon2' style='background-image: url(./img/el/"
                    + r.img_code + ".png);' href='#'></a>");
        }
        else { // slot
            html.push("<a onclick='mod_els_click(\"" + key + "\", " + i + ", " + r_flag + ");' "
                    + "class='btn btn-default icon2-sl' style='background-image: url(./img/sl/"
                    + r.raw_code + ".png);' href='#'></a>");
        }
    });
    return html.join(' ');
}

function mod_els_click(key, index, removable){
    var ps = PLAYER_SLOTS[key][index];
    var html = '';
    if(removable){
        html = "<select id='cmb_emu_sls' class='form-control'>"
             + "<option value='NONE'>None</option>"
             + "</select>"
             + "<div id='cmb_emu_desc'></div>";
    }
    else { // static
        html = '<h4>' + ps.title + '</h4>' + ps.desc;
    }
    $('#emu-modal a.btn').removeClass('active');
    $('#emu-modal a.btn').eq(index).addClass('active');
    $('#emu-modal .chooser').html(html);
    if(removable){
        // generate combobox
        var tslots = get_slots_by_type(ps.raw_code0);
        $.each(tslots, function(i, r){
            $('#cmb_emu_sls').append(new Option(r.title, r.raw_code));
        });

        // move to current cbb value
        if(ps.desc){
            $('#cmb_emu_sls').val(ps.raw_code);
            $('#cmb_emu_desc').html(ps.desc);
        }
        
        // handle combo change
        $('#cmb_emu_sls').change(function(){
            var val = $(this).val();
            if(val == 'NONE'){ // empty slot
                $('#emu-modal a.active').removeClass('icon2')
                                        .addClass('icon2-sl')
                                        .css('background-image', "url(./img/sl/" + ps.raw_code0 + ".png)");
                $('#cmb_emu_desc').html('');

                // update slots
                PLAYER_SLOTS[key][index] = {
                    raw_code: ps.raw_code0,
                    raw_code0: ps.raw_code0,
                    removable: true,
                }
            }
            else {
                var cur_sl = $.grep(tslots, function(r){ return r.raw_code == val })[0];
                $('#emu-modal a.active').removeClass('icon2-sl')
                                        .addClass('icon2')
                                        .css('background-image', "url(./img/el/" + cur_sl.img_code + ".png)");
                $('#cmb_emu_desc').html(cur_sl.desc);

                // update slots
                PLAYER_SLOTS[key][index] = cur_sl;
            }
            // keep last state
            if(ps.last){
                PLAYER_SLOTS[key][index].last = true;
            }
            // update change to MY_ITEMS
            var d = key.split('_');
            var my_item = $.grep(MY_ITEMS[d[0]], function(r){ return r.type2 == d[1]; })[0];
            var new_raw_codes = $.map(PLAYER_SLOTS[key], function(r){ return r.raw_code; });
            my_item.slots = gen_txt_slots_by_arr(new_raw_codes);
        });
    }
    return false;
}

function add_emu_code(code, type){ // link with database tab
    var o = FILTERED_DB.filter(function(r){
        return (r.code == code || r.rcode == code) && (r.type == type);
    })[0];
    // hook simple type
    o = $.extend({}, o); // make a copy
    o.type2 = SIMPLE_TYPE[o.type];
    o.slot0 = o.slots;
    o.gender = GENDER;
    o.brave_lv = BRAVE_LV;
    // add to tab
    var tab_id = add_emu_item(o);
    if(tab_id != null){
        update_emu_ui(tab_id);
        update_emu_summary();
        $(tab_id + '-link').tab('show');
    }
}

function add_emu_item(item){
    var cur_tab_id = null;
    $.each(MY_ITEMS, function(tab_id, rr){
        var existed = $.grep(rr, function(r){
            return r.type2 == item.type2;
        });
        if(existed.length == 0){
            cur_tab_id = tab_id;
            MY_ITEMS[tab_id].push(item);
            return false;
        }
    });
    if(cur_tab_id == null){
        alert(item.type2 + ' slot is Full.\nRemove some slots before add new one.');
    }
    return cur_tab_id;
}

function get_data_from_stone_desc( desc ){
    var data = {};
    var extr = null;
    if(extr = desc.match(/(\w+ \w+ [\w ]+), (\w+)[ DMG]* \+(\d+)%/)){ // abcdfegh, BBB +99%
        data[extr[1]] = 1;
        data[extr[2]] = extr[3]*1;
    }
    else if(extr = desc.match(/(\w+)[ DMG]*, (\w+)[ DMG]* \+(\d+)%/)){ // AAA, BBB +99%
        data[extr[1]] = extr[3]*1;
        data[extr[2]] = extr[3]*1;
    }
    else if(extr = desc.match(/([\w ]+?)[ DMG]* \+(\d+)%, ([\w ]+?)[ DMG]* \+(\d+)%/)){ // AAA +99%, BBB +99%
        data[extr[1]] = extr[2]*1;
        data[extr[3]] = extr[4]*1;
    }
    else if(extr = desc.match(/\+(\d+) (\w+) DMG/)){ // +999 fire DMG
        data[extr[2]] = extr[1]*1;
    }
    else if(extr = desc.match(/-(\d+)% (\w+) DMG/)){ // -15% fire DMG
        data[extr[2]] = extr[1]*-1;
    }
    else if(extr = desc.match(/^([\w *]+) \+(\d+)% \/ (\w+)/)){ // Gauge +99% / [hit|turn]
        data[extr[1]+' / '+extr[3]] = extr[2]*1;
    }
    else if(extr = desc.match(/^([\w ]+?)[ DMG]* \+*(\d+)%/)){ // Skill( DMG) (+)99%
        data[extr[1]] = extr[2]*1;
    }
    else {
        data[desc] = 1;
    }
    return data;
}

function merge_emu_desc(tab_id, all_desc, raw_flag){
    var sum_desc = {};
    $.each(all_desc, function(i, r){
        $.each(get_data_from_stone_desc(r), function(k, v){
            if(sum_desc[k]){
                sum_desc[k] += v;
            }
            else {
                sum_desc[k] = v;
            }
        });
    });

    // return raw
    if(raw_flag){
        return sum_desc;
    }

    // hook, update PLAYER_CHARTS
    update_player_chart(tab_id, sum_desc);

    // update stat
    var syn_buff = get_synergy_pct(MY_ITEMS[tab_id].
                   map(function(r){ return r.material; }));
    [
        [ 'ATK', 'weapon' ],
        [ 'HP', 'head' ],
        [ 'DEF', 'armor' ],
    ].forEach(function(rr){
        var sel = tab_id + ' b.' + rr[1];
        if($(sel).html()){
            var stone_buff = sum_desc[rr[0]] || 0;
            var item = $.grep(MY_ITEMS[tab_id], function(r){
                return r.type2.toLowerCase() == rr[1];
            })[0];
            var raw_score = item.score;
            var brave_lv = item.brave_lv;
            // calculate score
            var calc_score = raw_score;             // base score
            if( brave_lv > 0 ){ // +15, +20 ?
                if( item.rank == RANK_S ){ brave_lv = 10; } // rank S limit +10
                var brave_rate = item.brave_rate || 1;
                calc_score *= (100+(brave_rate*brave_lv))/100;
            }
            calc_score *= (100+syn_buff)/100;       // synergy
            calc_score *= (100+stone_buff)/100;     // stone buff
            // update to screen
            $(sel).html(parseInt(calc_score));
        }
    });

    // return pretty desc
    var lang_desc  = [];
    var elements   = [ 'Fire', 'Ice', 'Elec', 'Wind', 'Light', 'Dark' ];
    var ignore_txt = [ 'Turn comes', 'guage at start', 'Not die if HP' ];
    $.each(sum_desc, function(k, v){
        if($.unique($.map(ignore_txt, function(r){ return k.indexOf(r); })).length > 1){
            lang_desc.push(k + '#x' + v);
        }
        else if( elements.indexOf(k) > -1 ){
            if(v > 0){ // offense
                lang_desc.push(k + ' damage#+' + v);
            }
            else { // defense
                lang_desc.push(k + ' damage#' + v + '%');
            }
        }
        else {
            if(['Combo', 'Skill'].indexOf(k) > -1){
                k += ' damage';
            }
            lang_desc.push(k + '#+' + v + '%');
        }
    });
    lang_desc.sort();

    // add beta effected
    var beta = "<span class='label label-danger'>beta</span>";
    var calc_guage = calc_skill_guage(tab_id, lang_desc);
    if(calc_guage > 0){
        lang_desc.unshift("Total gauge fill " + calc_guage + "% " + beta);
    }

    return $.map(lang_desc, function(v){
        v = v.replace('#', ' ');
        var god_flag = false;
        var m = null;
        var c = null;
        // percent
        if(m = v.match(/([\.\d]+)%/)){
            var pct = m[1]*1;
            if(pct >= 500)     { god_flag = true; }        // god
            else if(pct >= 400){ c = 'rgb(153, 0, 204)'; } // out-class
            else if(pct >= 300){ c = 'red'; }              // heroic
            else if(pct >= 200){ c = 'rgb(255, 87, 34)'; } // legendary
            else if(pct >= 100){ c = 'rgb(0, 150, 136)'; } // great
        }
        // quick turn
        else if(m = v.match(/Turn comes ludicrously quicker x(\d+)/)){
            var cnt = m[1]*1;
            if(cnt >= 5){      c = 'red'; }              // heroic
            else if(cnt == 4){ c = 'rgb(255, 87, 34)'; } // legendary
            else if(cnt == 3){ c = 'rgb(0, 150, 136)'; } // great
        }
        // return
        if(god_flag){
            return "<span class='txt-gold' style='font-weight: bold;'>" + v + "</span>";
        }
        else if(c != null){
            return "<span style='font-weight: bold; color: " + c + ";'>" + v + "</span>";
        }
        else {
            return v;
        }
    });
}

function update_player_chart(tab_id, sum_desc){
    var turn_list = [
        'Turn comes ludicrously quicker',
        'Turn comes massively quicker',
        'Turn comes much sooner',
        'Turn comes sooner',
        'Turn comes a bit sooner',
        'Turn comes a little bit sooner',
    ];
    PLAYER_CHARTS[tab_id] = EMU_CHART_KEYS.map(function(k){
        var score;
        if(k == 'Turn'){ // quick turn calc logic
            var turn_cnt = turn_list.reduce(function(sum, v){
                var cnt = sum_desc[v] || 0;
                if(cnt > 0){
                    var score = get_quick_lv_from_desc(v);
                    return sum + (cnt*score);
                }
                else {
                    return sum;
                }
            }, 0);
            // max 30 ( radicious[6]*5 )
            score = Math.ceil(turn_cnt/30*100) || 0;
        }
        else if(k == 'Heal'){ // max 100
            score = sum_desc[k] || 0;
        }
        else { // max 300
            score = Math.ceil(sum_desc[k]/300*100) || 0;
        }
        return score > 100 ? 100 : score;
    });
}

function flat_emu_slots(tab_id){
    return MY_ITEMS[tab_id].reduce(function(sum, r){
        return sum.concat(get_slot_info(r.slots)); 
    }, []);
}

function calc_skill_guage(tab_id, lang_desc){
    var calc = 0;
    var amp  = 100;
    /*
        BoyzTH - Mage Rush give a little skill ampifier
        Boss   - Quick Hitter 5 > Spry Buster 2
        ????   - Quick Hitter 5 == Spray Buster 3
    */
    var REC_MAP = {
        'QUI_4' : 10, 'QUI_5' : 15,
        'QUI_6' : 10, 'QUI_7' : 15, 'QUI_8' : 20, 'QUI_9' : 25, 'QUI_10': 30,
                      'QHT_4' : 15, 'QHT_5' : 20,
        'SPB_1' : 10, 'SPB_2' : 15, 'SPB_3' : 20, 'SPB_4' : 25, 'SPB_5' : 30, 'SPB_6' : 30,
        'MGR_1' : 2,  'MGR_2' : 3,  'MRG_3' : 3,  'MRG_4' : 3,  'MGR_5' : 3,
    };

    // base on guage per turn
    var gpt = lang_desc.filter(function(r){ return r.match(/Gauge \/ turn/); });
    if(gpt.length != 1){
        return calc;
    }
    else {
        calc = gpt[0].match(/turn#\+(\d+)%/)[1]*1;

        // collect guage per hit
        var gph = lang_desc.filter(function(r){ return r.match(/Gauge \/ hit/); });
        if(gph.length == 1){ amp += gph[0].match(/hit#\+(\d+)%/)[1]*1; }
    }

    // collect rec stones
    var rcodes = flat_emu_slots(tab_id).map(function(r){ return r.raw_code; });
    $(rcodes).each(function(i, code){
        var v = REC_MAP[code];
        if(v){ amp += v; }
    });

    // apply amplifier
    calc *= amp/100;

    return parseInt(calc) === calc ? calc : calc.toFixed(2);
}

function get_synergy_pct(materials){
    if(materials.length <= 1){
        return 0;
    }
    else {
        // find matched count
        var prev_m = [];
        var matched_cnt = 0;
        materials.forEach(function(m, i){
            if( i == 0 ){
                prev_m.push(m);
            }
            else {
                if(prev_m.indexOf(m)>-1){
                    matched_cnt++;
                }
                else {
                    if((m == FRAG) ||               // current is fragment
                       (prev_m.indexOf(FRAG)>-1)){  // previous is fragment
                        matched_cnt++;
                    }
                    prev_m.push(m);
                }
            }
        });
        // convert matched count to sync percent
        /*
         * matched_cnt 1 --> 5%
         * matched_cnt 2 --> 20%
         *
         * */
        return 5 * matched_cnt * matched_cnt;
    }
}

function reload_emu_chart(tab_id){
    // ignore if graph tab is deactive
    if( TAB_STATE[tab_id] != tab_id+'-graph' ){
        return;
    }
    var cur_chart = MY_CHARTS[tab_id];
    var cur_data  = PLAYER_CHARTS[tab_id] || [ 0, 0, 0, 0, 0, 0];
    if(cur_chart == null){
        var t_data = {
            labels: EMU_CHART_KEYS.map(function(v){ return v.toUpperCase(); }),
            datasets: [
                {
                    label: "my-dataset",
                    fillColor: "rgba(33, 150, 243, 0.3)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(33,150,243,0.3)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "rgba(233, 30, 99, 1)",
                    pointHighlightStroke: "rgba(233, 30, 99, 1)",
                    data: cur_data,
                },
                {
                    label: "fix-invalid-graph-scale",
                    fillColor: "rgba(0,0,0,0)",
                    strokeColor: "rgba(0,0,0,0)",
                    pointColor: "rgba(0,0,0,0)",
                    pointHighlightFill: "rgba(0,0,0,0)",
                    pointHighlightStroke: "rgba(0,0,0,0)",
                    data: [ 100, 100, 100, 100, 100, 100, 100 ],
                },
            ]
        };
        MY_CHARTS[tab_id] = new Chart($(tab_id+' canvas')[0].getContext("2d")).Radar(t_data, { responsive: true });
    }
    else {
        $(PLAYER_CHARTS[tab_id]).each(function(i, v){
            cur_chart.datasets[0].points[i].value = v;
        });
        cur_chart.update();
    }
}
