// CSGOClicker - Case CSGOClicker
//money, inventory, jackpot
var itemCounter = 0;
var fps = 15;

var money = 7.50;
var currentCase = "case1";
var acceptMoneyPerClick = 0.1;




/*=========================Inventory============================*/
//In inventory: weap skins
//Hidden: money


//sorting: by money, rarity
var popup = true;

var inventory = {};
var jackpotInventory = {};

var inventoryMax = 50;
var inventoryCurrent = 0;

var keyPrice = 2.50;

var caseDiscount = 0;
var keyDiscount = 0;

var operationCases = {
  case1: {name: "Weapon Case 1", price: 6.90, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5_T3eAQ3i6DMIW0X7ojiwoHax6egMOKGxj4G68Nz3-jCp4itjFWx-ktqfSmtcwqVx6sT"},
  case2: {name: "eSports 2013 Case", price: 9.57, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsVk5kKhZDpYX3e1YznfCcdzkR74vnw9TZwa-sYOOCzzoF6ZJ0jL6Qp9uj3Qbj_Uc6Z2z1I9WLMlhp9VPHu3g"},
  case3: {name: "Bravo Case", price: 10.64, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsXE1xNwVDv7WrFA5pnabNJGwSuN3gxtnawKOlMO6HzzhQucAm0uvFo4n2iw3h_UM-ZmilJNeLMlhpjfjxEoE"},
  case4: {name: "CS:GO Weapon Case 2", price: 1.57, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5PT8elUwgKKZJmtEvo_kxITZk6StNe-Fz2pTu8Aj3eqVpIqgjVfjrRI9fSmtc1Nw-Kh3"},
  case5: {name: "eSports 2013 Winter Case", price: 0.30, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsVk5kKhZDpYX3e1Yz7KKcPzwav9jnzdfdlfWmY7_TzmkF6ZMlj77A9o3x0Qe1qhBkZGjxI9LBJgMgIQaH1G7WeaA"},
  case6: {name: "Winter Offensive Weapon Case", price: 1.68, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYu0aKfJz8a793gxNLfzvOkMunUwWgH7JIjj-qW8d7x2VXt_UBuMT3zIpjVLFEGDSGUSQ"}
}

var knives = {
  regular: {
    knife1: {name: "★ Bayonet", price: 141.56, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaKQZ53P3NZXMXvYmykdLSxqWkZ7-HkjMIvpIj3u2Y84733gzh_RU_MG_zIYLEdQ45fxiOrdJh0ExF"},
    knife2: {name: "★ Bayonet | Blue Steel", price: 128.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-GkvP9JrbummpD78A_37vEp4rz3w21_hBrNWD7dteSeg8_M1jSrFK5wrrr18Xpu5TAwHNmsj5iuyhFiVGqLA"},
    knife3: {name: "★ Bayonet | Boreal Forest", price: 89.78, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWdY781lteXA54vwxgCxqBE6Nzv0IIbBdQU6ZAuC-Vm6wu68hMe46MzIzCE26SQk7S3YzECpwUYbTEk7wBI"},
    knife4: {name: "★ Bayonet | Case Hardened", price: 134.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-GkvP9JrbummpD78A_j7DEoo2njFHl_kM5Zz_1I9OUI1dtYw3U_1nskOvuhMS7vM_AnXdr7z5iuyiOIPCcdg"},
    knife5: {name: "★ Bayonet | Crimson Web", price: 194.21, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq4yCkP_gDLfQhGxUppwj3r-Rpd3zjAy38xFsMGn0I9LGcA49Zw2B_VO5wL_r1Ja-vJrMySB9-n51NRRkGyg"},
    knife6: {name: "★ Bayonet | Fade", price: 316.54, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJcAJE7dizq4yCkP_gDLfQhGxUppBwib3Hod6n2ADnqUdkMW30cYKRdwVtMlrV-gK5yLi71JXpu5XBzHd9-n51Ga5qFJk"},
    knife7: {name: "★ Bayonet | Forest DDPAT", price: 87.77, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-HnvD8J4Tdl3lW7Yt337rC99iijASxrUs-Z2ryJYeTcgY2NAvT8li4l-a80MLuu5zLnyBmpGB8ss5wKTWe"},
    knife8: {name: "★ Bayonet | Night", price: 145.72, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL-HnvD8J4Tdl3lW7Ysg2-uTpN2iiVLmrkM6YW3zJYeUcQY7aV3XqwO3wrvvhZ-96Z7Nzic3pGB8sk5ZbSKb"},
    knife9: {name: "★ Bayonet | Safari Mesh", price: 64.71, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--q5SKmcj4OrzZglRd6dd2j6fHpY-kigPlrRduYmmhI4LHdgRqMw7X8lO7wuvqg8O77szAmHtq7iEn-z-DyIB9jWZF"},
    knife10: {name: "★ Bayonet | Scorched", price: 77.54, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0m_7zO6_ummpD78A_3-qXrNqnjAPtqUVpNjvxJIOWdQE-MFDY_Qfvkr-6jZ7uv5vInyE17z5iuyhdvxrhyA"},
    knife11: {name: "★ Bayonet | Slaughter", price: 276.21, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJY6d6klb-HnvD8J4Tdl3lW7Ysj2LqVpdqh2wLm-UNoNmH0cdeQIVM9N1HZ_QXtx-fu0Z64uMnAyHRrpGB8stNTCQHv"},
    knife12: {name: "★ Bayonet | Stained", price: 104.88, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0m_7zO6_ummpD78A_3r-RrNWti1Dl8kc6ammlIoPEJ1U_YQuDqwTvyejrgcS4vpnKySQwuj5iuyhwZ4qAMQ"},
    knife13: {name: "★ Bayonet | Urban Masked", price: 94.19, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLfYkWNF18lwmO7Eu9SkiwCw-RJsZTrxcI7GcAE_MFqC_AXrxby8gZHqvM6bySZg7CMgtyrD30vgFNz3E8k"},
    knife14: {name: "★ Flip Knife", price: 69.08, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3dzFL_JKzloaIx6ejYO6GzzlTucAj072W99-liQfm-hJsZGvyIdLEJw5tNA2E5BHgluDLhNCe"},
    knife15: {name: "★ Flip Knife | Blue Steel", price: 80.65, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO0mJWOk8j4OrzZglRd6dd2j6eVrNnwjlfi8kE6Nzr2IYeWcQdrZVjX_Fi5wOvt0Z-075TAyXBkuHMh-z-DyBuzAXuO"},
    knife16: {name: "★ Flip Knife | Boreal Forest", price: 62.77, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOwm5KOhOPLMbTDk2pd18l4jeHVyoD0mlOx5Rdoa277LIOUdwY5MF7U81O7krzuhJa8vM-fnSMxvyVxtCqPnEC3hktSLrs4hATUWUc"},
    knife17: {name: "★ Flip Knife | Case Hardened", price: 92.51, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO5nYyOk8j4OrzZglRd6dd2j6eQodmt0VDgrUBqZWrwJIKccg48ZQ7T_AS5l-nqh5e1uJrBnHAw63J2-z-DyM8HtRGF"},
    knife18: {name: "★ Flip Knife | Crimson Web", price: 152.21, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOhkYKYqPv9NLPFqWdQ-sJ0xOyR94_20VHlr0NsZzulcobEJAY5MAqD-VXvx-7m1pC6uZnByncw7yY8pSGKow-GEME"},
    knife19: {name: "★ Flip Knife | Fade", price: 198.77, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD7eOwlYSOqPv9NLPFqWdQ-sJ0xLGQpIqtjQy1rUE5Y2n1I4PGcgI5MFGD-wS3l-7r18TpucyanHpg6CE8pSGKbZ02GvY"},
    knife20: {name: "★ Flip Knife | Forest DDPAT", price: 60.79, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOykJCKg8j4OrzZglRd6dd2j6eZrd7x2QXm-xZrNmz2LI-Tewc8YFHQ-AW4wOa71J687pXByHJm6SNz-z-DyNsSWDE9"},
    knife21: {name: "★ Flip Knife | Safari Mesh", price: 43.42, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OO7kZODqOP1PYTck29Y_chOhujT8om72VXkr0E4Z2r3J9CRIQ9tNArWq1S_lOrug8Xv7sjJwXVruyUl5XqOmQv330_24dUqqg"},
    knife22: {name: "★ Flip Knife | Scorched", price: 59.27, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOylZCbm_LLP7LWnn9u5MRjjeyP84jzjVHl-hdtYm37co6Udw48N1zT8gLowLi705e7uZrIziFku3EisGGdwUJi_yOknw"},
    knife23: {name: "★ Flip Knife | Slaughter", price: 162.55, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD4eOskYKZlsj4OrzZglRd6dd2j6eUoNij31K2_UZoZGynLITGdgM8MwvZ_FC2wbruhZfq6snOnHVluykg-z-DyJrKkz-J"},
    knife24: {name: "★ Flip Knife | Stained", price: 65.38, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOwm5KIkvPLP7LWnn9u5MRjjeyP8NX03gHj_RJlYWGiJYfDIQU5ZlmC-VG8l-y9g5C5v5Sdm3Bq6CUi5mGdwUJLmy-O2g"},
    knife25: {name: "★ Flip Knife | Urban Masked", price: 50.91, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOilZCOqOLmMbrfqWZU7Mxkh9bN9J7yjRrh_hduZT_ydYGccgRqM13Xq1Xolbrt1sC6vp_JzCBh7ygj53vfnR3kn1gSOdeWAw8q"},
    knife26: {name: "★ Gut Knife", price: 55.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3dihWoo2ywdPbx6Cna--IwTtUsMBwjLuZodit2wXm_ERrZWHwctKTcQVvZlHOug_pU950d94"},
    knife27: {name: "★ Gut Knife | Blue Steel", price: 64.09, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqPv9NLPFqWdQ-sJ0xLnEodz3igSx-BY-Zj2mJ9LAc1Q3Y13Y_1Lrwrvr0MW7uZifwCBlv3E8pSGKHolYdI0"},
    knife28: {name: "★ Gut Knife | Boreal Forest", price: 49.63, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du5Mx2gv3--Y3nj1H6qUFkMm2gctSUcQJtNVCCr1TqkO3m056-6M_JnSRnuicn4njZmB3iiQYMMLJLcEs9NA"},
    knife29: {name: "★ Gut Knife | Case Hardened", price: 72.55, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqPv9NLPFqWdQ-sJ0xO-Qod2i2wOy_EdpYW_7LIDBclI6aVHV-Fm_lOe-gJG5vpvKyHYwv3M8pSGKIGsDSZw"},
    knife30: {name: "★ Gut Knife | Crimson Web", price: 99.91, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0m_7zO6_ummpD78A_2LiW9Nuj0VGw-0JvYj2hJdKWI1NoZAnU-gPtyOzo0ZK4u52bm3Bh7j5iuyiVfFD71A"},
    knife31: {name: "★ Gut Knife | Fade", price: 111.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxD09q3kIW0m_7zO6_ummpD78A_3OyZrI-n2wPk_RY9NTrwINOSdQc9MlrW_gfqlbu9jJK4uJmYwCBlvT5iuyhGHAgcYg"},
    knife32: {name: "★ Gut Knife | Forest DDPAT", price: 49.82, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqPv9NLPFqWdQ-sJ0xLGUoIqji1Xi-UVkZTr7coWTd1M7YVuE-Va3k-7o15LvuJyYwXRmsnE8pSGKxxB-nH8"},
    knife33: {name: "★ Gut Knife | Night", price: 71.38, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqPv9NLPFqWdQ-sJ0xOzE9t73igDk_xJoYG-hItKSdlA_aAvX-AO2ybjohZW0vMybynM273U8pSGKrp7Yw2U"},
    knife34: {name: "★ Gut Knife | Safari Mesh", price: 41.23, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLfYkWNF18lwmO7Eu9nz3Qyw_ERrN271JYKdIFc-YlmC_1m5l7i5hMS87p7Nz3c3uHMm4X7D30vgVFLgw28"},
    knife35: {name: "★ Gut Knife | Scorched", price: 48.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj4OrzZglRd6dd2j6eXoNv0jgLg_RVpZ2_zJIadclQ7Ml2F_Vi_wu3rhJbp7pnOyntk7HQk-z-DyOfOL3QM"},
    knife36: {name: "★ Gut Knife | Slaughter", price: 87.38, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxP08azlpKKqPv9NLPFqWdQ-sJ0xOqSotjz0FHj-hVvY2mmIIWQc1Q4aViC_FO6x7q-g5K56J6dnCNju3Q8pSGKFg_49QU"},
    knife37: {name: "★ Gut Knife | Stained", price: 58.29, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j4OrzZglRd6dd2j6eS89n32AHjqERtYz-gIIKVcVA7ZQzT81a3l-rnh8C5vZycm3Rq7ihw-z-DyB1e9elV"},
    knife38: {name: "★ Gut Knife | Urban Masked", price: 82.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXummJW4NFOhujT8om73wWy_0ttYmH7LICVcFI9M1zYrFK7lO7shcTov5ScmiAw63Mls33fygv330-gpCcFhQ"},
    knife39: {name: "★ Karambit", price: 235.14, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3ejxQ7dG0nZTFz_WgaurTwzMA6ZFz0-qW99mn0Qzk_EJoYWylJtSXe1c9aAnSq1C8l_Cv28F7-X3KYA"},
    knife40: {name: "★ Karambit | Blue Steel", price: 242.57, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_um25V4dB8teXA54vwxgLmqhFtYT-nIYecJgI3Z1DZ_FfqyLvqhpK-tJSbnSY2vSBx43eLn0epwUYbMQqd_ig"},
    knife41: {name: "★ Karambit | Boreal Forest", price: 169.55, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle-sBwhtbN_Iv9nGu4qgE7Nnf7dtOce1Q3M13T-Fa7xejs0MXt753AnXJruiMn7C6LnBC1h0tIO-1um7XAHtmw6SCz"},
    knife42: {name: "★ Karambit | Case Hardened", price: 262.32, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_ummJW4NFOhujT8om73Qay8kFuaj3xLYCVJAM7ZF-B8li9kOfm1sW6u5SfyHNru3Im7SvUlwv330-EAAozoQ"},
    knife43: {name: "★ Karambit | Crimson Web", price: 290.66, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0gPL2IITck29Y_chOhujT8om7iwLn_Ec4NWrwdoDDIFNtZlHT-QW6xOzmgZ_t6pTNznUyvnQg7Crclwv330__CL9_dg"},
    knife44: {name: "★ Karambit | Fade", price: 423.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5wOuqzNQhscxbDDKJXSMo79TfqCCM318tqU9-iyLcHO1u6qtHPMrYkMIxLGsOBDqWEMFqu7x5sgvRZKsHY9iLu2HvvbmpbCRbrqGwa2LjQGA46XOw"},
    knife45: {name: "★ Karambit | Forest DDPAT", price: 156.76, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0k_PkMq_ummJW4NFOhujT8om73Fex-BdsN2z6I9eUdg4_Nw7UqQXtyLu81p7vvZrIznZr7iQr53fenQv3309FzuO8KA"},
    knife46: {name: "★ Karambit | Night", price: 202.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_um25V4dB8teXA54vwxgbtrRVqNm_xJdKXcQVqMg7W_lDtl7vq1pe4753KynJqsnZ25n_alxapwUYbStGwX0o"},
    knife47: {name: "★ Karambit | Safari Mesh", price: 130.10, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0mvLnO4TFl2Vu5Mx2gv3--Y3nj1H6qkE4Zzqgco-cdwJsaF3XqVm_yL-70JG-7ZyamycyvXNz5SndzkG21wYMMLI7nV07EA"},
    knife48: {name: "★ Karambit | Scorched", price: 123.80, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0k_bkI7fUqWZU7Mxkh9bN9J7yjRrm_UdrNW77cdKWdAY7Z1DRrlG9yey80JO7ucudyXY3uXIlt3uMzRe1n1gSOZd2wXJa"},
    knife49: {name: "★ Karambit | Slaughter", price: 392.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20jfL2IbrummJW4NFOhujT8om70Azg_kQ6MTygdYKXJw9qMlnX_Fa3ye28gpC-vZSdynYxviZztyncmwv330_7Rx0jNA"},
    knife50: {name: "★ Karambit | Stained", price: 219.07, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0kfjmML7VqWdY781lteXA54vwxgHg8xVtYj_7LNXBIw9qZgyE-Fi_xLy7gJXovZqcynNq7iIqtHndykGpwUYbOEO3hhM"},
    knife51: {name: "★ Karambit | Urban Masked", price: 152.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0g_bkNoTEhGlQ5vp9g-7J4bP5iUazrl04YG-nJdXDegc2Y1uBrlG6x-2-gZTq6p6YwSZq6CFzsynZlhS30B9PcKUx0vKbTggh"},
    knife52: {name: "★ M9 Bayonet", price: 159.66, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3fGR97t2vm46Og7mlMu6ExzsI7ZVy0rGWrN7w3VDh_RY9Y22nd4fDdAE4NFzUrFjqlL3tm9bi6x2aUKuH"},
    knife53: {name: "★ M9 Bayonet | Blue Steel", price: 180.07, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj2P67UklRd4cJ5ntbN9J7yjRq3rUI5Mjz2dobBdgRtYQvS_FTrlOno1MLo78nIy3Jk73Jz4i7VzhHln1gSOQ4y0ztq"},
    knife54: {name: "★ M9 Bayonet | Boreal Forest", price: 95.33, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj-jNyoD8j1yglB89IT6mOoaSdlc5MFHWq1m5xL_qgsO67cnIzydr6yYl7X3ZmkO1gk1LOuFp16eACQLJZSfpy04"},
    knife55: {name: "★ M9 Bayonet | Case Hardened", price: 168.24, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRd4cJ5ntbN9J7yjRrj_hE6NjqlLNOccgE9MljVqAC8wOzqhJ60tc_BnXZqsigrs3bdmRO-n1gSObDaDdZj"},
    knife56: {name: "★ M9 Bayonet | Crimson Web", price: 187.66, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjjNrnCqWZU7Mxkh9bN9J7yjRqwrxVvMGDyI9KSdgQ-Z1HV_VfsyLu-hZe1tMzJnHFgv3IitHmLzhO0n1gSOc4nk3bB"},
    knife57: {name: "★ M9 Bayonet | Fade", price: 361.49, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KlsjyMr_UqWdY781lteXA54vwxgLi-0FrNWqiI4CWIw5sYQnY81m3xLjs18LouZjNwXc3uCF27SuOy0SpwUYbghNKfR8"},
    knife58: {name: "★ M9 Bayonet | Forest DDPAT", price: 79.83, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRc7cF4n-T--Y3nj1H6_0RtYD32IY_BIwY4aA3R-VLrxue90Ja_tZ6fmHpn7CNwtCuPzBzhiQYMMLJQizr10Q"},
    knife59: {name: "★ M9 Bayonet | Night", price: 182.58, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRd4cJ5ntbN9J7yjRrhqhA-MTygIILEcwRvYgzVr1S9yefv1pHtvsjMwSMy7CghtCrflxK2n1gSORdzljmC"},
    knife60: {name: "★ M9 Bayonet | Safari Mesh", price: 87.65, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp9g-7J4bP5iUazrl1tY2H6ItWSIQU-Y1DX_Vjsx-jnjZ657Z_LwCdm6HEl4nzbnBLlhxEfcKUx0rp-zgq-"},
    knife61: {name: "★ M9 Bayonet | Scorched", price: 97.36, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jwMqvBmm5u5Mx2gv3--Y3nj1H6qUttYz-mcoKTdg83Z1HX_FG4l7jt1pG8vZ7AwXJm6HVw4nfZzBDm1AYMMLItqjyW3w"},
    knife62: {name: "★ M9 Bayonet | Slaughter", price: 342.88, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjuNrnDl1Rd4cJ5ntbN9J7yjRrh-BVlZW3ydoTHdABsZ13Y_Qe5xue6gMC-vp-amntr6yQq4XfUzhTin1gSOZHog2Kf"},
    knife63: {name: "★ M9 Bayonet | Stained", price: 122.12, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjyPKnSk29u5Mx2gv3--Y3nj1H6rkdsajvyLIKQcAY9YQ7Trwfvxe_ugp7uuJ7AzHdl7iZ05XnayUSygwYMMLKw8Vd9_Q"},
    knife64: {name: "★ M9 Bayonet | Urban Masked", price: 80.60, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jgMqvUqX5D6sR_teTE8YXghWu4qgE7Nnf7cYCXcA9tZ1DZ_QO3x-7sjZS7ucidwSM26XZ07HbczRO_hxoZPeA8m7XAHsJxu2aY"}
  },
  chroma: {
    knife1: {name: "★ Bayonet | Damascus Steel", price: 144.29, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJG7dG3h4OehMj4OrzZglRd6dd2j6fD8d7321bnrRA4ZGmlcNPGdQU4MF_Y-AfvxO_vjcPttZ_BzyZrvHEq-z-DyDvfktEk"},
    knife2: {name: "★ Bayonet | Doppler", price: 281.27, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJG48ymmIWZqOf8MqjUx1Rd4cJ5ntbN9J7yjRrmrxZrZGH6JoaSdgZrZwvU-lPvk-i-1pW66svMnHtnuyAj7HmLzUC_n1gSOSy4kjfm"},
    knife3: {name: "★ Bayonet | Marble Fade", price: 399.68, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJP7c60mIW0kfbwNoTdn2xZ_Pp9i_vG8ML0jFfm80U6YGCgLY7EewA9YV7S-gC3xubshMXtvsjMyXdjuCIrsSmLgVXp1iqhnkny"},
    knife4: {name: "★ Bayonet | Tiger Tooth", price: 356.29, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfwJW5duzhr-Ehfb6NL7ummJW4NFOhujT8om73wzkrRVvMmz7cIaUIwE9NVyE_QW5xOu-0cTo78zNz3ZruXQj5imMyQv330-wFnub9Q"},
    knife5: {name: "★ Bayonet | Rust Coat", price: 110.90, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJR-NmzmL-Amf7yNoTck29Y_chOhujT8om72ASy-URsa2r1cdSWcwdtN1yD_Ae3wbrthcPttMnByXtk6XIh5S2PnAv330-jInGVzA"},
    knife6: {name: "★ Bayonet | Ultraviolet", price: 81.60, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJS-c6mmIW0m_7zO6_ummpD78A_ib7HpdT2igXsrUY_MG76JteXdVM_aV6Fr1e9wejugcS1v87KzHBjuj5iuyiOIho-lQ"},
    knife7: {name: "★ Flip Knife | Damascus Steel", price: 75.81, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOylY2KhPThIITck29Y_chOhujT8om73Q3nqBVsZzumIdPAcgZsaQuGr1LtlL_v1sO07cvNzXsyvyFw7H2Mmwv330_GcRb7_w"},
    knife8: {name: "★ Flip Knife | Doppler", price: 157.38, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD4eOym5Cbm_LmDKvZl3hUufp9g-7J4cKj3FK2qEpvYmH7ddSRdVVvMFDTqVfsk7q6h8C_tZnJzHRh7CFw53zagVXp1vI5Ejry"},
    knife9: {name: "★ Flip Knife | Marble Fade", price: 241.55, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD4eO7lZKJm_LLNbrVk1Rd4cJ5ntbN9J7yjRrh_BJlamqidoCTcQRsMArX_lPqkufp0J7p7sidn3trvichsy7YzRG_n1gSORYEYb_6"},
    knife10: {name: "★ Flip Knife | Tiger Tooth", price: 184.57, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD4uOinYeOhcj7IbrfkW5u5Mx2gv3--Y3nj1H6_0dtMGmnJtXDdgQ5NVHQrAO-xue6jZTt6p2dyXVn6SFwsy6JnhbihQYMMLJJD10GFg"},
    knife11: {name: "★ Flip Knife | Rust Coat", price: 62.26, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOlgIWOm8j_PbLXk1RZ7cRnk9bN9J7yjRrkqEM5ZWHzJtKSdlVtY1-EqwDskrzogpK0vsicnHY373Ik5i7cmUeyn1gSOUyfWtyC"},
    knife12: {name: "★ Flip Knife | Ultraviolet", price: 78.61, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR4-OmgZKbm_LLP7LWnn9u5MRjjeyPo42i3la2_kM4N2qmdtCUd1RqaFyDqVTrwbrsjMLt6p7Nm3JhuCcis2GdwULzMpUqFw"},
    knife13: {name: "★ Gut Knife | Damascus Steel", price: 73.31, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09i3mYGYlOLnDLfYkWNF18lwmO7Eu9XwiVLtqENpYzrwcoPBJFM7Ml7U_QW9x-_qhp7tvciYznJju3Yq5nrD30vgL77o414"},
    knife14: {name: "★ Gut Knife | Doppler", price: 85.30, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxP09i5hJCHkuXLI7PQhW4A18l4jeHVu9703Azs-hA_MTuncNWWIVU-aF7Z_1a7k-bo0cW_v8_OyXVqvyAqsy3D30vgdDGy9vw"},
    knife15: {name: "★ Gut Knife | Marble Fade", price: 108.88, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxP09G3hoKHksjyMr_UqWdY781lteXA54vwxgzhrUI_Mj3xJtTEdlM4ZlnW-lW7levs0J_pvM6fzHZmsyck5SvcmhepwUYbBOFy9O0"},
    knife16: {name: "★ Gut Knife | Tiger Tooth", price: 104.97, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxM08i_k4WZqPjmMrXWk1Rd4cJ5ntbN9J7yjRrg_kpsN2qiLYCTdAdtZA3V_gDowuzngMXuvp7OyXVk7HMk5ivZlxPln1gSOddL0hWc"},
    knife17: {name: "★ Gut Knife | Rust Coat", price: 51.88, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT08-ikYWHqPz6Or3UqWNU6dNoteXA54vwxgDlrxdtZjr3J4GXdQI4aA6DrgO_kLzvhp6-vczAyyA36ykk5XeLn0epwUYbYI3sIZ8"},
    knife18: {name: "★ Gut Knife | Ultraviolet", price: 52.68, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N08yjhpCHksj4OrzZglRd6dd2j6fF94mj0Qzt_0JqZmnyJYCTIQI9MwzRqQfswOa60J6_ucmbnyNj63Ml-z-DyDA-JgFz"},
    knife19: {name: "★ Karambit | Damascus Steel", price: 248.55, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0k_b5MqjSg3hu5cB1g_zMyoD0mlOx5UJrYGGldtTGdVQ2N13QqQTrw-65hJ-7uJibyCY3vSgq5ynVmRa2gEpSLrs4H0e_wQA"},
    knife20: {name: "★ Karambit | Doppler", price: 452.87, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20k_jkI7fUhFRB4MRij7j--YXygECLpxIuNDztJYDGcg4_aFjS8gDoxOfn15G7vpXLzyFh6HMk4nranhfmgExJP7NsguveFwu10KRx-Q"},
    knife21: {name: "★ Karambit | Marble Fade", price: 510.57, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20mvbmMbfUqW1Q7MBOhuDG_ZjKhFWmrBZyNmynJNCRdQdtMlyBqwW2lbq7g8Po6ZnLwCM17yhxsX2JlxXkgEsabPsv26LDJQinCA"},
    knife22: {name: "★ Karambit | Tiger Tooth", price: 447.73, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY60g_7zNqnumXlQ5sJ0teXI8oTht1i1uRQ5fTqnIdecJgFqMFmG-1TsxO3phcO0vpibziZruCYj537dzECwgB9KauZxxavJ_ct1ylw"},
    knife23: {name: "★ Karambit | Rust Coat", price: 169.88, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0hOPxNrfunWVY7sBOguzA45XKhFWmrBZyYGj0IdOTcANvYgzZ-QXrkOrphJS1v8jBzXVlvSEr4yrfmUfm1RhFZ_sv26IC487sHw"},
    knife24: {name: "★ Karambit | Ultraviolet", price: 210.56, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0h-LmI7fUqWdY781lteXA54vwxlfn-xdqMG_ycY_AIQRraVjYqFm6xLrqjJLtupzMnHZluCN24HmIyhCpwUYbxnUlics"},
    knife25: {name: "★ M9 Bayonet | Damascus Steel", price: 157.68, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjwMrbQhWhE-_oo2tbN_Iv9nGu4qgE7NnegLIOUclU4NFjT-wK4wLrm1pfvvpnLyCY1uXIr5H3cnRCyhR8YPe1sm7XAHqKK2qu-"},
    knife26: {name: "★ M9 Bayonet | Doppler", price: 329.65, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjwPKvBmm5D19V5i_rEpLP5gVO8v11tMmD6IobEdFRsMFmB8lPvlL-9hZbuvJ_JziBn7HYltnvfnES21xhKcKUx0sfosVEP"},
    knife27: {name: "★ M9 Bayonet | Marble Fade", price: 472.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Kmsj5MqnTmm5u7sR1j9bN_Iv9nGu4qgE7Nnf0J4THcFU-NFuD-Fi5yOjn1sXvvM7OnCE37yAm5neMzRy-hE5Faedvm7XAHpMyLagJ"},
    knife28: {name: "★ M9 Bayonet | Tiger Tooth", price: 429.33, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmcjgOrzUhFRe-sR_jez--YXygECLpxIuNDztII_Bd1doM16E_Qe_xr29hcS_tJmbnHNnuyZz7HrenB2zgBlLarQ8gOveFwvcAFHlzA"},
    knife29: {name: "★ M9 Bayonet | Rust Coat", price: 111.21, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjnJ77UmlRa5sx3j9bJ8I3jkWu4qgE7Nnf7IoCdJA85NAvXrgO3xLu9gZLotZvImHY1s3V04nqJzBTmhEpPZ-Q6m7XAHhi2BnJN"},
    knife30: {name: "★ M9 Bayonet | Ultraviolet", price: 118.02, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMjkJqnBmm5u5Mx2gv3--Y3nj1H6_hA9a2rwddSQc1Q5MFHX-AW3k-u915G7tZ-awXpqvydz43aOm0ez0gYMMLJr8B7KPw"}
  },
  //huntsman: {},
  //butterfly: {},
  //shadow: {},
  falchion: {
    knife1: {name: "★ Falchion Knife", price: 62.48, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3dzxO79S_m47FlvP3MO-ClzsAsMN13u_Ept2gjFawqRBram_zd9DGdwRtZAzW-QS9lPCv28EYYhhURQ"},
    knife2: {name: "★ Falchion Knife | Blue Steel", price: 64.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJlZG0lfvhNr_ummJW4NFOhujT8om7jVWw-0o9Y2_2doeUd1M5YV-B_1jvkOrmg5617cvJnCZg7nQqsX6LnAv33096JBYroA"},
    knife3: {name: "★ Falchion Knife | Boreal Forest", price: 49.41, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJnJm0kfjmNqjFqWle-sBwhtbN_Iv9nGu4qgE7Nnf6dtCRI1RqZluErwTrwb-6jZTv6Z2YwXRkunUj5XrbyxbmhBxKb-Vom7XAHn20Kdwb"},
    knife4: {name: "★ Falchion Knife | Case Hardened", price: 72.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJlZG0mP74Nr_ummJW4NFOhujT8om7jFC3r0s6Zzj7I9OVeldsZFiGr1K8xe-6g5G1vZXAz3Nhv3Mm7SrdnAv330_UfpIpHA"},
    knife5: {name: "★ Falchion Knife | Crimson Web", price: 80.88, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJnJm0gPL2IITdn2xZ_Pp9i_vG8MKsiwfh_hBra2j6do7DJg83YgrV_lLskru61p-7usjOwHo2vHUq43zegVXp1quG0xFU"},
    knife6: {name: "★ Falchion Knife | Fade", price: 134.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJlYG0kfbwNoTdn2xZ_Pp9i_vG8MKkjFbiqRBtYT_3doKcdAE5M1vT-lK2w73s0JPt6p_In3Zl7iBx5H3ZgVXp1vKw8o78"},
    knife7: {name: "★ Falchion Knife | Forest DDPAT", price: 46.53, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJnJm0k_PkMq_ummJW4NFOhujT8om721bm80ZrMWD6dtSXI1c_M1nT-Va8xea7jce97cjLzSMy7yFws3vYnwv330-CGV7xUA"},
    knife8: {name: "★ Falchion Knife | Night", price: 32.57, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJh4-0mf7zO6_ummJW4NFOhujT8om73QfhrkpvamHxLIaQcQA-NAmDqVS3x-e6hMS-tMucz3Y1uyUg5HmLygv330_-hpfX1A"},
    knife9: {name: "★ Falchion Knife | Safari Mesh", price: 40.73, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJh5C0mvLnO4TFl2Vu5cB1g_zMyoD0mlOx5RY5ZDz1cdCQcAc7ZVjY8lK8xefqgZG-6MvAzHVlvyV3sy3Ym0ezghpSLrs4qtg7Y4A"},
    knife10: {name: "★ Falchion Knife | Scorched", price: 46.17, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJh5C0k_bkI7fUqWdY781lteXA54vwxgTj-RE4Z2j3J9eVIQE4aA7Srla2ye3q0Mfp6ZXBnSdns3Mq4XaPyxapwUYb8i5yVXs"},
    knife11: {name: "★ Falchion Knife | Slaughter", price: 116.08, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJlY20jfL2IbrummJW4NFOhujT8om721e2qBZuYmDycITEcAZsaVCF_FC-lebujZbvvsvNmHs27yAi43mOzgv3308URyVBpw"},
    knife12: {name: "★ Falchion Knife | Stained", price: 54.27, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJlZG0kfjmML7VqWdY781lteXA54vwxge28ktqNz-gJ4-QJwA4YV-E-we-xLi80Zfqv8jPm3owuHMgtn6LmhypwUYb5tWmOP0"},
    knife13: {name: "★ Falchion Knife | Urban Masked", price: 43.33, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1fLEcjVL49KJh5C0g_bkNoTEhGlQ5vp9g-7J4bP5iUazrl0_YGDzINOdcwBsNwvT-gLqwO3v1JHtvZXPzCc1uSdz5n2IyxW0hRtIcKUx0k4sDK_g"}
  },
}

// cases
var cases = {
  case1: {
    milspec: {
      weap1: {
        name: "MP7 | Skulls FT",
        price: 1.01,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFA957ODDZDFO_-O7kYSCgvrLP7rDkW4f6ZQj2uvCot-g0VGwrxJkMWD6JoXAcQI8ZwrX_1nrxry6g5606ZyYz2wj5Hfvfqeavw"
      },
      weap2: {
        name: "MP7 | Skulls MW",
        price: 1.12,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFA957ODDZDFO_-O6nYeDg8j4MqnWkyUC7ZYp07iT94j3jVXsqkE-Y2qhJYKcJwA_aA7ZrFC6wLvqgcDt78ud1zI97Xw9NqWl"
      },
      weap3: {
        name: "AUG | Wings MW",
        price: 0.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957PXNcClK6c6lq4GekMj4OrzZglRd6dd2j6fEpNik0Vbh-RJvNz2nINTAJgM9Y1CG_lK2lL_q0cPtvJqbySAyuCQq-z-DyC4dac1H"
      },
      weap4: {

        name: "AUG | Wings FN",
        price: 0.96,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957PXNcClK6c6lq4GekMj4OrzZglRd6dd2j6fEpNik0Vbh-RJvNz2nINTAJgM9Y1CG_lK2lL_q0cPtvJqbySAyuCQq-z-DyC4dac1H"
      },
      weap5: {
        name: "SG 553 | Ultraviolet BS",
        price: 0.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3YShQ_NCzq4iOluHtDLfQhGxUppQk2LrE89ij0QKwqBZlNW2nd4Wce1A2YFqG-lTrxL3s15fo7c7KmCF9-n51vbUi3Fo"
      },
      weap6: {
        name: "SG 553 | Ultraviolet WW",
        price: 0.82,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3YShQ_NCzq42Ok_7hPoTdl3lW7Ysi0riS9tSn3Aa2-0Y5a2_2JISRegNtYFjUrgfrwbrojMK_uZibzXQxpGB8svIGbLia"
      },
      weap7: {
        name: "SG 553 | Ultraviolet FT",
        price: 0.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3YShQ_NCzq42Ok_7hPoTdl3lW7Ysi0riS9tSn3Aa2-0Y5a2_2JISRegNtYFjUrgfrwbrojMK_uZibzXQxpGB8svIGbLia"
      },
      weap8: {
        name: "SG 553 | Ultraviolet MW",
        price: 1.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3YShQ_NCzq4yCkP_gDLfQhGxUppEl3rGSptmjigfn_0dqZTigdoDAdQ4_YV3XrlnoyOi-gpXv7p7OzyR9-n51Wu8Hu6Y"
      },
      weap9: {

        name: "SG 553 | Ultraviolet FN",
        price: 9.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3YShQ_NCzq4yCkP_gDLfQhGxUppEl3rGSptmjigfn_0dqZTigdoDAdQ4_YV3XrlnoyOi-gpXv7p7OzyR9-n51Wu8Hu6Y"
      }
    },
    restricted: {
      weap1: {
        name: "Glock-18 | Dragon Tattoo MW",
        price: 8.07,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73dS9D69O4q4eHmPT_DLfYkWNF18lwmO7Eu4mh2lXj-RJtajjxJoWcIQ83Y13X-QO2ye_ojJ61u8yfynUwvXYq4XbD30vgIiQpgfY"
      },
      weap2: {
        name: "Glock-18 | Dragon Tattoo FN",
        price: 8.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73dS9D69O4q4eHmPT_DLfYkWNF18lwmO7Eu4mh2lXj-RJtajjxJoWcIQ83Y13X-QO2ye_ojJ61u8yfynUwvXYq4XbD30vgIiQpgfY"
      },
      weap3: {
        name: "USP-S | Dark Water FT",
        price: 7.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q5qOleX1DL_QhGBu5cB1g_zMyoD0mlOx5RBsNWynLdPBewc2Z1vS-Va6lbjv0Za7vpifynU173Ul4C6OyReziR9SLrs4yi8-wy8"
      },
      weap4: {
        name: "USP-S | Dark Water MW",
        price: 7.19,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q5qOleX1DL_QhGBu5Mx2gv3--Y3nj1H6qhc4ZGn6doTAIAA2YlDV-Qe3xO7n0cLqtc7Ly3djuXQlsCmPlhy1hAYMMLLPDZXOFA"
      },
      weap5: {
        name: "M4A1-S | Dark Water FT",
        price: 7.28,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-RkvXmMoTVl3la18h0juDU-LP5iUazrl1oZT_yIo7Hdlc2Yl3Z_FbrlOq-1J64v8jKzHFk63Er5HiPnRa0hBlPcKUx0qB24BFc"
      },
      weap6: {

        name: "M4A1-S | Dark Water MW",
        price: 7.03,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-RkvXmMoTVl3la18l4jeHVyoD0mlOx5RVoa23wIo7EdgE2N12F-lPqwLzm0ZPpvpXIz3FmvnZ34n_YmhW01xtSLrs4m_P9LyY"
      }
    },
    classified: {
      weap1: {
        name: "AK-47 | Case Hardened BS",
        price: 27.60,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO-kYGdjsj4MqnWkyUGuZVy3LCQo9mjiwC3qBA-Nz37cIeQcAM_YlnTqFm8lb--g5606M_K1zI97UjSHoic"
      },
      weap2: {
        name: "AK-47 | Case Hardened WW",
        price: 29.60,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO7kYSCgvrLP7rDkW4fuZEk37mYpNun3FXtqUpvMGymIYLEd1U3YF-Eq1S5kOfoh5-_vpiYmGwj5HetcqhLqw"
      },
      weap3: {
        name: "AK-47 | Case Hardened FT",
        price: 31.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO7kYSCgvrLP7rDkW4fuZEk37mYpNun3FXtqUpvMGymIYLEd1U3YF-Eq1S5kOfoh5-_vpiYmGwj5HetcqhLqw"
      },
      weap4: {
        name: "AK-47 | Case Hardened MW",
        price: 40.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg8j4MqnWkyUIusYpjriToImhjQHg_EZkN2r0cY-RdAI3Z1jT-gS3kO_njZW_7pjB1zI97T2FIK3X"
      },
      weap5: {
        name: "AK-47 | Case Hardened FN",
        price: 67.81,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg8j4MqnWkyUIusYpjriToImhjQHg_EZkN2r0cY-RdAI3Z1jT-gS3kO_njZW_7pjB1zI97T2FIK3X"
      },
      weap6: {
        name: "Desert Eagle | Hypnotic MW",
        price: 13.03,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTitH_si_k4-0m_7zO6_ummpD78A_0rzApNrw3FayqUs-YjqgIoWccVVvZAzQqVfqwr_u0JDpup3LynFhuT5iuyj9I0M0JQ"
      },
      weap7: {

        name: "Desert Eagle | Hypnotic FN",
        price: 8.45,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTitH_si_k4-0m_7zO6_ummpD78A_0rzApNrw3FayqUs-YjqgIoWccVVvZAzQqVfqwr_u0JDpup3LynFhuT5iuyj9I0M0JQ"
      }
    },
    covert: {
      weap1: {
        name: "AWP | Lightning Strike MW",
        price: 76.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7P_BdjVW4tW4k7-KgOfLP7LWnn9u5MRjjeyPptuj2Qzt_0JsYDymJNDAIQ8-MA7U_1i3w-bphpO1v56bmHBk7yMksWGdwUJq4NI0lg"
      },
      weap2: {
        name: "AWP | Lightning Strike FN",
        price: 65.19,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7P_BdjVW4tW4k7-KgOfLP7LWnn9u5MRjjeyPptuj2Qzt_0JsYDymJNDAIQ8-MA7U_1i3w-bphpO1v56bmHBk7yMksWGdwUJq4NI0lg"
      }
    },
    stattrak: {
      weap1: {
        name: "StatTrak™ MP7 | Skulls FT",
        price: 2.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFA957ODDZDFO_-O7kYSCgvrLP7rDkW4f6ZQj2uvCot-g0VGwrxJkMWD6JoXAcQI8ZwrX_1nrxry6g5606ZyYz2wj5Hfvfqeavw"
      },
     weap2: {
        name: "StatTrak™ MP7 | Skulls MW",
        price: 3.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFA957ODDZDFO_-O6nYeDg8j4MqnWkyUC7ZYp07iT94j3jVXsqkE-Y2qhJYKcJwA_aA7ZrFC6wLvqgcDt78ud1zI97Xw9NqWl"
      },
     weap3: {
        name: "StatTrak™ AUG | Wings MW",
        price: 2.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957PXNcClK6c6lq4GekMj4OrzZglRd6dd2j6fEpNik0Vbh-RJvNz2nINTAJgM9Y1CG_lK2lL_q0cPtvJqbySAyuCQq-z-DyC4dac1H"
      },
     weap4: {
        name: "StatTrak™ AUG | Wings FN",
        price: 2.90,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957PXNcClK6c6lq4GekMj4OrzZglRd6dd2j6fEpNik0Vbh-RJvNz2nINTAJgM9Y1CG_lK2lL_q0cPtvJqbySAyuCQq-z-DyC4dac1H"
      },
      weap5: {
        name: "StatTrak™ SG 553 | Ultraviolet BS",
        price: 1.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3YShQ_NCzq4iOluHtDLfQhGxUppQk2LrE89ij0QKwqBZlNW2nd4Wce1A2YFqG-lTrxL3s15fo7c7KmCF9-n51vbUi3Fo"
      },
      weap6: {
        name: "StatTrak™ SG 553 | Ultraviolet WW",
        price: 2.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3YShQ_NCzq42Ok_7hPoTdl3lW7Ysi0riS9tSn3Aa2-0Y5a2_2JISRegNtYFjUrgfrwbrojMK_uZibzXQxpGB8svIGbLia"
      },
      weap7: {
        name: "StatTrak™ SG 553 | Ultraviolet FT",
        price: 1.91,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3YShQ_NCzq42Ok_7hPoTdl3lW7Ysi0riS9tSn3Aa2-0Y5a2_2JISRegNtYFjUrgfrwbrojMK_uZibzXQxpGB8svIGbLia"
      },
      weap8: {
        name: "StatTrak™ SG 553 | Ultraviolet MW",
        price: 3.58,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3YShQ_NCzq4yCkP_gDLfQhGxUppEl3rGSptmjigfn_0dqZTigdoDAdQ4_YV3XrlnoyOi-gpXv7p7OzyR9-n51Wu8Hu6Y"
      },
      weap9: {
        name: "StatTrak™ SG 553 | Ultraviolet FN",
        price: 44.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwPz3YShQ_NCzq4yCkP_gDLfQhGxUppEl3rGSptmjigfn_0dqZTigdoDAdQ4_YV3XrlnoyOi-gpXv7p7OzyR9-n51Wu8Hu6Y"
      },
      weap10: {
        name: "StatTrak™ Glock-18 | Dragon Tattoo MW",
        price: 30.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73dS9D69O4q4eHmPT_DLfYkWNF18lwmO7Eu4mh2lXj-RJtajjxJoWcIQ83Y13X-QO2ye_ojJ61u8yfynUwvXYq4XbD30vgIiQpgfY"
      },
      weap11: {
        name: "StatTrak™ Glock-18 | Dragon Tattoo FN",
        price: 29.97,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73dS9D69O4q4eHmPT_DLfYkWNF18lwmO7Eu4mh2lXj-RJtajjxJoWcIQ83Y13X-QO2ye_ojJ61u8yfynUwvXYq4XbD30vgIiQpgfY"
      },
      weap12: {
        name: "StatTrak™ USP-S | Dark Water FT",
        price: 22.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q5qOleX1DL_QhGBu5cB1g_zMyoD0mlOx5RBsNWynLdPBewc2Z1vS-Va6lbjv0Za7vpifynU173Ul4C6OyReziR9SLrs4yi8-wy8"
      },
      weap13: {
        name: "StatTrak™ USP-S | Dark Water MW",
        price: 22.55,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q5qOleX1DL_QhGBu5Mx2gv3--Y3nj1H6qhc4ZGn6doTAIAA2YlDV-Qe3xO7n0cLqtc7Ly3djuXQlsCmPlhy1hAYMMLLPDZXOFA"
      },
      weap14: {
        name: "StatTrak™ M4A1-S | Dark Water FT",
        price: 16.67,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-RkvXmMoTVl3la18h0juDU-LP5iUazrl1oZT_yIo7Hdlc2Yl3Z_FbrlOq-1J64v8jKzHFk63Er5HiPnRa0hBlPcKUx0qB24BFc"
      },
      weap15: {
        name: "StatTrak™ M4A1-S | Dark Water MW",
        price: 19.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-RkvXmMoTVl3la18l4jeHVyoD0mlOx5RVoa23wIo7EdgE2N12F-lPqwLzm0ZPpvpXIz3FmvnZ34n_YmhW01xtSLrs4m_P9LyY"
      },
      weap16: {
        name: "StatTrak™ AK-47 | Case Hardened BS",
        price: 78.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO-kYGdjsj4MqnWkyUGuZVy3LCQo9mjiwC3qBA-Nz37cIeQcAM_YlnTqFm8lb--g5606M_K1zI97UjSHoic"
      },
      weap17: {
        name: "StatTrak™ AK-47 | Case Hardened WW",
        price: 96.33,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO7kYSCgvrLP7rDkW4fuZEk37mYpNun3FXtqUpvMGymIYLEd1U3YF-Eq1S5kOfoh5-_vpiYmGwj5HetcqhLqw"
      },
      weap18: {
        name: "StatTrak™ AK-47 | Case Hardened FT",
        price: 159.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO7kYSCgvrLP7rDkW4fuZEk37mYpNun3FXtqUpvMGymIYLEd1U3YF-Eq1S5kOfoh5-_vpiYmGwj5HetcqhLqw"
      },
      weap19: {
        name: "StatTrak™ AK-47 | Case Hardened MW",
        price: 242.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg8j4MqnWkyUIusYpjriToImhjQHg_EZkN2r0cY-RdAI3Z1jT-gS3kO_njZW_7pjB1zI97T2FIK3X"
      },
      weap20: {
        name: "StatTrak™ AK-47 | Case Hardened FN",
        price: 356.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg8j4MqnWkyUIusYpjriToImhjQHg_EZkN2r0cY-RdAI3Z1jT-gS3kO_njZW_7pjB1zI97T2FIK3X"
      },
      weap21: {
        name: "StatTrak™ Desert Eagle | Hypnotic MW",
        price: 68.01,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTitH_si_k4-0m_7zO6_ummpD78A_0rzApNrw3FayqUs-YjqgIoWccVVvZAzQqVfqwr_u0JDpup3LynFhuT5iuyj9I0M0JQ"
      },
      weap22: {
        name: "StatTrak™ Desert Eagle | Hypnotic FN",
        price: 32.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTitH_si_k4-0m_7zO6_ummpD78A_0rzApNrw3FayqUs-YjqgIoWccVVvZAzQqVfqwr_u0JDpup3LynFhuT5iuyj9I0M0JQ"
      },
      weap23: {
        name: "StatTrak™ AWP | Lightning Strike MW",
        price: 384.07,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7P_BdjVW4tW4k7-KgOfLP7LWnn9u5MRjjeyPptuj2Qzt_0JsYDymJNDAIQ8-MA7U_1i3w-bphpO1v56bmHBk7yMksWGdwUJq4NI0lg"
      },
      weap24: {
        name: "StatTrak™ AWP | Lightning Strike FN",
        price: 270.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7P_BdjVW4tW4k7-KgOfLP7LWnn9u5MRjjeyPptuj2Qzt_0JsYDymJNDAIQ8-MA7U_1i3w-bphpO1v56bmHBk7yMksWGdwUJq4NI0lg"
      }
    }
  },
  case2: {
    milspec: {
      weap1: {
        name: "M4A4 | Faded Zebra BS",

        price: 0.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zSdD9Q7d-3mb-JgMj8NrrHj1Rd6dd2j6eR94n30AHh-0dlam_7LY-dJAU9YFrZ8lC_k-7rhZG96c_JzHFlsil0-z-DyGlAJkHo"

      },
      weap2: {
        name: "M4A4 | Faded Zebra WW",

        price: 1.04,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zSdD9Q7d-3mb-JgMj5Nr_Yg2Zu5MRjjeyPodugjQG3_ktlYmDzI9eXJw5vN1DX_FS3krjogpO_787PnCRg7HEn4WGdwUKP7q6emg"

      },
      weap3: {
        name: "M4A4 | Faded Zebra FT",

        price: 0.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zSdD9Q7d-3mb-JgMj5Nr_Yg2Zu5MRjjeyPodugjQG3_ktlYmDzI9eXJw5vN1DX_FS3krjogpO_787PnCRg7HEn4WGdwUKP7q6emg"

      },
      weap4: {
        name: "M4A4 | Faded Zebra MW",

        price: 1.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zSdD9Q7d-3mb-JgMj4OrzZglRd6dd2j6fF8NytjVLmqkU4ZGzxINOTegQ_YFCDrwe7le_thJS475jIzHQ37HEq-z-DyP3u9qQH"

      },
      weap5: {
        name: "M4A4 | Faded Zebra FN",

        price: 5.09,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zSdD9Q7d-3mb-JgMj4OrzZglRd6dd2j6fF8NytjVLmqkU4ZGzxINOTegQ_YFCDrwe7le_thJS475jIzHQ37HEq-z-DyP3u9qQH"

      },
      weap6: {
        name: "FAMAS | Doomkitty FT",

        price: 0.70,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3dTJN4de_gJSSqPrxN7LEm1Rd6dd2j6eUot-miQbh-kI_MTinIYCTclNsNF2F-lG5w-e51MO9uJ3KnXNqsicq-z-DyBWRNjyQ"

      },
      weap7: {
        name: "FAMAS | Doomkitty MW",

        price: 0.70,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3dTJN4de_gJSSqPv9NLPFqWdQ-sJ0xOqY8YiiigyyqUI9Z22nIYCccwA2ZQmBr1W-x7rsg5a4v57MzHJnvCg8pSGK9dYuT9g"

      },
      weap8: {
        name: "MAG-7 | Memento FT",

        price: 0.78,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhoyszBcjJR7dSzkJKEmcj5Nr_Yg2Zu5MRjjeyP9oij0AO1_BZoYGynIIeQIQ9tYlzR_QK5x7_t05G7vpyYzSNmuCUg7WGdwUI8FRM0jQ"
      },
      weap9: {
        name: "MAG-7 | Memento MW",

        price: 0.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhoyszBcjJR7dSzkJKEmcj4OrzZglRd6dd2j6fHoon00Fe3qkM-Z2GiJIKTcVI-aV_Xqwe3kufr0JHquZmdySRi7icr-z-DyKuim8q8"
      },
      weap10: {
        name: "MAG-7 | Memento FN",

        price: 1.81,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhoyszBcjJR7dSzkJKEmcj4OrzZglRd6dd2j6fHoon00Fe3qkM-Z2GiJIKTcVI-aV_Xqwe3kufr0JHquZmdySRi7icr-z-DyKuim8q8"
      }
    },
    restricted: {
      weap1: {
        name: "Sawed-Off | Orange DDPAT BS",

        price: 3.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR96NimlZS0mOX1PbzUqWNU6dNoteXA54vwxlK2-hdlYj2ncoKScAQ3NAvV-AW_l-_p1Ja9vczBwCdqv3Eg5X3ZnBepwUYbIoOIXWw"

      },
      weap2: {
        name: "Sawed-Off | Orange DDPAT WW",

        price: 3.37,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR96NimlZS0mOX1PbzUqWZU7Mxkh9bN9J7yjRrk80JpYGihLdOXdwE8M1HQ-QPrkL3vgpDo6pTNzCE3uChw5HuJn0C1n1gSObVbszu7"

      },
      weap3: {
        name: "Sawed-Off | Orange DDPAT FT",

        price: 2.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR96NimlZS0mOX1PbzUqWZU7Mxkh9bN9J7yjRrk80JpYGihLdOXdwE8M1HQ-QPrkL3vgpDo6pTNzCE3uChw5HuJn0C1n1gSObVbszu7"

      },
      weap4: {
        name: "Sawed-Off | Orange DDPAT MW",

        price: 4.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR96NimlZS0mOX1PbzUqWdY781lteXA54vwxgTgrRZtZWr7I4bEJgA7NFnXrlnrxbq7jJK8v5zBySc3uXMntH3cl0GpwUYbpgzadSQ"

      },
      weap5: {
        name: "Sawed-Off | Orange DDPAT FN",

        price: 15.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR96NimlZS0mOX1PbzUqWdY781lteXA54vwxgTgrRZtZWr7I4bEJgA7NFnXrlnrxbq7jJK8v5zBySc3uXMntH3cl0GpwUYbpgzadSQ"

      },
      weap6: {
        name: "P250 | Splash FT",

        price: 4.55,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhzw8zbYTFD_9SJhNLex8j5Nr_Yg2Zu5MRjjeyPpNWliVLt8kA6az_xctKVIQA_ZF-E-ge3yOzrgcS5ucmfwXBq6HEq4WGdwUITxB6TmQ"

      },
      weap7: {
        name: "P250 | Splash MW",

        price: 4.05,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhzw8zbYTFD_9SJhNLex8j4OrzZglRd6dd2j6eYp9uljAyw-kc_YGCicdCdcQI-Zg2B_1HrxO-5hcPutJSayHVhvCN2-z-DyDH08JDT"

      },
      weap8: {
        name: "P250 | Splash FN",

        price: 14.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhzw8zbYTFD_9SJhNLex8j4OrzZglRd6dd2j6eYp9uljAyw-kc_YGCicdCdcQI-Zg2B_1HrxO-5hcPutJSayHVhvCN2-z-DyDH08JDT"

      },
      weap9: {
        name: "Galil AR | Orange DDPAT BS",

        price: 3.18,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJG6My3gL-Ehfb6NL7unm5Q_txOhujT8om7ilbt80pqYj33cIHHJlJqNQvUqFm3l-frjZK46JqbznAxv3Iht33Uygv330_YNq_s6Q"
      },
      weap10: {
        name: "Galil AR | Orange DDPAT WW",

        price: 3.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJG6My3gL-Ehfb6NL7um25V4dB8teXA54vwxlWxqkY6ZGDxLICcJg5vaFqG_wK4k-7pgpLpvZnLwSRruyRw5H2JyRGpwUYbBwHobOI"
      },
      weap11: {
        name: "Galil AR | Orange DDPAT FT",

        price: 2.81,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJG6My3gL-Ehfb6NL7um25V4dB8teXA54vwxlWxqkY6ZGDxLICcJg5vaFqG_wK4k-7pgpLpvZnLwSRruyRw5H2JyRGpwUYbBwHobOI"
      },
      weap12: {
        name: "Galil AR | Orange DDPAT MW",

        price: 3.56,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJG6My3gL-Ehfb6NL7ummJW4NFOhujT8om70ADt8hJsYWqmIofDdFI9N1-E-lK-wOzqh5e4vp-bnCYy73R24yzfzQv3308XlHsKJg"
      },
      weap13: {
        name: "Galil AR | Orange DDPAT FN",

        price: 30.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJG6My3gL-Ehfb6NL7ummJW4NFOhujT8om70ADt8hJsYWqmIofDdFI9N1-E-lK-wOzqh5e4vp-bnCYy73R24yzfzQv3308XlHsKJg"
      }
    },
    classified: {
      weap1: {
        name: "AK-47 | Red Laminate BS",
        price: 7.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4iOluHtDLfQhGxUpsAk0rmQ992m3Abs80E_ZGr1IIfBewc-Z1nWrFO8yOrshMTtup6cznN9-n51YFTKBoM"

      },
      weap2: {
        name: "AK-47 | Red Laminate WW",
        price: 8.54,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q42Ok_7hPoTdl3lW7YshjrDE9oqgjFDn-xJpNWilLIScIwdsaVrYqwS5k-_o1J61vpTJwXZjpGB8st6uvlM7"

      },
      weap3: {
        name: "AK-47 | Red Laminate FT",
        price: 7.15,
        img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q42Ok_7hPoTdl3lW7YshjrDE9oqgjFDn-xJpNWilLIScIwdsaVrYqwS5k-_o1J61vpTJwXZjpGB8st6uvlM7"

      },
      weap4: {
        name: "AK-47 | Red Laminate MW",
        price: 12.01,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4yCkP_gDLfQhGxUppQo07-TpYmt2Azh_EpqYGDxIoLGJAE7YgzQ_FS-xuzu15Lu75yfynV9-n512WUCzeM"

      },
      weap5: {
        name: "AK-47 | Red Laminate FN",
        price: 147.38,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4yCkP_gDLfQhGxUppQo07-TpYmt2Azh_EpqYGDxIoLGJAE7YgzQ_FS-xuzu15Lu75yfynV9-n512WUCzeM"

      },
      weap6: {
        name: "AWP | BOOM FT",

        price: 18.97,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PHEcDB9_9W7hIyOqPrxN7LEm1Rd6dd2j6eVptis2gTsqBc_N2inJ4-ddlNsMFGCqAS9l7--hMfqvc-awHowvHJz-z-DyEDRzNPB"
      },
      weap7: {
        name: "AWP | BOOM MW",

        price: 24.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PHEcDB9_9W7hIyOqPv9NLPFqWdQ-sJ0xOzFpN2h0QDj_0ttNmnwIoDHcFVqNFjZ-AC2lbq-1pLou5_MyXVkv3I8pSGK_P3OCnU"
      },
      weap8: {
        name: "AWP | BOOM FN",

        price: 115.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PHEcDB9_9W7hIyOqPv9NLPFqWdQ-sJ0xOzFpN2h0QDj_0ttNmnwIoDHcFVqNFjZ-AC2lbq-1pLou5_MyXVkv3I8pSGK_P3OCnU"
      }
    },
    covert: {
      weap1: {
        name: "P90 | Death by Kitty FT",

        price: 28.33,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PDJZS5J-dC6h7-bzqfLPr7Vn35c18lwmO7Eu9iiilXl8kVoN2nyIIORdgRqY1nU_lS3x7y61pe-vszMnXE1uHEhsXrD30vggDzyTcg"
      },
      weap2: {
        name: "StatTrak™ P90 | Death by Kitty MW",

        price: 45.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PDJZS5J-dC6h7-bzqfLP7LWnn9u5MRjjeyPpYrz2lfhqEZvMm_6JdOXelJrYVqDrlbsxe66hp-56JjKnXowvCgg42GdwUIaw99WQg"
      }
    },
    stattrak: {
      weap1: {
        name: "StatTrak™ M4A4 | Faded Zebra BS",

        price: 4.04,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zSdD9Q7d-3mb-JgMj8NrrHj1Rd6dd2j6eR94n30AHh-0dlam_7LY-dJAU9YFrZ8lC_k-7rhZG96c_JzHFlsil0-z-DyGlAJkHo"

      },
      weap2: {
        name: "StatTrak™ M4A4 | Faded Zebra WW",

        price: 4.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zSdD9Q7d-3mb-JgMj5Nr_Yg2Zu5MRjjeyPodugjQG3_ktlYmDzI9eXJw5vN1DX_FS3krjogpO_787PnCRg7HEn4WGdwUKP7q6emg"

      },
      weap3: {
        name: "StatTrak™ M4A4 | Faded Zebra FT",

        price: 3.89,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zSdD9Q7d-3mb-JgMj5Nr_Yg2Zu5MRjjeyPodugjQG3_ktlYmDzI9eXJw5vN1DX_FS3krjogpO_787PnCRg7HEn4WGdwUKP7q6emg"

      },
      weap4: {
        name: "StatTrak™ M4A4 | Faded Zebra MW",

        price: 5.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zSdD9Q7d-3mb-JgMj4OrzZglRd6dd2j6fF8NytjVLmqkU4ZGzxINOTegQ_YFCDrwe7le_thJS475jIzHQ37HEq-z-DyP3u9qQH"

      },
      weap5: {
        name: "StatTrak™ M4A4 | Faded Zebra FN",

        price: 35.93,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zSdD9Q7d-3mb-JgMj4OrzZglRd6dd2j6fF8NytjVLmqkU4ZGzxINOTegQ_YFCDrwe7le_thJS475jIzHQ37HEq-z-DyP3u9qQH"

      },
      weap6: {
        name: "StatTrak™ FAMAS | Doomkitty FT",

        price: 1.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3dTJN4de_gJSSqPrxN7LEm1Rd6dd2j6eUot-miQbh-kI_MTinIYCTclNsNF2F-lG5w-e51MO9uJ3KnXNqsicq-z-DyBWRNjyQ"

      },
      weap7: {
        name: "StatTrak™ FAMAS | Doomkitty MW",

        price: 1.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3dTJN4de_gJSSqPv9NLPFqWdQ-sJ0xOqY8YiiigyyqUI9Z22nIYCccwA2ZQmBr1W-x7rsg5a4v57MzHJnvCg8pSGK9dYuT9g"

      },
      weap8: {
        name: "StatTrak™ MAG-7 | Memento FT",

        price: 1.56,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhoyszBcjJR7dSzkJKEmcj5Nr_Yg2Zu5MRjjeyP9oij0AO1_BZoYGynIIeQIQ9tYlzR_QK5x7_t05G7vpyYzSNmuCUg7WGdwUI8FRM0jQ"
      },
      weap9: {
        name: "StatTrak™ MAG-7 | Memento MW",

        price: 1.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhoyszBcjJR7dSzkJKEmcj4OrzZglRd6dd2j6fHoon00Fe3qkM-Z2GiJIKTcVI-aV_Xqwe3kufr0JHquZmdySRi7icr-z-DyKuim8q8"
      },
      weap10: {
        name: "StatTrak™ MAG-7 | Memento FN",

        price: 7.38,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhoyszBcjJR7dSzkJKEmcj4OrzZglRd6dd2j6fHoon00Fe3qkM-Z2GiJIKTcVI-aV_Xqwe3kufr0JHquZmdySRi7icr-z-DyKuim8q8"
      },
      weap11: {
        name: "StatTrak™ Sawed-Off | Orange DDPAT BS",

        price: 7.88,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR96NimlZS0mOX1PbzUqWNU6dNoteXA54vwxlK2-hdlYj2ncoKScAQ3NAvV-AW_l-_p1Ja9vczBwCdqv3Eg5X3ZnBepwUYbIoOIXWw"

      },
      weap12: {
        name: "StatTrak™ Sawed-Off | Orange DDPAT WW",

        price: 7.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR96NimlZS0mOX1PbzUqWZU7Mxkh9bN9J7yjRrk80JpYGihLdOXdwE8M1HQ-QPrkL3vgpDo6pTNzCE3uChw5HuJn0C1n1gSObVbszu7"

      },
      weap13: {
        name: "StatTrak™ Sawed-Off | Orange DDPAT FT",

        price: 7.82,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR96NimlZS0mOX1PbzUqWZU7Mxkh9bN9J7yjRrk80JpYGihLdOXdwE8M1HQ-QPrkL3vgpDo6pTNzCE3uChw5HuJn0C1n1gSObVbszu7"

      },
      weap14: {
        name: "StatTrak™ Sawed-Off | Orange DDPAT MW",

        price: 12.04,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR96NimlZS0mOX1PbzUqWdY781lteXA54vwxgTgrRZtZWr7I4bEJgA7NFnXrlnrxbq7jJK8v5zBySc3uXMntH3cl0GpwUYbpgzadSQ"

      },
      weap15: {
        name: "StatTrak™ Sawed-Off | Orange DDPAT FN",

        price: 103.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3eSR96NimlZS0mOX1PbzUqWdY781lteXA54vwxgTgrRZtZWr7I4bEJgA7NFnXrlnrxbq7jJK8v5zBySc3uXMntH3cl0GpwUYbpgzadSQ"

      },
      weap16: {
        name: "StatTrak™ P250 | Splash FT",

        price: 15.46,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhzw8zbYTFD_9SJhNLex8j5Nr_Yg2Zu5MRjjeyPpNWliVLt8kA6az_xctKVIQA_ZF-E-ge3yOzrgcS5ucmfwXBq6HEq4WGdwUITxB6TmQ"

      },
      weap17: {
        name: "StatTrak™ P250 | Splash MW",

        price: 14.55,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhzw8zbYTFD_9SJhNLex8j4OrzZglRd6dd2j6eYp9uljAyw-kc_YGCicdCdcQI-Zg2B_1HrxO-5hcPutJSayHVhvCN2-z-DyDH08JDT"

      },
      weap18: {
        name: "StatTrak™ P250 | Splash FN",

        price: 57.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhzw8zbYTFD_9SJhNLex8j4OrzZglRd6dd2j6eYp9uljAyw-kc_YGCicdCdcQI-Zg2B_1HrxO-5hcPutJSayHVhvCN2-z-DyDH08JDT"

      },
      weap19: {
        name: "StatTrak™ Galil AR | Orange DDPAT BS",

        price: 6.24,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJG6My3gL-Ehfb6NL7unm5Q_txOhujT8om7ilbt80pqYj33cIHHJlJqNQvUqFm3l-frjZK46JqbznAxv3Iht33Uygv330_YNq_s6Q"
      },
      weap20: {
        name: "StatTrak™ Galil AR | Orange DDPAT WW",

        price: 7.08,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJG6My3gL-Ehfb6NL7um25V4dB8teXA54vwxlWxqkY6ZGDxLICcJg5vaFqG_wK4k-7pgpLpvZnLwSRruyRw5H2JyRGpwUYbBwHobOI"
      },
      weap21: {
        name: "StatTrak™ Galil AR | Orange DDPAT FT",

        price: 7.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJG6My3gL-Ehfb6NL7um25V4dB8teXA54vwxlWxqkY6ZGDxLICcJg5vaFqG_wK4k-7pgpLpvZnLwSRruyRw5H2JyRGpwUYbBwHobOI"
      },
      weap22: {
        name: "StatTrak™ Galil AR | Orange DDPAT MW",

        price: 11.96,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJG6My3gL-Ehfb6NL7ummJW4NFOhujT8om70ADt8hJsYWqmIofDdFI9N1-E-lK-wOzqh5e4vp-bnCYy73R24yzfzQv3308XlHsKJg"
      },
      weap23: {
        name: "StatTrak™ Galil AR | Orange DDPAT FN",

        price: 337.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJG6My3gL-Ehfb6NL7ummJW4NFOhujT8om70ADt8hJsYWqmIofDdFI9N1-E-lK-wOzqh5e4vp-bnCYy73R24yzfzQv3308XlHsKJg"
      },
      weap24: {
        name: "StatTrak™ AK-47 | Red Laminate BS",
        price: 53.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4iOluHtDLfQhGxUpsAk0rmQ992m3Abs80E_ZGr1IIfBewc-Z1nWrFO8yOrshMTtup6cznN9-n51YFTKBoM"

      },
      weap25: {
        name: "StatTrak™ AK-47 | Red Laminate WW",
        price: 39.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q42Ok_7hPoTdl3lW7YshjrDE9oqgjFDn-xJpNWilLIScIwdsaVrYqwS5k-_o1J61vpTJwXZjpGB8st6uvlM7"

      },
      weap26: {
        name: "AK-47 | Red Laminate FT",
        price: 39.99,
        img: "http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q42Ok_7hPoTdl3lW7YshjrDE9oqgjFDn-xJpNWilLIScIwdsaVrYqwS5k-_o1J61vpTJwXZjpGB8st6uvlM7"

      },
      weap27: {
        name: "StatTrak™ AK-47 | Red Laminate MW",
        price: 87.28,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4yCkP_gDLfQhGxUppQo07-TpYmt2Azh_EpqYGDxIoLGJAE7YgzQ_FS-xuzu15Lu75yfynV9-n512WUCzeM"

      },
      weap28: {
        name: "StatTrak™ AK-47 | Red Laminate FN",
        price: 400.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4yCkP_gDLfQhGxUppQo07-TpYmt2Azh_EpqYGDxIoLGJAE7YgzQ_FS-xuzu15Lu75yfynV9-n512WUCzeM"

      },
      weap29: {
        name: "StatTrak™ AWP | BOOM FT",

        price: 78.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PHEcDB9_9W7hIyOqPrxN7LEm1Rd6dd2j6eVptis2gTsqBc_N2inJ4-ddlNsMFGCqAS9l7--hMfqvc-awHowvHJz-z-DyEDRzNPB"
      },
      weap30: {
        name: "StatTrak™ AWP | BOOM MW",

        price: 114.26,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PHEcDB9_9W7hIyOqPv9NLPFqWdQ-sJ0xOzFpN2h0QDj_0ttNmnwIoDHcFVqNFjZ-AC2lbq-1pLou5_MyXVkv3I8pSGK_P3OCnU"
      },
      weap31: {
        name: "StatTrak™ AWP | BOOM FN",

        price: 400.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PHEcDB9_9W7hIyOqPv9NLPFqWdQ-sJ0xOzFpN2h0QDj_0ttNmnwIoDHcFVqNFjZ-AC2lbq-1pLou5_MyXVkv3I8pSGK_P3OCnU"
      },
      weap32: {
        name: "StatTrak™ P90 | Death by Kitty FT",

        price: 130.32,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PDJZS5J-dC6h7-bzqfLPr7Vn35c18lwmO7Eu9iiilXl8kVoN2nyIIORdgRqY1nU_lS3x7y61pe-vszMnXE1uHEhsXrD30vggDzyTcg"
      },
      weap33: {
        name: "StatTrak™ P90 | Death by Kitty MW",

        price: 285.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PDJZS5J-dC6h7-bzqfLP7LWnn9u5MRjjeyPpYrz2lfhqEZvMm_6JdOXelJrYVqDrlbsxe66hp-56JjKnXowvCgg42GdwUIaw99WQg"
      }
	}
  },
  case3: {
    milspec: {
      weap1: {
        name: "Nova | Tempest FT",

        price: 0.88,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszbdDxR5dizq4KZluH7DLbUkmJE5fp9i_vG8MKhi1KxrRVvMDqnLdScJgM5YF7SrAW2kOvnhJa7upTOyntm6HIgt3_fgVXp1kUZZcr4"

      },
      weap2: {
        name: "Nova | Tempest MW",

        price: 0.88,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszbdDxR5dizq4KZluH7DLfYkWNF18lwmO7Eu470jAXnqRFqZDz1I9PAcgRsZlDSq1S5xe3og8LqucjOnHY17Cck4yvD30vgkWGSw_Y"

      },
      weap3: {
        name: "Nova | Tempest FN",

        price: 4.67,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszbdDxR5dizq4KZluH7DLfYkWNF18lwmO7Eu470jAXnqRFqZDz1I9PAcgRsZlDSq1S5xe3og8LqucjOnHY17Cck4yvD30vgkWGSw_Y"

      },
      weap4: {
        name: "Dual Berettas | Black Limba BS",

        price: 0.76,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YjhD_9O4q4WHnuPxIITThGpH5_p5j-jX7LP5iUazrl1ra2n6doScdQ5tYF_X_wW3ye-6gpS0us_PzyBh7iEn7CvYmxzh0ElKcKUx0kxgHYWe"

      },
      weap5: {
        name: "Dual Berettas | Black Limba WW",

        price: 0.72,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YjhD_9O4q4WHnuPxIITThGpH5_p8j-3I4IHKhFWmrBZyMTzxJYCUJgc7YgrSqVbvx-fm1MDovsvPzHVr63Ul7HrUmxe0hhsfZ_sv26JtMDpySg"

      },
      weap6: {
        name: "Dual Berettas | Black Limba FT",

        price: 0.71,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YjhD_9O4q4WHnuPxIITThGpH5_p8j-3I4IHKhFWmrBZyMTzxJYCUJgc7YgrSqVbvx-fm1MDovsvPzHVr63Ul7HrUmxe0hhsfZ_sv26JtMDpySg"

      },
      weap7: {
        name: "Dual Berettas | Black Limba MW",

        price: 0.74,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YjhD_9O4q4WHnuPxIITThGpH5_p9g-7J4bP5iUazrl1sYDv2coLEJFVsNw6C8lHoxu280Ja8tcmYy3Zj7CRztH7ZmhDkgB0acKUx0vlk7mOZ"

      },
      weap8: {
        name: "Dual Berettas | Black Limba FN",

        price: 4.94,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YjhD_9O4q4WHnuPxIITThGpH5_p9g-7J4bP5iUazrl1sYDv2coLEJFVsNw6C8lHoxu280Ja8tcmYy3Zj7CRztH7ZmhDkgB0acKUx0vlk7mOZ"

      },
      weap9: {
        name: "UMP-45 | Bone Pile FT",

        price: 0.77,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwOP3YjZX4NCJkImKkOX1PoTThGpH5_p8j-3I4IHKhFWmrBZyZzz6LdWXdFc3NQ7Y-VW3lO-7hZ7v6sjOwHdhvyBw7Hfen0PmgxxFOvsv26IVUXFn2Q"

      },
      weap10: {
        name: "UMP-45 | Bone Pile MW",

        price: 0.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwOP3YjZX4NCJkImKkOX1PoTThGpH5_p9g-7J4bP5iUazrl06YDulIYCWJABrYVrX_ge7xO3ogsO46sjJzXBhsyAn4HfbzhbjgBEecKUx0mY3Obru"

      },
      weap11: {
        name: "UMP-45 | Bone Pile FN",

        price: 4.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwOP3YjZX4NCJkImKkOX1PoTThGpH5_p9g-7J4bP5iUazrl06YDulIYCWJABrYVrX_ge7xO3ogsO46sjJzXBhsyAn4HfbzhbjgBEecKUx0mY3Obru"

      },
      weap12: {
        name: "SG 553 | Wave Spray BS",
        price: 1.03,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3Yi1Q7cWJg4GdkuTLManQgGRu4MBwnPD--Y3nj1H6_UJkMG31I4aUJ1c6MF_S_AK2wui8jZW_vc-fzyZl7HMj4izZmhHi0gYMMLLGuqAG0A"
      },
      weap13: {
        name: "SG 553 | Wave Spray WW",
        price: 1.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3Yi1Q7cWJg4GdkuTLManQgGRu5cB1g_zMyoD0mlOx5RBtZWn3Jo-Wd1RsNAuE8wS4xeftjcO-vJXAzHAyvHYmtynYm0Hm0hlSLrs42pQ6GqQ"
      },
      weap14: {
        name: "SG 553 | Wave Spray FT",
        price: 0.77,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3Yi1Q7cWJg4GdkuTLManQgGRu5cB1g_zMyoD0mlOx5RBtZWn3Jo-Wd1RsNAuE8wS4xeftjcO-vJXAzHAyvHYmtynYm0Hm0hlSLrs42pQ6GqQ"
      },
      weap15: {
        name: "SG 553 | Wave Spray MW",
        price: 0.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3Yi1Q7cWJg4GdkuTLManQgGRu5Mx2gv3--Y3nj1H6_hdoNmmmJ4-SdVRoaA7RrAC2lbrugJG67pjMznQxviIr4HvbyRy_1QYMMLINH1rX1A"
      },
      weap16: {
        name: "SG 553 | Wave Spray FN",
        price: 7.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3Yi1Q7cWJg4GdkuTLManQgGRu5Mx2gv3--Y3nj1H6_hdoNmmmJ4-SdVRoaA7RrAC2lbrugJG67pjMznQxviIr4HvbyRy_1QYMMLINH1rX1A"
      },
      weap17: {
        name: "Galil AR | Shattered BS",

        price: 0.65,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJB_sm7hIyOqPXmMq3eqWNU6dNoteXA54vwxlfmqks9Zj_0JoWddFA7YAuCqAXvl-a9hce56pvMm3tlvHYq5C7bnhKpwUYbUOnIySQ"

      },
      weap18: {
        name: "Galil AR | Shattered WW",

        price: 0.76,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJB_sm7hIyOqPXmMq3eqWZU7Mxkh9bN9J7yjRrl-UVrMWmiLI6ccgJrMgnT-AK7k7ro08S86cvLyiBgsiYn4XzanxCxn1gSObBepbJw"

      },
      weap19: {
        name: "Galil AR | Shattered FT",

        price: 0.74,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJB_sm7hIyOqPXmMq3eqWZU7Mxkh9bN9J7yjRrl-UVrMWmiLI6ccgJrMgnT-AK7k7ro08S86cvLyiBgsiYn4XzanxCxn1gSObBepbJw"

      },
      weap20: {
        name: "Galil AR | Shattered MW",

        price: 1.06,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJB_sm7hIyOqPXmMq3eqWdY781lteXA54vwxlK3rUFpa2v0d4bAJA42MwmD_QS7k-7qg5Hp78nMmHU36HV35X7alhSpwUYbQZ2Q3_0"

      },
      weap21: {
        name: "Galil AR | Shattered FN",

        price: 12.33,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJB_sm7hIyOqPXmMq3eqWdY781lteXA54vwxlK3rUFpa2v0d4bAJA42MwmD_QS7k-7qg5Hp78nMmHU36HV35X7alhSpwUYbQZ2Q3_0"

      },
      weap22: {
        name: "G3SG1 | Demeter BS",
        price: 0.78,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf2-r3czFX6cy5mJmMmPnLManQgGRu4MBwnPD--Y3nj1H6_UJuNT_yLI6XdlI-ZgmC-Qe9yefn08XvuJ_Lmnpk6Cgqty7fmkTmhgYMMLLE9hNWUw"
      },
      weap23: {
        name: "G3SG1 | Demeter WW",
        price: 0.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf2-r3czFX6cy5mJmMmPnLManQgGRu5cB1g_zMyoD0mlOx5Rc-YmGhLYSdewE6ZwvUrgS7l-zs1sC9uZrPyCYxvXUhsX_amxTmhh5SLrs4gg-Li9w"
      },
      weap24: {
        name: "G3SG1 | Demeter FT",
        price: 0.72,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf2-r3czFX6cy5mJmMmPnLManQgGRu5cB1g_zMyoD0mlOx5Rc-YmGhLYSdewE6ZwvUrgS7l-zs1sC9uZrPyCYxvXUhsX_amxTmhh5SLrs4gg-Li9w"
      },
      weap25: {
        name: "G3SG1 | Demeter MW",
        price: 1.06,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf2-r3czFX6cy5mJmMmPnLManQgGRu5Mx2gv3--Y3nj1H6_UVva2_xJ9eRewE3ZFnSqAO-xea51JS-6pScmnJl6yVx5H7anUaw1AYMMLLJ4W7Vxw"
      },
      weap26: {
        name: "G3SG1 | Demeter FN",
        price: 4.46,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf2-r3czFX6cy5mJmMmPnLManQgGRu5Mx2gv3--Y3nj1H6_UVva2_xJ9eRewE3ZFnSqAO-xea51JS-6pScmnJl6yVx5H7anUaw1AYMMLLJ4W7Vxw"
      }
    },
    restricted: {
      weap1: {
        name: "M4A1-S | Bright Water FT",
        price: 4.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ElPL1PYTThGpH5_p8j-3I4IHKhFWmrBZyNmH6cdScd1c_MlnU-Fm_wu25jMW5vpydynE3snUmtn3cnBLkhh0ebvsv26IkUFORWw"
      },
      weap2: {
        name: "M4A1-S | Bright Water MW",
        price: 5.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ElPL1PYTThGpH5_p9g-7J4bP5iUazrl1rMmD3JoKRew88Z1nV-VS5xOzpjMfqvZrNznFg73Rx4i2IyxDh0E0ecKUx0mgVIkh6"
      },
      weap3: {
        name: "M4A4 | Zirka WW",

        price: 4.71,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zbZTxQ096klZaEqPrxN7LEm1Rd6dd2j6eT8I-iiQK2rUo6YWv0cNWVcgM_aV2GrwPrlbrvhpK1tZ7Mz3tj6SJx-z-DyOOk6P2x"
      },
      weap4: {
        name: "M4A4 | Zirka FT",

        price: 4.55,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zbZTxQ096klZaEqPrxN7LEm1Rd6dd2j6eT8I-iiQK2rUo6YWv0cNWVcgM_aV2GrwPrlbrvhpK1tZ7Mz3tj6SJx-z-DyOOk6P2x"
      },
      weap5: {
        name: "M4A4 | Zirka MW",

        price: 5.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zbZTxQ096klZaEqPv9NLPFqWdQ-sJ0xO2V9NmjiVax80tpMmiiJIXAIwc5YgnWqwDrk-q5hJbu78iazyNj6SI8pSGKHzKMZwk"
      },
      weap6: {
        name: "M4A4 | Zirka FN",

        price: 18.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zbZTxQ096klZaEqPv9NLPFqWdQ-sJ0xO2V9NmjiVax80tpMmiiJIXAIwc5YgnWqwDrk-q5hJbu78iazyNj6SI8pSGKHzKMZwk"
      },
      weap7: {
        name: "MAC-10 | Graven BS",

        price: 4.75,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3dClB5Nmyq42KlKakDLnDl31e1810i__YyoD0mlOx5RZra2D7ItWddwM6NQrT-lG4k-7p1sC5tJXAzCdguCgrsXaPmhblgRhSLrs4X6WYu8U"

      },
      weap8: {
        name: "MAC-10 | Graven WW",

        price: 5.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3dClB5Nmyq42KlKakDLnDl31e18h0juDU-LP5iUazrl1oZD3zJNSRegdsZlDTqAXtk-fs0Za9tJjKyXU3uSgq5nzcyh2_hUkZcKUx0j6hz7ID"

      },
      weap9: {
        name: "MAC-10 | Graven FT",

        price: 4.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3dClB5Nmyq42KlKakDLnDl31e18h0juDU-LP5iUazrl1oZD3zJNSRegdsZlDTqAXtk-fs0Za9tJjKyXU3uSgq5nzcyh2_hUkZcKUx0j6hz7ID"

      },
      weap10: {
        name: "MAC-10 | Graven MW",

        price: 8.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3dClB5Nmyq42KlKakDLnDl31e18l4jeHVyoD0mlOx5UZlYj-gdtXAIw43Yl7V-QXvkOvth8TttZSbzCdj7yh2sHvayxGzgxtSLrs4Lr1PcT8"

      },
      weap11: {
        name: "MAC-10 | Graven FN",

        price: 22.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3dClB5Nmyq42KlKakDLnDl31e18l4jeHVyoD0mlOx5UZlYj-gdtXAIw43Yl7V-QXvkOvth8TttZSbzCdj7yh2sHvayxGzgxtSLrs4Lr1PcT8"

      },
      weap12: {
        name: "USP-S | Overgrowth BS",


        price: 5.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5OCkvDxDLnDl31e1810i__YyoD0mlOx5RI_ZW_3JNOUew42aAvRqQLvwerrh8Lo6cmbmnZguSJwtHbbmkbmgBFSLrs4DZ6YGxE"

      },
      weap13: {
        name: "USP-S | Overgrowth WW",


        price: 5.08,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5OCkvDxDLnDl31e18h0juDU-LP5iUazrl1rY2-nctOSdAA2Mg6E_gW5yLu515HptMmcwXdquHYq7CvbnhK210ofcKUx0vvw7Doa"

      },
      weap14: {
        name: "USP-S | Overgrowth FT",


        price: 4.63,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5OCkvDxDLnDl31e18h0juDU-LP5iUazrl1rY2-nctOSdAA2Mg6E_gW5yLu515HptMmcwXdquHYq7CvbnhK210ofcKUx0vvw7Doa"

      },
      weap15: {
        name: "USP-S | Overgrowth MW",


        price: 6.56,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5OCkvDxDLnDl31e18l4jeHVyoD0mlOx5UZtZDv7LdOSelRoNFCCqwW5kr_u1Mfuu8idn3M3uiJz4HmPnUHmgx5SLrs4BeHLjR0"

      },
      weap16: {
        name: "USP-S | Overgrowth FN",


        price: 39.91,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5OCkvDxDLnDl31e18l4jeHVyoD0mlOx5UZtZDv7LdOSelRoNFCCqwW5kr_u1Mfuu8idn3M3uiJz4HmPnUHmgx5SLrs4BeHLjR0"

      }
    },
    classified: {
      weap1: {
        name: "P90 | Emerald Dragon BS",

        price: 35.70,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PfacDpN4uOmzdC0leX1JbTunm5Q_txOhujT8om73gey-URlaziidtTDIFQ4YFqB-Vjoxe_t056-tZnOnHcyuyUl7XzUygv3309dcAEP7w"

      },
      weap2: {
        name: "P90 | Emerald Dragon WW",

        price: 30.90,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PfacDpN4uOmzdC0leX1JbTum25V4dB8teXA54vwxgTm_hFqNjzzJI_DcA43M1uDqQW8w-rp1JG_tZqfmCM1vyQgt3vazhepwUYb67ogGAs"

      },
      weap3: {
        name: "P90 | Emerald Dragon FT",

        price: 31.48,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PfacDpN4uOmzdC0leX1JbTum25V4dB8teXA54vwxgTm_hFqNjzzJI_DcA43M1uDqQW8w-rp1JG_tZqfmCM1vyQgt3vazhepwUYb67ogGAs"

      },
      weap4: {
        name: "P90 | Emerald Dragon MW",

        price: 32.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PfacDpN4uOmzdC0leX1JbTummJW4NFOhujT8om72gTkrhVpYmqicYScI1M5Z13RqwW9l-3u0JC07pibyHpluCcr4HjfyQv33082TFpJRA"

      },
      weap5: {
        name: "P90 | Emerald Dragon FN",

        price: 132.94,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PfacDpN4uOmzdC0leX1JbTummJW4NFOhujT8om72gTkrhVpYmqicYScI1M5Z13RqwW9l-3u0JC07pibyHpluCcr4HjfyQv33082TFpJRA"

      },
      weap6: {
        name: "P2000 | Ocean Foam MW",

        price: 39.98,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfAJN_8-_kpm0lfvhNoTBxDsBuPpzmOjX-rP5gVO8vywwMiukcZicc1A8Y13W-VToxrvr1J-0us_MyCdjs3JwtH7dmUbmh0lIPLNo0afMVxzAUPnKUIAd"

      },
      weap7: {
        name: "P2000 | Ocean Foam FN",

        price: 38.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfAJN_8-_kpm0lfvhNoTBxDsBuPpzmOjX-rP5gVO8vywwMiukcZicc1A8Y13W-VToxrvr1J-0us_MyCdjs3JwtH7dmUbmh0lIPLNo0afMVxzAUPnKUIAd"

      },
      weap8: {
        name: "AWP | Graphite MW",

        price: 39.65,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7PDaZDBS4NmJlpKKgfjLP7LWnn9u5MRjjeyPoIqg0VCx-UFrN2v7JNCWIQVsYlGGqwS5lOrm1MW9uJ7Kynow6yVw52GdwULDeIeGVQ"
      },
      weap9: {
        name: "AWP | Graphite FN",

        price: 42.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7PDaZDBS4NmJlpKKgfjLP7LWnn9u5MRjjeyPoIqg0VCx-UFrN2v7JNCWIQVsYlGGqwS5lOrm1MW9uJ7Kynow6yVw52GdwULDeIeGVQ"
      }


    },
    covert: {
      weap1: {
        name: "Desert Eagle | Golden Koi MW",

        price: 15.89,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTi5B7dCzh7-JhfbiPITdn2xZ_Pp9i_vG8MKji1a1_0VqamymI4LEelRrNFHT-ATvyO680Me-uMjIzXQw6HV04CragVXp1igFofN6"

      },
      weap2: {
        name: "Desert Eagle | Golden Koi FN",

        price: 14.69,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTi5B7dCzh7-JhfbiPITdn2xZ_Pp9i_vG8MKji1a1_0VqamymI4LEelRrNFHT-ATvyO680Me-uMjIzXQw6HV04CragVXp1igFofN6"

      },
      weap3: {
        name: "AK-47 | Fire Serpent BS",

        price: 141.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teHE9Jrst1i1uRQ5fW3yI9WRcw83YViCr1DswO680JW57cjPwXcwvXQrtHbUmByzgkkZOuJxxavJ1uEsotc"

      },
      weap4: {
        name: "AK-47 | Fire Serpent WW",

        price: 209.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teTE8YXghWu4qgE7NnfzdtCTIQM-ZFnWqFLqyb270ZHt6MyanHMxvHYitHzVzBHk1RtOarc8m7XAHlYw1xU4"

      },
      weap5: {
        name: "AK-47 | Fire Serpent FT",

        price: 233.36,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teTE8YXghWu4qgE7NnfzdtCTIQM-ZFnWqFLqyb270ZHt6MyanHMxvHYitHzVzBHk1RtOarc8m7XAHlYw1xU4"

      },
      weap6: {
        name: "AK-47 | Fire Serpent MW",

        price: 372.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teXI8oTht1i1uRQ5fWDwLYbAdVBqYVHRrwC2kO7rhpLq6J_IzXE2unFxs3-JmkG200ofZ-JxxavJKZiOt4k"

      },
      weap7: {
        name: "AK-47 | Fire Serpent FN",

        price: 535.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzRyTQLLE6VNWecq8Qb4NiY5vJBcVsW34bQ5JVW47Mapb-FuZ41SFsPZWqOBMF3940pt0akML5GKpHy73yztOTsKCkC9-j8BzOfV6OFihXFWHSb0S-ZgUA"

      }
    },
	stattrak: {
      weap1: {
        name: "StatTrak™ Nova | Tempest FT",

        price: 1.91,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszbdDxR5dizq4KZluH7DLbUkmJE5fp9i_vG8MKhi1KxrRVvMDqnLdScJgM5YF7SrAW2kOvnhJa7upTOyntm6HIgt3_fgVXp1kUZZcr4"

      },
      weap2: {
        name: "StatTrak™ Nova | Tempest MW",

        price: 2.46,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszbdDxR5dizq4KZluH7DLfYkWNF18lwmO7Eu470jAXnqRFqZDz1I9PAcgRsZlDSq1S5xe3og8LqucjOnHY17Cck4yvD30vgkWGSw_Y"

      },
      weap3: {
        name: "StatTrak™ Nova | Tempest FN",

        price: 14.52,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhoyszbdDxR5dizq4KZluH7DLfYkWNF18lwmO7Eu470jAXnqRFqZDz1I9PAcgRsZlDSq1S5xe3og8LqucjOnHY17Cck4yvD30vgkWGSw_Y"

      },
      weap4: {
        name: "StatTrak™ Dual Berettas | Black Limba BS",

        price: 1.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YjhD_9O4q4WHnuPxIITThGpH5_p5j-jX7LP5iUazrl1ra2n6doScdQ5tYF_X_wW3ye-6gpS0us_PzyBh7iEn7CvYmxzh0ElKcKUx0kxgHYWe"

      },
      weap5: {
        name: "StatTrak™ Dual Berettas | Black Limba WW",

        price: 1.88,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YjhD_9O4q4WHnuPxIITThGpH5_p8j-3I4IHKhFWmrBZyMTzxJYCUJgc7YgrSqVbvx-fm1MDovsvPzHVr63Ul7HrUmxe0hhsfZ_sv26JtMDpySg"

      },
      weap6: {
        name: "StatTrak™ Dual Berettas | Black Limba FT",

        price: 1.81,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YjhD_9O4q4WHnuPxIITThGpH5_p8j-3I4IHKhFWmrBZyMTzxJYCUJgc7YgrSqVbvx-fm1MDovsvPzHVr63Ul7HrUmxe0hhsfZ_sv26JtMDpySg"

      },
      weap7: {
        name: "StatTrak™ Dual Berettas | Black Limba MW",

        price: 2.33,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YjhD_9O4q4WHnuPxIITThGpH5_p9g-7J4bP5iUazrl1sYDv2coLEJFVsNw6C8lHoxu280Ja8tcmYy3Zj7CRztH7ZmhDkgB0acKUx0vlk7mOZ"

      },
      weap8: {
        name: "StatTrak™ Dual Berettas | Black Limba FN",

        price: 49.87,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YjhD_9O4q4WHnuPxIITThGpH5_p9g-7J4bP5iUazrl1sYDv2coLEJFVsNw6C8lHoxu280Ja8tcmYy3Zj7CRztH7ZmhDkgB0acKUx0vlk7mOZ"

      },
      weap9: {
        name: "StatTrak™ UMP-45 | Bone Pile FT",

        price: 1.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwOP3YjZX4NCJkImKkOX1PoTThGpH5_p8j-3I4IHKhFWmrBZyZzz6LdWXdFc3NQ7Y-VW3lO-7hZ7v6sjOwHdhvyBw7Hfen0PmgxxFOvsv26IVUXFn2Q"

      },
      weap10: {
        name: "StatTrak™ UMP-45 | Bone Pile MW",

        price: 3.22,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwOP3YjZX4NCJkImKkOX1PoTThGpH5_p9g-7J4bP5iUazrl06YDulIYCWJABrYVrX_ge7xO3ogsO46sjJzXBhsyAn4HfbzhbjgBEecKUx0mY3Obru"

      },
      weap11: {
        name: "StatTrak™ UMP-45 | Bone Pile FN",

        price: 21.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwOP3YjZX4NCJkImKkOX1PoTThGpH5_p9g-7J4bP5iUazrl06YDulIYCWJABrYVrX_ge7xO3ogsO46sjJzXBhsyAn4HfbzhbjgBEecKUx0mY3Obru"

      },
      weap12: {
        name: "StatTrak™ SG 553 | Wave Spray BS",
        price: 1.79,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3Yi1Q7cWJg4GdkuTLManQgGRu4MBwnPD--Y3nj1H6_UJkMG31I4aUJ1c6MF_S_AK2wui8jZW_vc-fzyZl7HMj4izZmhHi0gYMMLLGuqAG0A"
      },
      weap13: {
        name: "StatTrak™ SG 553 | Wave Spray WW",
        price: 1.69,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3Yi1Q7cWJg4GdkuTLManQgGRu5cB1g_zMyoD0mlOx5RBtZWn3Jo-Wd1RsNAuE8wS4xeftjcO-vJXAzHAyvHYmtynYm0Hm0hlSLrs42pQ6GqQ"
      },
      weap14: {
        name: "StatTrak™ SG 553 | Wave Spray FT",
        price: 1.70,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3Yi1Q7cWJg4GdkuTLManQgGRu5cB1g_zMyoD0mlOx5RBtZWn3Jo-Wd1RsNAuE8wS4xeftjcO-vJXAzHAyvHYmtynYm0Hm0hlSLrs42pQ6GqQ"
      },
      weap15: {
        name: "StatTrak™ SG 553 | Wave Spray MW",
        price: 2.89,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3Yi1Q7cWJg4GdkuTLManQgGRu5Mx2gv3--Y3nj1H6_hdoNmmmJ4-SdVRoaA7RrAC2lbrugJG67pjMznQxviIr4HvbyRy_1QYMMLINH1rX1A"
      },
      weap16: {
        name: "StatTrak™ SG 553 | Wave Spray FN",
        price: 45.35,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFfwOP3Yi1Q7cWJg4GdkuTLManQgGRu5Mx2gv3--Y3nj1H6_hdoNmmmJ4-SdVRoaA7RrAC2lbrugJG67pjMznQxviIr4HvbyRy_1QYMMLINH1rX1A"
      },
      weap17: {
        name: "StatTrak™ Galil AR | Shattered BS",

        price: 1.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJB_sm7hIyOqPXmMq3eqWNU6dNoteXA54vwxlfmqks9Zj_0JoWddFA7YAuCqAXvl-a9hce56pvMm3tlvHYq5C7bnhKpwUYbUOnIySQ"

      },
      weap18: {
        name: "StatTrak™ Galil AR | Shattered WW",

        price: 1.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJB_sm7hIyOqPXmMq3eqWZU7Mxkh9bN9J7yjRrl-UVrMWmiLI6ccgJrMgnT-AK7k7ro08S86cvLyiBgsiYn4XzanxCxn1gSObBepbJw"

      },
      weap19: {
        name: "StatTrak™ Galil AR | Shattered FT",

        price: 1.72,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJB_sm7hIyOqPXmMq3eqWZU7Mxkh9bN9J7yjRrl-UVrMWmiLI6ccgJrMgnT-AK7k7ro08S86cvLyiBgsiYn4XzanxCxn1gSObBepbJw"

      },
      weap20: {
        name: "StatTrak™ Galil AR | Shattered MW",

        price: 2.71,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJB_sm7hIyOqPXmMq3eqWdY781lteXA54vwxlK3rUFpa2v0d4bAJA42MwmD_QS7k-7qg5Hp78nMmHU36HV35X7alhSpwUYbQZ2Q3_0"

      },
      weap21: {
        name: "StatTrak™ Galil AR | Shattered FN",

        price: 23.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJB_sm7hIyOqPXmMq3eqWdY781lteXA54vwxlK3rUFpa2v0d4bAJA42MwmD_QS7k-7qg5Hp78nMmHU36HV35X7alhSpwUYbQZ2Q3_0"

      },
      weap22: {
        name: "StatTrak™ G3SG1 | Demeter BS",
        price: 1.74,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf2-r3czFX6cy5mJmMmPnLManQgGRu4MBwnPD--Y3nj1H6_UJuNT_yLI6XdlI-ZgmC-Qe9yefn08XvuJ_Lmnpk6Cgqty7fmkTmhgYMMLLE9hNWUw"
      },
      weap23: {
        name: "StatTrak™ G3SG1 | Demeter WW",
        price: 1.77,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf2-r3czFX6cy5mJmMmPnLManQgGRu5cB1g_zMyoD0mlOx5Rc-YmGhLYSdewE6ZwvUrgS7l-zs1sC9uZrPyCYxvXUhsX_amxTmhh5SLrs4gg-Li9w"
      },
      weap24: {
        name: "StatTrak™ G3SG1 | Demeter FT",
        price: 1.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf2-r3czFX6cy5mJmMmPnLManQgGRu5cB1g_zMyoD0mlOx5Rc-YmGhLYSdewE6ZwvUrgS7l-zs1sC9uZrPyCYxvXUhsX_amxTmhh5SLrs4gg-Li9w"
      },
      weap25: {
        name: "StatTrak™ G3SG1 | Demeter MW",
        price: 2.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf2-r3czFX6cy5mJmMmPnLManQgGRu5Mx2gv3--Y3nj1H6_UVva2_xJ9eRewE3ZFnSqAO-xea51JS-6pScmnJl6yVx5H7anUaw1AYMMLLJ4W7Vxw"
      },
      weap26: {
        name: "StatTrak™ G3SG1 | Demeter FN",
        price: 31.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf2-r3czFX6cy5mJmMmPnLManQgGRu5Mx2gv3--Y3nj1H6_UVva2_xJ9eRewE3ZFnSqAO-xea51JS-6pScmnJl6yVx5H7anUaw1AYMMLLJ4W7Vxw"
      },
      weap27: {
        name: "StatTrak™ M4A1-S | Bright Water FT",
        price: 15.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ElPL1PYTThGpH5_p8j-3I4IHKhFWmrBZyNmH6cdScd1c_MlnU-Fm_wu25jMW5vpydynE3snUmtn3cnBLkhh0ebvsv26IkUFORWw"
      },
      weap28: {
        name: "StatTrak™ M4A1-S | Bright Water MW",
        price: 18.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ElPL1PYTThGpH5_p9g-7J4bP5iUazrl1rMmD3JoKRew88Z1nV-VS5xOzpjMfqvZrNznFg73Rx4i2IyxDh0E0ecKUx0mgVIkh6"
      },
      weap29: {
        name: "StatTrak™ M4A4 | Zirka WW",

        price: 15.09,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zbZTxQ096klZaEqPrxN7LEm1Rd6dd2j6eT8I-iiQK2rUo6YWv0cNWVcgM_aV2GrwPrlbrvhpK1tZ7Mz3tj6SJx-z-DyOOk6P2x"
      },
      weap30: {
        name: "StatTrak™ M4A4 | Zirka FT",

        price: 14.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zbZTxQ096klZaEqPrxN7LEm1Rd6dd2j6eT8I-iiQK2rUo6YWv0cNWVcgM_aV2GrwPrlbrvhpK1tZ7Mz3tj6SJx-z-DyOOk6P2x"
      },
      weap31: {
        name: "StatTrak™ M4A4 | Zirka MW",

        price: 15.56,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zbZTxQ096klZaEqPv9NLPFqWdQ-sJ0xO2V9NmjiVax80tpMmiiJIXAIwc5YgnWqwDrk-q5hJbu78iazyNj6SI8pSGKHzKMZwk"
      },
      weap32: {
        name: "StatTrak™ M4A4 | Zirka FN",

        price: 90.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhzw8zbZTxQ096klZaEqPv9NLPFqWdQ-sJ0xO2V9NmjiVax80tpMmiiJIXAIwc5YgnWqwDrk-q5hJbu78iazyNj6SI8pSGKHzKMZwk"
      },
      weap33: {
        name: "StatTrak™ MAC-10 | Graven BS",

        price: 13.61,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3dClB5Nmyq42KlKakDLnDl31e1810i__YyoD0mlOx5RZra2D7ItWddwM6NQrT-lG4k-7p1sC5tJXAzCdguCgrsXaPmhblgRhSLrs4X6WYu8U"

      },
      weap34: {
        name: "StatTrak™ MAC-10 | Graven WW",

        price: 13.84,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3dClB5Nmyq42KlKakDLnDl31e18h0juDU-LP5iUazrl1oZD3zJNSRegdsZlDTqAXtk-fs0Za9tJjKyXU3uSgq5nzcyh2_hUkZcKUx0j6hz7ID"

      },
      weap35: {
        name: "StatTrak™ MAC-10 | Graven FT",

        price: 12.46,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3dClB5Nmyq42KlKakDLnDl31e18h0juDU-LP5iUazrl1oZD3zJNSRegdsZlDTqAXtk-fs0Za9tJjKyXU3uSgq5nzcyh2_hUkZcKUx0j6hz7ID"

      },
      weap36: {
        name: "StatTrak™ MAC-10 | Graven MW",

        price: 18.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3dClB5Nmyq42KlKakDLnDl31e18l4jeHVyoD0mlOx5UZlYj-gdtXAIw43Yl7V-QXvkOvth8TttZSbzCdj7yh2sHvayxGzgxtSLrs4Lr1PcT8"

      },
      weap37: {
        name: "StatTrak™ MAC-10 | Graven FN",

        price: 139.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0uL3dClB5Nmyq42KlKakDLnDl31e18l4jeHVyoD0mlOx5UZlYj-gdtXAIw43Yl7V-QXvkOvth8TttZSbzCdj7yh2sHvayxGzgxtSLrs4Lr1PcT8"

      },
      weap38: {
        name: "StatTrak™ USP-S | Overgrowth BS",


        price: 13.71,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5OCkvDxDLnDl31e1810i__YyoD0mlOx5RI_ZW_3JNOUew42aAvRqQLvwerrh8Lo6cmbmnZguSJwtHbbmkbmgBFSLrs4DZ6YGxE"

      },
      weap39: {
        name: "StatTrak™ USP-S | Overgrowth WW",


        price: 13.75,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5OCkvDxDLnDl31e18h0juDU-LP5iUazrl1rY2-nctOSdAA2Mg6E_gW5yLu515HptMmcwXdquHYq7CvbnhK210ofcKUx0vvw7Doa"

      },
      weap40: {
        name: "StatTrak™ USP-S | Overgrowth FT",


        price: 15.77,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5OCkvDxDLnDl31e18h0juDU-LP5iUazrl1rY2-nctOSdAA2Mg6E_gW5yLu515HptMmcwXdquHYq7CvbnhK210ofcKUx0vvw7Doa"

      },
      weap41: {
        name: "StatTrak™ USP-S | Overgrowth MW",


        price: 33.75,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5OCkvDxDLnDl31e18l4jeHVyoD0mlOx5UZtZDv7LdOSelRoNFCCqwW5kr_u1Mfuu8idn3M3uiJz4HmPnUHmgx5SLrs4BeHLjR0"

      },
      weap42: {
        name: "StatTrak™ USP-S | Overgrowth FN",


        price: 303.64,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5OCkvDxDLnDl31e18l4jeHVyoD0mlOx5UZtZDv7LdOSelRoNFCCqwW5kr_u1Mfuu8idn3M3uiJz4HmPnUHmgx5SLrs4BeHLjR0"

      },
      weap43: {
        name: "StatTrak™ P90 | Emerald Dragon BS",

        price: 67.74,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PfacDpN4uOmzdC0leX1JbTunm5Q_txOhujT8om73gey-URlaziidtTDIFQ4YFqB-Vjoxe_t056-tZnOnHcyuyUl7XzUygv3309dcAEP7w"

      },
      weap44: {
        name: "StatTrak™ P90 | Emerald Dragon WW",

        price: 99.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PfacDpN4uOmzdC0leX1JbTum25V4dB8teXA54vwxgTm_hFqNjzzJI_DcA43M1uDqQW8w-rp1JG_tZqfmCM1vyQgt3vazhepwUYb67ogGAs"

      },
      weap45: {
        name: "StatTrak™ P90 | Emerald Dragon FT",

        price: 79.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PfacDpN4uOmzdC0leX1JbTum25V4dB8teXA54vwxgTm_hFqNjzzJI_DcA43M1uDqQW8w-rp1JG_tZqfmCM1vyQgt3vazhepwUYb67ogGAs"

      },
      weap46: {
        name: "StatTrak™ P90 | Emerald Dragon MW",

        price: 99.33,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PfacDpN4uOmzdC0leX1JbTummJW4NFOhujT8om72gTkrhVpYmqicYScI1M5Z13RqwW9l-3u0JC07pibyHpluCcr4HjfyQv33082TFpJRA"

      },
      weap47: {
        name: "StatTrak™ P90 | Emerald Dragon FN",

        price: 389.42,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17PfacDpN4uOmzdC0leX1JbTummJW4NFOhujT8om72gTkrhVpYmqicYScI1M5Z13RqwW9l-3u0JC07pibyHpluCcr4HjfyQv33082TFpJRA"

      },
      weap48: {
        name: "StatTrak™ P2000 | Ocean Foam MW",

        price: 148.98,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfAJN_8-_kpm0lfvhNoTBxDsBuPpzmOjX-rP5gVO8vywwMiukcZicc1A8Y13W-VToxrvr1J-0us_MyCdjs3JwtH7dmUbmh0lIPLNo0afMVxzAUPnKUIAd"

      },
      weap49: {
        name: "StatTrak™ P2000 | Ocean Foam FN",

        price: 170.71,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJfAJN_8-_kpm0lfvhNoTBxDsBuPpzmOjX-rP5gVO8vywwMiukcZicc1A8Y13W-VToxrvr1J-0us_MyCdjs3JwtH7dmUbmh0lIPLNo0afMVxzAUPnKUIAd"

      },
      weap50: {
        name: "StatTrak™ AWP | Graphite MW",

        price: 162.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7PDaZDBS4NmJlpKKgfjLP7LWnn9u5MRjjeyPoIqg0VCx-UFrN2v7JNCWIQVsYlGGqwS5lOrm1MW9uJ7Kynow6yVw52GdwULDeIeGVQ"
      },
      weap51: {
        name: "StatTrak™ AWP | Graphite FN",

        price: 196.79,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7PDaZDBS4NmJlpKKgfjLP7LWnn9u5MRjjeyPoIqg0VCx-UFrN2v7JNCWIQVsYlGGqwS5lOrm1MW9uJ7Kynow6yVw52GdwULDeIeGVQ"
      },
      weap52: {
        name: "StatTrak™ Desert Eagle | Golden Koi MW",

        price: 174.73,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTi5B7dCzh7-JhfbiPITdn2xZ_Pp9i_vG8MKji1a1_0VqamymI4LEelRrNFHT-ATvyO680Me-uMjIzXQw6HV04CragVXp1igFofN6"

      },
      weap53: {
        name: "StatTrak™ Desert Eagle | Golden Koi FN",

        price: 124.66,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTi5B7dCzh7-JhfbiPITdn2xZ_Pp9i_vG8MKji1a1_0VqamymI4LEelRrNFHT-ATvyO680Me-uMjIzXQw6HV04CragVXp1igFofN6"

      },
      weap54: {
        name: "StatTrak™ AK-47 | Fire Serpent BS",

        price: 375.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teHE9Jrst1i1uRQ5fW3yI9WRcw83YViCr1DswO680JW57cjPwXcwvXQrtHbUmByzgkkZOuJxxavJ1uEsotc"

      },
      weap55: {
        name: "StatTrak™ AK-47 | Fire Serpent WW",

        price: 586.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teTE8YXghWu4qgE7NnfzdtCTIQM-ZFnWqFLqyb270ZHt6MyanHMxvHYitHzVzBHk1RtOarc8m7XAHlYw1xU4"

      },
      weap56: {
        name: "StatTrak™ AK-47 | Fire Serpent FT",

        price: 620.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teTE8YXghWu4qgE7NnfzdtCTIQM-ZFnWqFLqyb270ZHt6MyanHMxvHYitHzVzBHk1RtOarc8m7XAHlYw1xU4"

      },
      weap57: {
        name: "StatTrak™ AK-47 | Fire Serpent MW",

        price: 1033.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teXI8oTht1i1uRQ5fWDwLYbAdVBqYVHRrwC2kO7rhpLq6J_IzXE2unFxs3-JmkG200ofZ-JxxavJKZiOt4k"

      },
      weap58: {
        name: "StatTrak™ AK-47 | Fire Serpent FN",

        price: 4262.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz56P7fiDzRyTQLLE6VNWecq8Qb4NiY5vJBcVsW34bQ5JVW47Mapb-FuZ41SFsPZWqOBMF3940pt0akML5GKpHy73yztOTsKCkC9-j8BzOfV6OFihXFWHSb0S-ZgUA"

      }
	}
  },
  case4: {
    milspec: {
      weap1: {
        name: "P250 | Hive FT",

        price: 1.03,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszadDlK6cSJmYWPnuL5DLfQhGxUppByiO-U8dj22AHnrUY_ZTj6IYGXelc5aVDTr1Lsw--80cDuu5vOnHN9-n51QkUnVCE"

      },
      weap2: {
        name: "P250 | Hive MW",

        price: 1.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszadDlK6cSJmImMn-PLP7rDkW4fuJwo2rCT9o_z3QLg-Eo-amvxdoOUdwA3Mg3Y_Qe8l-fvjcfu787IwGwj5Hf2OVCoGA"

      },
      weap3: {
        name: "P250 | Hive FN",

        price: 1.28,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszadDlK6cSJmImMn-PLP7rDkW4fuJwo2rCT9o_z3QLg-Eo-amvxdoOUdwA3Mg3Y_Qe8l-fvjcfu787IwGwj5Hf2OVCoGA"

      },
      weap4: {
        name: "FAMAS | Hexane WW",

        price: 1.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3czFX6dSzjL-GkvP9JrbummpD78A_2LGZotqkigDk_hBqZ2CiJ4XBew5oZ1rW-Va_wu_ohZPotc7KzHY3vT5iuyh4z99XmA"

      },
      weap5: {
        name: "FAMAS | Hexane FT",

        price: 0.96,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3czFX6dSzjL-GkvP9JrbummpD78A_2LGZotqkigDk_hBqZ2CiJ4XBew5oZ1rW-Va_wu_ohZPotc7KzHY3vT5iuyh4z99XmA"

      },
      weap6: {
        name: "FAMAS | Hexane MW",

        price: 1.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3czFX6dSzjL-HnvD8J4Tdl3lW7Yt3j7GWotqmigfnrhJkam_wd9CddVM3M1CGrlbsyLy51p-8vZmdznZkpGB8suG_AMWj"

      },
      weap7: {
        name: "FAMAS | Hexane FN",

        price: 1.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3czFX6dSzjL-HnvD8J4Tdl3lW7Yt3j7GWotqmigfnrhJkam_wd9CddVM3M1CGrlbsyLy51p-8vZmdznZkpGB8suG_AMWj"

      },
      weap8: {
        name: "Tec-9 | Blue Titanium FN",

        price: 1.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3czceClD4tWjmdPbgcj4OrzZglRd6dd2j6eWo9yi0ATi_kFvZjj6LYDBJA4_aVyC_Fm6wOvm0cDp6ZqcnyE3vyMi-z-DyOcnN3Wc"

      },
      weap9: {
        name: "SCAR-20 | Crimson Web BS",

        price: 0.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTipH7s-JkIGZnPLmDLPUl31I18lwmO7Eu97zjAbiqRZtY2ChctDEJw86aVDQ_Vi7l7rohcW6vcmfm3Ri73Qj7XnD30vgGSHMmYo"

      },
      weap10: {
        name: "SCAR-20 | Crimson Web WW",

        price: 0.93,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTipH7s-JkIGZnPLmDLbUkmJE5fp9i_vG8ML02QLg-BU6ZGmgcobDdAJtM1uF8lfok--715Xu7pmdzCNiuXIq4yrdgVXp1sWRAJNm"

      },
      weap11: {
        name: "SCAR-20 | Crimson Web FT",

        price: 0.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTipH7s-JkIGZnPLmDLbUkmJE5fp9i_vG8ML02QLg-BU6ZGmgcobDdAJtM1uF8lfok--715Xu7pmdzCNiuXIq4yrdgVXp1sWRAJNm"

      },
      weap12: {
        name: "SCAR-20 | Crimson Web MW",

        price: 1.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTipH7s-JkIGZnPLmDLfYkWNF18lwmO7Eu9Tw2AKx80RkMGvxdo6XIQBsM1nQ_lTow-i6hMTu75zAy3Q163Vxs33D30vgugbUquA"

      },
      weap13: {
        name: "SCAR-20 | Crimson Web FN",

        price: 4.06,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTipH7s-JkIGZnPLmDLfYkWNF18lwmO7Eu9Tw2AKx80RkMGvxdo6XIQBsM1nQ_lTow-i6hMTu75zAy3Q163Vxs33D30vgugbUquA"

      },
      weap14: {
        name: "M4A1-S | Blood Tiger FT",

        price: 2.13,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ZkvPgOrzUhFRc7cF4n-T--Y3nj1H6_hI4Zzj0JYWRIVM9MAuErla6wrjq1MC8upvLyndru3N2tHvVyxe-iAYMMLLRM4KOIA"

      },
      weap15: {
        name: "M4A1-S | Blood Tiger MW",

        price: 2.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ZkvPgOrzUhFRd4cJ5ntbN9J7yjRrkqUdsMmzydoaVcAZoMFnX8lDqlbzohpC06Z6bynswuiMg43yPnUHjn1gSOeB59EOh"

      },
      weap16: {
        name: "M4A1-S | Blood Tiger FN",

        price: 3.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ZkvPgOrzUhFRd4cJ5ntbN9J7yjRrkqUdsMmzydoaVcAZoMFnX8lDqlbzohpC06Z6bynswuiMg43yPnUHjn1gSOeB59EOh"

      }
    },
    restricted: {
      weap1: {
        name: "Nova | Graphite MW",

        price: 1.18,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhh3szLYyhP_NCzq4yCkP_gDLfQhGxUpsAl3OvA99zxiwyy8xU5YmmhLIXGcw5rNVGG8wW3yOrqhpO-u5XImCR9-n51AYns0AU"

      },
      weap2: {
        name: "Nova | Graphite FN",

        price: 1.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhh3szLYyhP_NCzq4yCkP_gDLfQhGxUpsAl3OvA99zxiwyy8xU5YmmhLIXGcw5rNVGG8wW3yOrqhpO-u5XImCR9-n51AYns0AU"

      },
      weap3: {
        name: "Five-SeveN | Case Hardened BS",

        price: 3.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT09O_mIWPqP_xMq3IqWdQ-sJ0xO_EpdWtjVLj_RFkNmj7LY_AIFU-YgvV-lW_wO2508K0tMvOznsy6HQ8pSGK7Z0hOYU"

      },
      weap4: {
        name: "Five-SeveN | Case Hardened WW",

        price: 3.82,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT09O_mIWPqPrxN7LEm1Rd6dd2j6eTot723gaw8ks4Nz3zLY7DdABqaF-F_VO3lefp18Xv6J7NzXNmsyZz-z-DyJbRI63w"

      },
      weap5: {
        name: "Five-SeveN | Case Hardened FT",

        price: 4.03,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT09O_mIWPqPrxN7LEm1Rd6dd2j6eTot723gaw8ks4Nz3zLY7DdABqaF-F_VO3lefp18Xv6J7NzXNmsyZz-z-DyJbRI63w"

      },
      weap6: {
        name: "Five-SeveN | Case Hardened MW",

        price: 6.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT09O_mIWPqPv9NLPFqWdQ-sJ0xO_F9I2l0QHg_kBlZWyhJtTAewVoaQmB81HvlOrpjMK1vpufmCFn7yc8pSGKb-AzS44"

      },
      weap7: {
        name: "Five-SeveN | Case Hardened FN",

        price: 12.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT09O_mIWPqPv9NLPFqWdQ-sJ0xO_F9I2l0QHg_kBlZWyhJtTAewVoaQmB81HvlOrpjMK1vpufmCFn7yc8pSGKb-AzS44"

      },
      weap8: {
        name: "Dual Berettas | Hemoglobin FT",

        price: 1.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0v73fi5R5dqvq5KOk8j5Nr_Yg2Zu5MRjjeyP99yli1bn_EJrZzildYOVIw9qMg6BrAPsk-bvhcS6vp3Iy3Bh6Clz52GdwULtIJj5Pg"

      },
      weap9: {
        name: "Dual Berettas | Hemoglobin MW",

        price: 1.03,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0v73fi5R5dqvq5KOk8j4OrzZglRd6dd2j6eY8Y2n2VDnrxBrMW_3LYOXJg47YlDR8lG5xLjqh5LttcjNmnM37HQh-z-DyPmgD_Ot"

      },
      weap10: {
        name: "Dual Berettas | Hemoglobin FN",

        price: 1.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0v73fi5R5dqvq5KOk8j4OrzZglRd6dd2j6eY8Y2n2VDnrxBrMW_3LYOXJg47YlDR8lG5xLjqh5LttcjNmnM37HQh-z-DyPmgD_Ot"

      },
      weap11: {
        name: "MP9 | Hypnotic MW",


        price: 3.38,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZh7OXNYylL69OJmImMn-PLP7rDkW4fvJRw3biYoImliQK2qkdoMGuld4CRJgA6Mw2F-le9xOrrgcS875jPwGwj5HcZzPQRPA"

      },
      weap12: {
        name: "MP9 | Hypnotic FN",


        price: 1.42,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZh7OXNYylL69OJmImMn-PLP7rDkW4fvJRw3biYoImliQK2qkdoMGuld4CRJgA6Mw2F-le9xOrrgcS875jPwGwj5HcZzPQRPA"

      }
    },
    classified: {
      weap1: {
        name: "P90 | Cold Blooded MW",

        price: 7.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZt7ODEeClK6c6JhNnbqPv9NLPFqWdQ-sJ0xLyZpo2s2Ffi_UtpazqlJNXGcAY8ZFuE-Ae6kO690Je9upWcmCYx6XE8pSGKTc8IZr4"

      },
      weap2: {
        name: "P90 | Cold Blooded FN",

        price: 6.78,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZt7ODEeClK6c6JhNnbqPv9NLPFqWdQ-sJ0xLyZpo2s2Ffi_UtpazqlJNXGcAY8ZFuE-Ae6kO690Je9upWcmCYx6XE8pSGKTc8IZr4"

      },
      weap3: {
        name: "USP-S | Serum FT",

        price: 6.98,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q4WHkvTgIbLSqXlU7Pp8j-3I4IHKhFWmrBZyNmmlIY6QcQ9tM1nU-wK7lee8gsTp75rPm3oxunN253yLzhCzgUoaZvsv26JFhh_HDg"
      },
      weap4: {
        name: "USP-S | Serum MW",

        price: 6.68,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q4WHkvTgIbLSqXlU7Pp9g-7J4bP5iUazrl05NWHzJIPHJ1RvZlzU_1nokLy90J7qupvNnHIxuCEit32IyRbmgRhLcKUx0oC1LZkm"
      },
      weap5: {
        name: "USP-S | Serum FN",

        price: 7.75,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q4WHkvTgIbLSqXlU7Pp9g-7J4bP5iUazrl05NWHzJIPHJ1RvZlzU_1nokLy90J7qupvNnHIxuCEit32IyRbmgRhLcKUx0oC1LZkm"
      }
    },
    covert: {
      weap1: {
        name: "SSG 08 | Blood in the Water FT",
        price: 29.45,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3YjVD_teJmYWPnuL5DLfQhGxUppdw0-3Hodyj3gThrhJuNT-gJ4-XJlc9ZwuD_1Low7u60JO-6pjPynp9-n51FR7Bxmg"
      },
      weap2: {
        name: "SSG 08 | Blood in the Water MW",
        price: 29.14,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3YjVD_teJmImMn-PLP7rDkW4fuJUp27vCp9z00A3i80drY2jwdobEcA8_YgnR_Ffox7y-h5S87Z_MwWwj5Hf8twPTSw"
      },
      weap3: {
        name: "SSG 08 | Blood in the Water FN",
        price: 45.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3YjVD_teJmImMn-PLP7rDkW4fuJUp27vCp9z00A3i80drY2jwdobEcA8_YgnR_Ffox7y-h5S87Z_MwWwj5Hf8twPTSw"
      }
    },
	stattrak: {
      weap1: {
        name: "StatTrak™ P250 | Hive FT",

        price: 2.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszadDlK6cSJmYWPnuL5DLfQhGxUppByiO-U8dj22AHnrUY_ZTj6IYGXelc5aVDTr1Lsw--80cDuu5vOnHN9-n51QkUnVCE"

      },
      weap2: {
        name: "StatTrak™ P250 | Hive MW",

        price: 2.60,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszadDlK6cSJmImMn-PLP7rDkW4fuJwo2rCT9o_z3QLg-Eo-amvxdoOUdwA3Mg3Y_Qe8l-fvjcfu787IwGwj5Hf2OVCoGA"

      },
      weap3: {
        name: "StatTrak™ P250 | Hive FN",

        price: 4.19,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhoyszadDlK6cSJmImMn-PLP7rDkW4fuJwo2rCT9o_z3QLg-Eo-amvxdoOUdwA3Mg3Y_Qe8l-fvjcfu787IwGwj5Hf2OVCoGA"

      },
      weap4: {
        name: "StatTrak™ FAMAS | Hexane WW",

        price: 2.13,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3czFX6dSzjL-GkvP9JrbummpD78A_2LGZotqkigDk_hBqZ2CiJ4XBew5oZ1rW-Va_wu_ohZPotc7KzHY3vT5iuyh4z99XmA"

      },
      weap5: {
        name: "StatTrak™ FAMAS | Hexane FT",

        price: 1.79,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3czFX6dSzjL-GkvP9JrbummpD78A_2LGZotqkigDk_hBqZ2CiJ4XBew5oZ1rW-Va_wu_ohZPotc7KzHY3vT5iuyh4z99XmA"

      },
      weap6: {
        name: "StatTrak™ FAMAS | Hexane MW",

        price: 2.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3czFX6dSzjL-HnvD8J4Tdl3lW7Yt3j7GWotqmigfnrhJkam_wd9CddVM3M1CGrlbsyLy51p-8vZmdznZkpGB8suG_AMWj"

      },
      weap7: {
        name: "StatTrak™ FAMAS | Hexane FN",

        price: 4.76,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf2-r3czFX6dSzjL-HnvD8J4Tdl3lW7Yt3j7GWotqmigfnrhJkam_wd9CddVM3M1CGrlbsyLy51p-8vZmdznZkpGB8suG_AMWj"

      },
      weap8: {
        name: "StatTrak™ Tec-9 | Blue Titanium FN",

        price: 4.08,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3czceClD4tWjmdPbgcj4OrzZglRd6dd2j6eWo9yi0ATi_kFvZjj6LYDBJA4_aVyC_Fm6wOvm0cDp6ZqcnyE3vyMi-z-DyOcnN3Wc"

      },
      weap9: {
        name: "StatTrak™ SCAR-20 | Crimson Web BS",

        price: 1.35,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTipH7s-JkIGZnPLmDLPUl31I18lwmO7Eu97zjAbiqRZtY2ChctDEJw86aVDQ_Vi7l7rohcW6vcmfm3Ri73Qj7XnD30vgGSHMmYo"

      },
      weap10: {
        name: "StatTrak™ SCAR-20 | Crimson Web WW",

        price: 1.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTipH7s-JkIGZnPLmDLbUkmJE5fp9i_vG8ML02QLg-BU6ZGmgcobDdAJtM1uF8lfok--715Xu7pmdzCNiuXIq4yrdgVXp1sWRAJNm"

      },
      weap11: {
        name: "StatTrak™ SCAR-20 | Crimson Web FT",

        price: 1.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTipH7s-JkIGZnPLmDLbUkmJE5fp9i_vG8ML02QLg-BU6ZGmgcobDdAJtM1uF8lfok--715Xu7pmdzCNiuXIq4yrdgVXp1sWRAJNm"

      },
      weap12: {
        name: "StatTrak™ SCAR-20 | Crimson Web MW",

        price: 3.79,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTipH7s-JkIGZnPLmDLfYkWNF18lwmO7Eu9Tw2AKx80RkMGvxdo6XIQBsM1nQ_lTow-i6hMTu75zAy3Q163Vxs33D30vgugbUquA"

      },
      weap13: {
        name: "StatTrak™ SCAR-20 | Crimson Web FN",

        price: 26.45,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PvRTipH7s-JkIGZnPLmDLfYkWNF18lwmO7Eu9Tw2AKx80RkMGvxdo6XIQBsM1nQ_lTow-i6hMTu75zAy3Q163Vxs33D30vgugbUquA"

      },
      weap14: {
        name: "StatTrak™ M4A1-S | Blood Tiger FT",

        price: 9.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ZkvPgOrzUhFRc7cF4n-T--Y3nj1H6_hI4Zzj0JYWRIVM9MAuErla6wrjq1MC8upvLyndru3N2tHvVyxe-iAYMMLLRM4KOIA"

      },
      weap15: {
        name: "StatTrak™ M4A1-S | Blood Tiger MW",

        price: 9.08,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ZkvPgOrzUhFRd4cJ5ntbN9J7yjRrkqUdsMmzydoaVcAZoMFnX8lDqlbzohpC06Z6bynswuiMg43yPnUHjn1gSOeB59EOh"

      },
      weap16: {
        name: "StatTrak™ M4A1-S | Blood Tiger FN",

        price: 12.47,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO-jb-ZkvPgOrzUhFRd4cJ5ntbN9J7yjRrkqUdsMmzydoaVcAZoMFnX8lDqlbzohpC06Z6bynswuiMg43yPnUHjn1gSOeB59EOh"

      },
      weap17: {
        name: "StatTrak™ Nova | Graphite MW",

        price: 4.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhh3szLYyhP_NCzq4yCkP_gDLfQhGxUpsAl3OvA99zxiwyy8xU5YmmhLIXGcw5rNVGG8wW3yOrqhpO-u5XImCR9-n51AYns0AU"

      },
      weap18: {
        name: "StatTrak™ Nova | Graphite FN",

        price: 4.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhh3szLYyhP_NCzq4yCkP_gDLfQhGxUpsAl3OvA99zxiwyy8xU5YmmhLIXGcw5rNVGG8wW3yOrqhpO-u5XImCR9-n51AYns0AU"

      },
      weap19: {
        name: "StatTrak™ Five-SeveN | Case Hardened BS",

        price: 11.24,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT09O_mIWPqP_xMq3IqWdQ-sJ0xO_EpdWtjVLj_RFkNmj7LY_AIFU-YgvV-lW_wO2508K0tMvOznsy6HQ8pSGK7Z0hOYU"

      },
      weap20: {
        name: "StatTrak™ Five-SeveN | Case Hardened WW",

        price: 11.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT09O_mIWPqPrxN7LEm1Rd6dd2j6eTot723gaw8ks4Nz3zLY7DdABqaF-F_VO3lefp18Xv6J7NzXNmsyZz-z-DyJbRI63w"

      },
      weap21: {
        name: "StatTrak™ Five-SeveN | Case Hardened FT",

        price: 16.96,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT09O_mIWPqPrxN7LEm1Rd6dd2j6eTot723gaw8ks4Nz3zLY7DdABqaF-F_VO3lefp18Xv6J7NzXNmsyZz-z-DyJbRI63w"

      },
      weap22: {
        name: "StatTrak™ Five-SeveN | Case Hardened MW",

        price: 23.64,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT09O_mIWPqPv9NLPFqWdQ-sJ0xO_F9I2l0QHg_kBlZWyhJtTAewVoaQmB81HvlOrpjMK1vpufmCFn7yc8pSGKb-AzS44"

      },
      weap23: {
        name: "StatTrak™ Five-SeveN | Case Hardened FN",

        price: 74.64,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT09O_mIWPqPv9NLPFqWdQ-sJ0xO_F9I2l0QHg_kBlZWyhJtTAewVoaQmB81HvlOrpjMK1vpufmCFn7yc8pSGKb-AzS44"

      },
      weap24: {
        name: "StatTrak™ Dual Berettas | Hemoglobin FT",

        price: 3.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0v73fi5R5dqvq5KOk8j5Nr_Yg2Zu5MRjjeyP99yli1bn_EJrZzildYOVIw9qMg6BrAPsk-bvhcS6vp3Iy3Bh6Clz52GdwULtIJj5Pg"

      },
      weap25: {
        name: "StatTrak™ Dual Berettas | Hemoglobin MW",

        price: 4.02,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0v73fi5R5dqvq5KOk8j4OrzZglRd6dd2j6eY8Y2n2VDnrxBrMW_3LYOXJg47YlDR8lG5xLjqh5LttcjNmnM37HQh-z-DyPmgD_Ot"

      },
      weap26: {
        name: "StatTrak™ Dual Berettas | Hemoglobin FN",

        price: 5.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0v73fi5R5dqvq5KOk8j4OrzZglRd6dd2j6eY8Y2n2VDnrxBrMW_3LYOXJg47YlDR8lG5xLjqh5LttcjNmnM37HQh-z-DyPmgD_Ot"

      },
      weap27: {
        name: "StatTrak™ MP9 | Hypnotic MW",


        price: 33.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZh7OXNYylL69OJmImMn-PLP7rDkW4fvJRw3biYoImliQK2qkdoMGuld4CRJgA6Mw2F-le9xOrrgcS875jPwGwj5HcZzPQRPA"

      },
      weap28: {
        name: "StatTrak™ MP9 | Hypnotic FN",


        price: 5.75,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZh7OXNYylL69OJmImMn-PLP7rDkW4fvJRw3biYoImliQK2qkdoMGuld4CRJgA6Mw2F-le9xOrrgcS875jPwGwj5HcZzPQRPA"

      },
      weap29: {
        name: "StatTrak™ P90 | Cold Blooded MW",

        price: 30.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZt7ODEeClK6c6JhNnbqPv9NLPFqWdQ-sJ0xLyZpo2s2Ffi_UtpazqlJNXGcAY8ZFuE-Ae6kO690Je9upWcmCYx6XE8pSGKTc8IZr4"

      },
      weap30: {
        name: "StatTrak™ P90 | Cold Blooded FN",

        price: 34.09,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZt7ODEeClK6c6JhNnbqPv9NLPFqWdQ-sJ0xLyZpo2s2Ffi_UtpazqlJNXGcAY8ZFuE-Ae6kO690Je9upWcmCYx6XE8pSGKTc8IZr4"

      },
      weap31: {
        name: "StatTrak™ USP-S | Serum FT",

        price: 20.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q4WHkvTgIbLSqXlU7Pp8j-3I4IHKhFWmrBZyNmmlIY6QcQ9tM1nU-wK7lee8gsTp75rPm3oxunN253yLzhCzgUoaZvsv26JFhh_HDg"
      },
      weap32: {
        name: "StatTrak™ USP-S | Serum MW",

        price: 24.84,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q4WHkvTgIbLSqXlU7Pp9g-7J4bP5iUazrl05NWHzJIPHJ1RvZlzU_1nokLy90J7qupvNnHIxuCEit32IyRbmgRhLcKUx0oC1LZkm"
      },
      weap33: {
        name: "StatTrak™ USP-S | Serum FN",

        price: 37.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ0927q4WHkvTgIbLSqXlU7Pp9g-7J4bP5iUazrl05NWHzJIPHJ1RvZlzU_1nokLy90J7qupvNnHIxuCEit32IyRbmgRhLcKUx0oC1LZkm"
      },
      weap34: {
        name: "StatTrak™ SSG 08 | Blood in the Water FT",
        price: 146.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3YjVD_teJmYWPnuL5DLfQhGxUppdw0-3Hodyj3gThrhJuNT-gJ4-XJlc9ZwuD_1Low7u60JO-6pjPynp9-n51FR7Bxmg"
      },
      weap35: {
        name: "StatTrak™ SSG 08 | Blood in the Water MW",
        price: 129.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3YjVD_teJmImMn-PLP7rDkW4fuJUp27vCp9z00A3i80drY2jwdobEcA8_YgnR_Ffox7y-h5S87Z_MwWwj5Hf8twPTSw"
      },
      weap36: {
        name: "StatTrak™ SSG 08 | Blood in the Water FN",
        price: 334.93,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3YjVD_teJmImMn-PLP7rDkW4fuJUp27vCp9z00A3i80drY2jwdobEcA8_YgnR_Ffox7y-h5S87Z_MwWwj5Hf8twPTSw"
      }
    }
  },
  case5: {
    milspec: {
      weap1: {
        name: "Five-SeveN | Nightshade BS",

        price: 0.76,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09q6m5eOheTLO77QgHJu5MRjjeyP9tjw2wO1-0dlMWmiItXBJgc8ZF2EqQLrxLq715DouJrIwHIwvCclsGGdwUKqzk10Hw"

      },
      weap2: {
        name: "Five-SeveN | Nightshade WW",

        price: 0.54,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09q6m5eOheTLPr7Vn35c18lwmO7Eu4_32lK2-RBtYz-mJtOddgA9Zg3W_gfow-q90JPvv5zLnHMw63EhtizD30vgtAhYTdQ"

      },
      weap3: {
        name: "Five-SeveN | Nightshade FT",

        price: 0.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09q6m5eOheTLPr7Vn35c18lwmO7Eu4_32lK2-RBtYz-mJtOddgA9Zg3W_gfow-q90JPvv5zLnHMw63EhtizD30vgtAhYTdQ"

      },
      weap4: {
        name: "Five-SeveN | Nightshade MW",

        price: 0.58,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09q6m5eOheTLP7LWnn9u5MRjjeyPoYqs3FGwrUU9MGnwJtWUd1BrNQmGq1fskO-5h5K-uczNmiNr6HR3sWGdwUIatDTvmQ"

      },
      weap5: {
        name: "Five-SeveN | Nightshade FN",

        price: 0.70,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09q6m5eOheTLP7LWnn9u5MRjjeyPoYqs3FGwrUU9MGnwJtWUd1BrNQmGq1fskO-5h5K-uczNmiNr6HR3sWGdwUIatDTvmQ"

      },
      weap6: {
        name: "P250 | Steel Disruption FT",

        price: 0.36,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szMdS1D-NizmpOOqOT9P63UhFRc7cF4n-T--Y3nj1H6-hFuZzvxJdCSIFU4ZFzT_APvk7_t0JK6tc_AyHpjsnEq5CrdyxW10wYMMLLqTVhcMw"

      },
      weap7: {
        name: "P250 | Steel Disruption MW",

        price: 0.28,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szMdS1D-NizmpOOqOT9P63UhFRd4cJ5ntbN9J7yjRrn_UFuYzvwLIKVew9rNV7RqVPsyLy-g5Lt6pXAwCBrsyJ34S7ZzBC_n1gSOZc29THf"

      },
      weap8: {
        name: "P250 | Steel Disruption FN",

        price: 0.32,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szMdS1D-NizmpOOqOT9P63UhFRd4cJ5ntbN9J7yjRrn_UFuYzvwLIKVew9rNV7RqVPsyLy-g5Lt6pXAwCBrsyJ34S7ZzBC_n1gSOZc29THf"

      },
      weap9: {
        name: "G3SG1 | Azure Zebra FT",

        price: 0.32,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwOP3azhA_t21lY20lfvhNoTck29Y_chOhujT8om72VHj-hU_Nj37doKWJFQ8ZlqC_VnqlO67h8Lt75TAmHphvXFx4C7dlgv330_GRhOoqA"

      },
      weap10: {
        name: "G3SG1 | Azure Zebra MW",

        price: 0.34,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwOP3azhA_t21lY20lfvhNoTdn2xZ_Pp9i_vG8MKh2gXt8hVlMG2gJNTBc1BoaA7V_Fjqx7vohpK075ianCY1viYh5SnYgVXp1mYsRA_Y"

      },
      weap11: {
        name: "G3SG1 | Azure Zebra FN",

        price: 0.34,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwOP3azhA_t21lY20lfvhNoTdn2xZ_Pp9i_vG8MKh2gXt8hVlMG2gJNTBc1BoaA7V_Fjqx7vohpK075ianCY1viYh5SnYgVXp1mYsRA_Y"

      },
      weap12: {
        name: "Nova | Ghost Camo WW",

        price: 2.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhzw8zLcDBN08u5m4S0lfvhNoTck29Y_chOhujT8om7iVbn_EBuZT32dtfAegU7NVjV8lG4yebvjZW_uZWamyZruXUj5CyLywv33089JWNqyw"

      },
      weap13: {
        name: "Nova | Ghost Camo FT",

        price: 0.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhzw8zLcDBN08u5m4S0lfvhNoTck29Y_chOhujT8om7iVbn_EBuZT32dtfAegU7NVjV8lG4yebvjZW_uZWamyZruXUj5CyLywv33089JWNqyw"

      },
      weap14: {
        name: "Nova | Ghost Camo MW",

        price: 0.32,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhzw8zLcDBN08u5m4S0lfvhNoTdn2xZ_Pp9i_vG8MLx3gex-0U9YGGmcoWcdFc3ZV2Erwfqxr3u1MK16MzAmyNks3Z343-JgVXp1jwjyNzI"

      },
      weap15: {
        name: "Nova | Ghost Camo FN",

        price: 0.41,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhzw8zLcDBN08u5m4S0lfvhNoTdn2xZ_Pp9i_vG8MLx3gex-0U9YGGmcoWcdFc3ZV2Erwfqxr3u1MK16MzAmyNks3Z343-JgVXp1jwjyNzI"

      },
      weap16: {
        name: "PP-Bizon | Water Sigil BS",
        price: 0.97,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3ZjxW6c6Jl5KOhOPLO77QgHJu5MRjjeyP893331XgrRBtZmmhcoLAegM2YAmC_Ffrx-a71JS-vJrLmHtr6yMi5WGdwUKpCXEZwQ"
      },
      weap17: {
        name: "PP-Bizon | Water Sigil WW",
        price: 0.58,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3ZjxW6c6Jl5KOhOPLPr7Vn35c18lwmO7Eu9j2jgXh-hJtMmiicNLDcwJvZFHX8gXoybu51JW4vZycwSFivnMn7C7D30vgg1B1LWA"
      },
      weap18: {
        name: "PP-Bizon | Water Sigil FT",
        price: 0.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3ZjxW6c6Jl5KOhOPLPr7Vn35c18lwmO7Eu9j2jgXh-hJtMmiicNLDcwJvZFHX8gXoybu51JW4vZycwSFivnMn7C7D30vgg1B1LWA"
      },
      weap19: {
        name: "PP-Bizon | Water Sigil MW",
        price: 0.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3ZjxW6c6Jl5KOhOPLP7LWnn9u5MRjjeyP9tjx2FW1r0o_MWH0LIGVJA46N1vX-ljol-29jcPv75SfnHZrs3Qq7GGdwUJWqynhYQ"
      },
      weap20: {
        name: "PP-Bizon | Water Sigil FN",
        price: 0.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3ZjxW6c6Jl5KOhOPLP7LWnn9u5MRjjeyP9tjx2FW1r0o_MWH0LIGVJA46N1vX-ljol-29jcPv75SfnHZrs3Qq7GGdwUJWqynhYQ"
      },
      weap21: {
        name: "Galil AR | Blue Titanium FN",
        price: 0.36,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczJfwJW5ci3momemqSkJYTdn2xZ_Pp9i_vG8MKh2gLgrks5MGigcdLHcVRtNFvRq1m3kufsgcW6v52bnXdl7iQq5SzcgVXp1kCDJqwD"
      }
    },
    restricted: {
      weap1: {
        name: "P90 | Blind Spot BS",
        price: 1.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957P7HdS5S48ilq4iOluHtDLfQhGxUpsYo3riWotzw2Qy2-UdoYj-lcYSXIQY5MlDZ_lHqxeu8gcO5v8uYm3Z9-n51FHcoZTw"
      },
      weap2: {
        name: "P90 | Blind Spot WW",
        price: 1.19,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957P7HdS5S48ilq42Ok_7hPoTdl3lW7Ysj3erHptrx0VKw-xVsZGCmIYTBelA3Mw6FqVXqx-q-hcXu7pnBm3pnpGB8sqq5zINz"
      },
      weap3: {
        name: "P90 | Blind Spot FT",
        price: 1.05,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957P7HdS5S48ilq42Ok_7hPoTdl3lW7Ysj3erHptrx0VKw-xVsZGCmIYTBelA3Mw6FqVXqx-q-hcXu7pnBm3pnpGB8sqq5zINz"
      },
      weap4: {
        name: "P90 | Blind Spot MW",
        price: 1.24,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957P7HdS5S48ilq4yCkP_gDLfQhGxUpsQm2rvDrYrwiVLkrkFpZWGmIobAJFQ8MArX-FO2wOe9hZO-vciYzSB9-n51N7wse9o"
      },
      weap5: {
        name: "P90 | Blind Spot FN",
        price: 1.55,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957P7HdS5S48ilq4yCkP_gDLfQhGxUpsQm2rvDrYrwiVLkrkFpZWGmIobAJFQ8MArX-FO2wOe9hZO-vciYzSB9-n51N7wse9o"
      },
      weap6: {
        name: "AK-47 | Blue Laminate WW",

        price: 4.77,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLPr7Vn35c18lwmO7Eu9vw2FHh8hJoZG3zcYSVdlBtaAuCqFi7kO7s1568vJjJwSRrsycksXfD30vgSXhu9Rc"
      },
      weap7: {
        name: "AK-47 | Blue Laminate FT",

        price: 2.67,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLPr7Vn35c18lwmO7Eu9vw2FHh8hJoZG3zcYSVdlBtaAuCqFi7kO7s1568vJjJwSRrsycksXfD30vgSXhu9Rc"
      },
      weap8: {
        name: "AK-47 | Blue Laminate MW",

        price: 2.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLP7LWnn9u5MRjjeyPrIqtjVfh-kNvNj-iIdSSIwZsYlHR8wC_wrzr0cO7tMjImyZluyJz5WGdwUKTUQkCog"
      },
      weap9: {
        name: "AK-47 | Blue Laminate FN",

        price: 3.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLP7LWnn9u5MRjjeyPrIqtjVfh-kNvNj-iIdSSIwZsYlHR8wC_wrzr0cO7tMjImyZluyJz5WGdwUKTUQkCog"
      }
    },
    classified: {
      weap1: {
        name: "FAMAS | Afterimage WW",

        price: 4.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3cy9N59m4q5CKg__LNbrcl3hu5cB1g_zMyoD0mlOx5RFoYzrwLIaXelBvN1_Yr1Polenn1pHttMzMn3tmsnMk5naImBOw0hhSLrs4dAtq-Wc"

      },
      weap2: {
        name: "FAMAS | Afterimage FT",

        price: 2.47,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3cy9N59m4q5CKg__LNbrcl3hu5cB1g_zMyoD0mlOx5RFoYzrwLIaXelBvN1_Yr1Polenn1pHttMzMn3tmsnMk5naImBOw0hhSLrs4dAtq-Wc"

      },
      weap3: {
        name: "FAMAS | Afterimage MW",

        price: 2.94,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3cy9N59m4q5CKg__LNbrcl3hu5Mx2gv3--Y3nj1H6_hdoZmzwLYGWd1I2YlCGrATolezpgZC77ZWaznRk6Ccj7X_azBK_hAYMMLKHDT3r_w"

      },
      weap4: {
        name: "FAMAS | Afterimage FN",

        price: 5.06,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3cy9N59m4q5CKg__LNbrcl3hu5Mx2gv3--Y3nj1H6_hdoZmzwLYGWd1I2YlCGrATolezpgZC77ZWaznRk6Ccj7X_azBK_hAYMMLKHDT3r_w"

      },
      weap5: {
        name: "AWP | Electric Hive WW",

        price: 12.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PvBZzh94dmynZWGqPv1IbzU2DMEv8Rw3-3Epo6giQyxqkFoYGChJ4adcQ46YAzY_1DswObvgMO_u8nXiSw0zFWmqYw"

      },
      weap6: {
        name: "AWP | Electric Hive FT",

        price: 11.33,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PvBZzh94dmynZWGqPv1IbzU2DMEv8Rw3-3Epo6giQyxqkFoYGChJ4adcQ46YAzY_1DswObvgMO_u8nXiSw0zFWmqYw"

      },
      weap7: {
        name: "AWP | Electric Hive MW",

        price: 12.48,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PvBZzh94NWxnJS0m_bmNL6fxDoJsZwk0uyT9Ir02lfi8hA6MD2nLIaScwQ6MlrX8wC-lOjrgJC-uYOJlyVQbQuu3g"

      },
      weap8: {
        name: "AWP | Electric Hive FN",

        price: 15.52,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PvBZzh94NWxnJS0m_bmNL6fxDoJsZwk0uyT9Ir02lfi8hA6MD2nLIaScwQ6MlrX8wC-lOjrgJC-uYOJlyVQbQuu3g"

      },
      weap9: {
        name: "Desert Eagle | Cobalt Disruption FT",

        price: 7.82,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTjlG_N2ikIWFhPLLI77QlWRS4_p8j-3I4IHKhFWmrBZyMG_6LYGVelc9Mw7Wrli4xOy-gpK96JvMm3Q27ykg7HrfmBG-hBpKZvsv26Jt_Dv7IA"

      },
      weap10: {
        name: "Desert Eagle | Cobalt Disruption MW",

        price: 5.38,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTjlG_N2ikIWFhPLLI77QlWRS4_p9g-7J4bP5iUazrl09Z2H1cNSWcwA-MwuEqQe4k73q1JfotJzOwCFnvyBw5X2LmRe3gB1NcKUx0r3Iy7zp"

      },
      weap11: {
        name: "Desert Eagle | Cobalt Disruption FN",

        price: 6.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTjlG_N2ikIWFhPLLI77QlWRS4_p9g-7J4bP5iUazrl09Z2H1cNSWcwA-MwuEqQe4k73q1JfotJzOwCFnvyBw5X2LmRe3gB1NcKUx0r3Iy7zp"
      }
    },
    covert: {
      weap1: {
        name: "M4A4 | X-Ray FT",
        price: 5.95,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszQYzxb09Hiq42Ok_7hPoTdl3lW7Yt027yYoo6h0QWx_hVrNmGld4aRJAc5MwnWrATswbrogMe9u5vBmCFlpGB8sp0wSwbi"
      },
      weap2: {
        name: "M4A4 | X-Ray MW",
        price: 6.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszQYzxb09Hiq4yCkP_gDLfQhGxUpsAo2LDD99-s0QywrUdlY2ugJtTBdFA4NwqC_Va7kru8hZG9uZjBmyN9-n51YAq6eTE"
      },
      weap3: {
        name: "M4A4 | X-Ray FN",
        price: 8.28,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszQYzxb09Hiq4yCkP_gDLfQhGxUpsAo2LDD99-s0QywrUdlY2ugJtTBdFA4NwqC_Va7kru8hZG9uZjBmyN9-n51YAq6eTE"
      }
    },
    stattrak: {
      weap1: {
        name: "StatTrak™ Five-SeveN | Nightshade BS",

        price: 3.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09q6m5eOheTLO77QgHJu5MRjjeyP9tjw2wO1-0dlMWmiItXBJgc8ZF2EqQLrxLq715DouJrIwHIwvCclsGGdwUKqzk10Hw"

      },
      weap2: {
        name: "StatTrak™ Five-SeveN | Nightshade WW",

        price: 1.38,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09q6m5eOheTLPr7Vn35c18lwmO7Eu4_32lK2-RBtYz-mJtOddgA9Zg3W_gfow-q90JPvv5zLnHMw63EhtizD30vgtAhYTdQ"

      },
      weap3: {
        name: "StatTrak™ Five-SeveN | Nightshade FT",

        price: 1.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09q6m5eOheTLPr7Vn35c18lwmO7Eu4_32lK2-RBtYz-mJtOddgA9Zg3W_gfow-q90JPvv5zLnHMw63EhtizD30vgtAhYTdQ"

      },
      weap4: {
        name: "StatTrak™ Five-SeveN | Nightshade MW",

        price: 1.38,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09q6m5eOheTLP7LWnn9u5MRjjeyPoYqs3FGwrUU9MGnwJtWUd1BrNQmGq1fskO-5h5K-uczNmiNr6HR3sWGdwUIatDTvmQ"

      },
      weap5: {
        name: "StatTrak™ Five-SeveN | Nightshade FN",

        price: 2.45,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09q6m5eOheTLP7LWnn9u5MRjjeyPoYqs3FGwrUU9MGnwJtWUd1BrNQmGq1fskO-5h5K-uczNmiNr6HR3sWGdwUIatDTvmQ"

      },
      weap6: {
        name: "StatTrak™ P250 | Steel Disruption FT",

        price: 1.05,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szMdS1D-NizmpOOqOT9P63UhFRc7cF4n-T--Y3nj1H6-hFuZzvxJdCSIFU4ZFzT_APvk7_t0JK6tc_AyHpjsnEq5CrdyxW10wYMMLLqTVhcMw"

      },
      weap7: {
        name: "StatTrak™ P250 | Steel Disruption MW",

        price: 1.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szMdS1D-NizmpOOqOT9P63UhFRd4cJ5ntbN9J7yjRrn_UFuYzvwLIKVew9rNV7RqVPsyLy-g5Lt6pXAwCBrsyJ34S7ZzBC_n1gSOZc29THf"

      },
      weap8: {
        name: "StatTrak™ P250 | Steel Disruption FN",

        price: 1.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szMdS1D-NizmpOOqOT9P63UhFRd4cJ5ntbN9J7yjRrn_UFuYzvwLIKVew9rNV7RqVPsyLy-g5Lt6pXAwCBrsyJ34S7ZzBC_n1gSOZc29THf"

      },
      weap9: {
        name: "StatTrak™ G3SG1 | Azure Zebra FT",

        price: 0.84,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwOP3azhA_t21lY20lfvhNoTck29Y_chOhujT8om72VHj-hU_Nj37doKWJFQ8ZlqC_VnqlO67h8Lt75TAmHphvXFx4C7dlgv330_GRhOoqA"

      },
      weap10: {
        name: "StatTrak™ G3SG1 | Azure Zebra MW",

        price: 0.87,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwOP3azhA_t21lY20lfvhNoTdn2xZ_Pp9i_vG8MKh2gXt8hVlMG2gJNTBc1BoaA7V_Fjqx7vohpK075ianCY1viYh5SnYgVXp1mYsRA_Y"

      },
      weap11: {
        name: "StatTrak™ G3SG1 | Azure Zebra FN",

        price: 1.33,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZfwOP3azhA_t21lY20lfvhNoTdn2xZ_Pp9i_vG8MKh2gXt8hVlMG2gJNTBc1BoaA7V_Fjqx7vohpK075ianCY1viYh5SnYgVXp1mYsRA_Y"

      },
      weap12: {
        name: "StatTrak™ Nova | Ghost Camo WW",

        price: 2.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhzw8zLcDBN08u5m4S0lfvhNoTck29Y_chOhujT8om7iVbn_EBuZT32dtfAegU7NVjV8lG4yebvjZW_uZWamyZruXUj5CyLywv33089JWNqyw"

      },
      weap13: {
        name: "StatTrak™ Nova | Ghost Camo FT",

        price: 0.97,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhzw8zLcDBN08u5m4S0lfvhNoTck29Y_chOhujT8om7iVbn_EBuZT32dtfAegU7NVjV8lG4yebvjZW_uZWamyZruXUj5CyLywv33089JWNqyw"

      },
      weap14: {
        name: "StatTrak™ Nova | Ghost Camo MW",

        price: 0.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhzw8zLcDBN08u5m4S0lfvhNoTdn2xZ_Pp9i_vG8MLx3gex-0U9YGGmcoWcdFc3ZV2Erwfqxr3u1MK16MzAmyNks3Z343-JgVXp1jwjyNzI"

      },
      weap15: {
        name: "StatTrak™ Nova | Ghost Camo FN",

        price: 1.24,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhzw8zLcDBN08u5m4S0lfvhNoTdn2xZ_Pp9i_vG8MLx3gex-0U9YGGmcoWcdFc3ZV2Erwfqxr3u1MK16MzAmyNks3Z343-JgVXp1jwjyNzI"

      },
      weap16: {
        name: "StatTrak™ PP-Bizon | Water Sigil BS",
        price: 1.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3ZjxW6c6Jl5KOhOPLO77QgHJu5MRjjeyP893331XgrRBtZmmhcoLAegM2YAmC_Ffrx-a71JS-vJrLmHtr6yMi5WGdwUKpCXEZwQ"
      },
      weap17: {
        name: "StatTrak™ PP-Bizon | Water Sigil WW",
        price: 0.97,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3ZjxW6c6Jl5KOhOPLPr7Vn35c18lwmO7Eu9j2jgXh-hJtMmiicNLDcwJvZFHX8gXoybu51JW4vZycwSFivnMn7C7D30vgg1B1LWA"
      },
      weap18: {
        name: "StatTrak™ PP-Bizon | Water Sigil FT",
        price: 0.77,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3ZjxW6c6Jl5KOhOPLPr7Vn35c18lwmO7Eu9j2jgXh-hJtMmiicNLDcwJvZFHX8gXoybu51JW4vZycwSFivnMn7C7D30vgg1B1LWA"
      },
      weap19: {
        name: "StatTrak™ PP-Bizon | Water Sigil MW",
        price: 1.03,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3ZjxW6c6Jl5KOhOPLP7LWnn9u5MRjjeyP9tjx2FW1r0o_MWH0LIGVJA46N1vX-ljol-29jcPv75SfnHZrs3Qq7GGdwUJWqynhYQ"
      },
      weap20: {
        name: "StatTrak™ PP-Bizon | Water Sigil FN",
        price: 1.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3ZjxW6c6Jl5KOhOPLP7LWnn9u5MRjjeyP9tjx2FW1r0o_MWH0LIGVJA46N1vX-ljol-29jcPv75SfnHZrs3Qq7GGdwUJWqynhYQ"
      },
      weap21: {
        name: "StatTrak™ Galil AR | Blue Titanium FN",
        price: 1.33,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczJfwJW5ci3momemqSkJYTdn2xZ_Pp9i_vG8MKh2gLgrks5MGigcdLHcVRtNFvRq1m3kufsgcW6v52bnXdl7iQq5SzcgVXp1kCDJqwD"
      },
      weap22: {
        name: "StatTrak™ P90 | Blind Spot BS",
        price: 4.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957P7HdS5S48ilq4iOluHtDLfQhGxUpsYo3riWotzw2Qy2-UdoYj-lcYSXIQY5MlDZ_lHqxeu8gcO5v8uYm3Z9-n51FHcoZTw"
      },
      weap23: {
        name: "StatTrak™ P90 | Blind Spot WW",
        price: 3.26,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957P7HdS5S48ilq42Ok_7hPoTdl3lW7Ysj3erHptrx0VKw-xVsZGCmIYTBelA3Mw6FqVXqx-q-hcXu7pnBm3pnpGB8sqq5zINz"
      },
      weap24: {
        name: "StatTrak™ P90 | Blind Spot FT",
        price: 3.24,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957P7HdS5S48ilq42Ok_7hPoTdl3lW7Ysj3erHptrx0VKw-xVsZGCmIYTBelA3Mw6FqVXqx-q-hcXu7pnBm3pnpGB8sqq5zINz"
      },
      weap25: {
        name: "StatTrak™ P90 | Blind Spot MW",
        price: 4.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957P7HdS5S48ilq4yCkP_gDLfQhGxUpsQm2rvDrYrwiVLkrkFpZWGmIobAJFQ8MArX-FO2wOe9hZO-vciYzSB9-n51N7wse9o"
      },
      weap26: {
        name: "StatTrak™ P90 | Blind Spot FN",
        price: 5.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957P7HdS5S48ilq4yCkP_gDLfQhGxUpsQm2rvDrYrwiVLkrkFpZWGmIobAJFQ8MArX-FO2wOe9hZO-vciYzSB9-n51N7wse9o"
      },
      weap27: {
        name: "StatTrak™ AK-47 | Blue Laminate WW",

        price: 15.58,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLPr7Vn35c18lwmO7Eu9vw2FHh8hJoZG3zcYSVdlBtaAuCqFi7kO7s1568vJjJwSRrsycksXfD30vgSXhu9Rc"
      },
      weap28: {
        name: "StatTrak™ AK-47 | Blue Laminate FT",

        price: 11.90,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLPr7Vn35c18lwmO7Eu9vw2FHh8hJoZG3zcYSVdlBtaAuCqFi7kO7s1568vJjJwSRrsycksXfD30vgSXhu9Rc"
      },
      weap29: {
        name: "StatTrak™ AK-47 | Blue Laminate MW",

        price: 13.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLP7LWnn9u5MRjjeyPrIqtjVfh-kNvNj-iIdSSIwZsYlHR8wC_wrzr0cO7tMjImyZluyJz5WGdwUKTUQkCog"
      },
      weap30: {
        name: "StatTrak™ AK-47 | Blue Laminate FN",

        price: 17.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4KHgvLLP7LWnn9u5MRjjeyPrIqtjVfh-kNvNj-iIdSSIwZsYlHR8wC_wrzr0cO7tMjImyZluyJz5WGdwUKTUQkCog"
      },
      weap31: {
        name: "StatTrak™ FAMAS | Afterimage WW",

        price: 22.45,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3cy9N59m4q5CKg__LNbrcl3hu5cB1g_zMyoD0mlOx5RFoYzrwLIaXelBvN1_Yr1Polenn1pHttMzMn3tmsnMk5naImBOw0hhSLrs4dAtq-Wc"

      },
      weap32: {
        name: "StatTrak™ FAMAS | Afterimage FT",

        price: 6.68,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3cy9N59m4q5CKg__LNbrcl3hu5cB1g_zMyoD0mlOx5RFoYzrwLIaXelBvN1_Yr1Polenn1pHttMzMn3tmsnMk5naImBOw0hhSLrs4dAtq-Wc"

      },
      weap33: {
        name: "StatTrak™ FAMAS | Afterimage MW",

        price: 9.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3cy9N59m4q5CKg__LNbrcl3hu5Mx2gv3--Y3nj1H6_hdoZmzwLYGWd1I2YlCGrATolezpgZC77ZWaznRk6Ccj7X_azBK_hAYMMLKHDT3r_w"

      },
      weap34: {
        name: "StatTrak™ FAMAS | Afterimage FN",

        price: 24.76,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3cy9N59m4q5CKg__LNbrcl3hu5Mx2gv3--Y3nj1H6_hdoZmzwLYGWd1I2YlCGrATolezpgZC77ZWaznRk6Ccj7X_azBK_hAYMMLKHDT3r_w"

      },
      weap35: {
        name: "StatTrak™ AWP | Electric Hive WW",

        price: 41.63,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PvBZzh94dmynZWGqPv1IbzU2DMEv8Rw3-3Epo6giQyxqkFoYGChJ4adcQ46YAzY_1DswObvgMO_u8nXiSw0zFWmqYw"

      },
      weap36: {
        name: "StatTrak™ AWP | Electric Hive FT",

        price: 31.75,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PvBZzh94dmynZWGqPv1IbzU2DMEv8Rw3-3Epo6giQyxqkFoYGChJ4adcQ46YAzY_1DswObvgMO_u8nXiSw0zFWmqYw"

      },
      weap37: {
        name: "StatTrak™ AWP | Electric Hive MW",

        price: 50.90,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PvBZzh94NWxnJS0m_bmNL6fxDoJsZwk0uyT9Ir02lfi8hA6MD2nLIaScwQ6MlrX8wC-lOjrgJC-uYOJlyVQbQuu3g"

      },
      weap38: {
        name: "StatTrak™ AWP | Electric Hive FN",

        price: 64.51,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PvBZzh94NWxnJS0m_bmNL6fxDoJsZwk0uyT9Ir02lfi8hA6MD2nLIaScwQ6MlrX8wC-lOjrgJC-uYOJlyVQbQuu3g"

      },
      weap39: {
        name: "StatTrak™ Desert Eagle | Cobalt Disruption FT",

        price: 20.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTjlG_N2ikIWFhPLLI77QlWRS4_p8j-3I4IHKhFWmrBZyMG_6LYGVelc9Mw7Wrli4xOy-gpK96JvMm3Q27ykg7HrfmBG-hBpKZvsv26Jt_Dv7IA"

      },
      weap40: {
        name: "StatTrak™ Desert Eagle | Cobalt Disruption MW",

        price: 24.73,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTjlG_N2ikIWFhPLLI77QlWRS4_p9g-7J4bP5iUazrl09Z2H1cNSWcwA-MwuEqQe4k73q1JfotJzOwCFnvyBw5X2LmRe3gB1NcKUx0r3Iy7zp"

      },
      weap41: {
        name: "StatTrak™ Desert Eagle | Cobalt Disruption FN",

        price: 36.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLFTjlG_N2ikIWFhPLLI77QlWRS4_p9g-7J4bP5iUazrl09Z2H1cNSWcwA-MwuEqQe4k73q1JfotJzOwCFnvyBw5X2LmRe3gB1NcKUx0r3Iy7zp"
      },
      weap42: {
        name: "StatTrak™ M4A4 | X-Ray FT",
        price: 32.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszQYzxb09Hiq42Ok_7hPoTdl3lW7Yt027yYoo6h0QWx_hVrNmGld4aRJAc5MwnWrATswbrogMe9u5vBmCFlpGB8sp0wSwbi"
      },
      weap43: {
        name: "StatTrak™ M4A4 | X-Ray MW",
        price: 37.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszQYzxb09Hiq4yCkP_gDLfQhGxUpsAo2LDD99-s0QywrUdlY2ugJtTBdFA4NwqC_Va7kru8hZG9uZjBmyN9-n51YAq6eTE"
      },
      weap44: {
        name: "StatTrak™ M4A4 | X-Ray FN",
        price: 69.70,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszQYzxb09Hiq4yCkP_gDLfQhGxUpsAo2LDD99-s0QywrUdlY2ugJtTBdFA4NwqC_Va7kru8hZG9uZjBmyN9-n51YAq6eTE"
      }
    }
  },
  case6: {
    milspec: {
      weap1: {
        name: "PP-Bizon | Cobalt Halftone WW",

        price: 0.32,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0v73ZShQ_dO_h4W0n_b4Na_emG5u5cB1g_zMyoD0mlOx5UVqYj-mIdKTdgNvM1HX_lK2lLrqjZe7u8ucm3RhviUj5n-LnxS-10lSLrs4qpLgoDA"

      },
      weap2: {
        name: "PP-Bizon | Cobalt Halftone FT",

        price: 0.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0v73ZShQ_dO_h4W0n_b4Na_emG5u5cB1g_zMyoD0mlOx5UVqYj-mIdKTdgNvM1HX_lK2lLrqjZe7u8ucm3RhviUj5n-LnxS-10lSLrs4qpLgoDA"

      },
      weap3: {
        name: "PP-Bizon | Cobalt Halftone MW",

        price: 0.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0v73ZShQ_dO_h4W0n_b4Na_emG5u5Mx2gv3--Y3nj1H6rkBoNzr3dtfHcFA_NQnW_AO-xby7h8K_78ydm3diuSMrtirVnkOz1QYMMLJJTXlsBg"

      },
      weap4: {
        name: "PP-Bizon | Cobalt Halftone FN",

        price: 0.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0v73ZShQ_dO_h4W0n_b4Na_emG5u5Mx2gv3--Y3nj1H6rkBoNzr3dtfHcFA_NQnW_AO-xby7h8K_78ydm3diuSMrtirVnkOz1QYMMLJJTXlsBg"

      },
      weap5: {
        name: "M249 | Magma BS",

        price: 0.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhhwszHcy5L6NW3mr-DkvbiKoTdl3lW7Yt0jryU89qj31CyqEM-YjqiJtLDcgNoYlyD_VLqyby615W96snLyCRmpGB8smZzB-82"

      },
      weap6: {
        name: "M249 | Magma WW",

        price: 0.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhhwszHcy5L6NW3mr-GkvP9JrbummpD78A_iLCVpImkjQzk-hY5MmClJ9KWd1Q8aFmD-1Hsw7u7hpXoucvJnHVrvT5iuyitllRD3Q"

      },
      weap7: {
        name: "M249 | Magma FT",

        price: 0.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhhwszHcy5L6NW3mr-GkvP9JrbummpD78A_iLCVpImkjQzk-hY5MmClJ9KWd1Q8aFmD-1Hsw7u7hpXoucvJnHVrvT5iuyitllRD3Q"

      },
      weap8: {
        name: "M249 | Magma MW",

        price: 0.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhhwszHcy5L6NW3mr-HnvD8J4Tdl3lW7Yty0uiSrY-s2wHgqEE6Z2zwJdCVegY8NAmB_ljtkL_mjZG07s-fwCc3pGB8stBeF8Zo"

      },
      weap9: {
        name: "M249 | Magma FN",

        price: 0.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhhwszHcy5L6NW3mr-HnvD8J4Tdl3lW7Yty0uiSrY-s2wHgqEE6Z2zwJdCVegY8NAmB_ljtkL_mjZG07s-fwCc3pGB8stBeF8Zo"

      },
      weap10: {
        name: "Five-SeveN | Kami FT",

        price: 0.46,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09e3mYm0mvLwOq7cqWdQ-sJ0xLCZp9uijFbsqhVsYW3ycITAe1drMgrZ8lboyOrs1p_vvZ_NwSFgsyc8pSGKobsxhNk"

      },
      weap11: {
        name: "Five-SeveN | Kami MW",

        price: 0.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09e3mYm0m_7zO6_ummpD78A_ieyVrN-sjlHg-hFvYzr1JYKWJAI2ZlDX8wC7xrvr05Pqvp_OnHpiuz5iuyjNWRRyUA"

      },
      weap12: {
        name: "Five-SeveN | Kami FN",

        price: 0.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09e3mYm0m_7zO6_ummpD78A_ieyVrN-sjlHg-hFvYzr1JYKWJAI2ZlDX8wC7xrvr05Pqvp_OnHpiuz5iuyjNWRRyUA"

      },
      weap13: {
        name: "Galil AR | Sandstorm BS",

        price: 0.36,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJR7dKyh5SEhfrLO77QgHJu5MRjjeyPrd_w21XjqRFtZj2nd4GWcAA8NVnY_FDslOy-gJfv78uYynBk6yUj52GdwUJAf2tdSA"
      },
      weap14: {
        name: "Galil AR | Sandstorm WW",

        price: 0.42,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJR7dKyh5SEhfrLPr7Vn35c18lwmO7Eu9qs0AXtrkI9ZWv3JdOVIVdvaQzV-1PvwbvvgMO_uMnLmiMwvnInt33D30vgH7ufOHU"
      },
      weap15: {
        name: "Galil AR | Sandstorm FT",

        price: 0.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJR7dKyh5SEhfrLPr7Vn35c18lwmO7Eu9qs0AXtrkI9ZWv3JdOVIVdvaQzV-1PvwbvvgMO_uMnLmiMwvnInt33D30vgH7ufOHU"
      },
      weap16: {
        name: "Galil AR | Sandstorm MW",

        price: 0.36,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJR7dKyh5SEhfrLP7LWnn9u5MRjjeyPpdyt0Qfj_EFrNm72dtCddgZqYwrV-1DqwrrngZ-_7ZzLm3c27iJztmGdwUKMthHedA"
      }
    },
    restricted: {
      weap1: {
        name: "Nova | Rising Skull BS",

        price: 3.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbeihO4OO4m5aKqP_xMq3IqWdQ-sJ0xL6XrN6l2AHlqURoY2CgcI7DcVM8ZlHU81HslO3v18O4tZzNnCFruyA8pSGKkuKPh1U"

      },
      weap2: {
        name: "Nova | Rising Skull WW",

        price: 2.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbeihO4OO4m5aKqPrxN7LEm1Rd6dd2j6eWo9zw2lC38kA9Z2z1ItKSIQVsaAvY-1C9ye25jcC7uMiby3dhuSkk-z-DyJ3pID1f"

      },
      weap3: {
        name: "Nova | Rising Skull FT",

        price: 1.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbeihO4OO4m5aKqPrxN7LEm1Rd6dd2j6eWo9zw2lC38kA9Z2z1ItKSIQVsaAvY-1C9ye25jcC7uMiby3dhuSkk-z-DyJ3pID1f"

      },
      weap4: {
        name: "Nova | Rising Skull MW",

        price: 1.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbeihO4OO4m5aKqPv9NLPFqWdQ-sJ0xLyUrYih2gDm_xI4Nzj7d9WWcQ49M1jVrlS9yea5gpO0v5qbyXU27HE8pSGK-gPmPaU"

      },
      weap5: {
        name: "Nova | Rising Skull FN",

        price: 1.84,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbeihO4OO4m5aKqPv9NLPFqWdQ-sJ0xLyUrYih2gDm_xI4Nzj7d9WWcQ49M1jVrlS9yea5gpO0v5qbyXU27HE8pSGK-gPmPaU"

      },
      weap6: {
        name: "MP9 | Rose Iron FT",
        price: 1.78,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7OfAfi9M9eOkm5OOqPrkaoTck29Y_chOhujT8om73VWxqkY-Yjj6cNfBdQVtY1HXqFbolLzshJO9vM-fyXIxuCIq7Cveygv33080ZESelA"
      },
      weap7: {
        name: "MP9 | Rose Iron MW",
        price: 1.84,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7OfAfi9M9eOkm5OOqPrkaoTdn2xZ_Pp9i_vG8ML02QzjrUJvZ2n3cdTEewBqNF7S-Ae6kufr0J65vJrBnyBisnQqsXiOgVXp1uZ7p0lz"
      },
      weap8: {
        name: "MP9 | Rose Iron FN",
        price: 2.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7OfAfi9M9eOkm5OOqPrkaoTdn2xZ_Pp9i_vG8ML02QzjrUJvZ2n3cdTEewBqNF7S-Ae6kufr0J65vJrBnyBisnQqsXiOgVXp1uZ7p0lz"
      },
      weap9: {
        name: "Dual Berettas | Marina BS",

        price: 1.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3fDxQ5dK3q5OemeX9IL7unm5Q_txOhujT8om72lW2-kc-YW3yJYCWJgM_Z1rQrlK6l7rshJXt75ydySYxs3N2tHzUlwv330-XjMfqaA"

      },
      weap10: {
        name: "Dual Berettas | Marina WW",

        price: 1.54,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3fDxQ5dK3q5OemeX9IL7um25V4dB8teXA54vwxgTm-hFrMDr6coHDdgY8YAuF_FbvxuznhpO06ZnOnHcxuCYl7HmJn0CpwUYbjI4lh3o"

      },
      weap11: {
        name: "Dual Berettas | Marina FT",

        price: 1.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3fDxQ5dK3q5OemeX9IL7um25V4dB8teXA54vwxgTm-hFrMDr6coHDdgY8YAuF_FbvxuznhpO06ZnOnHcxuCYl7HmJn0CpwUYbjI4lh3o"

      },
      weap12: {
        name: "Dual Berettas | Marina MW",

        price: 1.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3fDxQ5dK3q5OemeX9IL7ummJW4NFOhujT8om7ilewrUBtNWyicoLEd1Q3Mw2G-APswbrqhpW6u5zMmHEyuiQi4i3UnQv330-xiJ-Mhw"

      },
      weap13: {
        name: "Dual Berettas | Marina FN",

        price: 4.78,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3fDxQ5dK3q5OemeX9IL7ummJW4NFOhujT8om7ilewrUBtNWyicoLEd1Q3Mw2G-APswbrqhpW6u5zMmHEyuiQi4i3UnQv330-xiJ-Mhw"

      },
      weap14: {
        name: "FAMAS | Pulse WW",

        price: 1.65,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-JhJWHhPLLPr7Vn35c18lwmO7Eu9qh3w3n_0FtNzz7IY-cd1A8aA2D_la6xb3n0cW5up6Ym3ExvHMisH_D30vgHyPdt1s"
      },
      weap15: {
        name: "FAMAS | Pulse FT",

        price: 1.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-JhJWHhPLLPr7Vn35c18lwmO7Eu9qh3w3n_0FtNzz7IY-cd1A8aA2D_la6xb3n0cW5up6Ym3ExvHMisH_D30vgHyPdt1s"
      },
      weap16: {
        name: "FAMAS | Pulse MW",

        price: 1.35,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-JhJWHhPLLP7LWnn9u5MRjjeyP843x3VCyqBdrMWmgd9DAdAM7Ml-D-Vi-wrrvjJe9uJ3AyXZqvyl3tmGdwUKbfF5qgg"
      },  
      weap17: {
        name: "FAMAS | Pulse FN",

        price: 1.70,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-JhJWHhPLLP7LWnn9u5MRjjeyP843x3VCyqBdrMWmgd9DAdAM7Ml-D-Vi-wrrvjJe9uJ3AyXZqvyl3tmGdwUKbfF5qgg"
      }
    },
    classified: {
      weap1: {
        name: "AWP | Redline WW",

        price: 16.05,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJB496klb-GkvP9JrbummpD78A_3LGXrI-i31fm_Uc5MW_3I4LDelc2YQmF-FPtl7_uh8PtupTMn3pnvD5iuyj-_v0pRA"

      },
      weap2: {
        name: "AWP | Redline FT",

        price: 10.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJB496klb-GkvP9JrbummpD78A_3LGXrI-i31fm_Uc5MW_3I4LDelc2YQmF-FPtl7_uh8PtupTMn3pnvD5iuyj-_v0pRA"

      },
      weap3: {
        name: "AWP | Redline MW",

        price: 16.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJB496klb-HnvD8J4Tdl3lW7YtyjLuR9omjiVfl-kZtMW2iJ4bBelc2ZVjY-wTtxe3ohsXu6sydzSNnpGB8shVvZCcj"

      },
      weap4: {
        name: "P250 | Mehndi BS",

        price: 5.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS086zkomFkvPLO77QgHJu5MRjjeyPpYqligPk_xY4NzyhI4TBI1M3aViG-lO3k-jmh5Hov8vIy3dhsnFztGGdwUKFi0647g"

      },
      weap5: {
        name: "P250 | Mehndi WW",

        price: 4.75,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS086zkomFkvPLPr7Vn35c18lwmO7Eu9in3lDs-EtsYGHyIIPDdlc4YAzR-ge_xO_m0ZS0vcnBm3tgvCZxsSnD30vgPdeX2Ds"

      },
      weap6: {
        name: "P250 | Mehndi FT",

        price: 4.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS086zkomFkvPLPr7Vn35c18lwmO7Eu9in3lDs-EtsYGHyIIPDdlc4YAzR-ge_xO_m0ZS0vcnBm3tgvCZxsSnD30vgPdeX2Ds"

      },
      weap7: {
        name: "P250 | Mehndi MW",

        price: 5.79,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS086zkomFkvPLP7LWnn9u5MRjjeyPrIj02wy2qEZqYjv1IYGTdwM7M1nX-lHryLvuhcLo7s7My3tqvnMk4mGdwUL_7jJtRA"

      },
      weap8: {
        name: "P250 | Mehndi FN",

        price: 11.42,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS086zkomFkvPLP7LWnn9u5MRjjeyPrIj02wy2qEZqYjv1IYGTdwM7M1nX-lHryLvuhcLo7s7My3tqvnMk4mGdwUL_7jJtRA"

      },
      weap9: {
        name: "M4A1-S | Guardian BS",

        price: 6.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuk2dU78R_ntbJ8I3jkWu4qgE7NnenIYfBc1c-YVHT-VTsxe_u1MDuvp6fmnJruCkn7S7enBS1hRhMb-xqm7XAHtvPldrU"

      },
      weap10: {
        name: "M4A1-S | Guardian WW",

        price: 6.58,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuk2dU78R_ntbM8Ij8nVmLpxIuNDztIoHGIA42aFjTrlW9l7_sg5K0vpTOzXUwvHYmti2IzB2y1UxFZuRs1OveFwsVDJalZw"

      },
      weap11: {
        name: "M4A1-S | Guardian FT",

        price: 6.33,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuk2dU78R_ntbM8Ij8nVmLpxIuNDztIoHGIA42aFjTrlW9l7_sg5K0vpTOzXUwvHYmti2IzB2y1UxFZuRs1OveFwsVDJalZw"

      },
      weap12: {
        name: "M4A1-S | Guardian MW",

        price: 6.69,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuk2dU78R_ntbN_Iv9nGu4qgE7NnfyddXHIAY-Z1jW_lm-yO--1pO_vsmcz3ow7HQl53-PmETjiBBMa-Nrm7XAHnr9YjkW"

      },
      weap13: {
        name: "M4A1-S | Guardian FN",

        price: 8.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuk2dU78R_ntbN_Iv9nGu4qgE7NnfyddXHIAY-Z1jW_lm-yO--1pO_vsmcz3ow7HQl53-PmETjiBBMa-Nrm7XAHnr9YjkW"

      }
    },
    covert: {
      weap1: {
        name: "Sawed-Off | The Kraken WW",

        price: 4.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLPLjFmXtE5dVOh-zF_Jn4t1i1uRQ5fTr3LIfBdwc5MlGEqVW4ku7r08S67c_Oz3Q16CYm4S3UnRHigx1OPeFxxavJjFbtIYc"

      },
      weap2: {
        name: "Sawed-Off | The Kraken FT",

        price: 3.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLPLjFmXtE5dVOh-zF_Jn4t1i1uRQ5fTr3LIfBdwc5MlGEqVW4ku7r08S67c_Oz3Q16CYm4S3UnRHigx1OPeFxxavJjFbtIYc"

      },
      weap3: {
        name: "Sawed-Off | The Kraken MW",

        price: 4.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLPLjFmXtE5dVOhuDG_ZjKhFWmrBZyZG_ycNCQewc_NA6D_AC3x-7phMW77p7NnHZi6yJ0s3mIzBO21B1EPPsv26Kzq1aSUw"

      },
      weap4: {
        name: "Sawed-Off | The Kraken FN",

        price: 6.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLPLjFmXtE5dVOhuDG_ZjKhFWmrBZyZG_ycNCQewc_NA6D_AC3x-7phMW77p7NnHZi6yJ0s3mIzBO21B1EPPsv26Kzq1aSUw"

      },
      weap5: {
        name: "M4A4 | Asiimov BS",

        price: 18.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJQJD_9W7m5a0n_L1JaLummpD78A_2OyYoN6l2AfmrhFqZGGgIIHDdFdoZFjUqFC8w-a9hZ69vp3AmHRn7j5iuyjeBbY3oQ"

      },
      weap6: {
        name: "M4A4 | Asiimov WW",

        price: 39.44,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJQJD_9W7m5a0mvLwOq7cqWdQ-sJ0xOvEpIj0jAbkqEE_ZD3xctLGJAE_Zw7U-QTowefth8TpvM_InHZh6XQ8pSGKWYJAoJI"

      },
      weap7: {
        name: "M4A4 | Asiimov FT",

        price: 53.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJQJD_9W7m5a0mvLwOq7cqWdQ-sJ0xOvEpIj0jAbkqEE_ZD3xctLGJAE_Zw7U-QTowefth8TpvM_InHZh6XQ8pSGKWYJAoJI"

      }
    },
    stattrak: {
      weap1: {
        name: "StatTrak™ PP-Bizon | Cobalt Halftone WW",

        price: 0.47,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0v73ZShQ_dO_h4W0n_b4Na_emG5u5cB1g_zMyoD0mlOx5UVqYj-mIdKTdgNvM1HX_lK2lLrqjZe7u8ucm3RhviUj5n-LnxS-10lSLrs4qpLgoDA"

      },
      weap2: {
        name: "StatTrak™ PP-Bizon | Cobalt Halftone FT",

        price: 0.37,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0v73ZShQ_dO_h4W0n_b4Na_emG5u5cB1g_zMyoD0mlOx5UVqYj-mIdKTdgNvM1HX_lK2lLrqjZe7u8ucm3RhviUj5n-LnxS-10lSLrs4qpLgoDA"

      },
      weap3: {
        name: "StatTrak™ PP-Bizon | Cobalt Halftone MW",

        price: 0.51,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0v73ZShQ_dO_h4W0n_b4Na_emG5u5Mx2gv3--Y3nj1H6rkBoNzr3dtfHcFA_NQnW_AO-xby7h8K_78ydm3diuSMrtirVnkOz1QYMMLJJTXlsBg"

      },
      weap4: {
        name: "StatTrak™ PP-Bizon | Cobalt Halftone FN",

        price: 2.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0v73ZShQ_dO_h4W0n_b4Na_emG5u5Mx2gv3--Y3nj1H6rkBoNzr3dtfHcFA_NQnW_AO-xby7h8K_78ydm3diuSMrtirVnkOz1QYMMLJJTXlsBg"

      },
      weap5: {
        name: "StatTrak™ M249 | Magma BS",

        price: 0.34,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhhwszHcy5L6NW3mr-DkvbiKoTdl3lW7Yt0jryU89qj31CyqEM-YjqiJtLDcgNoYlyD_VLqyby615W96snLyCRmpGB8smZzB-82"

      },
      weap6: {
        name: "StatTrak™ M249 | Magma WW",

        price: 0.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhhwszHcy5L6NW3mr-GkvP9JrbummpD78A_iLCVpImkjQzk-hY5MmClJ9KWd1Q8aFmD-1Hsw7u7hpXoucvJnHVrvT5iuyitllRD3Q"

      },
      weap7: {
        name: "StatTrak™ M249 | Magma FT",

        price: 0.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhhwszHcy5L6NW3mr-GkvP9JrbummpD78A_iLCVpImkjQzk-hY5MmClJ9KWd1Q8aFmD-1Hsw7u7hpXoucvJnHVrvT5iuyitllRD3Q"

      },
      weap8: {
        name: "StatTrak™ M249 | Magma MW",

        price: 0.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhhwszHcy5L6NW3mr-HnvD8J4Tdl3lW7Yty0uiSrY-s2wHgqEE6Z2zwJdCVegY8NAmB_ljtkL_mjZG07s-fwCc3pGB8stBeF8Zo"

      },
      weap9: {
        name: "StatTrak™ M249 | Magma FN",

        price: 1.05,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhhwszHcy5L6NW3mr-HnvD8J4Tdl3lW7Yty0uiSrY-s2wHgqEE6Z2zwJdCVegY8NAmB_ljtkL_mjZG07s-fwCc3pGB8stBeF8Zo"

      },
      weap10: {
        name: "StatTrak™ Five-SeveN | Kami FT",

        price: 1.35,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09e3mYm0mvLwOq7cqWdQ-sJ0xLCZp9uijFbsqhVsYW3ycITAe1drMgrZ8lboyOrs1p_vvZ_NwSFgsyc8pSGKobsxhNk"

      },
      weap11: {
        name: "StatTrak™ Five-SeveN | Kami MW",

        price: 1.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09e3mYm0m_7zO6_ummpD78A_ieyVrN-sjlHg-hFvYzr1JYKWJAI2ZlDX8wC7xrvr05Pqvp_OnHpiuz5iuyjNWRRyUA"

      },
      weap12: {
        name: "StatTrak™ Five-SeveN | Kami FN",

        price: 1.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjVb09e3mYm0m_7zO6_ummpD78A_ieyVrN-sjlHg-hFvYzr1JYKWJAI2ZlDX8wC7xrvr05Pqvp_OnHpiuz5iuyjNWRRyUA"

      },
      weap13: {
        name: "StatTrak™ Galil AR | Sandstorm BS",

        price: 0.36,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJR7dKyh5SEhfrLO77QgHJu5MRjjeyPrd_w21XjqRFtZj2nd4GWcAA8NVnY_FDslOy-gJfv78uYynBk6yUj52GdwUJAf2tdSA"
      },
      weap14: {
        name: "StatTrak™ Galil AR | Sandstorm WW",

        price: 0.72,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJR7dKyh5SEhfrLPr7Vn35c18lwmO7Eu9qs0AXtrkI9ZWv3JdOVIVdvaQzV-1PvwbvvgMO_uMnLmiMwvnInt33D30vgH7ufOHU"
      },
      weap15: {
        name: "StatTrak™ Galil AR | Sandstorm FT",

        price: 0.36,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJR7dKyh5SEhfrLPr7Vn35c18lwmO7Eu9qs0AXtrkI9ZWv3JdOVIVdvaQzV-1PvwbvvgMO_uMnLmiMwvnInt33D30vgH7ufOHU"
      },
      weap16: {
        name: "StatTrak™ Galil AR | Sandstorm MW",

        price: 1.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJR7dKyh5SEhfrLP7LWnn9u5MRjjeyPpdyt0Qfj_EFrNm72dtCddgZqYwrV-1DqwrrngZ-_7ZzLm3c27iJztmGdwUKMthHedA"
      },
      weap17: {
        name: "StatTrak™ Nova | Rising Skull BS",

        price: 3.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbeihO4OO4m5aKqP_xMq3IqWdQ-sJ0xL6XrN6l2AHlqURoY2CgcI7DcVM8ZlHU81HslO3v18O4tZzNnCFruyA8pSGKkuKPh1U"

      },
      weap18: {
        name: "StatTrak™ Nova | Rising Skull WW",

        price: 16.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbeihO4OO4m5aKqPrxN7LEm1Rd6dd2j6eWo9zw2lC38kA9Z2z1ItKSIQVsaAvY-1C9ye25jcC7uMiby3dhuSkk-z-DyJ3pID1f"

      },
      weap19: {
        name: "StatTrak™ Nova | Rising Skull FT",

        price: 3.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbeihO4OO4m5aKqPrxN7LEm1Rd6dd2j6eWo9zw2lC38kA9Z2z1ItKSIQVsaAvY-1C9ye25jcC7uMiby3dhuSkk-z-DyJ3pID1f"

      },
      weap20: {
        name: "StatTrak™ Nova | Rising Skull MW",

        price: 3.97,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbeihO4OO4m5aKqPv9NLPFqWdQ-sJ0xLyUrYih2gDm_xI4Nzj7d9WWcQ49M1jVrlS9yea5gpO0v5qbyXU27HE8pSGK-gPmPaU"

      },
      weap21: {
        name: "StatTrak™ Nova | Rising Skull FN",

        price: 5.84,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbeihO4OO4m5aKqPv9NLPFqWdQ-sJ0xLyUrYih2gDm_xI4Nzj7d9WWcQ49M1jVrlS9yea5gpO0v5qbyXU27HE8pSGK-gPmPaU"

      },
      weap22: {
        name: "StatTrak™ MP9 | Rose Iron FT",
        price: 3.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7OfAfi9M9eOkm5OOqPrkaoTck29Y_chOhujT8om73VWxqkY-Yjj6cNfBdQVtY1HXqFbolLzshJO9vM-fyXIxuCIq7Cveygv33080ZESelA"
      },
      weap23: {
        name: "StatTrak™ MP9 | Rose Iron MW",
        price: 4.68,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7OfAfi9M9eOkm5OOqPrkaoTdn2xZ_Pp9i_vG8ML02QzjrUJvZ2n3cdTEewBqNF7S-Ae6kufr0J65vJrBnyBisnQqsXiOgVXp1uZ7p0lz"
      },
      weap24: {
        name: "StatTrak™ MP9 | Rose Iron FN",
        price: 5.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAZt7OfAfi9M9eOkm5OOqPrkaoTdn2xZ_Pp9i_vG8ML02QzjrUJvZ2n3cdTEewBqNF7S-Ae6kufr0J65vJrBnyBisnQqsXiOgVXp1uZ7p0lz"
      },
      weap25: {
        name: "StatTrak™ Dual Berettas | Marina BS",

        price: 2.89,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3fDxQ5dK3q5OemeX9IL7unm5Q_txOhujT8om72lW2-kc-YW3yJYCWJgM_Z1rQrlK6l7rshJXt75ydySYxs3N2tHzUlwv330-XjMfqaA"

      },
      weap26: {
        name: "StatTrak™ Dual Berettas | Marina WW",

        price: 3.38,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3fDxQ5dK3q5OemeX9IL7um25V4dB8teXA54vwxgTm-hFrMDr6coHDdgY8YAuF_FbvxuznhpO06ZnOnHcxuCYl7HmJn0CpwUYbjI4lh3o"

      },
      weap27: {
        name: "StatTrak™ Dual Berettas | Marina FT",

        price: 3.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3fDxQ5dK3q5OemeX9IL7um25V4dB8teXA54vwxgTm-hFrMDr6coHDdgY8YAuF_FbvxuznhpO06ZnOnHcxuCYl7HmJn0CpwUYbjI4lh3o"

      },
      weap28: {
        name: "StatTrak™ Dual Berettas | Marina MW",

        price: 4.03,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3fDxQ5dK3q5OemeX9IL7ummJW4NFOhujT8om7ilewrUBtNWyicoLEd1Q3Mw2G-APswbrqhpW6u5zMmHEyuiQi4i3UnQv330-xiJ-Mhw"

      },
      weap29: {
        name: "StatTrak™ Dual Berettas | Marina FN",

        price: 26.05,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf2-r3fDxQ5dK3q5OemeX9IL7ummJW4NFOhujT8om7ilewrUBtNWyicoLEd1Q3Mw2G-APswbrqhpW6u5zMmHEyuiQi4i3UnQv330-xiJ-Mhw"

      },
      weap30: {
        name: "StatTrak™ FAMAS | Pulse WW",

        price: 5.90,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-JhJWHhPLLPr7Vn35c18lwmO7Eu9qh3w3n_0FtNzz7IY-cd1A8aA2D_la6xb3n0cW5up6Ym3ExvHMisH_D30vgHyPdt1s"
      },
      weap31: {
        name: "StatTrak™ FAMAS | Pulse FT",

        price: 3.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-JhJWHhPLLPr7Vn35c18lwmO7Eu9qh3w3n_0FtNzz7IY-cd1A8aA2D_la6xb3n0cW5up6Ym3ExvHMisH_D30vgHyPdt1s"
      },
      weap32: {
        name: "StatTrak™ FAMAS | Pulse MW",

        price: 4.08,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-JhJWHhPLLP7LWnn9u5MRjjeyP843x3VCyqBdrMWmgd9DAdAM7Ml-D-Vi-wrrvjJe9uJ3AyXZqvyl3tmGdwUKbfF5qgg"
      },
      weap33: {
        name: "StatTrak™ FAMAS | Pulse FN",

        price: 6.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0Ob3dzxP7c-JhJWHhPLLP7LWnn9u5MRjjeyP843x3VCyqBdrMWmgd9DAdAM7Ml-D-Vi-wrrvjJe9uJ3AyXZqvyl3tmGdwUKbfF5qgg"
      },
      weap34: {
        name: "StatTrak™ AWP | Redline WW",

        price: 47.61,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJB496klb-GkvP9JrbummpD78A_3LGXrI-i31fm_Uc5MW_3I4LDelc2YQmF-FPtl7_uh8PtupTMn3pnvD5iuyj-_v0pRA"

      },
      weap35: {
        name: "StatTrak™ AWP | Redline FT",

        price: 38.67,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJB496klb-GkvP9JrbummpD78A_3LGXrI-i31fm_Uc5MW_3I4LDelc2YQmF-FPtl7_uh8PtupTMn3pnvD5iuyj-_v0pRA"

      },
      weap36: {
        name: "StatTrak™ AWP | Redline MW",

        price: 60.95,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJB496klb-HnvD8J4Tdl3lW7YtyjLuR9omjiVfl-kZtMW2iJ4bBelc2ZVjY-wTtxe3ohsXu6sydzSNnpGB8shVvZCcj"

      },
      weap37: {
        name: "StatTrak™ P250 | Mehndi BS",

        price: 10.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS086zkomFkvPLO77QgHJu5MRjjeyPpYqligPk_xY4NzyhI4TBI1M3aViG-lO3k-jmh5Hov8vIy3dhsnFztGGdwUKFi0647g"

      },
      weap38: {
        name: "StatTrak™ P250 | Mehndi WW",

        price: 11.67,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS086zkomFkvPLPr7Vn35c18lwmO7Eu9in3lDs-EtsYGHyIIPDdlc4YAzR-ge_xO_m0ZS0vcnBm3tgvCZxsSnD30vgPdeX2Ds"

      },
      weap39: {
        name: "StatTrak™ P250 | Mehndi FT",

        price: 18.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS086zkomFkvPLPr7Vn35c18lwmO7Eu9in3lDs-EtsYGHyIIPDdlc4YAzR-ge_xO_m0ZS0vcnBm3tgvCZxsSnD30vgPdeX2Ds"

      },
      weap40: {
        name: "StatTrak™ P250 | Mehndi MW",

        price: 24.68,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS086zkomFkvPLP7LWnn9u5MRjjeyPrIj02wy2qEZqYjv1IYGTdwM7M1nX-lHryLvuhcLo7s7My3tqvnMk4mGdwUL_7jJtRA"

      },
      weap41: {
        name: "StatTrak™ P250 | Mehndi FN",

        price: 99.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS086zkomFkvPLP7LWnn9u5MRjjeyPrIj02wy2qEZqYjv1IYGTdwM7M1nX-lHryLvuhcLo7s7My3tqvnMk4mGdwUL_7jJtRA"

      },
      weap42: {
        name: "StatTrak™ M4A1-S | Guardian BS",

        price: 25.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuk2dU78R_ntbJ8I3jkWu4qgE7NnenIYfBc1c-YVHT-VTsxe_u1MDuvp6fmnJruCkn7S7enBS1hRhMb-xqm7XAHtvPldrU"

      },
      weap43: {
        name: "StatTrak™ M4A1-S | Guardian WW",

        price: 25.33,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuk2dU78R_ntbM8Ij8nVmLpxIuNDztIoHGIA42aFjTrlW9l7_sg5K0vpTOzXUwvHYmti2IzB2y1UxFZuRs1OveFwsVDJalZw"

      },
      weap44: {
        name: "StatTrak™ M4A1-S | Guardian FT",

        price: 24.76,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuk2dU78R_ntbM8Ij8nVmLpxIuNDztIoHGIA42aFjTrlW9l7_sg5K0vpTOzXUwvHYmti2IzB2y1UxFZuRs1OveFwsVDJalZw"

      },
      weap45: {
        name: "StatTrak™ M4A1-S | Guardian MW",

        price: 31.83,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuk2dU78R_ntbN_Iv9nGu4qgE7NnfyddXHIAY-Z1jW_lm-yO--1pO_vsmcz3ow7HQl53-PmETjiBBMa-Nrm7XAHnr9YjkW"

      },
      weap46: {
        name: "StatTrak™ M4A1-S | Guardian FN",

        price: 45.58,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuk2dU78R_ntbN_Iv9nGu4qgE7NnfyddXHIAY-Z1jW_lm-yO--1pO_vsmcz3ow7HQl53-PmETjiBBMa-Nrm7XAHnr9YjkW"

      },
      weap47: {
        name: "StatTrak™ Sawed-Off | The Kraken WW",

        price: 24.95,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLPLjFmXtE5dVOh-zF_Jn4t1i1uRQ5fTr3LIfBdwc5MlGEqVW4ku7r08S67c_Oz3Q16CYm4S3UnRHigx1OPeFxxavJjFbtIYc"

      },
      weap48: {
        name: "StatTrak™ Sawed-Off | The Kraken FT",

        price: 13.61,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLPLjFmXtE5dVOh-zF_Jn4t1i1uRQ5fTr3LIfBdwc5MlGEqVW4ku7r08S67c_Oz3Q16CYm4S3UnRHigx1OPeFxxavJjFbtIYc"

      },
      weap49: {
        name: "StatTrak™ Sawed-Off | The Kraken MW",

        price: 20.79,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLPLjFmXtE5dVOhuDG_ZjKhFWmrBZyZG_ycNCQewc_NA6D_AC3x-7phMW77p7NnHZi6yJ0s3mIzBO21B1EPPsv26Kzq1aSUw"

      },
      weap50: {
        name: "StatTrak™ Sawed-Off | The Kraken FN",

        price: 54.94,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLPLjFmXtE5dVOhuDG_ZjKhFWmrBZyZG_ycNCQewc_NA6D_AC3x-7phMW77p7NnHZi6yJ0s3mIzBO21B1EPPsv26Kzq1aSUw"

      },
      weap51: {
        name: "StatTrak™ M4A4 | Asiimov BS",

        price: 70.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJQJD_9W7m5a0n_L1JaLummpD78A_2OyYoN6l2AfmrhFqZGGgIIHDdFdoZFjUqFC8w-a9hZ69vp3AmHRn7j5iuyjeBbY3oQ"

      },
      weap52: {
        name: "StatTrak™ M4A4 | Asiimov WW",

        price: 265.96,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJQJD_9W7m5a0mvLwOq7cqWdQ-sJ0xOvEpIj0jAbkqEE_ZD3xctLGJAE_Zw7U-QTowefth8TpvM_InHZh6XQ8pSGKWYJAoJI"

      },
      weap53: {
        name: "StatTrak™ M4A4 | Asiimov FT",

        price: 300.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJQJD_9W7m5a0mvLwOq7cqWdQ-sJ0xOvEpIj0jAbkqEE_ZD3xctLGJAE_Zw7U-QTowefth8TpvM_InHZh6XQ8pSGKWYJAoJI"

      }
	}
  },
};


/*===============STATISTICS===============*/
var totalMoneySpent = 0;
var totalCasesOpened = 0;
var totalBluesOpened = 0;
var totalPurplesOpened = 0;
var totalPinksOpened = 0;
var totalRedsOpened = 0;
var totalKnivesOpened = 0;


/*===============LOGIC===============*/

function beatboy() {
  money = 5000;
  inventoryMax = 200;
}

//cases -> case# -> rarity  -> weaponname, price, img
//cases -> case1 -> milspec -> weap1.name

//blues = 70%, purple = 20%, pink = 5%, red = 2.50%, knife = 0.50%

var rarityValue = {
  milspec: 0.75,
  restricted: 0.92,
  classified: 0.97,
  covert: 0.995,
  stattrak: 0.996
};

function randSkin() {
     var skinsArray = [];
     var randSkin = "";
     var randNum = Math.random().toFixed(3); //rounded to 3 places to make it slightly easier to get certain rarities
     var rarity = "";
     var identifier;

     if (randNum <= rarityValue.milspec) {
       rarity = "milspec";
     } else if (randNum >= rarityValue.milspec && randNum <= rarityValue.restricted) {
       rarity = "restricted";
     } else if (randNum >= rarityValue.restricted && randNum <= rarityValue.classified) {
       rarity = "classified";
     } else if (randNum >= rarityValue.classified && randNum <= rarityValue.covert) {
       rarity = "covert";
     } else if (randNum >= rarityValue.covert && randNum <= rarityValue.stattrak) {
       rarity = "stattrak";
     } else {
       rarity = "knife";
     }

     function skinChoose(r) {
       if (r === "knife") {
         var knifeCase = "";
         if (currentCase === "case14") {
           knifeCase = "chroma";
         } else if (currentCase === "sds") {
           knifeCase = "huntsman";
         } else if (currentCase === "sds") {
           knifeCase = "butterfly";
         } else if (currentCase === "sds") {
           knifeCase = "shadow";
         } else if (currentCase === "case15") {
           knifeCase = "falchion";
         } else {
           knifeCase = "regular";
         }

         skinsArray = Object.keys(knives[knifeCase]);

         randSkin = skinsArray[Math.floor(skinsArray.length * Math.random())];

         identifier = knives[knifeCase][randSkin];

         //console.log(identifier.name);
         //console.log(identifier.price);
         //console.log(identifier.img);
         var toEncode = "knives['" + knifeCase + "']" + "['" + randSkin + "']";
         inventory["item" + itemCounter] = window.btoa(toEncode);

         drawItem(itemDisp(identifier.name, identifier.price, identifier.img), rarity);

         if (popup) {
           caseModalDraw(identifier.name, identifier.img);
           $('.modalWindow').toggle();
         }

       } else {
         //console.log(r);
         skinsArray = Object.keys(cases[currentCase][r]);

         randSkin = skinsArray[Math.floor(skinsArray.length * Math.random())];

         identifier = cases[currentCase][r][randSkin];

         //console.log(identifier.name);
         //console.log(identifier.price);
         //console.log(identifier.img);
         var toEncode = "cases['" + currentCase + "']" + "['" + r + "']" + "['" + randSkin + "']";
         //console.log(toEncode);
         inventory["item" + itemCounter] = window.btoa(toEncode);
         //console.log(cases[currentCase][r][randSkin]);

         drawItem(itemDisp(identifier.name, identifier.price, identifier.img), rarity);

         if (popup) {
           caseModalDraw(identifier.name, identifier.img);
           $('.modalWindow').toggle();
         }


       }

       inventoryCurrent += 1;
       itemCounter += 1;
     }

     skinChoose(rarity);

}

function itemDisp(name, price, img) {
  var temp = [];

  temp.push(name, price, img);
  //console.log(temp);
  return temp;
}

function drawItem(array, rarity) {
    var name = array[0];
    var price = "$" + array[1].toFixed(2);
    var img = array[2] + "/70fx70f";

    $(".inventoryItemContainer").append('<div class="inventoryItem ' + rarity + '" id="'+ 'item' + itemCounter +'" title="' + name + '"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
}

function inventoryClear() {
  inventory = {};
  $('.inventoryItemContainer').html("");
}

function drawInventory() {
  // I know this is cancer dont hate please
  var keys = Object.keys(inventory);

  for (var i = 0; i < keys.length; i++) {
    var rarity = atob(inventory[keys[i]]).replace(/\[[^\[]*$/g, "").match(/\[[^\[]*$/g).toString().match(/\b\w*\b/)[0];
    if (rarity === "regular" || rarity === "chroma" || rarity === "huntsman" || rarity === "butterfly" || rarity === "shadow" || rarity === "falchion") {
      rarity = "knife";
    }
    var item = eval(atob(inventory[keys[i]]));
    var name = item["name"];
    var price = "$" + item["price"].toFixed(2);
    var img = item["img"] + "/70fx70f";

    $(".inventoryItemContainer").append('<div class="inventoryItem ' + rarity + '" id="'+ keys[i] +'" title="' + name + '"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
  }
}




/*===============CLICKS===============*/

$(".inventoryItemContainer").on("click", ".inventoryItem", function() {
  if (inventory[this.id]) {
    $(".tooltipAnchor").hide();
    var item = eval(atob(inventory[this.id]));
    //console.log(item);
$('#player_btn_0_4')[0].play();
    inventoryCurrent -= 1;
    money += (item['price']);
    //console.log(item['price']);
    delete inventory[this.id];
    $(this).remove();
    inventoryValue();
    skinOverflow();
  }
});


$("#case").click(function() {
  if (inventoryCurrent < inventoryMax) {
    var price = (operationCases[currentCase]["price"] - caseDiscount) + (keyPrice - keyDiscount);
	$('#player_btn_0_5')[0].play();
    if (price >= 0 && money >= price) {
      money -= price;
      randSkin();
    } else if (price < 0 && money >= price) {
      randSkin();
    }
    inventoryValue();
  }
});

$(".jackpotDifficulty").click(function() {
  if (!jackpotInProgress) {
    $(".jackpotDifficultyContainer div").removeClass("active");
    $(this).addClass("active");
	$('#player_btn_0_4')[0].play();
    jackpotDifficulty = this.id;

  }
});

$(".modalMain").on("click", ".modalClose", function() {
  $('.modalWindow').toggle();
  $('#player_btn_0_4')[0].play();
});

$("#acceptButton").click(function() {
  money += acceptMoneyPerClick;
$('#player_btn_0_3')[0].play();  
});

$(".about").click(function() {
  $(".main").toggleClass("small");
  $('#player_btn_0_4')[0].play();
});

/*===============TABS===============*/

$("#caseTab").click(function() {
  if ($(".caseContainer").css('display') == 'none') {
    $(this).toggleClass("active");
    $("#jackpotTab").removeClass("active");
    $("#upgradeTab").removeClass("active");
    $("#inventoryTab").removeClass("active");
    $("#audioTab").removeClass("active");
    $(".upgradeContainer").hide();
    $(".jackpotRightContainer").hide();
    $(".inventoryContainer").hide();
    $(".caseContainer").show();
	$(".audioContainer").hide();
	$('#player_btn_0_4')[0].play();
    $(".rightMain").css("bottom","135px");
    $(".tradeButtonContainer").show();
    if ($(".unboxing").css('display') !== 'block') {
      $(".unboxing").show();
      $(".jackpot").hide();
    }
  }
});

$("#inventoryTab").click(function() {
  if ($(".inventoryContainer").css('display') == 'none') {
    $(this).toggleClass("active");
    $("#jackpotTab").removeClass("active");
    $("#upgradeTab").removeClass("active");
    $("#caseTab").removeClass("active");
	$("#audioTab").removeClass("active");
    $(".upgradeContainer").hide();
    $(".jackpotRightContainer").hide();
    $(".inventoryContainer").show();
    $(".caseContainer").hide();
	$(".audioContainer").hide();
	$('#player_btn_0_4')[0].play();
    $(".rightMain").css("bottom","135px");
    $(".tradeButtonContainer").show();
    if ($(".unboxing").css('display') !== 'block') {
      $(".unboxing").show();
      $(".jackpot").hide();
    }
  }
});

$("#upgradeTab").click(function() {
  if ($(".upgradeContainer").css('display') == 'none') {
    $(this).addClass("active");
    $("#jackpotTab").removeClass("active");
    $("#caseTab").removeClass("active");
    $("#inventoryTab").removeClass("active");
	$("#audioTab").removeClass("active");
    $(".upgradeContainer").show();
    $(".jackpotRightContainer").hide();
    $(".inventoryContainer").hide();
    $(".caseContainer").hide();
 	$(".audioContainer").hide();
	$('#player_btn_0_4')[0].play();
    $(".rightMain").css("bottom","135px");
    $(".tradeButtonContainer").show();
    if ($(".unboxing").css('display') !== 'block') {
      $(".unboxing").show();
      $(".jackpot").hide();
    }
  }
});

$("#jackpotTab").click(function() {
  if (jackpotUnlocked) {
    if ($(".jackpotRightContainer").css('display') == 'none') {
      drawSwapInventory();
      $(this).addClass("active");
      $("#upgradeTab").removeClass("active");
      $("#caseTab").removeClass("active");
      $("#inventoryTab").removeClass("active");
	  $("#audioTab").removeClass("active");
      $(".upgradeContainer").hide();
      $(".jackpotRightContainer").show();
      $(".inventoryContainer").hide();
      $(".caseContainer").hide();
	  $(".audioContainer").hide();
	  $('#player_btn_0_4')[0].play();
      $(".tradeButtonContainer").hide();
      $(".rightMain").css("bottom","0");
      if ($(".unboxing").css('display') == 'block') {
        $(".unboxing").hide();
        $(".jackpot").show();
      }
    }
  }
});

$("#audioTab").click(function() {
  if ($(".audioContainer").css('display') == 'none') {
    $(this).toggleClass("active");
    $("#jackpotTab").removeClass("active");
    $("#upgradeTab").removeClass("active");
    $("#inventoryTab").removeClass("active");
    $("#caseTab").removeClass("active");
    $(".upgradeContainer").hide();
    $(".jackpotRightContainer").hide();
    $(".audioContainer").show();
    $(".caseContainer").hide();
    $(".inventoryContainer").hide();
	$('#player_btn_0_4')[0].play();
    $(".rightMain").css("bottom","135px");
    $(".tradeButtonContainer").hide();
    if ($(".unboxing").css('display') !== 'block') {
      $(".unboxing").show();
      $(".jackpot").hide();
    }
  }
});

$('.settings').click(function() {
  $('.settingsList').toggleClass("hidden");
  $('#player_btn_0_4')[0].play();
});

$('#popupCheckbox').change(function() {
  if (this.checked) {
    popup = false;
  } else {
    popup = true;
  }
});
$(".clearGameState").click(function() {
  clearGameState();
});

/*===============DOM MANIP===============*/

function caseInfo() {
  $('#caseDisplayImage').attr("src", operationCases[currentCase]["img"] + "/240fx182f");
  $('#caseName').html(operationCases[currentCase]["name"]);
  $('#casePrice').html("Case Price: $" + (operationCases[currentCase]["price"] - caseDiscount).toFixed(2) + "  |");
  $('#keyPrice').html("Key Price: $" + (keyPrice - keyDiscount).toFixed(2));
}

function update() {
  $('#money').html("$" + money.toFixed(2));
  $('#inventorySpace').html(inventoryCurrent + "/" + inventoryMax);
}

function caseModalDraw(name, img) {
  $(".modalMain").html("");
  if ($(".modalMain").hasClass("winner")) {
    $(".modalMain").removeClass("winner");
  }
  $(".modalMain").addClass("unbox");
  $(".modalMain").append('<img src="" id="modalImage"/> <div class="modalSkinName" id="modalSkinName"></div> <div class="modalClose unbox button" id="modalClose">Continue</div>');
  $("#modalImage").attr("src", img + "/360fx360f");
  $("#modalSkinName").html(name);
}

function inventoryValue() {
  var inventoryKeys = Object.keys(inventory);
  var totalValue = 0;
  for (var i = 0; i < inventoryKeys.length; i++) {
    totalValue += eval(atob(inventory[inventoryKeys[i]]))["price"];
  }
  $(".inventoryValue").html("Value: $" + totalValue.toFixed(2));
}

/*===============UPGRADES===============*/
function upgradeMultiplier(basePrice, amount) {
  var newPrice = basePrice * Math.pow(1.05, amount + 1).toFixed(2);
  console.log(newPrice);
  return newPrice;
}

$(".stackingUpgradeContainer").on("click", ".upgrade", function() {
  var name = stackingUpgrades[this.id]["name"];
  var desc = stackingUpgrades[this.id]["desc"];
  $('#player_btn_0_4')[0].play();

  if (money >= stackingUpgrades[this.id]["price"]) {
    money -= stackingUpgrades[this.id]["price"];
    stackingUpgrades[this.id]["price"] = upgradeMultiplier(stackingUpgrades[this.id]["basePrice"], stackingUpgradesPurchased[this.id]);
    //console.log(upgradeMultiplier(stackingUpgrades[this.id]["basePrice"], stackingUpgradesPurchased[this.id]));
    keyDiscount += stackingUpgrades[this.id]["kp"];
    caseDiscount += stackingUpgrades[this.id]["cp"];
    inventoryMax += stackingUpgrades[this.id]["is"];
	acceptMoneyPerClick += stackingUpgrades[this.id]["mc"];
    stackingUpgradesPurchased[this.id] += 1;
  }
  caseInfo();
  $("#" + this.id).find(".upgradePrice").html("$" + stackingUpgrades[this.id]["price"].toFixed(2));
  $("#" + this.id).find(".upgradeAmount").html(stackingUpgradesPurchased[this.id]);
});


var stackingUpgrades = {
  upgrade1: {name: "Inventory Space", desc: "+1 to your max inventory space.", basePrice: 15, price: 15, cp: 0.00, kp: 0.00, is: 1, mc: 0.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGAr7BMx-94b6MohOf-Xwsn7-USVDXgHhOG1zPDeLmsxwRtYpItIUb2wskZ6I0FWp9DdsKkOtQslw/100fx100f"},
  upgrade2: {name: "Key Discount", desc: "Discount Key Prices", basePrice: 150, price: 150, cp: 0.00, kp: 0.05, is: 0, mc: 0.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUlrBpNQ0LvROW-0vDYVkRLNhRStbOkJzgxnaXLdDkTuNnmzYbak6byYb2ExGoHvJ1z2b7Fp9igjlflrUJoYmCiJ4KLMlhpukSlLYY/100fx100f"},
  upgrade3: {name: "More Money", desc: "More money per click +10", basePrice: 500, price: 500, cp: 0.00, kp: 0.00, is: 0, mc: 0.10, img: "https://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGAr7BMx-94b6MohOf-Xwsn7-USVDXgHhOG1zPDeLmsxwRtYpItIUb2wskZ6I0FWp9DdsKkOtQslw/100fx100f"}
  //upgrade4: {name: "Inventory Space II", desc: "Inventory Space: +5", price: 75, cp: 0.00, kp: 0.00, is: 5, img: "https://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGAr7BMx-94b6MohOf-Xwsn7-USVDXgHhOG1zPDeLmsxwRtYpItIUb2wskZ6I0FWp9DdsKkOtQslw/100fx100f"}
};

var stackingUpgradesPurchased = {
  upgrade1: 0,
  upgrade2: 0,
  upgrade3: 0
};

function drawPermUpgradeContainer() {

}

function drawStackingUpgrades() {
  for (var upgrade in stackingUpgrades) {
    if (stackingUpgrades.hasOwnProperty(upgrade)) {
      //console.log(upgrade);
      if (stackingUpgradesPurchased[upgrade] > 0) {
        var upgradeTicker = stackingUpgradesPurchased[upgrade];
        for (var i = 0; i < upgradeTicker; i++) {
          buyUpgrade(upgrade);
        }
        $(upgrade).find(".upgradePrice").html("$" + stackingUpgrades[upgrade]["price"].toFixed(2));
        $(upgrade).find(".upgradeAmount").html(stackingUpgrades[upgrade]);
      }
      $(".stackingUpgradeContainer").append('<div class="upgrade" id="' + upgrade + '"> <div class="upgradePicture"> <img src="' + stackingUpgrades[upgrade]["img"] + '" id="upgradePicture"></div> <div class="upgradeInfo"> <div class="upgradeName">' + stackingUpgrades[upgrade]["name"] + '</div> <div class="upgradeDesc">' + stackingUpgrades[upgrade]["desc"] + '</div> <div class="upgradePriceLabel">Price: <span class="upgradePrice">' + "$" + stackingUpgrades[upgrade]["price"].toFixed(2) + '</span> </div> <div class="upgradeAmountLabel">Amount: <span class="upgradeAmount">'+ stackingUpgradesPurchased[upgrade] + '</span> </div> </div> </div>');
    }
  }
}


function buyUpgrade(id) {
  stackingUpgrades[id]["price"] = upgradeMultiplier(stackingUpgrades[id]["basePrice"], stackingUpgradesPurchased[id]);
  keyDiscount += stackingUpgrades[id]["kp"];
  caseDiscount += stackingUpgrades[id]["cp"];
  inventoryMax += stackingUpgrades[id]["is"];
  acceptMoneyPerClick += stackingUpgrades[id]["mc"];
  caseInfo();
}



/*===============CASES===============*/
function drawCases() {
  for (var crate in operationCases) {
    if (operationCases.hasOwnProperty(crate)) {
    $(".caseContainer").append('<div class="case" id="' + crate + '"> <div class="casePicture"> <img src="' + operationCases[crate]["img"] + '" id="casePicture"></div> <div class="caseInfo"> <div class="caseTitle">' + operationCases[crate]["name"] + '</div> <div class="caseValue">Value: ' + "$" + operationCases[crate]["price"].toFixed(2) + '</div> </div> </div>');
    }
  }
}

$(".caseContainer").on('click', '.case', function() {
  currentCase = this.id;
  caseInfo();
});


/*===============JACKPOT===============*/
var jackpotUnlocked = true;
var jackpotInProgress = false;
var swapSkins = 0;
var maxSwapSkins = 15;
var swapSkinsValue = 0;
var jackpotSelectedInventory = {};
var jackpotDifficulty = "low";

$(".jackpotRightPlayer").on("click", ".inventorySwapItem", function() {
  if (inventoryCurrent <= inventoryMax) {
    if (Object.keys(jackpotInventory).length < maxSwapSkins && jackpotInProgress == false) {
      if (inventory[this.id]) {
        var item = eval(atob(inventory[this.id]));
        //console.log(item);
        jackpotInventory[this.id] = inventory[this.id];
        drawSwappedItem(item.name, item.price, item.img, this.id);
        swapSkins += 1;
		$('#player_btn_0_4')[0].play();
        swapSkinsValue += item.price;
        updateSwapInfo();
        //delete inventory[this.id];
        $(this).remove();
      }
    }
  }
});

$(".jackpotRightToBet").on("click", ".swappedItem", function() {
  if (inventoryCurrent <= inventoryMax) {
    if (jackpotInventory[this.id]) {
      var item = eval(atob(jackpotInventory[this.id]));
      //console.log(item);
      inventory[this.id] = jackpotInventory[this.id];
      drawJackpotSwapItem(item.name, item.price, item.img, this.id);
      swapSkins -= 1;
      swapSkinsValue -= item.price;
      updateSwapInfo();
      delete jackpotInventory[this.id];
      $(this).remove();
    }
  }
});

$(".jackpotRightStartButton").click(function() {
  if (Object.keys(jackpotInventory).length <= maxSwapSkins && swapSkins > 0 && jackpotInProgress == false) {
    $(".depositorContainer").html("");
    inventoryCurrent -= Object.keys(jackpotInventory).length;

    jackpotStart();
    inventoryReDraw();
  }
});

function drawJackpotSwapItem(name, price, img, id) {
      var keys = Object.keys(inventory);
      var rarity = atob(inventory[id]).replace(/\[[^\[]*$/g, "").match(/\[[^\[]*$/g).toString().match(/\b\w*\b/)[0];
      if (rarity === "regular" || rarity === "chroma" || rarity === "huntsman" || rarity === "butterfly" || rarity === "shadow" || rarity === "falchion") {
        rarity = "knife";
      }

      var name = name;
      var price = "$" + price.toFixed(2);
      var img = img + "/70fx70f";

      $(".jackpotRightPlayer").append('<div class="inventorySwapItem ' + rarity + '" id="' + id +'" title="' + name + '"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
}

function drawSwappedItem(name, price, img, id) {
      var keys = Object.keys(inventory);
      var rarity = atob(inventory[id]).replace(/\[[^\[]*$/g, "").match(/\[[^\[]*$/g).toString().match(/\b\w*\b/)[0];
      if (rarity === "regular" || rarity === "chroma" || rarity === "huntsman" || rarity === "butterfly" || rarity === "shadow" || rarity === "falchion") {
        rarity = "knife";
      }

      var name = name;
      var price = "$" + price.toFixed(2);
      var img = img + "/70fx70f";

      $(".jackpotRightToBet").append('<div class="swappedItem ' + rarity + '" id="' + id +'" title="' + name + '"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
}

function drawSwapInventory() {
  jackpotInventory = {};
  $(".jackpotRightToBet").html("");
  $(".jackpotRightPlayer").html("");
  swapSkinsValue = 0;
  swapSkins = 0;
  updateSwapInfo();
  // I know this is cancer dont hate please
  var keys = Object.keys(inventory);

  for (var i = 0; i < keys.length; i++) {
    var rarity = atob(inventory[keys[i]]).replace(/\[[^\[]*$/g, "").match(/\[[^\[]*$/g).toString().match(/\b\w*\b/)[0];
    if (rarity === "regular" || rarity === "chroma" || rarity === "huntsman" || rarity === "butterfly" || rarity === "shadow" || rarity === "falchion") {
      rarity = "knife";
    }
    var item = eval(atob(inventory[keys[i]]));
    var name = item["name"];
    var price = "$" + item["price"].toFixed(2);
    var img = item["img"] + "/70fx70f";

    $(".jackpotRightPlayer").append('<div class="inventorySwapItem ' + rarity + '" id="'+ keys[i] +'" title="' + name + '"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
  }
}

function updateSwapInfo() {
  $(".jackpotRightValueTotal").html("$" + swapSkinsValue.toFixed(2))
  $(".jackpotRightSkinsTotal").html(swapSkins + "/" + maxSwapSkins);
}



//{name: "", difficulty: 1, profilePic: ""},
var jackpotAI = {
  bot1: ["jGal | CSGOClicker.net", 1, "https://i.imgur.com/WTjn0MM.png"],
  bot2: ["exochase", 1, "https://i.imgur.com/za6Y17z.png"],
  bot3: ["S5E3", 1, "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/62/62001ac6b067182b65f92fa07797c630af64bb4a_full.jpg"],
  bot4: ["MR.BEATS", 2, "https://i.imgur.com/dIs0yE8.png"],
  bot5: ["CockCrusher19", 2, "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/03/03b0621515c85e256c20a8f169737430fa57281d_full.jpg"],
  bot6: ["Octane | n OU", 2, "https://i.imgur.com/P2hwwIE.png"],
  bot7: ["Moon Cricket Butler", 3, "https://i.imgur.com/qNsPKRH.png"],
  bot8: ["filsmick", 3, "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/c3/c31d18ad931fd685ca3af5700db6a461e10bcfe8_full.jpg"],
  bot9: ["Nino Triste", 3, "https://i.imgur.com/n1iHk8a.png"],
  bot10: ["Lucky", 4, "https://i.imgur.com/Dg7cI81.png"],
  bot11: ["seif.", 4, "https://i.imgur.com/gcieULF.png"],
  bot12: ["Plebeian", 4, "https://i.imgur.com/ZjMTocK.png"],
  bot13: ["buckETS | Trading", 5, "https://i.imgur.com/wSVK1bt.png"],
  bot14: ["banned", 5, "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/57/575daf48a20828cb6470193b7067d2782aa5ff0f_full.jpg"],
  bot15: ["Roflzilla", 5, "https://i.imgur.com/prnsggZ.png"],
  bot16: ["Jainxu", 6, "https://i.imgur.com/nwEsAGH.png"],
  bot17: ["Platinum (diff7)", 6, "https://i.imgur.com/BzuCWzL.png"],
  bot18: ["sp00ky gh0stman", 6, "https://i.imgur.com/ISxQyow.png"],
  bot19: ["storM", 7, "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/e5/e51667b64e8591b8428b4fc268fc826f21a982cf_full.jpg"],
  bot20: ["Earth", 8, "http://i.imgur.com/uwIoGpM.jpg"],
  bot21: ["UnderWater", 8, "http://i.imgur.com/7BTk8ig.jpg"],
  bot22: ["Morty", 8, "https://i.imgur.com/Skzow5x.jpg"],
  bot23: ["Doge", 8, "https://i.gyazo.com/c69e8efdccc0c9a03f69df5206a57d21.png"],
  bot24: ["MyBack", 8, "https://i.imgur.com/sDpf0y3.jpg"],
  bot25: ["Skittle", 8, "https://i.imgur.com/Zi9J6CJ.jpg"],
  bot26: ["SirRazor", 8, "https://i.imgur.com/4WA3vTU.jpg"],
  bot27: ["DennyB", 8, "https://i.imgur.com/VNE57CT.jpg"],
  bot28: ["Bio", 8, "http://i.imgur.com/acTRiBk.jpg"],
  bot29: ["Tiny", 8, "https://i.imgur.com/2aOas2H.jpg"],
  bot30: ["King of KFC Jamal", 9, "https://i.imgur.com/XhFlH2S.jpg"]
};

var jackpotPots = {
  low: ["bot1", "bot2", "bot3", "bot4", "bot5", "bot6", "bot7", "bot8", "bot9"],
  medium: ["bot10", "bot11", "bot12", "bot13", "bot14", "bot15", "bot16", "bot17", "bot18", "bot19"],
  high: ["bot20", "bot21", "bot22", "bot23", "bot24", "bot25", "bot26", "bot27", "bot28", "bot29", "bot30"]
}


//different version of difficulty
var jackpotAiDifficulty1 = {
  1: {freq: 0.20, milspec: 0.950, restricted: 0.975, classified: 0.998, covert: 0.999},
  2: {freq: 0.30, milspec: 0.750, restricted: 0.900, classified: 0.998, covert: 0.999},
  3: {freq: 0.35, milspec: 0.500, restricted: 0.600, classified: 0.950, covert: 0.999},
  4: {freq: 0.40, milspec: 0.350, restricted: 0.500, classified: 0.950, covert: 0.999},
  5: {freq: 0.50, milspec: 0.200, restricted: 0.400, classified: 0.600, covert: 0.800},
  6: {freq: 0.05, milspec: 0.150, restricted: 0.200, classified: 0.950, covert: 0.400},
  7: {freq: 0.05 ,milspec: 0.050, restricted: 0.150, classified: 0.950, covert: 0.350},
  8: {freq: 0.05, milspec: 0.025, restricted: 0.090, classified: 0.350, covert: 0.250},
  9: {freq: 0.05, milspec: 0.005, restricted: 0.010, classified: 0.015, covert: 0.050}
};


var jackpotAiDifficulty2 = {
  1: ["milspec"],
  2: ["milspec", "restricted"],
  3: ["milspec", "restricted", "classified"],
  4: ["milspec", "restricted", "classified", "covert"],
  5: ["milspec", "restricted", "classified", "covert", "knife"],
  6: ["restricted", "classified", "covert", "knife"],
  7: ["classified", "covert", "knife"],
  8: ["covert", "knife"],
  9: ["knife"]
};


function inventoryReDraw() {
  $(".jackpotRightPlayer").html("");
  $(".inventoryItemContainer").html("");
  $(".jackpotRightToBet").html("");
  drawInventory();
  drawSwapInventory();
  inventoryValue();
}

function jackpotStart() {
  $(".jackpotRightToBet").html("");
  $(".winnerIs").html("");
  jackpotInProgress = true;
  var skins = 0;
  var maxSkins = 150;
  var pot = {};
  var players = [];
  var botTickets = {
    bot1: 0,
    bot2: 0,
    bot3: 0,
    bot4: 0,
    bot5: 0,
    bot6: 0,
    bot7: 0,
    bot8: 0,
    bot9: 0,
    bot10: 0,
    bot11: 0,
    bot12: 0,
    bot13: 0,
    bot14: 0,
    bot15: 0,
    bot16: 0,
    bot17: 0,
    bot18: 0,
    bot19: 0,
    bot20: 0,
    bot21: 0,
    bot22: 0,
    bot23: 0,
    bot24: 0,
    bot25: 0,
    bot26: 0,
    bot27: 0,
    bot28: 0,
    bot29: 0,
    bot30: 0
  };
  var playerTickets = 0;
  var totalTickets = 0;
  var jackpotItemCounter = 0;
  var jackpotTimerCounter = 60;
  var depositTicker = 0;
  var AIKeys = JSON.parse(JSON.stringify(jackpotPots[jackpotDifficulty]));

  for (var skin in jackpotInventory) {
    if (jackpotInventory.hasOwnProperty(skin)) {
      if (inventory.hasOwnProperty(skin)) {
        var item = eval(atob(jackpotInventory[skin]));
        playerTickets += item.price * 100;
        //console.log(skin);
        pot[skin] = jackpotInventory[skin];
        skins += 1;
        //console.log(skins);
        delete inventory[skin];
      } else {
        //delete jackpotInventory[skin];
      }
    }
  }
  jackpotInventory = {};

  totalTickets += playerTickets;

  function drawPlayerDepositor(playerName, playerValue, playerImg) {
    $(".depositorContainer").append('<div class="jackpotDepositor" id="playerDepositor"> <div class="depositorInfo"><img src="' + playerImg + '" class="depositorProPic"> <div class="depositorName">' + playerName + '</div> <div class="depositorValue" id="depositValue">$'+ playerValue +'</div> <div class="depositorSkinContainer" id="playerDeposit"> </div> </div> </div>');
    $("#playerDepositor").hide().fadeIn();
    var keys = Object.keys(pot);

    for (var i = 0; i < keys.length; i++) {
      var rarity = atob(pot[keys[i]]).replace(/\[[^\[]*$/g, "").match(/\[[^\[]*$/g).toString().match(/\b\w*\b/)[0];
      if (rarity === "regular" || rarity === "chroma" || rarity === "huntsman" || rarity === "butterfly" || rarity === "shadow" || rarity === "falchion") {
        rarity = "knife";
      }
      var item = eval(atob(pot[keys[i]]));
      var name = item["name"];
      var price = item["price"].toFixed(2);
      var img = item["img"] + "/70fx70f";

      $("#playerDeposit").append('<div class="depositorSkin ' + rarity + '" id="'+ keys[i] +'" title="' + name + '"><div class="itemPrice">$' + price + '</div> <img src=' + img + '> </div>');
    }

  }
  $(".jackpotCountDown").html(jackpotTimerCounter);
  drawPlayerDepositor("Player1 (You)", (playerTickets / 100).toFixed(2), "https://i.imgur.com/ICK2lr1.jpg");
  $(".jackpotCurrentWorth").html("Pot: $" + (totalTickets / 100).toFixed(2));
  $(".jackpotPercentOfTickets").html("Your odds to win: " + (playerTickets / totalTickets * 100).toFixed(2) + "%");

  var jackpotTimer = setInterval(function() {
    if (jackpotTimerCounter > 0) {
      if (skins < maxSkins) {
        jackpotAISkinDraw();
      } else {
        jackpotPickWinner();
        clearInterval(jackpotTimer);
      }
      jackpotTimerCounter -= 1;
    } else {
      jackpotPickWinner();
      clearInterval(jackpotTimer);
    }
    //console.log(jackpotTimerCounter);
    //console.log("Skins:" + skins);
    $(".jackpotCurrentWorth").html("Pot: $" + (totalTickets / 100).toFixed(2));
    $(".jackpotPercentOfTickets").html("Your odds to win: " + (playerTickets / totalTickets * 100).toFixed(2) + "%");
    $(".jackpotCountDown").html(jackpotTimerCounter);
  }, 1000);

  function jackpotAISkinDraw() {
    if (Math.random() > 0.85) {
      if (AIKeys.length > 0) {
        if (maxSkins - skins <= maxSwapSkins) {
          jackpotRandSkin();
          //skins += Math.round(Math.random() * (maxSkins - skins));
        } else {
          jackpotRandSkin();
        }
      } else {
        console.log("empty!");
      }
    }

    function jackpotRandSkin() {
      var jackpotCase = "";
      var skinsArray = [];
      var randSkin = "";
      var randNum = Math.random().toFixed(3); //rounded to 3 places to make it slightly easier to get certain rarities
      var numSkins = Math.ceil(Math.random() * 6);
      var identifier;

      //console.log(AIKeys);

      var randomBot = AIKeys[Math.floor(AIKeys.length * Math.random())];

      //console.log(randomBot);

      var botName = jackpotAI[randomBot][0];
      var botDiff = jackpotAI[randomBot][1];
      var botImg = jackpotAI[randomBot][2];


      players.push(randomBot);
      //console.log(botName);
      //console.log(jackpotAiDifficulty2[botDiff]);

      //sticks with same bot for the duration of # of skins they have, new rarity for each skin


      function skinChoose() {
        jackpotCase = Object.keys(cases)[Math.floor(Object.keys(cases).length * Math.random())];

        var rarity = jackpotAiDifficulty2[botDiff][Math.floor(jackpotAiDifficulty2[botDiff].length * Math.random())];

        if (rarity === "knife") {
          //var knifeCase = Object.keys(knives)[Math.floor(Math.random() * Object.keys(knives).length)];
          var knifeCase = Object.keys(knives)[Math.floor(Object.keys(knives).length * Math.random())];

          skinsArray = Object.keys(knives[knifeCase]);
          randSkin = skinsArray[Math.floor(skinsArray.length * Math.random())];
          identifier = knives[knifeCase][randSkin];

          //console.log(identifier.name);
          //console.log(identifier.price * 100);
          botTickets[randomBot] += Math.round(identifier.price * 100);
          totalTickets += Math.round(identifier.price * 100);
          var toEncode = "knives['" + knifeCase + "']" + "['" + randSkin + "']";
          //console.log(toEncode);
          pot["item" + itemCounter] = window.btoa(toEncode);

          //drawItem(itemDisp(identifier.name, identifier.price, identifier.img), rarity);
          drawBotItem(itemDisp(identifier.name, identifier.price, identifier.img), rarity);
        } else {

          skinsArray = Object.keys(cases[jackpotCase][rarity]);
          randSkin = skinsArray[Math.floor(skinsArray.length * Math.random())];
          identifier = cases[jackpotCase][rarity][randSkin];

          botTickets[randomBot] += Math.round(identifier.price * 100);
          totalTickets += Math.round(identifier.price * 100);

          var toEncode = "cases['" + jackpotCase + "']" + "['" + rarity + "']" + "['" + randSkin + "']";
          //console.log(toEncode);
          pot["item" + itemCounter] = window.btoa(toEncode);
          //console.log(cases[currentCase][rarity][randSkin]);

          drawBotItem(itemDisp(identifier.name, identifier.price, identifier.img), rarity);

        }
        skins += 1;
        jackpotItemCounter += 1;
        itemCounter += 1;
      }

      function drawBotItem(array, rarity) {
          var name = array[0];
          var price = "$" + array[1].toFixed(2);
          var img = array[2] + "/70fx70f";
          var rarity = rarity;
          var botSelector = "deposit" + depositTicker;

          $('#' + botSelector).append('<div class="depositorSkin ' + rarity + '" title="' + name + '"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
		  $('#player_btn_0_1')[0].play();
          //console.log(randomBot);
      }

      var depositValueVar = "depositValue" + depositTicker;
      function drawDepositor(botName, botDrawPrice, botImg) {
        var depositorProPic = botImg;
        var depositorName = botName;

        $(".depositorContainer").append('<div class="jackpotDepositor" id="jackpotDepositor' + randomBot + '"> <div class="depositorInfo"><img src="' + depositorProPic + '" class="depositorProPic"> <div class="depositorName">' + depositorName + '</div> <div class="depositorValue" id="depositValue'+ depositTicker + '"></div> <div class="depositorSkinContainer" id="deposit' + depositTicker + '"> </div> </div> </div>');
        $("#jackpotDepositor" + randomBot).hide().fadeIn();
      }
      drawDepositor(botName, botDrawPrice, botImg);

      for (var i = 0; i < numSkins; i++) {
        skinChoose();
      }


      var botDrawPrice = botTickets[randomBot] / 100;
      //console.log(depositValueVar);
      $("#" + depositValueVar).html("$" + botDrawPrice.toFixed(2));
      depositTicker += 1;

      AIKeys.splice(AIKeys.indexOf(randomBot), 1);
    }

  }

  function jackpotPickWinner() {
    var ticketAdder = 0;
    var randTicket = Math.round(Math.random() * totalTickets);
    console.log("Random Ticket: " + randTicket);
    console.log("Player Tickets: " + playerTickets);
    console.log("Total Tickets: " + totalTickets);

    if (randTicket <= playerTickets && randTicket > 0) {
      $(".winnerIs").html("You Win!");
      $("#playerDepositor").addClass("winner");
      console.log("You Win!");
	  $('#player_btn_0_2')[0].play();
      inventoryCurrent += Object.keys(pot).length;
      $.extend(inventory, pot);
      skinOverflow();
      if (winnerModal) {
        winnerModalDraw();
      }

    } else {
      ticketAdder += playerTickets;
      for (var i = 0; i < players.length; i++) {
        var botTicketsOwned = botTickets[players[i]];
        if (randTicket <= (botTicketsOwned + ticketAdder) && randTicket > ticketAdder) {
          $(".winnerIs").html("Winner is: " + jackpotAI[players[i]][0] + " with " + (botTicketsOwned / totalTickets * 100).toFixed(2) + "%");
          $("#jackpotDepositor" + players[i]).addClass("winner");
          console.log(players[i]);
		  $('#player_btn_0_0')[0].play();
          itemCounter -= jackpotItemCounter;
          break;
        } else {
          ticketAdder += botTicketsOwned;
        }
      }
    }
    swapSkinsValue = 0;
    swapSkins = 0;
    inventoryReDraw();
    updateSwapInfo();
    $(".jackpotCountDown").html("00");
    //console.log(botTickets);
    //console.log(pot);
    jackpotInProgress = false;
    saveGameState();
  }

  var winnerModal = true;
  function winnerModalDraw() {
    //<img src="" id="modalImage"/> <div class="modalSkinName" id="modalSkinName"></div> <div class="unboxButton button" id="unboxButton">Continue</div>
    //<div class="winnerModalHeader">Congratulations</div> <div class="winnerModalMessage">You won <span class="winnerAmount">$586.14</span> worth of skins.</div> <div class="winnerModalWarnMessage"><i class="fa fa-exclamation-triangle"></i> You are over your max inventory space. Upgrade inventory space or sell some items to bet and unbox again.</div> <div class="winnerModalSkinContainer"> </div>
    var winningSkinsValue = (totalTickets / 100).toFixed(2);
    console.log(totalTickets / 100);
    console.log((totalTickets / 100).toFixed(2));
    $(".modalMain").html("");
    if ($(".modalMain").hasClass("unbox")) {
      $(".modalMain").removeClass("unbox");
    }
    $(".modalMain").addClass("winner");
    $(".modalMain").append('<div class="modalClose">X</div><div class="winnerModalHeader">Congratulations!</div> <div class="winnerModalMessage">You won <span class="winnerAmount">$' + winningSkinsValue + '</span> worth of skins.</div><div class="winnerModalWarnMessage"><i class="fa fa-exclamation-triangle"></i> You are over your max inventory space. Upgrade inventory space or sell some items to bet and unbox again.</div><div class="winnerModalSkinContainer"> </div>');
    if (inventoryCurrent < inventoryMax) {
      $(".winnerModalWarnMessage").toggle();
    }

    var keys = Object.keys(pot);
    for (var i = 0; i < keys.length; i++) {
      var rarity = atob(pot[keys[i]]).replace(/\[[^\[]*$/g, "").match(/\[[^\[]*$/g).toString().match(/\b\w*\b/)[0];
      if (rarity === "regular" || rarity === "chroma" || rarity === "huntsman" || rarity === "butterfly" || rarity === "shadow" || rarity === "falchion") {
        rarity = "knife";
      }
      var item = eval(atob(pot[keys[i]]));
      var name = item["name"];
      var price = "$" + item["price"].toFixed(2);
      var img = item["img"] + "/70fx70f";

      $(".winnerModalSkinContainer").append('<div class="inventoryItem ' + rarity + '" id="'+ keys[i] +'" title="' + name + '"><div class="itemPrice">' + price + '</div> <img src=' + img + '> </div>');
    }
    $('.modalWindow').toggle();
  }
}

/*===============VISUAL===============*/

function backgroundCheck() {
  $('.display').width($(window).width() - 575);
}

$(window).on('resize', function(){
    backgroundCheck();
});

function skinOverflow() {
  if (inventoryCurrent > inventoryMax) {
    $('.mainInfoLabelWarning').css('display','inline-block');
  } else if ($(".mainInfoLabelWarning:visible") && inventoryCurrent <= inventoryMax) {
    $('.mainInfoLabelWarning').css('display','none');
  }
}
/*
$(".inventoryContainer").on({mouseenter: function() {
  var item = eval(atob(inventory[this.id]));
  var name = item["name"];
  $(".tooltipAnchor").html(this.title);
  $(".tooltipAnchor").show();
  $(".tooltipAnchor").stop().animate({opacity:1}, 400);
}, mouseleave: function() {
  $(".tooltipAnchor").css("opacity", 0);
  $(".tooltipAnchor").hide();
}}, ".inventoryItem").mousemove(function() {
    $(".tooltipAnchor").css({top: event.clientY - 125, left: event.clientX - 100});
});
*/

$(".tt").on({ mouseenter: function() {
        $(".tooltipAnchor").html($(this).attr("data-tt"));
        var ele = $(this).offset();
        $(".tooltipAnchor").css({top: ele.top - 28, left: ele.left - 100 + ($(this).width() / 2)});
        //console.log($(this).width() / 2);
        $(".tooltipAnchor").show();
    }, mouseleave: function() {
        $(".tooltipAnchor").hide();
        $(".tooltipAnchor").html("");
    }
});

/*===============TICKERS===============*/

setInterval(function() {
  update();
}, 1000 / fps);

setTimeout(function() {
  $("#notif").toggleClass("hidden");
  setTimeout(function() {
    $("#notif").toggleClass("hidden");
  }, 5000);
}, 1500);

setInterval(function() {
  saveGameState();
}, 3000);

/*===============SAVEGAME===============*/
function saveGameState() {
  var string = {
    "money": money,
    "inventory": inventory,
    "itemCounter": itemCounter,
    "currentCase": currentCase,
    "stackingUpgradesPurchased": stackingUpgradesPurchased
  };

  localStorage.setItem("savegame", JSON.stringify(string));
  console.log("Game Saved.");
}

function loadGameState() {
  if (localStorage.getItem("savegame") !== null) {
    inventoryClear();
    var saveGame = JSON.parse(localStorage.getItem("savegame"));
    //console.log(saveGame);
    money = saveGame["money"];
    inventory = saveGame["inventory"];
    inventoryCurrent = Object.keys(inventory).length;
    itemCounter = saveGame["itemCounter"];
    currentCase = saveGame["currentCase"];
    stackingUpgradesPurchased = saveGame["stackingUpgradesPurchased"];
    drawInventory();
    inventoryValue();
    skinOverflow();
    console.log("Game Save found. Successfully loaded.");
  } else {
    console.log("No save game detected.")
  }

}

function clearGameState() {
  localStorage.removeItem("savegame");
  console.log("Game save deleted!");
  location.reload();
}

/*===============CANVAS===============*/
function setHalfVolume() {
    var myAudio = document.getElementById("player_btn_0_3");  
    myAudio.volume = 0.5; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}

var audio = document.getElementById('player_btn_0_0');
var audio = document.getElementById('player_btn_0_1');
var audio = document.getElementById('player_btn_0_2');
var audio = document.getElementById('player_btn_0_3');
var audio = document.getElementById('player_btn_0_4');
var audio = document.getElementById('player_btn_0_5');

audio.addEventListener('volume', function() {
    console.log('changed.', arguments);
}, true);

function myFunction() {
var gameWelcome = alert("Welcome to the coin toss game!");
var x =  prompt("Enter a Value","0")
	if (+x > +money) {
	 window.alert = function(){};  
	} else {
		var y = 2;
		var z = x * y;
		var userChoice = prompt("Do you choose T or CT?").toUpperCase();
		var coinToss = Math.random();
			if (userChoice === "T") {
			if (coinToss < 0.5) {
				var result = alert("The coin landed on T. You Win!");
				money += z;
			}
			else {
				var result = alert("The coin landed on CT. You Lose!");
				money -= x;
			}
		}
			else {
			if (coinToss < 0.5) {
				var result = alert("The coin landed on T. You Lose!");
				money -= x;
			}   
			else {
				var result = alert("The coin landed on CT. You Win!");
				money += z;
			}
		}
	}
}	
/*==============================================================================
Canvas
==============================================================================*/



/*
// "+1" popups
var canvas = document.getElementById("drawing");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - $('.right').width();
canvas.height = window.innerHeight;
var tt = [];
function makeToolTip(element, ) {
}
*/


/*
$("#case").click(function() {
  var randX = Math.floor(Math.random() * 240);
  var randY = Math.floor(Math.random() * 180);
  var text = "+ $" + moneyPC;
  var alpha = 1.0;
  var interval = setInterval(function () {
    ctx.save();
    canvas.width = canvas.width;
    ctx.fillStyle = "rgba(255, 0, 0, " + alpha + ")";
    ctx.font = "20px Georgia";
    ctx.fillText(text, randX, randY);
    alpha -= 0.05;
    if (alpha < 0) {
      canvas.width = canvas.width;
      clear(interval);
    }
    ctx.restore();
  }, 50);
});
*/


/*
var fps = 1000 / 60;
var degrees = 0;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - $('.right').width();
canvas.height = window.innerHeight;
function drawBackground() {
  var image = new Image();
  image.onload = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(degrees * Math.PI / 180);
    ctx.drawImage(image, -image.width / 2, -image.height / 2);
    ctx.restore();
    degrees += 0.1;
    setTimeout(drawBackground, fps);
    //requestFrameAnimation(drawBackground);
  }
   image.src = "images/sunburst.png";
}
function drawCase() {
  var image = new Image();
  image.onload = function() {
    ctx.drawImage(image, canvas.width / 2 - image.width / 2, canvas.height / 2 - image.height / 2);
  }
  image.src = "images/case.png";
}
function drawOrder() {
  drawBackground();
}
drawOrder();
*/

function init() {
  loadGameState();
  caseInfo();
  backgroundCheck();
  drawCases();
  drawStackingUpgrades();
}
init();
