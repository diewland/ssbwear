function gen_thumbnail(r, suffix, brave_lv){
    suffix = suffix || '';
    var item_filename = '';
    if( r.rcode ){ // raw code
        item_filename = RCODE_C[r.type] + '_' + RCODE_T[r.type+suffix] + '_' + r.rcode + '_03_1';
    }
    else { // old school
        item_filename = r.code + suffix;
    }
    var type = r.type; // weapon
    if( r.type.indexOf('Equipment') > -1 ){ // equipment
        type = suffix == '_2' ? 'icon_boy' : 'icon_girl';
    }
    var rank = RANK_SS; // default rank
    if( r.rank ){
        rank = r.rank;
    }
    var bicon = 'blank';
    if(brave_lv > 0){
        bicon = rank == RANK_S ? 'p10' : 'p' + brave_lv; // ranks S limit +10
    }
    var item_code = r.rcode || r.code;
    var html = "<div class='thb thb_v" + suffix + "' style='"
                + "background:"
                    + "url(\"./img/ic/" + bicon + ".png\") no-repeat,"
                    + "url(\"./img/ic/" + type + ".png\") no-repeat,"
                    + "url(\"./img/ic/" + r.material + ".png\") no-repeat,"
                    + "url(\"./img/frame/f_" + rank + ".png\") no-repeat,"
                    + "url(\"./img2/" + r.type + "/" + item_filename + ".png\") no-repeat,"
                    + "url(\"./img/frame/bg_" + rank + ".png\") no-repeat;"
                + "cursor: pointer;"
                + "' onclick='add_emu_code(\"" + item_code + "\", \"" + r.type + "\");'>" // link with emu tab
                + "</div>";
    return html;
}
