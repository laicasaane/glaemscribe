Glaemscribe.resource_manager.raw_modes["westsaxon"] = "\\**\n\nGlǽmscribe (also written Glaemscribe) is a software dedicated to\nthe transcription of texts between writing systems, and more \nspecifically dedicated to the transcription of J.R.R. Tolkien\'s \ninvented languages to some of his devised writing systems.\n\nCopyright (C) 2015 Benjamin Babut (Talagan).\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\nany later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n**\\\n\n\\beg changelog\n  \\entry \"0.0.2\" \"Porting to virtual chars\"\n  \\entry \"0.1.1\" \"Added support for inlined raw tengwar\"  \n\\end\n\n\\language \"Old English\"\n\\writing  \"Tengwar\"\n\\mode     \"West Saxon\"\n\\version  \"0.1.1\"\n\\authors  \"J.R.R. Tolkien, impl. Talagan (Benjamin Babut)\"\n\n\\raw_mode \"raw-tengwar\"\n\n\\charset  tengwar_ds_eldamar true\n\\** Other charsets cannot handle all diacritics we are using here ... **\\\n\n\\beg options\n  \\beg option consonant_modification_style CONSONANT_MODIFICATION_STYLE_WAVE\n    \\value CONSONANT_MODIFICATION_STYLE_WAVE 0\n    \\value CONSONANT_MODIFICATION_STYLE_BAR 1\n  \\end\n\\end\n\n\\beg      preprocessor\n  \\** Work exclusively downcase **\\\n  \\downcase\n  \n  \\** Simplify trema vowels **\\\n  \\substitute ä a\n  \\substitute ë e\n  \\substitute ï i\n  \\substitute ö o\n  \\substitute ü u\n  \\substitute ÿ y\n\n  \\substitute \"ae\"  \"æ\"\n  \\substitute \"ea\"  \"æa\"\n  \\substitute \"éa\"  \"ǽa\"\n  \\substitute \"7\"   \"⁊\"\n  \n  \\** Dis-ambiguate long vowels **\\\n  \\rxsubstitute \"(ā|â|aa)\" \"á\"\n  \\rxsubstitute \"(ē|ê|ee)\" \"é\"\n  \\rxsubstitute \"(ī|î|ii)\" \"í\"\n  \\rxsubstitute \"(ō|ô|oo)\" \"ó\"\n  \\rxsubstitute \"(ū|û|uu)\" \"ú\"\n  \\rxsubstitute \"(ȳ|ŷ|yy)\" \"ý\"\n  \n  \\up_down_tehta_split \"æ,ǽ,a,ä,á,e,ë,é,i,ï,í,o,ö,ó,u,ü,ú,y,ÿ,ý,ø,ǿ,œ,œ́\" \"t,p,ċ,c,d,b,ġ,g,þ,f,ç,χ,ħ,ð,v,j,ȝ,n,m,r,ĭ,w,l,ld,s,z,h,x,sċ,hw,çt,χt,ħt\"\n\\end\n\n\\beg      processor\n\n  \\beg rules litteral\n  \n    \\if \"consonant_modification_style == CONSONANT_MODIFICATION_STYLE_WAVE\"\n      {GEMINATE} === GEMINATE_SIGN_TILD\n      {NASAL}    === NASALIZE_SIGN_TILD\n    \\else\n      {GEMINATE} === GEMINATE_SIGN\n      {NASAL}    === NASALIZE_SIGN\n    \\endif\n  \n    {A}   === a\n    {AA}  === á\n    {E}   === e\n    {EE}  === é\n    {I}   === i\n    {II}  === í\n    {O}   === o\n    {OO}  === ó\n    {U}   === u\n    {UU}  === ú\n    {Y}   === y\n    {YY}  === ý\n\n    {AE}    === (æ,ae)\n    {AEAE}  === (ǽ,ǣ)\n\n    {OE}    === (ø,œ)\n    {OEOE}  === (ǿ,œ́)\n\n    \\** Diphtongs are always splitted, so consider we don\'t have any. **\\\n    \\** @ is the phantom vowel **\\\n\n    {S_VOWELS_NP_KERNEL}   === {A} * {AE} * {OE} * {E} * {I}   * {O} * {U} * {Y} * {A}_\n    {S_VOWELS_WP_KERNEL}   === {S_VOWELS_NP_KERNEL} * @ \n    \n    \\** UP TEHTAS **\\    \n    {TEHTAR_UP_NP}  === E_TEHTA    * A_TEHTA    * E_TEHTA_DOUBLE   * Y_TEHTA      * I_TEHTA    * O_TEHTA    * U_TEHTA    * SEV_TEHTA   * VILYA    \n    {TEHTAR_UP}     === {TEHTAR_UP_NP}  * {NULL}\n  \n    \\** FOR LONG VOWELS **\\\n    {L_VOWELS}      === {AA}              * {AEAE}          * {OEOE}                * {EE}            * {II}            * {OO}              * {UU}            * {YY}  \n    {L_TEHTAR}      === ARA E_TEHTA       * ARA A_TEHTA     * ARA E_TEHTA_DOUBLE    * ARA Y_TEHTA     * ARA I_TEHTA     * ARA O_TEHTA       * ARA U_TEHTA     * ARA SEV_TEHTA       \n\n    \\** DOWN TEHTAS **\\\n    {TEHTAR_DN}     === E_TEHTA_INF       * A_TEHTA_INF     * CIRC_TEHTA_INF        * Y_TEHTA_INF     * I_TEHTA_INF     * TELCO O_TEHTA     * TELCO U_TEHTA   * SEV_TEHTA_INF   * VILYA * {NULL}\n    \n    {S_VOWELS_NP}       === [ {S_VOWELS_NP_KERNEL} ]\n    {S_VOWELS_NP_WN}    === [ {S_VOWELS_NP_KERNEL} * {NULL} ]\n    {S_VOWELS}          === [ {S_VOWELS_WP_KERNEL} ]\n    {S_VOWELS_WN}       === [ {S_VOWELS_WP_KERNEL} * {NULL} ]\n\n    \\**  Img bundles for all vowels **\\\n    {_S_VOWELS_UP_}     === [ {TEHTAR_UP} ]\n    {_S_VOWELS_DN_}     === [ {TEHTAR_DN} ]\n \n    {_S_VOWELS_UP_WN_}  === [ {TEHTAR_UP} * {NULL} ]\n    {_S_VOWELS_DN_WN_}  === [ {TEHTAR_DN} * {NULL} ]\n\n    \\**  Rule for long vowels **\\\n    [ {L_VOWELS} ]  --> [ {L_TEHTAR} ] \n    {UU}            --> VALA U_TEHTA   \\** # Special treatment **\\\n\n    \\**  Fallback rule for short vowels **\\\n    @                          --> {NULL}                            \\** # If found alone, put nothing **\\\n    [ {S_VOWELS_NP_KERNEL} ]   --> TELCO [ {TEHTAR_UP_NP} ]  \n    {A}_                       --> VILYA                                 \\** # We don\'t want a short carrier for a_ **\\\n    (w,u)_                     --> VALA                                 \\** # Only resolved after vowels **\\\n\n    \\** ############# **\\\n    \\**  CONSONANTS # **\\\n    \\** ############# **\\\n\n    \\** ## 1st Line (Voiceless occlusives) **\\\n    \\** ## Short upper dash for nasalisation **\\\n    {L1_KER_1}      === t     * p \n    {L1_IMG_1}      === TINCO * PARMA \n    {L1_KER_2}      === ċ     * c       * k\n    {L1_IMG_2}      === CALMA * QUESSE  * QUESSE\n        \n    {L1_KER_1_GEMS} === tt                     * pp   \n    {L1_IMG_1_GEMS} === TINCO GEMINATE_DOUBLE  * PARMA GEMINATE_DOUBLE\n    {L1_KER_2_GEMS} === ċċ                     * cc                     * kk \n    {L1_IMG_2_GEMS} === CALMA GEMINATE_DOUBLE  * QUESSE GEMINATE_DOUBLE * QUESSE GEMINATE_DOUBLE\n\n  \n    {S_VOWELS_WN}[{L1_KER_1}]{S_VOWELS_WN}  --> 2,1,3 --> [{L1_IMG_1}]{_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n    {S_VOWELS_WN}[{L1_KER_1_GEMS}]          --> 2,1   --> [{L1_IMG_1_GEMS}]{_S_VOWELS_UP_WN_}\n    {S_VOWELS_WN}[{L1_KER_2}]{S_VOWELS_WN}  --> 2,1,3 --> [{L1_IMG_2}]{_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n    {S_VOWELS_WN}[{L1_KER_2_GEMS}]          --> 2,1   --> [{L1_IMG_2_GEMS}]{_S_VOWELS_UP_WN_}\n\n    {S_VOWELS_WN}[ nt * mp ]{S_VOWELS_WN}   --> 2,1,3 -->  [ TINCO TILD_SUP_S * PARMA TILD_SUP_S  ]{_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n    {S_VOWELS_WN}[ nċ * nc ]{S_VOWELS_WN}   --> 2,1,3 -->  [ CALMA TILD_SUP_S * QUESSE TILD_SUP_S ]{_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n\n\n    \\** ## 2nd Line (Voiced occlusives) **\\\n    \\** ## Long upper dash for nasalisation **\\\n    {L2_KER}        === d     * b     * ġ     * g\n    {L2_IMG}        === ANDO  * UMBAR * ANGA  * UNGWE\n                    \n    {L2_KER_GEMS}   === dd                    * bb                    * (ċġ,ġġ)               * (cg,gg)\n    {L2_IMG_GEMS}   === ANDO GEMINATE_DOUBLE  * UMBAR GEMINATE_DOUBLE * ANGA GEMINATE_DOUBLE  * UNGWE GEMINATE_DOUBLE\n    \n\n    {S_VOWELS_WN}[{L2_KER}]{S_VOWELS_WN}            --> 2,1,3 --> [{L2_IMG}]{_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n    {S_VOWELS_WN}[{L2_KER_GEMS}]                    --> 2,1   --> [{L2_IMG_GEMS}]{_S_VOWELS_UP_WN_}\n\n    {S_VOWELS_WN}[ nd * mb * nġ * ng ]{S_VOWELS_WN} --> 2,1,3 -->  [ ANDO TILD_SUP_L * UMBAR TILD_SUP_L * ANGA TILD_SUP_L * UNGWE TILD_SUP_L ]{_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n\n\n    \\** ## 3rd Line (Voiceless fricatives) **\\\n    \\** ## Short upper dash for nasalisation **\\\n    {L3_KER_1}      === þ     * f\n    {L3_IMG_1}      === SULE  * FORMEN    \n    {L3_KER_2}      === ç     * (χ,ħ)\n    {L3_IMG_2}      === AHA   * HWESTA\n    \n    {L3_KER_1_GEMS} === þþ                    * ff\n    {L3_IMG_1_GEMS} === SULE GEMINATE_DOUBLE * FORMEN GEMINATE_DOUBLE   \n    {L3_KER_2_GEMS} === çç                    * (χχ,ħħ)\n    {L3_IMG_2_GEMS} === AHA GEMINATE_DOUBLE  * HWESTA GEMINATE_DOUBLE\n\n    {S_VOWELS_WN}[{L3_KER_1}]{S_VOWELS_WN}  --> 2,1,3 --> [{L3_IMG_1}]{_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n    {S_VOWELS_WN}[{L3_KER_1_GEMS}]          --> 2,1   --> [{L3_IMG_1_GEMS}]{_S_VOWELS_UP_WN_}\n    {S_VOWELS_WN}[{L3_KER_2}]{S_VOWELS_WN}  --> 2,1,3 --> [{L3_IMG_2}]{_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n    {S_VOWELS_WN}[{L3_KER_2_GEMS}]          --> 2,1   --> [{L3_IMG_2_GEMS}]{_S_VOWELS_UP_WN_}\n\n  \n    \\** ## 4th Line (Voiced fricatives) **\\\n    \\** ## Long upper dash for nasalisation **\\\n    \n    {L4_KER}        === ð     * v     * j     * ȝ\n    {L4_IMG}        === ANTO  * AMPA  * ANCA  * UNQUE\n    \n    {L4_KER_GEMS}   === ðð                    * vv                    * jj                    * ȝȝ\n    {L4_IMG_GEMS}   === ANTO GEMINATE_DOUBLE  * AMPA GEMINATE_DOUBLE  * ANCA GEMINATE_DOUBLE  * UNQUE GEMINATE_DOUBLE\n    \n\n    {S_VOWELS_WN}[{L4_KER}]{S_VOWELS_WN}  --> 2,1,3 --> [{L4_IMG}]{_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n    {S_VOWELS_WN}[{L4_KER_GEMS}]          --> 2,1   --> [{L4_IMG_GEMS}]{_S_VOWELS_UP_WN_}\n\n\n    \\** ## 5th Line (Nasals) **\\\n    \\** ## Long upper dash for nasalisation (wins on gemination) **\\\n\n    {L5_KER}        === n * m\n    {L5_IMG}        === NUMEN * MALTA\n\n    {S_VOWELS_WN}[{L5_KER}]{S_VOWELS_WN}  --> 2,1,3 --> [{L5_IMG}]{_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n    {S_VOWELS_WN}[ nn * mm ]{S_VOWELS_WN} --> 2,1,3 --> [ NUMEN TILD_SUP_L * MALTA TILD_SUP_L ]{_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n\n\n    \\** ## 6th Line (Approximants == fr : Spirantes) **\\\n    \\** ## Short upper dash for nasalisation **\\\n\n    {L6_KER}        === r * ĭ\n    {L6_IMG}        === ORE * ANNA\n    {L6_KER_GEMS}   === rr * ĭĭ\n    {L6_IMG_GEMS}   === ORE GEMINATE_DOUBLE * ANNA GEMINATE_DOUBLE\n\n    {S_VOWELS_WN}[{L6_KER}]{S_VOWELS_WN}  --> 2,1,3 --> [{L6_IMG}]{_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n    {S_VOWELS_WN}[{L6_KER_GEMS}]          --> 2,1   --> [{L6_IMG_GEMS}]{_S_VOWELS_UP_WN_}\n\n\n    \\** ## Liquids **\\\n    \\** ## **\\\n\n    {S_VOWELS_WN}w{S_VOWELS_WN}             --> ROMEN {_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n    {S_VOWELS_WN}ww                         --> ROMEN GEMINATE_DOUBLE {_S_VOWELS_UP_WN_}\n    {S_VOWELS_WN}[l * ll]         --> 2,1   --> [LAMBE * LAMBE GEMINATE_DOUBLE]{_S_VOWELS_UP_WN_}\n    {S_VOWELS_WN}ld                         --> ALDA {_S_VOWELS_UP_WN_}\n\n\n    \\** ## Alveolar (sifflantes) **\\\n    \\** ## **\\\n    {L8_KER}      ===  s * z \n    {L8_IMG}      ===  SILME_NUQUERNA * ESSE_NUQUERNA \n    {L8_KER_GEMS} ===  ss * zz \n    {L8_IMG_GEMS} ===  SILME_NUQUERNA GEMINATE_DOUBLE * ESSE_NUQUERNA GEMINATE_DOUBLE\n    \n    {S_VOWELS_WN}[{L8_KER}]{S_VOWELS_WN}  --> 2,1,3 --> [{L8_IMG}]{_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n    {S_VOWELS_WN}[{L8_KER_GEMS}]          --> 2,1   --> [{L8_IMG_GEMS}]{_S_VOWELS_UP_WN_}\n\n\n    \\** ## FINAL S (Challenging!) **\\\n    {S_VOWELS_WN}s_                               --> SHOOK_BEAUTIFUL {_S_VOWELS_UP_WN_} \\** # Final rule for s **\\\n    _{S_VOWELS_WN}s_                              --> SILME_NUQUERNA {_S_VOWELS_UP_WN_} \\** # Rule _es_ **\\\n    [{L_VOWELS} * _ ]{S_VOWELS_WN}s_              --> [{L_TEHTAR} * {NULL} ] SILME_NUQUERNA {_S_VOWELS_UP_WN_} \\** # Rule for éis_, és_ **\\\n    {NULL}[ {S_VOWELS_NP_KERNEL} ]{S_VOWELS}s_    --> TELCO [ {TEHTAR_UP_NP} ] SILME_NUQUERNA {_S_VOWELS_UP_} \\** # Rule for ies_   **\\\n\n    s --> SILME \\** # Overload lonely s **\\\n    z --> ESSE  \\** # Overload lonely z **\\\n\n    \\** ## Ligatures **\\\n    \\** ## **\\\n    {LINE_VARIOUS_KER}      ===  sċ * hw * çt * (χt,ħt)\n    {LINE_VARIOUS_IMG}      ===  ANCA_CLOSED * HARP_SHAPED  * AHA_TINCO  * HWESTA_TINCO \n \n    {S_VOWELS_WN}[{LINE_VARIOUS_KER}]{S_VOWELS_WN} --> 2,1,3 --> [{LINE_VARIOUS_IMG}]{_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n  \n    \\** ## Various **\\\n    \\** ## **\\\n    {S_VOWELS_WN}h{S_VOWELS_WN}   --> HYARMEN {_S_VOWELS_UP_WN_}{_S_VOWELS_DN_WN_}\n    {S_VOWELS_WN}hh               --> HYARMEN GEMINATE_DOUBLE {_S_VOWELS_UP_WN_}\n\n\n    \\** ## X **\\\n    \\** ## For x, due to the cedilla, we cannot put tehtas under the tengwa. **\\\n    {S_VOWELS_WN}x  --> QUESSE SHOOK_LEFT_L {_S_VOWELS_UP_WN_}\n    {S_VOWELS_WN}xx --> QUESSE SHOOK_LEFT_L GEMINATE_DOUBLE {_S_VOWELS_UP_WN_}\n    {S_VOWELS_WN}nx --> QUESSE SHOOK_LEFT_L TILD_SUP_S {_S_VOWELS_UP_WN_}\n  \\end\n  \n  \\beg rules punctuation \n    ⁊ --> OLD_ENGLISH_AND\n  \n    . --> PUNCT_DDOT\n    .. --> PUNCT_DOT PUNCT_DDOT PUNCT_DOT\n    …  --> PUNCT_TILD\n    ... --> PUNCT_TILD\n    .... --> PUNCT_TILD\n    ..... --> PUNCT_TILD\n    ...... --> PUNCT_TILD\n    ....... --> PUNCT_TILD\n\n    , --> PUNCT_DOT\n    : --> PUNCT_DOT\n    ; --> PUNCT_DOT\n    ! --> PUNCT_EXCLAM\n    ? --> PUNCT_INTERR\n    · --> PUNCT_DOT\n\n    \\** Apostrophe **\\\n\n    \' --> {NULL}\n    ’ --> {NULL}\n\n    \\** Quotes **\\\n\n    “ --> DQUOT_OPEN\n    ” --> DQUOT_CLOSE\n    « --> DQUOT_OPEN \n    » --> DQUOT_CLOSE \n\n    - --> {NULL}\n    – --> PUNCT_TILD  \n    — --> PUNCT_TILD\n  \n    [ --> PUNCT_PAREN_L\n    ] --> PUNCT_PAREN_R\n    ( --> PUNCT_PAREN_L_ALT \\** TODO : Remove alt ? **\\\n    ) --> PUNCT_PAREN_R_ALT \\** TODO : Remove alt ? **\\\n    { --> PUNCT_PAREN_L\n    } --> PUNCT_PAREN_R\n    < --> PUNCT_PAREN_L\n    > --> PUNCT_PAREN_R  \n\n    \\** Not universal between fonts ... **\\\n    $ --> BOOKMARK_SIGN\n    ≤ --> RING_MARK_L \\** Ring inscription left beautiful stuff **\\\n    ≥ --> RING_MARK_R \\** Ring inscription right beautiful stuff **\\\n\n  \\end\n  \n\\end\n\n\\beg postprocessor\n  \\resolve_virtuals\n\\end"