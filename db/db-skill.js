var SKILLS = [
    {
        code: 'GVT_FLD_2',   name: 'Ultra Gravity Field',
        level: 2,            element: DARK,
    },
    {
        code: 'GVT_FLD_3',   name: 'Ultimate Gravity Field',
        level: 3,            element: DARK,
    },
    {
        code: 'DRK_TRD_2',   name: 'Ultra Dark Trident',
        level: 2,            element: DARK,
    },
    {
        code: 'GAL_ARW_2',   name: 'Ultra Gale of Arrows',
        level: 2,            element: WIND,
    },
    {
        code: 'IFN_RAY_2',   name: 'Ultra Inferno Ray',
        level: 2,            element: FIRE,
    },
    {
        code: 'IFN_RAI_3',   name: 'Ultimate Inferno Raid',
        level: 3,            element: FIRE,
    },
    {
        code: 'ICE_EDG_1',   name: 'Icicle Edge',
        level: 1,            element: ICE,
    },
    {
        code: 'ICE_EDG_2',   name: 'Ultra Icicle Edge',
        level: 2,            element: ICE,
    },
    {
        code: 'ICE_EDG_4',   name: 'Ultra Icicle Edge Plus',
        level: 2,            element: ICE,
    },
    {
        code: 'ICE_EDG_3',   name: 'Ultimate Icicle Edge',
        level: 3,            element: ICE,
    },
    {
        code: 'DBL_BMR_2',   name: 'Ultra Double Boomerang',
        level: 2,
    },
    {
        code: 'SPD_BMR_2',   name: 'Ultra Spread Boomerang',
        level: 2,
    },
    {
        code: 'SPD_BMR_3',   name: 'Ultimate Spread Boomerang',
        level: 3,
    },
    {
        code: 'RAS_BMR_2',   name: 'Ultra Raster Boomerang',
        level: 2,
    },
    {
        code: 'RAS_BMR_3',   name: 'Ultimate Raster Boomerang',
        level: 3,
    },
    {
        code: 'HRO_BMR_2',   name: "Ultra Hero's Boomerang",
        level: 2,
    },
    {
        code: 'HRO_BMR_3',   name: "Ultimate Hero's Boomerang",
        level: 3,
    },
    {
        code: 'BDL_BMR_2',   name: 'Ultra Bloodlust Boomerang',
        level: 2,
    },
    {
        code: 'BDL_BMR_3',   name: 'Ultimate Bloodlust Boomerang',
        level: 3,
    },
    {
        code: 'NCL_BMR_4',   name: 'Lethal Nightclaw Boomerang',	element: DARK,
        level: 4,
    },
    {
        code: 'LHT_BMR_4',   name: 'Lethal Lightning Boomerang',	element: ELEC,
        level: 4,
    },
    {
        code: 'TMP_BMR_4',   name: 'Lethal Tempest Boomerang',	element: WIND,
        level: 4,
    },
    {
        code: 'SRK_BMR_4',   name: 'Lethal Shuriken Boomerang',
        level: 4,
    },
    {
        code: 'FLM_BLD_2',   name: 'Ultra Flame Blade',
        level: 2,            element: FIRE,
    },
    {
        code: 'FLM_BLD_3',   name: 'Ultimate Flame Blade',
        level: 3,            element: FIRE,
    },
    {
        code: 'DVN_SBR_2',   name: 'Ultra Divine Saber',
        level: 2,            element: LIGHT,
    },
    {
        code: 'LHT_CRS_2',   name: 'Ultra Lightning Cross',
        level: 2,            element: LIGHT,
    },
    {
        code: 'LHT_CRS_3',   name: 'Ultimate Lightning Cross',
        level: 3,            element: LIGHT,
    },
    {
        code: 'JDM_RAI_2',   name: 'Ultra Judgement Raid',
        level: 2,            element: LIGHT,
    },
    {
        code: 'JDM_RAI_3',   name: 'Ultimate Judgement Raid',
        level: 3,            element: LIGHT,
    },
    {
        code: 'LVA_FLM_2',   name: 'Ultra Lava Flame',
        level: 2,            element: FIRE,
    },
    {
        code: 'RAG_AGN_3',   name: 'Rage of Agni',
        level: 3,            element: FIRE,
    },
    {
        code: 'DVL_CLW_2',   name: 'Ultra Devil Claw',
        level: 2,            element: DARK,
    },
    {
        code: 'MTR_STM_1',   name: 'Meteor Storm',
        level: 1,            element: FIRE,
    },
    {
        code: 'MTR_STM_2',   name: 'Ultra Meteor Storm',
        level: 2,            element: FIRE,
    },
    {
        code: 'MTR_STM_3',   name: 'Ultimate Meteor Storm',
        level: 3,            element: FIRE,
    },
    {
        code: 'DRN_BST_2',   name: 'Ultra Drain Burst',
        level: 2,
    },
    {
        code: 'DRN_BST_3',   name: 'Ultimate Drain Burst',
        level: 3,
    },
    {
        code: 'LHT_BST_2',   name: 'Ultra Lightning Blast',
        level: 2,            element: ELEC,
    },
    {
        code: 'LHT_BST_3',   name: 'Ultimate Lightning Blast',
        level: 3,            element: ELEC,
    },
    {
        code: 'LTB_LNC_2',   name: 'Lightning Bolt of Lunacy',
        level: 2,            element: ELEC,
    },
    {
        code: 'LHT_DGR_2',   name: 'Ultra Lightning Dagger',
        level: 2,            element: ELEC,
    },
    {
        code: 'LHT_DGR_3',   name: 'Ultimate Lightning Dagger',
        level: 3,            element: ELEC,
    },
    {
        code: 'LHT_RAI_2',   name: 'Ultra Lightning Raid',
        level: 2,            element: ELEC,
    },
    {
        code: 'UTR_DCH_2',   name: 'Ultra Discharge',
        level: 2,            element: ELEC,
    },
    {
        code: 'LHT_RAY_2',   name: 'Ultra Lightning Ray',
        level: 2,            element: ELEC,
    },
    {
        code: 'LHT_DGN_2',   name: 'Ultra Lightning Dragon',
        level: 2,
    },
    {
        code: 'LHT_DGN_3',   name: 'Ultimate Lightning Dragon',
        level: 3,
    },
    {
        code: 'AIR_BST_2',   name: 'Ultra Air Blast',
        level: 2,            element: WIND,
    },
    {
        code: 'AIR_BST_3',   name: 'Ultimate Air Blast',
        level: 3,            element: WIND,
    },
    {
        code: 'BZD_DGR_2',   name: 'Ultra Blizzard Dagger',
        level: 2,            element: ICE,
    },
    {
        code: 'BZD_DGR_3',   name: 'Ultimate Blizzard Dagger',
        level: 3,            element: ICE,
    },
    {
        code: 'BLZ_RAI_2',     name: 'Ultra Blizzard Raid',
        level: 2,            element: ICE,
    },
    {
        code: 'BLZ_RAI_3',     name: 'Ultimate Blizzard Raid',
        level: 3,            element: ICE,
    },
    {
        code: 'BLZ_DGR_2',   name: 'Ultra Blazing Dagger',
        level: 2,            element: FIRE,
    },
    {
        code: 'DRK_DGR_2',   name: 'Ultra Dagger of Darkness',
        level: 2,            element: DARK,
    },
    {
        code: 'DRK_DGR_3',   name: 'Ultimate Dagger of Darkness',
        level: 3,            element: DARK,
    },
    {
        code: 'STA_DGR_2',   name: 'Ultra Star Dust Dagger',
        level: 2,            element: LIGHT,
    },
    {
        code: 'STA_DGR_3',   name: 'Ultimate Star Dust Dagger',
        level: 3,            element: LIGHT,
    },
    {
        code: 'HUG_CYL_3',   name: 'Ultimate Huge Cyclone',
        level: 3,            element: WIND,
    },
    {
        code: 'HUG_CYL_4',   name: 'Ultra Huge Cyclone Plus',
        level: 3,            element: WIND,
    },
    {
        code: 'HLY_BST_2',   name: 'Ultra Holy Blast',
        level: 2,            element: LIGHT,
    },
    {
        code: 'HLY_BST_3',   name: 'Ultimate Holy Blast',
        level: 3,            element: LIGHT,
    },
    {
        code: 'PTN_RAI_2',   name: 'Ultra Photon Rain',
        level: 2,            element: LIGHT,
    },
    {
        code: 'THD_STM_2',   name: 'Ultra Thunder Storm',
        level: 2,            element: ELEC,
    },
    {
        code: 'THD_STM_3',   name: 'Ultimate Thunder Storm',
        level: 3,            element: ELEC,
    },
    {
        code: 'RRY_ETL_3',   name: 'Radiant Ray of Eternal Love',
        level: 3,
    },
    {
        code: 'PHO_RAI_2',   name: 'Phoenix Raid Ultra',
        level: 2,            element: FIRE,
    },
    {
        code: 'THD_BLT_2',   name: 'Ultra Thunder Bolt',
        level: 2,            element: ELEC,
    },
    {
        code: 'LHT_DOO_2',   name: 'Ultra Lightning Doom',
        level: 2,            element: ELEC,
    },
    {
        code: 'LHT_DOO_3',   name: 'Ultimate Lightning Doom',
        level: 3,            element: ELEC,
    },
    {
        code: 'DRK_GZR_2',   name: 'Ultra Dark Gazer',
        level: 2,            element: DARK,
    },
    {
        code: 'DRK_MTR_2',   name: 'Ultra Dark Matter',
        level: 2,            element: DARK,
    },
    {
        code: 'DRK_MTR_3',   name: 'Ultimate Dark Matter',
        level: 3,            element: DARK,
    },
    {
        code: 'TPS_RAI_2',   name: 'Ultra Tempest Raid',
        level: 2,            element: WIND,
    },
    {
        code: 'TPS_RAI_3',   name: 'Ultimate Tempest Raid',
        level: 3,            element: WIND,
    },
    {
        code: 'TND_DGR_2',   name: 'Ultra Tornado Dagger',
        level: 2,            element: WIND,
    },
    {
        code: 'TND_DGR_3',   name: 'Ultimate Tornado Dagger',
        level: 3,            element: WIND,
    },
    {
        code: 'HVN_RAI_2',   name: "Ultra Heaven's Rain",
        level: 2,            element: LIGHT,
    },
    {
        code: 'HVN_RAI_3',   name: "Ultimate Heaven's Rain",
        level: 3,            element: LIGHT,
    },
    {
        code: 'SHN_ARW_2',   name: "Ultra Shining Arrow",
        level: 2,            element: LIGHT,
    },
    {
        code: 'SHN_ARW_3',   name: "Ultimate Shining Arrow",
        level: 3,            element: LIGHT,
    },
    {
        code: 'SPR_AIR_1',   name: "Spiral Air",
        level: 1,            element: WIND,
    },
    {
        code: 'RIS_SUN_2',   name: "Ultra Rising Sun",
        level: 2,            element: FIRE,
    },
    {
        code: 'RIS_DRK_3',   name: "Ultimate Rising Darkness",
        level: 3,            element: DARK,
    },
    {
        code: 'HLY_SAN_2',   name: "Ultra Holy Sanctuary",
        level: 2,            element: LIGHT,
    },
    {
        code: 'WLD_BRK_2',  name: "Dancing Blades",
        level: 2,
    },
    {
        code: 'WLD_BRK_3',  name: "World Breaker",
        level: 3,
    },
    {
        code: 'GLC_WHO_3',  name: "Ultimate Glacial Whiteout",
        level: 3,           element: ICE,
    },
    {
        code: 'FZR_BTH_3',  name: "Ultimate Freezer Breath",
        level: 3,           element: ICE,
    },
    {
        code: 'CLT_FLA_2',  name: "Celestial Flare",
        level: 2,           element: FIRE,
    },
    {
        code: 'STM_CAG_2',  name: "Ultra Storm Cage",
        level: 2,           element: WIND,
    },
    {
        code: 'LHN_VTX_3',  name: "Ultimate Lightning Vortex",
        level: 3,           element: ELEC,
    },
    {
        code: 'EDG_IFN_3',  name: "Edge of Inferno",
        level: 3,           element: FIRE,
    },
    {
        code: 'WLD_END_3',  name: "World's End",
        level: 3,           element: FIRE,
    },
    {
        code: 'SAB_WTH_3',  name: "Ultimate Sabres of Wrath",
        level: 3,
    },
    {
        code: 'SAB_WTH_4',  name: "Lethal Sabres of Wrath",
        level: 4,
    },
    {
        code: 'ETR_WAV_2',  name: "Ultra Ethereal Wave",
        level: 2,           element: LIGHT,
    },
    {
        code: 'ETR_WAV_3',  name: "Ultimate Ethereal Wave",
        level: 3,           element: LIGHT,
    },
    {
        code: 'ICB_EDG_3',  name: "Icebound Edge",
        level: 3,           element: ICE,
    },
    {
        code: 'ICB_EDG_4',  name: "Lethal Icebound Edge",
        level: 4,           element: ICE,
    },
    {
        code: 'PGT_FLM_3',  name: "Ultimate Purgatory Flame",
        level: 3,           element: FIRE,
    },
    {
        code: 'PGT_FLM_4',  name: "Lethal Purgatory Flame",
        level: 4,           element: FIRE,
    },
    {
        code: 'FRJ_DVW_3',  name: "Freyja's Divine Wind",
        level: 3,
    },
    {
        code: 'MJR_RAG_3',  name: "Mjolnir Rage",
        level: 3,
    },
    {
        code: 'CSM_IMP_4',  name: "Lethal Cosmic Impact",
        level: 4,
    },
    {
        code: 'WTH_HDS_1',  name: "Wrath of Hades",
        level: 1,           element: DARK,
    },
    {
        code: 'WTH_ZPR_1',  name: "Wrath of Zephyrus",
        level: 1,           element: WIND,
    },
    {
        code: 'WTH_ZPR_2',  name: "Ultra Wrath of Zephyrus",
        level: 2,           element: WIND,
    },
    {
        code: 'AGS_SHD_2',  name: "Ultra Aegis Shield",
        level: 2,
    },
    {
        code: 'AGS_SHD_3',  name: "Ultimate Aegis Shield",
        level: 3,
    },
    {
        code: 'CSM_DNT_3',  name: "Cosmic Detonation",
        level: 3,
    },
    {
        code: 'DEF_DES_2',  name: "Ultra DEF Destruction",
        level: 2,
    },
    {
        code: 'DEF_DES_3',  name: "Ultimate DEF Destruction",
        level: 3,
    },

    // brave skill
    // Lvl.1
    {
        code: 'PHT_CNN_1',  name: "Photon Canon Lv.1",
        element: LIGHT,
    },
    {
        code: 'ICE_BST_1',  name: "Ice Burst Lv.1",
        element: ICE,
    },
    {
        code: 'FRZ_OBT_1',  name: "Freezing Outburst Lv.1",
        element: ICE,
    },
    {
        code: 'BLZ_OBT_1',  name: "Blazing Outburst Lv.1",
        element: FIRE,
    },
    {
        code: 'CHO_MTO_1',  name: "Chaos Meteor Lv.1",
        element: DARK,
    },
    {
        code: 'WND_SHF_1',  name: "Wind Shaft Lv.1",
        element: WIND,
    },
    {
        code: 'SCT_OBT_1',  name: "Sanct Outburst Lv.1",
        element: LIGHT,
    },
    {
        code: 'RZR_WHW_1',  name: "Razor Whirlwind Lv.1",
        element: WIND,
    },
    {
        code: 'SHD_OBT_1',  name: "Shadow Outburst Lv.1",
        element: DARK,
    },
    // Lvl.2
    {
        code: 'PTN_MTO_2',  name: "Photon Meteor Lv.2",
        element: LIGHT,
    },
    {
        code: 'PHT_CNN_2',  name: "Photon Canon Lv.2",
        element: LIGHT,
    },
    {
        code: 'ICE_BST_2',  name: "Ice Burst Lv.2",
        element: ICE,
    },
    {
        code: 'FRZ_OBT_2',  name: "Freezing Outburst Lv.2",
        element: ICE,
    },
    {
        code: 'BLZ_OBT_2',  name: "Blazing Outburst Lv.2",
        element: FIRE,
    },
    {
        code: 'CHO_MTO_2',  name: "Chaos Meteor Lv.2",
        element: DARK,
    },
    {
        code: 'WND_SHF_2',  name: "Wind Shaft Lv.2",
        element: WIND,
    },
    {
        code: 'PTN_MTO_2',  name: "Photon Meteor Lv.2",
        element: LIGHT,
    },
    {
        code: 'SCT_OBT_2',  name: "Sanct Outburst Lv.2",
        element: LIGHT,
    },
    {
        code: 'RZR_WHW_2',  name: "Razor Whirlwind Lv.2",
        element: WIND,
    },
    {
        code: 'SHD_OBT_2',  name: "Shadow Outburst Lv.2",
        element: DARK,
    },
    // Lvl.3
    {
        code: 'PTN_MTO_3',  name: "Photon Meteor Lv.3",
        element: LIGHT,
    },
    {
        code: 'PHT_CNN_3',  name: "Photon Canon Lv.3",
        element: LIGHT,
    },
    {
        code: 'ICE_BST_3',  name: "Ice Burst Lv.3",
        element: ICE,
    },
    {
        code: 'FRZ_OBT_3',  name: "Freezing Outburst Lv.3",
        element: ICE,
    },
    {
        code: 'BLZ_OBT_3',  name: "Blazing Outburst Lv.3",
        element: FIRE,
    },
    {
        code: 'CHO_MTO_3',  name: "Chaos Meteor Lv.3",
        element: DARK,
    },
    {
        code: 'WND_SHF_3',  name: "Wind Shaft Lv.3",
        element: WIND,
    },
    {
        code: 'PTN_MTO_3',  name: "Photon Meteor Lv.3",
        element: LIGHT,
    },
    {
        code: 'SCT_OBT_3',  name: "Sanct Outburst Lv.3",
        element: LIGHT,
    },
    {
        code: 'RZR_WHW_3',  name: "Razor Whirlwind Lv.3",
        element: WIND,
    },
    {
        code: 'SHD_OBT_3',  name: "Shadow Outburst Lv.3",
        element: DARK,
    },
];
