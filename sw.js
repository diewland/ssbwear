var cacheName = 'ssbwear-v1';
var filesToCache = [
  '/',
  '/index.html',
  '/css/base.css',
  '/css/bootstrap-theme.css',
  '/css/bootstrap-theme.css.map',
  '/css/bootstrap-theme.min.css',
  '/css/bootstrap.css',
  '/css/bootstrap.css.map',
  '/css/bootstrap.min.css',
  '/css/lightbox.css',
  '/db/changelog.txt',
  '/db/const.js',
  '/db/db-crystal.js',
  '/db/db-fragment.js',
  '/db/db-horn.js',
  '/db/db-iron.js',
  '/db/db-skill.js',
  '/db/db-slot.js',
  '/db/db-weapon.js',
  '/db/db-wood.js',
  '/fonts/glyphicons-halflings-regular.eot',
  '/fonts/glyphicons-halflings-regular.svg',
  '/fonts/glyphicons-halflings-regular.ttf',
  '/fonts/glyphicons-halflings-regular.woff',
  '/img/close.png',
  '/img/loading.gif',
  '/img/next.png',
  '/img/prev.png',
  '/img/el/ABS_1.png',
  '/img/el/ABS_2.png',
  '/img/el/ABS_3.png',
  '/img/el/ABS_4.png',
  '/img/el/ABS_5.png',
  '/img/el/ADH_1.png',
  '/img/el/ADH_2.png',
  '/img/el/ADH_3.png',
  '/img/el/ADH_4.png',
  '/img/el/ADH_5.png',
  '/img/el/ASC_1.png',
  '/img/el/ASC_2.png',
  '/img/el/ASC_3.png',
  '/img/el/ASC_4.png',
  '/img/el/ASC_5.png',
  '/img/el/ASM_1.png',
  '/img/el/ASM_2.png',
  '/img/el/ASM_3.png',
  '/img/el/ASM_4.png',
  '/img/el/ASM_5.png',
  '/img/el/ATK_1.png',
  '/img/el/ATK_2.png',
  '/img/el/ATK_3.png',
  '/img/el/ATK_4.png',
  '/img/el/ATK_5.png',
  '/img/el/AVG_1.png',
  '/img/el/AVG_2.png',
  '/img/el/AVG_3.png',
  '/img/el/AVG_4.png',
  '/img/el/AVG_5.png',
  '/img/el/AVG_6.png',
  '/img/el/BAR_1.png',
  '/img/el/BAR_2.png',
  '/img/el/BAR_3.png',
  '/img/el/BAR_4.png',
  '/img/el/BAR_5.png',
  '/img/el/BAT_1.png',
  '/img/el/BAT_2.png',
  '/img/el/BAT_3.png',
  '/img/el/BAT_4.png',
  '/img/el/BAT_5.png',
  '/img/el/BBL_1.png',
  '/img/el/BBL_2.png',
  '/img/el/BBL_3.png',
  '/img/el/BBL_4.png',
  '/img/el/BBL_5.png',
  '/img/el/BIA_1.png',
  '/img/el/BIA_2.png',
  '/img/el/BIA_3.png',
  '/img/el/BIA_4.png',
  '/img/el/BIA_5.png',
  '/img/el/CMB_1.png',
  '/img/el/CMB_2.png',
  '/img/el/CMB_3.png',
  '/img/el/CMB_4.png',
  '/img/el/CMB_5.png',
  '/img/el/COU_1.png',
  '/img/el/COU_2.png',
  '/img/el/COU_3.png',
  '/img/el/COU_4.png',
  '/img/el/COU_5.png',
  '/img/el/DEF_1.png',
  '/img/el/DEF_2.png',
  '/img/el/DEF_3.png',
  '/img/el/DEF_4.png',
  '/img/el/DEF_5.png',
  '/img/el/DFS_1.png',
  '/img/el/DFS_2.png',
  '/img/el/DFS_3.png',
  '/img/el/DFS_4.png',
  '/img/el/DFS_5.png',
  '/img/el/DMH_1.png',
  '/img/el/DMH_2.png',
  '/img/el/DMH_3.png',
  '/img/el/DMH_4.png',
  '/img/el/DMH_5.png',
  '/img/el/DOA_1.png',
  '/img/el/DOA_2.png',
  '/img/el/DOA_3.png',
  '/img/el/DOA_4.png',
  '/img/el/DOA_5.png',
  '/img/el/DRKD_1.png',
  '/img/el/DRKD_2.png',
  '/img/el/DRKD_3.png',
  '/img/el/DRKD_4.png',
  '/img/el/DRKD_5.png',
  '/img/el/DRK_1.png',
  '/img/el/DRK_2.png',
  '/img/el/DRK_3.png',
  '/img/el/DRK_4.png',
  '/img/el/DRK_5.png',
  '/img/el/DSM_.png',
  '/img/el/DSM_1.png',
  '/img/el/DSM_2.png',
  '/img/el/DSM_4.png',
  '/img/el/DSM_5.png',
  '/img/el/DVR_1.png',
  '/img/el/DVR_2.png',
  '/img/el/DVR_3.png',
  '/img/el/DVR_4.png',
  '/img/el/DVR_5.png',
  '/img/el/DVS_1.png',
  '/img/el/DVS_2.png',
  '/img/el/DVS_3.png',
  '/img/el/DVS_4.png',
  '/img/el/DVS_5.png',
  '/img/el/DVS_6.png',
  '/img/el/EFR_1.png',
  '/img/el/EFR_2.png',
  '/img/el/EFR_3.png',
  '/img/el/EFR_4.png',
  '/img/el/EFR_5.png',
  '/img/el/EFR_6.png',
  '/img/el/ELED_1.png',
  '/img/el/ELED_2.png',
  '/img/el/ELED_3.png',
  '/img/el/ELED_4.png',
  '/img/el/ELED_5.png',
  '/img/el/ELE_1.png',
  '/img/el/ELE_2.png',
  '/img/el/ELE_3.png',
  '/img/el/ELE_4.png',
  '/img/el/ELE_5.png',
  '/img/el/ELE_6.png',
  '/img/el/ELF_1.png',
  '/img/el/ELF_2.png',
  '/img/el/ELF_3.png',
  '/img/el/ELF_4.png',
  '/img/el/ELF_5.png',
  '/img/el/FIRD_1.png',
  '/img/el/FIRD_2.png',
  '/img/el/FIRD_3.png',
  '/img/el/FIRD_4.png',
  '/img/el/FIRD_5.png',
  '/img/el/FIR_1.png',
  '/img/el/FIR_2.png',
  '/img/el/FIR_3.png',
  '/img/el/FIR_4.png',
  '/img/el/FIR_5.png',
  '/img/el/FUR_1.png',
  '/img/el/FUR_2.png',
  '/img/el/FUR_3.png',
  '/img/el/FUR_4.png',
  '/img/el/FUR_5.png',
  '/img/el/GOO_1.png',
  '/img/el/GOO_2.png',
  '/img/el/GOO_3.png',
  '/img/el/GOO_4.png',
  '/img/el/GOO_5.png',
  '/img/el/GTT_1.png',
  '/img/el/GTT_2.png',
  '/img/el/GTT_3.png',
  '/img/el/GTT_4.png',
  '/img/el/GTT_5.png',
  '/img/el/GTT_6.png',
  '/img/el/HAS_1.png',
  '/img/el/HAS_2.png',
  '/img/el/HAS_3.png',
  '/img/el/HAS_4.png',
  '/img/el/HAS_5.png',
  '/img/el/HDB_1.png',
  '/img/el/HDB_2.png',
  '/img/el/HDB_3.png',
  '/img/el/HDB_4.png',
  '/img/el/HDB_5.png',
  '/img/el/HEA_1.png',
  '/img/el/HEA_2.png',
  '/img/el/HEA_3.png',
  '/img/el/HEA_4.png',
  '/img/el/HEA_5.png',
  '/img/el/HFG_1.png',
  '/img/el/HKM_1.png',
  '/img/el/HKM_2.png',
  '/img/el/HKM_3.png',
  '/img/el/HKM_4.png',
  '/img/el/HKM_5.png',
  '/img/el/HP_1.png',
  '/img/el/HP_2.png',
  '/img/el/HP_3.png',
  '/img/el/HP_4.png',
  '/img/el/HP_5.png',
  '/img/el/HRF_1.png',
  '/img/el/HRF_2.png',
  '/img/el/HRF_3.png',
  '/img/el/HRF_4.png',
  '/img/el/HRF_5.png',
  '/img/el/HRF_6.png',
  '/img/el/HTF_1.png',
  '/img/el/HTF_2.png',
  '/img/el/HTF_3.png',
  '/img/el/HTF_4.png',
  '/img/el/HTF_5.png',
  '/img/el/HVH_1.png',
  '/img/el/HVH_2.png',
  '/img/el/HVH_3.png',
  '/img/el/HVH_4.png',
  '/img/el/HVH_5.png',
  '/img/el/HWL_1.png',
  '/img/el/HWL_2.png',
  '/img/el/HWL_3.png',
  '/img/el/HWL_4.png',
  '/img/el/HWL_5.png',
  '/img/el/HWL_6.png',
  '/img/el/ICED_1.png',
  '/img/el/ICED_2.png',
  '/img/el/ICED_3.png',
  '/img/el/ICED_4.png',
  '/img/el/ICED_5.png',
  '/img/el/ICE_1.png',
  '/img/el/ICE_2.png',
  '/img/el/ICE_3.png',
  '/img/el/ICE_4.png',
  '/img/el/ICE_5.png',
  '/img/el/ICE_6.png',
  '/img/el/IVT_1.png',
  '/img/el/IVT_2.png',
  '/img/el/IVT_3.png',
  '/img/el/IVT_4.png',
  '/img/el/IVT_5.png',
  '/img/el/IVT_6.png',
  '/img/el/JWF_1.png',
  '/img/el/JWF_2.png',
  '/img/el/JWF_3.png',
  '/img/el/JWF_4.png',
  '/img/el/JWF_5.png',
  '/img/el/KOH_1.png',
  '/img/el/KOH_2.png',
  '/img/el/KOH_3.png',
  '/img/el/KOH_4.png',
  '/img/el/KOH_5.png',
  '/img/el/KOH_6.png',
  '/img/el/KTS_1.png',
  '/img/el/KTS_2.png',
  '/img/el/KTS_3.png',
  '/img/el/KTS_4.png',
  '/img/el/KTS_5.png',
  '/img/el/LHTD_1.png',
  '/img/el/LHTD_2.png',
  '/img/el/LHTD_3.png',
  '/img/el/LHTD_4.png',
  '/img/el/LHTD_5.png',
  '/img/el/LHT_1.png',
  '/img/el/LHT_2.png',
  '/img/el/LHT_3.png',
  '/img/el/LHT_4.png',
  '/img/el/LHT_5.png',
  '/img/el/LSG_1.png',
  '/img/el/LSG_2.png',
  '/img/el/LSG_3.png',
  '/img/el/LSG_4.png',
  '/img/el/LSG_5.png',
  '/img/el/LSG_6.png',
  '/img/el/MCR_1.png',
  '/img/el/MCR_2.png',
  '/img/el/MCR_3.png',
  '/img/el/MCR_4.png',
  '/img/el/MCR_5.png',
  '/img/el/MGR_1.png',
  '/img/el/MGR_2.png',
  '/img/el/MGR_3.png',
  '/img/el/MGR_4.png',
  '/img/el/MGR_5.png',
  '/img/el/MGR_6.png',
  '/img/el/MSM_1.png',
  '/img/el/MSM_2.png',
  '/img/el/MSM_3.png',
  '/img/el/MSM_4.png',
  '/img/el/MSM_5.png',
  '/img/el/NBR_1.png',
  '/img/el/NBR_2.png',
  '/img/el/NBR_3.png',
  '/img/el/NBR_4.png',
  '/img/el/NBR_5.png',
  '/img/el/QHT_1.png',
  '/img/el/QHT_2.png',
  '/img/el/QHT_3.png',
  '/img/el/QHT_4.png',
  '/img/el/QHT_5.png',
  '/img/el/QUI_1.png',
  '/img/el/QUI_2.png',
  '/img/el/QUI_3.png',
  '/img/el/QUI_4.png',
  '/img/el/QUI_5.png',
  '/img/el/RTB_1.png',
  '/img/el/RTB_2.png',
  '/img/el/RTB_3.png',
  '/img/el/RTB_4.png',
  '/img/el/RTB_5.png',
  '/img/el/SBI_1.png',
  '/img/el/SBI_2.png',
  '/img/el/SBI_3.png',
  '/img/el/SBI_4.png',
  '/img/el/SBI_5.png',
  '/img/el/SBK_1.png',
  '/img/el/SBK_2.png',
  '/img/el/SBK_3.png',
  '/img/el/SBK_4.png',
  '/img/el/SBK_5.png',
  '/img/el/SCT_1.png',
  '/img/el/SCT_2.png',
  '/img/el/SCT_3.png',
  '/img/el/SCT_4.png',
  '/img/el/SCT_5.png',
  '/img/el/SKA_1.png',
  '/img/el/SKA_2.png',
  '/img/el/SKA_3.png',
  '/img/el/SKA_4.png',
  '/img/el/SKA_5.png',
  '/img/el/SKG_1.png',
  '/img/el/SKG_2.png',
  '/img/el/SKG_3.png',
  '/img/el/SKG_4.png',
  '/img/el/SKG_5.png',
  '/img/el/SKL_1.png',
  '/img/el/SKL_2.png',
  '/img/el/SKL_3.png',
  '/img/el/SKL_4.png',
  '/img/el/SKL_5.png',
  '/img/el/SKR_1.png',
  '/img/el/SKR_2.png',
  '/img/el/SKR_3.png',
  '/img/el/SKR_4.png',
  '/img/el/SKR_5.png',
  '/img/el/SMR_1.png',
  '/img/el/SMR_2.png',
  '/img/el/SMR_3.png',
  '/img/el/SMR_4.png',
  '/img/el/SMR_5.png',
  '/img/el/SMR_6.png',
  '/img/el/SOG_1.png',
  '/img/el/SOG_2.png',
  '/img/el/SOG_3.png',
  '/img/el/SOG_4.png',
  '/img/el/SOG_5.png',
  '/img/el/SOG_6.png',
  '/img/el/SPB_1.png',
  '/img/el/SPB_2.png',
  '/img/el/SPB_3.png',
  '/img/el/SPB_4.png',
  '/img/el/SPB_5.png',
  '/img/el/SPB_6.png',
  '/img/el/SPG_1.png',
  '/img/el/SPG_2.png',
  '/img/el/SPG_3.png',
  '/img/el/SPG_4.png',
  '/img/el/SPG_5.png',
  '/img/el/SPG_6.png',
  '/img/el/SPS_1.png',
  '/img/el/SPS_2.png',
  '/img/el/SPS_3.png',
  '/img/el/SPS_4.png',
  '/img/el/SPS_5.png',
  '/img/el/SRS_1.png',
  '/img/el/SRS_2.png',
  '/img/el/SRS_3.png',
  '/img/el/SRS_4.png',
  '/img/el/SRS_5.png',
  '/img/el/SSL_1.png',
  '/img/el/SSL_2.png',
  '/img/el/SSL_3.png',
  '/img/el/SSL_4.png',
  '/img/el/SSL_5.png',
  '/img/el/SSL_6.png',
  '/img/el/STB_6.png',
  '/img/el/STD_1.png',
  '/img/el/STD_2.png',
  '/img/el/STD_3.png',
  '/img/el/STD_4.png',
  '/img/el/STD_5.png',
  '/img/el/SUR_1.png',
  '/img/el/SUR_2.png',
  '/img/el/SUR_3.png',
  '/img/el/SUR_4.png',
  '/img/el/SUR_5.png',
  '/img/el/SWA_1.png',
  '/img/el/SWA_2.png',
  '/img/el/SWA_3.png',
  '/img/el/SWA_4.png',
  '/img/el/SWA_5.png',
  '/img/el/TMV_1.png',
  '/img/el/TMV_2.png',
  '/img/el/TMV_3.png',
  '/img/el/TMV_4.png',
  '/img/el/TMV_5.png',
  '/img/el/TMV_6.png',
  '/img/el/TOP_1.png',
  '/img/el/TOP_2.png',
  '/img/el/TOP_3.png',
  '/img/el/TOP_4.png',
  '/img/el/TOP_5.png',
  '/img/el/VSP_1.png',
  '/img/el/VSP_2.png',
  '/img/el/VSP_3.png',
  '/img/el/VSP_4.png',
  '/img/el/VSP_5.png',
  '/img/el/VSP_6.png',
  '/img/el/WLW_1.png',
  '/img/el/WLW_2.png',
  '/img/el/WLW_3.png',
  '/img/el/WLW_4.png',
  '/img/el/WLW_5.png',
  '/img/el/WLW_6.png',
  '/img/el/WNDD_1.png',
  '/img/el/WNDD_2.png',
  '/img/el/WNDD_3.png',
  '/img/el/WNDD_4.png',
  '/img/el/WNDD_5.png',
  '/img/el/WND_1.png',
  '/img/el/WND_2.png',
  '/img/el/WND_3.png',
  '/img/el/WND_4.png',
  '/img/el/WND_5.png',
  '/img/el/WRC_1.png',
  '/img/el/WRC_2.png',
  '/img/el/WRC_3.png',
  '/img/el/WRC_4.png',
  '/img/el/WRC_5.png',
  '/img/el/WRC_6.png',
  '/img/el/WSM_1.png',
  '/img/el/WSM_2.png',
  '/img/el/WSM_3.png',
  '/img/el/WSM_4.png',
  '/img/el/WSM_5.png',
  '/img/el/WSM_6.png',
  '/img/frame/bg_le.png',
  '/img/frame/bg_s.png',
  '/img/frame/bg_ss.png',
  '/img/frame/f_le.png',
  '/img/frame/f_s.png',
  '/img/frame/f_ss.png',
  '/img/ic/blank.png',
  '/img/ic/Crystal.png',
  '/img/ic/Equipment Armor.png',
  '/img/ic/Equipment Head.png',
  '/img/ic/Fragment.png',
  '/img/ic/Horn.png',
  '/img/ic/icon_boy.png',
  '/img/ic/icon_cost.png',
  '/img/ic/icon_girl.png',
  '/img/ic/Iron.png',
  '/img/ic/p10.png',
  '/img/ic/p15.png',
  '/img/ic/p20.png',
  '/img/ic/Weapon Fist.png',
  '/img/ic/Weapon Hammer.png',
  '/img/ic/Weapon Lance.png',
  '/img/ic/Weapon Staff.png',
  '/img/ic/Weapon Sword.png',
  '/img/ic/Weapon.png',
  '/img/ic/Wood.png',
  '/img/sl/CIR.png',
  '/img/sl/DAI.png',
  '/img/sl/KIT.png',
  '/img/sl/PAR.png',
  '/img/sl/REC.png',
  '/img/sl/STA.png',
  '/img/sl/TRI.png',
  '/img2/Equipment Armor/AGD_SUI.png',
  '/img2/Equipment Armor/AGD_SUI_2.png',
  '/img2/Equipment Armor/AIN_COA.png',
  '/img2/Equipment Armor/AIN_COA_2.png',
  '/img2/Equipment Armor/ATX_MAL.png',
  '/img2/Equipment Armor/ATX_MAL_2.png',
  '/img2/Equipment Armor/BAL_COA.png',
  '/img2/Equipment Armor/BAL_COA_2.png',
  '/img2/Equipment Armor/BSM_EPB.png',
  '/img2/Equipment Armor/BSM_EPB_2.png',
  '/img2/Equipment Armor/b_f0_1020_03_1.png',
  '/img2/Equipment Armor/b_f0_3002_03_1.png',
  '/img2/Equipment Armor/b_f0_3023_03_1.png',
  '/img2/Equipment Armor/b_f0_3026_03_1.png',
  '/img2/Equipment Armor/b_f0_3032_03_1.png',
  '/img2/Equipment Armor/b_f0_3037_03_1.png',
  '/img2/Equipment Armor/b_f0_3048_03_1.png',
  '/img2/Equipment Armor/b_f0_3056_03_1.png',
  '/img2/Equipment Armor/b_f0_3063_03_1.png',
  '/img2/Equipment Armor/b_f0_30692_03_1.png',
  '/img2/Equipment Armor/b_f0_3069_03_1.png',
  '/img2/Equipment Armor/b_f0_3071_03_1.png',
  '/img2/Equipment Armor/b_f0_3072_03_1.png',
  '/img2/Equipment Armor/b_f0_3074_03_1.png',
  '/img2/Equipment Armor/b_f0_3075_03_1.png',
  '/img2/Equipment Armor/b_f0_3076_03_1.png',
  '/img2/Equipment Armor/b_f0_3077_03_1.png',
  '/img2/Equipment Armor/b_f0_3078_03_1.png',
  '/img2/Equipment Armor/b_f0_3079_03_1.png',
  '/img2/Equipment Armor/b_f0_3081_03_1.png',
  '/img2/Equipment Armor/b_f0_3082_03_1.png',
  '/img2/Equipment Armor/b_f0_3083_03_1.png',
  '/img2/Equipment Armor/b_f0_3084_03_1.png',
  '/img2/Equipment Armor/b_f0_3085_03_1.png',
  '/img2/Equipment Armor/b_f0_3087_03_1.png',
  '/img2/Equipment Armor/b_f0_3088_03_1.png',
  '/img2/Equipment Armor/b_f0_3091_03_1.png',
  '/img2/Equipment Armor/b_f0_3093_03_1.png',
  '/img2/Equipment Armor/b_f0_3094_03_1.png',
  '/img2/Equipment Armor/b_f0_3095_03_1.png',
  '/img2/Equipment Armor/b_f0_3096_03_1.png',
  '/img2/Equipment Armor/b_f0_3097_03_1.png',
  '/img2/Equipment Armor/b_f0_3098_03_1.png',
  '/img2/Equipment Armor/b_f0_3099_03_1.png',
  '/img2/Equipment Armor/b_f0_3101_03_1.png',
  '/img2/Equipment Armor/b_f0_3102_03_1.png',
  '/img2/Equipment Armor/b_f0_3103_03_1.png',
  '/img2/Equipment Armor/b_f0_3104_03_1.png',
  '/img2/Equipment Armor/b_f0_3110_03_1.png',
  '/img2/Equipment Armor/b_f0_3113_03_1.png',
  '/img2/Equipment Armor/b_f0_3114_03_1.png',
  '/img2/Equipment Armor/b_f0_3115_03_1.png',
  '/img2/Equipment Armor/b_f0_3116_03_1.png',
  '/img2/Equipment Armor/b_f0_9015_03_1.png',
  '/img2/Equipment Armor/b_f0_9016_03_1.png',
  '/img2/Equipment Armor/b_f0_9017_03_1.png',
  '/img2/Equipment Armor/b_f0_9019_03_1.png',
  '/img2/Equipment Armor/b_f0_9020_03_1.png',
  '/img2/Equipment Armor/b_f0_9021_03_1.png',
  '/img2/Equipment Armor/b_f0_9022_03_1.png',
  '/img2/Equipment Armor/b_f0_9024_03_1.png',
  '/img2/Equipment Armor/b_f0_9026_03_1.png',
  '/img2/Equipment Armor/b_f0_9027_03_1.png',
  '/img2/Equipment Armor/b_f0_9028_03_1.png',
  '/img2/Equipment Armor/b_m0_1020_03_1.png',
  '/img2/Equipment Armor/b_m0_3002_03_1.png',
  '/img2/Equipment Armor/b_m0_3023_03_1.png',
  '/img2/Equipment Armor/b_m0_3026_03_1.png',
  '/img2/Equipment Armor/b_m0_3032_03_1.png',
  '/img2/Equipment Armor/b_m0_3037_03_1.png',
  '/img2/Equipment Armor/b_m0_3048_03_1.png',
  '/img2/Equipment Armor/b_m0_3056_03_1.png',
  '/img2/Equipment Armor/b_m0_3063_03_1.png',
  '/img2/Equipment Armor/b_m0_30692_03_1.png',
  '/img2/Equipment Armor/b_m0_3069_03_1.png',
  '/img2/Equipment Armor/b_m0_3071_03_1.png',
  '/img2/Equipment Armor/b_m0_3072_03_1.png',
  '/img2/Equipment Armor/b_m0_3074_03_1.png',
  '/img2/Equipment Armor/b_m0_3075_03_1.png',
  '/img2/Equipment Armor/b_m0_3076_03_1.png',
  '/img2/Equipment Armor/b_m0_3077_03_1.png',
  '/img2/Equipment Armor/b_m0_3078_03_1.png',
  '/img2/Equipment Armor/b_m0_3079_03_1.png',
  '/img2/Equipment Armor/b_m0_3081_03_1.png',
  '/img2/Equipment Armor/b_m0_3082_03_1.png',
  '/img2/Equipment Armor/b_m0_3083_03_1.png',
  '/img2/Equipment Armor/b_m0_3084_03_1.png',
  '/img2/Equipment Armor/b_m0_3085_03_1.png',
  '/img2/Equipment Armor/b_m0_3087_03_1.png',
  '/img2/Equipment Armor/b_m0_3088_03_1.png',
  '/img2/Equipment Armor/b_m0_3091_03_1.png',
  '/img2/Equipment Armor/b_m0_3093_03_1.png',
  '/img2/Equipment Armor/b_m0_3094_03_1.png',
  '/img2/Equipment Armor/b_m0_3095_03_1.png',
  '/img2/Equipment Armor/b_m0_3096_03_1.png',
  '/img2/Equipment Armor/b_m0_3097_03_1.png',
  '/img2/Equipment Armor/b_m0_3098_03_1.png',
  '/img2/Equipment Armor/b_m0_3099_03_1.png',
  '/img2/Equipment Armor/b_m0_3101_03_1.png',
  '/img2/Equipment Armor/b_m0_3102_03_1.png',
  '/img2/Equipment Armor/b_m0_3103_03_1.png',
  '/img2/Equipment Armor/b_m0_3104_03_1.png',
  '/img2/Equipment Armor/b_m0_3110_03_1.png',
  '/img2/Equipment Armor/b_m0_3113_03_1.png',
  '/img2/Equipment Armor/b_m0_3114_03_1.png',
  '/img2/Equipment Armor/b_m0_3115_03_1.png',
  '/img2/Equipment Armor/b_m0_3116_03_1.png',
  '/img2/Equipment Armor/b_m0_9015_03_1.png',
  '/img2/Equipment Armor/b_m0_9016_03_1.png',
  '/img2/Equipment Armor/b_m0_9017_03_1.png',
  '/img2/Equipment Armor/b_m0_9019_03_1.png',
  '/img2/Equipment Armor/b_m0_9020_03_1.png',
  '/img2/Equipment Armor/b_m0_9021_03_1.png',
  '/img2/Equipment Armor/b_m0_9022_03_1.png',
  '/img2/Equipment Armor/b_m0_9024_03_1.png',
  '/img2/Equipment Armor/b_m0_9026_03_1.png',
  '/img2/Equipment Armor/b_m0_9027_03_1.png',
  '/img2/Equipment Armor/b_m0_9028_03_1.png',
  '/img2/Equipment Armor/CDB_MAI.png',
  '/img2/Equipment Armor/CDB_MAI_2.png',
  '/img2/Equipment Armor/CLT_MAI.png',
  '/img2/Equipment Armor/CLT_MAI_2.png',
  '/img2/Equipment Armor/CRS_DGN.png',
  '/img2/Equipment Armor/CRS_DGN_2.png',
  '/img2/Equipment Armor/CSD_AMR.png',
  '/img2/Equipment Armor/CSD_AMR_2.png',
  '/img2/Equipment Armor/DEX_MMA.png',
  '/img2/Equipment Armor/DEX_MMA_2.png',
  '/img2/Equipment Armor/DFM_GRB.png',
  '/img2/Equipment Armor/DFM_GRB_2.png',
  '/img2/Equipment Armor/DLR_AMR.png',
  '/img2/Equipment Armor/DLR_AMR_2.png',
  '/img2/Equipment Armor/EGD_SUI.png',
  '/img2/Equipment Armor/EGD_SUI_2.png',
  '/img2/Equipment Armor/EQS_MAI.png',
  '/img2/Equipment Armor/EQS_MAI_2.png',
  '/img2/Equipment Armor/EQT_AMR.png',
  '/img2/Equipment Armor/EQT_AMR_2.png',
  '/img2/Equipment Armor/EST_AMR.png',
  '/img2/Equipment Armor/EST_AMR_2.png',
  '/img2/Equipment Armor/FLU_SUI.png',
  '/img2/Equipment Armor/FLU_SUI_2.png',
  '/img2/Equipment Armor/GAI_AMR.png',
  '/img2/Equipment Armor/GAI_AMR_2.png',
  '/img2/Equipment Armor/GCK_BVL.png',
  '/img2/Equipment Armor/GCK_BVL_2.png',
  '/img2/Equipment Armor/GCK_NVL.png',
  '/img2/Equipment Armor/GCK_NVL_2.png',
  '/img2/Equipment Armor/GEO_PLT.png',
  '/img2/Equipment Armor/GEO_PLT_2.png',
  '/img2/Equipment Armor/GIG_AMR.png',
  '/img2/Equipment Armor/GIG_AMR_2.png',
  '/img2/Equipment Armor/GWN_ACR.png',
  '/img2/Equipment Armor/GWN_ACR_2.png',
  '/img2/Equipment Armor/HCR_AMR.png',
  '/img2/Equipment Armor/HCR_AMR_2.png',
  '/img2/Equipment Armor/HLY_CXM.png',
  '/img2/Equipment Armor/HLY_CXM_2.png',
  '/img2/Equipment Armor/IMC_AMR.png',
  '/img2/Equipment Armor/IMC_AMR_2.png',
  '/img2/Equipment Armor/INT_CLC.png',
  '/img2/Equipment Armor/INT_CLC_2.png',
  '/img2/Equipment Armor/ISR_GAR.png',
  '/img2/Equipment Armor/ISR_GAR_2.png',
  '/img2/Equipment Armor/MAI_DBK.png',
  '/img2/Equipment Armor/MAI_DBK_2.png',
  '/img2/Equipment Armor/MAI_DET.png',
  '/img2/Equipment Armor/MAI_DET_2.png',
  '/img2/Equipment Armor/MJR_DEA.png',
  '/img2/Equipment Armor/MJR_DEA_2.png',
  '/img2/Equipment Armor/MNG_VST.png',
  '/img2/Equipment Armor/MNG_VST_2.png',
  '/img2/Equipment Armor/NYD_COA.png',
  '/img2/Equipment Armor/NYD_COA_2.png',
  '/img2/Equipment Armor/PPT_ART.png',
  '/img2/Equipment Armor/PPT_ART_2.png',
  '/img2/Equipment Armor/PSP_BLS.png',
  '/img2/Equipment Armor/PSP_BLS_2.png',
  '/img2/Equipment Armor/QUA_SUI.png',
  '/img2/Equipment Armor/QUA_SUI_2.png',
  '/img2/Equipment Armor/REG_HNS.png',
  '/img2/Equipment Armor/REG_HNS_2.png',
  '/img2/Equipment Armor/RPR_AMR.png',
  '/img2/Equipment Armor/RPR_AMR_2.png',
  '/img2/Equipment Armor/SCT_GEA.png',
  '/img2/Equipment Armor/SCT_GEA_2.png',
  '/img2/Equipment Armor/SHV_MAI.png',
  '/img2/Equipment Armor/SHV_MAI_2.png',
  '/img2/Equipment Armor/SIE_DMR.png',
  '/img2/Equipment Armor/SIE_DMR_2.png',
  '/img2/Equipment Armor/SKA_VRG.png',
  '/img2/Equipment Armor/SKA_VRG_2.png',
  '/img2/Equipment Armor/SLY_COA.png',
  '/img2/Equipment Armor/SLY_COA_2.png',
  '/img2/Equipment Armor/SSN_AMR.png',
  '/img2/Equipment Armor/SSN_AMR_2.png',
  '/img2/Equipment Armor/TST_GRB.png',
  '/img2/Equipment Armor/TST_GRB_2.png',
  '/img2/Equipment Armor/UGN_AMR.png',
  '/img2/Equipment Armor/UGN_AMR_2.png',
  '/img2/Equipment Armor/VAL_AMR.png',
  '/img2/Equipment Armor/VAL_AMR_2.png',
  '/img2/Equipment Armor/WPG_ROB.png',
  '/img2/Equipment Armor/WPG_ROB_2.png',
  '/img2/Equipment Head/AGD_FHG.png',
  '/img2/Equipment Head/AGD_FHG_2.png',
  '/img2/Equipment Head/AIN_CHA.png',
  '/img2/Equipment Head/AIN_CHA_2.png',
  '/img2/Equipment Head/BLN_HLM.png',
  '/img2/Equipment Head/BLN_HLM_2.png',
  '/img2/Equipment Head/BRA_DHM.png',
  '/img2/Equipment Head/BRA_DHM_2.png',
  '/img2/Equipment Head/BSM_STT.png',
  '/img2/Equipment Head/BSM_STT_2.png',
  '/img2/Equipment Head/BZP_DGN.png',
  '/img2/Equipment Head/BZP_DGN_2.png',
  '/img2/Equipment Head/CDB_HLM.png',
  '/img2/Equipment Head/CDB_HLM_2.png',
  '/img2/Equipment Head/CLT_HLM.png',
  '/img2/Equipment Head/CLT_HLM_2.png',
  '/img2/Equipment Head/CRS_DGN.png',
  '/img2/Equipment Head/CRS_DGN_2.png',
  '/img2/Equipment Head/CSD_HLM.png',
  '/img2/Equipment Head/CSD_HLM_2.png',
  '/img2/Equipment Head/DEX_MHE.png',
  '/img2/Equipment Head/DEX_MHE_2.png',
  '/img2/Equipment Head/DFM_HOD.png',
  '/img2/Equipment Head/DFM_HOD_2.png',
  '/img2/Equipment Head/DLR_HLM.png',
  '/img2/Equipment Head/DLR_HLM_2.png',
  '/img2/Equipment Head/DVN_EFS.png',
  '/img2/Equipment Head/DVN_EFS_2.png',
  '/img2/Equipment Head/DVN_PDG.png',
  '/img2/Equipment Head/DVN_PDG_2.png',
  '/img2/Equipment Head/EGD_FHG.png',
  '/img2/Equipment Head/EGD_FHG_2.png',
  '/img2/Equipment Head/EQS_HLM.png',
  '/img2/Equipment Head/EQS_HLM_2.png',
  '/img2/Equipment Head/EST_BND.png',
  '/img2/Equipment Head/EST_BND_2.png',
  '/img2/Equipment Head/FAR_BUR.png',
  '/img2/Equipment Head/FAR_BUR_2.png',
  '/img2/Equipment Head/GAI_HLM.png',
  '/img2/Equipment Head/GAI_HLM_2.png',
  '/img2/Equipment Head/GIG_HPC.png',
  '/img2/Equipment Head/GIG_HPC_2.png',
  '/img2/Equipment Head/HCR_HLM.png',
  '/img2/Equipment Head/HCR_HLM_2.png',
  '/img2/Equipment Head/HLM_DBK.png',
  '/img2/Equipment Head/HLM_DBK_2.png',
  '/img2/Equipment Head/HLM_DET.png',
  '/img2/Equipment Head/HLM_DET_2.png',
  '/img2/Equipment Head/HMT_GLR.png',
  '/img2/Equipment Head/HMT_GLR_2.png',
  '/img2/Equipment Head/HWM_HAT.png',
  '/img2/Equipment Head/HWM_HAT_2.png',
  '/img2/Equipment Head/h_f1_1020_03_1.png',
  '/img2/Equipment Head/h_f1_3002_03_1.png',
  '/img2/Equipment Head/h_f1_3023_03_1.png',
  '/img2/Equipment Head/h_f1_3026_03_1.png',
  '/img2/Equipment Head/h_f1_3032_03_1.png',
  '/img2/Equipment Head/h_f1_3037_03_1.png',
  '/img2/Equipment Head/h_f1_3048_03_1.png',
  '/img2/Equipment Head/h_f1_3056_03_1.png',
  '/img2/Equipment Head/h_f1_3063_03_1.png',
  '/img2/Equipment Head/h_f1_30692_03_1.png',
  '/img2/Equipment Head/h_f1_3069_03_1.png',
  '/img2/Equipment Head/h_f1_3071_03_1.png',
  '/img2/Equipment Head/h_f1_3072_03_1.png',
  '/img2/Equipment Head/h_f1_3074_03_1.png',
  '/img2/Equipment Head/h_f1_3075_03_1.png',
  '/img2/Equipment Head/h_f1_3076_03_1.png',
  '/img2/Equipment Head/h_f1_3077_03_1.png',
  '/img2/Equipment Head/h_f1_3078_03_1.png',
  '/img2/Equipment Head/h_f1_3079_03_1.png',
  '/img2/Equipment Head/h_f1_3081_03_1.png',
  '/img2/Equipment Head/h_f1_3082_03_1.png',
  '/img2/Equipment Head/h_f1_3083_03_1.png',
  '/img2/Equipment Head/h_f1_3084_03_1.png',
  '/img2/Equipment Head/h_f1_3085_03_1.png',
  '/img2/Equipment Head/h_f1_3087_03_1.png',
  '/img2/Equipment Head/h_f1_3088_03_1.png',
  '/img2/Equipment Head/h_f1_3091_03_1.png',
  '/img2/Equipment Head/h_f1_3093_03_1.png',
  '/img2/Equipment Head/h_f1_3094_03_1.png',
  '/img2/Equipment Head/h_f1_3095_03_1.png',
  '/img2/Equipment Head/h_f1_3096_03_1.png',
  '/img2/Equipment Head/h_f1_3097_03_1.png',
  '/img2/Equipment Head/h_f1_3098_03_1.png',
  '/img2/Equipment Head/h_f1_3099_03_1.png',
  '/img2/Equipment Head/h_f1_3101_03_1.png',
  '/img2/Equipment Head/h_f1_3102_03_1.png',
  '/img2/Equipment Head/h_f1_3103_03_1.png',
  '/img2/Equipment Head/h_f1_3104_03_1.png',
  '/img2/Equipment Head/h_f1_3110_03_1.png',
  '/img2/Equipment Head/h_f1_3113_03_1.png',
  '/img2/Equipment Head/h_f1_3114_03_1.png',
  '/img2/Equipment Head/h_f1_3115_03_1.png',
  '/img2/Equipment Head/h_f1_3116_03_1.png',
  '/img2/Equipment Head/h_f1_9016_03_1.png',
  '/img2/Equipment Head/h_f1_9017_03_1.png',
  '/img2/Equipment Head/h_f1_9020_03_1.png',
  '/img2/Equipment Head/h_f1_9021_03_1.png',
  '/img2/Equipment Head/h_f1_9022_03_1.png',
  '/img2/Equipment Head/h_f1_9023_03_1.png',
  '/img2/Equipment Head/h_f1_9024_03_1.png',
  '/img2/Equipment Head/h_f1_9026_03_1.png',
  '/img2/Equipment Head/h_f1_9027_03_1.png',
  '/img2/Equipment Head/h_m1_1020_03_1.png',
  '/img2/Equipment Head/h_m1_3002_03_1.png',
  '/img2/Equipment Head/h_m1_3023_03_1.png',
  '/img2/Equipment Head/h_m1_3026_03_1.png',
  '/img2/Equipment Head/h_m1_3032_03_1.png',
  '/img2/Equipment Head/h_m1_3037_03_1.png',
  '/img2/Equipment Head/h_m1_3048_03_1.png',
  '/img2/Equipment Head/h_m1_3056_03_1.png',
  '/img2/Equipment Head/h_m1_3063_03_1.png',
  '/img2/Equipment Head/h_m1_30692_03_1.png',
  '/img2/Equipment Head/h_m1_3069_03_1.png',
  '/img2/Equipment Head/h_m1_3071_03_1.png',
  '/img2/Equipment Head/h_m1_3072_03_1.png',
  '/img2/Equipment Head/h_m1_3074_03_1.png',
  '/img2/Equipment Head/h_m1_3075_03_1.png',
  '/img2/Equipment Head/h_m1_3076_03_1.png',
  '/img2/Equipment Head/h_m1_3077_03_1.png',
  '/img2/Equipment Head/h_m1_3078_03_1.png',
  '/img2/Equipment Head/h_m1_3079_03_1.png',
  '/img2/Equipment Head/h_m1_3081_03_1.png',
  '/img2/Equipment Head/h_m1_3082_03_1.png',
  '/img2/Equipment Head/h_m1_3083_03_1.png',
  '/img2/Equipment Head/h_m1_3084_03_1.png',
  '/img2/Equipment Head/h_m1_3085_03_1.png',
  '/img2/Equipment Head/h_m1_3087_03_1.png',
  '/img2/Equipment Head/h_m1_3088_03_1.png',
  '/img2/Equipment Head/h_m1_3091_03_1.png',
  '/img2/Equipment Head/h_m1_3093_03_1.png',
  '/img2/Equipment Head/h_m1_3094_03_1.png',
  '/img2/Equipment Head/h_m1_3095_03_1.png',
  '/img2/Equipment Head/h_m1_3096_03_1.png',
  '/img2/Equipment Head/h_m1_3097_03_1.png',
  '/img2/Equipment Head/h_m1_3098_03_1.png',
  '/img2/Equipment Head/h_m1_3099_03_1.png',
  '/img2/Equipment Head/h_m1_3101_03_1.png',
  '/img2/Equipment Head/h_m1_3102_03_1.png',
  '/img2/Equipment Head/h_m1_3103_03_1.png',
  '/img2/Equipment Head/h_m1_3104_03_1.png',
  '/img2/Equipment Head/h_m1_3110_03_1.png',
  '/img2/Equipment Head/h_m1_3113_03_1.png',
  '/img2/Equipment Head/h_m1_3114_03_1.png',
  '/img2/Equipment Head/h_m1_3115_03_1.png',
  '/img2/Equipment Head/h_m1_3116_03_1.png',
  '/img2/Equipment Head/h_m1_9016_03_1.png',
  '/img2/Equipment Head/h_m1_9017_03_1.png',
  '/img2/Equipment Head/h_m1_9020_03_1.png',
  '/img2/Equipment Head/h_m1_9021_03_1.png',
  '/img2/Equipment Head/h_m1_9022_03_1.png',
  '/img2/Equipment Head/h_m1_9023_03_1.png',
  '/img2/Equipment Head/h_m1_9024_03_1.png',
  '/img2/Equipment Head/h_m1_9026_03_1.png',
  '/img2/Equipment Head/h_m1_9027_03_1.png',
  '/img2/Equipment Head/IMC_HEL.png',
  '/img2/Equipment Head/IMC_HEL_2.png',
  '/img2/Equipment Head/INT_CPL.png',
  '/img2/Equipment Head/INT_CPL_2.png',
  '/img2/Equipment Head/ISR_MTR.png',
  '/img2/Equipment Head/ISR_MTR_2.png',
  '/img2/Equipment Head/MJC_DEA.png',
  '/img2/Equipment Head/MJC_DEA_2.png',
  '/img2/Equipment Head/MNG_HPC.png',
  '/img2/Equipment Head/MNG_HPC_2.png',
  '/img2/Equipment Head/NOL_HLM.png',
  '/img2/Equipment Head/NOL_HLM_2.png',
  '/img2/Equipment Head/NYD_HAT.png',
  '/img2/Equipment Head/NYD_HAT_2.png',
  '/img2/Equipment Head/PLM_PDG.png',
  '/img2/Equipment Head/PLM_PDG_2.png',
  '/img2/Equipment Head/QUA_HAT.png',
  '/img2/Equipment Head/QUA_HAT_2.png',
  '/img2/Equipment Head/RAL_HLM.png',
  '/img2/Equipment Head/RAL_HLM_2.png',
  '/img2/Equipment Head/REG_HLM.png',
  '/img2/Equipment Head/REG_HLM_2.png',
  '/img2/Equipment Head/RPR_HLM.png',
  '/img2/Equipment Head/RPR_HLM_2.png',
  '/img2/Equipment Head/SCT_HGR.png',
  '/img2/Equipment Head/SCT_HGR_2.png',
  '/img2/Equipment Head/SHV_HLM.png',
  '/img2/Equipment Head/SHV_HLM_2.png',
  '/img2/Equipment Head/SLY_DIO.png',
  '/img2/Equipment Head/SLY_DIO_2.png',
  '/img2/Equipment Head/TRR_CXM.png',
  '/img2/Equipment Head/TRR_CXM_2.png',
  '/img2/Equipment Head/TST_CAP.png',
  '/img2/Equipment Head/TST_CAP_2.png',
  '/img2/Equipment Head/VAL_HLM.png',
  '/img2/Equipment Head/VAL_HLM_2.png',
  '/img2/Equipment Head/VRG_CRW.png',
  '/img2/Equipment Head/VRG_CRW_2.png',
  '/img2/Equipment Head/VSG_BVL.png',
  '/img2/Equipment Head/VSG_BVL_2.png',
  '/img2/Equipment Head/VSG_NVL.png',
  '/img2/Equipment Head/VSG_NVL_2.png',
  '/img2/Equipment Head/WPG_HAT.png',
  '/img2/Equipment Head/WPG_HAT_2.png',
  '/img2/Equipment Head/YTK_HLM.png',
  '/img2/Equipment Head/YTK_HLM_2.png',
  '/img2/Weapon Fist/CLW_NTR.png',
  '/img2/Weapon Fist/DGF_GET.png',
  '/img2/Weapon Fist/DVN_DSP.png',
  '/img2/Weapon Fist/EVT_ERD.png',
  '/img2/Weapon Fist/FBW_DMS.png',
  '/img2/Weapon Fist/FST_DET.png',
  '/img2/Weapon Fist/FST_HMD.png',
  '/img2/Weapon Fist/FST_SGD.png',
  '/img2/Weapon Fist/FST_YGG.png',
  '/img2/Weapon Fist/GHD_HDS.png',
  '/img2/Weapon Fist/GOD_HND.png',
  '/img2/Weapon Fist/HBW_RET.png',
  '/img2/Weapon Fist/HLY_REV.png',
  '/img2/Weapon Fist/HWF_IZN.png',
  '/img2/Weapon Fist/ICF_SCN.png',
  '/img2/Weapon Fist/ICT_FNR.png',
  '/img2/Weapon Fist/IPF_DBL.png',
  '/img2/Weapon Fist/LDC_AJT.png',
  '/img2/Weapon Fist/MTO_PMN.png',
  '/img2/Weapon Fist/NTL_CMS.png',
  '/img2/Weapon Fist/PRD_RDJ.png',
  '/img2/Weapon Fist/QET_SPL.png',
  '/img2/Weapon Fist/QUE_VLC.png',
  '/img2/Weapon Fist/RFT_GRB.png',
  '/img2/Weapon Fist/STL_ALL.png',
  '/img2/Weapon Fist/TTR_DRK.png',
  '/img2/Weapon Fist/w_g_1067_03_1.png',
  '/img2/Weapon Fist/w_g_1133_03_1.png',
  '/img2/Weapon Fist/w_g_1501_03_1.png',
  '/img2/Weapon Fist/w_g_1507_03_1.png',
  '/img2/Weapon Fist/w_g_1517_03_1.png',
  '/img2/Weapon Fist/w_g_3023_03_1.png',
  '/img2/Weapon Fist/w_g_3056_03_1.png',
  '/img2/Weapon Fist/w_g_3070_03_1.png',
  '/img2/Weapon Fist/w_g_3072_03_1.png',
  '/img2/Weapon Fist/w_g_3084_03_1.png',
  '/img2/Weapon Fist/w_g_3091_03_1.png',
  '/img2/Weapon Fist/w_g_3096_03_1.png',
  '/img2/Weapon Fist/w_g_3103_03_1.png',
  '/img2/Weapon Fist/w_g_3105_03_1.png',
  '/img2/Weapon Fist/w_g_3110_03_1.png',
  '/img2/Weapon Fist/w_g_3114_03_1.png',
  '/img2/Weapon Fist/w_g_3118_03_1.png',
  '/img2/Weapon Fist/w_g_3125_03_1.png',
  '/img2/Weapon Fist/w_g_3130_03_1.png',
  '/img2/Weapon Fist/w_g_3136_03_1.png',
  '/img2/Weapon Fist/w_g_3139_03_1.png',
  '/img2/Weapon Fist/w_g_9023_03_1.png',
  '/img2/Weapon Hammer/DMC_BGT.png',
  '/img2/Weapon Hammer/DMD_DML.png',
  '/img2/Weapon Hammer/DSY_VNT.png',
  '/img2/Weapon Hammer/FAL_FBK.png',
  '/img2/Weapon Hammer/FLR_CYC.png',
  '/img2/Weapon Hammer/HHM_MET.png',
  '/img2/Weapon Hammer/HLY_TTM.png',
  '/img2/Weapon Hammer/HMM_OPM.png',
  '/img2/Weapon Hammer/LGF_TPS.png',
  '/img2/Weapon Hammer/MAC_DET.png',
  '/img2/Weapon Hammer/MCX_HMR.png',
  '/img2/Weapon Hammer/MTO_PMN.png',
  '/img2/Weapon Hammer/RAY_CXT.png',
  '/img2/Weapon Hammer/RCN_MAC.png',
  '/img2/Weapon Hammer/SCS_HLT.png',
  '/img2/Weapon Hammer/SML_GZR.png',
  '/img2/Weapon Hammer/SSN_SUP.png',
  '/img2/Weapon Hammer/TDH_BDG.png',
  '/img2/Weapon Hammer/UBR_BWK.png',
  '/img2/Weapon Hammer/w_h_1112_03_1.png',
  '/img2/Weapon Hammer/w_h_1504_03_1.png',
  '/img2/Weapon Hammer/w_h_3088_03_1.png',
  '/img2/Weapon Hammer/w_h_3090_03_1.png',
  '/img2/Weapon Hammer/w_h_3092_03_1.png',
  '/img2/Weapon Hammer/w_h_3098_03_1.png',
  '/img2/Weapon Hammer/w_h_3112_03_1.png',
  '/img2/Weapon Hammer/w_h_3134_03_1.png',
  '/img2/Weapon Hammer/w_h_3152_03_1.png',
  '/img2/Weapon Hammer/w_h_3160_03_1.png',
  '/img2/Weapon Hammer/w_h_3168_03_1.png',
  '/img2/Weapon Hammer/w_h_9017_03_1.png',
  '/img2/Weapon Hammer/w_h_9028_03_1.png',
  '/img2/Weapon Hammer/w_h_9029_03_1.png',
  '/img2/Weapon Hammer/w_h_9035_03_1.png',
  '/img2/Weapon Hammer/w_h_9037_03_1.png',
  '/img2/Weapon Lance/ATH_QSP.png',
  '/img2/Weapon Lance/BLZ_DNS.png',
  '/img2/Weapon Lance/CCL_MDT.png',
  '/img2/Weapon Lance/CLT_PTS.png',
  '/img2/Weapon Lance/DVN_LHG.png',
  '/img2/Weapon Lance/DVN_RPR.png',
  '/img2/Weapon Lance/FLC_WDS.png',
  '/img2/Weapon Lance/FNG_FST.png',
  '/img2/Weapon Lance/GAE_BLG.png',
  '/img2/Weapon Lance/HLC_SHU.png',
  '/img2/Weapon Lance/HLY_OBL.png',
  '/img2/Weapon Lance/HSP_VLC.png',
  '/img2/Weapon Lance/IFN_HCT.png',
  '/img2/Weapon Lance/LNC_VLC.png',
  '/img2/Weapon Lance/LOV_MOD.png',
  '/img2/Weapon Lance/MDL_DEA.png',
  '/img2/Weapon Lance/MIS_ANM.png',
  '/img2/Weapon Lance/RAL_LNC.png',
  '/img2/Weapon Lance/RTT_SPR.png',
  '/img2/Weapon Lance/SSR_LGN.png',
  '/img2/Weapon Lance/STL_ECL.png',
  '/img2/Weapon Lance/TLV_VSR.png',
  '/img2/Weapon Lance/TOT_SPR.png',
  '/img2/Weapon Lance/w_l_1135_03_1.png',
  '/img2/Weapon Lance/w_l_1137_03_1.png',
  '/img2/Weapon Lance/w_l_1138_03_1.png',
  '/img2/Weapon Lance/w_l_1500_03_1.png',
  '/img2/Weapon Lance/w_l_1508_03_1.png',
  '/img2/Weapon Lance/w_l_1516_03_1.png',
  '/img2/Weapon Lance/w_l_3018_03_1.png',
  '/img2/Weapon Lance/w_l_3087_03_1.png',
  '/img2/Weapon Lance/w_l_3089_03_1.png',
  '/img2/Weapon Lance/w_l_3095_03_1.png',
  '/img2/Weapon Lance/w_l_3101_03_1.png',
  '/img2/Weapon Lance/w_l_3104_03_1.png',
  '/img2/Weapon Lance/w_l_3105_03_1.png',
  '/img2/Weapon Lance/w_l_3107_03_1.png',
  '/img2/Weapon Lance/w_l_3111_03_1.png',
  '/img2/Weapon Lance/w_l_3115_03_1.png',
  '/img2/Weapon Lance/w_l_3119_03_1.png',
  '/img2/Weapon Lance/w_l_3123_03_1.png',
  '/img2/Weapon Lance/w_l_3128_03_1.png',
  '/img2/Weapon Lance/w_l_3140_03_1.png',
  '/img2/Weapon Lance/w_l_3141_03_1.png',
  '/img2/Weapon Lance/w_l_3150_03_1.png',
  '/img2/Weapon Lance/w_l_3162_03_1.png',
  '/img2/Weapon Lance/w_l_3166_03_1.png',
  '/img2/Weapon Lance/w_l_9016_03_1.png',
  '/img2/Weapon Staff/ANG_LUS.png',
  '/img2/Weapon Staff/AST_JPT.png',
  '/img2/Weapon Staff/EPN_MLD.png',
  '/img2/Weapon Staff/FSS_STF.png',
  '/img2/Weapon Staff/GBT_STF.png',
  '/img2/Weapon Staff/HNR_FRN.png',
  '/img2/Weapon Staff/HRD_FJM.png',
  '/img2/Weapon Staff/ICR_GLC.png',
  '/img2/Weapon Staff/JCK_STF.png',
  '/img2/Weapon Staff/NOV_CXR.png',
  '/img2/Weapon Staff/NTL_ROD.png',
  '/img2/Weapon Staff/RGC_TPS.png',
  '/img2/Weapon Staff/SCT_NGR.png',
  '/img2/Weapon Staff/SPK_SCT.png',
  '/img2/Weapon Staff/SRD_LTS.png',
  '/img2/Weapon Staff/STF_SCT.png',
  '/img2/Weapon Staff/TPS_HVN.png',
  '/img2/Weapon Staff/VEX_IFT.png',
  '/img2/Weapon Staff/WND_NTR.png',
  '/img2/Weapon Staff/w_r_1080_03_1.png',
  '/img2/Weapon Staff/w_r_1136_03_1.png',
  '/img2/Weapon Staff/w_r_1506_03_1.png',
  '/img2/Weapon Staff/w_r_1510_03_1.png',
  '/img2/Weapon Staff/w_r_3049_03_1.png',
  '/img2/Weapon Staff/w_r_3071_03_1.png',
  '/img2/Weapon Staff/w_r_3085_03_1.png',
  '/img2/Weapon Staff/w_r_3093_03_1.png',
  '/img2/Weapon Staff/w_r_3097_03_1.png',
  '/img2/Weapon Staff/w_r_3100_03_1.png',
  '/img2/Weapon Staff/w_r_3105_03_1.png',
  '/img2/Weapon Staff/w_r_3106_03_1.png',
  '/img2/Weapon Staff/w_r_3113_03_1.png',
  '/img2/Weapon Staff/w_r_3117_03_1.png',
  '/img2/Weapon Staff/w_r_3127_03_1.png',
  '/img2/Weapon Staff/w_r_3129_03_1.png',
  '/img2/Weapon Staff/w_r_3132_03_1.png',
  '/img2/Weapon Staff/w_r_3135_03_1.png',
  '/img2/Weapon Staff/w_r_3151_03_1.png',
  '/img2/Weapon Staff/w_r_3161_03_1.png',
  '/img2/Weapon Staff/w_r_3169_03_1.png',
  '/img2/Weapon Staff/w_r_3170_03_1.png',
  '/img2/Weapon Staff/w_r_9026_03_1.png',
  '/img2/Weapon Staff/w_r_9033_03_1.png',
  '/img2/Weapon Staff/w_r_9038_03_1.png',
  '/img2/Weapon Staff/XXX_NVN.png',
  '/img2/Weapon Staff/ZAH_STF.png',
  '/img2/Weapon Sword/AMN_MRK.png',
  '/img2/Weapon Sword/ATR_QSL.png',
  '/img2/Weapon Sword/BAL_BLD.png',
  '/img2/Weapon Sword/BLT_DMC.png',
  '/img2/Weapon Sword/CAL_BLG.png',
  '/img2/Weapon Sword/DBL_CHN.png',
  '/img2/Weapon Sword/DGN_IIF.png',
  '/img2/Weapon Sword/DMN_BRD.png',
  '/img2/Weapon Sword/DSY_VOD.png',
  '/img2/Weapon Sword/EXM_BLD.png',
  '/img2/Weapon Sword/FUT_MTM.png',
  '/img2/Weapon Sword/HEX_DYN.png',
  '/img2/Weapon Sword/LCB_BLD.png',
  '/img2/Weapon Sword/MDB_DEA.png',
  '/img2/Weapon Sword/NBD_JOY.png',
  '/img2/Weapon Sword/REG_INL.png',
  '/img2/Weapon Sword/RSN_SPB.png',
  '/img2/Weapon Sword/SCB_ASN.png',
  '/img2/Weapon Sword/THE_ABY.png',
  '/img2/Weapon Sword/TPS_ATF.png',
  '/img2/Weapon Sword/TSW_JBR.png',
  '/img2/Weapon Sword/VNS_SWD.png',
  '/img2/Weapon Sword/w_b_1134_03_1.png',
  '/img2/Weapon Sword/w_b_1139_03_1.png',
  '/img2/Weapon Sword/w_b_1502_03_1.png',
  '/img2/Weapon Sword/w_b_1505_03_1.png',
  '/img2/Weapon Sword/w_b_1509_03_1.png',
  '/img2/Weapon Sword/w_b_2005_03_1.png',
  '/img2/Weapon Sword/w_b_3006_03_1.png',
  '/img2/Weapon Sword/w_b_3086_03_1.png',
  '/img2/Weapon Sword/w_b_3094_03_1.png',
  '/img2/Weapon Sword/w_b_3109_03_1.png',
  '/img2/Weapon Sword/w_b_3116_03_1.png',
  '/img2/Weapon Sword/w_b_3120_03_1.png',
  '/img2/Weapon Sword/w_b_3124_03_1.png',
  '/img2/Weapon Sword/w_b_3126_03_1.png',
  '/img2/Weapon Sword/w_b_3131_03_1.png',
  '/img2/Weapon Sword/w_b_3133_03_1.png',
  '/img2/Weapon Sword/w_b_3155_03_1.png',
  '/img2/Weapon Sword/w_b_3165_03_1.png',
  '/img2/Weapon Sword/w_b_3167_03_1.png',
  '/img2/Weapon Sword/w_b_3171_03_1.png',
  '/img2/Weapon Sword/w_b_9027_03_1.png',
  '/img2/Weapon Sword/w_b_9039_03_1.png',
  '/img2/Weapon Sword/w_b_9041_03_1.png',
  '/js/bootstrap.js',
  '/js/bootstrap.min.js',
  '/js/Chart.min.js',
  '/js/core.js',
  '/js/emu.js',
  '/js/jquery-2.1.1.min.js',
  '/js/jquery-2.1.1.min.map',
  '/js/lightbox.js',
  '/js/lightbox.min.js',
  '/js/lightbox.min.map',
  '/js/slot.js',
  '/js/thumb.js',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
