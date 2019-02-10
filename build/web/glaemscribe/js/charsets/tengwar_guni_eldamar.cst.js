Glaemscribe.resource_manager.raw_charsets["tengwar_guni_eldamar"] = "\\**\n\nGlǽmscribe (also written Glaemscribe) is a software dedicated to\nthe transcription of texts between writing systems, and more \nspecifically dedicated to the transcription of J.R.R. Tolkien\'s \ninvented languages to some of his devised writing systems.\n\nCopyright (C) 2015 Benjamin Babut (Talagan).\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\nany later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n**\\\n\n\\** Charset specially customized for Tengwar Eldamar (Glaemscrafu patched version) **\\ \n\n\\version 0.1.0\n\n\\beg changelog\n  \\** Changes done to the original font and inherited. **\\\n  \\entry \"0.0.0\" \"Added VALA_W_HOOK, VAIYA.\"\n  \\entry \"0.0.0\" \"Superior and inferior dash and tild consonant modification signs have been added for halla, telco and ara. / Added pustar combinations (4/4-halfed/4-squared/5)\"\n  \\entry \"0.0.0\" \"Fixed missing tinco_ext / sule_ext\"\n  \\entry \"0.0.0\" \"Added NBSP\"\n  \n  \\entry \"0.1.0\" \"First version of the unicode layout\"\n\\end\n\n\n\\char 20 SPACE\n\\char a0 NBSP\n\n\\char 2018 SQUOT_OPEN\n\\char 2019 SQUOT_CLOSE\n\n\\char 28 PUNCT_PAREN_L \n\\char 29 PUNCT_PAREN_R \n\\char 5B PUNCT_PAREN_L_ALT \n\\char 5D PUNCT_PAREN_R_ALT \n\n\\** PUSTAR, take them in unicode not in personnal use (deprecation) **\\\n\\char 2e31 PUNCT_DOT\n\\char   3a PUNCT_DDOT\n\\char 205D PUNCT_TDOT PUSTA_3\n\\char 2058 PUSTA_4\n\\char 10FB PUSTA_4_HALFED\n\\char 2E2C PUSTA_4_SQUARED\n\\char 2E2D PUSTA_5\n\n\\char e000  TW_11 TINCO     \n\\char e001  TW_12 PARMA\n\\char e002  TW_13 CALMA\n\\char e003  TW_14 QUESSE\n\\char e004  TW_21 ANDO  \n\\char e005  TW_22 UMBAR\n\\char e006  TW_23 ANGA  \n\\char e007  TW_24 UNGWE   \n\\char e008  TW_31 SULE THULE\n\\char e009  TW_32 FORMEN\n\\char e00A  TW_33 AHA  \n\\char e00B  TW_34 HWESTA\n\\char e00C  TW_41 ANTO\n\\char e00D  TW_42 AMPA\n\\char e00E  TW_43 ANCA\n\\char e00F  TW_44 UNQUE\n\n\\char e010  TW_51 NUMEN \n\\char e011  TW_52 MALTA\n\\char e012  TW_53 NOLDO\n\\char e013  TW_54 NWALME\n\\char e014  TW_61 ORE\n\\char e015  TW_62 VALA\n\\char e016  TW_63 ANNA\n\\char e017  TW_64 VILYA\n\\char e018  TW_EXT_11 TINCO_EXT SULE_EXT THULE_EXT\n\\char e019  TW_EXT_12 PARMA_EXT FORMEN_EXT \n\\char e01A  TW_EXT_13 CALMA_EXT AHA_EXT\n\\char e01B  TW_EXT_14 QUESSE_EXT HWESTA_EXT   \n\\char e01C  TW_EXT_21 ANDO_EXT ANTO_EXT \n\\char e01D  TW_EXT_22 UMBAR_EXT AMPA_EXT\n\\char e01E  TW_EXT_23 ANGA_EXT ANCA_EXT\n\\char e01F  TW_EXT_24 UNGWE_EXT UNQUE_EXT\n\n\\char e020  TW_71 ROMEN\n\\char e021  TW_72 ARDA\n\\char e022  TW_73 LAMBE LAMBE_NO_LIG\n\\char e023  TW_74 ALDA \n\\char e024  TW_81 SILME \n\\char e025  TW_82 SILME_NUQUERNA \n\\char e026  TW_83 ESSE\n\\char e027  TW_84 ESSE_NUQUERNA\n\\char e028  TW_91 HYARMEN \n\\char e029  TW_92 HWESTA_SINDARINWA \n\\char e02A  TW_93 YANTA\n\\char e02B  TW_94 URE\n\\char e02C  ARA\n\\char e02D  HALLA\n\\char e02E  TELCO\n\\**.....**\\    \n\n\\char e030  REVERSED_OSSE\n\\char e031  BOMBADIL_W \n\\char e032  OSSE\n\\**.....**\\ \n\\char e034  LIGATING_SHORT_CARRIER\n\\**..D..**\\ \n\\char e036  ANNA_OPEN\n\\char e037  CHRISTOPHER_QU\n\\**..D..**\\ \n\\char e039  BOMBADIL_HW\n\\char e03A  TW_MH MALTA_W_HOOK \n\\char e03B  TW_MH_BELERIANDIC VALA_W_HOOK \n\\char e03C  TW_HW_LOWDHAM HARP_SHAPED\n\\char e03D  VAIA WAIA VAIYA\n\\**..X..**\\ \n\\**..X..**\\ \n \n\\char e040  ? \\** LEGACY FONT **\\\n\\char e041  ? \\** LEGACY FONT **\\\n\\char e042  ? \\** LEGACY FONT **\\\n\\char e043  ? \\** LEGACY FONT **\\\n\\char e044  ? \\** LEGACY FONT **\\\n\\char e045  ? \\** LEGACY FONT **\\\n\\char e046  ? \\** LEGACY FONT **\\\n\\char e047  ? \\** LEGACY FONT **\\\n\\char e048  ? \\** LEGACY FONT **\\\n\\char e049  ? \\** LEGACY FONT **\\\n\\char e04A  ? \\** LEGACY FONT **\\\n\\char e04B  ? \\** LEGACY FONT **\\\n\\char e04C  ? \\** LEGACY FONT **\\\n\\char e04D  ? \\** LEGACY FONT **\\\n\\char e04E  ? \\** LEGACY FONT **\\\n\\char e04F  ? \\** LEGACY FONT **\\\n\n\\char e050  ? \\** LEGACY FONT **\\\n\\char e051  ? \\** LEGACY FONT **\\\n\\char e052  ? \\** LEGACY FONT **\\\n\\char e053  ? \\** LEGACY FONT **\\\n\\char e054  ? \\** LEGACY FONT **\\\n\\char e055  ? \\** LEGACY FONT **\\\n\\char e056  ? \\** LEGACY FONT **\\\n\\char e057  ? \\** LEGACY FONT **\\\n\\char e058  ? \\** LEGACY FONT **\\\n\\char e059  ? \\** LEGACY FONT **\\\n\\char e05A  ? \\** LEGACY FONT **\\\n\\**.....**\\ \n\\**.....**\\ \n\\**.....**\\ \n\\**.....**\\ \n\\**.....**\\ \n\n\\**..D..**\\ \n\\**..D..**\\ \n\\**..D..**\\ \n\\**..D..**\\ \n\\**..D..**\\ \n\\char e065  PUNCT_EXCLAM\n\\char e066  PUNCT_INTERR\n\\char e067  ELVISH_PAREN BOOKMARK_SIGN\n\\char e068  PUNCT_TILD \n\\char e069  PUNCT_DTILD\n\\char e06A  DQUOT_OPEN\n\\char e06B  DQUOT_CLOSE\n\\char e06C  THORIN_EXCLAMATION\n\\**.....**\\ \n\\**..X..**\\ \n\\**..X..**\\ \n\n\n\\char e070 NUM_0 \n\\char e071 NUM_1 \n\\char e072 NUM_2 \n\\char e073 NUM_3 \n\\char e074 NUM_4 \n\\char e075 NUM_5 \n\\char e076 NUM_6 \n\\char e077 NUM_7 \n\\char e078 NUM_8 \n\\char e079 NUM_9 \n\\char e07A NUM_10\n\\char e07B NUM_11\n\\char e07C NUM_12\n\n\\** MISSING in the norm**\\\n\\char 204A OLD_ENGLISH_AND\n\n\\char e03e SILME_NUQUERNA_ALT\n\\char e06e RING_MARK_L \n\\char e06f RING_MARK_R\n\n\\** LEGACY SARINCE **\\\n\n\\char EBD0 SARINCE_LEFT_V1 SHOOK_LEFT_L\n\\char EBD1 SARINCE_LEFT_V2 SHOOK_LEFT_S\n\n\\char EBD8 SARINCE_RIGHT_V1 SHOOK_RIGHT_L\n\\char EBD9 SARINCE_RIGHT_V2 SHOOK_RIGHT_S\n\\char EBDA SARINCE_RIGHT_V3\n\n\\char EBE0 SARINCE_SEMI_ASCENDING_V1\n\n\\char EBE8 SARINCE_ASCENDING_V1\n\\** .. **\\\n\\char EBEA SARINCE_ASCENDING_V3\n\n\\char EBF0 SARINCE_DESCENDING_V1\n\n\\char EBF8 SARINCE_FLOURISHED_V1  SARINCE_FLOURISHED SHOOK_BEAUTIFUL\n\\char EBF9 SARINCE_FLOURISHED_V2\n\n\\** Consonant modifiers **\\\n\n\\char EC00 DASH_INF_XS\n\\char EC01 DASH_INF_S   \n\\char EC02 DASH_INF_L    \n\\char EC0F LAMBE_MARK_DASH \n\n\\char EC10 TILD_INF_XS\n\\char EC11 TILD_INF_S   \n\\char EC12 TILD_INF_L            \n\\char EC1F LAMBE_MARK_TILD   \n\n\\char EC20 DASH_SUP_XS\n\\char EC21 DASH_SUP_S                      \n\\char EC22 DASH_SUP_L  \n\n\\char EC30 TILD_SUP_XS\n\\char EC31 TILD_SUP_S  \n\\char EC32 TILD_SUP_L                       \n\n\\** Base tehtar **\\\n\n\\char EC40 A_TEHTA_XS  \n\\char EC41 A_TEHTA_S \n\\char EC42 A_TEHTA_L \n\\char EC43 A_TEHTA_XL       \n\n\\char EC50 E_TEHTA_XS         \n\\char EC51 E_TEHTA_S\n\\char EC52 E_TEHTA_L \n\\char EC53 E_TEHTA_XL  \n\n\\char EC60 I_TEHTA_XS   \n\\char EC61 I_TEHTA_S  \n\\char EC62 I_TEHTA_L   \n\\char EC63 I_TEHTA_XL   \n      \n\\char EC70 O_TEHTA_XS              \n\\char EC71 O_TEHTA_S    \n\\char EC72 O_TEHTA_L   \n\\char EC73 O_TEHTA_XL \n      \n\\char EC80 U_TEHTA_XS \n\\char EC81 U_TEHTA_S \n\\char EC82 U_TEHTA_L    \n\\char EC83 U_TEHTA_XL  \n\n\\** Inf tehtar **\\\n\n\\char EC90 THINF_TDOT_XS       \n\\char EC91 THINF_TDOT_L           \n\\char EC92 THINF_TDOT_S           \n\\char EC93 THINF_TDOT_XL\n\n\\char ECA0 THINF_ACCENT_XS    \n\\char ECA1 THINF_ACCENT_S       \n\\char ECA2 THINF_ACCENT_L                                                         \n\\char ECA3 THINF_ACCENT_XL \n\n\\char ECB0 THINF_DOT_XS        \n\\char ECB1 THINF_DOT_S           \n\\char ECB2 THINF_DOT_L           \n\\char ECB3 THINF_DOT_XL\n\\char ECBF LAMBE_MARK_DOT  \n\n\\char ECC0 THINF_CURL_XS          \n\\char ECC1 THINF_CURL_S           \n\\char ECC2 THINF_CURL_L           \n\\char ECC3 THINF_CURL_XL     \n \n\\char ECD0 THINF_CURL_INV_XS                                \n\\char ECD1 THINF_CURL_INV_S                                                            \n\\char ECD2 THINF_CURL_INV_L                                \n\\char ECD3 THINF_CURL_INV_XL \n\n\\** Double tehtar **\\\n\n\\char ECE0 A_TEHTA_DOUBLE_XS\n\\char ECE1 A_TEHTA_DOUBLE_S \n\\char ECE2 A_TEHTA_DOUBLE_L \n\\char ECE3 A_TEHTA_DOUBLE_XL\n\n\\char ECF0 E_TEHTA_DOUBLE_XS\n\\char ECF1 E_TEHTA_DOUBLE_S \n\\char ECF2 E_TEHTA_DOUBLE_L \n\\char ECF3 E_TEHTA_DOUBLE_XL\n\n\\char ED00 THSUP_DDOT_XS    Y_TEHTA_XS    I_TEHTA_DOUBLE_XS         \n\\char ED01 THSUP_DDOT_S     Y_TEHTA_S     I_TEHTA_DOUBLE_S       \n\\char ED02 THSUP_DDOT_L     Y_TEHTA_L     I_TEHTA_DOUBLE_L          \n\\char ED03 THSUP_DDOT_XL    Y_TEHTA_XL    I_TEHTA_DOUBLE_XL     \n\n\\char ED10 O_TEHTA_DOUBLE_XS\n\\char ED11 O_TEHTA_DOUBLE_S \n\\char ED12 O_TEHTA_DOUBLE_L \n\\char ED13 O_TEHTA_DOUBLE_XL \n\n\\char ED20 U_TEHTA_DOUBLE_XS\n\\char ED21 U_TEHTA_DOUBLE_S \n\\char ED22 U_TEHTA_DOUBLE_L \n\\char ED23 U_TEHTA_DOUBLE_XL\n\n\\** Double inf tehtar **\\\n\n\\char ED30 THINF_DSTROKE_XS                               \n\\char ED31 THINF_DSTROKE_S       \n\\char ED32 THINF_DSTROKE_L                         \n\\char ED33 THINF_DSTROKE_XL \n\\char ED3F LAMBE_MARK_DSTROKE \n\n\\char ED40 THINF_DDOT_XS          \n\\char ED41 THINF_DDOT_S           \n\\char ED42 THINF_DDOT_L           \n\\char ED43 THINF_DDOT_XL \n\\char ED4F LAMBE_MARK_DDOT    \n\n\\** Labializer **\\\n\n\\char ED50 WA_TEHTA_XS           \n\\char ED51 WA_TEHTA_S           \n\\char ED52 WA_TEHTA_L           \n\\char ED53 WA_TEHTA_XL  \n\n\\** Thinnas **\\\n\n\\char ED60 THINF_STROKE_XS                                 \n\\char ED61 THINF_STROKE_S                                 \n\\char ED62 THINF_STROKE_L                                 \n\\char ED63 THINF_STROKE_XL    \n\n\\** MSB Marker **\\\n\n\\char ED70 TH_SUB_CIRC_XS         \n\\char ED71 TH_SUB_CIRC_S           \n\\char ED72 TH_SUB_CIRC_L                                  \n\\char ED73 TH_SUB_CIRC_XL  \n\n\\** Other UP Tehtar **\\\n\n\\char ED80 A_TEHTA_INV_XS \n\\char ED81 A_TEHTA_INV_S         \n\\char ED82 A_TEHTA_INV_L         \n\\char ED83 A_TEHTA_INV_XL    \n\n\\char ED90 THSUP_TICK_INV_XS    A_TEHTA_CIRCUM_XS       \n\\char ED91 THSUP_TICK_INV_S     A_TEHTA_CIRCUM_S        \n\\char ED92 THSUP_TICK_INV_L     A_TEHTA_CIRCUM_L         \n\\char ED93 THSUP_TICK_INV_XL    A_TEHTA_CIRCUM_XL   \n\n\\char EDA0 THSUP_TICK_XS          \n\\char EDA1 THSUP_TICK_S           \n\\char EDA2 THSUP_TICK_L           \n\\char EDA3 THSUP_TICK_XL     \n                                                          \n\\char EDB0 THSUP_LAMBDA_XS         \n\\char EDB1 THSUP_LAMBDA_S          \n\\char EDB2 THSUP_LAMBDA_L          \n\\char EDB3 THSUP_LAMBDA_XL  \n\n\\char EDC0 E_TEHTA_GRAVE_XS\n\\char EDC1 E_TEHTA_GRAVE_S \n\\char EDC2 E_TEHTA_GRAVE_L \n\\char EDC3 E_TEHTA_GRAVE_XL \n\n\\char EDD0 BREVE_TEHTA_XS\n\\char EDD1 BREVE_TEHTA_S\n\\char EDD2 BREVE_TEHTA_L\n\\char EDD3 BREVE_TEHTA_XL\n\n\\char EDE0 E_TEHTA_GRAVE_INF_XS\n\\char EDE1 E_TEHTA_GRAVE_INF_S\n\\char EDE2 E_TEHTA_GRAVE_INF_L\n\\char EDE3 E_TEHTA_GRAVE_INF_XL\n\n\n\\** Ligatured results are mapped here **\\\n\\char e800 AHA_TINCO\n\\char e801 HWESTA_TINCO\n\\char e802 ANCA_CLOSED SILME_AHA\n\\char e900 LAMBE_LIG\n\n\n\n\n\\** The following virtual chars are used to handle tehtar (& the like) multiple version chosing **\\\n\\** It could be avoided with modern fonts with gsub/gpos tables for ligatures and diacritics **\\\n\\** placement **\\\n\n\\** DUMPED FROM THE VIRTUAL CHARS TOOL **\\\n\n\\beg virtual A_TEHTA\n  \\class A_TEHTA_XS TELCO ARA HALLA HYARMEN HARP_SHAPED NUM_10 NUM_11\n  \\class A_TEHTA_S SULE FORMEN TW_EXT_11 TW_EXT_12 SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE_NUQUERNA YANTA OSSE AHA_TINCO HWESTA_TINCO NUM_0 NUM_4 NUM_8\n  \\class A_TEHTA_L TINCO PARMA CALMA QUESSE ORE VALA ANNA VILYA ROMEN ARDA LAMBE URE VAIA VALA_W_HOOK NUM_1\n  \\class A_TEHTA_XL ANDO UMBAR ANGA UNGWE AHA HWESTA ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 ALDA SILME ESSE HWESTA_SINDARINWA MALTA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_3 NUM_5 NUM_6 NUM_7 NUM_9\n\\end\n\n\\beg virtual A_TEHTA_CIRCUM\n  \\class A_TEHTA_CIRCUM_XS TELCO ARA HALLA HYARMEN HARP_SHAPED NUM_10 NUM_11\n  \\class A_TEHTA_CIRCUM_S SULE FORMEN TW_EXT_11 TW_EXT_12 SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE_NUQUERNA YANTA OSSE AHA_TINCO HWESTA_TINCO NUM_0 NUM_4 NUM_8\n  \\class A_TEHTA_CIRCUM_L TINCO PARMA CALMA QUESSE ORE VALA ANNA VILYA ROMEN ARDA LAMBE URE VAIA VALA_W_HOOK NUM_1\n  \\class A_TEHTA_CIRCUM_XL ANDO UMBAR ANGA UNGWE AHA HWESTA ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 ALDA SILME ESSE HWESTA_SINDARINWA MALTA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_3 NUM_5 NUM_6 NUM_7 NUM_9\n\\end\n\n\\beg virtual A_TEHTA_REVERSED\n  \\class A_TEHTA_INV_XS TELCO ARA HALLA HYARMEN HARP_SHAPED NUM_10 NUM_11\n  \\class A_TEHTA_INV_S SULE FORMEN TW_EXT_11 TW_EXT_12 SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE_NUQUERNA YANTA OSSE AHA_TINCO HWESTA_TINCO NUM_0 NUM_4 NUM_8\n  \\class A_TEHTA_INV_L TINCO PARMA CALMA QUESSE ORE VALA ANNA VILYA ROMEN ARDA LAMBE URE VAIA VALA_W_HOOK NUM_1\n  \\class A_TEHTA_INV_XL ANDO UMBAR ANGA UNGWE AHA HWESTA ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 ALDA SILME ESSE HWESTA_SINDARINWA MALTA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_3 NUM_5 NUM_6 NUM_7 NUM_9\n\\end\n\n\\beg virtual A_TEHTA_CIRCUM_REVERSED TEHTA_BREVE\n  \\class THSUP_TICK_XS TELCO ARA HALLA HYARMEN HARP_SHAPED NUM_10 NUM_11\n  \\class THSUP_TICK_S SULE FORMEN TW_EXT_11 TW_EXT_12 SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE_NUQUERNA YANTA OSSE AHA_TINCO HWESTA_TINCO NUM_0 NUM_4 NUM_8\n  \\class THSUP_TICK_L TINCO PARMA CALMA QUESSE ORE VALA ANNA VILYA ROMEN ARDA LAMBE URE VAIA VALA_W_HOOK NUM_1\n  \\class THSUP_TICK_XL ANDO UMBAR ANGA UNGWE AHA HWESTA ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 ALDA SILME ESSE HWESTA_SINDARINWA MALTA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_3 NUM_5 NUM_6 NUM_7 NUM_9\n\\end\n\n\\beg virtual E_TEHTA\n  \\class E_TEHTA_XS TELCO ARA HALLA HYARMEN HARP_SHAPED NUM_10 NUM_11\n  \\class E_TEHTA_S SULE FORMEN TW_EXT_11 TW_EXT_12 SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE_NUQUERNA YANTA OSSE AHA_TINCO HWESTA_TINCO NUM_0 NUM_1 NUM_8\n  \\class E_TEHTA_L TINCO PARMA CALMA QUESSE ORE VALA ANNA VILYA ROMEN ARDA LAMBE URE VAIA NUM_4\n  \\class E_TEHTA_XL ANDO UMBAR ANGA UNGWE AHA HWESTA ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 ALDA SILME ESSE HWESTA_SINDARINWA MALTA_W_HOOK VALA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_3 NUM_5 NUM_6 NUM_7 NUM_9\n\\end\n\n\\beg virtual E_TEHTA_GRAVE\n  \\class E_TEHTA_GRAVE_XS TELCO ARA HALLA AHA HWESTA ORE VALA ANNA VILYA TW_EXT_11 TW_EXT_12 TW_EXT_13 TW_EXT_14 ROMEN ARDA SILME ESSE HWESTA_SINDARINWA YANTA URE OSSE VAIA HARP_SHAPED NUM_5 NUM_7 NUM_10 NUM_11\n  \\class E_TEHTA_GRAVE_S SULE FORMEN SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE_NUQUERNA HYARMEN AHA_TINCO HWESTA_TINCO NUM_0 NUM_1 NUM_4 NUM_8\n  \\class E_TEHTA_GRAVE_L TINCO PARMA CALMA QUESSE ANDO UMBAR ANGA UNGWE ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 LAMBE ALDA MALTA_W_HOOK VALA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_6 NUM_9\n  \\class E_TEHTA_GRAVE_XL NUM_3\n\\end\n\n\\beg virtual I_TEHTA\n  \\class I_TEHTA_XS TELCO ARA HALLA HYARMEN HARP_SHAPED NUM_10 NUM_11\n  \\class I_TEHTA_S SULE FORMEN TW_EXT_11 TW_EXT_12 SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE_NUQUERNA YANTA OSSE AHA_TINCO HWESTA_TINCO NUM_0\n  \\class I_TEHTA_L TINCO PARMA CALMA QUESSE ORE VALA ANNA VILYA ROMEN ARDA LAMBE URE VAIA VALA_W_HOOK NUM_1 NUM_4 NUM_7 NUM_8\n  \\class I_TEHTA_XL ANDO UMBAR ANGA UNGWE AHA HWESTA ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 ALDA SILME ESSE HWESTA_SINDARINWA MALTA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_3 NUM_5 NUM_6 NUM_9\n\\end\n\n\\beg virtual O_TEHTA\n  \\class O_TEHTA_XS TELCO ARA HALLA HYARMEN HARP_SHAPED NUM_10 NUM_11\n  \\class O_TEHTA_S SULE FORMEN TW_EXT_11 TW_EXT_12 SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE_NUQUERNA YANTA OSSE AHA_TINCO HWESTA_TINCO NUM_0\n  \\class O_TEHTA_L TINCO PARMA CALMA QUESSE ORE VALA ANNA VILYA ROMEN ARDA LAMBE URE VAIA NUM_4\n  \\class O_TEHTA_XL ANDO UMBAR ANGA UNGWE AHA HWESTA ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 ALDA SILME ESSE HWESTA_SINDARINWA MALTA_W_HOOK VALA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_1 NUM_2 NUM_3 NUM_5 NUM_6 NUM_7 NUM_8 NUM_9\n\\end\n\n\\beg virtual U_TEHTA\n  \\class U_TEHTA_XS TELCO ARA HALLA HYARMEN HARP_SHAPED NUM_10 NUM_11\n  \\class U_TEHTA_S SULE FORMEN TW_EXT_11 TW_EXT_12 SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE_NUQUERNA YANTA OSSE AHA_TINCO HWESTA_TINCO NUM_0 NUM_1 NUM_8\n  \\class U_TEHTA_L TINCO PARMA CALMA QUESSE ORE VALA ANNA VILYA ROMEN ARDA LAMBE URE VAIA VALA_W_HOOK NUM_4\n  \\class U_TEHTA_XL ANDO UMBAR ANGA UNGWE AHA HWESTA ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 ALDA SILME ESSE HWESTA_SINDARINWA MALTA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_3 NUM_5 NUM_6 NUM_7 NUM_9\n\\end\n\n\\beg virtual WA_TEHTA SEV_TEHTA\n  \\class WA_TEHTA_XS TELCO ARA HALLA HYARMEN HARP_SHAPED NUM_4 NUM_10 NUM_11\n  \\class WA_TEHTA_S SULE FORMEN TW_EXT_11 TW_EXT_12 SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE_NUQUERNA YANTA OSSE VAIA AHA_TINCO HWESTA_TINCO NUM_0 NUM_8\n  \\class WA_TEHTA_L TINCO PARMA CALMA QUESSE ORE VALA ANNA VILYA ROMEN ARDA LAMBE URE VALA_W_HOOK NUM_1 NUM_5 NUM_7\n  \\class WA_TEHTA_XL ANDO UMBAR ANGA UNGWE AHA HWESTA ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 ALDA SILME ESSE HWESTA_SINDARINWA MALTA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_3 NUM_6 NUM_9\n\\end\n\n\\beg virtual A_TEHTA_DOUBLE\n  \\class A_TEHTA_DOUBLE_XS TELCO ARA HALLA HYARMEN HARP_SHAPED NUM_10 NUM_11\n  \\class A_TEHTA_DOUBLE_S SULE FORMEN TW_EXT_11 TW_EXT_12 SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE_NUQUERNA YANTA OSSE AHA_TINCO HWESTA_TINCO NUM_0 NUM_4 NUM_8\n  \\class A_TEHTA_DOUBLE_L TINCO PARMA CALMA QUESSE ORE VALA ANNA VILYA ROMEN ARDA LAMBE URE VAIA NUM_1\n  \\class A_TEHTA_DOUBLE_XL ANDO UMBAR ANGA UNGWE AHA HWESTA ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 ALDA SILME ESSE HWESTA_SINDARINWA MALTA_W_HOOK VALA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_3 NUM_5 NUM_6 NUM_7 NUM_9\n\\end\n\n\\beg virtual E_TEHTA_DOUBLE\n  \\class E_TEHTA_DOUBLE_XS TELCO ARA HALLA HYARMEN HARP_SHAPED NUM_10 NUM_11\n  \\class E_TEHTA_DOUBLE_S SULE FORMEN TW_EXT_11 TW_EXT_12 SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE_NUQUERNA YANTA OSSE AHA_TINCO HWESTA_TINCO\n  \\class E_TEHTA_DOUBLE_L TINCO PARMA CALMA QUESSE ORE VALA ANNA VILYA ROMEN ARDA LAMBE URE VAIA NUM_0\n  \\class E_TEHTA_DOUBLE_XL ANDO UMBAR ANGA UNGWE AHA HWESTA ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 ALDA SILME ESSE HWESTA_SINDARINWA MALTA_W_HOOK VALA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_1 NUM_2 NUM_3 NUM_4 NUM_5 NUM_6 NUM_7 NUM_8 NUM_9\n\\end\n\n\\beg virtual I_TEHTA_DOUBLE Y_TEHTA\n  \\class I_TEHTA_DOUBLE_XS TELCO ARA HALLA HYARMEN HARP_SHAPED NUM_10 NUM_11\n  \\class I_TEHTA_DOUBLE_S SULE FORMEN TW_EXT_11 TW_EXT_12 SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE_NUQUERNA YANTA OSSE VAIA AHA_TINCO HWESTA_TINCO NUM_0 NUM_4 NUM_8\n  \\class I_TEHTA_DOUBLE_L TINCO PARMA CALMA QUESSE ORE VALA ANNA VILYA ROMEN ARDA LAMBE URE VALA_W_HOOK NUM_1\n  \\class I_TEHTA_DOUBLE_XL ANDO UMBAR ANGA UNGWE AHA HWESTA ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 ALDA SILME ESSE HWESTA_SINDARINWA MALTA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_3 NUM_5 NUM_6 NUM_7 NUM_9\n\\end\n\n\\beg virtual O_TEHTA_DOUBLE\n  \\class O_TEHTA_DOUBLE_XS TELCO ARA HALLA HYARMEN HARP_SHAPED NUM_10 NUM_11\n  \\class O_TEHTA_DOUBLE_S SULE FORMEN TW_EXT_11 TW_EXT_12 SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE_NUQUERNA YANTA OSSE VAIA AHA_TINCO HWESTA_TINCO\n  \\class O_TEHTA_DOUBLE_L TINCO PARMA CALMA QUESSE ORE VALA ANNA VILYA ROMEN ARDA LAMBE URE NUM_0 NUM_4 NUM_8\n  \\class O_TEHTA_DOUBLE_XL ANDO UMBAR ANGA UNGWE AHA HWESTA ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 ALDA SILME ESSE HWESTA_SINDARINWA MALTA_W_HOOK VALA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_1 NUM_2 NUM_3 NUM_5 NUM_6 NUM_7 NUM_9\n\\end\n\n\\beg virtual U_TEHTA_DOUBLE\n  \\class U_TEHTA_DOUBLE_XS TELCO ARA HALLA HYARMEN HARP_SHAPED NUM_10 NUM_11\n  \\class U_TEHTA_DOUBLE_S SULE FORMEN TW_EXT_11 TW_EXT_12 SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE_NUQUERNA YANTA OSSE VAIA AHA_TINCO HWESTA_TINCO NUM_0 NUM_1 NUM_8\n  \\class U_TEHTA_DOUBLE_L TINCO PARMA CALMA QUESSE ORE VALA ANNA VILYA ROMEN ARDA LAMBE URE NUM_4\n  \\class U_TEHTA_DOUBLE_XL ANDO UMBAR ANGA UNGWE AHA HWESTA ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 ALDA SILME ESSE HWESTA_SINDARINWA MALTA_W_HOOK VALA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_3 NUM_5 NUM_6 NUM_7 NUM_9\n\\end\n\n\\beg virtual A_TEHTA_INF\n  \\class THINF_TDOT_XS TELCO ARA HALLA ROMEN ARDA SILME_NUQUERNA SILME_NUQUERNA_ALT HARP_SHAPED\n  \\class THINF_TDOT_S TINCO PARMA TW_EXT_11 TW_EXT_12 SILME YANTA OSSE AHA_TINCO HWESTA_TINCO NUM_5 NUM_7\n  \\class THINF_TDOT_L SULE FORMEN AHA HWESTA ORE VALA ANNA VILYA ESSE ESSE_NUQUERNA HYARMEN HWESTA_SINDARINWA URE VAIA NUM_0 NUM_1 NUM_4 NUM_8 NUM_10 NUM_11\n  \\class THINF_TDOT_XL CALMA QUESSE ANDO UMBAR ANGA UNGWE ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 LAMBE ALDA MALTA_W_HOOK VALA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_3 NUM_6 NUM_9\n\\end\n\n\\beg virtual E_TEHTA_INF\n  \\class THINF_ACCENT_XS TELCO ARA HALLA ROMEN ARDA SILME_NUQUERNA SILME_NUQUERNA_ALT VAIA HARP_SHAPED NUM_0 NUM_1 NUM_4 NUM_5 NUM_7 NUM_8 NUM_10 NUM_11\n  \\class THINF_ACCENT_S TINCO PARMA TW_EXT_11 TW_EXT_12 SILME YANTA OSSE VALA_W_HOOK AHA_TINCO HWESTA_TINCO\n  \\class THINF_ACCENT_L SULE FORMEN AHA HWESTA ORE VALA ANNA VILYA ESSE ESSE_NUQUERNA HYARMEN HWESTA_SINDARINWA URE NUM_2 NUM_3 NUM_6 NUM_9\n  \\class THINF_ACCENT_XL CALMA QUESSE ANDO UMBAR ANGA UNGWE ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 LAMBE ALDA MALTA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED\n\\end\n\n\\beg virtual E_TEHTA_GRAVE_INF\n  \\class E_TEHTA_GRAVE_INF_XS TELCO ARA HALLA HARP_SHAPED\n  \\class E_TEHTA_GRAVE_INF_S CALMA QUESSE LAMBE ALDA SHOOK_BEAUTIFUL NUM_2 NUM_5\n  \\class E_TEHTA_GRAVE_INF_L TINCO PARMA SULE FORMEN AHA HWESTA ORE VALA ANNA VILYA TW_EXT_11 TW_EXT_12 TW_EXT_13 TW_EXT_14 ROMEN ARDA SILME SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE ESSE_NUQUERNA HYARMEN HWESTA_SINDARINWA YANTA URE OSSE VAIA VALA_W_HOOK AHA_TINCO HWESTA_TINCO NUM_0 NUM_1 NUM_4 NUM_7 NUM_8 NUM_10 NUM_11\n  \\class E_TEHTA_GRAVE_INF_XL ANDO UMBAR ANGA UNGWE ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 MALTA_W_HOOK ANCA_CLOSED NUM_3 NUM_6 NUM_9\n\\end\n\n\\beg virtual CIRC_TEHTA_INF\n  \\class TH_SUB_CIRC_XS TELCO ARA HALLA ROMEN ARDA SILME_NUQUERNA SILME_NUQUERNA_ALT HARP_SHAPED\n  \\class TH_SUB_CIRC_S TINCO PARMA TW_EXT_11 TW_EXT_12 SILME YANTA OSSE VAIA AHA_TINCO HWESTA_TINCO NUM_0 NUM_7 NUM_10 NUM_11\n  \\class TH_SUB_CIRC_L SULE FORMEN AHA HWESTA ORE VALA ANNA VILYA ESSE ESSE_NUQUERNA HYARMEN HWESTA_SINDARINWA URE VALA_W_HOOK NUM_1 NUM_2 NUM_4 NUM_5 NUM_8\n  \\class TH_SUB_CIRC_XL CALMA QUESSE ANDO UMBAR ANGA UNGWE ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 LAMBE ALDA MALTA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_3 NUM_6 NUM_9\n\\end\n\n\\beg virtual THINNAS  THINF_STROKE\n  \\class THINF_STROKE_XS TELCO ARA HALLA ROMEN ARDA SILME_NUQUERNA SILME_NUQUERNA_ALT HARP_SHAPED\n  \\class THINF_STROKE_S TINCO PARMA TW_EXT_11 TW_EXT_12 SILME YANTA OSSE AHA_TINCO HWESTA_TINCO NUM_5\n  \\class THINF_STROKE_L SULE FORMEN AHA HWESTA ORE VALA ANNA VILYA ESSE ESSE_NUQUERNA HYARMEN HWESTA_SINDARINWA URE VAIA VALA_W_HOOK NUM_0 NUM_1 NUM_4 NUM_7 NUM_8 NUM_10 NUM_11\n  \\class THINF_STROKE_XL CALMA QUESSE ANDO UMBAR ANGA UNGWE ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 LAMBE ALDA MALTA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_3 NUM_6 NUM_9\n\\end\n\n\\beg virtual O_TEHTA_INF\n  \\class THINF_CURL_XS TELCO ARA HALLA ROMEN ARDA SILME_NUQUERNA SILME_NUQUERNA_ALT HARP_SHAPED NUM_10 NUM_11\n  \\class THINF_CURL_S TINCO PARMA TW_EXT_11 TW_EXT_12 SILME YANTA OSSE AHA_TINCO HWESTA_TINCO NUM_0 NUM_1 NUM_2 NUM_3 NUM_4 NUM_5 NUM_6 NUM_7 NUM_8 NUM_9\n  \\class THINF_CURL_L SULE FORMEN AHA HWESTA ORE VALA ANNA VILYA ESSE ESSE_NUQUERNA HYARMEN HWESTA_SINDARINWA URE VAIA VALA_W_HOOK\n  \\class THINF_CURL_XL CALMA QUESSE ANDO UMBAR ANGA UNGWE ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 LAMBE ALDA MALTA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED\n\\end\n\n\\beg virtual U_TEHTA_INF\n  \\class THINF_CURL_INV_XS TELCO ARA HALLA ROMEN ARDA SILME_NUQUERNA SILME_NUQUERNA_ALT HARP_SHAPED NUM_4 NUM_7 NUM_10 NUM_11\n  \\class THINF_CURL_INV_S TINCO PARMA TW_EXT_11 TW_EXT_12 SILME YANTA OSSE AHA_TINCO HWESTA_TINCO NUM_0 NUM_1 NUM_2 NUM_5 NUM_8 NUM_9\n  \\class THINF_CURL_INV_L SULE FORMEN AHA HWESTA ORE VALA ANNA VILYA ESSE ESSE_NUQUERNA HYARMEN HWESTA_SINDARINWA URE VAIA VALA_W_HOOK NUM_6\n  \\class THINF_CURL_INV_XL CALMA QUESSE ANDO UMBAR ANGA UNGWE ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 LAMBE ALDA MALTA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_3\n\\end\n\n\\beg virtual PALATAL_SIGN I_TEHTA_DOUBLE_INF Y_TEHTA_INF\n  \\class THINF_DDOT_XS TELCO ARA HALLA ROMEN ARDA SILME_NUQUERNA SILME_NUQUERNA_ALT HARP_SHAPED\n  \\class THINF_DDOT_S TINCO PARMA TW_EXT_11 TW_EXT_12 SILME YANTA OSSE VAIA AHA_TINCO HWESTA_TINCO NUM_0 NUM_4 NUM_5 NUM_7 NUM_10 NUM_11\n  \\class THINF_DDOT_L SULE FORMEN AHA HWESTA ORE VALA ANNA VILYA ESSE ESSE_NUQUERNA HYARMEN HWESTA_SINDARINWA URE VALA_W_HOOK NUM_1 NUM_8\n  \\class THINF_DDOT_XL CALMA QUESSE ANDO UMBAR ANGA UNGWE ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 MALTA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_3 NUM_6 NUM_9\n  \\class LAMBE_MARK_DDOT LAMBE ALDA\n\\end\n\n\\beg virtual E_TEHTA_DOUBLE_INF GEMINATE_DOUBLE\n  \\class THINF_DSTROKE_XS TELCO ARA HALLA ROMEN ARDA SILME_NUQUERNA SILME_NUQUERNA_ALT HARP_SHAPED\n  \\class THINF_DSTROKE_S TINCO PARMA TW_EXT_11 TW_EXT_12 SILME YANTA OSSE VAIA AHA_TINCO HWESTA_TINCO NUM_0 NUM_1 NUM_4 NUM_5 NUM_7 NUM_10 NUM_11\n  \\class THINF_DSTROKE_L SULE FORMEN AHA HWESTA ORE VALA ANNA VILYA ESSE ESSE_NUQUERNA HYARMEN HWESTA_SINDARINWA URE VALA_W_HOOK NUM_2 NUM_3 NUM_6 NUM_8\n  \\class THINF_DSTROKE_XL CALMA QUESSE ANDO UMBAR ANGA UNGWE ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 MALTA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_9\n  \\class LAMBE_MARK_DSTROKE LAMBE ALDA\n\\end\n\n\\beg virtual UNUTIXE I_TEHTA_INF NO_VOWEL_DOT\n  \\class THINF_DOT_XS TELCO ARA HALLA ROMEN ARDA SILME_NUQUERNA SILME_NUQUERNA_ALT HARP_SHAPED\n  \\class THINF_DOT_S TINCO PARMA TW_EXT_11 TW_EXT_12 SILME YANTA OSSE VAIA AHA_TINCO HWESTA_TINCO NUM_0 NUM_10 NUM_11\n  \\class THINF_DOT_L SULE FORMEN AHA HWESTA ORE VALA ANNA VILYA ESSE ESSE_NUQUERNA HYARMEN HWESTA_SINDARINWA URE NUM_1 NUM_4 NUM_5 NUM_7 NUM_8\n  \\class THINF_DOT_XL CALMA QUESSE ANDO UMBAR ANGA UNGWE ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_13 TW_EXT_14 TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 MALTA_W_HOOK VALA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED NUM_2 NUM_3 NUM_6 NUM_9\n  \\class LAMBE_MARK_DOT LAMBE ALDA\n\\end\n\n\\beg virtual GEMINATE_SIGN\n  \\class DASH_INF_XS TELCO ARA HALLA\n  \\class DASH_INF_S TINCO PARMA CALMA QUESSE SULE FORMEN AHA HWESTA ORE VALA ANNA VILYA TW_EXT_11 TW_EXT_12 TW_EXT_13 TW_EXT_14 ROMEN ARDA SILME SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE ESSE_NUQUERNA HYARMEN HWESTA_SINDARINWA YANTA URE OSSE VAIA VALA_W_HOOK SHOOK_BEAUTIFUL HARP_SHAPED AHA_TINCO HWESTA_TINCO NUM_0 NUM_1 NUM_4 NUM_5 NUM_6 NUM_7 NUM_8 NUM_10 NUM_11\n  \\class DASH_INF_L ANDO UMBAR ANGA UNGWE ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 MALTA_W_HOOK ANCA_CLOSED NUM_2 NUM_3 NUM_9\n  \\class LAMBE_MARK_DASH LAMBE ALDA\n\\end\n\n\\beg virtual GEMINATE_SIGN_TILD\n  \\class TILD_INF_XS TELCO ARA HALLA\n  \\class TILD_INF_S TINCO PARMA CALMA QUESSE SULE FORMEN AHA HWESTA ORE VALA ANNA VILYA TW_EXT_11 TW_EXT_12 TW_EXT_13 TW_EXT_14 ROMEN ARDA SILME SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE ESSE_NUQUERNA HYARMEN HWESTA_SINDARINWA YANTA URE OSSE VAIA VALA_W_HOOK SHOOK_BEAUTIFUL HARP_SHAPED AHA_TINCO HWESTA_TINCO NUM_0 NUM_1 NUM_4 NUM_5 NUM_6 NUM_7 NUM_8 NUM_10 NUM_11\n  \\class TILD_INF_L ANDO UMBAR ANGA UNGWE ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 MALTA_W_HOOK ANCA_CLOSED NUM_2 NUM_3 NUM_9\n  \\class LAMBE_MARK_TILD LAMBE ALDA\n\\end\n\n\\beg virtual NASALIZE_SIGN\n  \\class DASH_SUP_XS TELCO ARA HALLA\n  \\class DASH_SUP_S TINCO PARMA CALMA QUESSE SULE FORMEN AHA HWESTA ORE VALA ANNA VILYA TW_EXT_11 TW_EXT_12 TW_EXT_13 TW_EXT_14 ROMEN ARDA LAMBE ALDA SILME SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE ESSE_NUQUERNA HYARMEN HWESTA_SINDARINWA YANTA URE OSSE VAIA VALA_W_HOOK SHOOK_BEAUTIFUL HARP_SHAPED AHA_TINCO HWESTA_TINCO NUM_0 NUM_1 NUM_4 NUM_5 NUM_6 NUM_7 NUM_8 NUM_10 NUM_11\n  \\class DASH_SUP_L ANDO UMBAR ANGA UNGWE ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 MALTA_W_HOOK ANCA_CLOSED NUM_2 NUM_3 NUM_9\n\\end\n\n\\beg virtual NASALIZE_SIGN_TILD\n  \\class TILD_SUP_XS TELCO ARA HALLA\n  \\class TILD_SUP_S TINCO PARMA CALMA QUESSE SULE FORMEN AHA HWESTA ORE VALA ANNA VILYA TW_EXT_11 TW_EXT_12 TW_EXT_13 TW_EXT_14 ROMEN ARDA LAMBE ALDA SILME SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE ESSE_NUQUERNA HYARMEN HWESTA_SINDARINWA YANTA URE OSSE VAIA VALA_W_HOOK SHOOK_BEAUTIFUL HARP_SHAPED AHA_TINCO HWESTA_TINCO NUM_0 NUM_1 NUM_4 NUM_5 NUM_6 NUM_7 NUM_8 NUM_10 NUM_11\n  \\class TILD_SUP_L ANDO UMBAR ANGA UNGWE ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME TW_EXT_21 TW_EXT_22 TW_EXT_23 TW_EXT_24 MALTA_W_HOOK ANCA_CLOSED NUM_2 NUM_3 NUM_9\n\\end\n\n\\beg virtual SARINCE\n  \\class SHOOK_LEFT_L CALMA QUESSE ANGA UNGWE TW_EXT_13 TW_EXT_14 TW_EXT_23 TW_EXT_24 HWESTA_SINDARINWA\n  \\class SHOOK_RIGHT_L TELCO ARA HALLA TINCO PARMA ANDO UMBAR SULE FORMEN AHA HWESTA ANTO AMPA ANCA UNQUE NUMEN MALTA NOLDO NWALME ORE VALA ANNA VILYA TW_EXT_11 TW_EXT_12 TW_EXT_21 TW_EXT_22 ROMEN ARDA LAMBE ALDA SILME SILME_NUQUERNA SILME_NUQUERNA_ALT ESSE ESSE_NUQUERNA HYARMEN YANTA URE OSSE VAIA MALTA_W_HOOK VALA_W_HOOK SHOOK_BEAUTIFUL ANCA_CLOSED HARP_SHAPED AHA_TINCO HWESTA_TINCO NUM_0 NUM_1 NUM_2 NUM_3 NUM_4 NUM_5 NUM_6 NUM_7 NUM_8 NUM_9 NUM_10 NUM_11\n\\end\n"