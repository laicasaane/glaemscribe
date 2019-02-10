Glaemscribe.resource_manager.raw_charsets["tengwar_freemono"] = "\\**\n\nGlǽmscribe (also written Glaemscribe) is a software dedicated to\nthe transcription of texts between writing systems, and more \nspecifically dedicated to the transcription of J.R.R. Tolkien\'s \ninvented languages to some of his devised writing systems.\n\nCopyright (C) 2015 Benjamin Babut (Talagan).\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\nany later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n**\\\n\n\\** Charset for the FreeMonoTengwar font **\\ \n\n\\version 0.0.8\n\n\\beg changelog\n  \\entry \"0.0.5\" \"Added VALA_W_HOOK.\"\n  \\entry \"0.0.6\" \"Updating punctuation\"\n  \\entry \"0.0.7\" \"Fixed missing tinco_ext / sule_ext\"\n  \\entry \"0.0.8\" \"Added NBSP\"\n  \\entry \"0.0.9\" \"Replaced fixed ligatures by their dynamic sequence\"\n\\end\n\n\\char 20 SPACE\n\\char a0 NBSP\n\n\\** PUSTAR, take them in unicode not in personnal use (deprecation) **\\\n\\char 2e31 PUNCT_DOT\n\\char   3a PUNCT_DDOT\n\\char 205D PUNCT_TDOT PUSTA_3\n\\char 2058 PUSTA_4\n\\char 10FB PUSTA_4_HALFED\n\\char 2E2C PUSTA_4_SQUARED\n\\char 2E2D PUSTA_5\n\n\\char e000  TW_11 TINCO     \n\\char e001  TW_12 PARMA\n\\char e002  TW_13 CALMA\n\\char e003  TW_14 QUESSE\n\n\\char e004  TW_21 ANDO  \n\\char e005  TW_22 UMBAR\n\\char e006  TW_23 ANGA  \n\\char e007  TW_24 UNGWE\n      \n\\char e008  TW_31 SULE THULE\n\\char e009  TW_32 FORMEN\n\\char e00A  TW_33 AHA  \n\\char e00B  TW_34 HWESTA\n\n\\char e00C  TW_41 ANTO\n\\char e00D  TW_42 AMPA\n\\char e00E  TW_43 ANCA\n\\char e00F  TW_44 UNQUE\n\n\\char e010  TW_51 NUMEN \n\\char e011  TW_52 MALTA\n\\char e012  TW_53 NOLDO\n\\char e013  TW_54 NWALME\n\n\\char e014  TW_61 ORE\n\\char e015  TW_62 VALA\n\\char e016  TW_63 ANNA\n\\char e017  TW_64 VILYA\n\n\\char e018  TW_EXT_11 TINCO_EXT SULE_EXT THULE_EXT\n\\char e019  TW_EXT_12 PARMA_EXT FORMEN_EXT \n\\char e01A  TW_EXT_13 CALMA_EXT AHA_EXT\n\\char e01B  TW_EXT_14 QUESSE_EXT HWESTA_EXT\n        \n\\char e01C  TW_EXT_21 ANDO_EXT ANTO_EXT \n\\char e01D  TW_EXT_22 UMBAR_EXT AMPA_EXT\n\\char e01E  TW_EXT_23 ANGA_EXT ANCA_EXT\n\\char e01F  TW_EXT_24 UNGWE_EXT UNQUE_EXT\n\n\\char e020  TW_71 ROMEN\n\\char e021  TW_72 ARDA\n\\char e022  TW_73 LAMBE\n\\char e023  TW_74 ALDA \n\n\\char e024  TW_81 SILME \n\\** Unfortunately, monotengwar is missing silme nuquerna used for y in beleriand **\\\n\\char e025  TW_82 SILME_NUQUERNA SILME_NUQUERNA_ALT\n\\char e026  TW_83 ESSE\n\\char e027  TW_84 ESSE_NUQUERNA\n\n\\char e028  TW_91 HYARMEN \n\\char e029  TW_92 HWESTA_SINDARINWA \n\\char e02A  TW_93 YANTA\n\\char e02B  TW_94 URE\n\n\\char e02C  ARA\n\\char e02D  HALLA\n\\char e02E  TELCO\n\\char e02F  ?      \n\n\\char e030  REVERSED_OSSE\n\\char e031  BOMBADIL_W \n\\char e032  OSSE\n\\char e033  ?\n\n\\char e034  LIGATING_SHORT_CARRIER\n\\char e035  ?\n\\char e036  ANNA_OPEN\n\\char e037  CHRISTOPHER_QU\n\n\\char e038  ?\n\\char e039  BOMBADIL_HW\n\\char e03A  TW_MH MALTA_W_HOOK \n\\char e03B  TW_MH_BELERIANDIC VALA_W_HOOK \n\n\\char e03C  TW_HW_LOWDHAM HARP_SHAPED\n\\char e03D  VAIA WAIA VAIYA\n\\char e03E  ?\n\\char e03F  ?      \n\n\\char e040  A_TEHTA\n\\char e041  A_TEHTA_INF\n\\char e042  I_TEHTA_DOUBLE Y_TEHTA\n\\char e043  I_TEHTA_DOUBLE_INF PALATAL_SIGN Y_TEHTA_INF \n\n\\char e044  I_TEHTA\n\\char e045  I_TEHTA_INF NO_VOWEL_DOT UNUTIXE\n\\char e046  E_TEHTA\n\\char e047  E_TEHTA_INF\n\n\\char e048  E_TEHTA_DOUBLE\n\\char e049  E_TEHTA_DOUBLE_INF GEMINATE_DOUBLE\n\\char e04A  O_TEHTA\n\\char e04B  O_TEHTA_INF\n\n\\char e04C  U_TEHTA\n\\char e04D  U_TEHTA_INF\n\\char e04E  O_TEHTA_DOUBLE\n\\char e04F  U_TEHTA_DOUBLE\n\n\\char e050  NASALIZE_SIGN NASALIZE_SIGN_TILD      \n\\char e051  GEMINATE_SIGN GEMINATE_SIGN_TILD\n\\char e052  WA_TEHTA SEV_TEHTA\n\\char e053  TEHTA_BREVE A_TEHTA_CIRCUM_REVERSED\n\n\\char e054  E_TEHTA_GRAVE\n\\char e055  A_TEHTA_CIRCUM  \n\\char e056  A_TEHTA_REVERSED A_TEHTA_DOUBLE\n\\char e057  THINNAS  THINF_STROKE\n\n\\** THE TWO FOLLOWING ONES ARE HIGHLY DISCUSSABLE, MAYBE WE SHOULD ADD A VIRTUAL CHAR FOR THESE **\\\n\\char e058  SARINCE_ENDING_LONG SHOOK_LEFT_L\n\\char e059  SARINCE COMBINING_SARINCE SHOOK_RIGHT_L \n\\char e05A  ?\n\\char e05B  ?\n\n\\char e065  PUNCT_EXCLAM\n\\char e066  PUNCT_INTERR\n\\char e067  ELVISH_PAREN PUNCT_PAREN_L PUNCT_PAREN_R PUNCT_PAREN_L_ALT PUNCT_PAREN_R_ALT BOOKMARK_SIGN\n\\char e068  PUNCT_TILD\n \n\\char e069  PUNCT_DTILD RING_MARK_L RING_MARK_R\n\n\\char e06A  DQUOT_OPEN\n\\char e06B  DQUOT_CLOSE\n\\char e06C  THORIN_EXCLAMATION\n\n\\char e070 NUM_0 \n\\char e071 NUM_1 \n\\char e072 NUM_2 \n\\char e073 NUM_3 \n\\char e074 NUM_4 \n\\char e075 NUM_5 \n\\char e076 NUM_6 \n\\char e077 NUM_7 \n\\char e078 NUM_8 \n\\char e079 NUM_9 \n\\char e07A NUM_10\n\\char e07B NUM_11\n\\char e07B NUM_12\n\n\\char e07D CIRC_TEHTA_INF\n\n\\** Ligatured results are mapped here **\\\n\\**\n\\char 10037 AHA_TINCO\n\\char 10038 HWESTA_TINCO\n\\char 10039 ANCA_CLOSED SILME_AHA\n**\\\n\n\\char 204A OLD_ENGLISH_AND\n\n\\char 200d ZWJ\n\n\\** Ligatured sequences used as one entity in modes **\\\n\\beg seq AHA_TINCO\n  AHA ZWJ TINCO\n\\end\n\n\\beg seq HWESTA_TINCO\n  HWESTA ZWJ TINCO\n\\end\n\n\\beg seq ANCA_CLOSED SILME_AHA\n  SILME ZWJ AHA\n\\end\n\n"