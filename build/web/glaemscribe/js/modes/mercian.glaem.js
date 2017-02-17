Glaemscribe.resource_manager.raw_modes["mercian"] = "\\**\n\nGlǽmscribe (also written Glaemscribe) is a software dedicated to\nthe transcription of texts between writing systems, and more \nspecifically dedicated to the transcription of J.R.R. Tolkien\'s \ninvented languages to some of his devised writing systems.\n\nCopyright (C) 2015 Benjamin Babut (Talagan).\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\nany later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n**\\\n\n\\beg changelog\n  \\entry 0.0.2 \"Porting to virtual chars\"\n\\end\n\n\\language \"Old English\"\n\\writing  \"Tengwar\"\n\\mode     \"Mercian\"\n\\version  \"0.0.2\"\n\\authors  \"Talagan (Benjamin Babut)\"\n\n\\charset  tengwar_ds_eldamar true\n\\** Other charsets cannot handle all diacritics we are using here ... **\\\n\n\\beg      preprocessor\n  \\** Work exclusively downcase **\\\n  \\downcase\n  \n  \\** Simplify trema vowels **\\\n  \\substitute ä a\n  \\substitute ë e\n  \\substitute ï i\n  \\substitute ö o\n  \\substitute ü u\n  \\substitute ÿ y\n\n  \\substitute \"ae\"  \"æ\"\n  \\substitute \"ea\"  \"æa\"\n  \\substitute \"éa\"  \"ǽa\"\n  \\substitute \"7\"   \"⁊\"\n  \n  \\** Dis-ambiguate long vowels **\\\n  \\rxsubstitute \"(ā|â|aa)\" \"á\"\n  \\rxsubstitute \"(ē|ê|ee)\" \"é\"\n  \\rxsubstitute \"(ī|î|ii)\" \"í\"\n  \\rxsubstitute \"(ō|ô|oo)\" \"ó\"\n  \\rxsubstitute \"(ū|û|uu)\" \"ú\"\n  \\rxsubstitute \"(ȳ|ŷ|yy)\" \"ý\"\n\\end\n  \n\\beg      processor\n\n  \\beg    rules litteral\n    {A}   === a\n    {AA}  === á\n    {E}   === e\n    {EE}  === é\n    {I}   === i\n    {II}  === í\n    {O}   === o\n    {OO}  === ó\n    {U}   === u\n    {UU}  === ú\n    {Y}   === y\n    {YY}  === ý\n\n    {AE}    === (æ,ae)\n    {AEAE}  === (ǽ,ǣ)\n\n    {OE}    === (ø,œ)\n    {OEOE}  === (ǿ,œ́)\n\n    \\** Diphtongs are always splitted, so consider we don\'t have any. **\\\n    \\** @ is the phantom vowel added by the preprocessor **\\\n\n    {S_VOWELS_NP_KERNEL}   === {A} * {AE} * {OE} * {E} * {I}   * {O} * {U} * {Y}\n    {S_VOWELS_WP_KERNEL}      === {S_VOWELS_NP_KERNEL} * @                           \n\n    \\** UP TEHTAS **\\    \n    {TEHTAR_UP_NP}  === A_TEHTA    * Y_TEHTA     * E_TEHTA_DOUBLE   * E_TEHTA   *   I_TEHTA    * O_TEHTA    * U_TEHTA   * SEV_TEHTA \n \n    {TEHTAR_UP}     === {TEHTAR_UP_NP}  * {NULL}\n\n    \\** FOR LONG VOWELS **\\\n    {LVOWELS}       === {AA}           * {AEAE}       * {OEOE}             * {EE}         * {II}         * {OO}          * {UU}         * {YY}  \n    {LTEHTAR}       === ARA A_TEHTA    * ARA Y_TEHTA  * ARA E_TEHTA_DOUBLE * ARA E_TEHTA  * ARA I_TEHTA  * ARA O_TEHTA   * ARA U_TEHTA  * ARA SEV_TEHTA    \n\n    {LVOWEL_MARKER}  === SEV_TEHTA_INF\n  \n    \\** DOWN TEHTAS **\\\n    {DTEHTAR}        === A_TEHTA_INF   * Y_TEHTA_INF  * CIRC_TEHTA_INF     * E_TEHTA_INF  * I_TEHTA_INF  * O_TEHTA_INF  * U_TEHTA_INF   * SEV_TEHTA_INF   * {NULL}\n  \n\n    {S_VOWELS_NP}       === [ {S_VOWELS_NP_KERNEL} ]\n    {S_VOWELS_NP_WN}    === [ {S_VOWELS_NP_KERNEL} * {NULL} ]\n    {S_VOWELS}          === [ {S_VOWELS_WP_KERNEL} ]\n    {S_VOWELS_WN}       === [ {S_VOWELS_WP_KERNEL} * {NULL} ]\n\n    \\** IMG Sheaves for all vowels **\\\n    {_S_VOWELS_UP_}        === [ {TEHTAR_UP} ]\n    {_S_VOWELS_DN_}        === [ {DTEHTAR} ]\n\n    {_S_VOWELS_UP_WN_}     === [ {TEHTAR_UP} * {NULL} ]\n    {_S_VOWELS_DN_WN_}     === [ {DTEHTAR} * {NULL} ]\n\n    \\** Fallback rule for all vowels **\\\n    [ {LVOWELS} ] --> [ {LTEHTAR} ]            \\** If found alone, long vowel will have a long carrier **\\\n\n    \\** Fallback rule for short vowels **\\\n    @                   --> {NULL}                     \\**  If found alone, put nothing **\\\n    [ {S_VOWELS_NP_KERNEL} ]   --> TELCO [ {TEHTAR_UP_NP} ]   \\**  If found alone, a vowel will have a short carrier **\\\n    _{A}                --> VILYA                      \\**  We don\'t want a short carrier for _a **\\\n    (w,u)_              --> VALA                       \\**  Only resolved after vowels **\\\n\n    \\** Next rule not valid in mercian mode **\\\n    \\** {UU} -> yU - Nope in mercian **\\\n\n\n    \\** ========== **\\\n    \\** CONSONANTS **\\\n    \\** ========== **\\\n\n    \\** ========== **\\\n    \\** 1st Line (Voiceless occlusives) **\\\n    \\** Short upper dash for nasalisation **\\\n\n    {L1_KER_1}      === t     * p \n    {L1_IMG_1}      === TINCO * PARMA\n\n    {L1_KER_2}      === ċ     * c       * k\n    {L1_IMG_2}      === CALMA * QUESSE  * QUESSE\n    \n    {L1_KER_1_GEMS} === tt                      * pp   \n    {L1_IMG_1_GEMS} === TINCO GEMINATE_DOUBLE  * PARMA GEMINATE_DOUBLE\n\n    {L1_KER_2_GEMS} === ċċ                      * cc                      * kk \n    {L1_IMG_2_GEMS} === CALMA GEMINATE_DOUBLE  * QUESSE GEMINATE_DOUBLE * QUESSE GEMINATE_DOUBLE\n  \n    \\** C, CV, CVV. Rules are declared to avoid conflicts between [C, NULLV, V] and [C, V, NULLV] **\\\n    \\** We also have rules for long vowels **\\\n    [{L1_KER_1}]                                  --> [{L1_IMG_1}]\n    [{L1_KER_2}]                                  --> [{L1_IMG_2}]\n    [{L1_KER_1}]{S_VOWELS}{S_VOWELS_WN}           --> [{L1_IMG_1}]{_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    [{L1_KER_2}]{S_VOWELS}{S_VOWELS_WN}           --> [{L1_IMG_2}]{_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    [{L1_KER_1}][{LVOWELS}]                       --> [{L1_IMG_1}][{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n    [{L1_KER_2}][{LVOWELS}]                       --> [{L1_IMG_2}][{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n\n    \\** Geminateds (double sign below) **\\\n    \\** C², C²V **\\\n    \\** NOT C²V² (cannot put second tehta below due to gemination sign) **\\\n    \\** NOT C²L (long vowel not possible with gemination sign) **\\\n    [{L1_KER_1_GEMS}]{S_VOWELS_WN}          --> [{L1_IMG_1_GEMS}]{_S_VOWELS_UP_WN_}\n    [{L1_KER_2_GEMS}]{S_VOWELS_WN}          --> [{L1_IMG_2_GEMS}]{_S_VOWELS_UP_WN_}\n\n    \\** Nasals (tild above) **\\\n    \\** nC, nCV, nCVV **\\\n    \\** We also have rules for long vowels **\\\n    [ nt * mp ]                                       -->  [ TINCO NASALIZE_SIGN_TILD * PARMA NASALIZE_SIGN_TILD ]\n    [ nċ * nc ]                                       -->  [ CALMA NASALIZE_SIGN_TILD * QUESSE NASALIZE_SIGN_TILD ]\n    [ nt * mp ]{S_VOWELS}{S_VOWELS_WN}                -->  [ TINCO NASALIZE_SIGN_TILD * PARMA NASALIZE_SIGN_TILD ]{_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    [ nċ * nc ]{S_VOWELS}{S_VOWELS_WN}                -->  [ CALMA NASALIZE_SIGN_TILD * QUESSE NASALIZE_SIGN_TILD ]{_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    [ nt * mp ][{LVOWELS}]                            -->  [ TINCO NASALIZE_SIGN_TILD * PARMA NASALIZE_SIGN_TILD ][{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n    [ nċ * nc ][{LVOWELS}]                            -->  [ CALMA NASALIZE_SIGN_TILD * QUESSE NASALIZE_SIGN_TILD ][{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n\n    \\** ========== **\\\n    \\** 2nd Line (Voiced occlusives) **\\\n    \\** Long upper dash for nasalisation **\\\n\n    {L2_KER}        === d     * b     * ġ     * g\n    {L2_IMG}        === ANDO  * UMBAR * ANGA  * UNGWE\n    \n    {L2_KER_GEMS}   === dd                    * bb                    * (ċġ,ġġ)               * (cg,gg)\n    {L2_IMG_GEMS}   === ANDO GEMINATE_DOUBLE  * UMBAR GEMINATE_DOUBLE * ANGA GEMINATE_DOUBLE  * UNGWE GEMINATE_DOUBLE\n\n    \\** C, CV, CVV **\\\n    [{L2_KER}]                                        --> [{L2_IMG}]\n    [{L2_KER}]{S_VOWELS}{S_VOWELS_WN}                 --> [{L2_IMG}]{_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    [{L2_KER}][{LVOWELS}]                             --> [{L2_IMG}][{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n\n    \\** Geminated sign below, cannot treat diphthongs or long vowels **\\\n    [{L2_KER_GEMS}]{S_VOWELS_WN}                      --> [{L2_IMG_GEMS}]{_S_VOWELS_UP_WN_}\n\n    \\** Nasals, with diphthongs! **\\\n    [ nd * mb * nġ * ng ]                             -->  [ ANDO NASALIZE_SIGN_TILD * UMBAR NASALIZE_SIGN_TILD * ANGA NASALIZE_SIGN_TILD * UNGWE NASALIZE_SIGN_TILD ]\n    [ nd * mb * nġ * ng ]{S_VOWELS}{S_VOWELS_WN}      -->  [ ANDO NASALIZE_SIGN_TILD * UMBAR NASALIZE_SIGN_TILD * ANGA NASALIZE_SIGN_TILD * UNGWE NASALIZE_SIGN_TILD ]{_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    [ nd * mb * nġ * ng ][{LVOWELS}]                  -->  [ ANDO NASALIZE_SIGN_TILD * UMBAR NASALIZE_SIGN_TILD * ANGA NASALIZE_SIGN_TILD * UNGWE NASALIZE_SIGN_TILD ][{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n\n    \\** ========== **\\\n    \\** 3rd Line (Voiceless fricatives) **\\\n    \\** Short upper dash for nasalisation **\\\n    {L3_KER_1}      === þ     * f\n    {L3_IMG_1}      === SULE  * FORMEN\n    \n    {L3_KER_2}      === ç     * (χ,ħ)\n    {L3_IMG_2}      === AHA   * HWESTA\n    \n    {L3_KER_1_GEMS} === þþ                    * ff\n    {L3_IMG_1_GEMS} === SULE GEMINATE_DOUBLE * FORMEN GEMINATE_DOUBLE\n    \n    {L3_KER_2_GEMS} === çç                    * (χχ,ħħ)\n    {L3_IMG_2_GEMS} === AHA GEMINATE_DOUBLE  * HWESTA GEMINATE_DOUBLE\n\n    [{L3_KER_1}]                              --> [{L3_IMG_1}]\n    [{L3_KER_2}]                              --> [{L3_IMG_2}]\n    [{L3_KER_1}]{S_VOWELS}{S_VOWELS_WN}       --> [{L3_IMG_1}]{_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    [{L3_KER_2}]{S_VOWELS}{S_VOWELS_WN}       --> [{L3_IMG_2}]{_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    [{L3_KER_1}][{LVOWELS}]                   --> [{L3_IMG_1}][{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n    [{L3_KER_2}][{LVOWELS}]                   --> [{L3_IMG_2}][{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n\n    \\** Geminated sign below, cannot treat diphthongs or long vowels **\\\n    [{L3_KER_1_GEMS}]{S_VOWELS_WN}            --> [{L3_IMG_1_GEMS}]{_S_VOWELS_UP_WN_}\n    [{L3_KER_2_GEMS}]{S_VOWELS_WN}            --> [{L3_IMG_2_GEMS}]{_S_VOWELS_UP_WN_}\n  \n  \n    \\** ========== **\\\n    \\** 4th Line (Voiced fricatives) **\\\n    \\** Long upper dash for nasalisation **\\\n\n    {L4_KER}        === ð     * v     * j     * ȝ\n    {L4_IMG}        === ANTO  * AMPA  * ANCA  * UNQUE\n    \n    {L4_KER_GEMS}   === ðð                    * vv                    * jj                    * ȝȝ\n    {L4_IMG_GEMS}   === ANTO GEMINATE_DOUBLE  * AMPA GEMINATE_DOUBLE  * ANCA GEMINATE_DOUBLE  * UNQUE GEMINATE_DOUBLE\n\n    [{L4_KER}]                                --> [{L4_IMG}]\n    [{L4_KER}]{S_VOWELS}{S_VOWELS_WN}         --> [{L4_IMG}]{_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    [{L4_KER}][{LVOWELS}]                     --> [{L4_IMG}][{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n\n    \\** Geminated sign below, cannot treat diphthongs or long vowels **\\\n    [{L4_KER_GEMS}]{S_VOWELS_WN}              --> [{L4_IMG_GEMS}]{_S_VOWELS_UP_WN_}\n\n\n    \\** ========== **\\\n    \\** 5th Line (Nasals) **\\\n    \\** Long upper dash for nasalisation (wins on gemination) **\\\n\n    {L5_KER}        === n * m\n    {L5_IMG}        === NUMEN * MALTA\n\n    [{L5_KER}]                                --> [{L5_IMG}]\n    [{L5_KER}]{S_VOWELS}{S_VOWELS_WN}         --> [{L5_IMG}]{_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    [{L5_KER}][{LVOWELS}]                     --> [{L5_IMG}][{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n\n    \\** Gemination === nasalisation **\\\n    \\** So prefer using tild to put tehtas up and down for diphthongs and long vowels **\\\n\n    [ nn * mm ]                               --> [ NUMEN NASALIZE_SIGN_TILD * MALTA NASALIZE_SIGN_TILD ]\n    [ nn * mm ]{S_VOWELS}{S_VOWELS_WN}        --> [ NUMEN NASALIZE_SIGN_TILD * MALTA NASALIZE_SIGN_TILD ]{_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    [ nn * mm ][{LVOWELS}]                    --> [ NUMEN NASALIZE_SIGN_TILD * MALTA NASALIZE_SIGN_TILD ][{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n\n    \\** ========== **\\\n    \\** 6th Line (Approximants == fr : Spirantes) **\\\n    \\** Short upper dash for nasalisation **\\\n\n    {L6_KER}        === r * ĭ\n    {L6_IMG}        === ORE * ANNA\n    {L6_KER_GEMS}   === rr * ĭĭ\n    {L6_IMG_GEMS}   === ORE GEMINATE_DOUBLE * ANNA GEMINATE_DOUBLE\n\n    [{L6_KER}]                                --> [{L6_IMG}]\n    [{L6_KER}]{S_VOWELS}{S_VOWELS_WN}         --> [{L6_IMG}]{_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    [{L6_KER}][{LVOWELS}]                     --> [{L6_IMG}][{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n\n    \\** Geminated sign below, cannot treat diphthongs or long vowels **\\\n    [{L6_KER_GEMS}]{S_VOWELS_WN}              --> [{L6_IMG_GEMS}]{_S_VOWELS_UP_WN_}\n\n    \\** ========== **\\\n    \\** Liquids **\\\n\n    w                                         --> ROMEN\n    w{S_VOWELS}{S_VOWELS_WN}                  --> ROMEN {_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    w[{LVOWELS}]                              --> ROMEN [{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n\n    \\** Geminated sign below, cannot treat diphthongs or long vowels **\\\n    ww{S_VOWELS_WN}                           --> ROMEN GEMINATE_DOUBLE {_S_VOWELS_UP_WN_}\n\n    \\** L and LL and ld are too big to receive tehtas under, so no diphthongs, no long vowels **\\\n    [l * ll * ld] {S_VOWELS_WN}               --> [LAMBE * LAMBE GEMINATE_DOUBLE * ALDA] {_S_VOWELS_UP_WN_}\n\n    \\** ========== **\\\n    \\** Alveolar (sifflantes) **\\\n    \n    {L8_KER}      ===  s * z \n    {L8_IMG}      ===  SILME_NUQUERNA * ESSE_NUQUERNA \n    {L8_KER_GEMS} ===  ss * zz \n    {L8_IMG_GEMS} ===  SILME_NUQUERNA GEMINATE_DOUBLE * ESSE_NUQUERNA GEMINATE_DOUBLE\n\n    [{L8_KER}]                                --> [{L8_IMG}]\n    [{L8_KER}]{S_VOWELS}{S_VOWELS_WN}         --> [{L8_IMG}]{_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    [{L8_KER}][{LVOWELS}]                     --> [{L8_IMG}][{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n\n    \\** Geminated sign under, cannot treat diphthongs or long vowels **\\\n    [{L8_KER_GEMS}]{S_VOWELS_WN}              --> [{L8_IMG_GEMS}]{_S_VOWELS_UP_WN_}\n\n    \\**  Final s (Challenging!) **\\\n    s_                --> SHOOK_BEAUTIFUL                             \\** Final rule for s **\\\n    {S_VOWELS}s_      --> TELCO {_S_VOWELS_UP_} SILME_NUQUERNA     \\** Rule es_ **\\\n    [{LVOWELS}]s_     --> [{LTEHTAR}] SILME_NUQUERNA                \\** Rule és_ **\\\n\n    s --> SILME    \\** Overload lonely s **\\\n    z --> ESSE    \\** Overload lonely z **\\\n\n    \\** ========== **\\\n    \\** Ligatures **\\\n    \n    {LINE_VARIOUS_1_KER}      ===  sċ \n    {LINE_VARIOUS_1_IMG}      ===  ANCA_CLOSED  \n    {LINE_VARIOUS_2_KER}      ===  hw * çt * (χt,ħt)\n    {LINE_VARIOUS_2_IMG}      ===  HARP_SHAPED  * AHA_TINCO  * HWESTA_TINCO  \n\n    [{LINE_VARIOUS_1_KER}]                                --> [{LINE_VARIOUS_1_IMG}]\n    [{LINE_VARIOUS_2_KER}]                                --> [{LINE_VARIOUS_2_IMG}]\n    [{LINE_VARIOUS_1_KER}]{S_VOWELS}{S_VOWELS_WN}         --> [{LINE_VARIOUS_1_IMG}]{_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    [{LINE_VARIOUS_2_KER}]{S_VOWELS}{S_VOWELS_WN}         --> [{LINE_VARIOUS_2_IMG}]{_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    [{LINE_VARIOUS_1_KER}][{LVOWELS}]                     --> [{LINE_VARIOUS_1_IMG}][{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n    [{LINE_VARIOUS_2_KER}][{LVOWELS}]                     --> [{LINE_VARIOUS_2_IMG}][{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n\n    \\** No nasals, no geminated **\\\n\n    \\** ========== **\\\n    \\** Various **\\\n   \n    h                                            --> HYARMEN\n    h{S_VOWELS}{S_VOWELS_WN}                     --> HYARMEN {_S_VOWELS_UP_}{_S_VOWELS_DN_WN_}\n    h[{LVOWELS}]                                 --> HYARMEN [{TEHTAR_UP_NP}]{LVOWEL_MARKER}\n\n    \\** Geminated sign below, cannot treat diphthongs or long vowels **\\\n    hh{S_VOWELS_WN}                              --> HYARMEN GEMINATE_DOUBLE {_S_VOWELS_UP_WN_}\n\n    \\** ========== **\\\n    \\** X **\\\n    \\** For x, due to the cedilla, we cannot put tehtas under the tengwa (so no need to treat diphthongs or long vowels) **\\\n\n    x{S_VOWELS_WN}                               --> QUESSE ALVEOLAR_SIGN {_S_VOWELS_UP_WN_}\n    xx{S_VOWELS_WN}                              --> QUESSE ALVEOLAR_SIGN GEMINATE_DOUBLE {_S_VOWELS_UP_WN_}\n    nx{S_VOWELS_WN}                              --> QUESSE ALVEOLAR_SIGN NASALIZE_SIGN_TILD {_S_VOWELS_UP_WN_}     \n  \\end\n  \n  \\beg    rules punctuation \n    ⁊ --> OLD_ENGLISH_AND\n\n    . --> PUNCT_DDOT\n    .. --> PUNCT_DOT PUNCT_DDOT PUNCT_DOT\n    …  --> PUNCT_TILD\n    ... --> PUNCT_TILD\n    .... --> PUNCT_TILD\n    ..... --> PUNCT_TILD\n    ...... --> PUNCT_TILD\n    ....... --> PUNCT_TILD\n\n    , --> PUNCT_DOT\n    : --> PUNCT_DOT\n    ; --> PUNCT_DOT\n    ! --> PUNCT_EXCLAM\n    ? --> PUNCT_INTERR\n    · --> PUNCT_DOT\n\n    \\** Apostrophe **\\\n\n    \' --> {NULL}\n    ’ --> {NULL}\n\n    \\** Quotes **\\\n\n    “ --> DQUOT_OPEN\n    ” --> DQUOT_CLOSE\n    « --> DQUOT_OPEN \n    » --> DQUOT_CLOSE \n\n    - --> PUNCT_DOT    \n    – --> PUNCT_TILD  \n    — --> PUNCT_TILD\n\n    [ --> PUNCT_PAREN_L\n    ] --> PUNCT_PAREN_R\n    ( --> PUNCT_PAREN_L_ALT \\** TODO : Remove alt ? **\\\n    ) --> PUNCT_PAREN_R_ALT \\** TODO : Remove alt ? **\\\n    { --> PUNCT_PAREN_L\n    } --> PUNCT_PAREN_R\n    < --> PUNCT_PAREN_L\n    > --> PUNCT_PAREN_R  \n\n    \\** Not universal between fonts ... **\\\n    $ --> BOOKMARK_SIGN\n    ≤ --> RING_MARK_L \\** Ring inscription left beautiful stuff **\\\n    ≥ --> RING_MARK_R \\** Ring inscription right beautiful stuff **\\\n  \\end  \n\\end\n\n\\beg postprocessor\n  \\resolve_virtuals\n\\end"