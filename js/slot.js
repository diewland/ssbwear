function slots_to_arr(txt){
    var d = txt.split('|');
    var dd = d[0].split('-');
    if(d[1]){
        dd.push(d[1])
    }
    return dd;
}

function get_slot_info(txt){
    // flat items
    var stxt = txt.split('|');
    var items = stxt[0].split('-');
    if(stxt[1]){
        items = items.concat(stxt[1].split('-'));
    }
    // return craft data
    return items.map(function(raw_code, i){
        // initialize as blank slot
        var output = {
            raw_code    : raw_code,
            raw_code0   : raw_code, // shape code
            removable   : true,
        };
        var rdata  = get_data_from_raw_code(raw_code);
        if(rdata.lv){
            var s_info = SLOTS[raw_code];
            if(s_info){
                output.removable = false;
                output.img_code  = rdata.img_code;
                output.title     = s_info.title;
                output.desc      = s_info.desc;
                output.type      = rdata.type;
                output.lv        = rdata.lv;
            }
        }
        return output;
    });
}

function get_data_from_raw_code(raw_code){
    var limited_stones = [
        // single
        'AVG', 'KOH', 'EFR', 'SOG', 'HWL', 'HRF', 'VSP', 'TMV', 'MGR', 'WLW', 'SSL', 'SPB', 'GTT',
        // party
        'STB', 'LSG', 'WSM', 'SMR', 'IVT', 'DVS',
    ];
    var data    = raw_code.split('_');
    var type    = data[0];
    var lv      = data[1]*1;
    var img_lv  = lv;
    if( lv > 10 ){ // item class 2 lv.6
        img_lv = lv - 5;
    }
    else if( limited_stones.indexOf( type ) == -1 ){
        // reuse image for non-limited stones
        img_lv = lv % 5 == 0 ? 5 : lv % 5;
    }
    return {
        type:       type,
        lv:         lv,
        img_code:   type + '_' + img_lv,
    }
}

function get_slots_by_type(type){
    var result = [];
    $.each(SLOTS, function(k, r){
        if(r.type == type){
            var d = get_data_from_raw_code(k);
            result.push({
                title:      r.title,
                desc:       r.desc,
                type:       d.type,
                lv:         d.lv,
                raw_code:   k,
                raw_code0:  type,
                img_code:   d.img_code,
                removable:  true,
            });
        }
    });
    return result;
}

function gen_txt_slots_by_arr(rr){
    var str = '';
    $.each(rr, function(i, v){
        if(i == 0){
            str = v;
        }
        else if(i == 5){ // +15
            str += '|' + v;
        }
        else {
            str += '-' + v;
        }
    })
    return str;
}

function gen_slots(txt, brave_lv){
    var brave_lv = brave_lv || 0;
    var html = '';
    var msgs = [];
    var infos = get_slot_info(txt);

    // slots related with bravanization
    if(brave_lv < 15){ // 5 standard slots
        infos = infos.slice(0, 5);
    }
    else if(brave_lv == 15){ // add 6th slot
        infos = infos.slice(0, 6);
    }
    else if(brave_lv == 20){ // add 7th slot
        infos = infos.slice(0, 7);
    }
    $(infos).each(function(i, r){
        var html_slot = '';
        if(r.img_code){ // fix el
            // TODO linked stones issue
            msgs.push({ title: r.title, desc: r.desc, type: r.type, lv: r.lv, });
            /*
            if(i == 0){ // first el
                msgs.push({ title: r.title, desc: r.desc, type: r.type, lv: r.lv, });
            }
            else if((r.type == infos[i-1].type)&&( r.type != 'EFR' )) { // linked stones
                var pindex  = msgs.length-1;
                var p_title = msgs[pindex].title;
                var p_lv    = msgs[pindex].lv;
                var cur_lv  = p_lv + r.lv;
                msgs[pindex].title = p_title.replace(p_lv, cur_lv);
                msgs[pindex].desc  = SLOTS[ r.type + '_' + (cur_lv+2)].desc;
                msgs[pindex].lv    = cur_lv;

                html += "=";
            }
            else {
                msgs.push({ title: r.title, desc: r.desc, type: r.type, lv: r.lv, });
            }
            */
            html_slot = "<div class='icon2' style='background-image: url(./img/el/" + r.img_code + ".png);'></div>";
        }
        else { // blank slot
            html_slot = "<img src='./img/sl/" + r.raw_code + ".png' class='icon3' />";
        }
        // add blacket for hidden slot
        if(i == 5){ // 6th slot
            html_slot = '(' + html_slot;
        }
        else if(i == 6){ // 7th slot
            html_slot = html_slot + ')';
        }
        html += html_slot;
    });
    // unknown extra slots + close bracket
    if(brave_lv == 15){
        if(infos.length == 5){
            html += "(?)";
        }
        if(infos.length == 6){
            html += ")";
        }
    }
    else if(brave_lv == 20){
        if(infos.length == 5){
            html += "(??)";
        }
        if(infos.length == 6){
            html += "?)";
        }
    }
    // gen message
    var gen_msg = '';
    $(msgs).each(function(i, r){
        gen_msg += r.title + "\\n( " + r.desc + " )\\n\\n";
    });
    gen_msg = gen_msg.replace(/'/g, "\\x27"); // fix single quote problem
    return "<span onclick='alert(\"" + gen_msg + "\");'>" + html + "</span>";
}

function find_stones_by(slots_txt, field, value){
    return get_slot_info(slots_txt).filter(function(o){
        return o[field] == null ? false : o[field].match( new RegExp(value, 'i') ) != null;
    });
}

function find_stones_by_type(slots_txt, value){
    return find_stones_by(slots_txt, 'type', value);
}

function find_stones_by_desc(slots_txt, value){
    return find_stones_by(slots_txt, 'desc', value);
}

function get_quick_lv_from_desc(desc){
    if( desc.indexOf('Turn comes ludicrously quicker') > -1 ){
        return 6;
    }
    else if( desc.indexOf('Turn comes massively quicker') > -1 ){
        return 5;
    }
    else if( desc.indexOf('Turn comes much sooner') > -1 ){
        return 4;
    }
    else if( desc.indexOf('Turn comes sooner') > -1 ){
        return 3;
    }
    else if( desc.indexOf('Turn comes a bit sooner') > -1 ){
        return 2;
    }
    else if( desc.indexOf('Turn comes a little bit sooner') > -1 ){
        return 1;
    }
    else {
        return 0;
    }
}
