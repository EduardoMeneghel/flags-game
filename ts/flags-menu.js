var flags = ["ad.png", "ae.png", "af.png", "ag.png", "ai.png", "al.png", "am.png", "ao.png", "aq.png", "ar.png", "as.png", "at.png", "au.png", "aw.png", "ax.png", "az.png", "ba.png", "bb.png", "bd.png", "be.png", "bf.png", "bg.png", "bh.png", "bi.png", "bj.png", "bl.png", "bm.png", "bn.png", "bo.png", "bq.png", "br.png", "bs.png", "bt.png", "bv.png", "bw.png", "by.png", "bz.png", "ca.png", "cc.png", "cd.png", "cf.png", "cg.png", "ch.png", "ci.png", "ck.png", "cl.png", "cm.png", "cn.png", "co.png", "cr.png", "cu.png", "cv.png", "cw.png", "cx.png", "cy.png", "cz.png", "de.png", "dj.png", "dk.png", "dm.png", "do.png", "dz.png", "ec.png", "ee.png", "eg.png", "eh.png", "er.png", "es.png", "et.png", "eu.png", "fi.png", "fj.png", "fk.png", "fm.png", "fo.png", "fr.png", "ga.png", "gb-eng.png", "gb-nir.png", "gb-sct.png", "gb-wls.png", "gb.png", "gd.png", "ge.png", "gf.png", "gg.png", "gh.png", "gi.png", "gl.png", "gm.png", "gn.png", "gp.png", "gq.png", "gr.png", "gs.png", "gt.png", "gu.png", "gw.png", "gy.png", "hk.png", "hm.png", "hn.png", "hr.png", "ht.png", "hu.png", "id.png", "ie.png", "il.png", "im.png", "in.png", "io.png", "iq.png", "ir.png", "is.png", "it.png", "je.png", "jm.png", "jo.png", "jp.png", "ke.png", "kg.png", "kh.png", "ki.png", "km.png", "kn.png", "kp.png", "kr.png", "kw.png", "ky.png", "kz.png", "la.png", "lb.png", "lc.png", "li.png", "lk.png", "lr.png", "ls.png", "lt.png", "lu.png", "lv.png", "ly.png", "ma.png", "mc.png", "md.png", "me.png", "mf.png", "mg.png", "mh.png", "mk.png", "ml.png", "mm.png", "mn.png", "mo.png", "mp.png", "mq.png", "mr.png", "ms.png", "mt.png", "mu.png", "mv.png", "mw.png", "mx.png", "my.png", "mz.png", "na.png", "nc.png", "ne.png", "nf.png", "ng.png", "ni.png", "nl.png", "no.png", "np.png", "nr.png", "nu.png", "nz.png", "om.png", "pa.png", "pe.png", "pf.png", "pg.png", "ph.png", "pk.png", "pl.png", "pm.png", "pn.png", "pr.png", "ps.png", "pt.png", "pw.png", "py.png", "qa.png", "re.png", "ro.png", "rs.png", "ru.png", "rw.png", "sa.png", "sb.png", "sc.png", "sd.png", "se.png", "sg.png", "sh.png", "si.png", "sj.png", "sk.png", "sl.png", "sm.png", "sn.png", "so.png", "sr.png", "ss.png", "st.png", "sv.png", "sx.png", "sy.png", "sz.png", "tc.png", "td.png", "tf.png", "tg.png", "th.png", "tj.png", "tk.png", "tl.png", "tm.png", "tn.png", "to.png", "tr.png", "tt.png", "tv.png", "tw.png", "tz.png", "ua.png", "ug.png", "um.png", "us.png", "uy.png", "uz.png", "va.png", "vc.png", "ve.png", "vg.png", "vi.png", "vn.png", "vu.png", "wf.png", "ws.png", "xk.png", "ye.png", "yt.png", "za.png", "zm.png", "zw.png"];
var country = ['Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa', 'AndorrA', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo, The Democratic Republic of the', 'Cook Islands', 'Costa Rica', 'Cote D\'Ivoire', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard Island and Mcdonald Islands', 'Holy See (Vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran, Islamic Republic Of', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, Democratic People\'S Republic of', 'Korea, Republic of', 'Kuwait', 'Kyrgyzstan', 'Lao People\'S Democratic Republic', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao', 'Macedonia, The Former Yugoslav Republic of', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestinian Territory, Occupied', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'RWANDA', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan, Province of China', 'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Timor-Leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Viet Nam', 'Virgin Islands, British', 'Virgin Islands, U.S.', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];
var elementFlag = document.getElementById("flag");
var index = 0;
setInterval(function () {
    elementFlag.src = './flags/' + flags[index];
    index = (index + 1) % flags.length;
}, 2500);
