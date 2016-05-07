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
  case6: {name: "Winter Offensive Weapon Case", price: 1.68, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYu0aKfJz8a793gxNLfzvOkMunUwWgH7JIjj-qW8d7x2VXt_UBuMT3zIpjVLFEGDSGUSQ"},
  case7: {name: "CS:GO Weapon Case 3", price: 0.41, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5fSnf15k0KGacG0UtYXnzdTdkq-gariGlDgHvMcmjryZotqg2wCxrUVtfSmtc20v4quI" },
  case8: {name: "Operation Phoenix Weapon Case", price: 0.12, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUuh6qZJmlD7tiyl4OIlaGhYuLTzjhVupJ12urH89ii3lHlqEdoMDr2I5jVLFFSv_J2Rg" },
  case9: {name: "Huntsman Weapon Case", price: 1.04, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQu0PaQIm9DtY6wzYaIxKWtN7iJwW8G6Z0h2LqWoY6s2Qy2-0Q_Nzv7IJjVLFGZqUbjlQ" },
  case10: {name: "Operation Breakout Weapon Case", price: 0.07, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFMu1aPMI24auITjxteJwPXxY72AkGgIvZAniLjHpon2jlbl-kpvNjz3JJjVLFG9rl1YLQ" },
  case11: {name: "eSports 2014 Summer Case", price: 0.46, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsVk5kKhZDpYX3e1Y07ODdfDBH_pKzwdfSkqTyZLjQxjsF7sEoiLyQ9I2ljgHt_EZlYzr6J4DHIA9oZ1-D5BHglkR7Cs6C" },
  case12: {name: "Operation Vanguard Weapon Case", price: 0.28, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFIuh6rJImVGvtjllYaNka6la7rUxWkE65BzibvD9N7z0Q22-0Fka2GlJ5jVLFHqavWW2g" }
}

var knives = {
  regular: {
	knife1: {name: "★ Bayonet", price: 168.73, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaKQZ53P3NZXMXvYmykdLSxqWkZ7-HkjMIvpIj3u2Y84733gzh_RU_MG_zIYLEdQ45fxiOrdJh0ExF"},
	knife2: {name: "★ Bayonet | Blue Steel BS", price: 120.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-DkvbiKoTdl3lW7Ytzj7HFpIr3jQTiqEptYDjzcIeWJgI4YF_Z_Fm7lOvnjJbquJXKmiMypGB8sl3Uv6q3"},
	knife3: {name: "★ Bayonet | Blue Steel WW", price: 129.79, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-GkvP9JrbummpD78A_37vEp4rz3w21_hBrNWD7dteSeg8_M1jSrFK5wrrr18Xpu5TAwHNmsj5iuyhFiVGqLA"},
	knife4: {name: "★ Bayonet | Blue Steel FT", price: 139.42, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-GkvP9JrbummpD78A_37vEp4rz3w21_hBrNWD7dteSeg8_M1jSrFK5wrrr18Xpu5TAwHNmsj5iuyhFiVGqLA"},
	knife5: {name: "★ Bayonet | Blue Steel MW", price: 162.56, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-HnvD8J4Tdl3lW7Ysl2rCRoNum3lfn_Rc-Nzv6cIadcgE5NQyBrwPswei818S-v5qfzHpgpGB8so3I7TlV"},
	knife6: {name: "★ Bayonet | Blue Steel FN", price: 261.63, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-HnvD8J4Tdl3lW7Ysl2rCRoNum3lfn_Rc-Nzv6cIadcgE5NQyBrwPswei818S-v5qfzHpgpGB8so3I7TlV"},
	knife7: {name: "★ Bayonet | Boreal Forest BS", price: 80.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWNU6dNoteXA54vwxgDhrxJtMGj7II7GcVI5MgqE-gDsyObng5W_vM-bmyFi6CkitnbayRKpwUYbBWXvKcI"},
	knife8: {name: "★ Bayonet | Boreal Forest WW", price: 79.97, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWZU7Mxkh9bN9J7yjRrl_kFrYGjxcNOWewQ3MAmE-FG2yOe7gpW0uZyam3A2siVw7S6MzR3in1gSOUa5wz9E"},
	knife9: {name: "★ Bayonet | Boreal Forest FT", price: 79.82, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWZU7Mxkh9bN9J7yjRrl_kFrYGjxcNOWewQ3MAmE-FG2yOe7gpW0uZyam3A2siVw7S6MzR3in1gSOUa5wz9E"},
	knife10: {name: "★ Bayonet | Boreal Forest MW", price: 110.10, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWdY781lteXA54vwxgCxqBE6Nzv0IIbBdQU6ZAuC-Vm6wu68hMe46MzIzCE26SQk7S3YzECpwUYbTEk7wBI"},
	knife11: {name: "★ Bayonet | Boreal Forest FN", price: 216.23, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWdY781lteXA54vwxgCxqBE6Nzv0IIbBdQU6ZAuC-Vm6wu68hMe46MzIzCE26SQk7S3YzECpwUYbTEk7wBI"},	
	knife12: {name: "★ Bayonet | Case Hardened BS", price: 146.93, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-DkvbiKoTdl3lW7YspjrmV8N2n2wGyrxU4Yz-gJNOVcFI8M1uE_lbrlO260ZC_uZvOwXs3pGB8soiApmlV"},
	knife13: {name: "★ Bayonet | Case Hardened WW", price: 149.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-GkvP9JrbummpD78A_j7DEoo2njFHl_kM5Zz_1I9OUI1dtYw3U_1nskOvuhMS7vM_AnXdr7z5iuyiOIPCcdg"},
	knife14: {name: "★ Bayonet | Case Hardened FT", price: 156.48, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-GkvP9JrbummpD78A_j7DEoo2njFHl_kM5Zz_1I9OUI1dtYw3U_1nskOvuhMS7vM_AnXdr7z5iuyiOIPCcdg"},
	knife15: {name: "★ Bayonet | Case Hardened MW", price: 205.21, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-HnvD8J4Tdl3lW7Yso2LmZo9rw2lXlrUJrNT2iI4GVcFM-M1yDqFi7l-rq1J7ttM7JyXVjpGB8slOwrcti"},
	knife16: {name: "★ Bayonet | Case Hardened FN", price: 310.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-HnvD8J4Tdl3lW7Yso2LmZo9rw2lXlrUJrNT2iI4GVcFM-M1yDqFi7l-rq1J7ttM7JyXVjpGB8slOwrcti"},	
	knife17: {name: "★ Bayonet | Crimson Web BS", price: 108.30, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq4iOluHtDLfQhGxUppIlib7AptvwjFDs-EVtZmygIdKSdgNqaFHWr1TolO7u15Xqu57On3d9-n51YCbwx_k"},
	knife18: {name: "★ Bayonet | Crimson Web WW", price: 131.11, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq42Ok_7hPoTdl3lW7Yt00rDC992giQyw8xBqYm_0dobEe1VrMgzY-lK3kurohJG4ucnLwXVlpGB8ssQqSA2k"},
	knife19: {name: "★ Bayonet | Crimson Web FT", price: 130.30, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq42Ok_7hPoTdl3lW7Yt00rDC992giQyw8xBqYm_0dobEe1VrMgzY-lK3kurohJG4ucnLwXVlpGB8ssQqSA2k"},
	knife20: {name: "★ Bayonet | Crimson Web MW", price: 257.83, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq4yCkP_gDLfQhGxUppwj3r-Rpd3zjAy38xFsMGn0I9LGcA49Zw2B_VO5wL_r1Ja-vJrMySB9-n51NRRkGyg"},
	knife21: {name: "★ Bayonet | Crimson Web FN", price: 1531.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq4yCkP_gDLfQhGxUppwj3r-Rpd3zjAy38xFsMGn0I9LGcA49Zw2B_VO5wL_r1Ja-vJrMySB9-n51NRRkGyg"},
	knife22: {name: "★ Bayonet | Fade MW", price: 322.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJcAJE7dizq4yCkP_gDLfQhGxUppBwib3Hod6n2ADnqUdkMW30cYKRdwVtMlrV-gK5yLi71JXpu5XBzHd9-n51Ga5qFJk"},
	knife23: {name: "★ Bayonet | Fade FN", price: 328.90, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJcAJE7dizq4yCkP_gDLfQhGxUppBwib3Hod6n2ADnqUdkMW30cYKRdwVtMlrV-gK5yLi71JXpu5XBzHd9-n51Ga5qFJk"},
	knife24: {name: "★ Bayonet | Forest DDPAT BS", price: 81.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-DkvbiKoTdl3lW7Yt30-3HpIqsiwS18xFlY2jwLYGWdAE3aFvXrADol7zqgJC0tJ_IyHI1pGB8smaas5HW"},
	knife25: {name: "★ Bayonet | Forest DDPAT WW", price: 82.43, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-GkvP9JrbummpD78A_27HCp9qi2FawqBduYGCgI47HdFBtMg3R-wK9l-zugZPou5zJwHAyuD5iuyjZxtS4iw"},
	knife26: {name: "★ Bayonet | Forest DDPAT FT", price: 78.67, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-GkvP9JrbummpD78A_27HCp9qi2FawqBduYGCgI47HdFBtMg3R-wK9l-zugZPou5zJwHAyuD5iuyjZxtS4iw"},
	knife27: {name: "★ Bayonet | Forest DDPAT MW", price: 104.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-HnvD8J4Tdl3lW7Yt337rC99iijASxrUs-Z2ryJYeTcgY2NAvT8li4l-a80MLuu5zLnyBmpGB8ss5wKTWe"},
	knife28: {name: "★ Bayonet | Forest DDPAT FN", price: 325.10, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-HnvD8J4Tdl3lW7Yt337rC99iijASxrUs-Z2ryJYeTcgY2NAvT8li4l-a80MLuu5zLnyBmpGB8ss5wKTWe"},
	knife29: {name: "★ Bayonet | Night BS", price: 90.07, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL-DkvbiKoTdl3lW7Ysg07CYpdqsjQzl_0E_YWigLIGUI1U5aV_T-lm6krjvjZS66prByyRnpGB8suefpNvA"},
	knife30: {name: "★ Bayonet | Night WW", price: 99.47, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL-GkvP9JrbummpD78A_jL7F89jw2VGw_0M6MTrzd9XBIwc7MF-C_FO-xOvmgpG7tJnKy3Bl6D5iuyi5sRnq8g"},
	knife31: {name: "★ Bayonet | Night FT", price: 94.89, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL-GkvP9JrbummpD78A_jL7F89jw2VGw_0M6MTrzd9XBIwc7MF-C_FO-xOvmgpG7tJnKy3Bl6D5iuyi5sRnq8g"},
	knife32: {name: "★ Bayonet | Night MW", price: 180.13, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL-HnvD8J4Tdl3lW7Ysg2-uTpN2iiVLmrkM6YW3zJYeUcQY7aV3XqwO3wrvvhZ-96Z7Nzic3pGB8sk5ZbSKb"},
	knife33: {name: "★ Bayonet | Night FN", price: 975.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL-HnvD8J4Tdl3lW7Ysg2-uTpN2iiVLmrkM6YW3zJYeUcQY7aV3XqwO3wrvvhZ-96Z7Nzic3pGB8sk5ZbSKb"},
	knife34: {name: "★ Bayonet | Safari Mesh BS", price: 78.67, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--q5SKmcj8NrrHj1Rd6dd2j6fCrd2s0Aaw-EA4YG73cNSWdVdoZgzV_1i2l-bu1Jfo6Z-fm3c37CJx-z-DyLk6KurC"},
	knife35: {name: "★ Bayonet | Safari Mesh WW", price: 84.65, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--q5SKmcj5Nr_Yg2Zu5MRjjeyPp9Ws0QDjqEpuNmjxJdDBIVc4ZV7U-FG8kuztgZHttMmYznFg6SQk7WGdwUKUDs9gvQ"},
	knife36: {name: "★ Bayonet | Safari Mesh FT", price: 78.05, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--q5SKmcj5Nr_Yg2Zu5MRjjeyPp9Ws0QDjqEpuNmjxJdDBIVc4ZV7U-FG8kuztgZHttMmYznFg6SQk7WGdwUKUDs9gvQ"},
	knife37: {name: "★ Bayonet | Safari Mesh MW", price: 93.49, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--q5SKmcj4OrzZglRd6dd2j6fHpY-kigPlrRduYmmhI4LHdgRqMw7X8lO7wuvqg8O77szAmHtq7iEn-z-DyIB9jWZF"},
	knife38: {name: "★ Bayonet | Safari Mesh FN", price: 321.21, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--q5SKmcj4OrzZglRd6dd2j6fHpY-kigPlrRduYmmhI4LHdgRqMw7X8lO7wuvqg8O77szAmHtq7iEn-z-DyIB9jWZF"},
	knife39: {name: "★ Bayonet | Scorched BS", price: 87.56, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0n_L1JaLummpD78A_2-2YpoqgiQDk-EY9ZmH2dYfBdFM7MgvU-wC9yea80JftvJyfzHU2sj5iuyggPXmmzw"},
	knife40: {name: "★ Bayonet | Scorched WW", price: 86.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0mvLwOq7cqWdQ-sJ0xO_DrNil0AKx_xJpMWmmIoCXcQRoNVHRrFe9wee5jJW-usvMynY3syM8pSGKzDZP-os"},
	knife41: {name: "★ Bayonet | Scorched FT", price: 79.82, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0mvLwOq7cqWdQ-sJ0xO_DrNil0AKx_xJpMWmmIoCXcQRoNVHRrFe9wee5jJW-usvMynY3syM8pSGKzDZP-os"},
	knife42: {name: "★ Bayonet | Scorched MW", price: 101.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0m_7zO6_ummpD78A_3-qXrNqnjAPtqUVpNjvxJIOWdQE-MFDY_Qfvkr-6jZ7uv5vInyE17z5iuyhdvxrhyA"},
	knife43: {name: "★ Bayonet | Scorched FN", price: 340.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0m_7zO6_ummpD78A_3-qXrNqnjAPtqUVpNjvxJIOWdQE-MFDY_Qfvkr-6jZ7uv5vInyE17z5iuyhdvxrhyA"},
	knife44: {name: "★ Bayonet | Slaughter FT", price: 169.87, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJY6d6klb-GkvP9JrbummpD78A_27_C8Ir321Lj_0VkNTzxdYCccQU_aV3WqVnvl-vrg8fu7s-awHAx7j5iuyizZJPXwA"},
	knife45: {name: "★ Bayonet | Slaughter MW", price: 244.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJY6d6klb-HnvD8J4Tdl3lW7Ysj2LqVpdqh2wLm-UNoNmH0cdeQIVM9N1HZ_QXtx-fu0Z64uMnAyHRrpGB8stNTCQHv"},
	knife46: {name: "★ Bayonet | Slaughter FN", price: 333.93, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJY6d6klb-HnvD8J4Tdl3lW7Ysj2LqVpdqh2wLm-UNoNmH0cdeQIVM9N1HZ_QXtx-fu0Z64uMnAyHRrpGB8stNTCQHv"},
	knife47: {name: "★ Bayonet | Stained BS", price: 113.89, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0n_L1JaLummpD78A_3LDAoYn00FDj-EVtamnzJ9Wceg82YlrZ-QLtyLrthcXt6cmczSA1uz5iuygQfIQs8A"},
	knife48: {name: "★ Bayonet | Stained WW", price: 121.41, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0mvLwOq7cqWdQ-sJ0xLyZo4qk2QXt_0RrYmilJdPDdFA9ZF7T-1G5kunogJS87s-azyNis3Y8pSGKV1SJhw0"},
	knife49: {name: "★ Bayonet | Stained FT", price: 118.39, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0mvLwOq7cqWdQ-sJ0xLyZo4qk2QXt_0RrYmilJdPDdFA9ZF7T-1G5kunogJS87s-azyNis3Y8pSGKV1SJhw0"},
	knife50: {name: "★ Bayonet | Stained MW", price: 125.41, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0m_7zO6_ummpD78A_3r-RrNWti1Dl8kc6ammlIoPEJ1U_YQuDqwTvyejrgcS4vpnKySQwuj5iuyhwZ4qAMQ"},
	knife51: {name: "★ Bayonet | Stained FN", price: 166.46, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0m_7zO6_ummpD78A_3r-RrNWti1Dl8kc6ammlIoPEJ1U_YQuDqwTvyejrgcS4vpnKySQwuj5iuyhwZ4qAMQ"},
	knife52: {name: "★ Bayonet | Urban Masked BS", price: 85.36, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLPUl31I18lwmO7Eu92gjgzmqktsMDj3I9TGJFA9ZQnQr1Psl-vnjJC0usjMwXA273N05CrD30vga0eXEBM"},
	knife53: {name: "★ Bayonet | Urban Masked WW", price: 84.59, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLbUkmJE5fp9i_vG8MKijQTl_Bc_ZT3wI4KdJ1M2Mw6ErgLqkr3n1Ja1vZTLn3FmsnQh4H_fgVXp1kJdzvEN"},
	knife54: {name: "★ Bayonet | Urban Masked FT", price: 82.42, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLbUkmJE5fp9i_vG8MKijQTl_Bc_ZT3wI4KdJ1M2Mw6ErgLqkr3n1Ja1vZTLn3FmsnQh4H_fgVXp1kJdzvEN"},
	knife55: {name: "★ Bayonet | Urban Masked MW", price: 103.84, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLfYkWNF18lwmO7Eu9SkiwCw-RJsZTrxcI7GcAE_MFqC_AXrxby8gZHqvM6bySZg7CMgtyrD30vgFNz3E8k"},
	knife56: {name: "★ Bayonet | Urban Masked FN", price: 171.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLfYkWNF18lwmO7Eu9SkiwCw-RJsZTrxcI7GcAE_MFqC_AXrxby8gZHqvM6bySZg7CMgtyrD30vgFNz3E8k"},
	knife57: {name: "★ Gut Knife", price: 67.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3dihWoo2ywdPbx6Cna--IwTtUsMBwjLuZodit2wXm_ERrZWHwctKTcQVvZlHOug_pU950d94"},
	knife58: {name: "★ Gut Knife | Blue Steel BS", price: 70.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqP_xMq3IqWdQ-sJ0xO3DrNil3lDg-UY5N2_6LNOUI1A3aA7Y_AC4yevsh5686JifnSNnsyc8pSGKeUVXnMM"},
	knife59: {name: "★ Gut Knife | Blue Steel WW", price: 69.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqPrxN7LEm1Rd6dd2j6fF89Xxiway-ktuNW7wdoKUdA5raQ7SrlW5yejoh5G5tZvNwCdmuyYm-z-DyMBqk-Qb"},
	knife60: {name: "★ Gut Knife | Blue Steel FT", price: 68.17, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqPrxN7LEm1Rd6dd2j6fF89Xxiway-ktuNW7wdoKUdA5raQ7SrlW5yejoh5G5tZvNwCdmuyYm-z-DyMBqk-Qb"},
	knife61: {name: "★ Gut Knife | Blue Steel MW", price: 76.16, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqPv9NLPFqWdQ-sJ0xLnEodz3igSx-BY-Zj2mJ9LAc1Q3Y13Y_1Lrwrvr0MW7uZifwCBlv3E8pSGKHolYdI0"},
	knife62: {name: "★ Gut Knife | Blue Steel FN", price: 103.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqPv9NLPFqWdQ-sJ0xLnEodz3igSx-BY-Zj2mJ9LAc1Q3Y13Y_1Lrwrvr0MW7uZifwCBlv3E8pSGKHolYdI0"},
	knife63: {name: "★ Gut Knife | Boreal Forest BS", price: 51.13, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du4MBwnPD--Y3nj1H6rkA9MGinJYGQegU8N1DU-gDsxb3mgZ676p7KyXtq7Cdxs3rcmxK1hgYMMLKK05eNEw"},
	knife64: {name: "★ Gut Knife | Boreal Forest WW", price: 54.05, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du5cB1g_zMyoD0mlOx5UVtYmDyLNPEdwVtaV-Cq1S6lO_mjJ-07szAmiQyuCQqtn7dmBO0gk1SLrs4R_gpvnA"},
	knife65: {name: "★ Gut Knife | Boreal Forest FT", price: 50.06, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du5cB1g_zMyoD0mlOx5UVtYmDyLNPEdwVtaV-Cq1S6lO_mjJ-07szAmiQyuCQqtn7dmBO0gk1SLrs4R_gpvnA"},
	knife66: {name: "★ Gut Knife | Boreal Forest MW", price: 63.82, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du5Mx2gv3--Y3nj1H6qUFkMm2gctSUcQJtNVCCr1TqkO3m056-6M_JnSRnuicn4njZmB3iiQYMMLJLcEs9NA"},
	knife67: {name: "★ Gut Knife | Boreal Forest FN", price: 105.17, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du5Mx2gv3--Y3nj1H6qUFkMm2gctSUcQJtNVCCr1TqkO3m056-6M_JnSRnuicn4njZmB3iiQYMMLJLcEs9NA"},	
	knife68: {name: "★ Gut Knife | Case Hardened BS", price: 71.60, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqP_xMq3IqWdQ-sJ0xLuYrN2s2lXhrUpkMW_zI4WVd1Q8MlzYr1C5l-nqhZC1vZTJzSZj7nQ8pSGKnPOWYls"},
	knife69: {name: "★ Gut Knife | Case Hardened WW", price: 79.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqPrxN7LEm1Rd6dd2j6eUrdzw0Vfg-EY9N236IoSRIFU_YV_RqFi2kOjsg5e1u5XAmnAxsiR3-z-DyDOYcv8_"},
	knife70: {name: "★ Gut Knife | Case Hardened FT", price: 80.29, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqPrxN7LEm1Rd6dd2j6eUrdzw0Vfg-EY9N236IoSRIFU_YV_RqFi2kOjsg5e1u5XAmnAxsiR3-z-DyDOYcv8_"},
	knife71: {name: "★ Gut Knife | Case Hardened MW", price: 91.65, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqPv9NLPFqWdQ-sJ0xO-Qod2i2wOy_EdpYW_7LIDBclI6aVHV-Fm_lOe-gJG5vpvKyHYwv3M8pSGKIGsDSZw"},
	knife72: {name: "★ Gut Knife | Case Hardened FN", price: 114.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqPv9NLPFqWdQ-sJ0xO-Qod2i2wOy_EdpYW_7LIDBclI6aVHV-Fm_lOe-gJG5vpvKyHYwv3M8pSGKIGsDSZw"},	
	knife73: {name: "★ Gut Knife | Crimson Web BS", price: 60.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0n_L1JaLummpD78A_3L2Zo9Sn31Xm-0RtajjwddLEcVBvYA7W-VjqwOfsgce_vpyfmHEx6z5iuyh_csHsVQ"},
	knife74: {name: "★ Gut Knife | Crimson Web WW", price: 83.79, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0mvLwOq7cqWdQ-sJ0xLqZ99_w3FXt80tpMDyncY7EcARqMlyC_lO8wOrt1p-6uZzByHUxsyA8pSGK0TMvFOE"},
	knife75: {name: "★ Gut Knife | Crimson Web FT", price: 66.13, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0mvLwOq7cqWdQ-sJ0xLqZ99_w3FXt80tpMDyncY7EcARqMlyC_lO8wOrt1p-6uZzByHUxsyA8pSGK0TMvFOE"},
	knife76: {name: "★ Gut Knife | Crimson Web MW", price: 106.19, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0m_7zO6_ummpD78A_2LiW9Nuj0VGw-0JvYj2hJdKWI1NoZAnU-gPtyOzo0ZK4u52bm3Bh7j5iuyiVfFD71A"},
	knife77: {name: "★ Gut Knife | Crimson Web FN", price: 545.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0m_7zO6_ummpD78A_2LiW9Nuj0VGw-0JvYj2hJdKWI1NoZAnU-gPtyOzo0ZK4u52bm3Bh7j5iuyiVfFD71A"},
	knife78: {name: "★ Gut Knife | Fade MW", price: 136.81, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxD09q3kIW0m_7zO6_ummpD78A_3OyZrI-n2wPk_RY9NTrwINOSdQc9MlrW_gfqlbu9jJK4uJmYwCBlvT5iuyhGHAgcYg"},
	knife79: {name: "★ Gut Knife | Fade FN", price: 114.02, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxD09q3kIW0m_7zO6_ummpD78A_3OyZrI-n2wPk_RY9NTrwINOSdQc9MlrW_gfqlbu9jJK4uJmYwCBlvT5iuyhGHAgcYg"},
	knife80: {name: "★ Gut Knife | Forest DDPAT BS", price: 52.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqP_xMq3IqWdQ-sJ0xLHAptWkjFHjrkE5NzrwdtPAIQFsZg3UqVi9l7zt0ZTutcjOnCY17nQ8pSGK6FhQMfo"},
	knife81: {name: "★ Gut Knife | Forest DDPAT WW", price: 54.60, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqPrxN7LEm1Rd6dd2j6eQod7wjAKw_UVvYGH2JYLDIQA9ZFmF_wW-wui80ZK_vp3Ln3Rq7nYi-z-DyOnWDwct"},
	knife82: {name: "★ Gut Knife | Forest DDPAT FT", price: 54.30, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqPrxN7LEm1Rd6dd2j6eQod7wjAKw_UVvYGH2JYLDIQA9ZFmF_wW-wui80ZK_vp3Ln3Rq7nYi-z-DyOnWDwct"},
	knife83: {name: "★ Gut Knife | Forest DDPAT MW", price: 61.68, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqPv9NLPFqWdQ-sJ0xLGUoIqji1Xi-UVkZTr7coWTd1M7YVuE-Va3k-7o15LvuJyYwXRmsnE8pSGKxxB-nH8"},
	knife84: {name: "★ Gut Knife | Forest DDPAT FN", price: 95.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqPv9NLPFqWdQ-sJ0xLGUoIqji1Xi-UVkZTr7coWTd1M7YVuE-Va3k-7o15LvuJyYwXRmsnE8pSGKxxB-nH8"},
	knife85: {name: "★ Gut Knife | Night BS", price: 59.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqP_xMq3IqWdQ-sJ0xL7Drd2tigDl-xc6NW_1IoLHdwc4M1HV8lS9xri515e6upmbziZnsyA8pSGKTvPJmWM"},
	knife86: {name: "★ Gut Knife | Night WW", price: 58.37, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqPrxN7LEm1Rd6dd2j6fAodqgjFfn-EpvYzuhINWUdA5rYF-B_FS_wbzn1pDptMjAmCRkunIl-z-DyJdWNjR9"},
	knife87: {name: "★ Gut Knife | Night FT", price: 56.94, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqPrxN7LEm1Rd6dd2j6fAodqgjFfn-EpvYzuhINWUdA5rYF-B_FS_wbzn1pDptMjAmCRkunIl-z-DyJdWNjR9"},
	knife88: {name: "★ Gut Knife | Night MW", price: 82.63, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqPv9NLPFqWdQ-sJ0xOzE9t73igDk_xJoYG-hItKSdlA_aAvX-AO2ybjohZW0vMybynM273U8pSGKrp7Yw2U"},
	knife89: {name: "★ Gut Knife | Night FN", price: 241.84, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqPv9NLPFqWdQ-sJ0xOzE9t73igDk_xJoYG-hItKSdlA_aAvX-AO2ybjohZW0vMybynM273U8pSGKrp7Yw2U"},
	knife90: {name: "★ Gut Knife | Safari Mesh BS", price: 50.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLPUl31I18lwmO7Eu9ml2we1_RJuZ2n6JoSUclU8ZFzRqVW_krq5gZC1tZuYmnQwsnYisCzD30vg3qUbx98"},
	knife91: {name: "★ Gut Knife | Safari Mesh WW", price: 52.44, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLbUkmJE5fp9i_vG8MLx2QSy_BdpZmmlcoWVdQdvYV2G-1bvw-zv18O96MzByCA27nYrtyqPgVXp1t9T3ex9"},
	knife92: {name: "★ Gut Knife | Safari Mesh FT", price: 51.44, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLbUkmJE5fp9i_vG8MLx2QSy_BdpZmmlcoWVdQdvYV2G-1bvw-zv18O96MzByCA27nYrtyqPgVXp1t9T3ex9"},
	knife93: {name: "★ Gut Knife | Safari Mesh MW", price: 53.72, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLfYkWNF18lwmO7Eu9nz3Qyw_ERrN271JYKdIFc-YlmC_1m5l7i5hMS87p7Nz3c3uHMm4X7D30vgVFLgw28"},
	knife94: {name: "★ Gut Knife | Safari Mesh FN", price: 75.61, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLfYkWNF18lwmO7Eu9nz3Qyw_ERrN271JYKdIFc-YlmC_1m5l7i5hMS87p7Nz3c3uHMm4X7D30vgVFLgw28"},
	knife95: {name: "★ Gut Knife | Scorched BS", price: 57.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj8NrrHj1Rd6dd2j6eY9tj00ALh-kI_ZGrxcNPEdQI9YAvQ_lS6l-bqhpG6tMzNnCZr73R3-z-DyD8PeNWQ"},
	knife96: {name: "★ Gut Knife | Scorched WW", price: 54.94, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj5Nr_Yg2Zu5MRjjeyPot3zjQzi_0FrMGylLY-SIQI6Yg6B-1ntxu27gMC47smbm3thu3QqtGGdwUIO0yEj6Q"},
	knife97: {name: "★ Gut Knife | Scorched FT", price: 53.59, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj5Nr_Yg2Zu5MRjjeyPot3zjQzi_0FrMGylLY-SIQI6Yg6B-1ntxu27gMC47smbm3thu3QqtGGdwUIO0yEj6Q"},
	knife98: {name: "★ Gut Knife | Scorched MW", price: 65.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj4OrzZglRd6dd2j6eXoNv0jgLg_RVpZ2_zJIadclQ7Ml2F_Vi_wu3rhJbp7pnOyntk7HQk-z-DyOfOL3QM"},
	knife99: {name: "★ Gut Knife | Scorched FN", price: 114.02, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj4OrzZglRd6dd2j6eXoNv0jgLg_RVpZ2_zJIadclQ7Ml2F_Vi_wu3rhJbp7pnOyntk7HQk-z-DyOfOL3QM"},
	knife100: {name: "★ Gut Knife | Slaughter FT", price: 80.40, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxP08azlpKKqPrxN7LEm1Rd6dd2j6eTptSliwK2rRBuamzxdY-UIA87YQrZrljqybzsgp_t6Z3PwCNjvXQr-z-DyHD2KsrX"},
	knife101: {name: "★ Gut Knife | Slaughter MW", price: 88.35, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxP08azlpKKqPv9NLPFqWdQ-sJ0xOqSotjz0FHj-hVvY2mmIIWQc1Q4aViC_FO6x7q-g5K56J6dnCNju3Q8pSGKFg_49QU"},
	knife102: {name: "★ Gut Knife | Slaughter FN", price: 106.63, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxP08azlpKKqPv9NLPFqWdQ-sJ0xOqSotjz0FHj-hVvY2mmIIWQc1Q4aViC_FO6x7q-g5K56J6dnCNju3Q8pSGKFg_49QU"},
	knife103: {name: "★ Gut Knife | Stained BS", price: 62.19, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j8NrrHj1Rd6dd2j6eQp4-hjQ3jqEs_Z2_yJIWdcAI7NVHQ-1K_l7y7gJ7uu8zOznRmu3Uj-z-DyOsRAYmy"},
	knife104: {name: "★ Gut Knife | Stained WW", price: 61.60, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j5Nr_Yg2Zu5MRjjeyPotqg2gDgrUU5Zm-nJdKVdg5vNAyG8wTvwum5hMXptJnAnHZi7nIitmGdwUII6z1SkA"},
	knife105: {name: "★ Gut Knife | Stained FT", price: 58.83, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j5Nr_Yg2Zu5MRjjeyPotqg2gDgrUU5Zm-nJdKVdg5vNAyG8wTvwum5hMXptJnAnHZi7nIitmGdwUII6z1SkA"},
	knife106: {name: "★ Gut Knife | Stained MW", price: 65.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j4OrzZglRd6dd2j6eS89n32AHjqERtYz-gIIKVcVA7ZQzT81a3l-rnh8C5vZycm3Rq7ihw-z-DyB1e9elV"},
	knife107: {name: "★ Gut Knife | Stained FN", price: 88.93, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j4OrzZglRd6dd2j6eS89n32AHjqERtYz-gIIKVcVA7ZQzT81a3l-rnh8C5vZycm3Rq7ihw-z-DyB1e9elV"},
	knife108: {name: "★ Gut Knife | Urban Masked BS", price: 85.36, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXunm5Q_txOhujT8om7iVCw_EJqYGygddKSI1U_NVqFrlbvw--6gpS8vJjOwCBlu3Eltn_Ungv330_hbfuoMQ"},
	knife109: {name: "★ Gut Knife | Urban Masked WW", price: 84.59, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXum25V4dB8teXA54vwxgPgrkQ6ZmH6d9WRcQQ4ZFrU-Vi2x-e9h8fv6Z3PziAysiFz5XrblxSpwUYbNI9lScA"},
	knife110: {name: "★ Gut Knife | Urban Masked FT", price: 82.42, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXum25V4dB8teXA54vwxgPgrkQ6ZmH6d9WRcQQ4ZFrU-Vi2x-e9h8fv6Z3PziAysiFz5XrblxSpwUYbNI9lScA"},
	knife111: {name: "★ Gut Knife | Urban Masked MW", price: 103.84, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXummJW4NFOhujT8om73wWy_0ttYmH7LICVcFI9M1zYrFK7lO7shcTov5ScmiAw63Mls33fygv330-gpCcFhQ"},
	knife112: {name: "★ Gut Knife | Urban Masked FN", price: 171.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXummJW4NFOhujT8om73wWy_0ttYmH7LICVcFI9M1zYrFK7lO7shcTov5ScmiAw63Mls33fygv330-gpCcFhQ"},
	knife113: {name: "★ M9 Bayonet", price: 185.85, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3fGR97t2vm46Og7mlMu6ExzsI7ZVy0rGWrN7w3VDh_RY9Y22nd4fDdAE4NFzUrFjqlL3tm9bi6x2aUKuH"},
    knife114: {name: "★ M9 Bayonet | Blue Steel BS", price: 180.81, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj2P67UklRZ7cRnk9bN9J7yjRrgrkRqZz3yddXHewA9NFvW-VC9lOnm08Luup3NyyEw6yVw7Cncy0Cwn1gSOfymx4IO"},
    knife115: {name: "★ M9 Bayonet | Blue Steel WW", price: 179.60, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj2P67UklRc7cF4n-T--Y3nj1H6qEo5ZW_yJ9OWew5sZV6Fq1O8lLq-gJe-vZycmnMwvCIq53uOzkC2iAYMMLIoQ_29Zw"},
    knife116: {name: "★ M9 Bayonet | Blue Steel FT", price: 194.39, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj2P67UklRc7cF4n-T--Y3nj1H6qEo5ZW_yJ9OWew5sZV6Fq1O8lLq-gJe-vZycmnMwvCIq53uOzkC2iAYMMLIoQ_29Zw"},
    knife117: {name: "★ M9 Bayonet | Blue Steel MW", price: 204.67, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj2P67UklRd4cJ5ntbN9J7yjRq3rUI5Mjz2dobBdgRtYQvS_FTrlOno1MLo78nIy3Jk73Jz4i7VzhHln1gSOQ4y0ztq"},
    knife118: {name: "★ M9 Bayonet | Blue Steel FN", price: 288.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj2P67UklRd4cJ5ntbN9J7yjRq3rUI5Mjz2dobBdgRtYQvS_FTrlOno1MLo78nIy3Jk73Jz4i7VzhHln1gSOQ4y0ztq"},
    knife119: {name: "★ M9 Bayonet | Boreal Forest BS", price: 107.34, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj-jNyoTwiUKtlB89IT6mOoCXew9tYQ7QqwK7yL-7gJS9vZnInCNl7CAn4njfyRLj1BkdZ-E61KSACQLJjIYzs5A"},
    knife120: {name: "★ M9 Bayonet | Boreal Forest WW", price: 102.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj-jNyoHwjF2hpiwwMiukcZiXJA84aAnS_Fm3k7jqh5e0u8zKnXQw7il3sCvdmUDhiRBKPeBqg_SZVxzAUOGh-x8F"},
    knife121: {name: "★ M9 Bayonet | Boreal Forest FT", price: 100.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj-jNyoHwjF2hpiwwMiukcZiXJA84aAnS_Fm3k7jqh5e0u8zKnXQw7il3sCvdmUDhiRBKPeBqg_SZVxzAUOGh-x8F"},
    knife122: {name: "★ M9 Bayonet | Boreal Forest MW", price: 125.39, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj-jNyoD8j1yglB89IT6mOoaSdlc5MFHWq1m5xL_qgsO67cnIzydr6yYl7X3ZmkO1gk1LOuFp16eACQLJZSfpy04"},
    knife123: {name: "★ M9 Bayonet | Boreal Forest FN", price: 251.41, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj-jNyoD8j1yglB89IT6mOoaSdlc5MFHWq1m5xL_qgsO67cnIzydr6yYl7X3ZmkO1gk1LOuFp16eACQLJZSfpy04"},  
    knife124: {name: "★ M9 Bayonet | Case Hardened BS", price: 168.68, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRZ7cRnk9bN9J7yjRqy-EM-amn3J4OVJAU3Yl3W_1O5w7q61JC-u5TNn3NquXYk43jYmBfmn1gSOfZ4vD5g"},
    knife125: {name: "★ M9 Bayonet | Case Hardened WW", price: 172.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRc7cF4n-T--Y3nj1H6_UBuammldo_GdARsYw6CqVbtyLjt0Mfpu5jLyHFjviZzs3nbnkO2iQYMMLLSEHvXoA"},
    knife126: {name: "★ M9 Bayonet | Case Hardened FT", price: 179.97, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRc7cF4n-T--Y3nj1H6_UBuammldo_GdARsYw6CqVbtyLjt0Mfpu5jLyHFjviZzs3nbnkO2iQYMMLLSEHvXoA"},
    knife127: {name: "★ M9 Bayonet | Case Hardened MW", price: 213.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRd4cJ5ntbN9J7yjRrj_hE6NjqlLNOccgE9MljVqAC8wOzqhJ60tc_BnXZqsigrs3bdmRO-n1gSObDaDdZj"},
    knife128: {name: "★ M9 Bayonet | Case Hardened FN", price: 362.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRd4cJ5ntbN9J7yjRrj_hE6NjqlLNOccgE9MljVqAC8wOzqhJ60tc_BnXZqsigrs3bdmRO-n1gSObDaDdZj"},  
    knife129: {name: "★ M9 Bayonet | Crimson Web BS", price: 140.27, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjjNrnCqWNU6dNoteXA54vwxle2-0ZlMG70ItfDcg83YFyB-1S6wu-618O0tMjJmCRl7yZ3sy6MykSpwUYbwc40mvc"},
    knife130: {name: "★ M9 Bayonet | Crimson Web WW", price: 177.84, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjjNrnCqWZU7Mxkh9bN9J7yjRqwrxVvMGDyI9KSdgQ-Z1HV_VfsyLu-hZe1tMzJnHFgv3IitHmLzhO0n1gSOc4nk3bB"},
    knife131: {name: "★ M9 Bayonet | Crimson Web FT", price: 195.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjjNrnCqWZU7Mxkh9bN9J7yjRqwrxVvMGDyI9KSdgQ-Z1HV_VfsyLu-hZe1tMzJnHFgv3IitHmLzhO0n1gSOc4nk3bB"},
    knife132: {name: "★ M9 Bayonet | Crimson Web MW", price: 606.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5wOuqzNQhqKzvAALlRUvAuywD1NjA36tRcWN6x_685JV2t49fYNuJ5YtFEGZKFWKWGMF38u01s1PRbfMaK9inp3Xu7Oz8OCRTs8mkHzPjH5OVNhzgQCA"},
    knife133: {name: "★ M9 Bayonet | Crimson Web FN", price: 4375.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5wOuqzNQhqKzvAALlRUvAuywD1NjA36tRcWN6x_685JV2t49fYNuJ5YtFEGZKFWKWGMF38u01s1PRbfMaK9inp3Xu7Oz8OCRTs8mkHzPjH5OVNhzgQCA"},
    knife134: {name: "★ M9 Bayonet | Fade MW", price: 382.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KlsjyMr_UqWdY781lteXA54vwxgLi-0FrNWqiI4CWIw5sYQnY81m3xLjs18LouZjNwXc3uCF27SuOy0SpwUYbghNKfR8"},
    knife135: {name: "★ M9 Bayonet | Fade FN", price: 382.76, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KlsjyMr_UqWdY781lteXA54vwxgLi-0FrNWqiI4CWIw5sYQnY81m3xLjs18LouZjNwXc3uCF27SuOy0SpwUYbghNKfR8"},
    knife136: {name: "★ M9 Bayonet | Forest DDPAT BS", price: 100.86, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRZ7cRnk9bN9J7yjRrj_kpkYDv3IIeddwY_ZVvT_1G8yO_mgsPtv5icyHY3s3Mq5yncmhy3n1gSOUso9JJN"},
    knife137: {name: "★ M9 Bayonet | Forest DDPAT WW", price: 114.47, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRc7cF4n-T--Y3nj1H6_0RtYD32IY_BIwY4aA3R-VLrxue90Ja_tZ6fmHpn7CNwtCuPzBzhiQYMMLJQizr10Q"},
    knife138: {name: "★ M9 Bayonet | Forest DDPAT FT", price: 96.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRc7cF4n-T--Y3nj1H6_0RtYD32IY_BIwY4aA3R-VLrxue90Ja_tZ6fmHpn7CNwtCuPzBzhiQYMMLJQizr10Q"},
    knife139: {name: "★ M9 Bayonet | Forest DDPAT MW", price: 123.76, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRd4cJ5ntbN9J7yjRrlrUZtYjz3Io-dc1c5YAyD_FbvlL3tjJa47cvMmnUyuSl2sHrfnRO_n1gSOSrPFa2E"},
	knife140: {name: "★ M9 Bayonet | Forest DDPAT FN", price: 355.70, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRd4cJ5ntbN9J7yjRrlrUZtYjz3Io-dc1c5YAyD_FbvlL3tjJa47cvMmnUyuSl2sHrfnRO_n1gSOSrPFa2E"},
	knife141: {name: "★ M9 Bayonet | Night BS", price: 119.03, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRZ7cRnk9bN9J7yjRrsrRdvMjz0cY-QdwE4YF_S-Vm4yOi5hpHo7szOyHswvyUq4C3bmEG2n1gSOUNlScIM"},
    knife142: {name: "★ M9 Bayonet | Night WW", price: 134.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRc7cF4n-T--Y3nj1H6_0RoMmv0cYCRJlU5Yw7SqwS4x-_v1pXqvJjMnHA1uCUgsC7UnRC1gwYMMLKQrWJFUg"},
    knife143: {name: "★ M9 Bayonet | Night FT", price: 135.67, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRc7cF4n-T--Y3nj1H6_0RoMmv0cYCRJlU5Yw7SqwS4x-_v1pXqvJjMnHA1uCUgsC7UnRC1gwYMMLKQrWJFUg"},
    knife144: {name: "★ M9 Bayonet | Night MW", price: 249.56, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRd4cJ5ntbN9J7yjRrhqhA-MTygIILEcwRvYgzVr1S9yefv1pHtvsjMwSMy7CghtCrflxK2n1gSORdzljmC"},
    knife145: {name: "★ M9 Bayonet | Night FN", price: 1041.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRd4cJ5ntbN9J7yjRrhqhA-MTygIILEcwRvYgzVr1S9yefv1pHtvsjMwSMy7CghtCrflxK2n1gSORdzljmC"},
    knife146: {name: "★ M9 Bayonet | Safari Mesh BS", price: 100.09, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp5j-jX7LP5iUazrl06a277I9fBcFBvM13VqQS-levohMC6vpvNmCc16SRzty3dlxHh0BhLcKUx0m8uYnFB"},
    knife147: {name: "★ M9 Bayonet | Safari Mesh WW", price: 88.93, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp8j-3I4IHKhFWmrBZyMGj2JNWReg43MF_Y_AO2yOrshMLov5vPwXVn6yF2tirfzRSw1B1MbPsv26I55_R-ww"},
    knife148: {name: "★ M9 Bayonet | Safari Mesh FT", price: 96.97, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp8j-3I4IHKhFWmrBZyMGj2JNWReg43MF_Y_AO2yOrshMLov5vPwXVn6yF2tirfzRSw1B1MbPsv26I55_R-ww"},
    knife149: {name: "★ M9 Bayonet | Safari Mesh MW", price: 100.60, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp9g-7J4bP5iUazrl1tY2H6ItWSIQU-Y1DX_Vjsx-jnjZ657Z_LwCdm6HEl4nzbnBLlhxEfcKUx0rp-zgq-"},
    knife150: {name: "★ M9 Bayonet | Safari Mesh FN", price: 159.21, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp9g-7J4bP5iUazrl1tY2H6ItWSIQU-Y1DX_Vjsx-jnjZ657Z_LwCdm6HEl4nzbnBLlhxEfcKUx0rp-zgq-"},
    knife151: {name: "★ M9 Bayonet | Scorched BS", price: 109.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jwMqvBmm5u4MBwnPD--Y3nj1H6qBZvZGyidtKWIAU4Zl7Q_lTvlem81pW4us_KnCBn73ImsHvazEayggYMMLJyFcWEgQ"},
    knife152: {name: "★ M9 Bayonet | Scorched WW", price: 88.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jwMqvBmm5u5cB1g_zMyoD0mlOx5Uo_NWDwd4GTdA5rYQ2B8lm-xOa7jcO7vJ6dnHBhs3V04iuPmUbj1R9SLrs479ENwoU"},
    knife153: {name: "★ M9 Bayonet | Scorched FT", price: 90.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jwMqvBmm5u5cB1g_zMyoD0mlOx5Uo_NWDwd4GTdA5rYQ2B8lm-xOa7jcO7vJ6dnHBhs3V04iuPmUbj1R9SLrs479ENwoU"},
    knife154: {name: "★ M9 Bayonet | Scorched MW", price: 128.48, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jwMqvBmm5u5Mx2gv3--Y3nj1H6qUttYz-mcoKTdg83Z1HX_FG4l7jt1pG8vZ7AwXJm6HVw4nfZzBDm1AYMMLItqjyW3w"},
    knife155: {name: "★ M9 Bayonet | Scorched FN", price: 173.37, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jwMqvBmm5u5Mx2gv3--Y3nj1H6qUttYz-mcoKTdg83Z1HX_FG4l7jt1pG8vZ7AwXJm6HVw4nfZzBDm1AYMMLItqjyW3w"},
    knife156: {name: "★ M9 Bayonet | Slaughter FT", price: 288.44, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjuNrnDl1Rc7cF4n-T--Y3nj1H6_EU_ZjynJ4CUcQQ3ZVvRrle6l-a7jZbo75XPn3AxvHIm43veyxHi1QYMMLIuBhODCg"},
    knife157: {name: "★ M9 Bayonet | Slaughter MW", price: 342.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjuNrnDl1Rd4cJ5ntbN9J7yjRrh-BVlZW3ydoTHdABsZ13Y_Qe5xue6gMC-vp-amntr6yQq4XfUzhTin1gSOZHog2Kf"},
    knife158: {name: "★ M9 Bayonet | Slaughter FN", price: 563.37, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjuNrnDl1Rd4cJ5ntbN9J7yjRrh-BVlZW3ydoTHdABsZ13Y_Qe5xue6gMC-vp-amntr6yQq4XfUzhTin1gSOZHog2Kf"},
    knife159: {name: "★ M9 Bayonet | Stained BS", price: 124.55, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjyPKnSk29u4MBwnPD--Y3nj1H6-kJuamvyLYGTIwJsYVGFrgW7wejrhpa4uJ2YziRns3Ei5n7VmhO-gQYMMLKI5mr6SQ"},
    knife160: {name: "★ M9 Bayonet | Stained WW", price: 124.82, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjyPKnSk29u5cB1g_zMyoD0mlOx5RE5N2mmcNSXJ1VqZVjRrwK9le270Ze7v5XMy3RqvSkg43ban0e-hx1SLrs4e2w5pZ8"},
    knife161: {name: "★ M9 Bayonet | Stained FT", price: 129.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjyPKnSk29u5cB1g_zMyoD0mlOx5RE5N2mmcNSXJ1VqZVjRrwK9le270Ze7v5XMy3RqvSkg43ban0e-hx1SLrs4e2w5pZ8"},
    knife162: {name: "★ M9 Bayonet | Stained MW", price: 136.80, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjyPKnSk29u5Mx2gv3--Y3nj1H6rkdsajvyLIKQcAY9YQ7Trwfvxe_ugp7uuJ7AzHdl7iZ05XnayUSygwYMMLKw8Vd9_Q"},
    knife163: {name: "★ M9 Bayonet | Stained FN", price: 199.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjyPKnSk29u5Mx2gv3--Y3nj1H6rkdsajvyLIKQcAY9YQ7Trwfvxe_ugp7uuJ7AzHdl7iZ05XnayUSygwYMMLKw8Vd9_Q"},
    knife164: {name: "★ M9 Bayonet | Urban Masked BS", price: 101.78, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jgMqvUqX5D6sR_teHE9Jrst1i1uRQ5fWGhIICRJAQ_YAyG81i7kubrhZW_vJ3OnXo36HQhtH_ZnBW2iR1MbrRxxavJiZpSILw"},
    knife165: {name: "★ M9 Bayonet | Urban Masked WW", price: 98.33, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jgMqvUqX5D6sR_teTE8YXghWu4qgE7Nnf7cYCXcA9tZ1DZ_QO3x-7sjZS7ucidwSM26XZ07HbczRO_hxoZPeA8m7XAHsJxu2aY"},
    knife166: {name: "★ M9 Bayonet | Urban Masked FT", price: 92.32, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jgMqvUqX5D6sR_teTE8YXghWu4qgE7Nnf7cYCXcA9tZ1DZ_QO3x-7sjZS7ucidwSM26XZ07HbczRO_hxoZPeA8m7XAHsJxu2aY"},
    knife167: {name: "★ M9 Bayonet | Urban Masked MW", price: 129.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jgMqvUqX5D6sR_teXI8oTht1i1uRQ5fTv6IIbBe1JvYFHWq1i3lbi-hJbqvJWYwXswvHQg7XvezRC_hRwaO7NxxavJcnTzV04"},
    knife168: {name: "★ M9 Bayonet | Urban Masked FN", price: 201.71, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jgMqvUqX5D6sR_teXI8oTht1i1uRQ5fTv6IIbBe1JvYFHWq1i3lbi-hJbqvJWYwXswvHQg7XvezRC_hRwaO7NxxavJcnTzV04"},
	knife169: {name: "★ Karambit", price: 275.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3ejxQ7dG0nZTFz_WgaurTwzMA6ZFz0-qW99mn0Qzk_EJoYWylJtSXe1c9aAnSq1C8l_Cv28F7-X3KYA"},
    knife170: {name: "★ Karambit | Blue Steel BS", price: 249.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_unm5Q_txOhujT8om7iQK2rhA_MWv1LIaSegc2aFjR-lK7w-q70MW67pmfzCY3syF25Hvdmwv3308f-tSK-w"},
    knife171: {name: "★ Karambit | Blue Steel WW", price: 255.47, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_um25V4dB8teXA54vwxgLmqhFtYT-nIYecJgI3Z1DZ_FfqyLvqhpK-tJSbnSY2vSBx43eLn0epwUYbMQqd_ig"},
    knife172: {name: "★ Karambit | Blue Steel FT", price: 273.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_um25V4dB8teXA54vwxgLmqhFtYT-nIYecJgI3Z1DZ_FfqyLvqhpK-tJSbnSY2vSBx43eLn0epwUYbMQqd_ig"},
    knife173: {name: "★ Karambit | Blue Steel MW", price: 314.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_ummJW4NFOhujT8om72QCx8kFkMD2mcNOcc1c-ZAnU_Ve7x7y8hMe4u52anXdiv3IrsXjemgv3308svFRjrA"},
    knife174: {name: "★ Karambit | Blue Steel FN", price: 350.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_ummJW4NFOhujT8om72QCx8kFkMD2mcNOcc1c-ZAnU_Ve7x7y8hMe4u52anXdiv3IrsXjemgv3308svFRjrA"},
    knife175: {name: "★ Karambit | Boreal Forest BS", price: 155.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle-sBwhtbJ8I3jkWu4qgE7NnehLdKQewZrMFvRrAK9kOnv1sTp6p7My3A1viIq4S3dmRbjh04aa-dum7XAHpYVBQgv"},
    knife176: {name: "★ Karambit | Boreal Forest WW", price: 150.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle-sBwhtbM8Ij8nVmLpxIuNDztd4XDd1U-MFCDqVi3kL-7gsW8upnPziQxsnF24HrcyxzkhxxEPbBp0eveFwujSqEF8A"},
    knife177: {name: "★ Karambit | Boreal Forest FT", price: 146.05, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle-sBwhtbM8Ij8nVmLpxIuNDztd4XDd1U-MFCDqVi3kL-7gsW8upnPziQxsnF24HrcyxzkhxxEPbBp0eveFwujSqEF8A"},
    knife178: {name: "★ Karambit | Boreal Forest MW", price: 200.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle-sBwhtbN_Iv9nGu4qgE7Nnf7dtOce1Q3M13T-Fa7xejs0MXt753AnXJruiMn7C6LnBC1h0tIO-1um7XAHtmw6SCz"},
    knife179: {name: "★ Karambit | Boreal Forest FN", price: 370.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle-sBwhtbN_Iv9nGu4qgE7Nnf7dtOce1Q3M13T-Fa7xejs0MXt753AnXJruiMn7C6LnBC1h0tIO-1um7XAHtmw6SCz"},
    knife180: {name: "★ Karambit | Case Hardened BS", price: 272.66, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_unm5Q_txOhujT8om70Abg-Bdoa2-iIoaRdlU7NA2GrlTtkuvs0MXtu5zOwHExs3Yj5neMzQv33088DhhWAw"},
    knife181: {name: "★ Karambit | Case Hardened WW", price: 285.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_um25V4dB8teXA54vwxlfk_kU9ZWqgJ9fGJwQ3Z1vY-wK2wOfo15K1uZXJm3ox6Skqsy3emUGpwUYbA4Ce6rU"},
    knife182: {name: "★ Karambit | Case Hardened FT", price: 359.28, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_um25V4dB8teXA54vwxlfk_kU9ZWqgJ9fGJwQ3Z1vY-wK2wOfo15K1uZXJm3ox6Skqsy3emUGpwUYbA4Ce6rU"},
    knife183: {name: "★ Karambit | Case Hardened MW", price: 390.71, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_ummJW4NFOhujT8om73Qay8kFuaj3xLYCVJAM7ZF-B8li9kOfm1sW6u5SfyHNru3Im7SvUlwv330-EAAozoQ"},
    knife184: {name: "★ Karambit | Case Hardened FN", price: 500.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_ummJW4NFOhujT8om73Qay8kFuaj3xLYCVJAM7ZF-B8li9kOfm1sW6u5SfyHNru3Im7SvUlwv330-EAAozoQ"},
    knife185: {name: "★ Karambit | Crimson Web BS", price: 224.04, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0gPL2IITZk2pH8fp9i_vG8MKljQbn_hI-NT2hd4Kcc1I4Z13Y_wfvxrvmgsXvtZ6dwHtq7CQlsCmIgVXp1qIe6Gdc"},
    knife186: {name: "★ Karambit | Crimson Web WW", price: 335.73, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0gPL2IITck29Y_chOhujT8om7iwLn_Ec4NWrwdoDDIFNtZlHT-QW6xOzmgZ_t6pTNznUyvnQg7Crclwv330__CL9_dg"},
    knife187: {name: "★ Karambit | Crimson Web FT", price: 342.03, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0gPL2IITck29Y_chOhujT8om7iwLn_Ec4NWrwdoDDIFNtZlHT-QW6xOzmgZ_t6pTNznUyvnQg7Crclwv330__CL9_dg"},
    knife188: {name: "★ Karambit | Crimson Web MW", price: 543.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0gPL2IITdn2xZ_Pp9i_vG8MKj2Qbl_EdlZziiddOXdAY2YAvT-wW2xrjugJG_tcvNyyBn6SEm4XuMgVXp1n8qZn5H"},
    knife189: {name: "★ Karambit | Crimson Web FN", price: 2305.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0gPL2IITdn2xZ_Pp9i_vG8MKj2Qbl_EdlZziiddOXdAY2YAvT-wW2xrjugJG_tcvNyyBn6SEm4XuMgVXp1n8qZn5H"},
    knife190: {name: "★ Karambit | Fade MW", price: 558.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/rnaQ4ha83FCItdize6buGhY6WlNSzNIQXHsLqZ9Apr1nfacZT6CaQihsxE1dxrKUDj0BFFvT0hRacAy7nlaxt2g_sxNepJ1LOB3AR16MoYUKK0oMH4acDVZxPaPfWrS9WXu2BFmoik44HcZDb4-ygBsRQkoPi4lTWiZT_okDtu8zI7YSW_eORC93wkYCjOfRGi9IG1nWm0tdKwOqhAOw7yhguRE=/"},
    knife191: {name: "★ Karambit | Fade FN", price: 610.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/rnaQ4ha83FCItdize6buGhY6WlNSzNIQXHsLqZ9Apr1nfacZT6CaQihsxE1dxrKUDj0BFFvT0hRacAy7nlaxt2g_sxNepJ1LOB3AR16MoYUKK0oMH4acDVZxPaPfWrS9WXu2BFmoik44HcZDb4-ygBsRQkoPi4lTWiZT_okDtu8zI7YSW_eORC93wkYCjOfRGi9IG1nWm0tdKwOqhAOw7yhguRE=/"},
    knife192: {name: "★ Karambit | Forest DDPAT BS", price: 146.52, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0k_PkMq_unm5Q_txOhujT8om7jga1rxFrYDumJNeSIVQ5NVjY8we5xu7pgpfv6JXJySBl6HRx7Crcmwv330-ZDgPvlQ"},
    knife193: {name: "★ Karambit | Forest DDPAT WW", price: 157.33, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0k_PkMq_um25V4dB8teXA54vwxlDm-xZtNWvxcdOTIw42YF7U-Ae3yOu-jZS8vJXOzCFhvyR2ti7YnkOpwUYbHpIorac"},
    knife194: {name: "★ Karambit | Forest DDPAT FT", price: 149.90, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0k_PkMq_um25V4dB8teXA54vwxlDm-xZtNWvxcdOTIw42YF7U-Ae3yOu-jZS8vJXOzCFhvyR2ti7YnkOpwUYbHpIorac"},
    knife195: {name: "★ Karambit | Forest DDPAT MW", price: 183.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0k_PkMq_ummJW4NFOhujT8om73Fex-BdsN2z6I9eUdg4_Nw7UqQXtyLu81p7vvZrIznZr7iQr53fenQv3309FzuO8KA"},
    knife196: {name: "★ Karambit | Forest DDPAT FN", price: 304.70, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-HnvD8J4Tdl3lW7Yt337rC99iijASxrUs-Z2ryJYeTcgY2NAvT8li4l-a80MLuu5zLnyBmpGB8ss5wKTWe"},
    knife197: {name: "★ Karambit | Night BS", price: 193.81, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_unm5Q_txOhujT8om72wPj80dsNWCmdtfAdAU3ZVrX-AK4kLjv1pa66JSby3JkuCd34y3UzQv3309AU_rxGg"},
    knife198: {name: "★ Karambit | Night WW", price: 218.46, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_um25V4dB8teXA54vwxgbtrRVqNm_xJdKXcQVqMg7W_lDtl7vq1pe4753KynJqsnZ25n_alxapwUYbStGwX0o"},
    knife199: {name: "★ Karambit | Night FT", price: 219.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_um25V4dB8teXA54vwxgbtrRVqNm_xJdKXcQVqMg7W_lDtl7vq1pe4753KynJqsnZ25n_alxapwUYbStGwX0o"},
    knife200: {name: "★ Karambit | Night MW", price: 355.28, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_ummJW4NFOhujT8om73Abj_0toMWHxIo6SIA9rM1rUr1K2wOzq05Pp7ZScwHpgsiQls3nVyQv3309jjRKblA"},
    knife201: {name: "★ Karambit | Night FN", price: 1281.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_ummJW4NFOhujT8om73Abj_0toMWHxIo6SIA9rM1rUr1K2wOzq05Pp7ZScwHpgsiQls3nVyQv3309jjRKblA"},
    knife202: {name: "★ Karambit | Safari Mesh BS", price: 140.10, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0mvLnO4TFl2Vu4MBwnPD--Y3nj1H68hU5YjymdoeUcVU6Zl_V-1K_x-m8gcLqvZnInCZmsih053zZnkDhgAYMMLK1z6lAbQ"},
    knife203: {name: "★ Karambit | Safari Mesh WW", price: 134.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0mvLnO4TFl2Vu5cB1g_zMyoD0mlOx5Uc_NmjyJ9eQcAVvMgzVqFTrx-rujZ6-tM_NwXZq6CMmtCvdn0Hl105SLrs4ynTKRoM"},
    knife204: {name: "★ Karambit | Safari Mesh FT", price: 131.11, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0mvLnO4TFl2Vu5cB1g_zMyoD0mlOx5Uc_NmjyJ9eQcAVvMgzVqFTrx-rujZ6-tM_NwXZq6CMmtCvdn0Hl105SLrs4ynTKRoM"},
    knife205: {name: "★ Karambit | Safari Mesh MW", price: 152.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0mvLnO4TFl2Vu5Mx2gv3--Y3nj1H6qkE4Zzqgco-cdwJsaF3XqVm_yL-70JG-7ZyamycyvXNz5SndzkG21wYMMLI7nV07EA"},
    knife206: {name: "★ Karambit | Safari Mesh FN", price: 319.24, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0mvLnO4TFl2Vu5Mx2gv3--Y3nj1H6qkE4Zzqgco-cdwJsaF3XqVm_yL-70JG-7ZyamycyvXNz5SndzkG21wYMMLI7nV07EA"},
    knife207: {name: "★ Karambit | Scorched BS", price: 139.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0k_bkI7fUqWNU6dNoteXA54vwxlLkqhJoYmqlI9OQelRsYVGGqFjsk727h8PutJvMmCBmsnIq5nrZnBGpwUYb7psWfus"},
    knife208: {name: "★ Karambit | Scorched WW", price: 147.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0k_bkI7fUqWZU7Mxkh9bN9J7yjRrm_UdrNW77cdKWdAY7Z1DRrlG9yey80JO7ucudyXY3uXIlt3uMzRe1n1gSOZd2wXJa"},
    knife209: {name: "★ Karambit | Scorched FT", price: 138.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0k_bkI7fUqWZU7Mxkh9bN9J7yjRrm_UdrNW77cdKWdAY7Z1DRrlG9yey80JO7ucudyXY3uXIlt3uMzRe1n1gSOZd2wXJa"},
    knife210: {name: "★ Karambit | Scorched MW", price: 190.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0k_bkI7fUqWdY781lteXA54vwxgzsqhc6Zmihd47BdwVrNwvQrlntweruhJLu6J3KnXFrsnUi5SvfzR2pwUYbbw402xo"},
    knife211: {name: "★ Karambit | Scorched FN", price: 331.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0k_bkI7fUqWdY781lteXA54vwxgzsqhc6Zmihd47BdwVrNwvQrlntweruhJLu6J3KnXFrsnUi5SvfzR2pwUYbbw402xo"},
    knife212: {name: "★ Karambit | Slaughter FT", price: 336.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20jfL2Ibrum25V4dB8teXA54vwxgXtrRY_ZWH3d9eRIVU9MlmB-Fa3l7q-g8S6vJSfzCQysyYr5X3flxepwUYbMQKc__M"},
    knife213: {name: "★ Karambit | Slaughter MW", price: 366.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20jfL2IbrummJW4NFOhujT8om70Azg_kQ6MTygdYKXJw9qMlnX_Fa3ye28gpC-vZSdynYxviZztyncmwv330_7Rx0jNA"},
    knife214: {name: "★ Karambit | Slaughter FN", price: 458.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20jfL2IbrummJW4NFOhujT8om70Azg_kQ6MTygdYKXJw9qMlnX_Fa3ye28gpC-vZSdynYxviZztyncmwv330_7Rx0jNA"},
    knife215: {name: "★ Karambit | Stained BS", price: 226.86, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0kfjmML7VqWNU6dNoteXA54vwxg3mrUc-ZzuicIWXJwBtYw7VqwW-xO-5g5-9v8ucz3Ngv3Jx5naJyUapwUYbVoepRb4"},
    knife216: {name: "★ Karambit | Stained WW", price: 212.65, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0kfjmML7VqWZU7Mxkh9bN9J7yjRqy-EY5NTrwJYSTe1I8ZwzU_QS-yOq8h8K17pzKzSA3u3Ijt33Ulxaxn1gSOW7yFo2m"},
    knife217: {name: "★ Karambit | Stained FT", price: 232.57, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0kfjmML7VqWZU7Mxkh9bN9J7yjRqy-EY5NTrwJYSTe1I8ZwzU_QS-yOq8h8K17pzKzSA3u3Ijt33Ulxaxn1gSOW7yFo2m"},
    knife218: {name: "★ Karambit | Stained MW", price: 263.42, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0kfjmML7VqWdY781lteXA54vwxgHg8xVtYj_7LNXBIw9qZgyE-Fi_xLy7gJXovZqcynNq7iIqtHndykGpwUYbOEO3hhM"},
    knife219: {name: "★ Karambit | Stained FN", price: 400.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0kfjmML7VqWdY781lteXA54vwxgHg8xVtYj_7LNXBIw9qZgyE-Fi_xLy7gJXovZqcynNq7iIqtHndykGpwUYbOEO3hhM"},
    knife220: {name: "★ Karambit | Urban Masked BS", price: 140.24, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0g_bkNoTEhGlQ5vp5j-jX7LP5iUazrl0-Yzr3LY-UIFc-NVjTrAS2wb3v1se_v8vMznFi63YgtizdmxLigh4acKUx0hPHV3-s"},
    knife221: {name: "★ Karambit | Urban Masked WW", price: 137.66, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0g_bkNoTEhGlQ5vp8j-3I4IHKhFWmrBZyYWn6cYWTd1VtM1-C81e5l-7rgsO87Z-awHAwviBxsHrUnRHkghoZb_sv26KGa0e-bg"},
    knife222: {name: "★ Karambit | Urban Masked FT", price: 144.90, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0g_bkNoTEhGlQ5vp8j-3I4IHKhFWmrBZyYWn6cYWTd1VtM1-C81e5l-7rgsO87Z-awHAwviBxsHrUnRHkghoZb_sv26KGa0e-bg"},
    knife223: {name: "★ Karambit | Urban Masked MW", price: 196.66, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0g_bkNoTEhGlQ5vp9g-7J4bP5iUazrl04YG-nJdXDegc2Y1uBrlG6x-2-gZTq6p6YwSZq6CFzsynZlhS30B9PcKUx0vKbTggh"},
    knife224: {name: "★ Karambit | Urban Masked FN", price: 430.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0g_bkNoTEhGlQ5vp9g-7J4bP5iUazrl04YG-nJdXDegc2Y1uBrlG6x-2-gZTq6p6YwSZq6CFzsynZlhS30B9PcKUx0vKbTggh"},
	knife225: {name: "★  Flip Knife", price: 80.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3dzFL_JKzloaIx6ejYO6GzzlTucAj072W99-liQfm-hJsZGvyIdLEJw5tNA2E5BHgluDLhNCe"},
    knife226: {name: "★  Flip Knife | Blue Steel BS", price: 92.38, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO0mJWOk8j8NrrHj1Rd6dd2j6fD94ii3wKwqkdoYGH0JoaWIQY-YVnY-VjrxujtjcDv7Z2aznQ2uyEq-z-DyO-mAbOO"},
    knife227: {name: "★  Flip Knife | Blue Steel WW", price: 88.38, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO0mJWOk8j8NrrHj1Rd6dd2j6fD94ii3wKwqkdoYGH0JoaWIQY-YVnY-VjrxujtjcDv7Z2aznQ2uyEq-z-DyO-mAbOO"},
    knife228: {name: "★  Flip Knife | Blue Steel FT", price: 90.87, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO0mJWOk8j8NrrHj1Rd6dd2j6fD94ii3wKwqkdoYGH0JoaWIQY-YVnY-VjrxujtjcDv7Z2aznQ2uyEq-z-DyO-mAbOO"},
    knife229: {name: "★  Flip Knife | Blue Steel MW", price: 94.21, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO0mJWOk8j8NrrHj1Rd6dd2j6fD94ii3wKwqkdoYGH0JoaWIQY-YVnY-VjrxujtjcDv7Z2aznQ2uyEq-z-DyO-mAbOO"},
    knife230: {name: "★  Flip Knife | Blue Steel FN", price: 96.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO0mJWOk8j8NrrHj1Rd6dd2j6fD94ii3wKwqkdoYGH0JoaWIQY-YVnY-VjrxujtjcDv7Z2aznQ2uyEq-z-DyO-mAbOO"},
    knife231: {name: "★  Flip Knife | Boreal Forest BS", price: 64.18, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOwm5KOhOPLMbTDk2pd1810i__YyoD0mlOx5UI5a2rzcY_EIQNqZA7R_QO3yeq-hMS_vsybnXsw7iJztyzZmxCyhR1SLrs4IbirlSI"},
    knife232: {name: "★  Flip Knife | Boreal Forest WW", price: 73.42, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOwm5KOhOPLMbTDk2pd18h0juDU-LP5iUazrl1lZmyiIIaSIVNraVmDqVK9ku27jJ_vu5rPmnBmvyEl7H6Oyx2y1E5JcKUx0ugc8UjH"},
    knife233: {name: "★  Flip Knife | Boreal Forest FT", price: 63.78, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOwm5KOhOPLMbTDk2pd18h0juDU-LP5iUazrl1lZmyiIIaSIVNraVmDqVK9ku27jJ_vu5rPmnBmvyEl7H6Oyx2y1E5JcKUx0ugc8UjH"},
    knife234: {name: "★  Flip Knife | Boreal Forest MW", price: 73.31, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOwm5KOhOPLMbTDk2pd18l4jeHVyoD0mlOx5Rdoa277LIOUdwY5MF7U81O7krzuhJa8vM-fnSMxvyVxtCqPnEC3hktSLrs4hATUWUc"},
    knife235: {name: "★  Flip Knife | Boreal Forest FN", price: 131.39, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOwm5KOhOPLMbTDk2pd18l4jeHVyoD0mlOx5Rdoa277LIOUdwY5MF7U81O7krzuhJa8vM-fnSMxvyVxtCqPnEC3hktSLrs4hATUWUc"},  
    knife236: {name: "★  Flip Knife | Case Hardened BS", price: 100.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO5nYyOk8j8NrrHj1Rd6dd2j6eVrI6silWxqEVlMjyictORIw8_YQnU_Va-wrvv1JHpuZWYnCFmvSEl-z-DyI1yZU_E"},
    knife237: {name: "★  Flip Knife | Case Hardened WW", price: 101.45, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO5nYyOk8j5Nr_Yg2Zu5MRjjeyP896niwPkqBZsMmnxctSUcgA-N1_X-1i5x-fq05W46M6bz3Nl6Skm4mGdwUId17urZQ"},
    knife238: {name: "★  Flip Knife | Case Hardened FT", price: 102.94, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO5nYyOk8j5Nr_Yg2Zu5MRjjeyP896niwPkqBZsMmnxctSUcgA-N1_X-1i5x-fq05W46M6bz3Nl6Skm4mGdwUId17urZQ"},
    knife239: {name: "★  Flip Knife | Case Hardened MW", price: 114.97, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO5nYyOk8j4OrzZglRd6dd2j6eQodmt0VDgrUBqZWrwJIKccg48ZQ7T_AS5l-nqh5e1uJrBnHAw63J2-z-DyM8HtRGF"},
    knife240: {name: "★  Flip Knife | Case Hardened FN", price: 169.09, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO5nYyOk8j4OrzZglRd6dd2j6eQodmt0VDgrUBqZWrwJIKccg48ZQ7T_AS5l-nqh5e1uJrBnHAw63J2-z-DyM8HtRGF"},
    knife241: {name: "★  Flip Knife | Crimson Web BS", price: 91.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOhkYKYqP_xMq3IqWdQ-sJ0xLGQ8Nyn3wLg_Utvazj2coTGJ1JsMAnZ-lTryefqgpLu75qfznFku3I8pSGK4lNmans"},
    knife242: {name: "★  Flip Knife | Crimson Web WW", price: 114.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOhkYKYqPrxN7LEm1Rd6dd2j6eSp4332AG3qhA_YWinJ4OXJFM-Z1HZqAW7wOnog8Dp78jLm3Zr63Vx-z-DyBZ1xJAE"},
    knife243: {name: "★  Flip Knife | Crimson Web FT", price: 122.59, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOhkYKYqPrxN7LEm1Rd6dd2j6eSp4332AG3qhA_YWinJ4OXJFM-Z1HZqAW7wOnog8Dp78jLm3Zr63Vx-z-DyBZ1xJAE"},
    knife244: {name: "★  Flip Knife | Crimson Web MW", price: 236.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOhkYKYqPv9NLPFqWdQ-sJ0xOyR94_20VHlr0NsZzulcobEJAY5MAqD-VXvx-7m1pC6uZnByncw7yY8pSGKow-GEME"},
    knife245: {name: "★  Flip Knife | Crimson Web FN", price: 496.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5wOuqzNQhhfg3SPqhHY-I_9hvTBS414NNcWNak8L5ILAy959HPZrF4MNhITZaGWqfQZg6suBg7hPBbL5zapizq2SXqPz1fXQ2rpDxTuFR6rw"},
    knife246: {name: "★  Flip Knife | Fade MW", price: 250.26, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD7eOwlYSOqPv9NLPFqWdQ-sJ0xLGQpIqtjQy1rUE5Y2n1I4PGcgI5MFGD-wS3l-7r18TpucyanHpg6CE8pSGKbZ02GvY"},
    knife247: {name: "★  Flip Knife | Fade FN", price: 290.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD7eOwlYSOqPv9NLPFqWdQ-sJ0xLGQpIqtjQy1rUE5Y2n1I4PGcgI5MFGD-wS3l-7r18TpucyanHpg6CE8pSGKbZ02GvY"},
    knife248: {name: "★  Flip Knife | Forest DDPAT BS", price: 59.28, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOykJCKg8j8NrrHj1Rd6dd2j6fDo4-kjVbl-UVuMTyhLYSVdVVrMFrV_AXskOjrgcS_7p3NyyQyuCkh-z-DyEDKmcXq"},
    knife249: {name: "★  Flip Knife | Forest DDPAT WW", price: 69.55, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOykJCKg8j5Nr_Yg2Zu5MRjjeyPpdun3gGy-hY_NWz2IIKQclQ7NFGE_Fe6x-zs0MPqtczBm3VgvHVw4mGdwUIWFVDAjQ"},
    knife250: {name: "★  Flip Knife | Forest DDPAT FT", price: 64.49, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOykJCKg8j5Nr_Yg2Zu5MRjjeyPpdun3gGy-hY_NWz2IIKQclQ7NFGE_Fe6x-zs0MPqtczBm3VgvHVw4mGdwUIWFVDAjQ"},
    knife251: {name: "★  Flip Knife | Forest DDPAT MW", price: 78.32, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOykJCKg8j4OrzZglRd6dd2j6eZrd7x2QXm-xZrNmz2LI-Tewc8YFHQ-AW4wOa71J687pXByHJm6SNz-z-DyNsSWDE9"},
    knife252: {name: "★  Flip Knife | Forest DDPAT FN", price: 124.89, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOykJCKg8j4OrzZglRd6dd2j6eZrd7x2QXm-xZrNmz2LI-Tewc8YFHQ-AW4wOa71J687pXByHJm6SNz-z-DyNsSWDE9"},
    knife253: {name: "★  Flip Knife | Night BS", price: 68.04, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR4-O4nYeDg8j8NrrHj1Rd6dd2j6eS8d_02Fay_xBsYzzwI4DHcAM4Z13Q8gDqlea91pfutcydzydl7CB2-z-DyJ27qxgF"},
    knife254: {name: "★  Flip Knife | Night WW", price: 74.92, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR4-O4nYeDg8j5Nr_Yg2Zu5MRjjeyPrNjz3AO2-xFsZTj6INeQJlBvYFnVrli5lOvr1pG0tJ_MyCEw6Ckm7GGdwUIjVDzoMQ"},
    knife255: {name: "★  Flip Knife | Night FT", price: 88.93, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR4-O4nYeDg8j5Nr_Yg2Zu5MRjjeyPrNjz3AO2-xFsZTj6INeQJlBvYFnVrli5lOvr1pG0tJ_MyCEw6Ckm7GGdwUIjVDzoMQ"},
    knife256: {name: "★  Flip Knife | Night MW", price: 129.81, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR4-O4nYeDg8j4OrzZglRd6dd2j6fC8dqk2wDi-xE6Nz_7II6cewRrY12G-gC6xL--hsfuvZqbzyZnvHIk-z-DyFVtBt8T"},
    knife257: {name: "★  Flip Knife | Night FN", price: 310.46, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR4-O4nYeDg8j4OrzZglRd6dd2j6fC8dqk2wDi-xE6Nz_7II6cewRrY12G-gC6xL--hsfuvZqbzyZnvHIk-z-DyFVtBt8T"},
    knife258: {name: "★  Flip Knife | Safari Mesh BS", price: 57.80, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OO7kZODqOP1PYTZk2pH8fp9i_vG8MKj2QG2-xZtMW77coDGIwI_aQrS-VHsxO7o0MPu7snNwSdmuCAg43-IgVXp1mKS_KYC"},
    knife259: {name: "★  Flip Knife | Safari Mesh WW", price: 56.43, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OO7kZODqOP1PYTck29Y_chOhujT8om72VXkr0E4Z2r3J9CRIQ9tNArWq1S_lOrug8Xv7sjJwXVruyUl5XqOmQv330_24dUqqg"},
    knife260: {name: "★  Flip Knife | Safari Mesh FT", price: 56.59, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OO7kZODqOP1PYTck29Y_chOhujT8om72VXkr0E4Z2r3J9CRIQ9tNArWq1S_lOrug8Xv7sjJwXVruyUl5XqOmQv330_24dUqqg"},
    knife261: {name: "★  Flip Knife | Safari Mesh MW", price: 62.43, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OO7kZODqOP1PYTdn2xZ_Pp9i_vG8MKm3gW380dqMjr0dtXAdwc8N1_Q_Vbql-a9jcToup-dmHpgsnVwsH2IgVXp1ngZO2uX"},
    knife262: {name: "★  Flip Knife | Safari Mesh FN", price: 100.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OO7kZODqOP1PYTdn2xZ_Pp9i_vG8MKm3gW380dqMjr0dtXAdwc8N1_Q_Vbql-a9jcToup-dmHpgsnVwsH2IgVXp1ngZO2uX"},
    knife263: {name: "★  Flip Knife | Scorched BS", price: 61.55, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOylZCbm_LLO77QgHJu5MRjjeyPod_00VLj-BE-Mm77JYaddgE5YF3UrgLsxbjmjJPuvpTKznRkvSknsGGdwULvXBzBsA"},
    knife264: {name: "★  Flip Knife | Scorched WW", price: 65.38, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOylZCbm_LLPr7Vn35c18lwmO7Eu4injgHlqEBuYW36IdOTdQ88ZQ3Rq1a4yea-0JK6vszPwHZj7nIm5XvD30vgloTn9T8"},
    knife265: {name: "★  Flip Knife | Scorched FT", price: 63.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOylZCbm_LLP7LWnn9u5MRjjeyP84jzjVHl-hdtYm37co6Udw48N1zT8gLowLi705e7uZrIziFku3EisGGdwUJi_yOknw"},
    knife266: {name: "★  Flip Knife | Scorched MW", price: 73.41, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOylZCbm_LLP7LWnn9u5MRjjeyP84jzjVHl-hdtYm37co6Udw48N1zT8gLowLi705e7uZrIziFku3EisGGdwUJi_yOknw"},
    knife267: {name: "★  Flip Knife | Scorched FN", price: 108.70, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOylZCbm_LLP7LWnn9u5MRjjeyP84jzjVHl-hdtYm37co6Udw48N1zT8gLowLi705e7uZrIziFku3EisGGdwUJi_yOknw"},
    knife268: {name: "★  Flip Knife | Slaughter FT", price: 157.33, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD4eOskYKZlsj5Nr_Yg2Zu5MRjjeyPpImj2g3j-BVsam71cobAewE_NV3Xrli2x-67057vu5nNmHc36SIk4mGdwUJ2rRfCxQ"},
    knife269: {name: "★  Flip Knife | Slaughter MW", price: 183.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD4eOskYKZlsj4OrzZglRd6dd2j6eUoNij31K2_UZoZGynLITGdgM8MwvZ_FC2wbruhZfq6snOnHVluykg-z-DyJrKkz-J"},
    knife270: {name: "★  Flip Knife | Slaughter FN", price: 182.94, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD4eOskYKZlsj4OrzZglRd6dd2j6eUoNij31K2_UZoZGynLITGdgM8MwvZ_FC2wbruhZfq6snOnHVluykg-z-DyJrKkz-J"},
    knife271: {name: "★  Flip Knife | Stained BS", price: 70.12, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOwm5KIkvPLO77QgHJu5MRjjeyPp9ij3VLt_EpvamqlIIGUeg9vZl2Gqwe8xObthJ6-vcuaz3MwvSVz4WGdwULsq17xUA"},
    knife272: {name: "★  Flip Knife | Stained WW", price: 73.17, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOwm5KIkvPLPr7Vn35c18lwmO7Eu973i1CxqRVqamuiIYfHJlNqNF7R-lC9kOnpgse5tZvJmnVl63Yq4nzD30vghgzkHKc"},
    knife273: {name: "★  Flip Knife | Stained FT", price: 74.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOwm5KIkvPLPr7Vn35c18lwmO7Eu973i1CxqRVqamuiIYfHJlNqNF7R-lC9kOnpgse5tZvJmnVl63Yq4nzD30vghgzkHKc"},
    knife274: {name: "★  Flip Knife | Stained MW", price: 79.82, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOwm5KIkvPLP7LWnn9u5MRjjeyP8NX03gHj_RJlYWGiJYfDIQU5ZlmC-VG8l-y9g5C5v5Sdm3Bq6CUi5mGdwUJLmy-O2g"},
    knife275: {name: "★  Flip Knife | Stained FN", price: 114.02, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOwm5KIkvPLP7LWnn9u5MRjjeyP8NX03gHj_RJlYWGiJYfDIQU5ZlmC-VG8l-y9g5C5v5Sdm3Bq6CUi5mGdwUJLmy-O2g"},
    knife276: {name: "★  Flip Knife | Urban Masked BS", price: 62.14, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOilZCOqOLmMbrfqWNU6dNoteXA54vwxlDl-kdlMD_7d4_Geg5qaVmC81O-xbu8hpS1up7Py3tks3Qm5XjYlhapwUYb0Ay06gc"},
    knife277: {name: "★  Flip Knife | Urban Masked WW", price: 66.12, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOilZCOqOLmMbrfqWZU7Mxkh9bN9J7yjRrh_hduZT_ydYGccgRqM13Xq1Xolbrt1sC6vp_JzCBh7ygj53vfnR3kn1gSOdeWAw8q"},
    knife278: {name: "★  Flip Knife | Urban Masked FT", price: 72.21, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOwm5KIkvPLPr7Vn35c18lwmO7Eu973i1CxqRVqamuiIYfHJlNqNF7R-lC9kOnpgse5tZvJmnVl63Yq4nzD30vghgzkHKc"},
    knife279: {name: "★  Flip Knife | Urban Masked MW", price: 75.28, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOilZCOqOLmMbrfqWdY781lteXA54vwxlaw-hBsZ2r6IdPEcgQ6MAuC8le9kL29g5S07sian3Vk73R24SrZykepwUYbeo-ROcg"},
    knife280: {name: "★  Flip Knife | Urban Masked FN", price: 152.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOilZCOqOLmMbrfqWdY781lteXA54vwxlaw-hBsZ2r6IdPEcgQ6MAuC8le9kL29g5S07sian3Vk73R24SrZykepwUYbeo-ROcg"},
	knife281: {name: "★ StatTrak™ Bayonet", price: 215.64, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaKQZ53P3NZXMXvYmykdLSxqWkZ7-HkjMIvpIj3u2Y84733gzh_RU_MG_zIYLEdQ45fxiOrdJh0ExF"},
	knife282: {name: "★ StatTrak™ Bayonet | Blue Steel BS", price: 178.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-DkvbiKoTdl3lW7Ytzj7HFpIr3jQTiqEptYDjzcIeWJgI4YF_Z_Fm7lOvnjJbquJXKmiMypGB8sl3Uv6q3"},
	knife283: {name: "★ StatTrak™ Bayonet | Blue Steel WW", price: 165.31, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-GkvP9JrbummpD78A_37vEp4rz3w21_hBrNWD7dteSeg8_M1jSrFK5wrrr18Xpu5TAwHNmsj5iuyhFiVGqLA"},
	knife284: {name: "★ StatTrak™ Bayonet | Blue Steel FT", price: 197.05, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-GkvP9JrbummpD78A_37vEp4rz3w21_hBrNWD7dteSeg8_M1jSrFK5wrrr18Xpu5TAwHNmsj5iuyhFiVGqLA"},
	knife285: {name: "★ StatTrak™ Bayonet | Blue Steel MW", price: 217.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-HnvD8J4Tdl3lW7Ysl2rCRoNum3lfn_Rc-Nzv6cIadcgE5NQyBrwPswei818S-v5qfzHpgpGB8so3I7TlV"},
	knife286: {name: "★ StatTrak™ Bayonet | Blue Steel FN", price: 523.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-HnvD8J4Tdl3lW7Ysl2rCRoNum3lfn_Rc-Nzv6cIadcgE5NQyBrwPswei818S-v5qfzHpgpGB8so3I7TlV"},
	knife287: {name: "★ StatTrak™ Bayonet | Boreal Forest BS", price: 107.37, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWNU6dNoteXA54vwxgDhrxJtMGj7II7GcVI5MgqE-gDsyObng5W_vM-bmyFi6CkitnbayRKpwUYbBWXvKcI"},
	knife288: {name: "★ StatTrak™ Bayonet | Boreal Forest WW", price: 113.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWZU7Mxkh9bN9J7yjRrl_kFrYGjxcNOWewQ3MAmE-FG2yOe7gpW0uZyam3A2siVw7S6MzR3in1gSOUa5wz9E"},
	knife289: {name: "★ StatTrak™ Bayonet | Boreal Forest FT", price: 103.54, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWZU7Mxkh9bN9J7yjRrl_kFrYGjxcNOWewQ3MAmE-FG2yOe7gpW0uZyam3A2siVw7S6MzR3in1gSOUa5wz9E"},
	knife290: {name: "★ StatTrak™ Bayonet | Boreal Forest MW", price: 142.51, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWdY781lteXA54vwxgCxqBE6Nzv0IIbBdQU6ZAuC-Vm6wu68hMe46MzIzCE26SQk7S3YzECpwUYbTEk7wBI"},
	knife291: {name: "★ StatTrak™ Bayonet | Boreal Forest FN", price: 432.46, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWdY781lteXA54vwxgCxqBE6Nzv0IIbBdQU6ZAuC-Vm6wu68hMe46MzIzCE26SQk7S3YzECpwUYbTEk7wBI"},	
	knife292: {name: "★ StatTrak™ Bayonet | Case Hardened BS", price: 235.94, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-DkvbiKoTdl3lW7YspjrmV8N2n2wGyrxU4Yz-gJNOVcFI8M1uE_lbrlO260ZC_uZvOwXs3pGB8soiApmlV"},
	knife293: {name: "★ StatTrak™ Bayonet | Case Hardened WW", price: 224.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-GkvP9JrbummpD78A_j7DEoo2njFHl_kM5Zz_1I9OUI1dtYw3U_1nskOvuhMS7vM_AnXdr7z5iuyiOIPCcdg"},
	knife294: {name: "★ StatTrak™ Bayonet | Case Hardened FT", price: 235.94, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-GkvP9JrbummpD78A_j7DEoo2njFHl_kM5Zz_1I9OUI1dtYw3U_1nskOvuhMS7vM_AnXdr7z5iuyiOIPCcdg"},
	knife295: {name: "★ StatTrak™ Bayonet | Case Hardened MW", price: 298.81, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-HnvD8J4Tdl3lW7Yso2LmZo9rw2lXlrUJrNT2iI4GVcFM-M1yDqFi7l-rq1J7ttM7JyXVjpGB8slOwrcti"},
	knife296: {name: "★ StatTrak™ Bayonet | Case Hardened FN", price: 957.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-HnvD8J4Tdl3lW7Yso2LmZo9rw2lXlrUJrNT2iI4GVcFM-M1yDqFi7l-rq1J7ttM7JyXVjpGB8slOwrcti"},	
	knife297: {name: "★ StatTrak™ Bayonet | Crimson Web BS", price: 175.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq4iOluHtDLfQhGxUppIlib7AptvwjFDs-EVtZmygIdKSdgNqaFHWr1TolO7u15Xqu57On3d9-n51YCbwx_k"},
	knife298: {name: "★ StatTrak™ Bayonet | Crimson Web WW", price: 262.57, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq42Ok_7hPoTdl3lW7Yt00rDC992giQyw8xBqYm_0dobEe1VrMgzY-lK3kurohJG4ucnLwXVlpGB8ssQqSA2k"},
	knife299: {name: "★ StatTrak™ Bayonet | Crimson Web FT", price: 170.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq42Ok_7hPoTdl3lW7Yt00rDC992giQyw8xBqYm_0dobEe1VrMgzY-lK3kurohJG4ucnLwXVlpGB8ssQqSA2k"},
	knife300: {name: "★ StatTrak™ Bayonet | Crimson Web MW", price: 437.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq4yCkP_gDLfQhGxUppwj3r-Rpd3zjAy38xFsMGn0I9LGcA49Zw2B_VO5wL_r1Ja-vJrMySB9-n51NRRkGyg"},
	knife301: {name: "★ StatTrak™ Bayonet | Crimson Web FN", price: 3062.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq4yCkP_gDLfQhGxUppwj3r-Rpd3zjAy38xFsMGn0I9LGcA49Zw2B_VO5wL_r1Ja-vJrMySB9-n51NRRkGyg"},
	knife302: {name: "★ StatTrak™ Bayonet | Fade MW", price: 381.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJcAJE7dizq4yCkP_gDLfQhGxUppBwib3Hod6n2ADnqUdkMW30cYKRdwVtMlrV-gK5yLi71JXpu5XBzHd9-n51Ga5qFJk"},
	knife303: {name: "★ StatTrak™ Bayonet | Fade FN", price: 456.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJcAJE7dizq4yCkP_gDLfQhGxUppBwib3Hod6n2ADnqUdkMW30cYKRdwVtMlrV-gK5yLi71JXpu5XBzHd9-n51Ga5qFJk"},
	knife304: {name: "★ StatTrak™ Bayonet | Forest DDPAT BS", price: 114.16, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-DkvbiKoTdl3lW7Yt30-3HpIqsiwS18xFlY2jwLYGWdAE3aFvXrADol7zqgJC0tJ_IyHI1pGB8smaas5HW"},
	knife305: {name: "★ StatTrak™ Bayonet | Forest DDPAT WW", price: 89.94, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-GkvP9JrbummpD78A_27HCp9qi2FawqBduYGCgI47HdFBtMg3R-wK9l-zugZPou5zJwHAyuD5iuyjZxtS4iw"},
	knife306: {name: "★ StatTrak™ Bayonet | Forest DDPAT FT", price: 96.86, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-GkvP9JrbummpD78A_27HCp9qi2FawqBduYGCgI47HdFBtMg3R-wK9l-zugZPou5zJwHAyuD5iuyjZxtS4iw"},
	knife307: {name: "★ StatTrak™ Bayonet | Forest DDPAT MW", price: 156.45, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-HnvD8J4Tdl3lW7Yt337rC99iijASxrUs-Z2ryJYeTcgY2NAvT8li4l-a80MLuu5zLnyBmpGB8ss5wKTWe"},
	knife308: {name: "★ StatTrak™ Bayonet | Forest DDPAT FN", price: 766.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-HnvD8J4Tdl3lW7Yt337rC99iijASxrUs-Z2ryJYeTcgY2NAvT8li4l-a80MLuu5zLnyBmpGB8ss5wKTWe"},
	knife309: {name: "★ StatTrak™ Bayonet | Night BS", price: 131.10, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL-DkvbiKoTdl3lW7Ysg07CYpdqsjQzl_0E_YWigLIGUI1U5aV_T-lm6krjvjZS66prByyRnpGB8suefpNvA"},
	knife310: {name: "★ StatTrak™ Bayonet | Night WW", price: 98.09, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL-GkvP9JrbummpD78A_jL7F89jw2VGw_0M6MTrzd9XBIwc7MF-C_FO-xOvmgpG7tJnKy3Bl6D5iuyi5sRnq8g"},
	knife311: {name: "★ StatTrak™ Bayonet | Night FT", price: 128.80, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL-GkvP9JrbummpD78A_jL7F89jw2VGw_0M6MTrzd9XBIwc7MF-C_FO-xOvmgpG7tJnKy3Bl6D5iuyi5sRnq8g"},
	knife312: {name: "★ StatTrak™ Bayonet | Night MW", price: 261.09, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL-HnvD8J4Tdl3lW7Ysg2-uTpN2iiVLmrkM6YW3zJYeUcQY7aV3XqwO3wrvvhZ-96Z7Nzic3pGB8sk5ZbSKb"},
	knife313: {name: "★ StatTrak™ Bayonet | Night FN", price: 3500.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL-HnvD8J4Tdl3lW7Ysg2-uTpN2iiVLmrkM6YW3zJYeUcQY7aV3XqwO3wrvvhZ-96Z7Nzic3pGB8sk5ZbSKb"},
	knife314: {name: "★ StatTrak™ Bayonet | Safari Mesh BS", price: 86.14, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--q5SKmcj8NrrHj1Rd6dd2j6fCrd2s0Aaw-EA4YG73cNSWdVdoZgzV_1i2l-bu1Jfo6Z-fm3c37CJx-z-DyLk6KurC"},
	knife315: {name: "★ StatTrak™ Bayonet | Safari Mesh WW", price: 78.45, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--q5SKmcj5Nr_Yg2Zu5MRjjeyPp9Ws0QDjqEpuNmjxJdDBIVc4ZV7U-FG8kuztgZHttMmYznFg6SQk7WGdwUKUDs9gvQ"},
	knife316: {name: "★ StatTrak™ Bayonet | Safari Mesh FT", price: 89.14, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--q5SKmcj5Nr_Yg2Zu5MRjjeyPp9Ws0QDjqEpuNmjxJdDBIVc4ZV7U-FG8kuztgZHttMmYznFg6SQk7WGdwUKUDs9gvQ"},
	knife317: {name: "★ StatTrak™ Bayonet | Safari Mesh MW", price: 157.33, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--q5SKmcj4OrzZglRd6dd2j6fHpY-kigPlrRduYmmhI4LHdgRqMw7X8lO7wuvqg8O77szAmHtq7iEn-z-DyIB9jWZF"},
	knife318: {name: "★ StatTrak™ Bayonet | Safari Mesh FN", price: 642.42, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--q5SKmcj4OrzZglRd6dd2j6fHpY-kigPlrRduYmmhI4LHdgRqMw7X8lO7wuvqg8O77szAmHtq7iEn-z-DyIB9jWZF"},
	knife319: {name: "★ StatTrak™ Bayonet | Scorched BS", price: 140.07, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0n_L1JaLummpD78A_2-2YpoqgiQDk-EY9ZmH2dYfBdFM7MgvU-wC9yea80JftvJyfzHU2sj5iuyggPXmmzw"},
	knife320: {name: "★ StatTrak™ Bayonet | Scorched WW", price: 94.49, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0mvLwOq7cqWdQ-sJ0xO_DrNil0AKx_xJpMWmmIoCXcQRoNVHRrFe9wee5jJW-usvMynY3syM8pSGKzDZP-os"},
	knife321: {name: "★ StatTrak™ Bayonet | Scorched FT", price: 100.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0mvLwOq7cqWdQ-sJ0xO_DrNil0AKx_xJpMWmmIoCXcQRoNVHRrFe9wee5jJW-usvMynY3syM8pSGKzDZP-os"},
	knife322: {name: "★ StatTrak™ Bayonet | Scorched MW", price: 145.10, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0m_7zO6_ummpD78A_3-qXrNqnjAPtqUVpNjvxJIOWdQE-MFDY_Qfvkr-6jZ7uv5vInyE17z5iuyhdvxrhyA"},
	knife323: {name: "★ StatTrak™ Bayonet | Scorched FN", price: 1837.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0m_7zO6_ummpD78A_3-qXrNqnjAPtqUVpNjvxJIOWdQE-MFDY_Qfvkr-6jZ7uv5vInyE17z5iuyhdvxrhyA"},
	knife324: {name: "★ StatTrak™ Bayonet | Slaughter FT", price: 277.69, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJY6d6klb-GkvP9JrbummpD78A_27_C8Ir321Lj_0VkNTzxdYCccQU_aV3WqVnvl-vrg8fu7s-awHAx7j5iuyizZJPXwA"},
	knife325: {name: "★ StatTrak™ Bayonet | Slaughter MW", price: 399.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJY6d6klb-HnvD8J4Tdl3lW7Ysj2LqVpdqh2wLm-UNoNmH0cdeQIVM9N1HZ_QXtx-fu0Z64uMnAyHRrpGB8stNTCQHv"},
	knife326: {name: "★ StatTrak™ Bayonet | Slaughter FN", price: 457.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJY6d6klb-HnvD8J4Tdl3lW7Ysj2LqVpdqh2wLm-UNoNmH0cdeQIVM9N1HZ_QXtx-fu0Z64uMnAyHRrpGB8stNTCQHv"},
	knife327: {name: "★ StatTrak™ Bayonet | Stained BS", price: 128.84, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0n_L1JaLummpD78A_3LDAoYn00FDj-EVtamnzJ9Wceg82YlrZ-QLtyLrthcXt6cmczSA1uz5iuygQfIQs8A"},
	knife328: {name: "★ StatTrak™ Bayonet | Stained WW", price: 139.64, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0mvLwOq7cqWdQ-sJ0xLyZo4qk2QXt_0RrYmilJdPDdFA9ZF7T-1G5kunogJS87s-azyNis3Y8pSGKV1SJhw0"},
	knife329: {name: "★ StatTrak™ Bayonet | Stained FT", price: 140.87, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0mvLwOq7cqWdQ-sJ0xLyZo4qk2QXt_0RrYmilJdPDdFA9ZF7T-1G5kunogJS87s-azyNis3Y8pSGKV1SJhw0"},
	knife330: {name: "★ StatTrak™ Bayonet | Stained MW", price: 183.55, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0m_7zO6_ummpD78A_3r-RrNWti1Dl8kc6ammlIoPEJ1U_YQuDqwTvyejrgcS4vpnKySQwuj5iuyhwZ4qAMQ"},
	knife331: {name: "★ StatTrak™ Bayonet | Stained FN", price: 332.92, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0m_7zO6_ummpD78A_3r-RrNWti1Dl8kc6ammlIoPEJ1U_YQuDqwTvyejrgcS4vpnKySQwuj5iuyhwZ4qAMQ"},
	knife332: {name: "★ StatTrak™ Bayonet | Urban Masked BS", price: 158.49, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLPUl31I18lwmO7Eu92gjgzmqktsMDj3I9TGJFA9ZQnQr1Psl-vnjJC0usjMwXA273N05CrD30vga0eXEBM"},
	knife333: {name: "★ StatTrak™ Bayonet | Urban Masked WW", price: 124.27, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLbUkmJE5fp9i_vG8MKijQTl_Bc_ZT3wI4KdJ1M2Mw6ErgLqkr3n1Ja1vZTLn3FmsnQh4H_fgVXp1kJdzvEN"},
	knife334: {name: "★ StatTrak™ Bayonet | Urban Masked FT", price: 104.44, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLbUkmJE5fp9i_vG8MKijQTl_Bc_ZT3wI4KdJ1M2Mw6ErgLqkr3n1Ja1vZTLn3FmsnQh4H_fgVXp1kJdzvEN"},
	knife335: {name: "★ StatTrak™ Bayonet | Urban Masked MW", price: 164.27, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLfYkWNF18lwmO7Eu9SkiwCw-RJsZTrxcI7GcAE_MFqC_AXrxby8gZHqvM6bySZg7CMgtyrD30vgFNz3E8k"},
	knife336: {name: "★ StatTrak™ Bayonet | Urban Masked FN", price: 1000.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLfYkWNF18lwmO7Eu9SkiwCw-RJsZTrxcI7GcAE_MFqC_AXrxby8gZHqvM6bySZg7CMgtyrD30vgFNz3E8k"},
	knife337: {name: "★ StatTrak™ Gut Knife", price: 101.03, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3dihWoo2ywdPbx6Cna--IwTtUsMBwjLuZodit2wXm_ERrZWHwctKTcQVvZlHOug_pU950d94"},
	knife338: {name: "★ StatTrak™ Gut Knife | Blue Steel BS", price: 101.86, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqP_xMq3IqWdQ-sJ0xO3DrNil3lDg-UY5N2_6LNOUI1A3aA7Y_AC4yevsh5686JifnSNnsyc8pSGKeUVXnMM"},
	knife339: {name: "★ StatTrak™ Gut Knife | Blue Steel WW", price: 91.74, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqPrxN7LEm1Rd6dd2j6fF89Xxiway-ktuNW7wdoKUdA5raQ7SrlW5yejoh5G5tZvNwCdmuyYm-z-DyMBqk-Qb"},
	knife340: {name: "★ StatTrak™ Gut Knife | Blue Steel FT", price: 99.63, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqPrxN7LEm1Rd6dd2j6fF89Xxiway-ktuNW7wdoKUdA5raQ7SrlW5yejoh5G5tZvNwCdmuyYm-z-DyMBqk-Qb"},
	knife341: {name: "★ StatTrak™ Gut Knife | Blue Steel MW", price: 111.44, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqPv9NLPFqWdQ-sJ0xLnEodz3igSx-BY-Zj2mJ9LAc1Q3Y13Y_1Lrwrvr0MW7uZifwCBlv3E8pSGKHolYdI0"},
	knife342: {name: "★ StatTrak™ Gut Knife | Blue Steel FN", price: 233.49, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqPv9NLPFqWdQ-sJ0xLnEodz3igSx-BY-Zj2mJ9LAc1Q3Y13Y_1Lrwrvr0MW7uZifwCBlv3E8pSGKHolYdI0"},
	knife343: {name: "★ StatTrak™ Gut Knife | Boreal Forest BS", price: 131.11, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du4MBwnPD--Y3nj1H6rkA9MGinJYGQegU8N1DU-gDsxb3mgZ676p7KyXtq7Cdxs3rcmxK1hgYMMLKK05eNEw"},
	knife344: {name: "★ StatTrak™ Gut Knife | Boreal Forest WW", price: 54.05, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du5cB1g_zMyoD0mlOx5UVtYmDyLNPEdwVtaV-Cq1S6lO_mjJ-07szAmiQyuCQqtn7dmBO0gk1SLrs4R_gpvnA"},
	knife345: {name: "★ StatTrak™ Gut Knife | Boreal Forest FT", price: 78.67, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du5cB1g_zMyoD0mlOx5UVtYmDyLNPEdwVtaV-Cq1S6lO_mjJ-07szAmiQyuCQqtn7dmBO0gk1SLrs4R_gpvnA"},
	knife346: {name: "★ StatTrak™ Gut Knife | Boreal Forest MW", price: 74.32, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du5Mx2gv3--Y3nj1H6qUFkMm2gctSUcQJtNVCCr1TqkO3m056-6M_JnSRnuicn4njZmB3iiQYMMLJLcEs9NA"},
	knife347: {name: "★ StatTrak™ Gut Knife | Boreal Forest FN", price: 210.34, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du5Mx2gv3--Y3nj1H6qUFkMm2gctSUcQJtNVCCr1TqkO3m056-6M_JnSRnuicn4njZmB3iiQYMMLJLcEs9NA"},	
	knife348: {name: "★ StatTrak™ Gut Knife | Case Hardened BS", price: 97.90, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqP_xMq3IqWdQ-sJ0xLuYrN2s2lXhrUpkMW_zI4WVd1Q8MlzYr1C5l-nqhZC1vZTJzSZj7nQ8pSGKnPOWYls"},
	knife349: {name: "★ StatTrak™ Gut Knife | Case Hardened WW", price: 108.96, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqPrxN7LEm1Rd6dd2j6eUrdzw0Vfg-EY9N236IoSRIFU_YV_RqFi2kOjsg5e1u5XAmnAxsiR3-z-DyDOYcv8_"},
	knife350: {name: "★ StatTrak™ Gut Knife | Case Hardened FT", price: 103.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqPrxN7LEm1Rd6dd2j6eUrdzw0Vfg-EY9N236IoSRIFU_YV_RqFi2kOjsg5e1u5XAmnAxsiR3-z-DyDOYcv8_"},
	knife351: {name: "★ StatTrak™ Gut Knife | Case Hardened MW", price: 161.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqPv9NLPFqWdQ-sJ0xO-Qod2i2wOy_EdpYW_7LIDBclI6aVHV-Fm_lOe-gJG5vpvKyHYwv3M8pSGKIGsDSZw"},
	knife352: {name: "★ StatTrak™ Gut Knife | Case Hardened FN", price: 345.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqPv9NLPFqWdQ-sJ0xO-Qod2i2wOy_EdpYW_7LIDBclI6aVHV-Fm_lOe-gJG5vpvKyHYwv3M8pSGKIGsDSZw"},	
	knife353: {name: "★ StatTrak™ Gut Knife | Crimson Web BS", price: 82.72, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0n_L1JaLummpD78A_3L2Zo9Sn31Xm-0RtajjwddLEcVBvYA7W-VjqwOfsgce_vpyfmHEx6z5iuyh_csHsVQ"},
	knife354: {name: "★ StatTrak™ Gut Knife | Crimson Web WW", price: 97.33, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0mvLwOq7cqWdQ-sJ0xLqZ99_w3FXt80tpMDyncY7EcARqMlyC_lO8wOrt1p-6uZzByHUxsyA8pSGK0TMvFOE"},
	knife355: {name: "★ StatTrak™ Gut Knife | Crimson Web FT", price: 109.19, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0mvLwOq7cqWdQ-sJ0xLqZ99_w3FXt80tpMDyncY7EcARqMlyC_lO8wOrt1p-6uZzByHUxsyA8pSGK0TMvFOE"},
	knife356: {name: "★ StatTrak™ Gut Knife | Crimson Web MW", price: 226.87, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0m_7zO6_ummpD78A_2LiW9Nuj0VGw-0JvYj2hJdKWI1NoZAnU-gPtyOzo0ZK4u52bm3Bh7j5iuyiVfFD71A"},
	knife357: {name: "★ StatTrak™ Gut Knife | Crimson Web FN", price: 1090.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0m_7zO6_ummpD78A_2LiW9Nuj0VGw-0JvYj2hJdKWI1NoZAnU-gPtyOzo0ZK4u52bm3Bh7j5iuyiVfFD71A"},
	knife358: {name: "★ StatTrak™ Gut Knife | Fade MW", price: 216.59, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxD09q3kIW0m_7zO6_ummpD78A_3OyZrI-n2wPk_RY9NTrwINOSdQc9MlrW_gfqlbu9jJK4uJmYwCBlvT5iuyhGHAgcYg"},
	knife359: {name: "★ StatTrak™ Gut Knife | Fade FN", price: 199.58, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxD09q3kIW0m_7zO6_ummpD78A_3OyZrI-n2wPk_RY9NTrwINOSdQc9MlrW_gfqlbu9jJK4uJmYwCBlvT5iuyhGHAgcYg"},
	knife360: {name: "★ StatTrak™ Gut Knife | Forest DDPAT BS", price: 68.08, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqP_xMq3IqWdQ-sJ0xLHAptWkjFHjrkE5NzrwdtPAIQFsZg3UqVi9l7zt0ZTutcjOnCY17nQ8pSGK6FhQMfo"},
	knife361: {name: "★ StatTrak™ Gut Knife | Forest DDPAT WW", price: 125.41, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqPrxN7LEm1Rd6dd2j6eQod7wjAKw_UVvYGH2JYLDIQA9ZFmF_wW-wui80ZK_vp3Ln3Rq7nYi-z-DyOnWDwct"},
	knife362: {name: "★ StatTrak™ Gut Knife | Forest DDPAT FT", price: 64.08, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqPrxN7LEm1Rd6dd2j6eQod7wjAKw_UVvYGH2JYLDIQA9ZFmF_wW-wui80ZK_vp3Ln3Rq7nYi-z-DyOnWDwct"},
	knife363: {name: "★ StatTrak™ Gut Knife | Forest DDPAT MW", price: 82.07, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqPv9NLPFqWdQ-sJ0xLGUoIqji1Xi-UVkZTr7coWTd1M7YVuE-Va3k-7o15LvuJyYwXRmsnE8pSGKxxB-nH8"},
	knife364: {name: "★ StatTrak™ Gut Knife | Forest DDPAT FN", price: 250.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqPv9NLPFqWdQ-sJ0xLGUoIqji1Xi-UVkZTr7coWTd1M7YVuE-Va3k-7o15LvuJyYwXRmsnE8pSGKxxB-nH8"},
	knife365: {name: "★ StatTrak™ Gut Knife | Night BS", price: 62.70, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqP_xMq3IqWdQ-sJ0xL7Drd2tigDl-xc6NW_1IoLHdwc4M1HV8lS9xri515e6upmbziZnsyA8pSGKTvPJmWM"},
	knife366: {name: "★ StatTrak™ Gut Knife | Night WW", price: 58.37, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqPrxN7LEm1Rd6dd2j6fAodqgjFfn-EpvYzuhINWUdA5rYF-B_FS_wbzn1pDptMjAmCRkunIl-z-DyJdWNjR9"},
	knife367: {name: "★ StatTrak™ Gut Knife | Night FT", price: 67.72, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqPrxN7LEm1Rd6dd2j6fAodqgjFfn-EpvYzuhINWUdA5rYF-B_FS_wbzn1pDptMjAmCRkunIl-z-DyJdWNjR9"},
	knife368: {name: "★ StatTrak™ Gut Knife | Night MW", price: 145.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqPv9NLPFqWdQ-sJ0xOzE9t73igDk_xJoYG-hItKSdlA_aAvX-AO2ybjohZW0vMybynM273U8pSGKrp7Yw2U"},
	knife369: {name: "★ StatTrak™ Gut Knife | Night FN", price: 483.68, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqPv9NLPFqWdQ-sJ0xOzE9t73igDk_xJoYG-hItKSdlA_aAvX-AO2ybjohZW0vMybynM273U8pSGKrp7Yw2U"},
	knife370: {name: "★ StatTrak™ Gut Knife | Safari Mesh BS", price: 69.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLPUl31I18lwmO7Eu9ml2we1_RJuZ2n6JoSUclU8ZFzRqVW_krq5gZC1tZuYmnQwsnYisCzD30vg3qUbx98"},
	knife371: {name: "★ StatTrak™ Gut Knife | Safari Mesh WW", price: 125.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLbUkmJE5fp9i_vG8MLx2QSy_BdpZmmlcoWVdQdvYV2G-1bvw-zv18O96MzByCA27nYrtyqPgVXp1t9T3ex9"},
	knife372: {name: "★ StatTrak™ Gut Knife | Safari Mesh FT", price: 65.70, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLbUkmJE5fp9i_vG8MLx2QSy_BdpZmmlcoWVdQdvYV2G-1bvw-zv18O96MzByCA27nYrtyqPgVXp1t9T3ex9"},
	knife373: {name: "★ StatTrak™ Gut Knife | Safari Mesh MW", price: 136.81, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLfYkWNF18lwmO7Eu9nz3Qyw_ERrN271JYKdIFc-YlmC_1m5l7i5hMS87p7Nz3c3uHMm4X7D30vgVFLgw28"},
	knife374: {name: "★ StatTrak™ Gut Knife | Safari Mesh FN", price: 151.22, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLfYkWNF18lwmO7Eu9nz3Qyw_ERrN271JYKdIFc-YlmC_1m5l7i5hMS87p7Nz3c3uHMm4X7D30vgVFLgw28"},
	knife375: {name: "★ StatTrak™ Gut Knife | Scorched BS", price: 80.10, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj8NrrHj1Rd6dd2j6eY9tj00ALh-kI_ZGrxcNPEdQI9YAvQ_lS6l-bqhpG6tMzNnCZr73R3-z-DyD8PeNWQ"},
	knife376: {name: "★ StatTrak™ Gut Knife | Scorched WW", price: 82.07, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj5Nr_Yg2Zu5MRjjeyPot3zjQzi_0FrMGylLY-SIQI6Yg6B-1ntxu27gMC47smbm3thu3QqtGGdwUIO0yEj6Q"},
	knife377: {name: "★ StatTrak™ Gut Knife | Scorched FT", price: 74.26, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj5Nr_Yg2Zu5MRjjeyPot3zjQzi_0FrMGylLY-SIQI6Yg6B-1ntxu27gMC47smbm3thu3QqtGGdwUIO0yEj6Q"},
	knife378: {name: "★ StatTrak™ Gut Knife | Scorched MW", price: 96.91, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj4OrzZglRd6dd2j6eXoNv0jgLg_RVpZ2_zJIadclQ7Ml2F_Vi_wu3rhJbp7pnOyntk7HQk-z-DyOfOL3QM"},
	knife379: {name: "★ StatTrak™ Gut Knife | Scorched FN", price: 228.04, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj4OrzZglRd6dd2j6eXoNv0jgLg_RVpZ2_zJIadclQ7Ml2F_Vi_wu3rhJbp7pnOyntk7HQk-z-DyOfOL3QM"},
	knife380: {name: "★ StatTrak™ Gut Knife | Slaughter FT", price: 116.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxP08azlpKKqPrxN7LEm1Rd6dd2j6eTptSliwK2rRBuamzxdY-UIA87YQrZrljqybzsgp_t6Z3PwCNjvXQr-z-DyHD2KsrX"},
	knife381: {name: "★ StatTrak™ Gut Knife | Slaughter MW", price: 127.70, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxP08azlpKKqPv9NLPFqWdQ-sJ0xOqSotjz0FHj-hVvY2mmIIWQc1Q4aViC_FO6x7q-g5K56J6dnCNju3Q8pSGKFg_49QU"},
	knife382: {name: "★ StatTrak™ Gut Knife | Slaughter FN", price: 177.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxP08azlpKKqPv9NLPFqWdQ-sJ0xOqSotjz0FHj-hVvY2mmIIWQc1Q4aViC_FO6x7q-g5K56J6dnCNju3Q8pSGKFg_49QU"},
	knife383: {name: "★ StatTrak™ Gut Knife | Stained BS", price: 91.22, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j8NrrHj1Rd6dd2j6eQp4-hjQ3jqEs_Z2_yJIWdcAI7NVHQ-1K_l7y7gJ7uu8zOznRmu3Uj-z-DyOsRAYmy"},
	knife384: {name: "★ StatTrak™ Gut Knife | Stained WW", price: 85.49, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j5Nr_Yg2Zu5MRjjeyPotqg2gDgrUU5Zm-nJdKVdg5vNAyG8wTvwum5hMXptJnAnHZi7nIitmGdwUII6z1SkA"},
	knife385: {name: "★ StatTrak™ Gut Knife | Stained FT", price: 91.77, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j5Nr_Yg2Zu5MRjjeyPotqg2gDgrUU5Zm-nJdKVdg5vNAyG8wTvwum5hMXptJnAnHZi7nIitmGdwUII6z1SkA"},
	knife386: {name: "★ StatTrak™ Gut Knife | Stained MW", price: 90.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j4OrzZglRd6dd2j6eS89n32AHjqERtYz-gIIKVcVA7ZQzT81a3l-rnh8C5vZycm3Rq7ihw-z-DyB1e9elV"},
	knife387: {name: "★ StatTrak™ Gut Knife | Stained FN", price: 183.55, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j4OrzZglRd6dd2j6eS89n32AHjqERtYz-gIIKVcVA7ZQzT81a3l-rnh8C5vZycm3Rq7ihw-z-DyB1e9elV"},
	knife388: {name: "★ StatTrak™ Gut Knife | Urban Masked BS", price: 102.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXunm5Q_txOhujT8om7iVCw_EJqYGygddKSI1U_NVqFrlbvw--6gpS8vJjOwCBlu3Eltn_Ungv330_hbfuoMQ"},
	knife389: {name: "★ StatTrak™ Gut Knife | Urban Masked WW", price: 79.82, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXum25V4dB8teXA54vwxgPgrkQ6ZmH6d9WRcQQ4ZFrU-Vi2x-e9h8fv6Z3PziAysiFz5XrblxSpwUYbNI9lScA"},
	knife390: {name: "★ StatTrak™ Gut Knife | Urban Masked FT", price: 68.97, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXum25V4dB8teXA54vwxgPgrkQ6ZmH6d9WRcQQ4ZFrU-Vi2x-e9h8fv6Z3PziAysiFz5XrblxSpwUYbNI9lScA"},
	knife391: {name: "★ StatTrak™ Gut Knife | Urban Masked MW", price: 93.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXummJW4NFOhujT8om73wWy_0ttYmH7LICVcFI9M1zYrFK7lO7shcTov5ScmiAw63Mls33fygv330-gpCcFhQ"},
	knife392: {name: "★ StatTrak™ Gut Knife | Urban Masked FN", price: 342.02, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXummJW4NFOhujT8om73wWy_0ttYmH7LICVcFI9M1zYrFK7lO7shcTov5ScmiAw63Mls33fygv330-gpCcFhQ"},
	knife393: {name: "★ StatTrak™ M9 Bayonet", price: 265.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3fGR97t2vm46Og7mlMu6ExzsI7ZVy0rGWrN7w3VDh_RY9Y22nd4fDdAE4NFzUrFjqlL3tm9bi6x2aUKuH"},
    knife394: {name: "★ StatTrak™ M9 Bayonet | Blue Steel BS", price: 218.90, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj2P67UklRZ7cRnk9bN9J7yjRrgrkRqZz3yddXHewA9NFvW-VC9lOnm08Luup3NyyEw6yVw7Cncy0Cwn1gSOfymx4IO"},
    knife395: {name: "★ StatTrak™ M9 Bayonet | Blue Steel WW", price: 235.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj2P67UklRc7cF4n-T--Y3nj1H6qEo5ZW_yJ9OWew5sZV6Fq1O8lLq-gJe-vZycmnMwvCIq53uOzkC2iAYMMLIoQ_29Zw"},
    knife396: {name: "★ StatTrak™ M9 Bayonet | Blue Steel FT", price: 232.72, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj2P67UklRc7cF4n-T--Y3nj1H6qEo5ZW_yJ9OWew5sZV6Fq1O8lLq-gJe-vZycmnMwvCIq53uOzkC2iAYMMLIoQ_29Zw"},
    knife397: {name: "★ StatTrak™ M9 Bayonet | Blue Steel MW", price: 319.85, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj2P67UklRd4cJ5ntbN9J7yjRq3rUI5Mjz2dobBdgRtYQvS_FTrlOno1MLo78nIy3Jk73Jz4i7VzhHln1gSOQ4y0ztq"},
    knife398: {name: "★ StatTrak™ M9 Bayonet | Blue Steel FN", price: 722.5, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj2P67UklRd4cJ5ntbN9J7yjRq3rUI5Mjz2dobBdgRtYQvS_FTrlOno1MLo78nIy3Jk73Jz4i7VzhHln1gSOQ4y0ztq"},
    knife399: {name: "★ StatTrak™ M9 Bayonet | Boreal Forest BS", price: 137.66, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj-jNyoTwiUKtlB89IT6mOoCXew9tYQ7QqwK7yL-7gJS9vZnInCNl7CAn4njfyRLj1BkdZ-E61KSACQLJjIYzs5A"},
    knife400: {name: "★ StatTrak™ M9 Bayonet | Boreal Forest WW", price: 144.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj-jNyoHwjF2hpiwwMiukcZiXJA84aAnS_Fm3k7jqh5e0u8zKnXQw7il3sCvdmUDhiRBKPeBqg_SZVxzAUOGh-x8F"},
    knife401: {name: "★ StatTrak™ M9 Bayonet | Boreal Forest FT", price: 147.35, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj-jNyoHwjF2hpiwwMiukcZiXJA84aAnS_Fm3k7jqh5e0u8zKnXQw7il3sCvdmUDhiRBKPeBqg_SZVxzAUOGh-x8F"},
    knife402: {name: "★ StatTrak™ M9 Bayonet | Boreal Forest MW", price: 240.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj-jNyoD8j1yglB89IT6mOoaSdlc5MFHWq1m5xL_qgsO67cnIzydr6yYl7X3ZmkO1gk1LOuFp16eACQLJZSfpy04"},
    knife403: {name: "★ StatTrak™ M9 Bayonet | Boreal Forest FN", price: 502.82, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj-jNyoD8j1yglB89IT6mOoaSdlc5MFHWq1m5xL_qgsO67cnIzydr6yYl7X3ZmkO1gk1LOuFp16eACQLJZSfpy04"},  
    knife404: {name: "★ StatTrak™ M9 Bayonet | Case Hardened BS", price: 178.74, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRZ7cRnk9bN9J7yjRqy-EM-amn3J4OVJAU3Yl3W_1O5w7q61JC-u5TNn3NquXYk43jYmBfmn1gSOfZ4vD5g"},
    knife405: {name: "★ StatTrak™ M9 Bayonet | Case Hardened WW", price: 264.64, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRc7cF4n-T--Y3nj1H6_UBuammldo_GdARsYw6CqVbtyLjt0Mfpu5jLyHFjviZzs3nbnkO2iQYMMLLSEHvXoA"},
    knife406: {name: "★ StatTrak™ M9 Bayonet | Case Hardened FT", price: 285.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRc7cF4n-T--Y3nj1H6_UBuammldo_GdARsYw6CqVbtyLjt0Mfpu5jLyHFjviZzs3nbnkO2iQYMMLLSEHvXoA"},
    knife407: {name: "★ StatTrak™ M9 Bayonet | Case Hardened MW", price: 332.67, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRd4cJ5ntbN9J7yjRrj_hE6NjqlLNOccgE9MljVqAC8wOzqhJ60tc_BnXZqsigrs3bdmRO-n1gSObDaDdZj"},
    knife408: {name: "★ StatTrak™ M9 Bayonet | Case Hardened FN", price: 675.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRd4cJ5ntbN9J7yjRrj_hE6NjqlLNOccgE9MljVqAC8wOzqhJ60tc_BnXZqsigrs3bdmRO-n1gSObDaDdZj"},  
    knife409: {name: "★ StatTrak™ M9 Bayonet | Crimson Web BS", price: 288.44, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjjNrnCqWNU6dNoteXA54vwxle2-0ZlMG70ItfDcg83YFyB-1S6wu-618O0tMjJmCRl7yZ3sy6MykSpwUYbwc40mvc"},
    knife410: {name: "★ StatTrak™ M9 Bayonet | Crimson Web WW", price: 228.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjjNrnCqWZU7Mxkh9bN9J7yjRqwrxVvMGDyI9KSdgQ-Z1HV_VfsyLu-hZe1tMzJnHFgv3IitHmLzhO0n1gSOc4nk3bB"},
    knife411: {name: "★ StatTrak™ M9 Bayonet | Crimson Web FT", price: 275.97, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjjNrnCqWZU7Mxkh9bN9J7yjRqwrxVvMGDyI9KSdgQ-Z1HV_VfsyLu-hZe1tMzJnHFgv3IitHmLzhO0n1gSOc4nk3bB"},
    knife412: {name: "★ StatTrak™ M9 Bayonet | Crimson Web MW", price: 1245.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5wOuqzNQhqKzvAALlRUvAuywD1NjA36tRcWN6x_685JV2t49fYNuJ5YtFEGZKFWKWGMF38u01s1PRbfMaK9inp3Xu7Oz8OCRTs8mkHzPjH5OVNhzgQCA"},
    knife413: {name: "★ StatTrak™ M9 Bayonet | Crimson Web FN", price: 6278.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5wOuqzNQhqKzvAALlRUvAuywD1NjA36tRcWN6x_685JV2t49fYNuJ5YtFEGZKFWKWGMF38u01s1PRbfMaK9inp3Xu7Oz8OCRTs8mkHzPjH5OVNhzgQCA"},
    knife414: {name: "★ StatTrak™ M9 Bayonet | Fade MW", price: 700.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KlsjyMr_UqWdY781lteXA54vwxgLi-0FrNWqiI4CWIw5sYQnY81m3xLjs18LouZjNwXc3uCF27SuOy0SpwUYbghNKfR8"},
    knife415: {name: "★ StatTrak™ M9 Bayonet | Fade FN", price: 472.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KlsjyMr_UqWdY781lteXA54vwxgLi-0FrNWqiI4CWIw5sYQnY81m3xLjs18LouZjNwXc3uCF27SuOy0SpwUYbghNKfR8"},
    knife416: {name: "★ StatTrak™ M9 Bayonet | Forest DDPAT BS", price: 159.63, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRZ7cRnk9bN9J7yjRrj_kpkYDv3IIeddwY_ZVvT_1G8yO_mgsPtv5icyHY3s3Mq5yncmhy3n1gSOUso9JJN"},
    knife417: {name: "★ StatTrak™ M9 Bayonet | Forest DDPAT WW", price: 171.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRc7cF4n-T--Y3nj1H6_0RtYD32IY_BIwY4aA3R-VLrxue90Ja_tZ6fmHpn7CNwtCuPzBzhiQYMMLJQizr10Q"},
    knife418: {name: "★ StatTrak™ M9 Bayonet | Forest DDPAT FT", price: 128.48, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRc7cF4n-T--Y3nj1H6_0RtYD32IY_BIwY4aA3R-VLrxue90Ja_tZ6fmHpn7CNwtCuPzBzhiQYMMLJQizr10Q"},
    knife419: {name: "★ StatTrak™ M9 Bayonet | Forest DDPAT MW", price: 176.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRd4cJ5ntbN9J7yjRrlrUZtYjz3Io-dc1c5YAyD_FbvlL3tjJa47cvMmnUyuSl2sHrfnRO_n1gSOSrPFa2E"},
	knife420: {name: "★ StatTrak™ M9 Bayonet | Forest DDPAT FN", price: 711.40, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRd4cJ5ntbN9J7yjRrlrUZtYjz3Io-dc1c5YAyD_FbvlL3tjJa47cvMmnUyuSl2sHrfnRO_n1gSOSrPFa2E"},
	knife421: {name: "★ StatTrak™ M9 Bayonet | Night BS", price: 167.72, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRZ7cRnk9bN9J7yjRrsrRdvMjz0cY-QdwE4YF_S-Vm4yOi5hpHo7szOyHswvyUq4C3bmEG2n1gSOUNlScIM"},
    knife422: {name: "★ StatTrak™ M9 Bayonet | Night WW", price: 239.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRc7cF4n-T--Y3nj1H6_0RoMmv0cYCRJlU5Yw7SqwS4x-_v1pXqvJjMnHA1uCUgsC7UnRC1gwYMMLKQrWJFUg"},
    knife423: {name: "★ StatTrak™ M9 Bayonet | Night FT", price: 172.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRc7cF4n-T--Y3nj1H6_0RoMmv0cYCRJlU5Yw7SqwS4x-_v1pXqvJjMnHA1uCUgsC7UnRC1gwYMMLKQrWJFUg"},
    knife424: {name: "★ StatTrak™ M9 Bayonet | Night MW", price: 399.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRd4cJ5ntbN9J7yjRrhqhA-MTygIILEcwRvYgzVr1S9yefv1pHtvsjMwSMy7CghtCrflxK2n1gSORdzljmC"},
    knife425: {name: "★ StatTrak™ M9 Bayonet | Night FN", price: 2082.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRd4cJ5ntbN9J7yjRrhqhA-MTygIILEcwRvYgzVr1S9yefv1pHtvsjMwSMy7CghtCrflxK2n1gSORdzljmC"},
    knife426: {name: "★ StatTrak™ M9 Bayonet | Safari Mesh BS", price: 157.33, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp5j-jX7LP5iUazrl06a277I9fBcFBvM13VqQS-levohMC6vpvNmCc16SRzty3dlxHh0BhLcKUx0m8uYnFB"},
    knife427: {name: "★ StatTrak™ M9 Bayonet | Safari Mesh WW", price: 120.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp8j-3I4IHKhFWmrBZyMGj2JNWReg43MF_Y_AO2yOrshMLov5vPwXVn6yF2tirfzRSw1B1MbPsv26I55_R-ww"},
    knife428: {name: "★ StatTrak™ M9 Bayonet | Safari Mesh FT", price: 105.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp8j-3I4IHKhFWmrBZyMGj2JNWReg43MF_Y_AO2yOrshMLov5vPwXVn6yF2tirfzRSw1B1MbPsv26I55_R-ww"},
    knife429: {name: "★ StatTrak™ M9 Bayonet | Safari Mesh MW", price: 148.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp9g-7J4bP5iUazrl1tY2H6ItWSIQU-Y1DX_Vjsx-jnjZ657Z_LwCdm6HEl4nzbnBLlhxEfcKUx0rp-zgq-"},
    knife430: {name: "★ StatTrak™ M9 Bayonet | Safari Mesh FN", price: 318.42, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp9g-7J4bP5iUazrl1tY2H6ItWSIQU-Y1DX_Vjsx-jnjZ657Z_LwCdm6HEl4nzbnBLlhxEfcKUx0rp-zgq-"},
    knife431: {name: "★ StatTrak™ M9 Bayonet | Scorched BS", price: 128.35, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jwMqvBmm5u4MBwnPD--Y3nj1H6qBZvZGyidtKWIAU4Zl7Q_lTvlem81pW4us_KnCBn73ImsHvazEayggYMMLJyFcWEgQ"},
    knife432: {name: "★ StatTrak™ M9 Bayonet | Scorched WW", price: 142.51, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jwMqvBmm5u5cB1g_zMyoD0mlOx5Uo_NWDwd4GTdA5rYQ2B8lm-xOa7jcO7vJ6dnHBhs3V04iuPmUbj1R9SLrs479ENwoU"},
    knife433: {name: "★ StatTrak™ M9 Bayonet | Scorched FT", price: 140.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jwMqvBmm5u5cB1g_zMyoD0mlOx5Uo_NWDwd4GTdA5rYQ2B8lm-xOa7jcO7vJ6dnHBhs3V04iuPmUbj1R9SLrs479ENwoU"},
    knife434: {name: "★ StatTrak™ M9 Bayonet | Scorched MW", price: 245.11, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jwMqvBmm5u5Mx2gv3--Y3nj1H6qUttYz-mcoKTdg83Z1HX_FG4l7jt1pG8vZ7AwXJm6HVw4nfZzBDm1AYMMLItqjyW3w"},
    knife435: {name: "★ StatTrak™ M9 Bayonet | Scorched FN", price: 346.74, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jwMqvBmm5u5Mx2gv3--Y3nj1H6qUttYz-mcoKTdg83Z1HX_FG4l7jt1pG8vZ7AwXJm6HVw4nfZzBDm1AYMMLItqjyW3w"},
    knife436: {name: "★ StatTrak™ M9 Bayonet | Slaughter FT", price: 394.45, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjuNrnDl1Rc7cF4n-T--Y3nj1H6_EU_ZjynJ4CUcQQ3ZVvRrle6l-a7jZbo75XPn3AxvHIm43veyxHi1QYMMLIuBhODCg"},
    knife437: {name: "★ StatTrak™ M9 Bayonet | Slaughter MW", price: 390.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjuNrnDl1Rd4cJ5ntbN9J7yjRrh-BVlZW3ydoTHdABsZ13Y_Qe5xue6gMC-vp-amntr6yQq4XfUzhTin1gSOZHog2Kf"},
    knife438: {name: "★ StatTrak™ M9 Bayonet | Slaughter FN", price: 706.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjuNrnDl1Rd4cJ5ntbN9J7yjRrh-BVlZW3ydoTHdABsZ13Y_Qe5xue6gMC-vp-amntr6yQq4XfUzhTin1gSOZHog2Kf"},
    knife439: {name: "★ StatTrak™ M9 Bayonet | Stained BS", price: 156.29, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjyPKnSk29u4MBwnPD--Y3nj1H6-kJuamvyLYGTIwJsYVGFrgW7wejrhpa4uJ2YziRns3Ei5n7VmhO-gQYMMLKI5mr6SQ"},
    knife440: {name: "★ StatTrak™ M9 Bayonet | Stained WW", price: 340.47, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjyPKnSk29u5cB1g_zMyoD0mlOx5RE5N2mmcNSXJ1VqZVjRrwK9le270Ze7v5XMy3RqvSkg43ban0e-hx1SLrs4e2w5pZ8"},
    knife441: {name: "★ StatTrak™ M9 Bayonet | Stained FT", price: 186.82, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjyPKnSk29u5cB1g_zMyoD0mlOx5RE5N2mmcNSXJ1VqZVjRrwK9le270Ze7v5XMy3RqvSkg43ban0e-hx1SLrs4e2w5pZ8"},
    knife442: {name: "★ StatTrak™ M9 Bayonet | Stained MW", price: 194.95, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjyPKnSk29u5Mx2gv3--Y3nj1H6rkdsajvyLIKQcAY9YQ7Trwfvxe_ugp7uuJ7AzHdl7iZ05XnayUSygwYMMLKw8Vd9_Q"},
    knife443: {name: "★ StatTrak™ M9 Bayonet | Stained FN", price: 215.15, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjyPKnSk29u5Mx2gv3--Y3nj1H6rkdsajvyLIKQcAY9YQ7Trwfvxe_ugp7uuJ7AzHdl7iZ05XnayUSygwYMMLKw8Vd9_Q"},
    knife444: {name: "★ StatTrak™ M9 Bayonet | Urban Masked BS", price: 393.32, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jgMqvUqX5D6sR_teHE9Jrst1i1uRQ5fWGhIICRJAQ_YAyG81i7kubrhZW_vJ3OnXo36HQhtH_ZnBW2iR1MbrRxxavJiZpSILw"},
    knife445: {name: "★ StatTrak™ M9 Bayonet | Urban Masked WW", price: 160.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jgMqvUqX5D6sR_teTE8YXghWu4qgE7Nnf7cYCXcA9tZ1DZ_QO3x-7sjZS7ucidwSM26XZ07HbczRO_hxoZPeA8m7XAHsJxu2aY"},
    knife446: {name: "★ StatTrak™ M9 Bayonet | Urban Masked FT", price: 129.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jgMqvUqX5D6sR_teTE8YXghWu4qgE7Nnf7cYCXcA9tZ1DZ_QO3x-7sjZS7ucidwSM26XZ07HbczRO_hxoZPeA8m7XAHsJxu2aY"},
    knife447: {name: "★ StatTrak™ M9 Bayonet | Urban Masked MW", price: 190.97, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jgMqvUqX5D6sR_teXI8oTht1i1uRQ5fTv6IIbBe1JvYFHWq1i3lbi-hJbqvJWYwXswvHQg7XvezRC_hRwaO7NxxavJcnTzV04"},
    knife448: {name: "★ StatTrak™ M9 Bayonet | Urban Masked FN", price: 403.42, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jgMqvUqX5D6sR_teXI8oTht1i1uRQ5fTv6IIbBe1JvYFHWq1i3lbi-hJbqvJWYwXswvHQg7XvezRC_hRwaO7NxxavJcnTzV04"},
	knife449: {name: "★ StatTrak™ Karambit", price: 410.43, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3ejxQ7dG0nZTFz_WgaurTwzMA6ZFz0-qW99mn0Qzk_EJoYWylJtSXe1c9aAnSq1C8l_Cv28F7-X3KYA"},
    knife450: {name: "★ StatTrak™ Karambit | Blue Steel BS", price: 326.90, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_unm5Q_txOhujT8om7iQK2rhA_MWv1LIaSegc2aFjR-lK7w-q70MW67pmfzCY3syF25Hvdmwv3308f-tSK-w"},
    knife451: {name: "★ StatTrak™ Karambit | Blue Steel WW", price: 356.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_um25V4dB8teXA54vwxgLmqhFtYT-nIYecJgI3Z1DZ_FfqyLvqhpK-tJSbnSY2vSBx43eLn0epwUYbMQqd_ig"},
    knife452: {name: "★ StatTrak™ Karambit | Blue Steel FT", price: 323.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_um25V4dB8teXA54vwxgLmqhFtYT-nIYecJgI3Z1DZ_FfqyLvqhpK-tJSbnSY2vSBx43eLn0epwUYbMQqd_ig"},
    knife453: {name: "★ StatTrak™ Karambit | Blue Steel MW", price: 402.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_ummJW4NFOhujT8om72QCx8kFkMD2mcNOcc1c-ZAnU_Ve7x7y8hMe4u52anXdiv3IrsXjemgv3308svFRjrA"},
    knife454: {name: "★ StatTrak™ Karambit | Blue Steel FN", price: 635.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_ummJW4NFOhujT8om72QCx8kFkMD2mcNOcc1c-ZAnU_Ve7x7y8hMe4u52anXdiv3IrsXjemgv3308svFRjrA"},
    knife455: {name: "★ StatTrak™ Karambit | Boreal Forest BS", price: 163.15, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle-sBwhtbJ8I3jkWu4qgE7NnehLdKQewZrMFvRrAK9kOnv1sTp6p7My3A1viIq4S3dmRbjh04aa-dum7XAHpYVBQgv"},
    knife456: {name: "★ StatTrak™ Karambit | Boreal Forest WW", price: 352.28, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle-sBwhtbM8Ij8nVmLpxIuNDztd4XDd1U-MFCDqVi3kL-7gsW8upnPziQxsnF24HrcyxzkhxxEPbBp0eveFwujSqEF8A"},
    knife457: {name: "★ StatTrak™ Karambit | Boreal Forest FT", price: 226.68, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle-sBwhtbM8Ij8nVmLpxIuNDztd4XDd1U-MFCDqVi3kL-7gsW8upnPziQxsnF24HrcyxzkhxxEPbBp0eveFwujSqEF8A"},
    knife458: {name: "★ StatTrak™ Karambit | Boreal Forest MW", price: 307.82, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle-sBwhtbN_Iv9nGu4qgE7Nnf7dtOce1Q3M13T-Fa7xejs0MXt753AnXJruiMn7C6LnBC1h0tIO-1um7XAHtmw6SCz"},
    knife459: {name: "★ StatTrak™ Karambit | Boreal Forest FN", price: 1000.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle-sBwhtbN_Iv9nGu4qgE7Nnf7dtOce1Q3M13T-Fa7xejs0MXt753AnXJruiMn7C6LnBC1h0tIO-1um7XAHtmw6SCz"},
    knife460: {name: "★ StatTrak™ Karambit | Case Hardened BS", price: 356.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_unm5Q_txOhujT8om70Abg-Bdoa2-iIoaRdlU7NA2GrlTtkuvs0MXtu5zOwHExs3Yj5neMzQv33088DhhWAw"},
    knife461: {name: "★ StatTrak™ Karambit | Case Hardened WW", price: 364.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_um25V4dB8teXA54vwxlfk_kU9ZWqgJ9fGJwQ3Z1vY-wK2wOfo15K1uZXJm3ox6Skqsy3emUGpwUYbA4Ce6rU"},
    knife462: {name: "★ StatTrak™ Karambit | Case Hardened FT", price: 501.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_um25V4dB8teXA54vwxlfk_kU9ZWqgJ9fGJwQ3Z1vY-wK2wOfo15K1uZXJm3ox6Skqsy3emUGpwUYbA4Ce6rU"},
    knife463: {name: "★ StatTrak™ Karambit | Case Hardened MW", price: 415.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_ummJW4NFOhujT8om73Qay8kFuaj3xLYCVJAM7ZF-B8li9kOfm1sW6u5SfyHNru3Im7SvUlwv330-EAAozoQ"},
    knife464: {name: "★ StatTrak™ Karambit | Case Hardened FN", price: 1260.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_ummJW4NFOhujT8om73Qay8kFuaj3xLYCVJAM7ZF-B8li9kOfm1sW6u5SfyHNru3Im7SvUlwv330-EAAozoQ"},
    knife465: {name: "★ StatTrak™ Karambit | Crimson Web BS", price: 350.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0gPL2IITZk2pH8fp9i_vG8MKljQbn_hI-NT2hd4Kcc1I4Z13Y_wfvxrvmgsXvtZ6dwHtq7CQlsCmIgVXp1qIe6Gdc"},
    knife466: {name: "★ StatTrak™ Karambit | Crimson Web WW", price: 468.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0gPL2IITck29Y_chOhujT8om7iwLn_Ec4NWrwdoDDIFNtZlHT-QW6xOzmgZ_t6pTNznUyvnQg7Crclwv330__CL9_dg"},
    knife467: {name: "★ StatTrak™ Karambit | Crimson Web FT", price: 400.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0gPL2IITck29Y_chOhujT8om7iwLn_Ec4NWrwdoDDIFNtZlHT-QW6xOzmgZ_t6pTNznUyvnQg7Crclwv330__CL9_dg"},
    knife468: {name: "★ StatTrak™ Karambit | Crimson Web MW", price: 1267.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0gPL2IITdn2xZ_Pp9i_vG8MKj2Qbl_EdlZziiddOXdAY2YAvT-wW2xrjugJG_tcvNyyBn6SEm4XuMgVXp1n8qZn5H"},
    knife469: {name: "★ StatTrak™ Karambit | Crimson Web FN", price: 4610.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0gPL2IITdn2xZ_Pp9i_vG8MKj2Qbl_EdlZziiddOXdAY2YAvT-wW2xrjugJG_tcvNyyBn6SEm4XuMgVXp1n8qZn5H"},
    knife470: {name: "★ StatTrak™ Karambit | Fade MW", price: 681.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/rnaQ4ha83FCItdize6buGhY6WlNSzNIQXHsLqZ9Apr1nfacZT6CaQihsxE1dxrKUDj0BFFvT0hRacAy7nlaxt2g_sxNepJ1LOB3AR16MoYUKK0oMH4acDVZxPaPfWrS9WXu2BFmoik44HcZDb4-ygBsRQkoPi4lTWiZT_okDtu8zI7YSW_eORC93wkYCjOfRGi9IG1nWm0tdKwOqhAOw7yhguRE=/"},
    knife471: {name: "★ StatTrak™ Karambit | Fade FN", price: 948.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/rnaQ4ha83FCItdize6buGhY6WlNSzNIQXHsLqZ9Apr1nfacZT6CaQihsxE1dxrKUDj0BFFvT0hRacAy7nlaxt2g_sxNepJ1LOB3AR16MoYUKK0oMH4acDVZxPaPfWrS9WXu2BFmoik44HcZDb4-ygBsRQkoPi4lTWiZT_okDtu8zI7YSW_eORC93wkYCjOfRGi9IG1nWm0tdKwOqhAOw7yhguRE=/"},
    knife472: {name: "★ StatTrak™ Karambit | Forest DDPAT BS", price: 225.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0k_PkMq_unm5Q_txOhujT8om7jga1rxFrYDumJNeSIVQ5NVjY8we5xu7pgpfv6JXJySBl6HRx7Crcmwv330-ZDgPvlQ"},
    knife473: {name: "★ StatTrak™ Karambit | Forest DDPAT WW", price: 262.21, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0k_PkMq_um25V4dB8teXA54vwxlDm-xZtNWvxcdOTIw42YF7U-Ae3yOu-jZS8vJXOzCFhvyR2ti7YnkOpwUYbHpIorac"},
    knife474: {name: "★ StatTrak™ Karambit | Forest DDPAT FT", price: 190.97, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0k_PkMq_um25V4dB8teXA54vwxlDm-xZtNWvxcdOTIw42YF7U-Ae3yOu-jZS8vJXOzCFhvyR2ti7YnkOpwUYbHpIorac"},
    knife475: {name: "★ StatTrak™ Karambit | Forest DDPAT MW", price: 255.44, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0k_PkMq_ummJW4NFOhujT8om73Fex-BdsN2z6I9eUdg4_Nw7UqQXtyLu81p7vvZrIznZr7iQr53fenQv3309FzuO8KA"},
    knife476: {name: "★ StatTrak™ Karambit | Forest DDPAT FN", price: 609.40, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-HnvD8J4Tdl3lW7Yt337rC99iijASxrUs-Z2ryJYeTcgY2NAvT8li4l-a80MLuu5zLnyBmpGB8ss5wKTWe"},
    knife477: {name: "★ StatTrak™ Karambit | Night BS", price: 273.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_unm5Q_txOhujT8om72wPj80dsNWCmdtfAdAU3ZVrX-AK4kLjv1pa66JSby3JkuCd34y3UzQv3309AU_rxGg"},
    knife478: {name: "★ StatTrak™ Karambit | Night WW", price: 228.73, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_um25V4dB8teXA54vwxgbtrRVqNm_xJdKXcQVqMg7W_lDtl7vq1pe4753KynJqsnZ25n_alxapwUYbStGwX0o"},
    knife479: {name: "★ StatTrak™ Karambit | Night FT", price: 285.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_um25V4dB8teXA54vwxgbtrRVqNm_xJdKXcQVqMg7W_lDtl7vq1pe4753KynJqsnZ25n_alxapwUYbStGwX0o"},
    knife480: {name: "★ StatTrak™ Karambit | Night MW", price: 456.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_ummJW4NFOhujT8om73Abj_0toMWHxIo6SIA9rM1rUr1K2wOzq05Pp7ZScwHpgsiQls3nVyQv3309jjRKblA"},
    knife481: {name: "★ StatTrak™ Karambit | Night FN", price: 2562.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh4-0mf7zO6_ummJW4NFOhujT8om73Abj_0toMWHxIo6SIA9rM1rUr1K2wOzq05Pp7ZScwHpgsiQls3nVyQv3309jjRKblA"},
    knife482: {name: "★ StatTrak™ Karambit | Safari Mesh BS", price: 380.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0mvLnO4TFl2Vu4MBwnPD--Y3nj1H68hU5YjymdoeUcVU6Zl_V-1K_x-m8gcLqvZnInCZmsih053zZnkDhgAYMMLK1z6lAbQ"},
    knife483: {name: "★ StatTrak™ Karambit | Safari Mesh WW", price: 228.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0mvLnO4TFl2Vu5cB1g_zMyoD0mlOx5Uc_NmjyJ9eQcAVvMgzVqFTrx-rujZ6-tM_NwXZq6CMmtCvdn0Hl105SLrs4ynTKRoM"},
    knife484: {name: "★ StatTrak™ Karambit | Safari Mesh FT", price: 180.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0mvLnO4TFl2Vu5cB1g_zMyoD0mlOx5Uc_NmjyJ9eQcAVvMgzVqFTrx-rujZ6-tM_NwXZq6CMmtCvdn0Hl105SLrs4ynTKRoM"},
    knife485: {name: "★ StatTrak™ Karambit | Safari Mesh MW", price: 210.05, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0mvLnO4TFl2Vu5Mx2gv3--Y3nj1H6qkE4Zzqgco-cdwJsaF3XqVm_yL-70JG-7ZyamycyvXNz5SndzkG21wYMMLI7nV07EA"},
    knife486: {name: "★ StatTrak™ Karambit | Safari Mesh FN", price: 143.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0mvLnO4TFl2Vu5Mx2gv3--Y3nj1H6qkE4Zzqgco-cdwJsaF3XqVm_yL-70JG-7ZyamycyvXNz5SndzkG21wYMMLI7nV07EA"},
    knife487: {name: "★ StatTrak™ Karambit | Scorched BS", price: 183.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0k_bkI7fUqWNU6dNoteXA54vwxlLkqhJoYmqlI9OQelRsYVGGqFjsk727h8PutJvMmCBmsnIq5nrZnBGpwUYb7psWfus"},
    knife488: {name: "★ StatTrak™ Karambit | Scorched WW", price: 152.85, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0k_bkI7fUqWZU7Mxkh9bN9J7yjRrm_UdrNW77cdKWdAY7Z1DRrlG9yey80JO7ucudyXY3uXIlt3uMzRe1n1gSOZd2wXJa"},
    knife489: {name: "★ StatTrak™ Karambit | Scorched FT", price: 225.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0k_bkI7fUqWZU7Mxkh9bN9J7yjRrm_UdrNW77cdKWdAY7Z1DRrlG9yey80JO7ucudyXY3uXIlt3uMzRe1n1gSOZd2wXJa"},
    knife490: {name: "★ StatTrak™ Karambit | Scorched MW", price: 307.70, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0k_bkI7fUqWdY781lteXA54vwxgzsqhc6Zmihd47BdwVrNwvQrlntweruhJLu6J3KnXFrsnUi5SvfzR2pwUYbbw402xo"},
    knife491: {name: "★ StatTrak™ Karambit | Scorched FN", price: 662.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0k_bkI7fUqWdY781lteXA54vwxgzsqhc6Zmihd47BdwVrNwvQrlntweruhJLu6J3KnXFrsnUi5SvfzR2pwUYbbw402xo"},
    knife492: {name: "★ StatTrak™ Karambit | Slaughter FT", price: 448.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20jfL2Ibrum25V4dB8teXA54vwxgXtrRY_ZWH3d9eRIVU9MlmB-Fa3l7q-g8S6vJSfzCQysyYr5X3flxepwUYbMQKc__M"},
    knife493: {name: "★ StatTrak™ Karambit | Slaughter MW", price: 440.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20jfL2IbrummJW4NFOhujT8om70Azg_kQ6MTygdYKXJw9qMlnX_Fa3ye28gpC-vZSdynYxviZztyncmwv330_7Rx0jNA"},
    knife494: {name: "★ StatTrak™ Karambit | Slaughter FN", price: 683.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlY20jfL2IbrummJW4NFOhujT8om70Azg_kQ6MTygdYKXJw9qMlnX_Fa3ye28gpC-vZSdynYxviZztyncmwv330_7Rx0jNA"},
    knife495: {name: "★ StatTrak™ Karambit | Stained BS", price: 247.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0kfjmML7VqWNU6dNoteXA54vwxg3mrUc-ZzuicIWXJwBtYw7VqwW-xO-5g5-9v8ucz3Ngv3Jx5naJyUapwUYbVoepRb4"},
    knife496: {name: "★ StatTrak™ Karambit | Stained WW", price: 275.90, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0kfjmML7VqWZU7Mxkh9bN9J7yjRqy-EY5NTrwJYSTe1I8ZwzU_QS-yOq8h8K17pzKzSA3u3Ijt33Ulxaxn1gSOW7yFo2m"},
    knife497: {name: "★ StatTrak™ Karambit | Stained FT", price: 286.43, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0kfjmML7VqWZU7Mxkh9bN9J7yjRqy-EY5NTrwJYSTe1I8ZwzU_QS-yOq8h8K17pzKzSA3u3Ijt33Ulxaxn1gSOW7yFo2m"},
    knife498: {name: "★ StatTrak™ Karambit | Stained MW", price: 346.04, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0kfjmML7VqWdY781lteXA54vwxgHg8xVtYj_7LNXBIw9qZgyE-Fi_xLy7gJXovZqcynNq7iIqtHndykGpwUYbOEO3hhM"},
    knife499: {name: "★ StatTrak™ Karambit | Stained FN", price: 753.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0kfjmML7VqWdY781lteXA54vwxgHg8xVtYj_7LNXBIw9qZgyE-Fi_xLy7gJXovZqcynNq7iIqtHndykGpwUYbOEO3hhM"},
    knife500: {name: "★ StatTrak™ Karambit | Urban Masked BS", price: 205.22, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0g_bkNoTEhGlQ5vp5j-jX7LP5iUazrl0-Yzr3LY-UIFc-NVjTrAS2wb3v1se_v8vMznFi63YgtizdmxLigh4acKUx0hPHV3-s"},
    knife501: {name: "★ StatTrak™ Karambit | Urban Masked WW", price: 164.93, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0g_bkNoTEhGlQ5vp8j-3I4IHKhFWmrBZyYWn6cYWTd1VtM1-C81e5l-7rgsO87Z-awHAwviBxsHrUnRHkghoZb_sv26KGa0e-bg"},
    knife502: {name: "★ StatTrak™ Karambit | Urban Masked FT", price: 205.22, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0g_bkNoTEhGlQ5vp8j-3I4IHKhFWmrBZyYWn6cYWTd1VtM1-C81e5l-7rgsO87Z-awHAwviBxsHrUnRHkghoZb_sv26KGa0e-bg"},
    knife503: {name: "★ StatTrak™ Karambit | Urban Masked MW", price: 335.73, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0g_bkNoTEhGlQ5vp9g-7J4bP5iUazrl04YG-nJdXDegc2Y1uBrlG6x-2-gZTq6p6YwSZq6CFzsynZlhS30B9PcKUx0vKbTggh"},
    knife504: {name: "★ StatTrak™ Karambit | Urban Masked FN", price: 860.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJh5C0g_bkNoTEhGlQ5vp9g-7J4bP5iUazrl04YG-nJdXDegc2Y1uBrlG6x-2-gZTq6p6YwSZq6CFzsynZlhS30B9PcKUx0vKbTggh"},
	knife505: {name: "★ StatTrak™ Flip Knife", price: 112.86, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3dzFL_JKzloaIx6ejYO6GzzlTucAj072W99-liQfm-hJsZGvyIdLEJw5tNA2E5BHgluDLhNCe"},
    knife506: {name: "★ StatTrak™ Flip Knife | Blue Steel BS", price: 115.46, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO0mJWOk8j8NrrHj1Rd6dd2j6fD94ii3wKwqkdoYGH0JoaWIQY-YVnY-VjrxujtjcDv7Z2aznQ2uyEq-z-DyO-mAbOO"},
    knife507: {name: "★ StatTrak™ Flip Knife | Blue Steel WW", price: 113.64, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO0mJWOk8j8NrrHj1Rd6dd2j6fD94ii3wKwqkdoYGH0JoaWIQY-YVnY-VjrxujtjcDv7Z2aznQ2uyEq-z-DyO-mAbOO"},
    knife508: {name: "★ StatTrak™ Flip Knife | Blue Steel FT", price: 121.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO0mJWOk8j8NrrHj1Rd6dd2j6fD94ii3wKwqkdoYGH0JoaWIQY-YVnY-VjrxujtjcDv7Z2aznQ2uyEq-z-DyO-mAbOO"},
    knife509: {name: "★ StatTrak™ Flip Knife | Blue Steel MW", price: 136.81, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO0mJWOk8j8NrrHj1Rd6dd2j6fD94ii3wKwqkdoYGH0JoaWIQY-YVnY-VjrxujtjcDv7Z2aznQ2uyEq-z-DyO-mAbOO"},
    knife510: {name: "★ StatTrak™ Flip Knife | Blue Steel FN", price: 349.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO0mJWOk8j8NrrHj1Rd6dd2j6fD94ii3wKwqkdoYGH0JoaWIQY-YVnY-VjrxujtjcDv7Z2aznQ2uyEq-z-DyO-mAbOO"},
    knife511: {name: "★ StatTrak™ Flip Knife | Boreal Forest BS", price: 83.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOwm5KOhOPLMbTDk2pd1810i__YyoD0mlOx5UI5a2rzcY_EIQNqZA7R_QO3yeq-hMS_vsybnXsw7iJztyzZmxCyhR1SLrs4IbirlSI"},
    knife512: {name: "★ StatTrak™ Flip Knife | Boreal Forest WW", price: 76.04, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOwm5KOhOPLMbTDk2pd18h0juDU-LP5iUazrl1lZmyiIIaSIVNraVmDqVK9ku27jJ_vu5rPmnBmvyEl7H6Oyx2y1E5JcKUx0ugc8UjH"},
    knife513: {name: "★ StatTrak™ Flip Knife | Boreal Forest FT", price: 102.26, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOwm5KOhOPLMbTDk2pd18h0juDU-LP5iUazrl1lZmyiIIaSIVNraVmDqVK9ku27jJ_vu5rPmnBmvyEl7H6Oyx2y1E5JcKUx0ugc8UjH"},
    knife514: {name: "★ StatTrak™ Flip Knife | Boreal Forest MW", price: 119.34, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOwm5KOhOPLMbTDk2pd18l4jeHVyoD0mlOx5Rdoa277LIOUdwY5MF7U81O7krzuhJa8vM-fnSMxvyVxtCqPnEC3hktSLrs4hATUWUc"},
    knife515: {name: "★ StatTrak™ Flip Knife | Boreal Forest FN", price: 262.78, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOwm5KOhOPLMbTDk2pd18l4jeHVyoD0mlOx5Rdoa277LIOUdwY5MF7U81O7krzuhJa8vM-fnSMxvyVxtCqPnEC3hktSLrs4hATUWUc"},  
    knife516: {name: "★ StatTrak™ Flip Knife | Case Hardened BS", price: 135.56, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO5nYyOk8j8NrrHj1Rd6dd2j6eVrI6silWxqEVlMjyictORIw8_YQnU_Va-wrvv1JHpuZWYnCFmvSEl-z-DyI1yZU_E"},
    knife517: {name: "★ StatTrak™ Flip Knife | Case Hardened WW", price: 137.66, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO5nYyOk8j5Nr_Yg2Zu5MRjjeyP896niwPkqBZsMmnxctSUcgA-N1_X-1i5x-fq05W46M6bz3Nl6Skm4mGdwUId17urZQ"},
    knife518: {name: "★ StatTrak™ Flip Knife | Case Hardened FT", price: 172.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO5nYyOk8j5Nr_Yg2Zu5MRjjeyP896niwPkqBZsMmnxctSUcgA-N1_X-1i5x-fq05W46M6bz3Nl6Skm4mGdwUId17urZQ"},
    knife519: {name: "★ StatTrak™ Flip Knife | Case Hardened MW", price: 176.43, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO5nYyOk8j4OrzZglRd6dd2j6eQodmt0VDgrUBqZWrwJIKccg48ZQ7T_AS5l-nqh5e1uJrBnHAw63J2-z-DyM8HtRGF"},
    knife520: {name: "★ StatTrak™ Flip Knife | Case Hardened FN", price: 387.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eO5nYyOk8j4OrzZglRd6dd2j6eQodmt0VDgrUBqZWrwJIKccg48ZQ7T_AS5l-nqh5e1uJrBnHAw63J2-z-DyM8HtRGF"},
    knife521: {name: "★ StatTrak™ Flip Knife | Crimson Web BS", price: 107.34, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOhkYKYqP_xMq3IqWdQ-sJ0xLGQ8Nyn3wLg_Utvazj2coTGJ1JsMAnZ-lTryefqgpLu75qfznFku3I8pSGK4lNmans"},
    knife522: {name: "★ StatTrak™ Flip Knife | Crimson Web WW", price: 166.86, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOhkYKYqPrxN7LEm1Rd6dd2j6eSp4332AG3qhA_YWinJ4OXJFM-Z1HZqAW7wOnog8Dp78jLm3Zr63Vx-z-DyBZ1xJAE"},
    knife523: {name: "★ StatTrak™ Flip Knife | Crimson Web FT", price: 157.33, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOhkYKYqPrxN7LEm1Rd6dd2j6eSp4332AG3qhA_YWinJ4OXJFM-Z1HZqAW7wOnog8Dp78jLm3Zr63Vx-z-DyBZ1xJAE"},
    knife524: {name: "★ StatTrak™ Flip Knife | Crimson Web MW", price: 385.39, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOhkYKYqPv9NLPFqWdQ-sJ0xOyR94_20VHlr0NsZzulcobEJAY5MAqD-VXvx-7m1pC6uZnByncw7yY8pSGKow-GEME"},
    knife525: {name: "★ StatTrak™ Flip Knife | Crimson Web FN", price: 992.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP-qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j-9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5wOuqzNQhhfg3SPqhHY-I_9hvTBS414NNcWNak8L5ILAy959HPZrF4MNhITZaGWqfQZg6suBg7hPBbL5zapizq2SXqPz1fXQ2rpDxTuFR6rw"},
    knife526: {name: "★ StatTrak™ Flip Knife | Fade MW", price: 320.35, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD7eOwlYSOqPv9NLPFqWdQ-sJ0xLGQpIqtjQy1rUE5Y2n1I4PGcgI5MFGD-wS3l-7r18TpucyanHpg6CE8pSGKbZ02GvY"},
    knife527: {name: "★ StatTrak™ Flip Knife | Fade FN", price: 296.60, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD7eOwlYSOqPv9NLPFqWdQ-sJ0xLGQpIqtjQy1rUE5Y2n1I4PGcgI5MFGD-wS3l-7r18TpucyanHpg6CE8pSGKbZ02GvY"},
    knife528: {name: "★ StatTrak™ Flip Knife | Forest DDPAT BS", price: 93.49, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOykJCKg8j8NrrHj1Rd6dd2j6fDo4-kjVbl-UVuMTyhLYSVdVVrMFrV_AXskOjrgcS_7p3NyyQyuCkh-z-DyEDKmcXq"},
    knife529: {name: "★ StatTrak™ Flip Knife | Forest DDPAT WW", price: 91.13, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOykJCKg8j5Nr_Yg2Zu5MRjjeyPpdun3gGy-hY_NWz2IIKQclQ7NFGE_Fe6x-zs0MPqtczBm3VgvHVw4mGdwUIWFVDAjQ"},
    knife530: {name: "★ StatTrak™ Flip Knife | Forest DDPAT FT", price: 89.95, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOykJCKg8j5Nr_Yg2Zu5MRjjeyPpdun3gGy-hY_NWz2IIKQclQ7NFGE_Fe6x-zs0MPqtczBm3VgvHVw4mGdwUIWFVDAjQ"},
    knife531: {name: "★ StatTrak™ Flip Knife | Forest DDPAT MW", price: 138.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOykJCKg8j4OrzZglRd6dd2j6eZrd7x2QXm-xZrNmz2LI-Tewc8YFHQ-AW4wOa71J687pXByHJm6SNz-z-DyNsSWDE9"},
    knife532: {name: "★ StatTrak™ Flip Knife | Forest DDPAT FN", price: 249.78, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJK9eOykJCKg8j4OrzZglRd6dd2j6eZrd7x2QXm-xZrNmz2LI-Tewc8YFHQ-AW4wOa71J687pXByHJm6SNz-z-DyNsSWDE9"},
    knife533: {name: "★ StatTrak™ Flip Knife | Night BS", price: 94.65, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR4-O4nYeDg8j8NrrHj1Rd6dd2j6eS8d_02Fay_xBsYzzwI4DHcAM4Z13Q8gDqlea91pfutcydzydl7CB2-z-DyJ27qxgF"},
    knife534: {name: "★ StatTrak™ Flip Knife | Night WW", price: 341.34, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR4-O4nYeDg8j5Nr_Yg2Zu5MRjjeyPrNjz3AO2-xFsZTj6INeQJlBvYFnVrli5lOvr1pG0tJ_MyCEw6Ckm7GGdwUIjVDzoMQ"},
    knife535: {name: "★ StatTrak™ Flip Knife | Night FT", price: 112.61, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR4-O4nYeDg8j5Nr_Yg2Zu5MRjjeyPrNjz3AO2-xFsZTj6INeQJlBvYFnVrli5lOvr1pG0tJ_MyCEw6Ckm7GGdwUIjVDzoMQ"},
    knife536: {name: "★ StatTrak™ Flip Knife | Night MW", price: 192.85, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR4-O4nYeDg8j4OrzZglRd6dd2j6fC8dqk2wDi-xE6Nz_7II6cewRrY12G-gC6xL--hsfuvZqbzyZnvHIk-z-DyFVtBt8T"},
    knife537: {name: "★ StatTrak™ Flip Knife | Night FN", price: 620.92, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR4-O4nYeDg8j4OrzZglRd6dd2j6fC8dqk2wDi-xE6Nz_7II6cewRrY12G-gC6xL--hsfuvZqbzyZnvHIk-z-DyFVtBt8T"},
    knife538: {name: "★ StatTrak™ Flip Knife | Safari Mesh BS", price: 75.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OO7kZODqOP1PYTZk2pH8fp9i_vG8MKj2QG2-xZtMW77coDGIwI_aQrS-VHsxO7o0MPu7snNwSdmuCAg43-IgVXp1mKS_KYC"},
    knife539: {name: "★ StatTrak™ Flip Knife | Safari Mesh WW", price: 109.43, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OO7kZODqOP1PYTck29Y_chOhujT8om72VXkr0E4Z2r3J9CRIQ9tNArWq1S_lOrug8Xv7sjJwXVruyUl5XqOmQv330_24dUqqg"},
    knife540: {name: "★ StatTrak™ Flip Knife | Safari Mesh FT", price: 84.37, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OO7kZODqOP1PYTck29Y_chOhujT8om72VXkr0E4Z2r3J9CRIQ9tNArWq1S_lOrug8Xv7sjJwXVruyUl5XqOmQv330_24dUqqg"},
    knife541: {name: "★ StatTrak™ Flip Knife | Safari Mesh MW", price: 89.51, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OO7kZODqOP1PYTdn2xZ_Pp9i_vG8MKm3gW380dqMjr0dtXAdwc8N1_Q_Vbql-a9jcToup-dmHpgsnVwsH2IgVXp1ngZO2uX"},
    knife542: {name: "★ StatTrak™ Flip Knife | Safari Mesh FN", price: 200.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OO7kZODqOP1PYTdn2xZ_Pp9i_vG8MKm3gW380dqMjr0dtXAdwc8N1_Q_Vbql-a9jcToup-dmHpgsnVwsH2IgVXp1ngZO2uX"},
    knife543: {name: "★ StatTrak™ Flip Knife | Scorched BS", price: 88.96, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOylZCbm_LLO77QgHJu5MRjjeyPod_00VLj-BE-Mm77JYaddgE5YF3UrgLsxbjmjJPuvpTKznRkvSknsGGdwULvXBzBsA"},
    knife544: {name: "★ StatTrak™ Flip Knife | Scorched WW", price: 103.79, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOylZCbm_LLPr7Vn35c18lwmO7Eu4injgHlqEBuYW36IdOTdQ88ZQ3Rq1a4yea-0JK6vszPwHZj7nIm5XvD30vgloTn9T8"},
    knife545: {name: "★ StatTrak™ Flip Knife | Scorched FT", price: 91.78, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOylZCbm_LLP7LWnn9u5MRjjeyP84jzjVHl-hdtYm37co6Udw48N1zT8gLowLi705e7uZrIziFku3EisGGdwUJi_yOknw"},
    knife546: {name: "★ StatTrak™ Flip Knife | Scorched MW", price: 118.57, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOylZCbm_LLP7LWnn9u5MRjjeyP84jzjVHl-hdtYm37co6Udw48N1zT8gLowLi705e7uZrIziFku3EisGGdwUJi_yOknw"},
    knife547: {name: "★ StatTrak™ Flip Knife | Scorched FN", price: 400.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOylZCbm_LLP7LWnn9u5MRjjeyP84jzjVHl-hdtYm37co6Udw48N1zT8gLowLi705e7uZrIziFku3EisGGdwUJi_yOknw"},
    knife548: {name: "★ StatTrak™ Flip Knife | Slaughter FT", price: 258.49, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD4eOskYKZlsj5Nr_Yg2Zu5MRjjeyPpImj2g3j-BVsam71cobAewE_NV3Xrli2x-67057vu5nNmHc36SIk4mGdwUJ2rRfCxQ"},
    knife549: {name: "★ StatTrak™ Flip Knife | Slaughter MW", price: 249.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD4eOskYKZlsj4OrzZglRd6dd2j6eUoNij31K2_UZoZGynLITGdgM8MwvZ_FC2wbruhZfq6snOnHVluykg-z-DyJrKkz-J"},
    knife550: {name: "★ StatTrak™ Flip Knife | Slaughter FN", price: 359.83, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD4eOskYKZlsj4OrzZglRd6dd2j6eUoNij31K2_UZoZGynLITGdgM8MwvZ_FC2wbruhZfq6snOnHVluykg-z-DyJrKkz-J"},
    knife551: {name: "★ StatTrak™ Flip Knife | Stained BS", price: 121.73, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOwm5KIkvPLO77QgHJu5MRjjeyPp9ij3VLt_EpvamqlIIGUeg9vZl2Gqwe8xObthJ6-vcuaz3MwvSVz4WGdwULsq17xUA"},
    knife552: {name: "★ StatTrak™ Flip Knife | Stained WW", price: 73.17, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOwm5KIkvPLPr7Vn35c18lwmO7Eu973i1CxqRVqamuiIYfHJlNqNF7R-lC9kOnpgse5tZvJmnVl63Yq4nzD30vghgzkHKc"},
    knife553: {name: "★ StatTrak™ Flip Knife | Stained FT", price: 108.28, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOwm5KIkvPLPr7Vn35c18lwmO7Eu973i1CxqRVqamuiIYfHJlNqNF7R-lC9kOnpgse5tZvJmnVl63Yq4nzD30vghgzkHKc"},
    knife554: {name: "★ StatTrak™ Flip Knife | Stained MW", price: 123.13, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOwm5KIkvPLP7LWnn9u5MRjjeyP8NX03gHj_RJlYWGiJYfDIQU5ZlmC-VG8l-y9g5C5v5Sdm3Bq6CUi5mGdwUJLmy-O2g"},
    knife555: {name: "★ StatTrak™ Flip Knife | Stained FN", price: 357.74, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOwm5KIkvPLP7LWnn9u5MRjjeyP8NX03gHj_RJlYWGiJYfDIQU5ZlmC-VG8l-y9g5C5v5Sdm3Bq6CUi5mGdwUJLmy-O2g"},
    knife556: {name: "★ StatTrak™ Flip Knife | Urban Masked BS", price: 66.70, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOilZCOqOLmMbrfqWNU6dNoteXA54vwxlDl-kdlMD_7d4_Geg5qaVmC81O-xbu8hpS1up7Py3tks3Qm5XjYlhapwUYb0Ay06gc"},
    knife557: {name: "★ StatTrak™ Flip Knife | Urban Masked WW", price: 104.89, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOilZCOqOLmMbrfqWZU7Mxkh9bN9J7yjRrh_hduZT_ydYGccgRqM13Xq1Xolbrt1sC6vp_JzCBh7ygj53vfnR3kn1gSOdeWAw8q"},
    knife558: {name: "★ StatTrak™ Flip Knife | Urban Masked FT", price: 100.30, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJD_eOwm5KIkvPLPr7Vn35c18lwmO7Eu973i1CxqRVqamuiIYfHJlNqNF7R-lC9kOnpgse5tZvJmnVl63Yq4nzD30vghgzkHKc"},
    knife559: {name: "★ StatTrak™ Flip Knife | Urban Masked MW", price: 110.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOilZCOqOLmMbrfqWdY781lteXA54vwxlaw-hBsZ2r6IdPEcgQ6MAuC8le9kL29g5S07sian3Vk73R24SrZykepwUYbeo-ROcg"},
    knife560: {name: "★ StatTrak™ Flip Knife | Urban Masked FN", price: 120.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1f_BYQJR_OOilZCOqOLmMbrfqWdY781lteXA54vwxlaw-hBsZ2r6IdPEcgQ6MAuC8le9kL29g5S07sian3Vk73R24SrZykepwUYbeo-ROcg"}
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
  huntsman: {
	knife1: {name: "★ Huntsman Knife", price: 133.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3ZTxB-NW1lYzFwKGmYrnTl28GuJEg2u3E99qn0VDi-xY4amGmcoSRelJvMl3S_1K7x_Cv28HdLw_tSQ"},
	knife2: {name: "★ Huntsman Knife | Blue Steel BS", price: 106.80, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0lfvhNr_unm5Q_txOhujT8om73le3_0ZqMTj2LYCccQ9raA3Q81O8kr3tgpW7uMnBz3plvSYj5CvfmAv3309cIyuqig"},
	knife3: {name: "★ Huntsman Knife | Blue Steel WW", price: 105.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0lfvhNr_um25V4dB8teXA54vwxlexqkVpYT3xINOVegM4ZQvQqFDvleu8gJO9vZrLnyFj7yEn4XaMmRGpwUYbSTbvj7o"},
	knife4: {name: "★ Huntsman Knife | Blue Steel FT", price: 117.30, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0lfvhNr_um25V4dB8teXA54vwxlexqkVpYT3xINOVegM4ZQvQqFDvleu8gJO9vZrLnyFj7yEn4XaMmRGpwUYbSTbvj7o"},
	knife5: {name: "★ Huntsman Knife | Blue Steel MW", price: 139.08, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0lfvhNr_ummJW4NFOhujT8om731fg-Es-YDr0JI-WcVJqYQ3WqFm-xr_qg5-87ZrOziFguicr7XveyQv3308Qt8kQdA"},
	knife6: {name: "★ Huntsman Knife | Blue Steel FN", price: 204.84, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0lfvhNr_ummJW4NFOhujT8om731fg-Es-YDr0JI-WcVJqYQ3WqFm-xr_qg5-87ZrOziFguicr7XveyQv3308Qt8kQdA"},
	knife7: {name: "★ Huntsman Knife | Boreal Forest BS", price: 67.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0kfjmNqjFqWle-sBwhtbJ8I3jkWu4qgE7Nnf3I46cIQI3aVHT81S3k-y51J-_7Z-bwCBrsyJzsS6JzR2_gRxMbLFsm7XAHkA7_P9_"},
	knife8: {name: "★ Huntsman Knife | Boreal Forest WW", price: 90.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0kfjmNqjFqWle-sBwhtbM8Ij8nVmLpxIuNDztdYTAcgFvN1mBrlPqx-i-hJW7tcyfzHowvXRx4yyOyUG_hxwdbLZmg-veFwv1pBSWeg"},
	knife9: {name: "★ Huntsman Knife | Boreal Forest FT", price: 71.83, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0kfjmNqjFqWle-sBwhtbM8Ij8nVmLpxIuNDztdYTAcgFvN1mBrlPqx-i-hJW7tcyfzHowvXRx4yyOyUG_hxwdbLZmg-veFwv1pBSWeg"},
	knife10: {name: "★ Huntsman Knife | Boreal Forest MW", price: 99.18, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0kfjmNqjFqWle-sBwhtbN_Iv9nGu4qgE7NnehIoHBcVI_aFnQrlS5w-vt05S7u5nAmHc2uCcn5nrZzhKzhR8ZZrFsm7XAHnEvQoLM"},
	knife11: {name: "★ Huntsman Knife | Boreal Forest FN", price: 192.30, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0kfjmNqjFqWle-sBwhtbN_Iv9nGu4qgE7NnehIoHBcVI_aFnQrlS5w-vt05S7u5nAmHc2uCcn5nrZzhKzhR8ZZrFsm7XAHnEvQoLM"},	
	knife12: {name: "★ Huntsman Knife | Case Hardened BS", price: 114.66, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0mP74Nr_unm5Q_txOhujT8om731Dtr0E4N2ugcYWQJwU4MFvX-gC4lL_v0J696pTOzSZhvHV2tCnengv330-PIGMGqA"},
	knife13: {name: "★ Huntsman Knife | Case Hardened WW", price: 120.18, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0mP74Nr_um25V4dB8teXA54vwxlHgrkZtYW_wctXAd1c-YQ7Z8wTsx-nsgZC_tZ3MyHVi7CEg5nvbmx2pwUYby-WoiHA"},
	knife14: {name: "★ Huntsman Knife | Case Hardened FT", price: 127.24, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0mP74Nr_um25V4dB8teXA54vwxlHgrkZtYW_wctXAd1c-YQ7Z8wTsx-nsgZC_tZ3MyHVi7CEg5nvbmx2pwUYby-WoiHA"},
	knife15: {name: "★ Huntsman Knife | Case Hardened MW", price: 143.66, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0mP74Nr_ummJW4NFOhujT8om7igDnr0I_Mm_zJ9CXIQA3Zl7U-lG_kOi9gMC-uMvLwXdl6yZ05S7bmgv330-Ff2dfAA"},
	knife16: {name: "★ Huntsman Knife | Case Hardened FN", price: 230.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0mP74Nr_ummJW4NFOhujT8om7igDnr0I_Mm_zJ9CXIQA3Zl7U-lG_kOi9gMC-uMvLwXdl6yZ05S7bmgv330-Ff2dfAA"},	
	knife17: {name: "★ Huntsman Knife | Crimson Web BS", price: 106.78, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0gPL2IITZk2pH8fp9i_vG8ML32gfm-BJlZGmlLNKcJgc2NFmB_1Pqxum70Me8vcjIzyRmv3Fz7CqIgVXp1skGzl47"},
	knife18: {name: "★ Huntsman Knife | Crimson Web WW", price: 125.41, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0gPL2IITck29Y_chOhujT8om73QHlr0o_Njv6IIKde1M3YFmB8lm9w-nthp-6vcyYyXRqvXEmt37bmwv3308f4sOUEg"},
	knife19: {name: "★ Huntsman Knife | Crimson Web FT", price: 119.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0gPL2IITck29Y_chOhujT8om73QHlr0o_Njv6IIKde1M3YFmB8lm9w-nthp-6vcyYyXRqvXEmt37bmwv3308f4sOUEg"},
	knife20: {name: "★ Huntsman Knife | Crimson Web MW", price: 253.65, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0gPL2IITdn2xZ_Pp9i_vG8MLwjgbg_UI_Y2rxLIGSIFA5NV6C-1e-wb251JfvvpzKyHUx6Slx4XndgVXp1lCrFlUj"},
	knife21: {name: "★ Huntsman Knife | Crimson Web FN", price: 806.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0gPL2IITdn2xZ_Pp9i_vG8MLwjgbg_UI_Y2rxLIGSIFA5NV6C-1e-wb251JfvvpzKyHUx6Slx4XndgVXp1lCrFlUj"},
	knife22: {name: "★ Huntsman Knife | Fade MW", price: 262.22, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlYG0kfbwNoTdn2xZ_Pp9i_vG8MKjjgbl_UA_MDz3ctCUcwA8Y1yG8lG3w-7v1p_ptZ_BnSA17yFx7H2MgVXp1l4ye9bA"},
	knife23: {name: "★ Huntsman Knife | Fade FN", price: 249.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlYG0kfbwNoTdn2xZ_Pp9i_vG8MKjjgbl_UA_MDz3ctCUcwA8Y1yG8lG3w-7v1p_ptZ_BnSA17yFx7H2MgVXp1l4ye9bA"},
	knife24: {name: "★ Huntsman Knife | Forest DDPAT BS", price: 65.97, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0k_PkMq_unm5Q_txOhujT8om73lfkrRZkZmiiLY6QIVdvNFDR_1G4xO3pgJPo7prNynBgsnYi7Svcywv3308pQToatQ"},
	knife25: {name: "★ Huntsman Knife | Forest DDPAT WW", price: 71.80, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0k_PkMq_um25V4dB8teXA54vwxgLlqURlY2n1dobGIQVtNwrVrle9k7y5056-uZXJwHpgsygl4S6LlkGpwUYbifRo7fk"},
	knife26: {name: "★ Huntsman Knife | Forest DDPAT FT", price: 65.91, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0k_PkMq_um25V4dB8teXA54vwxgLlqURlY2n1dobGIQVtNwrVrle9k7y5056-uZXJwHpgsygl4S6LlkGpwUYbifRo7fk"},
	knife27: {name: "★ Huntsman Knife | Forest DDPAT MW", price: 91.78, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0k_PkMq_ummJW4NFOhujT8om72QTt_Utra2D2cIGXdQNrM1DQrFXvxua5h5e-6c6bnCBru3IhtyuOzQv330-aiXzE2Q"},
	knife28: {name: "★ Huntsman Knife | Forest DDPAT FN", price: 141.08, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0k_PkMq_ummJW4NFOhujT8om72QTt_Utra2D2cIGXdQNrM1DQrFXvxua5h5e-6c6bnCBru3IhtyuOzQv330-aiXzE2Q"},
	knife29: {name: "★ Huntsman Knife | Night BS", price: 91.27, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh4-0mf7zO6_unm5Q_txOhujT8om70A3s_BVlMm_zLI_EJwA9MgrV_1PqkLjq15C9vZ-YwHs1uSFxti3ezgv330_LEd-J0Q"},
	knife30: {name: "★ Huntsman Knife | Night WW", price: 96.91, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh4-0mf7zO6_um25V4dB8teXA54vwxgzhqRZlZmD3dYCWdAM9NV3Q-FO7xb3mgp65vMnBzSBm7iVwsXfazBepwUYbETGOf94"},
	knife31: {name: "★ Huntsman Knife | Night FT", price: 98.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh4-0mf7zO6_um25V4dB8teXA54vwxgzhqRZlZmD3dYCWdAM9NV3Q-FO7xb3mgp65vMnBzSBm7iVwsXfazBepwUYbETGOf94"},
	knife32: {name: "★ Huntsman Knife | Night MW", price: 165.46, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh4-0mf7zO6_ummJW4NFOhujT8om7igSy-kJkYGHzI9DGIAc-MlvV81O8we67gJC16M6azntjvSN25Hrcmgv330-GTEGtzA"},
	knife33: {name: "★ Huntsman Knife | Night FN", price: 687.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh4-0mf7zO6_ummJW4NFOhujT8om7igSy-kJkYGHzI9DGIAc-MlvV81O8we67gJC16M6azntjvSN25Hrcmgv330-GTEGtzA"},
	knife34: {name: "★ Huntsman Knife | Safari Mesh BS", price: 68.17, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0mvLnO4TFl2Vu4MBwnPD--Y3nj1H6rxFvajz3LYTBelBqMA6E8lnolLvtg5e97Z6cnyRlvSIg4C7dzRKw1AYMMLLMmZlrnA"},
	knife35: {name: "★ Huntsman Knife | Safari Mesh WW", price: 70.05, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0mvLnO4TFl2Vu5cB1g_zMyoD0mlOx5UA6ZW2iJ4GWewI_Y12ErAO-lezrg5DotMnLzXIwvHJxsC7YnUGxgUlSLrs4eK719VU"},
	knife36: {name: "★ Huntsman Knife | Safari Mesh FT", price: 65.45, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0mvLnO4TFl2Vu5cB1g_zMyoD0mlOx5UA6ZW2iJ4GWewI_Y12ErAO-lezrg5DotMnLzXIwvHJxsC7YnUGxgUlSLrs4eK719VU"},
	knife37: {name: "★ Huntsman Knife | Safari Mesh MW", price: 80.96, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0mvLnO4TFl2Vu5Mx2gv3--Y3nj1H6-EJoNjj1IYLGJlRvaAvZ-1Hvwuboh5K4vp_NzCZhuCYqtyrZnxHk1wYMMLI47XWL5Q"},
	knife38: {name: "★ Huntsman Knife | Safari Mesh FN", price: 225.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0mvLnO4TFl2Vu5Mx2gv3--Y3nj1H6-EJoNjj1IYLGJlRvaAvZ-1Hvwuboh5K4vp_NzCZhuCYqtyrZnxHk1wYMMLI47XWL5Q"},
	knife39: {name: "★ Huntsman Knife | Scorched BS", price: 67.74, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0k_bkI7fUqWNU6dNoteXA54vwxgywqENpZmGhLdSWdAY2YwqC_wLvxe2-jZS57pXPmHRl7yAg7X3dmRKpwUYbq4QoAdU"},
	knife40: {name: "★ Huntsman Knife | Scorched WW", price: 77.36, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0k_bkI7fUqWZU7Mxkh9bN9J7yjRqxqEA-ZT36cYbAIwE8NQzX-wDowe_ngsLu6J2anyRr7yhx5S7UnUe2n1gSOQmkY0Ip"},
	knife41: {name: "★ Huntsman Knife | Scorched FT", price: 65.32, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0k_bkI7fUqWZU7Mxkh9bN9J7yjRqxqEA-ZT36cYbAIwE8NQzX-wDowe_ngsLu6J2anyRr7yhx5S7UnUe2n1gSOQmkY0Ip"},
	knife42: {name: "★ Huntsman Knife | Scorched MW", price: 92.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0k_bkI7fUqWdY781lteXA54vwxlLlrkE-Ym30LIScew84Yg2Crge3kubth8Tq75ucnyAy6HMjsCzczB2pwUYbUFXe3jk"},
	knife43: {name: "★ Huntsman Knife | Scorched FN", price: 215.46, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0k_bkI7fUqWdY781lteXA54vwxlLlrkE-Ym30LIScew84Yg2Crge3kubth8Tq75ucnyAy6HMjsCzczB2pwUYbUFXe3jk"},
	knife44: {name: "★ Huntsman Knife | Slaughter FT", price: 171.29, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlY20jfL2Ibrum25V4dB8teXA54vwxgDm8kI5Mjymco7Gc1U3Yl_Y-FW_xezt05607s-Yn3Bj63El7S3ezBWpwUYbnJ2mxuE"},
	knife45: {name: "★ Huntsman Knife | Slaughter MW", price: 215.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlY20jfL2IbrummJW4NFOhujT8om72Qbt_RdrZT3wINCUJwM5YlDV-FXtye7n05W6uZjBzSNgsnFzs3mPyQv330-XzjMajA"},
	knife46: {name: "★ Huntsman Knife | Slaughter FN", price: 277.04, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlY20jfL2IbrummJW4NFOhujT8om72Qbt_RdrZT3wINCUJwM5YlDV-FXtye7n05W6uZjBzSNgsnFzs3mPyQv330-XzjMajA"},
	knife47: {name: "★ Huntsman Knife | Stained BS", price: 89.51, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0kfjmML7VqWNU6dNoteXA54vwxle3r0A4YWyhd9KVcAdvZF7T-VO7xr3q1sW8uZXKznpl6XMn5yqOzBepwUYbBXE4trA"},
	knife48: {name: "★ Huntsman Knife | Stained WW", price: 77.83, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0kfjmML7VqWZU7Mxkh9bN9J7yjRrjqRZkZDv0dYCVdVRoNAqFqVS_x-ft05-6vZmdznZhvXN24Cnclka1n1gSOSoqW0dU"},
	knife49: {name: "★ Huntsman Knife | Stained FT", price: 96.34, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0kfjmML7VqWZU7Mxkh9bN9J7yjRrjqRZkZDv0dYCVdVRoNAqFqVS_x-ft05-6vZmdznZhvXN24Cnclka1n1gSOSoqW0dU"},
	knife50: {name: "★ Huntsman Knife | Stained MW", price: 102.62, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0kfjmML7VqWdY781lteXA54vwxla1-xI-YWqgcoGRcAdoYFvQ_lS6k-26hJ69usibynFjuHIn7XfanhepwUYb_Z1lKzI"},
	knife51: {name: "★ Huntsman Knife | Stained FN", price: 136.81, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0kfjmML7VqWdY781lteXA54vwxla1-xI-YWqgcoGRcAdoYFvQ_lS6k-26hJ69usibynFjuHIn7XfanhepwUYb_Z1lKzI"},
	knife52: {name: "★ Huntsman Knife | Urban Masked BS", price: 71.83, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0g_bkNoTEhGlQ5vp5j-jX7LP5iUazrl09Nm70LYSWJwRsaVvT-Fm7yby6gZHovc6fzHdj7iUkt3yIlhPliUlIcKUx0s94Heju"},
	knife53: {name: "★ Huntsman Knife | Urban Masked WW", price: 76.15, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0g_bkNoTEhGlQ5vp8j-3I4IHKhFWmrBZyam2iIYWUIw43NV7Z_wDolezt18K8u8mbnXtksykn433dlxewgEsaZ_sv26Ko8CuK9Q"},
	knife54: {name: "★ Huntsman Knife | Urban Masked FT", price: 70.12, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0g_bkNoTEhGlQ5vp8j-3I4IHKhFWmrBZyam2iIYWUIw43NV7Z_wDolezt18K8u8mbnXtksykn433dlxewgEsaZ_sv26Ko8CuK9Q"},
	knife55: {name: "★ Huntsman Knife | Urban Masked MW", price: 92.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0g_bkNoTEhGlQ5vp9g-7J4bP5iUazrl0-Ym73JdeSegVsZljR_QW7k7jujJfp75SYm3o1uXEn4X3amBS_gxFIcKUx0oGnJYRg"},
	knife56: {name: "★ Huntsman Knife | Urban Masked FN", price: 127.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0kfjmML7VqWdY781lteXA54vwxla1-xI-YWqgcoGRcAdoYFvQ_lS6k-26hJ69usibynFjuHIn7XfanhepwUYb_Z1lKzI"}
  },
  huntst: {
	knife1: {name: "★ StatTrak™ Huntsman Knife", price: 200.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3ZTxB-NW1lYzFwKGmYrnTl28GuJEg2u3E99qn0VDi-xY4amGmcoSRelJvMl3S_1K7x_Cv28HdLw_tSQ"},
	knife2: {name: "★ StatTrak™ Huntsman Knife | Blue Steel BS", price: 142.78, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0lfvhNr_unm5Q_txOhujT8om73le3_0ZqMTj2LYCccQ9raA3Q81O8kr3tgpW7uMnBz3plvSYj5CvfmAv3309cIyuqig"},
	knife3: {name: "★ StatTrak™ Huntsman Knife | Blue Steel WW", price: 161.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0lfvhNr_um25V4dB8teXA54vwxlexqkVpYT3xINOVegM4ZQvQqFDvleu8gJO9vZrLnyFj7yEn4XaMmRGpwUYbSTbvj7o"},
	knife4: {name: "★ StatTrak™ Huntsman Knife | Blue Steel FT", price: 191.38, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0lfvhNr_um25V4dB8teXA54vwxlexqkVpYT3xINOVegM4ZQvQqFDvleu8gJO9vZrLnyFj7yEn4XaMmRGpwUYbSTbvj7o"},
	knife5: {name: "★ StatTrak™ Huntsman Knife | Blue Steel MW", price: 209.77, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0lfvhNr_ummJW4NFOhujT8om731fg-Es-YDr0JI-WcVJqYQ3WqFm-xr_qg5-87ZrOziFguicr7XveyQv3308Qt8kQdA"},
	knife6: {name: "★ StatTrak™ Huntsman Knife | Blue Steel FN", price: 455.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0lfvhNr_ummJW4NFOhujT8om731fg-Es-YDr0JI-WcVJqYQ3WqFm-xr_qg5-87ZrOziFguicr7XveyQv3308Qt8kQdA"},
	knife7: {name: "★ StatTrak™ Huntsman Knife | Boreal Forest BS", price: 95.77, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0kfjmNqjFqWle-sBwhtbJ8I3jkWu4qgE7Nnf3I46cIQI3aVHT81S3k-y51J-_7Z-bwCBrsyJzsS6JzR2_gRxMbLFsm7XAHkA7_P9_"},
	knife8: {name: "★ StatTrak™ Huntsman Knife | Boreal Forest WW", price: 93.43, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0kfjmNqjFqWle-sBwhtbM8Ij8nVmLpxIuNDztdYTAcgFvN1mBrlPqx-i-hJW7tcyfzHowvXRx4yyOyUG_hxwdbLZmg-veFwv1pBSWeg"},
	knife9: {name: "★ StatTrak™ Huntsman Knife | Boreal Forest FT", price: 92.35, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0kfjmNqjFqWle-sBwhtbM8Ij8nVmLpxIuNDztdYTAcgFvN1mBrlPqx-i-hJW7tcyfzHowvXRx4yyOyUG_hxwdbLZmg-veFwv1pBSWeg"},
	knife10: {name: "★ StatTrak™ Huntsman Knife | Boreal Forest MW", price: 144.22, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0kfjmNqjFqWle-sBwhtbN_Iv9nGu4qgE7NnehIoHBcVI_aFnQrlS5w-vt05S7u5nAmHc2uCcn5nrZzhKzhR8ZZrFsm7XAHnEvQoLM"},
	knife11: {name: "★ StatTrak™ Huntsman Knife | Boreal Forest FN", price: 875.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0kfjmNqjFqWle-sBwhtbN_Iv9nGu4qgE7NnehIoHBcVI_aFnQrlS5w-vt05S7u5nAmHc2uCcn5nrZzhKzhR8ZZrFsm7XAHnEvQoLM"},	
	knife12: {name: "★ StatTrak™ Huntsman Knife | Case Hardened BS", price: 184.11, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0mP74Nr_unm5Q_txOhujT8om731Dtr0E4N2ugcYWQJwU4MFvX-gC4lL_v0J696pTOzSZhvHV2tCnengv330-PIGMGqA"},
	knife13: {name: "★ StatTrak™ Huntsman Knife | Case Hardened WW", price: 161.89, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0mP74Nr_um25V4dB8teXA54vwxlHgrkZtYW_wctXAd1c-YQ7Z8wTsx-nsgZC_tZ3MyHVi7CEg5nvbmx2pwUYby-WoiHA"},
	knife14: {name: "★ StatTrak™ Huntsman Knife | Case Hardened FT", price: 202.81, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0mP74Nr_um25V4dB8teXA54vwxlHgrkZtYW_wctXAd1c-YQ7Z8wTsx-nsgZC_tZ3MyHVi7CEg5nvbmx2pwUYby-WoiHA"},
	knife15: {name: "★ StatTrak™ Huntsman Knife | Case Hardened MW", price: 235.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0mP74Nr_ummJW4NFOhujT8om7igDnr0I_Mm_zJ9CXIQA3Zl7U-lG_kOi9gMC-uMvLwXdl6yZ05S7bmgv330-Ff2dfAA"},
	knife16: {name: "★ StatTrak™ Huntsman Knife | Case Hardened FN", price: 687.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0mP74Nr_ummJW4NFOhujT8om7igDnr0I_Mm_zJ9CXIQA3Zl7U-lG_kOi9gMC-uMvLwXdl6yZ05S7bmgv330-Ff2dfAA"},
	knife17: {name: "★ StatTrak™ Huntsman Knife | Crimson Web BS", price: 350.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0gPL2IITZk2pH8fp9i_vG8ML32gfm-BJlZGmlLNKcJgc2NFmB_1Pqxum70Me8vcjIzyRmv3Fz7CqIgVXp1skGzl47"},
	knife18: {name: "★ StatTrak™ Huntsman Knife | Crimson Web WW", price: 142.89, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0gPL2IITck29Y_chOhujT8om73QHlr0o_Njv6IIKde1M3YFmB8lm9w-nthp-6vcyYyXRqvXEmt37bmwv3308f4sOUEg"},
	knife19: {name: "★ StatTrak™ Huntsman Knife | Crimson Web FT", price: 257.31, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0gPL2IITck29Y_chOhujT8om73QHlr0o_Njv6IIKde1M3YFmB8lm9w-nthp-6vcyYyXRqvXEmt37bmwv3308f4sOUEg"},
	knife20: {name: "★ StatTrak™ Huntsman Knife | Crimson Web MW", price: 506.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0gPL2IITdn2xZ_Pp9i_vG8MLwjgbg_UI_Y2rxLIGSIFA5NV6C-1e-wb251JfvvpzKyHUx6Slx4XndgVXp1lCrFlUj"},
	knife21: {name: "★ StatTrak™ Huntsman Knife | Crimson Web FN", price: 1612.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0gPL2IITdn2xZ_Pp9i_vG8MLwjgbg_UI_Y2rxLIGSIFA5NV6C-1e-wb251JfvvpzKyHUx6Slx4XndgVXp1lCrFlUj"},
	knife22: {name: "★ StatTrak™ Huntsman Knife | Fade MW", price: 352.41, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlYG0kfbwNoTdn2xZ_Pp9i_vG8MKjjgbl_UA_MDz3ctCUcwA8Y1yG8lG3w-7v1p_ptZ_BnSA17yFx7H2MgVXp1l4ye9bA"},
	knife23: {name: "★ StatTrak™ Huntsman Knife | Fade FN", price: 393.90, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlYG0kfbwNoTdn2xZ_Pp9i_vG8MKjjgbl_UA_MDz3ctCUcwA8Y1yG8lG3w-7v1p_ptZ_BnSA17yFx7H2MgVXp1l4ye9bA"},
	knife24: {name: "★ StatTrak™ Huntsman Knife | Forest DDPAT BS", price: 67.44, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0k_PkMq_unm5Q_txOhujT8om73lfkrRZkZmiiLY6QIVdvNFDR_1G4xO3pgJPo7prNynBgsnYi7Svcywv3308pQToatQ"},
	knife25: {name: "★ StatTrak™ Huntsman Knife | Forest DDPAT WW", price: 102.19, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0k_PkMq_um25V4dB8teXA54vwxgLlqURlY2n1dobGIQVtNwrVrle9k7y5056-uZXJwHpgsygl4S6LlkGpwUYbifRo7fk"},
	knife26: {name: "★ StatTrak™ Huntsman Knife | Forest DDPAT FT", price: 91.81, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0k_PkMq_um25V4dB8teXA54vwxgLlqURlY2n1dobGIQVtNwrVrle9k7y5056-uZXJwHpgsygl4S6LlkGpwUYbifRo7fk"},
	knife27: {name: "★ StatTrak™ Huntsman Knife | Forest DDPAT MW", price: 262.22, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0k_PkMq_ummJW4NFOhujT8om72QTt_Utra2D2cIGXdQNrM1DQrFXvxua5h5e-6c6bnCBru3IhtyuOzQv330-aiXzE2Q"},
	knife28: {name: "★ StatTrak™ Huntsman Knife | Forest DDPAT FN", price: 391.44, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJnJm0k_PkMq_ummJW4NFOhujT8om72QTt_Utra2D2cIGXdQNrM1DQrFXvxua5h5e-6c6bnCBru3IhtyuOzQv330-aiXzE2Q"},
	knife29: {name: "★ StatTrak™ Huntsman Knife | Night BS", price: 126.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh4-0mf7zO6_unm5Q_txOhujT8om70A3s_BVlMm_zLI_EJwA9MgrV_1PqkLjq15C9vZ-YwHs1uSFxti3ezgv330_LEd-J0Q"},
	knife30: {name: "★ StatTrak™ Huntsman Knife | Night WW", price: 262.22, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh4-0mf7zO6_um25V4dB8teXA54vwxgzhqRZlZmD3dYCWdAM9NV3Q-FO7xb3mgp65vMnBzSBm7iVwsXfazBepwUYbETGOf94"},
	knife31: {name: "★ StatTrak™ Huntsman Knife | Night FT", price: 138.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh4-0mf7zO6_um25V4dB8teXA54vwxgzhqRZlZmD3dYCWdAM9NV3Q-FO7xb3mgp65vMnBzSBm7iVwsXfazBepwUYbETGOf94"},
	knife32: {name: "★ StatTrak™ Huntsman Knife | Night MW", price: 308.10, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh4-0mf7zO6_ummJW4NFOhujT8om7igSy-kJkYGHzI9DGIAc-MlvV81O8we67gJC16M6azntjvSN25Hrcmgv330-GTEGtzA"},
	knife33: {name: "★ StatTrak™ Huntsman Knife | Night FN", price: 3250.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh4-0mf7zO6_ummJW4NFOhujT8om7igSy-kJkYGHzI9DGIAc-MlvV81O8we67gJC16M6azntjvSN25Hrcmgv330-GTEGtzA"},
	knife34: {name: "★ StatTrak™ Huntsman Knife | Safari Mesh BS", price: 99.88, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0mvLnO4TFl2Vu4MBwnPD--Y3nj1H6rxFvajz3LYTBelBqMA6E8lnolLvtg5e97Z6cnyRlvSIg4C7dzRKw1AYMMLLMmZlrnA"},
	knife35: {name: "★ StatTrak™ Huntsman Knife | Safari Mesh WW", price: 66.97, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0mvLnO4TFl2Vu5cB1g_zMyoD0mlOx5UA6ZW2iJ4GWewI_Y12ErAO-lezrg5DotMnLzXIwvHJxsC7YnUGxgUlSLrs4eK719VU"},
	knife36: {name: "★ StatTrak™ Huntsman Knife | Safari Mesh FT", price: 92.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0mvLnO4TFl2Vu5cB1g_zMyoD0mlOx5UA6ZW2iJ4GWewI_Y12ErAO-lezrg5DotMnLzXIwvHJxsC7YnUGxgUlSLrs4eK719VU"},
	knife37: {name: "★ StatTrak™ Huntsman Knife | Safari Mesh MW", price: 103.69, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0mvLnO4TFl2Vu5Mx2gv3--Y3nj1H6-EJoNjj1IYLGJlRvaAvZ-1Hvwuboh5K4vp_NzCZhuCYqtyrZnxHk1wYMMLI47XWL5Q"},
	knife38: {name: "★ StatTrak™ Huntsman Knife | Safari Mesh FN", price: 451.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0mvLnO4TFl2Vu5Mx2gv3--Y3nj1H6-EJoNjj1IYLGJlRvaAvZ-1Hvwuboh5K4vp_NzCZhuCYqtyrZnxHk1wYMMLI47XWL5Q"},
	knife39: {name: "★ StatTrak™ Huntsman Knife | Scorched BS", price: 91.22, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0k_bkI7fUqWNU6dNoteXA54vwxgywqENpZmGhLdSWdAY2YwqC_wLvxe2-jZS57pXPmHRl7yAg7X3dmRKpwUYbq4QoAdU"},
	knife40: {name: "★ StatTrak™ Huntsman Knife | Scorched WW", price: 100.24, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0k_bkI7fUqWZU7Mxkh9bN9J7yjRqxqEA-ZT36cYbAIwE8NQzX-wDowe_ngsLu6J2anyRr7yhx5S7UnUe2n1gSOQmkY0Ip"},
	knife41: {name: "★ StatTrak™ Huntsman Knife | Scorched FT", price: 101.20, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0k_bkI7fUqWZU7Mxkh9bN9J7yjRqxqEA-ZT36cYbAIwE8NQzX-wDowe_ngsLu6J2anyRr7yhx5S7UnUe2n1gSOQmkY0Ip"},
	knife42: {name: "★ StatTrak™ Huntsman Knife | Scorched MW", price: 136.81, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0k_bkI7fUqWdY781lteXA54vwxlLlrkE-Ym30LIScew84Yg2Crge3kubth8Tq75ucnyAy6HMjsCzczB2pwUYbUFXe3jk"},
	knife43: {name: "★ StatTrak™ Huntsman Knife | Scorched FN", price: 200.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0k_bkI7fUqWdY781lteXA54vwxlLlrkE-Ym30LIScew84Yg2Crge3kubth8Tq75ucnyAy6HMjsCzczB2pwUYbUFXe3jk"},
	knife44: {name: "★ StatTrak™ Huntsman Knife | Slaughter FT", price: 265.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlY20jfL2Ibrum25V4dB8teXA54vwxgDm8kI5Mjymco7Gc1U3Yl_Y-FW_xezt05607s-Yn3Bj63El7S3ezBWpwUYbnJ2mxuE"},
	knife45: {name: "★ StatTrak™ Huntsman Knife | Slaughter MW", price: 332.90, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlY20jfL2IbrummJW4NFOhujT8om72Qbt_RdrZT3wINCUJwM5YlDV-FXtye7n05W6uZjBzSNgsnFzs3mPyQv330-XzjMajA"},
	knife46: {name: "★ StatTrak™ Huntsman Knife | Slaughter FN", price: 407.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlY20jfL2IbrummJW4NFOhujT8om72Qbt_RdrZT3wINCUJwM5YlDV-FXtye7n05W6uZjBzSNgsnFzs3mPyQv330-XzjMajA"},
	knife47: {name: "★ StatTrak™ Huntsman Knife | Stained BS", price: 118.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0kfjmML7VqWNU6dNoteXA54vwxle3r0A4YWyhd9KVcAdvZF7T-VO7xr3q1sW8uZXKznpl6XMn5yqOzBepwUYbBXE4trA"},
	knife48: {name: "★ StatTrak™ Huntsman Knife | Stained WW", price: 111.27, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0kfjmML7VqWZU7Mxkh9bN9J7yjRrjqRZkZDv0dYCVdVRoNAqFqVS_x-ft05-6vZmdznZhvXN24Cnclka1n1gSOSoqW0dU"},
	knife49: {name: "★ StatTrak™ Huntsman Knife | Stained FT", price: 111.44, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0kfjmML7VqWZU7Mxkh9bN9J7yjRrjqRZkZDv0dYCVdVRoNAqFqVS_x-ft05-6vZmdznZhvXN24Cnclka1n1gSOSoqW0dU"},
	knife50: {name: "★ StatTrak™ Huntsman Knife | Stained MW", price: 149.29, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0kfjmML7VqWdY781lteXA54vwxla1-xI-YWqgcoGRcAdoYFvQ_lS6k-26hJ69usibynFjuHIn7XfanhepwUYb_Z1lKzI"},
	knife51: {name: "★ StatTrak™ Huntsman Knife | Stained FN", price: 352.39, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0kfjmML7VqWdY781lteXA54vwxla1-xI-YWqgcoGRcAdoYFvQ_lS6k-26hJ69usibynFjuHIn7XfanhepwUYb_Z1lKzI"},
	knife52: {name: "★ StatTrak™ Huntsman Knife | Urban Masked BS", price: 115.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0g_bkNoTEhGlQ5vp5j-jX7LP5iUazrl09Nm70LYSWJwRsaVvT-Fm7yby6gZHovc6fzHdj7iUkt3yIlhPliUlIcKUx0s94Heju"},
	knife53: {name: "★ StatTrak™ Huntsman Knife | Urban Masked WW", price: 140.30, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0g_bkNoTEhGlQ5vp8j-3I4IHKhFWmrBZyam2iIYWUIw43NV7Z_wDolezt18K8u8mbnXtksykn433dlxewgEsaZ_sv26Ko8CuK9Q"},
	knife54: {name: "★ StatTrak™ Huntsman Knife | Urban Masked FT", price: 126.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0g_bkNoTEhGlQ5vp8j-3I4IHKhFWmrBZyam2iIYWUIw43NV7Z_wDolezt18K8u8mbnXtksykn433dlxewgEsaZ_sv26Ko8CuK9Q"},
	knife55: {name: "★ StatTrak™ Huntsman Knife | Urban Masked MW", price: 146.89, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJh5C0g_bkNoTEhGlQ5vp9g-7J4bP5iUazrl0-Ym73JdeSegVsZljR_QW7k7jujJfp75SYm3o1uXEn4X3amBS_gxFIcKUx0oGnJYRg"},
	knife56: {name: "★ StatTrak™ Huntsman Knife | Urban Masked FN", price: 254.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfx_LLZTRB7dCJlZG0kfjmML7VqWdY781lteXA54vwxla1-xI-YWqgcoGRcAdoYFvQ_lS6k-26hJ69usibynFjuHIn7XfanhepwUYb_Z1lKzI"}
  },
  butterfly: {	
  knife1: {name: "★ Butterfly Knife", price: 144.49, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cyhW-NmkkoyS2aCtZ-qFwW4JvMQlj7CVp9qn2Aaw_0ZtZ2z6JYbGIFQ-YV_X81btlOvxxcjrQyWGkSc"},
	knife2: {name: "★ Butterfly Knife | Blue Steel BS", price: 130.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPX4Jr7VqWNU6dNoteXA54vwxgzg_0ZkYmH3J4GddQY5Ml6G_VO9wLrrhJK4v57OnHNq6HYn4yuMzBWpwUYbcB55lqE"},
	knife3: {name: "★ Butterfly Knife | Blue Steel WW", price: 137.14, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPX4Jr7VqWZU7Mxkh9bN9J7yjRq1-ktqa2Ggd9KScg42M1yDqAS-wufnhMTovpjMyiFg6ycj7HrbyhWzn1gSOT29Tw35"},
	knife4: {name: "★ Butterfly Knife | Blue Steel FT", price: 138.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPX4Jr7VqWZU7Mxkh9bN9J7yjRq1-ktqa2Ggd9KScg42M1yDqAS-wufnhMTovpjMyiFg6ycj7HrbyhWzn1gSOT29Tw35"},
	knife5: {name: "★ Butterfly Knife | Blue Steel MW", price: 155.95, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPX4Jr7VqWdY781lteXA54vwxg3i8kZtazqmI4CVdgY6NV_S-li7kLjngJXqtZ2dn3VmsiJ34nfVlkOpwUYb7EhgLjQ"},
	knife6: {name: "★ Butterfly Knife | Blue Steel FN", price: 200.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPX4Jr7VqWdY781lteXA54vwxg3i8kZtazqmI4CVdgY6NV_S-li7kLjngJXqtZ2dn3VmsiJ34nfVlkOpwUYb7EhgLjQ"},
	knife7: {name: "★ Butterfly Knife | Boreal Forest BS", price: 91.96, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPH7Ib7CglRT59d0i-X-_Yn0nk2LpxIuNDztdYLEIQM4M1qG8wO-kLu6jZXv7pTJyXZjuCR04H2JmhyxiUsdOuRqguveFwufX92zKQ"},
	knife8: {name: "★ Butterfly Knife | Boreal Forest WW", price: 97.83, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPH7Ib7CglRT59d0i-X--InxgUG5lB89IT6mOo_HIA44Y1iD_Qfswe3ngcS4vZ2cmCRmvCMk7HvZm0O1gkwfZuY8g_WACQLJNbmeHFc"},
	knife9: {name: "★ Butterfly Knife | Boreal Forest FT", price: 98.80, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPH7Ib7CglRT59d0i-X--InxgUG5lB89IT6mOo_HIA44Y1iD_Qfswe3ngcS4vZ2cmCRmvCMk7HvZm0O1gkwfZuY8g_WACQLJNbmeHFc"},
	knife10: {name: "★ Butterfly Knife | Boreal Forest MW", price: 129.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPH7Ib7CglRT59d0i-X--YXygECLpxIuNDztco6UdQI2YgzRr1S9k-jmjJe17ZWYyHNgvilw5XjYzBew1RBEbOw9hOveFwsNLW2Vcg"},
	knife11: {name: "★ Butterfly Knife | Boreal Forest FN", price: 243.28, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPH7Ib7CglRT59d0i-X--YXygECLpxIuNDztco6UdQI2YgzRr1S9k-jmjJe17ZWYyHNgvilw5XjYzBew1RBEbOw9hOveFwsNLW2Vcg"},	
	knife12: {name: "★ Butterfly Knife | Case Hardened BS", price: 131.36, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPj9P77VqWNU6dNoteXA54vwxgTm-UJuN2qiLYfHcQ9oZluBrAe5wb-7hZG575ifmnZhvHEkt3zZmESpwUYbDkFPfxU"},
	knife13: {name: "★ Butterfly Knife | Case Hardened WW", price: 161.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPj9P77VqWZU7Mxkh9bN9J7yjRrk-BJtMGCncdKccgU7aVDY-lfqyLy705a96ZTJynBl6HYg5y6MyR3hn1gSOVnglyPR"},
	knife14: {name: "★ Butterfly Knife | Case Hardened FT", price: 149.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPj9P77VqWZU7Mxkh9bN9J7yjRrk-BJtMGCncdKccgU7aVDY-lfqyLy705a96ZTJynBl6HYg5y6MyR3hn1gSOVnglyPR"},
	knife15: {name: "★ Butterfly Knife | Case Hardened MW", price: 167.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPj9P77VqWdY781lteXA54vwxlDh-BZkYzv0JIDAdVI5NwmD8wW8w7rtg5O5tZicmHMysyUrsC7alkepwUYbj35ccSk"},
	knife16: {name: "★ Butterfly Knife | Case Hardened FN", price: 287.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPj9P77VqWdY781lteXA54vwxlDh-BZkYzv0JIDAdVI5NwmD8wW8w7rtg5O5tZicmHMysyUrsC7alkepwUYbj35ccSk"},	
	knife17: {name: "★ Butterfly Knife | Crimson Web BS", price: 115.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqODxMajunm5Q_txOhujT8om70Vfi_BdoNT3wI9SSIFQ5ZF3W-lTrkrvohpO-6JqfmiZr7nQltnqIngv3309okqgyVg"},
	knife18: {name: "★ Butterfly Knife | Crimson Web WW", price: 150.05, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqODxMajum25V4dB8teXA54vwxgW2qEc5NW-iIYORcFI5NwzQ8lS7lOq50MW7tJSbnXQy7yRx4H7bnRGpwUYbInjudbk"},
	knife19: {name: "★ Butterfly Knife | Crimson Web FT", price: 158.86, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqODxMajum25V4dB8teXA54vwxgW2qEc5NW-iIYORcFI5NwzQ8lS7lOq50MW7tJSbnXQy7yRx4H7bnRGpwUYbInjudbk"},
	knife20: {name: "★ Butterfly Knife | Crimson Web MW", price: 283.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqODxMajummJW4NFOhujT8om70FHnqkBqZWGiLICSelc6Mg3V_AO8x-nq1pC86JqcmnQyvSUk7X3azgv3309LA7AIOA"},
	knife21: {name: "★ Butterfly Knife | Crimson Web FN", price: 975.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqODxMajummJW4NFOhujT8om70FHnqkBqZWGiLICSelc6Mg3V_AO8x-nq1pC86JqcmnQyvSUk7X3azgv3309LA7AIOA"},
	knife22: {name: "★ Butterfly Knife | Fade MW", price: 341.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GKqPH1N77ummJW4NFOhujT8om7igW1qUY6MWqmcIadcw47MFrW_FK9xbzpgZ607Z7PzSAxuXYg53-Llwv330-D9XTwcQ"},
	knife23: {name: "★ Butterfly Knife | Fade FN", price: 315.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GKqPH1N77ummJW4NFOhujT8om7igW1qUY6MWqmcIadcw47MFrW_FK9xbzpgZ607Z7PzSAxuXYg53-Llwv330-D9XTwcQ"},
	knife24: {name: "★ Butterfly Knife | Forest DDPAT BS", price: 88.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPPwI7rFqWNU6dNoteXA54vwxgfs_0U-ZDuiI9PGd1Q9Nw3R-Fa-yebp1MTuv87IzCdnsycq5n3VmRepwUYbV0tpYIY"},
	knife25: {name: "★ Butterfly Knife | Forest DDPAT WW", price: 96.73, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPPwI7rFqWZU7Mxkh9bN9J7yjRrmrkU9MmugdtSQIVI2NV2EqVC6ye3q18C47pmfzSRqvHYgtCmOzBW-n1gSOZmfhMH6"},
	knife26: {name: "★ Butterfly Knife | Forest DDPAT FT", price: 95.27, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPPwI7rFqWZU7Mxkh9bN9J7yjRrmrkU9MmugdtSQIVI2NV2EqVC6ye3q18C47pmfzSRqvHYgtCmOzBW-n1gSOZmfhMH6"},
	knife27: {name: "★ Butterfly Knife | Forest DDPAT MW", price: 116.51, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPPwI7rFqWdY781lteXA54vwxgKx80RoN2miItLHd1I_ZV7YqVLsxLzmjMW_vJ6bn3VlsiMl4HbeyUCpwUYb-w4Gnoo"},
	knife28: {name: "★ Butterfly Knife | Forest DDPAT FN", price: 180.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPPwI7rFqWdY781lteXA54vwxgKx80RoN2miItLHd1I_ZV7YqVLsxLzmjMW_vJ6bn3VlsiMl4HbeyUCpwUYb-w4Gnoo"},
	knife29: {name: "★ Butterfly Knife | Night BS", price: 104.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5OEqPn9NLPFqWNU6dNoteXA54vwxgPs80drZGn0ctCcdlc6MFmG-QTsx-jq1pbq7pzPziQ1uXMj4H7dyhypwUYb1lM_Oyk"},
	knife30: {name: "★ Butterfly Knife | Night WW", price: 119.54, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5OEqPn9NLPFqWZU7Mxkh9bN9J7yjRqw-0doYjv7JteQcA42aAmBrFjsw7jugJe5uJyYmHAwvXF05HzfnEOyn1gSOczLixFH"},
	knife31: {name: "★ Butterfly Knife | Night FT", price: 116.79, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5OEqPn9NLPFqWZU7Mxkh9bN9J7yjRqw-0doYjv7JteQcA42aAmBrFjsw7jugJe5uJyYmHAwvXF05HzfnEOyn1gSOczLixFH"},
	knife32: {name: "★ Butterfly Knife | Night MW", price: 204.63, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5OEqPn9NLPFqWdY781lteXA54vwxg2y-UZoZzrwIY6TdVc7ZViG-wW-kOu6gZK66JzJnXFm6CRwt3zfnxepwUYb2Pp00lU"},
	knife33: {name: "★ Butterfly Knife | Night FN", price: 591.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5OEqPn9NLPFqWdY781lteXA54vwxg2y-UZoZzrwIY6TdVc7ZViG-wW-kOu6gZK66JzJnXFm6CRwt3zfnxepwUYb2Pp00lU"},
	knife34: {name: "★ Butterfly Knife | Safari Mesh BS", price: 87.95, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPrxILPugmpf1810i__YyoD0mlOx5RBua2yncICUJ1c5ZAvQ8wDsx-jog8Xu7p3IzSdivSEk433ayxOyg0pSLrs4wakn6Ws"},
	knife35: {name: "★ Butterfly Knife | Safari Mesh WW", price: 90.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPrxILPugmpf18h0juDU-LP5iUazrl1tZ2H0dtTBJAFoNwnS-lfoxe7mjJG8tJqfy3dj7iVzsHjYzhPjgR4ecKUx0qlnMAeq"},
	knife36: {name: "★ Butterfly Knife | Safari Mesh FT", price: 86.68, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPrxILPugmpf18h0juDU-LP5iUazrl1tZ2H0dtTBJAFoNwnS-lfoxe7mjJG8tJqfy3dj7iVzsHjYzhPjgR4ecKUx0qlnMAeq"},
	knife37: {name: "★ Butterfly Knife | Safari Mesh MW", price: 94.70, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPrxILPugmpf18l4jeHVyoD0mlOx5Uo_YGmmd9OQIFNsYlDT_1foxe7p0JPvucuYzHQ2vXYm5XrbyRWwhB9SLrs41jxCA9c"},
	knife38: {name: "★ Butterfly Knife | Safari Mesh FN", price: 150.21, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPrxILPugmpf18l4jeHVyoD0mlOx5Uo_YGmmd9OQIFNsYlDT_1foxe7p0JPvucuYzHQ2vXYm5XrbyRWwhB9SLrs41jxCA9c"},
	knife39: {name: "★ Butterfly Knife | Scorched BS", price: 88.90, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPP1I6vdk1RZ7cRnk9bN9J7yjRrirRI_Z26nIdKXdAQ_NV_R_we_lb-8jZ-9vMify3M2vnN27CzZy0Cwn1gSORmfb6IN"},
	knife40: {name: "★ Butterfly Knife | Scorched WW", price: 97.93, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPP1I6vdk1Rc7cF4n-T--Y3nj1H6-Es4ZzjwJoWTcg49Ml3X-1K4wubvh5e56syczXVl6CArtn6PlhG3iQYMMLKwhS_oCw"},
	knife41: {name: "★ Butterfly Knife | Scorched FT", price: 91.89, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPP1I6vdk1Rc7cF4n-T--Y3nj1H6-Es4ZzjwJoWTcg49Ml3X-1K4wubvh5e56syczXVl6CArtn6PlhG3iQYMMLKwhS_oCw"},
	knife42: {name: "★ Butterfly Knife | Scorched MW", price: 117.66, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPP1I6vdk1Rd4cJ5ntbN9J7yjRri-kJsMmDyco6Ve1U3aF7W81fokObo0Z-87pqcmHpr7yAh4niJn0Hhn1gSOTpeEaNS"},
	knife43: {name: "★ Butterfly Knife | Scorched FN", price: 245.59, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPP1I6vdk1Rd4cJ5ntbN9J7yjRri-kJsMmDyco6Ve1U3aF7W81fokObo0Z-87pqcmHpr7yAh4niJn0Hhn1gSOTpeEaNS"},
	knife44: {name: "★ Butterfly Knife | Slaughter FT", price: 226.17, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqO3xManQqWZU7Mxkh9bN9J7yjRrn_EFkY2-gJ4CdJwVraV_S_QLrkLi7hcS4tcjKn3ti6yd0sHfcyxDin1gSORjcdenn"},
	knife45: {name: "★ Butterfly Knife | Slaughter MW", price: 249.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqO3xManQqWdY781lteXA54vwxgyy_hduaz_7do6TcgFqaVvQ_1jtxbq5g5e07p7AwCdh7HEn4H6PzRGpwUYb-q86lXo"},
	knife46: {name: "★ Butterfly Knife | Slaughter FN", price: 259.02, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqO3xManQqWdY781lteXA54vwxgyy_hduaz_7do6TcgFqaVvQ_1jtxbq5g5e07p7AwCdh7HEn4H6PzRGpwUYb-q86lXo"},
	knife47: {name: "★ Butterfly Knife | Stained BS", price: 109.29, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPH7IbjUklRZ7cRnk9bN9J7yjRrt_kBkMDjxcdKQclM8aVjV-Fe8wevrjZPvtMnIzSZl7HNw4irVzBexn1gSOdzsWdTB"},
	knife48: {name: "★ Butterfly Knife | Stained WW", price: 113.41, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPH7IbjUklRc7cF4n-T--Y3nj1H6qkFpZzyiJYbEIwU7N17Yq1W9xLrthJe1uJ7KmnVk7Cgn7SrUm0ewhgYMMLKQS9JQ0Q"},
	knife49: {name: "★ Butterfly Knife | Stained FT", price: 114.42, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPH7IbjUklRc7cF4n-T--Y3nj1H6qkFpZzyiJYbEIwU7N17Yq1W9xLrthJe1uJ7KmnVk7Cgn7SrUm0ewhgYMMLKQS9JQ0Q"},
	knife50: {name: "★ Butterfly Knife | Stained MW", price: 121.10, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPH7IbjUklRd4cJ5ntbN9J7yjRrlrkZuYWz6co7HJgBsYgvS_lPtlLq9h8K87ZXOwCdq7HMj4i3azhe0n1gSOS5_6hS1"},
	knife51: {name: "★ Butterfly Knife | Stained FN", price: 159.69, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPH7IbjUklRd4cJ5ntbN9J7yjRrlrkZuYWz6co7HJgBsYgvS_lPtlLq9h8K87ZXOwCdq7HMj4i3azhe0n1gSOS5_6hS1"},
	knife52: {name: "★ Butterfly Knife | Urban Masked BS", price: 92.64, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqOP1I77ug3lT6ctOguzA45XKhFWmrBZyN2vzJIKcdFQ-Y1DS-1G8ku_ujJO575mdnHo1snVz7H-PmEO20xFEa_sv26JIghB7aQ"},
	knife53: {name: "★ Butterfly Knife | Urban Masked WW", price: 91.94, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqOP1I77ug3lT6ctOh-zF_Jn4t1i1uRQ5fW37ddeVcAQ5MwnY_gC3x-u-0MTvuZ7AwHdqvnV2sSyPzUGx0hBMZuRxxavJpr_7cL8"},
	knife54: {name: "★ Butterfly Knife | Urban Masked FT", price: 93.67, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqOP1I77ug3lT6ctOh-zF_Jn4t1i1uRQ5fW37ddeVcAQ5MwnY_gC3x-u-0MTvuZ7AwHdqvnV2sSyPzUGx0hBMZuRxxavJpr_7cL8"},
	knife55: {name: "★ Butterfly Knife | Urban Masked MW", price: 121.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqOP1I77ug3lT6ctOhuDG_ZjKhFWmrBZyNzihIIXDdg5sNVqFqFPtyOnsgcW1vM_MzXph7CIg5yqMzhyy0k0ePPsv26IotkEDow"},
	knife56: {name: "★ Butterfly Knife | Urban Masked FN", price: 249.98, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqOP1I77ug3lT6ctOhuDG_ZjKhFWmrBZyNzihIIXDdg5sNVqFqFPtyOnsgcW1vM_MzXph7CIg5yqMzhyy0k0ePPsv26IotkEDow"}
  },
  butterst: {	
	knife1: {name: "★ StatTrak™ Butterfly Knife", price: 210.17, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3cyhW-NmkkoyS2aCtZ-qFwW4JvMQlj7CVp9qn2Aaw_0ZtZ2z6JYbGIFQ-YV_X81btlOvxxcjrQyWGkSc"},
	knife2: {name: "★ StatTrak™ Butterfly Knife | Blue Steel BS", price: 220.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPX4Jr7VqWNU6dNoteXA54vwxgzg_0ZkYmH3J4GddQY5Ml6G_VO9wLrrhJK4v57OnHNq6HYn4yuMzBWpwUYbcB55lqE"},
	knife3: {name: "★ StatTrak™ Butterfly Knife | Blue Steel WW", price: 204.48, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPX4Jr7VqWZU7Mxkh9bN9J7yjRq1-ktqa2Ggd9KScg42M1yDqAS-wufnhMTovpjMyiFg6ycj7HrbyhWzn1gSOT29Tw35"},
	knife4: {name: "★ StatTrak™ Butterfly Knife | Blue Steel FT", price: 203.67, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPX4Jr7VqWZU7Mxkh9bN9J7yjRq1-ktqa2Ggd9KScg42M1yDqAS-wufnhMTovpjMyiFg6ycj7HrbyhWzn1gSOT29Tw35"},
	knife5: {name: "★ StatTrak™ Butterfly Knife | Blue Steel MW", price: 244.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPX4Jr7VqWdY781lteXA54vwxg3i8kZtazqmI4CVdgY6NV_S-li7kLjngJXqtZ2dn3VmsiJ34nfVlkOpwUYb7EhgLjQ"},
	knife6: {name: "★ StatTrak™ Butterfly Knife | Blue Steel FN", price: 718.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPX4Jr7VqWdY781lteXA54vwxg3i8kZtazqmI4CVdgY6NV_S-li7kLjngJXqtZ2dn3VmsiJ34nfVlkOpwUYb7EhgLjQ"},
	knife7: {name: "★ StatTrak™ Butterfly Knife | Boreal Forest BS", price: 110.42, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPH7Ib7CglRT59d0i-X-_Yn0nk2LpxIuNDztdYLEIQM4M1qG8wO-kLu6jZXv7pTJyXZjuCR04H2JmhyxiUsdOuRqguveFwufX92zKQ"},
	knife8: {name: "★ StatTrak™ Butterfly Knife | Boreal Forest WW", price: 176.26, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPH7Ib7CglRT59d0i-X--InxgUG5lB89IT6mOo_HIA44Y1iD_Qfswe3ngcS4vZ2cmCRmvCMk7HvZm0O1gkwfZuY8g_WACQLJNbmeHFc"},
	knife9: {name: "★ StatTrak™ Butterfly Knife | Boreal Forest FT", price: 130.23, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPH7Ib7CglRT59d0i-X--InxgUG5lB89IT6mOo_HIA44Y1iD_Qfswe3ngcS4vZ2cmCRmvCMk7HvZm0O1gkwfZuY8g_WACQLJNbmeHFc"},
	knife10: {name: "★ StatTrak™ Butterfly Knife | Boreal Forest MW", price: 171.01, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPH7Ib7CglRT59d0i-X--YXygECLpxIuNDztco6UdQI2YgzRr1S9k-jmjJe17ZWYyHNgvilw5XjYzBew1RBEbOw9hOveFwsNLW2Vcg"},
	knife11: {name: "★ StatTrak™ Butterfly Knife | Boreal Forest FN", price: 486.56, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPH7Ib7CglRT59d0i-X--YXygECLpxIuNDztco6UdQI2YgzRr1S9k-jmjJe17ZWYyHNgvilw5XjYzBew1RBEbOw9hOveFwsNLW2Vcg"},	
	knife12: {name: "★ StatTrak™ Butterfly Knife | Case Hardened BS", price: 227.59, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPj9P77VqWNU6dNoteXA54vwxgTm-UJuN2qiLYfHcQ9oZluBrAe5wb-7hZG575ifmnZhvHEkt3zZmESpwUYbDkFPfxU"},
	knife13: {name: "★ StatTrak™ Butterfly Knife | Case Hardened WW", price: 194.18, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPj9P77VqWZU7Mxkh9bN9J7yjRrk-BJtMGCncdKccgU7aVDY-lfqyLy705a96ZTJynBl6HYg5y6MyR3hn1gSOVnglyPR"},
	knife14: {name: "★ StatTrak™ Butterfly Knife | Case Hardened FT", price: 230.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPj9P77VqWZU7Mxkh9bN9J7yjRrk-BJtMGCncdKccgU7aVDY-lfqyLy705a96ZTJynBl6HYg5y6MyR3hn1gSOVnglyPR"},
	knife15: {name: "★ StatTrak™ Butterfly Knife | Case Hardened MW", price: 287.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPj9P77VqWdY781lteXA54vwxlDh-BZkYzv0JIDAdVI5NwmD8wW8w7rtg5O5tZicmHMysyUrsC7alkepwUYbj35ccSk"},
	knife16: {name: "★ StatTrak™ Butterfly Knife | Case Hardened FN", price: 762.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPj9P77VqWdY781lteXA54vwxlDh-BZkYzv0JIDAdVI5NwmD8wW8w7rtg5O5tZicmHMysyUrsC7alkepwUYbj35ccSk"},	
	knife17: {name: "★ StatTrak™ Butterfly Knife | Crimson Web BS", price: 155.02, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqODxMajunm5Q_txOhujT8om70Vfi_BdoNT3wI9SSIFQ5ZF3W-lTrkrvohpO-6JqfmiZr7nQltnqIngv3309okqgyVg"},
	knife18: {name: "★ StatTrak™ Butterfly Knife | Crimson Web WW", price: 210.17, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqODxMajum25V4dB8teXA54vwxgW2qEc5NW-iIYORcFI5NwzQ8lS7lOq50MW7tJSbnXQy7yRx4H7bnRGpwUYbInjudbk"},
	knife19: {name: "★ StatTrak™ Butterfly Knife | Crimson Web FT", price: 201.57, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqODxMajum25V4dB8teXA54vwxgW2qEc5NW-iIYORcFI5NwzQ8lS7lOq50MW7tJSbnXQy7yRx4H7bnRGpwUYbInjudbk"},
	knife20: {name: "★ StatTrak™ Butterfly Knife | Crimson Web MW", price: 491.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqODxMajummJW4NFOhujT8om70FHnqkBqZWGiLICSelc6Mg3V_AO8x-nq1pC86JqcmnQyvSUk7X3azgv3309LA7AIOA"},
	knife21: {name: "★ StatTrak™ Butterfly Knife | Crimson Web FN", price: 1950.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqODxMajummJW4NFOhujT8om70FHnqkBqZWGiLICSelc6Mg3V_AO8x-nq1pC86JqcmnQyvSUk7X3azgv3309LA7AIOA"},
	knife22: {name: "★ StatTrak™ Butterfly Knife | Fade MW", price: 631.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GKqPH1N77ummJW4NFOhujT8om7igW1qUY6MWqmcIadcw47MFrW_FK9xbzpgZ607Z7PzSAxuXYg53-Llwv330-D9XTwcQ"},
	knife23: {name: "★ StatTrak™ Butterfly Knife | Fade FN", price: 393.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GKqPH1N77ummJW4NFOhujT8om7igW1qUY6MWqmcIadcw47MFrW_FK9xbzpgZ607Z7PzSAxuXYg53-Llwv330-D9XTwcQ"},
	knife24: {name: "★ StatTrak™ Butterfly Knife | Forest DDPAT BS", price: 102.24, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPPwI7rFqWNU6dNoteXA54vwxgfs_0U-ZDuiI9PGd1Q9Nw3R-Fa-yebp1MTuv87IzCdnsycq5n3VmRepwUYbV0tpYIY"},
	knife25: {name: "★ StatTrak™ Butterfly Knife | Forest DDPAT WW", price: 139.47, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPPwI7rFqWZU7Mxkh9bN9J7yjRrmrkU9MmugdtSQIVI2NV2EqVC6ye3q18C47pmfzSRqvHYgtCmOzBW-n1gSOZmfhMH6"},
	knife26: {name: "★ StatTrak™ Butterfly Knife | Forest DDPAT FT", price: 110.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPPwI7rFqWZU7Mxkh9bN9J7yjRrmrkU9MmugdtSQIVI2NV2EqVC6ye3q18C47pmfzSRqvHYgtCmOzBW-n1gSOZmfhMH6"},
	knife27: {name: "★ StatTrak™ Butterfly Knife | Forest DDPAT MW", price: 165.63, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPPwI7rFqWdY781lteXA54vwxgKx80RoN2miItLHd1I_ZV7YqVLsxLzmjMW_vJ6bn3VlsiMl4HbeyUCpwUYb-w4Gnoo"},
	knife28: {name: "★ StatTrak™ Butterfly Knife | Forest DDPAT FN", price: 878.75, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4iSqPPwI7rFqWdY781lteXA54vwxgKx80RoN2miItLHd1I_ZV7YqVLsxLzmjMW_vJ6bn3VlsiMl4HbeyUCpwUYb-w4Gnoo"},
	knife29: {name: "★ StatTrak™ Butterfly Knife | Night BS", price: 179.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5OEqPn9NLPFqWNU6dNoteXA54vwxgPs80drZGn0ctCcdlc6MFmG-QTsx-jq1pbq7pzPziQ1uXMj4H7dyhypwUYb1lM_Oyk"},
	knife30: {name: "★ StatTrak™ Butterfly Knife | Night WW", price: 280.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5OEqPn9NLPFqWZU7Mxkh9bN9J7yjRqw-0doYjv7JteQcA42aAmBrFjsw7jugJe5uJyYmHAwvXF05HzfnEOyn1gSOczLixFH"},
	knife31: {name: "★ StatTrak™ Butterfly Knife | Night FT", price: 170.74, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5OEqPn9NLPFqWZU7Mxkh9bN9J7yjRqw-0doYjv7JteQcA42aAmBrFjsw7jugJe5uJyYmHAwvXF05HzfnEOyn1gSOczLixFH"},
	knife32: {name: "★ StatTrak™ Butterfly Knife | Night MW", price: 325.91, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5OEqPn9NLPFqWdY781lteXA54vwxg2y-UZoZzrwIY6TdVc7ZViG-wW-kOu6gZK66JzJnXFm6CRwt3zfnxepwUYb2Pp00lU"},
	knife33: {name: "★ StatTrak™ Butterfly Knife | Night FN", price: 1182.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5OEqPn9NLPFqWdY781lteXA54vwxg2y-UZoZzrwIY6TdVc7ZViG-wW-kOu6gZK66JzJnXFm6CRwt3zfnxepwUYb2Pp00lU"},
	knife34: {name: "★ StatTrak™ Butterfly Knife | Safari Mesh BS", price: 102.46, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPrxILPugmpf1810i__YyoD0mlOx5RBua2yncICUJ1c5ZAvQ8wDsx-jog8Xu7p3IzSdivSEk433ayxOyg0pSLrs4wakn6Ws"},
	knife35: {name: "★ StatTrak™ Butterfly Knife | Safari Mesh WW", price: 137.92, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPrxILPugmpf18h0juDU-LP5iUazrl1tZ2H0dtTBJAFoNwnS-lfoxe7mjJG8tJqfy3dj7iVzsHjYzhPjgR4ecKUx0qlnMAeq"},
	knife36: {name: "★ StatTrak™ Butterfly Knife | Safari Mesh FT", price: 105.08, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPrxILPugmpf18h0juDU-LP5iUazrl1tZ2H0dtTBJAFoNwnS-lfoxe7mjJG8tJqfy3dj7iVzsHjYzhPjgR4ecKUx0qlnMAeq"},
	knife37: {name: "★ StatTrak™ Butterfly Knife | Safari Mesh MW", price: 135.26, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPrxILPugmpf18l4jeHVyoD0mlOx5Uo_YGmmd9OQIFNsYlDT_1foxe7p0JPvucuYzHQ2vXYm5XrbyRWwhB9SLrs41jxCA9c"},
	knife38: {name: "★ StatTrak™ Butterfly Knife | Safari Mesh FN", price: 300.42, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPrxILPugmpf18l4jeHVyoD0mlOx5Uo_YGmmd9OQIFNsYlDT_1foxe7p0JPvucuYzHQ2vXYm5XrbyRWwhB9SLrs41jxCA9c"},
	knife39: {name: "★ StatTrak™ Butterfly Knife | Scorched BS", price: 96.26, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPP1I6vdk1RZ7cRnk9bN9J7yjRrirRI_Z26nIdKXdAQ_NV_R_we_lb-8jZ-9vMify3M2vnN27CzZy0Cwn1gSORmfb6IN"},
	knife40: {name: "★ StatTrak™ Butterfly Knife | Scorched WW", price: 113.99, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPP1I6vdk1Rc7cF4n-T--Y3nj1H6-Es4ZzjwJoWTcg49Ml3X-1K4wubvh5e56syczXVl6CArtn6PlhG3iQYMMLKwhS_oCw"},
	knife41: {name: "★ StatTrak™ Butterfly Knife | Scorched FT", price: 115.46, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPP1I6vdk1Rc7cF4n-T--Y3nj1H6-Es4ZzjwJoWTcg49Ml3X-1K4wubvh5e56syczXVl6CArtn6PlhG3iQYMMLKwhS_oCw"},
	knife42: {name: "★ StatTrak™ Butterfly Knife | Scorched MW", price: 160.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPP1I6vdk1Rd4cJ5ntbN9J7yjRri-kJsMmDyco6Ve1U3aF7W81fokObo0Z-87pqcmHpr7yAh4niJn0Hhn1gSOTpeEaNS"},
	knife43: {name: "★ StatTrak™ Butterfly Knife | Scorched FN", price: 697.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqPP1I6vdk1Rd4cJ5ntbN9J7yjRri-kJsMmDyco6Ve1U3aF7W81fokObo0Z-87pqcmHpr7yAh4niJn0Hhn1gSOTpeEaNS"},
	knife44: {name: "★ StatTrak™ Butterfly Knife | Slaughter FT", price: 322.31, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqO3xManQqWZU7Mxkh9bN9J7yjRrn_EFkY2-gJ4CdJwVraV_S_QLrkLi7hcS4tcjKn3ti6yd0sHfcyxDin1gSORjcdenn"},
	knife45: {name: "★ StatTrak™ Butterfly Knife | Slaughter MW", price: 389.52, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqO3xManQqWdY781lteXA54vwxgyy_hduaz_7do6TcgFqaVvQ_1jtxbq5g5e07p7AwCdh7HEn4H6PzRGpwUYb-q86lXo"},
	knife46: {name: "★ StatTrak™ Butterfly Knife | Slaughter FN", price: 537.50, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqO3xManQqWdY781lteXA54vwxgyy_hduaz_7do6TcgFqaVvQ_1jtxbq5g5e07p7AwCdh7HEn4H6PzRGpwUYb-q86lXo"},
	knife47: {name: "★ StatTrak™ Butterfly Knife | Stained BS", price: 156.49, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPH7IbjUklRZ7cRnk9bN9J7yjRrt_kBkMDjxcdKQclM8aVjV-Fe8wevrjZPvtMnIzSZl7HNw4irVzBexn1gSOdzsWdTB"},
	knife48: {name: "★ StatTrak™ Butterfly Knife | Stained WW", price: 153.26, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPH7IbjUklRc7cF4n-T--Y3nj1H6qkFpZzyiJYbEIwU7N17Yq1W9xLrthJe1uJ7KmnVk7Cgn7SrUm0ewhgYMMLKQS9JQ0Q"},
	knife49: {name: "★ StatTrak™ Butterfly Knife | Stained FT", price: 153.80, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPH7IbjUklRc7cF4n-T--Y3nj1H6qkFpZzyiJYbEIwU7N17Yq1W9xLrthJe1uJ7KmnVk7Cgn7SrUm0ewhgYMMLKQS9JQ0Q"},
	knife50: {name: "★ StatTrak™ Butterfly Knife | Stained MW", price: 183.90, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPH7IbjUklRd4cJ5ntbN9J7yjRrlrkZuYWz6co7HJgBsYgvS_lPtlLq9h8K87ZXOwCdq7HMj4i3azhe0n1gSOS5_6hS1"},
	knife51: {name: "★ StatTrak™ Butterfly Knife | Stained FN", price: 332.86, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GaqPH7IbjUklRd4cJ5ntbN9J7yjRrlrkZuYWz6co7HJgBsYgvS_lPtlLq9h8K87ZXOwCdq7HMj4i3azhe0n1gSOS5_6hS1"},
	knife52: {name: "★ StatTrak™ Butterfly Knife | Urban Masked BS", price: 104.73, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqOP1I77ug3lT6ctOguzA45XKhFWmrBZyN2vzJIKcdFQ-Y1DS-1G8ku_ujJO575mdnHo1snVz7H-PmEO20xFEa_sv26JIghB7aQ"},
	knife53: {name: "★ StatTrak™ Butterfly Knife | Urban Masked WW", price: 122.22, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqOP1I77ug3lT6ctOh-zF_Jn4t1i1uRQ5fW37ddeVcAQ5MwnY_gC3x-u-0MTvuZ7AwHdqvnV2sSyPzUGx0hBMZuRxxavJpr_7cL8"},
	knife54: {name: "★ StatTrak™ Butterfly Knife | Urban Masked FT", price: 124.79, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqOP1I77ug3lT6ctOh-zF_Jn4t1i1uRQ5fW37ddeVcAQ5MwnY_gC3x-u-0MTvuZ7AwHdqvnV2sSyPzUGx0hBMZuRxxavJpr_7cL8"},
	knife55: {name: "★ StatTrak™ Butterfly Knife | Urban Masked MW", price: 165.09, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqOP1I77ug3lT6ctOhuDG_ZjKhFWmrBZyNzihIIXDdg5sNVqFqFPtyOnsgcW1vM_MzXph7CIg5yqMzhyy0k0ePPsv26IotkEDow"},
	knife56: {name: "★ StatTrak™ Butterfly Knife | Urban Masked FN", price: 499.96, img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq5ObqOP1I77ug3lT6ctOhuDG_ZjKhFWmrBZyNzihIIXDdg5sNVqFqFPtyOnsgcW1vM_MzXph7CIg5yqMzhyy0k0ePPsv26IotkEDow"}
	},
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
//Weapon Case 1
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
//eSport 2013
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
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q42Ok_7hPoTdl3lW7YshjrDE9oqgjFDn-xJpNWilLIScIwdsaVrYqwS5k-_o1J61vpTJwXZjpGB8st6uvlM7"

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
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q42Ok_7hPoTdl3lW7YshjrDE9oqgjFDn-xJpNWilLIScIwdsaVrYqwS5k-_o1J61vpTJwXZjpGB8st6uvlM7"

      },
      weap27: {
        name: "StatTrak™ AK-47 | Red Laminate MW",
        price: 87.28,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhoyszJemkV4N27q4yCkP_gDLfQhGxUppQo07-TpYmt2Azh_EpqYGDxIoLGJAE7YgzQ_FS-xuzu15Lu75yfynV9-n512WUCzeM"

      },
      weap28: {
        name: "StatTrak™ AK-47 | Red Laminate FN",
        price: 1625.00,
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
//Bravo
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
//Weapon Case 2
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
//eSports Winter 2013
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
//Winter Offensive
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
//Weapon Case 3
 case7: {
    milspec: {
      weap1: {
        name: "Glock-18 | Blue Fissure BS",
        price: 0.60,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3ci9D_cmzmJWZksj8NrrHj1Rd6dd2j6eZ9N-li1bi8kRtYz3wcY7Acg44YwyB-1PowLzmgsK4tczPyXph7ikq-z-DyIXVzbkq"
      },
      weap2: {
        name: "Glock-18 | Blue Fissure WW",
        price: 1.03,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3ci9D_cmzmJWZksj5Nr_Yg2Zu5MRjjeyPoY6g2AOx-0M_ZmDzJ4WddAJoY1GG-1LtxO_mgMO87c_KzXtn7CAl4GGdwUIRYMFhhg"
      },
      weap3: {
        name: "Glock-18 | Blue Fissure FT",
        price: 0.52,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3ci9D_cmzmJWZksj5Nr_Yg2Zu5MRjjeyPoY6g2AOx-0M_ZmDzJ4WddAJoY1GG-1LtxO_mgMO87c_KzXtn7CAl4GGdwUIRYMFhhg"
      },
      weap4: {
        name: "Glock-18 | Blue Fissure MW",
        price: 1.04,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3ci9D_cmzmJWZksj4OrzZglRd6dd2j6eZ8NWijVbl_BJsYjz0J9WRdVc2aFDX_Fm7lenrhcS_uJmYnCBh6XIq-z-DyEnn8nMM"
      },
      weap5: {
        name: "Glock-18 | Blue Fissure FN",
        price: 5.59,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3ci9D_cmzmJWZksj4OrzZglRd6dd2j6eZ8NWijVbl_BJsYjz0J9WRdVc2aFDX_Fm7lenrhcS_uJmYnCBh6XIq-z-DyEnn8nMM"
      },
      weap6: {
        name: "USP-S | Stainless BS",
        price: 1.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ092nq5WYh8jnJ7rYmGdU-9ZOguzA45XKhFWmrBZyMGHxcIDHcABqaVmDqFHsx7i6g5-9u8uYmHpqsyZz4X3ZnBexhU5LOPsv26KLIAVePg"
      },
      weap7: {
        name: "USP-S | Stainless WW",
        price: 2.19,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ092nq5WYh8jnJ7rYmGdU-9ZOh-zF_Jn4t1i1uRQ5fTv7JI_AdlVrYFyC-VHvx7u91JG1v52fnCc16XQi4nuOnUDmghAeaLBxxavJUAmH2MQ"
      },
      weap8: {
        name: "USP-S | Stainless FT",
        price: 1.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ092nq5WYh8jnJ7rYmGdU-9ZOh-zF_Jn4t1i1uRQ5fTv7JI_AdlVrYFyC-VHvx7u91JG1v52fnCc16XQi4nuOnUDmghAeaLBxxavJUAmH2MQ"
      },
      weap9: {
        name: "USP-S | Stainless MW",
        price: 2.19,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ092nq5WYh8jnJ7rYmGdU-9ZOhuDG_ZjKhFWmrBZyYD_1cdLHelNsNVzR-Vm5xezqhZK0uZScySZg7ydx4H6MnRbkghEYPPsv26JVZyAeTQ"
      },
      weap10: {
        name: "USP-S | Stainless FN",
        price: 5.42,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ092nq5WYh8jnJ7rYmGdU-9ZOhuDG_ZjKhFWmrBZyYD_1cdLHelNsNVzR-Vm5xezqhZK0uZScySZg7ydx4H6MnRbkghEYPPsv26JVZyAeTQ"
      },
      weap11: {
        name: "Dual Berettas | Panther BS",
        price: 0.52,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3YTxM-NSzhr-DkvbiKoTdl3lW7Yt1jrmTotyhjgfh_Us_NWvwJoPHJARqN12GqVftwOvsgMTqv56YySA2pGB8suP10Imt"
      },
      weap12: {
        name: "Dual Berettas | Panther WW",
        price: 0.73,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3YTxM-NSzhr-GkvP9JrbummpD78A_i7vA8NWt3gPi-Ec5am2hItSUI1NqaFHV_le_l-vt05-97s_PyHo1sj5iuygcodbsNA"
      },
      weap13: {
        name: "Dual Berettas | Panther FT",
        price: 0.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3YTxM-NSzhr-GkvP9JrbummpD78A_i7vA8NWt3gPi-Ec5am2hItSUI1NqaFHV_le_l-vt05-97s_PyHo1sj5iuygcodbsNA"
      },
      weap14: {
        name: "Dual Berettas | Panther MW",
        price: 0.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3YTxM-NSzhr-HnvD8J4Tdl3lW7Ysh27CVpt3321K3qkJkMWnxI9KVdVBrY1GE-gTrxry5jZ7o6prMzHVlpGB8sjtQiIKd"
      },
      weap15: {
        name: "Dual Berettas | Panther FN",
        price: 1.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3YTxM-NSzhr-HnvD8J4Tdl3lW7Ysh27CVpt3321K3qkJkMWnxI9KVdVBrY1GE-gTrxry5jZ7o6prMzHVlpGB8sjtQiIKd"
      },
      weap16: {
        name: "P2000 | Red FragCam BS",
        price: 0.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zAaAJS49Cvq4OKmvjLO77QgHJu5MRjjeyPpd_x3gzh_kY4YmmlcoSRcQFoYFvRq1O2wem5hJLv6JXJyiQx6XIq5mGdwUJ8B2eOIA"
      },
      weap17: {
        name: "P2000 | Red FragCam WW",
        price: 0.51,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zAaAJS49Cvq4OKmvjLPr7Vn35c18lwmO7Eu9yg3Q3s-0U-MG_2IY7HdFBraVvV-gXswbjmjcLu6J_BzSNrunQq5SnD30vgSYWmWx8"
      },
      weap18: {
        name: "P2000 | Red FragCam FT",
        price: 0.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zAaAJS49Cvq4OKmvjLPr7Vn35c18lwmO7Eu9yg3Q3s-0U-MG_2IY7HdFBraVvV-gXswbjmjcLu6J_BzSNrunQq5SnD30vgSYWmWx8"
      },
      weap19: {
        name: "P2000 | Red FragCam MW",
        price: 0.24,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zAaAJS49Cvq4OKmvjLP7LWnn9u5MRjjeyP8Nj23gHj_RZsYmv6I4LHIwA-NF6EqAK5wbi6gMXovc6YmiFguiAj5GGdwUKuyUCE2Q"
      },
      weap20: {
        name: "P2000 | Red FragCam FN",
        price: 0.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zAaAJS49Cvq4OKmvjLP7LWnn9u5MRjjeyP8Nj23gHj_RZsYmv6I4LHIwA-NF6EqAK5wbi6gMXovc6YmiFguiAj5GGdwUKuyUCE2Q"
      },
      weap21: {
        name: "CZ75-Auto | Crimson Web BS",
        price: 0.34,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3ZjhA_-O-kYGdjsj4MqnWkyUH6pFy3bGSoomgiQLnrxBpMmHwJdKQIA8_aVvX_la2xe_r0JK56pnM1zI97ckpbf42"
      },
      weap22: {
        name: "CZ75-Auto | Crimson Web WW",
        price: 0.48,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3ZjhA_-O7kYSCgvrLP7rDkW4fucMp27mX89ShigexrkFsZj2hdYacelc-ZlDSq1W4wL_q15Dt7Z2anWwj5Hc50puAPQ"
      },
      weap23: {
        name: "CZ75-Auto | Crimson Web FT",
        price: 0.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3ZjhA_-O7kYSCgvrLP7rDkW4fucMp27mX89ShigexrkFsZj2hdYacelc-ZlDSq1W4wL_q15Dt7Z2anWwj5Hc50puAPQ"
      },
      weap24: {
        name: "CZ75-Auto | Crimson Web MW",
        price: 1.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3ZjhA_-O6nYeDg8j4MqnWkyUDuJwiiL2S9InziQzmrhZqZGjwd4KScAU2ZQ2B-Fm9l7q7gZLqvJ_K1zI97dfjTfNR"
      },
      weap25: {
        name: "CZ75-Auto | Crimson Web FN",
        price: 10.35,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3ZjhA_-O6nYeDg8j4MqnWkyUDuJwiiL2S9InziQzmrhZqZGjwd4KScAU2ZQ2B-Fm9l7q7gZLqvJ_K1zI97dfjTfNR"
      }
    },
    restricted: {
      weap1: {
        name: "Five-SeveN | Copper Galaxy FT",
        price: 1.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxP09-5hJCOhcjyP77SnXhu5cB1g_zMyoD0mlOx5RdpNm2icdWVcVJqZ13WrAK7xO-718C_u8ifz3prsyQjsy2JmBay1B9SLrs4aWv8qA8"
      },
      weap2: {
        name: "Five-SeveN | Copper Galaxy MW",
        price: 1.72,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxP09-5hJCOhcjyP77SnXhu5Mx2gv3--Y3nj1H6r0E9NWHyINSSdAE4YlDY-lW5wby8gpa_tcnMzHRq73Il4S3fmRywiQYMMLI39ggilQ"
      },
      weap3: {
        name: "Five-SeveN | Copper Galaxy FN",
        price: 1.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxP09-5hJCOhcjyP77SnXhu5Mx2gv3--Y3nj1H6r0E9NWHyINSSdAE4YlDY-lW5wby8gpa_tcnMzHRq73Il4S3fmRywiQYMMLI39ggilQ"
      },
      weap4: {
        name: "Desert Eagle | Heirloom BS",
        price: 1.28,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjhM6863goWPqPPxMrzdk1RZ7cRnk9bN9J7yjRrg-Us-ajihJ9WQegU5aVCFrFHrxr3nh5butZ3Oz3JmviAh5CmImBywn1gSOQp7Aey0"
      },
      weap5: {
        name: "Desert Eagle | Heirloom WW",
        price: 1.90,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjhM6863goWPqPPxMrzdk1Rc7cF4n-T--Y3nj1H6-ERrMG70JY-dc1U3NFCE_1W6l-u61MK66JrByXRjv3Em4yrazhDj1QYMMLJbLWFOZg"
      },
      weap6: {
        name: "Desert Eagle | Heirloom FT",
        price: 0.77,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjhM6863goWPqPPxMrzdk1Rc7cF4n-T--Y3nj1H6-ERrMG70JY-dc1U3NFCE_1W6l-u61MK66JrByXRjv3Em4yrazhDj1QYMMLJbLWFOZg"
      },
      weap7: {
        name: "Desert Eagle | Heirloom MW",
        price: 1.61,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjhM6863goWPqPPxMrzdk1Rd4cJ5ntbN9J7yjRrs-0c9YjjzJdeXe1RoaVjW_VLsxu3m05Xp7p_LyXBkuHEk7XzVnhy0n1gSOexptizi"
      },
      weap8: {
        name: "Desert Eagle | Heirloom FN",
        price: 4.27,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjhM6863goWPqPPxMrzdk1Rd4cJ5ntbN9J7yjRrs-0c9YjjzJdeXe1RoaVjW_VLsxu3m05Xp7p_LyXBkuHEk7XzVnhy0n1gSOexptizi"
      },
      weap9: {
        name: "Tec-9 | Titanium Bit FT",
        price: 0.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szOfShW6diJgIWIzsj5Nr_Yg2Zu5MRjjeyP89X0jg3n_RdpY2mlcYWXcw9saV-C_lLvxO_m0Z_t7Z2dySNk7yZztmGdwUJ6f9icHA"
      },
      weap10: {

        name: "Tec-9 | Titanium Bit MW",
        price: 1.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szOfShW6diJgIWIzsj4OrzZglRd6dd2j6fD846h3QTi-kZsMm_0IdSXdlI9YF_YrFW7xuvvgsLuvpTJynFlvnQk-z-DyLGeENsm"
      },
      weap11: {

        name: "Tec-9 | Titanium Bit FN",
        price: 1.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szOfShW6diJgIWIzsj4OrzZglRd6dd2j6fD846h3QTi-kZsMm_0IdSXdlI9YF_YrFW7xuvvgsLuvpTJynFlvnQk-z-DyLGeENsm"
      },
      weap12: {

        name: "CZ75-Auto | Tread Plate FT",
        price: 0.77,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dTRD4dO4kL-bm_bgNoTck29Y_chOhujT8om721ey-0VvMTzyLNfHcgM_MF-F_AW4xevn0Ze075yfyntkvXNx53zangv330-0qQ45jg"
      },
      weap13: {

        name: "CZ75-Auto | Tread Plate MW",
        price: 0.83,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dTRD4dO4kL-bm_bgNoTdn2xZ_Pp9i_vG8MLwjgDm_hBkYTuicYPBewE_MwzVr1DryL3qgcS178nLn3tquHUmsH7bgVXp1lvHN_VN"
      },
      weap14: {

        name: "CZ75-Auto | Tread Plate FN",
        price: 0.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dTRD4dO4kL-bm_bgNoTdn2xZ_Pp9i_vG8MLwjgDm_hBkYTuicYPBewE_MwzVr1DryL3qgcS178nLn3tquHUmsH7bgVXp1lvHN_VN"
      }
    },
    classified: {
      weap1: {
        name: "P250 | Undertow FT",
        price: 4.60,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szYI2gS096zlYSOk8jkMrLfglRc7cF4n-T--Y3nj1H6qBc5az3zIoKUcQM6NQyF-lC2wujv1pC478jPwSFl63ZxsCnfmxa0ggYMMLI7UzsRBg"
      },
      weap2: {
        name: "P250 | Undertow MW",
        price: 4.67,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szYI2gS096zlYSOk8jkMrLfglRd4cJ5ntbN9J7yjRrmrxc4Yj33doDBJgBoMFrQ8lO-we_nhZTtup2YmiQys3Rzty7anRfjn1gSORMi-P6n"
      },
      weap3: {
        name: "P250 | Undertow FN",
        price: 5.19,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szYI2gS096zlYSOk8jkMrLfglRd4cJ5ntbN9J7yjRrmrxc4Yj33doDBJgBoMFrQ8lO-we_nhZTtup2YmiQys3Rzty7anRfjn1gSORMi-P6n"
      },
      weap4: {
        name: "CZ75-Auto | The Fuschia Is Now WW",
        price: 19.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dyhR79S_lb-GkvP9JrbummpD78A_iO2W842s0Aay_xBqZWr0ctSddQI4ZF3W-FHrxOy5gJS6u5XInHNjvD5iuyi2Ce5hEg"
      },
      weap5: {
        name: "CZ75-Auto | The Fuschia Is Now FT",
        price: 2.93,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dyhR79S_lb-GkvP9JrbummpD78A_iO2W842s0Aay_xBqZWr0ctSddQI4ZF3W-FHrxOy5gJS6u5XInHNjvD5iuyi2Ce5hEg"
      },
      weap6: {
        name: "CZ75-Auto | The Fuschia Is Now MW",
        price: 3.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dyhR79S_lb-HnvD8J4Tdl3lW7YsoieiVp92t0Afh_0FqMG76JYKdcFc9NV-DqVLswe67hZbvtZjBnXZjpGB8sv4Btgx7"
      },
      weap7: {

        name: "CZ75-Auto | The Fuschia Is Now FN",
        price: 5.69,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dyhR79S_lb-HnvD8J4Tdl3lW7YsoieiVp92t0Afh_0FqMG76JYKdcFc9NV-DqVLswe67hZbvtZjBnXZjpGB8sv4Btgx7"
      }
    },
    covert: {
      weap1: {
        name: "CZ75-Auto | Victoria BS",
        price: 4.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0uL3dClB5Nmyq4ORwKLLO77QgHJu5MRjjeyP8ImmjVayr0U4ZG-hcI6XdgE2ZwvRrFTsk-e7g8DovMvNwXVisyYj7GGdwULsdHR26Q"
      },
      weap2: {
        name: "CZ75-Auto | Victoria WW",
        price: 5.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0uL3dClB5Nmyq4ORwKLLPr7Vn35c18lwmO7Eu9um2VK2-kQ5NmqhJY6cJ1BoM1DXqVa4xujujMe76ZjLyndnuHMi4C7D30vgyemH9p8"
      },
      weap3: {
        name: "CZ75-Auto | Victoria FT",
        price: 4.84,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0uL3dClB5Nmyq4ORwKLLPr7Vn35c18lwmO7Eu9um2VK2-kQ5NmqhJY6cJ1BoM1DXqVa4xujujMe76ZjLyndnuHMi4C7D30vgyemH9p8"
      },
      weap4: {
        name: "CZ75-Auto | Victoria MW",
        price: 6.95,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0uL3dClB5Nmyq4ORwKLLP7LWnn9u5MRjjeyPoIr031HgrUZqZWnzcdDAI1VrM1HZq1i6yb3p08e56M7Kz3Zr6yNw7GGdwUIoyGMPfw"
      },
      weap5: {
        name: "CZ75-Auto | Victoria FN",
        price: 13.60,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0uL3dClB5Nmyq4ORwKLLP7LWnn9u5MRjjeyPoIr031HgrUZqZWnzcdDAI1VrM1HZq1i6yb3p08e56M7Kz3Zr6yNw7GGdwUIoyGMPfw"
      }
    },
    stattrak: {
      weap1: {
        name: "StatTrak™ Glock-18 | Blue Fissure BS",
        price: 2.96,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3ci9D_cmzmJWZksj8NrrHj1Rd6dd2j6eZ9N-li1bi8kRtYz3wcY7Acg44YwyB-1PowLzmgsK4tczPyXph7ikq-z-DyIXVzbkq"
      },
      weap2: {
        name: "StatTrak™ Glock-18 | Blue Fissure WW",
        price: 4.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3ci9D_cmzmJWZksj5Nr_Yg2Zu5MRjjeyPoY6g2AOx-0M_ZmDzJ4WddAJoY1GG-1LtxO_mgMO87c_KzXtn7CAl4GGdwUIRYMFhhg"
      },
      weap3: {
        name: "StatTrak™ Glock-18 | Blue Fissure FT",
        price: 3.13,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3ci9D_cmzmJWZksj5Nr_Yg2Zu5MRjjeyPoY6g2AOx-0M_ZmDzJ4WddAJoY1GG-1LtxO_mgMO87c_KzXtn7CAl4GGdwUIRYMFhhg"
      },
      weap4: {
        name: "StatTrak™ Glock-18 | Blue Fissure MW",
        price: 5.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3ci9D_cmzmJWZksj4OrzZglRd6dd2j6eZ8NWijVbl_BJsYjz0J9WRdVc2aFDX_Fm7lenrhcS_uJmYnCBh6XIq-z-DyEnn8nMM"
      },
      weap5: {
        name: "StatTrak™ Glock-18 | Blue Fissure FN",
        price: 69.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf2-r3ci9D_cmzmJWZksj4OrzZglRd6dd2j6eZ8NWijVbl_BJsYjz0J9WRdVc2aFDX_Fm7lenrhcS_uJmYnCBh6XIq-z-DyEnn8nMM"
      },
      weap6: {
        name: "StatTrak™ USP-S | Stainless BS",
        price: 5.55,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ092nq5WYh8jnJ7rYmGdU-9ZOguzA45XKhFWmrBZyMGHxcIDHcABqaVmDqFHsx7i6g5-9u8uYmHpqsyZz4X3ZnBexhU5LOPsv26KLIAVePg"
      },
      weap7: {
        name: "StatTrak™ USP-S | Stainless WW",
        price: 9.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ092nq5WYh8jnJ7rYmGdU-9ZOh-zF_Jn4t1i1uRQ5fTv7JI_AdlVrYFyC-VHvx7u91JG1v52fnCc16XQi4nuOnUDmghAeaLBxxavJUAmH2MQ"
      },
      weap8: {
        name: "StatTrak™ USP-S | Stainless FT",
        price: 5.02,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ092nq5WYh8jnJ7rYmGdU-9ZOh-zF_Jn4t1i1uRQ5fTv7JI_AdlVrYFyC-VHvx7u91JG1v52fnCc16XQi4nuOnUDmghAeaLBxxavJUAmH2MQ"
      },
      weap9: {
        name: "StatTrak™ USP-S | Stainless MW",
        price: 9.96,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ092nq5WYh8jnJ7rYmGdU-9ZOhuDG_ZjKhFWmrBZyYD_1cdLHelNsNVzR-Vm5xezqhZK0uZScySZg7ydx4H6MnRbkghEYPPsv26JVZyAeTQ"
      },
      weap10: {
        name: "StatTrak™ USP-S | Stainless FN",
        price: 33.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ092nq5WYh8jnJ7rYmGdU-9ZOhuDG_ZjKhFWmrBZyYD_1cdLHelNsNVzR-Vm5xezqhZK0uZScySZg7ydx4H6MnRbkghEYPPsv26JVZyAeTQ"
      },
      weap11: {
        name: "StatTrak™ Dual Berettas | Panther BS",
        price: 0.93,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3YTxM-NSzhr-DkvbiKoTdl3lW7Yt1jrmTotyhjgfh_Us_NWvwJoPHJARqN12GqVftwOvsgMTqv56YySA2pGB8suP10Imt"
      },
      weap12: {
        name: "StatTrak™ Dual Berettas | Panther WW",
        price: 1.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3YTxM-NSzhr-GkvP9JrbummpD78A_i7vA8NWt3gPi-Ec5am2hItSUI1NqaFHV_le_l-vt05-97s_PyHo1sj5iuygcodbsNA"
      },
      weap13: {
        name: "StatTrak™ Dual Berettas | Panther FT",
        price: 0.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3YTxM-NSzhr-GkvP9JrbummpD78A_i7vA8NWt3gPi-Ec5am2hItSUI1NqaFHV_le_l-vt05-97s_PyHo1sj5iuygcodbsNA"
      },
      weap14: {
        name: "StatTrak™ Dual Berettas | Panther MW",
        price: 2.22,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3YTxM-NSzhr-HnvD8J4Tdl3lW7Ysh27CVpt3321K3qkJkMWnxI9KVdVBrY1GE-gTrxry5jZ7o6prMzHVlpGB8sjtQiIKd"
      },
      weap15: {
        name: "StatTrak™ Dual Berettas | Panther FN",
        price: 5.13,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3YTxM-NSzhr-HnvD8J4Tdl3lW7Ysh27CVpt3321K3qkJkMWnxI9KVdVBrY1GE-gTrxry5jZ7o6prMzHVlpGB8sjtQiIKd"
      },
      weap16: {
        name: "StatTrak™ P2000 | Red FragCam BS",
        price: 0.97,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zAaAJS49Cvq4OKmvjLO77QgHJu5MRjjeyPpd_x3gzh_kY4YmmlcoSRcQFoYFvRq1O2wem5hJLv6JXJyiQx6XIq5mGdwUJ8B2eOIA"
      },
      weap17: {
        name: "StatTrak™ P2000 | Red FragCam WW",
        price: 0.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zAaAJS49Cvq4OKmvjLPr7Vn35c18lwmO7Eu9yg3Q3s-0U-MG_2IY7HdFBraVvV-gXswbjmjcLu6J_BzSNrunQq5SnD30vgSYWmWx8"
      },
      weap18: {
        name: "StatTrak™ P2000 | Red FragCam FT",
        price: 0.73,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zAaAJS49Cvq4OKmvjLPr7Vn35c18lwmO7Eu9yg3Q3s-0U-MG_2IY7HdFBraVvV-gXswbjmjcLu6J_BzSNrunQq5SnD30vgSYWmWx8"
      },
      weap19: {
        name: "StatTrak™ P2000 | Red FragCam MW",
        price: 1.65,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zAaAJS49Cvq4OKmvjLP7LWnn9u5MRjjeyP8Nj23gHj_RZsYmv6I4LHIwA-NF6EqAK5wbi6gMXovc6YmiFguiAj5GGdwUKuyUCE2Q"
      },
      weap20: {
        name: "StatTrak™ P2000 | Red FragCam FN",
        price: 4.48,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zAaAJS49Cvq4OKmvjLP7LWnn9u5MRjjeyP8Nj23gHj_RZsYmv6I4LHIwA-NF6EqAK5wbi6gMXovc6YmiFguiAj5GGdwUKuyUCE2Q"
      },
      weap21: {
        name: "StatTrak™ CZ75-Auto | Crimson Web BS",
        price: 0.81,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3ZjhA_-O-kYGdjsj4MqnWkyUH6pFy3bGSoomgiQLnrxBpMmHwJdKQIA8_aVvX_la2xe_r0JK56pnM1zI97ckpbf42"
      },
      weap22: {
        name: "StatTrak™ CZ75-Auto | Crimson Web WW",
        price: 1.18,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3ZjhA_-O7kYSCgvrLP7rDkW4fucMp27mX89ShigexrkFsZj2hdYacelc-ZlDSq1W4wL_q15Dt7Z2anWwj5Hc50puAPQ"
      },
      weap23: {
        name: "StatTrak™ CZ75-Auto | Crimson Web FT",
        price: 0.95,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3ZjhA_-O7kYSCgvrLP7rDkW4fucMp27mX89ShigexrkFsZj2hdYacelc-ZlDSq1W4wL_q15Dt7Z2anWwj5Hc50puAPQ"
      },
      weap24: {
        name: "StatTrak™ CZ75-Auto | Crimson Web MW",
        price: 4.45,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3ZjhA_-O6nYeDg8j4MqnWkyUDuJwiiL2S9InziQzmrhZqZGjwd4KScAU2ZQ2B-Fm9l7q7gZLqvJ_K1zI97dfjTfNR"
      },
      weap25: {
        name: "StatTrak™ CZ75-Auto | Crimson Web FN",
        price: 125.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3ZjhA_-O6nYeDg8j4MqnWkyUDuJwiiL2S9InziQzmrhZqZGjwd4KScAU2ZQ2B-Fm9l7q7gZLqvJ_K1zI97dfjTfNR"
      },
      weap26: {
        name: "StatTrak™ Five-SeveN | Copper Galaxy FT",
        price: 4.89,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxP09-5hJCOhcjyP77SnXhu5cB1g_zMyoD0mlOx5RdpNm2icdWVcVJqZ13WrAK7xO-718C_u8ifz3prsyQjsy2JmBay1B9SLrs4aWv8qA8"
      },
      weap27: {
        name: "StatTrak™ Five-SeveN | Copper Galaxy MW",
        price: 8.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxP09-5hJCOhcjyP77SnXhu5Mx2gv3--Y3nj1H6r0E9NWHyINSSdAE4YlDY-lW5wby8gpa_tcnMzHRq73Il4S3fmRywiQYMMLI39ggilQ"
      },
      weap28: {
        name: "StatTrak™ Five-SeveN | Copper Galaxy FN",
        price: 13.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxP09-5hJCOhcjyP77SnXhu5Mx2gv3--Y3nj1H6r0E9NWHyINSSdAE4YlDY-lW5wby8gpa_tcnMzHRq73Il4S3fmRywiQYMMLI39ggilQ"
      },
      weap29: {
        name: "StatTrak™ Desert Eagle | Heirloom BS",
        price: 4.95,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjhM6863goWPqPPxMrzdk1RZ7cRnk9bN9J7yjRrg-Us-ajihJ9WQegU5aVCFrFHrxr3nh5butZ3Oz3JmviAh5CmImBywn1gSOQp7Aey0"
      },
      weap30: {
        name: "StatTrak™ Desert Eagle | Heirloom WW",
        price: 9.96,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjhM6863goWPqPPxMrzdk1Rc7cF4n-T--Y3nj1H6-ERrMG70JY-dc1U3NFCE_1W6l-u61MK66JrByXRjv3Em4yrazhDj1QYMMLJbLWFOZg"
      },
      weap31: {
        name: "StatTrak™ Desert Eagle | Heirloom FT",
        price: 5.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjhM6863goWPqPPxMrzdk1Rc7cF4n-T--Y3nj1H6-ERrMG70JY-dc1U3NFCE_1W6l-u61MK66JrByXRjv3Em4yrazhDj1QYMMLJbLWFOZg"
      },
      weap32: {
        name: "StatTrak™ Desert Eagle | Heirloom MW",
        price: 7.77,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjhM6863goWPqPPxMrzdk1Rd4cJ5ntbN9J7yjRrs-0c9YjjzJdeXe1RoaVjW_VLsxu3m05Xp7p_LyXBkuHEk7XzVnhy0n1gSOexptizi"
      },
      weap33: {
        name: "StatTrak™ Desert Eagle | Heirloom FN",
        price: 38.06,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjhM6863goWPqPPxMrzdk1Rd4cJ5ntbN9J7yjRrs-0c9YjjzJdeXe1RoaVjW_VLsxu3m05Xp7p_LyXBkuHEk7XzVnhy0n1gSOexptizi"
      },
      weap34: {
        name: "StatTrak™ Tec-9 | Titanium Bit FT",
        price: 6.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szOfShW6diJgIWIzsj5Nr_Yg2Zu5MRjjeyP89X0jg3n_RdpY2mlcYWXcw9saV-C_lLvxO_m0Z_t7Z2dySNk7yZztmGdwUJ6f9icHA"
      },
      weap35: {

        name: "StatTrak™ Tec-9 | Titanium Bit MW",
        price: 5.13,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szOfShW6diJgIWIzsj4OrzZglRd6dd2j6fD846h3QTi-kZsMm_0IdSXdlI9YF_YrFW7xuvvgsLuvpTJynFlvnQk-z-DyLGeENsm"
      },
      weap36: {

        name: "StatTrak™ Tec-9 | Titanium Bit FN",
        price: 6.70,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhh3szOfShW6diJgIWIzsj4OrzZglRd6dd2j6fD846h3QTi-kZsMm_0IdSXdlI9YF_YrFW7xuvvgsLuvpTJynFlvnQk-z-DyLGeENsm"
      },
      weap37: {

        name: "StatTrak™ CZ75-Auto | Tread Plate FT",
        price: 2.89,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dTRD4dO4kL-bm_bgNoTck29Y_chOhujT8om721ey-0VvMTzyLNfHcgM_MF-F_AW4xevn0Ze075yfyntkvXNx53zangv330-0qQ45jg"
      },
      weap38: {

        name: "StatTrak™ CZ75-Auto | Tread Plate MW",
        price: 3.28,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dTRD4dO4kL-bm_bgNoTdn2xZ_Pp9i_vG8MLwjgDm_hBkYTuicYPBewE_MwzVr1DryL3qgcS178nLn3tquHUmsH7bgVXp1lvHN_VN"
      },
      weap39: {

        name: "StatTrak™ CZ75-Auto | Tread Plate FN",
        price: 3.64,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dTRD4dO4kL-bm_bgNoTdn2xZ_Pp9i_vG8MLwjgDm_hBkYTuicYPBewE_MwzVr1DryL3qgcS178nLn3tquHUmsH7bgVXp1lvHN_VN"
      },
      weap40: {
        name: "StatTrak™ P250 | Undertow FT",
        price: 13.08,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szYI2gS096zlYSOk8jkMrLfglRc7cF4n-T--Y3nj1H6qBc5az3zIoKUcQM6NQyF-lC2wujv1pC478jPwSFl63ZxsCnfmxa0ggYMMLI7UzsRBg"
      },
      weap41: {
        name: "StatTrak™ P250 | Undertow MW",
        price: 17.68,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szYI2gS096zlYSOk8jkMrLfglRd4cJ5ntbN9J7yjRrmrxc4Yj33doDBJgBoMFrQ8lO-we_nhZTtup2YmiQys3Rzty7anRfjn1gSORMi-P6n"
      },
      weap42: {
        name: "StatTrak™ P250 | Undertow FN",
        price: 24.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhh3szYI2gS096zlYSOk8jkMrLfglRd4cJ5ntbN9J7yjRrmrxc4Yj33doDBJgBoMFrQ8lO-we_nhZTtup2YmiQys3Rzty7anRfjn1gSORMi-P6n"
      },
      weap43: {
        name: "StatTrak™ CZ75-Auto | The Fuschia Is Now WW",
        price: 52.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dyhR79S_lb-GkvP9JrbummpD78A_iO2W842s0Aay_xBqZWr0ctSddQI4ZF3W-FHrxOy5gJS6u5XInHNjvD5iuyi2Ce5hEg"
      },
      weap44: {
        name: "StatTrak™ CZ75-Auto | The Fuschia Is Now FT",
        price: 8.54,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dyhR79S_lb-GkvP9JrbummpD78A_iO2W842s0Aay_xBqZWr0ctSddQI4ZF3W-FHrxOy5gJS6u5XInHNjvD5iuyi2Ce5hEg"
      },
      weap45: {
        name: "StatTrak™ CZ75-Auto | The Fuschia Is Now MW",
        price: 15.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dyhR79S_lb-HnvD8J4Tdl3lW7YsoieiVp92t0Afh_0FqMG76JYKdcFc9NV-DqVLswe67hZbvtZjBnXZjpGB8sv4Btgx7"
      },
      weap46: {

        name: "StatTrak™ CZ75-Auto | The Fuschia Is Now FN",
        price: 30.82,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73dyhR79S_lb-HnvD8J4Tdl3lW7YsoieiVp92t0Afh_0FqMG76JYKdcFc9NV-DqVLswe67hZbvtZjBnXZjpGB8sv4Btgx7"
      },
      weap47: {
        name: "StatTrak™ CZ75-Auto | Victoria BS",
        price: 29.73,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0uL3dClB5Nmyq4ORwKLLO77QgHJu5MRjjeyP8ImmjVayr0U4ZG-hcI6XdgE2ZwvRrFTsk-e7g8DovMvNwXVisyYj7GGdwULsdHR26Q"
      },
      weap48: {
        name: "StatTrak™ CZ75-Auto | Victoria WW",
        price: 48.34,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0uL3dClB5Nmyq4ORwKLLPr7Vn35c18lwmO7Eu9um2VK2-kQ5NmqhJY6cJ1BoM1DXqVa4xujujMe76ZjLyndnuHMi4C7D30vgyemH9p8"
      },
      weap49: {
        name: "StatTrak™ CZ75-Auto | Victoria FT",
        price: 29.55,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0uL3dClB5Nmyq4ORwKLLPr7Vn35c18lwmO7Eu9um2VK2-kQ5NmqhJY6cJ1BoM1DXqVa4xujujMe76ZjLyndnuHMi4C7D30vgyemH9p8"
      },
      weap50: {
        name: "StatTrak™ CZ75-Auto | Victoria MW",
        price: 55.90,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0uL3dClB5Nmyq4ORwKLLP7LWnn9u5MRjjeyPoIr031HgrUZqZWnzcdDAI1VrM1HZq1i6yb3p08e56M7Kz3Zr6yNw7GGdwUIoyGMPfw"
      },
      weap51: {
        name: "StatTrak™ CZ75-Auto | Victoria FN",
        price: 222.88,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0uL3dClB5Nmyq4ORwKLLP7LWnn9u5MRjjeyPoIr031HgrUZqZWnzcdDAI1VrM1HZq1i6yb3p08e56M7Kz3Zr6yNw7GGdwUIoyGMPfw"
      }
    }
  },
//Phoenix
 case8: {
    milspec: {
      weap1: {
        name: "Tec-9 | Sandstorm BS",
        price: 0.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b08-3moSYg_jmPoTZk2pH8fp9i_vG8MLx0QLjr0Q6YWinJdKQI1U4YF_VqwS5wLi5g5a46Z_MmCE1uXR3tHuPgVXp1m7y3pmg"
      },
      weap2: {
        name: "Tec-9 | Sandstorm WW",
        price: 0.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b08-3moSYg_jmPoTck29Y_chOhujT8om7jgaw_0RuNm7yJYeTIA4_MwqE81S7l-rtgJW_6p_MyHI27HQg7HmLlgv330__9v-fTw"
      },
      weap3: {
        name: "Tec-9 | Sandstorm FT",
        price: 0.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b08-3moSYg_jmPoTck29Y_chOhujT8om7jgaw_0RuNm7yJYeTIA4_MwqE81S7l-rtgJW_6p_MyHI27HQg7HmLlgv330__9v-fTw"
      },
      weap4: {
        name: "Tec-9 | Sandstorm MW",
        price: 0.34,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b08-3moSYg_jmPoTdn2xZ_Pp9i_vG8MLw2wy2-xc9MjqhJ9fEd1I2N17Z-AC7lLvvgMfouM-ayXprvygi7SyJgVXp1mC692Rx"
      },
      weap5: {
        name: "MAG-7 | Heaven Guard WW",
        price: 0.13,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09SzlZaOmcj5Nr_Yg2Zu5MRjjeyPpt72jgzg-EFsYW-icIHAJ1Q-YVGE_wXvl7rr18fvv5mayHBjuXQh4WGdwUJD5VIhNQ"
      },
      weap6: {
        name: "MAG-7 | Heaven Guard FT",
        price: 0.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09SzlZaOmcj5Nr_Yg2Zu5MRjjeyPpt72jgzg-EFsYW-icIHAJ1Q-YVGE_wXvl7rr18fvv5mayHBjuXQh4WGdwUJD5VIhNQ"
      },
      weap7: {
        name: "MAG-7 | Heaven Guard MW",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09SzlZaOmcj4OrzZglRd6dd2j6fE9Nyl2lG1qkI6amH3cYSSelA7aAnZ-VXtkOfvhJDqvJ7BnXJluyIi-z-DyFkJt659"
      },
      weap8: {
        name: "MAG-7 | Heaven Guard FN",
        price: 0.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09SzlZaOmcj4OrzZglRd6dd2j6fE9Nyl2lG1qkI6amH3cYSSelA7aAnZ-VXtkOfvhJDqvJ7BnXJluyIi-z-DyFkJt659"
      },
      weap9: {
        name: "Negev | Terrain WW",
        price: 0.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFfwOP3fzhF6cqJgJWZhsjgNqnDl2Jf18h0juDU-LP5iUazrl1vYmilINeQJw9qM1nYqVO7wbrphJe87p2cyXRm6yMr4neJzBLl0xpOcKUx0sdXNdIy"
      },
      weap10: {
        name: "Negev | Terrain FT",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFfwOP3fzhF6cqJgJWZhsjgNqnDl2Jf18h0juDU-LP5iUazrl1vYmilINeQJw9qM1nYqVO7wbrphJe87p2cyXRm6yMr4neJzBLl0xpOcKUx0sdXNdIy"
      },
      weap11: {
        name: "Negev | Terrain MW",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFfwOP3fzhF6cqJgJWZhsjgNqnDl2Jf18l4jeHVyoD0mlOx5Uo_ZTr1I47HclM4MwvZ_ljtwejnjcC_6Zyan3Fq6XEl5irdzhGz0E1SLrs4EJsmc8Q"
      },
      weap12: {
        name: "Negev | Terrain FN",
        price: 0.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFfwOP3fzhF6cqJgJWZhsjgNqnDl2Jf18l4jeHVyoD0mlOx5Uo_ZTr1I47HclM4MwvZ_ljtwejnjcC_6Zyan3Fq6XEl5irdzhGz0E1SLrs4EJsmc8Q"
      },
      weap13: {
        name: "UMP-45 | Corporal BS",
        price: 0.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS09-5hpCEhfb4DLPUl31I18lwmO7Eu9mh0Qa38hA-Z22lddXEdgFtZ1CCqwW7w-a7gMW0upvOwHdiuSJzt33D30vgUswWZgg"
      },
      weap14: {
        name: "UMP-45 | Corporal WW",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS09-5hpCEhfb4DLbUkmJE5fp9i_vG8MKj0Vbn-UZpZzj3doOXelI-aFnT-VC3kOi6gsfvucycnHNquXJw5SvYgVXp1vBvimUq"
      },
      weap15: {
        name: "UMP-45 | Corporal FT",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS09-5hpCEhfb4DLbUkmJE5fp9i_vG8MKj0Vbn-UZpZzj3doOXelI-aFnT-VC3kOi6gsfvucycnHNquXJw5SvYgVXp1vBvimUq"
      },
      weap16: {
        name: "UMP-45 | Corporal MW",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS09-5hpCEhfb4DLfYkWNF18lwmO7Eu43w2gfnqUc6MjugLdDDd1BrN16E-FTvyenugpPv6ZiYnXo1uHV34yrD30vgsbpsexc"
      },
      weap17: {
        name: "UMP-45 | Corporal FN",
        price: 0.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS09-5hpCEhfb4DLfYkWNF18lwmO7Eu43w2gfnqUc6MjugLdDDd1BrN16E-FTvyenugpPv6ZiYnXo1uHV34yrD30vgsbpsexc"
      }
    },
    restricted: {
      weap1: {
        name: "USP-S | Guardian FT",
        price: 0.63,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jxP77Wl2VF18h0juDU-LP5iUazrl05Zjzyd9KWcwU2MFnV_le-yem81MS4uZXOyyFm7CRzty6JyRHkhEsZcKUx0qcUSTBJ"
      },
      weap2: {
        name: "USP-S | Guardian MW",
        price: 0.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jxP77Wl2VF18l4jeHVyoD0mlOx5UdtZT_1JIHGIQNoMA2C_1PslO65h5Tpvc_AwXZmuiMr5CnZmhfm0hpSLrs4U9WKdHc"
      },
      weap3: {
        name: "USP-S | Guardian FN",
        price: 1.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jxP77Wl2VF18l4jeHVyoD0mlOx5UdtZT_1JIHGIQNoMA2C_1PslO65h5Tpvc_AwXZmuiMr5CnZmhfm0hpSLrs4U9WKdHc"
      },
      weap4: {
        name: "FAMAS | Sergeant BS",
        price: 0.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v33dzxP7c-Jh4efqP_xMq3IqWdQ-sJ0xLiVpIjziwXmrUA4Mjz7cYSUdQ47M1nW8la-wrjn1pG0vM7LzHoxsnM8pSGKeNmiS9s"
      },
      weap5: {
        name: "FAMAS | Sergeant WW",
        price: 0.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v33dzxP7c-Jh4efqPrxN7LEm1Rd6dd2j6fArd-iiQGwr0I6NTrxddKcdgBsZAvT_1K5leftgMTqu57IyiE27ycn-z-DyCRsIegQ"
      },
      weap6: {
        name: "FAMAS | Sergeant FT",
        price: 0.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v33dzxP7c-Jh4efqPrxN7LEm1Rd6dd2j6fArd-iiQGwr0I6NTrxddKcdgBsZAvT_1K5leftgMTqu57IyiE27ycn-z-DyCRsIegQ"
      },
      weap7: {
        name: "FAMAS | Sergeant MW",
        price: 1.16,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v33dzxP7c-Jh4efqPv9NLPFqWdQ-sJ0xLzArN6h2VDg-hJvMGr2dYXDIFQ8YQmFqALqw-ztgJXtuszBzCRkuHY8pSGKWiPDS9g"
      },
      weap8: {
        name: "SG 553 | Pulse BS",
        price: 0.42,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JhJWHhPLLO77QgHJu5MRjjeyP8dyjjQLs_xI4YG-mLNfEdgRsNF-BqFG4wenrjJW97s-dmiBhunRx4WGdwULbXqSS5Q"
      },
      weap9: {
        name: "SG 553 | Pulse WW",
        price: 0.72,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JhJWHhPLLPr7Vn35c18lwmO7Eu9Sh0Fbk_xE9Ym37LI7EJgY7Ml_ZqQK6lLi-18W76JybwXZluykqtnvD30vgXWzJUu8"
      },
      weap10: {

        name: "SG 553 | Pulse FT",
        price: 0.46,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JhJWHhPLLPr7Vn35c18lwmO7Eu9Sh0Fbk_xE9Ym37LI7EJgY7Ml_ZqQK6lLi-18W76JybwXZluykqtnvD30vgXWzJUu8"
      },
      weap11: {

        name: "SG 553 | Pulse MW",
        price: 1.01,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JhJWHhPLLP7LWnn9u5MRjjeyP8dmj3A3k-xdsZj2lJNPAc1JvZlvXqQXrx-_rgcPuuZifmHFlvCgms2GdwUKNNulqdg"
      },
      weap12: {

        name: "MAC-10 | Heat BS",
        price: 0.42,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhoWPn_jgDLPUl31I18lwmO7Eu9Sn3wCw-kI6am2ncdLDIAdsaFmD-FbslOfo0JG0tZ7BzHAxvSkq7HbD30vgg2lozYM"
      },
      weap13: {

        name: "MAC-10 | Heat WW",
        price: 0.46,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhoWPn_jgDLbUkmJE5fp9i_vG8MLx0Afmr0I4Mjv7J9SWegE8Y1iD_gXowLrojcLpuszOzyY1vXRx5XjdgVXp1tewq1E1"
      },
      weap14: {

        name: "MAC-10 | Heat FT",
        price: 0.46,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhoWPn_jgDLbUkmJE5fp9i_vG8MLx0Afmr0I4Mjv7J9SWegE8Y1iD_gXowLrojcLpuszOzyY1vXRx5XjdgVXp1tewq1E1"
      },
      weap15: {

        name: "MAC-10 | Heat MW",
        price: 0.77,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhoWPn_jgDLfYkWNF18lwmO7Eu9n031W2-RJuamvxcNSUcQY7aVyD-ALslO_qgcO_75XJzSM36XF35CvD30vgHA390Fw"
      },
      weap16: {

        name: "MAC-10 | Heat FN",
        price: 1.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhoWPn_jgDLfYkWNF18lwmO7Eu9n031W2-RJuamvxcNSUcQY7aVyD-ALslO_qgcO_75XJzSM36XF35CvD30vgHA390Fw"
      }
    },
    classified: {
      weap1: {
        name: "Nova | Antique FT",
        price: 3.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD0924gImagvLLPr7Vn35c18lwmO7Eu4jwjVDjqkJvZTinLNeVcA49YArW8gS3kOvuh5botJubzSFlvHZ253jD30vgUisGFa4"
      },
      weap2: {
        name: "Nova | Antique MW",
        price: 3.18,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD0924gImagvLLP7LWnn9u5MRjjeyPpt-s2VHm-xE6ZWCnJdeTcQZvM1jV_1Dole68h8DtvZTPnXJhsnUm4WGdwUK2icMtfw"
      },
      weap3: {
        name: "Nova | Antique FN",
        price: 3.41,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD0924gImagvLLP7LWnn9u5MRjjeyPpt-s2VHm-xE6ZWCnJdeTcQZvM1jV_1Dole68h8DtvZTPnXJhsnUm4WGdwUK2icMtfw"
      },
      weap4: {
        name: "P90 | Trigon BS",
        price: 2.76,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJW_tWxm460n_L1JaLummpD78A_3uzErIr2iVXirUVoa2z2coXEJFBvNw2G8ge5lOe8gpe97syayXFl6z5iuyifQtkOuQ"
      },
      weap5: {
        name: "P90 | Trigon WW",
        price: 3.39,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJW_tWxm460mvLwOq7cqWdQ-sJ0xOvD8Iim21ftqhE-a2qlItCQcwY5aV6C-VS-lb_nh5C5us_LmnRis3Y8pSGK3Ot8Ex8"
      },
      weap6: {
        name: "P90 | Trigon FT",
        price: 2.82,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJW_tWxm460mvLwOq7cqWdQ-sJ0xOvD8Iim21ftqhE-a2qlItCQcwY5aV6C-VS-lb_nh5C5us_LmnRis3Y8pSGK3Ot8Ex8"
      },
      weap7: {

        name: "P90 | Trigon MW",
        price: 4.55,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJW_tWxm460m_7zO6_ummpD78A_0--Ypoqt3Q2yrkI4Y2qnctXAJgA8NF3SqVXtkLzsjMfpvsvBmHs1uT5iuyhQpuRimA"
      },
      weap8: {
        name: "AK-47 | Redline BS",
        price: 3.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqP_xMq3IqWdQ-sJ0xOvHrdSn2lW2qkRuZ2vxIYbAcQ5vYQrT-1e7xuq715e4uJrJn3dnuSk8pSGKnsgeKcY"
      },
      weap9: {
        name: "AK-47 | Redline WW",
        price: 6.26,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEm1Rd6dd2j6eQ9N2t2wK3-ENsZ23wcIKRdQE2NwyD_FK_kLq9gJDu7p_KyyRr7nNw-z-DyIFJbNUz"
      },
      weap10: {
        name: "AK-47 | Redline FT",
        price: 5.79,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEm1Rd6dd2j6eQ9N2t2wK3-ENsZ23wcIKRdQE2NwyD_FK_kLq9gJDu7p_KyyRr7nNw-z-DyIFJbNUz"
      },
      weap11: {

        name: "AK-47 | Redline MW",
        price: 18.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPv9NLPFqWdQ-sJ0xL6VrNj3jlCy_0tpZj-nINOTIwRqMwzZ8lLrle6-h5K_75XJnCRruSA8pSGKEtwySt8"
      }
    },
    covert: {
      weap1: {
        name: "AUG | Chameleon BS",
        price: 1.78,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJB5N27kYyOmPn1OqnUqWNU6dNoteXA54vwxgfm-BJpNW_yJdCcIARsMwqE_wS3k7u91sK16ZzJyHZmuHMj5S3bmhypwUYbDuJIwIo"
      },
      weap2: {
        name: "AUG | Chameleon WW",
        price: 1.91,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJB5N27kYyOmPn1OqnUqWZU7Mxkh9bN9J7yjRqxrUNua2H6J4SSJAZvNwmF8gC7xOrrjMLp6pvBz3Bm7ykk4XvZmUDhn1gSOYJAEb79"
      },
      weap3: {
        name: "AUG | Chameleon FT",
        price: 1.54,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJB5N27kYyOmPn1OqnUqWZU7Mxkh9bN9J7yjRqxrUNua2H6J4SSJAZvNwmF8gC7xOrrjMLp6pvBz3Bm7ykk4XvZmUDhn1gSOYJAEb79"
      },
      weap4: {
        name: "AUG | Chameleon MW",
        price: 1.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJB5N27kYyOmPn1OqnUqWdY781lteXA54vwxlWw-hduNW_xcIeRegc3YlmE8gS8wrvv1MS86s-dzSdk6yYj5HzYyRKpwUYb8NvXBjQ"
      },
      weap5: {
        name: "AUG | Chameleon FN",
        price: 2.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJB5N27kYyOmPn1OqnUqWdY781lteXA54vwxlWw-hduNW_xcIeRegc3YlmE8gS8wrvv1MS86s-dzSdk6yYj5HzYyRKpwUYb8NvXBjQ"
      },
      weap6: {
        name: "AWP | Asiimov BS",
        price: 26.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0n_L1JaLummpD78A_3rmTodTwiwzkqUNoN236cteWcwFtY13RqADql7q8h5PttZzJwHdgvz5iuyif2YhKbw"
      },
      weap7: {
        name: "AWP | Asiimov WW",
        price: 33.28,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7cqWdQ-sJ0xOzAot-jiQa3-hBqYzvzLdSVJlQ3NQvR-FfsxL3qh5e7vM6bzSA26Sg8pSGKJUPeNtY"
      },
      weap8: {
        name: "AWP | Asiimov FT",
        price: 39.34,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7cqWdQ-sJ0xOzAot-jiQa3-hBqYzvzLdSVJlQ3NQvR-FfsxL3qh5e7vM6bzSA26Sg8pSGKJUPeNtY"
      }
    },
    stattrak: {
      weap1: {
        name: "StatTrak™ Tec-9 | Sandstorm BS",
        price: 0.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b08-3moSYg_jmPoTZk2pH8fp9i_vG8MLx0QLjr0Q6YWinJdKQI1U4YF_VqwS5wLi5g5a46Z_MmCE1uXR3tHuPgVXp1m7y3pmg"
      },
      weap2: {
        name: "StatTrak™ Tec-9 | Sandstorm WW",
        price: 0.75,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b08-3moSYg_jmPoTck29Y_chOhujT8om7jgaw_0RuNm7yJYeTIA4_MwqE81S7l-rtgJW_6p_MyHI27HQg7HmLlgv330__9v-fTw"
      },
      weap3: {
        name: "StatTrak™ Tec-9 | Sandstorm FT",
        price: 0.32,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b08-3moSYg_jmPoTck29Y_chOhujT8om7jgaw_0RuNm7yJYeTIA4_MwqE81S7l-rtgJW_6p_MyHI27HQg7HmLlgv330__9v-fTw"
      },
      weap4: {
        name: "StatTrak™ Tec-9 | Sandstorm MW",
        price: 1.51,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b08-3moSYg_jmPoTdn2xZ_Pp9i_vG8MLw2wy2-xc9MjqhJ9fEd1I2N17Z-AC7lLvvgMfouM-ayXprvygi7SyJgVXp1mC692Rx"
      },
      weap5: {
        name: "StatTrak™ MAG-7 | Heaven Guard WW",
        price: 0.47,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09SzlZaOmcj5Nr_Yg2Zu5MRjjeyPpt72jgzg-EFsYW-icIHAJ1Q-YVGE_wXvl7rr18fvv5mayHBjuXQh4WGdwUJD5VIhNQ"
      },
      weap6: {
        name: "StatTrak™ MAG-7 | Heaven Guard FT",
        price: 0.26,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09SzlZaOmcj5Nr_Yg2Zu5MRjjeyPpt72jgzg-EFsYW-icIHAJ1Q-YVGE_wXvl7rr18fvv5mayHBjuXQh4WGdwUJD5VIhNQ"
      },
      weap7: {
        name: "StatTrak™ MAG-7 | Heaven Guard MW",
        price: 0.36,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09SzlZaOmcj4OrzZglRd6dd2j6fE9Nyl2lG1qkI6amH3cYSSelA7aAnZ-VXtkOfvhJDqvJ7BnXJluyIi-z-DyFkJt659"
      },
      weap8: {
        name: "StatTrak™ MAG-7 | Heaven Guard FN",
        price: 0.52,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09SzlZaOmcj4OrzZglRd6dd2j6fE9Nyl2lG1qkI6amH3cYSSelA7aAnZ-VXtkOfvhJDqvJ7BnXJluyIi-z-DyFkJt659"
      },
      weap9: {
        name: "StatTrak™ Negev | Terrain WW",
        price: 0.28,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFfwOP3fzhF6cqJgJWZhsjgNqnDl2Jf18h0juDU-LP5iUazrl1vYmilINeQJw9qM1nYqVO7wbrphJe87p2cyXRm6yMr4neJzBLl0xpOcKUx0sdXNdIy"
      },
      weap10: {
        name: "StatTrak™ Negev | Terrain FT",
        price: 0.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFfwOP3fzhF6cqJgJWZhsjgNqnDl2Jf18h0juDU-LP5iUazrl1vYmilINeQJw9qM1nYqVO7wbrphJe87p2cyXRm6yMr4neJzBLl0xpOcKUx0sdXNdIy"
      },
      weap11: {
        name: "StatTrak™ Negev | Terrain MW",
        price: 0.37,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFfwOP3fzhF6cqJgJWZhsjgNqnDl2Jf18l4jeHVyoD0mlOx5Uo_ZTr1I47HclM4MwvZ_ljtwejnjcC_6Zyan3Fq6XEl5irdzhGz0E1SLrs4EJsmc8Q"
      },
      weap12: {
        name: "StatTrak™ Negev | Terrain FN",
        price: 0.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFfwOP3fzhF6cqJgJWZhsjgNqnDl2Jf18l4jeHVyoD0mlOx5Uo_ZTr1I47HclM4MwvZ_ljtwejnjcC_6Zyan3Fq6XEl5irdzhGz0E1SLrs4EJsmc8Q"
      },
      weap13: {
        name: "StatTrak™ UMP-45 | Corporal BS",
        price: 0.26,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS09-5hpCEhfb4DLPUl31I18lwmO7Eu9mh0Qa38hA-Z22lddXEdgFtZ1CCqwW7w-a7gMW0upvOwHdiuSJzt33D30vgUswWZgg"
      },
      weap14: {
        name: "StatTrak™ UMP-45 | Corporal WW",
        price: 0.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS09-5hpCEhfb4DLbUkmJE5fp9i_vG8MKj0Vbn-UZpZzj3doOXelI-aFnT-VC3kOi6gsfvucycnHNquXJw5SvYgVXp1vBvimUq"
      },
      weap15: {
        name: "StatTrak™ UMP-45 | Corporal FT",
        price: 0.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS09-5hpCEhfb4DLbUkmJE5fp9i_vG8MKj0Vbn-UZpZzj3doOXelI-aFnT-VC3kOi6gsfvucycnHNquXJw5SvYgVXp1vBvimUq"
      },
      weap16: {
        name: "StatTrak™ UMP-45 | Corporal MW",
        price: 0.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS09-5hpCEhfb4DLfYkWNF18lwmO7Eu43w2gfnqUc6MjugLdDDd1BrN16E-FTvyenugpPv6ZiYnXo1uHV34yrD30vgsbpsexc"
      },
      weap17: {
        name: "StatTrak™ UMP-45 | Corporal FN",
        price: 2.33,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS09-5hpCEhfb4DLfYkWNF18lwmO7Eu43w2gfnqUc6MjugLdDDd1BrN16E-FTvyenugpPv6ZiYnXo1uHV34yrD30vgsbpsexc"
      },
      weap18: {
        name: "StatTrak™ USP-S | Guardian FT",
        price: 2.91,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jxP77Wl2VF18h0juDU-LP5iUazrl05Zjzyd9KWcwU2MFnV_le-yem81MS4uZXOyyFm7CRzty6JyRHkhEsZcKUx0qcUSTBJ"
      },
      weap19: {
        name: "StatTrak™ USP-S | Guardian MW",
        price: 3.76,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jxP77Wl2VF18l4jeHVyoD0mlOx5UdtZT_1JIHGIQNoMA2C_1PslO65h5Tpvc_AwXZmuiMr5CnZmhfm0hpSLrs4U9WKdHc"
      },
      weap20: {
        name: "StatTrak™ USP-S | Guardian FN",
        price: 4.98,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jxP77Wl2VF18l4jeHVyoD0mlOx5UdtZT_1JIHGIQNoMA2C_1PslO65h5Tpvc_AwXZmuiMr5CnZmhfm0hpSLrs4U9WKdHc"
      },
      weap21: {
        name: "StatTrak™ FAMAS | Sergeant BS",
        price: 1.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v33dzxP7c-Jh4efqP_xMq3IqWdQ-sJ0xLiVpIjziwXmrUA4Mjz7cYSUdQ47M1nW8la-wrjn1pG0vM7LzHoxsnM8pSGKeNmiS9s"
      },
      weap22: {
        name: "StatTrak™ FAMAS | Sergeant WW",
        price: 1.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v33dzxP7c-Jh4efqPrxN7LEm1Rd6dd2j6fArd-iiQGwr0I6NTrxddKcdgBsZAvT_1K5leftgMTqu57IyiE27ycn-z-DyCRsIegQ"
      },
      weap23: {
        name: "StatTrak™ FAMAS | Sergeant FT",
        price: 1.47,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v33dzxP7c-Jh4efqPrxN7LEm1Rd6dd2j6fArd-iiQGwr0I6NTrxddKcdgBsZAvT_1K5leftgMTqu57IyiE27ycn-z-DyCRsIegQ"
      },
      weap24: {
        name: "StatTrak™ FAMAS | Sergeant MW",
        price: 5.30,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLuoKhRf0v33dzxP7c-Jh4efqPv9NLPFqWdQ-sJ0xLzArN6h2VDg-hJvMGr2dYXDIFQ8YQmFqALqw-ztgJXtuszBzCRkuHY8pSGKWiPDS9g"
      },
      weap25: {
        name: "StatTrak™ SG 553 | Pulse BS",
        price: 1.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JhJWHhPLLO77QgHJu5MRjjeyP8dyjjQLs_xI4YG-mLNfEdgRsNF-BqFG4wenrjJW97s-dmiBhunRx4WGdwULbXqSS5Q"
      },
      weap26: {
        name: "StatTrak™ SG 553 | Pulse WW",
        price: 1.68,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JhJWHhPLLPr7Vn35c18lwmO7Eu9Sh0Fbk_xE9Ym37LI7EJgY7Ml_ZqQK6lLi-18W76JybwXZluykqtnvD30vgXWzJUu8"
      },
      weap27: {

        name: "StatTrak™ SG 553 | Pulse FT",
        price: 1.32,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JhJWHhPLLPr7Vn35c18lwmO7Eu9Sh0Fbk_xE9Ym37LI7EJgY7Ml_ZqQK6lLi-18W76JybwXZluykqtnvD30vgXWzJUu8"
      },
      weap28: {

        name: "StatTrak™ SG 553 | Pulse MW",
        price: 4.89,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf0Ob3YjoXuY-JhJWHhPLLP7LWnn9u5MRjjeyP8dmj3A3k-xdsZj2lJNPAc1JvZlvXqQXrx-_rgcPuuZifmHFlvCgms2GdwUKNNulqdg"
      },
      weap29: {

        name: "StatTrak™ MAC-10 | Heat BS",
        price: 1.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhoWPn_jgDLPUl31I18lwmO7Eu9Sn3wCw-kI6am2ncdLDIAdsaFmD-FbslOfo0JG0tZ7BzHAxvSkq7HbD30vgg2lozYM"
      },
      weap30: {

        name: "StatTrak™ MAC-10 | Heat WW",
        price: 1.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhoWPn_jgDLbUkmJE5fp9i_vG8MLx0Afmr0I4Mjv7J9SWegE8Y1iD_gXowLrojcLpuszOzyY1vXRx5XjdgVXp1tewq1E1"
      },
      weap31: {

        name: "StatTrak™ MAC-10 | Heat FT",
        price: 1.46,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhoWPn_jgDLbUkmJE5fp9i_vG8MLx0Afmr0I4Mjv7J9SWegE8Y1iD_gXowLrojcLpuszOzyY1vXRx5XjdgVXp1tewq1E1"
      },
      weap32: {

        name: "StatTrak™ MAC-10 | Heat MW",
        price: 4.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhoWPn_jgDLfYkWNF18lwmO7Eu9n031W2-RJuamvxcNSUcQY7aVyD-ALslO_qgcO_75XJzSM36XF35CvD30vgHA390Fw"
      },
      weap33: {

        name: "StatTrak™ MAC-10 | Heat FN",
        price: 5.84,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhoWPn_jgDLfYkWNF18lwmO7Eu9n031W2-RJuamvxcNSUcQY7aVyD-ALslO_qgcO_75XJzSM36XF35CvD30vgHA390Fw"
      },
      weap34: {
        name: "StatTrak™ Nova | Antique FT",
        price: 8.56,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD0924gImagvLLPr7Vn35c18lwmO7Eu4jwjVDjqkJvZTinLNeVcA49YArW8gS3kOvuh5botJubzSFlvHZ253jD30vgUisGFa4"
      },
      weap35: {
        name: "StatTrak™ Nova | Antique MW",
        price: 8.56,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD0924gImagvLLP7LWnn9u5MRjjeyPpt-s2VHm-xE6ZWCnJdeTcQZvM1jV_1Dole68h8DtvZTPnXJhsnUm4WGdwUK2icMtfw"
      },
      weap36: {
        name: "StatTrak™ Nova | Antique FN",
        price: 9.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD0924gImagvLLP7LWnn9u5MRjjeyPpt-s2VHm-xE6ZWCnJdeTcQZvM1jV_1Dole68h8DtvZTPnXJhsnUm4WGdwUK2icMtfw"
      },
      weap37: {
        name: "StatTrak™ P90 | Trigon BS",
        price: 6.14,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJW_tWxm460n_L1JaLummpD78A_3uzErIr2iVXirUVoa2z2coXEJFBvNw2G8ge5lOe8gpe97syayXFl6z5iuyifQtkOuQ"
      },
      weap38: {
        name: "StatTrak™ P90 | Trigon WW",
        price: 7.82,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJW_tWxm460mvLwOq7cqWdQ-sJ0xOvD8Iim21ftqhE-a2qlItCQcwY5aV6C-VS-lb_nh5C5us_LmnRis3Y8pSGK3Ot8Ex8"
      },
      weap39: {
        name: "StatTrak™ P90 | Trigon FT",
        price: 8.13,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJW_tWxm460mvLwOq7cqWdQ-sJ0xOvD8Iim21ftqhE-a2qlItCQcwY5aV6C-VS-lb_nh5C5us_LmnRis3Y8pSGK3Ot8Ex8"
      },
      weap40: {

        name: "StatTrak™ P90 | Trigon MW",
        price: 16.98,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJW_tWxm460m_7zO6_ummpD78A_0--Ypoqt3Q2yrkI4Y2qnctXAJgA8NF3SqVXtkLzsjMfpvsvBmHs1uT5iuyhQpuRimA"
      },
      weap41: {
        name: "StatTrak™ AK-47 | Redline BS",
        price: 12.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqP_xMq3IqWdQ-sJ0xOvHrdSn2lW2qkRuZ2vxIYbAcQ5vYQrT-1e7xuq715e4uJrJn3dnuSk8pSGKnsgeKcY"
      },
      weap42: {
        name: "StatTrak™ AK-47 | Redline WW",
        price: 21.67,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEm1Rd6dd2j6eQ9N2t2wK3-ENsZ23wcIKRdQE2NwyD_FK_kLq9gJDu7p_KyyRr7nNw-z-DyIFJbNUz"
      },
      weap43: {
        name: "StatTrak™ AK-47 | Redline FT",
        price: 26.19,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPrxN7LEm1Rd6dd2j6eQ9N2t2wK3-ENsZ23wcIKRdQE2NwyD_FK_kLq9gJDu7p_KyyRr7nNw-z-DyIFJbNUz"
      },
      weap44: {

        name: "StatTrak™ AK-47 | Redline MW",
        price: 131.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPv9NLPFqWdQ-sJ0xL6VrNj3jlCy_0tpZj-nINOTIwRqMwzZ8lLrle6-h5K_75XJnCRruSA8pSGKEtwySt8"
      },
      weap45: {
        name: "StatTrak™ AUG | Chameleon BS",
        price: 8.35,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJB5N27kYyOmPn1OqnUqWNU6dNoteXA54vwxgfm-BJpNW_yJdCcIARsMwqE_wS3k7u91sK16ZzJyHZmuHMj5S3bmhypwUYbDuJIwIo"
      },
      weap46: {
        name: "StatTrak™ AUG | Chameleon WW",
        price: 7.90,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJB5N27kYyOmPn1OqnUqWZU7Mxkh9bN9J7yjRqxrUNua2H6J4SSJAZvNwmF8gC7xOrrjMLp6pvBz3Bm7ykk4XvZmUDhn1gSOYJAEb79"
      },
      weap47: {
        name: "StatTrak™ AUG | Chameleon FT",
        price: 6.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJB5N27kYyOmPn1OqnUqWZU7Mxkh9bN9J7yjRqxrUNua2H6J4SSJAZvNwmF8gC7xOrrjMLp6pvBz3Bm7ykk4XvZmUDhn1gSOYJAEb79"
      },
      weap48: {
        name: "StatTrak™ AUG | Chameleon MW",
        price: 7.87,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJB5N27kYyOmPn1OqnUqWdY781lteXA54vwxlWw-hduNW_xcIeRegc3YlmE8gS8wrvv1MS86s-dzSdk6yYj5HzYyRKpwUYb8NvXBjQ"
      },
      weap49: {
        name: "StatTrak™ AUG | Chameleon FN",
        price: 13.95,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJB5N27kYyOmPn1OqnUqWdY781lteXA54vwxlWw-hduNW_xcIeRegc3YlmE8gS8wrvv1MS86s-dzSdk6yYj5HzYyRKpwUYb8NvXBjQ"
      },
      weap50: {
        name: "StatTrak™ AWP | Asiimov BS",
        price: 68.42,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0n_L1JaLummpD78A_3rmTodTwiwzkqUNoN236cteWcwFtY13RqADql7q8h5PttZzJwHdgvz5iuyif2YhKbw"
      },
      weap51: {
        name: "StatTrak™ AWP | Asiimov WW",
        price: 104.88,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7cqWdQ-sJ0xOzAot-jiQa3-hBqYzvzLdSVJlQ3NQvR-FfsxL3qh5e7vM6bzSA26Sg8pSGKJUPeNtY"
      },
      weap52: {
        name: "StatTrak™ AWP | Asiimov FT",
        price: 110.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0mvLwOq7cqWdQ-sJ0xOzAot-jiQa3-hBqYzvzLdSVJlQ3NQvR-FfsxL3qh5e7vM6bzSA26Sg8pSGKJUPeNtY"
      }
    }
  },
//Huntsman
 case9: {
    milspec: {
      weap1: {
        name: "CZ75-Auto | Poison Dart BS",
        price: 0.78,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73fzRW_tOxkY60n_L1JaLummpD78A_3-iZodumigbj_UdkZWClJIfDcwFoZVjZrwXow7q70Me_upTNznIxuD5iuyh9jpWaLQ"
      },
      weap2: {
        name: "CZ75-Auto | Poison Dart WW",
        price: 3.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73fzRW_tOxkY60mvLwOq7cqWdQ-sJ0xLvDrYmkjAKw8kc5MGrwcdORIwY-NV_UrFe_wOju15a86pTMzHU3vyc8pSGKwe5FTIQ"
      },
      weap3: {
        name: "CZ75-Auto | Poison Dart FT",
        price:0.69,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73fzRW_tOxkY60mvLwOq7cqWdQ-sJ0xLvDrYmkjAKw8kc5MGrwcdORIwY-NV_UrFe_wOju15a86pTMzHU3vyc8pSGKwe5FTIQ"
      },
      weap4: {
        name: "CZ75-Auto | Poison Dart MW",
        price: 1.06,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73fzRW_tOxkY60m_7zO6_ummpD78A_j-iQ8d2ijgOx-xE9aj-iI4eUcABvZV6C-QPvyOe905S5tMmfnydhvz5iuyilCS70yQ"
      },
      weap5: {
        name: "CZ75-Auto | Poison Dart FN",
        price: 2.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73fzRW_tOxkY60m_7zO6_ummpD78A_j-iQ8d2ijgOx-xE9aj-iI4eUcABvZV6C-QPvyOe905S5tMmfnydhvz5iuyilCS70yQ"
      },
      weap6: {
        name: "P90 | Desert Warfare BS",
        price: 21.07,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJR79OkhImehMj8NrrHj1Rd6dd2j6fDodX32wTlr0ZtNmihI4DEcFc2ZFvXqQe8xObvg8K0tJ-anCBqvyJz-z-DyN9h6N77"
      },
      weap7: {
        name: "P90 | Desert Warfare WW",
        price: 2.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJR79OkhImehMj5Nr_Yg2Zu5MRjjeyP8Ij02gLs_URpZ2mlIY_Deg5sYVnUrFS-kOi7hsC9u8yfnCE2viEhtmGdwUKos_0G4w"
      },
      weap8: {
        name: "P90 | Desert Warfare FT",
        price: 1.55,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJR79OkhImehMj5Nr_Yg2Zu5MRjjeyP8Ij02gLs_URpZ2mlIY_Deg5sYVnUrFS-kOi7hsC9u8yfnCE2viEhtmGdwUKos_0G4w"
      },
      weap9: {
        name: "P90 | Desert Warfare MW",
        price: 2.88,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJR79OkhImehMj4OrzZglRd6dd2j6eZ8933iway_RI6MG2mI9CcJFBsZgnU_1C8xOzrg5fquczInSRjvXF2-z-DyH3sCYTv"
      },
      weap10: {
        name: "P90 | Desert Warfare FN",
        price: 3.76,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJR79OkhImehMj4OrzZglRd6dd2j6eZ8933iway_RI6MG2mI9CcJFBsZgnU_1C8xOzrg5fquczInSRjvXF2-z-DyH3sCYTv"
      },
      weap11: {
        name: "Galil AR | Kami BS",
        price: 0.14,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJF7dC_mL-Alvr9DLPUl31I18lwmO7Eu9-iiQfi8xVoYWn3IY-RJlc2NQ7R81C5wbjp1sO0vp3IySZruyAlt3fD30vgrSnMEfA"
      },
      weap12: {
        name: "Galil AR | Kami WW",
        price: 0.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJF7dC_mL-Alvr9DLbUkmJE5fp9i_vG8ML231e2r0Q5Y2r7cNPEdAc3aV3Z_Qe4we_rjZ-1vpnOy3I1vyZ0sCnbgVXp1tUzHqtY"
      },
      weap13: {
        name: "Galil AR | Kami FT",
        price: 0.14,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJF7dC_mL-Alvr9DLbUkmJE5fp9i_vG8ML231e2r0Q5Y2r7cNPEdAc3aV3Z_Qe4we_rjZ-1vpnOy3I1vyZ0sCnbgVXp1tUzHqtY"
      },
      weap14: {
        name: "Galil AR | Kami MW",
        price: 0.19,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJF7dC_mL-Alvr9DLfYkWNF18lwmO7Eu4qk3wzn_EFtMWzwJY7AIwM_MwuC_Vm3wby5jMXovJ3BzSM16XQhsHzD30vg4zncSr4"
      },
      weap15: {
        name: "Galil AR | Kami FN",
        price: 0.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJF7dC_mL-Alvr9DLfYkWNF18lwmO7Eu4qk3wzn_EFtMWzwJY7AIwM_MwuC_Vm3wby5jMXovJ3BzSM16XQhsHzD30vg4zncSr4"
      },
      weap16: {
        name: "Dual Berettas | Retribution WW",
        price: 77.81,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YzhW_tW0gZSCmPnLPr7Vn35c18lwmO7Eu96i0VDh-0M9ZGHzI4fHdwJrYwqF-QW5lOvnhMfuvM7PyHpkvHIn5CrD30vguntjiLw"
      },
      weap17: {
        name: "Dual Berettas | Retribution FT",
        price: 0.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YzhW_tW0gZSCmPnLPr7Vn35c18lwmO7Eu96i0VDh-0M9ZGHzI4fHdwJrYwqF-QW5lOvnhMfuvM7PyHpkvHIn5CrD30vguntjiLw"
      },
      weap18: {
        name: "Dual Berettas | Retribution MW",
        price: 0.59,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YzhW_tW0gZSCmPnLP7LWnn9u5MRjjeyPrdmn31bg_hZvZ2nwLdSRd1JrMFGE-VG6k7zqjZ--7ZydySY2vyIk7WGdwUIoM_3ZlQ"
      },
      weap19: {
        name: "Dual Berettas | Retribution FN",
        price: 1.07,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YzhW_tW0gZSCmPnLP7LWnn9u5MRjjeyPrdmn31bg_hZvZ2nwLdSRd1JrMFGE-VG6k7zqjZ--7ZydySY2vyIk7WGdwUIoM_3ZlQ"
      },
      weap20: {
        name: "SSG 08 | Slashed BS",
        price: 0.18,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJnY2GmOXgMrfunm5Q_txOhujT8om7iwLm_kJtY23wd46XIwM9ZA6F-1K7kO3o1sC86ZmYyCQwuSAg53yJmQv330_2VnLwLg"
      },
      weap21: {
        name: "SSG 08 | Slashed WW",
        price: 0.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJnY2GmOXgMrfum25V4dB8teXA54vwxgyxrhY9ZjymctLAcA42NV6BqQPql-vqgsfu75SayiNkvidw5X_Vy0epwUYb0EJFrhY"
      },
      weap22: {
        name: "SSG 08 | Slashed FT",
        price: 0.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJnY2GmOXgMrfum25V4dB8teXA54vwxgyxrhY9ZjymctLAcA42NV6BqQPql-vqgsfu75SayiNkvidw5X_Vy0epwUYb0EJFrhY"
      },
      weap23: {
        name: "Tec-9 | Isaac BS",
        price: 0.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b092lnYmGmOHLO77QgHJu5MRjjeyPrY6jiQOw-ERrNj30IIeXewVvMFqCqwDvk-6608PpucjMmiZrs3Rw7WGdwUJy6_wOcg"
      },
      weap24: {
        name: "Tec-9 | Isaac WW",
        price: 0.34,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b092lnYmGmOHLPr7Vn35c18lwmO7Eu9ii3Vfhr0Foazj2I9CTJAVvaVGCrFLvyLu8gp_ttZ6dzSRiv3VwsX3D30vgmI_45mM"
      },
      weap25: {
        name: "Tec-9 | Isaac FT",
        price: 0.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b092lnYmGmOHLPr7Vn35c18lwmO7Eu9ii3Vfhr0Foazj2I9CTJAVvaVGCrFLvyLu8gp_ttZ6dzSRiv3VwsX3D30vgmI_45mM"
      },
      weap26: {
        name: "Tec-9 | Isaac MW",
        price: 0.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b092lnYmGmOHLP7LWnn9u5MRjjeyPrI2hjlbtqRE6ZT_zJYSVe1Q2NwzTrwfolLq-hMPp78uayCdm6ylz5mGdwUJXtvY84A"
      },
      weap27: {
        name: "Tec-9 | Isaac FN",
        price: 2.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b092lnYmGmOHLP7LWnn9u5MRjjeyPrI2hjlbtqRE6ZT_zJYSVe1Q2NwzTrwfolLq-hMPp78uayCdm6ylz5mGdwUJXtvY84A"
      },
      weap28: {
        name: "P2000 | Pulse BS",
        price: 0.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-bgvvnNoTZk2pH8fp9i_vG8ML02FDjqBY5YjzwJ9fAclQ2Ml7S-FLsleq9hpC86JrNmyAw6SAhtinfgVXp1iziYQWB"
      },
      weap29: {
        name: "P2000 | Pulse WW",
        price: 0.65,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-bgvvnNoTck29Y_chOhujT8om7jAzt-0Fsaj2mJofDIQFrN1nR8ljrlO_s15LquJqcwHNqs3Iq5XrVnAv3308vMhSYAQ"
      },
      weap30: {
        name: "P2000 | Pulse FT",
        price: 0.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-bgvvnNoTck29Y_chOhujT8om7jAzt-0Fsaj2mJofDIQFrN1nR8ljrlO_s15LquJqcwHNqs3Iq5XrVnAv3308vMhSYAQ"
      },
      weap31: {
        name: "P2000 | Pulse MW",
        price: 0.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-bgvvnNoTdn2xZ_Pp9i_vG8ML03w2yqBU_N2z6JoaXdg87ZF_TqwPolbq8hMO7up_OmydluHImsH6OgVXp1hloYnQm"
      },
      weap32: {
        name: "P2000 | Pulse FN",
        price: 0.35,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-bgvvnNoTdn2xZ_Pp9i_vG8ML03w2yqBU_N2z6JoaXdg87ZF_TqwPolbq8hMO7up_OmydluHImsH6OgVXp1hloYnQm"
      },
      weap33: {
        name: "P90 | Module FT",
        price: 0.52,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZu7OHHaDxO7tCzkYS0mvLwOq7cqWdQ-sJ0xLnA89vw0Ve2rhY5ZG_0I9PHJwI3YQqE-AC3weq9jMS-ucvKyncyvXU8pSGKh8smwyY"
      },
      weap34: {
        name: "P90 | Module MW",
        price: 0.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZu7OHHaDxO7tCzkYS0m_7zO6_ummpD78A_37HF846h0AHl8kNkN277d4WUJwQ-ZFzX_Va3wr_ph5a1vp7OynU36D5iuyj0A1mk7w"
      },
      weap35: {
        name: "P90 | Module FN",
        price: 0.74,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZu7OHHaDxO7tCzkYS0m_7zO6_ummpD78A_37HF846h0AHl8kNkN277d4WUJwQ-ZFzX_Va3wr_ph5a1vp7OynU36D5iuyj0A1mk7w"
      },
       weap36: {
        name: "CZ75-Auto | Twist BS",
        price: 0.14,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73diRQ7cizq4iOluHtDLfQhGxUppN32rmTo4ij0QCxr0duNW71IdKXJwE6Zw2F_FXqxLvo1JLvvpXOnHN9-n51ofWLRk4"
      },
      weap37: {
        name: "CZ75-Auto | Twist WW",
        price: 0.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73diRQ7cizq42Ok_7hPoTdl3lW7Yty3eqZpIii2ACy-xJvZmCmd4fGIQVrMw7Sr1Dvl-vr05C975zMwHBgpGB8soc4ZNbJ"
      },
      weap38: {
        name: "CZ75-Auto | Twist FT",
        price: 0.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73diRQ7cizq42Ok_7hPoTdl3lW7Yty3eqZpIii2ACy-xJvZmCmd4fGIQVrMw7Sr1Dvl-vr05C975zMwHBgpGB8soc4ZNbJ"
      },
      weap39: {
        name: "CZ75-Auto | Twist MW",
        price: 0.19,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73diRQ7cizq4yCkP_gDLfQhGxUppwhjLCWptqsiQPt_UppMm6lcNXHdAU9MFGD8wC3lOvp05S17Z3MnXd9-n51fgb0S08"
      },
      weap40: {
        name: "CZ75-Auto | Twist FN",
        price: 0.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73diRQ7cizq4yCkP_gDLfQhGxUppwhjLCWptqsiQPt_UppMm6lcNXHdAU9MFGD8wC3lOvp05S17Z3MnXd9-n51fgb0S08"
      }
    },
    restricted: {
      weap1: {
        name: "XM1014 | Heaven Guard BS",
        price: 1.73,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-DkvbiNrXukX5Q-sFOguzA45XKhFWmrBZyMmjwd9Cdew5qNF7S_AS_wOy9hMTpupjJy3dq7Cgi5XeLmBG-iEoebfsv26JPkskflg"
      },
      weap2: {
        name: "XM1014 | Heaven Guard WW",
        price: 0.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-DkvbiNrXukX5Q-sFOh-zF_Jn4t1i1uRQ5fWj6ItXGIVBtMgyF_gPsxri51sTq6ZXNmiMwuyQqtH2MmkTlhk5LOLZxxavJwqJm74c"
      },
      weap3: {
        name: "XM1014 | Heaven Guard FT",
        price: 0.81,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-DkvbiNrXukX5Q-sFOh-zF_Jn4t1i1uRQ5fWj6ItXGIVBtMgyF_gPsxri51sTq6ZXNmiMwuyQqtH2MmkTlhk5LOLZxxavJwqJm74c"
      },
      weap4: {
        name: "XM1014 | Heaven Guard MW",
        price: 0.83,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-DkvbiNrXukX5Q-sFOhuDG_ZjKhFWmrBZyMG6lJ9Cdegc7N1GDqwC3w7q-1JPq6sjNyntjsigitn7bnxPhhUlEb_sv26LqmddafA"
      },
      weap5: {
        name: "XM1014 | Heaven Guard FN",
        price: 1.72,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-DkvbiNrXukX5Q-sFOhuDG_ZjKhFWmrBZyMG6lJ9Cdegc7N1GDqwC3w7q-1JPq6sjNyntjsigitn7bnxPhhUlEb_sv26LqmddafA"
      },
      weap6: {
        name: "MAC-10 | Curse BS",
        price: 6.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJkIWIlu7LO77QgHJu5MRjjeyP9NWnigXn_0s6a2ygdYbBelVvN13W_1K6k7u7hMW4uM7Pn3Iw63RxtmGdwULritFlUg"
      },
      weap7: {
        name: "MAC-10 | Curse WW",
        price: 4.56,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJkIWIlu7LPr7Vn35c18lwmO7Eu9it2Q3mr0psaz-hdo6RIwM9YV7R81S3xefn08S-7sjAwCNrvCEn5i7D30vgFf0tycs"
      },
      weap8: {
        name: "MAC-10 | Curse FT",
        price: 1.01,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJkIWIlu7LPr7Vn35c18lwmO7Eu9it2Q3mr0psaz-hdo6RIwM9YV7R81S3xefn08S-7sjAwCNrvCEn5i7D30vgFf0tycs"
      },
      weap9: {
        name: "MAC-10 | Curse MW",
        price: 0.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJkIWIlu7LP7LWnn9u5MRjjeyP99ygjVLnqkZrNzrycICXI1NqZFGF81C3w-znjJe5upmcyiFquScisWGdwUL2MzpKtg"
      },
      weap10: {
        name: "MAC-10 | Curse FN",
        price: 1.73,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJkIWIlu7LP7LWnn9u5MRjjeyP99ygjVLnqkZrNzrycICXI1NqZFGF81C3w-znjJe5upmcyiFquScisWGdwUL2MzpKtg"
      },
      weap11: {
        name: "PP-Bizon | Antique BS",
        price: 1.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlY6fnubhNoTZk2pH8fp9i_vG8ML021Kx8kRuN2j2ctOWcFc_NAzX_FW9wu7qhZC9uZXPy3Bi6CYn7XvZgVXp1iiYkPnz"
      },
      weap12: {
        name: "PP-Bizon | Antique WW",
        price: 1.54,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlY6fnubhNoTck29Y_chOhujT8om7ig3nrUU6YTzzdtOVdlA8MlqB8lnqx7vog8S_tJ_OwHY3uSInsy7enwv3309qmZ180A"
      },
      weap13: {
        name: "PP-Bizon | Antique FT",
        price: 0.74,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlY6fnubhNoTck29Y_chOhujT8om7ig3nrUU6YTzzdtOVdlA8MlqB8lnqx7vog8S_tJ_OwHY3uSInsy7enwv3309qmZ180A"
      },
      weap14: {
        name: "PP-Bizon | Antique MW",
        price: 0.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlY6fnubhNoTdn2xZ_Pp9i_vG8MKl3gDi_EJrZmzyJY-SdFJvNFzS-1jryL29h8DvtMyby3I37CB343regVXp1phXL_vD"
      },
      weap15: {
        name: "PP-Bizon | Antique FN",
        price: 1.38,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlY6fnubhNoTdn2xZ_Pp9i_vG8MKl3gDi_EJrZmzyJY-SdFJvNFzS-1jryL29h8DvtMyby3I37CB343regVXp1phXL_vD"
      },
      weap16: {
        name: "AUG | Torque BS",
        price: 1.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJS_tOxhoWYhP7iDLPUl31I18lwmO7Eu4-jiga3rRFlZzygcobGdAQ3YFGB_lntwe7tgMO76cicynFjuyMl4i3D30vg7wzx9mk"
      },
      weap17: {
        name: "AUG | Torque WW",
        price: 0.95,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJS_tOxhoWYhP7iDLbUkmJE5fp9i_vG8MKh2w3i-BY6az31LIWTdwRoYAvT81K7wO-51JTtupqcnHVqsyl24X-IgVXp1thL5cUB"
      },
      weap18: {
        name: "AUG | Torque FT",
        price: 0.74,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJS_tOxhoWYhP7iDLbUkmJE5fp9i_vG8MKh2w3i-BY6az31LIWTdwRoYAvT81K7wO-51JTtupqcnHVqsyl24X-IgVXp1thL5cUB"
      },
      weap19: {
        name: "AUG | Torque MW",
        price: 0.87,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJS_tOxhoWYhP7iDLfYkWNF18lwmO7Eu4qi2Qa2qhVlYWzwdtKWdwFtZlmB-1S8xLq-1pO96Z7Jy3tr6Skn5nrD30vgYhMJ-CM"
      },
      weap20: {
        name: "AUG | Torque FN",
        price: 1.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJS_tOxhoWYhP7iDLfYkWNF18lwmO7Eu4qi2Qa2qhVlYWzwdtKWdwFtZlmB-1S8xLq-1pO96Z7Jy3tr6Skn5nrD30vgYhMJ-CM"
      },
      weap21: {
        name: "MAC-10 | Tatter BS",
        price: 1.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3ejJQ-cyiq4iOluHtDLfQhGxUppUo3euQ84ms2AO2-RU4NWmmJtecewdsZQqB-wS3lbjrjcC0vszAyid9-n51cjKl1n4"
      },
      weap22: {
        name: "MAC-10 | Tatter WW",
        price: 0.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3ejJQ-cyiq42Ok_7hPoTdl3lW7Yt0i7mVpoit0AC3r0tuZ23zd4DAewM6MlyFr1C-xb_s1pW5u8uYzSRhpGB8si0rxcEY"
      },
      weap23: {
        name: "MAC-10 | Tatter FT",
        price: 0.74,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3ejJQ-cyiq42Ok_7hPoTdl3lW7Yt0i7mVpoit0AC3r0tuZ23zd4DAewM6MlyFr1C-xb_s1pW5u8uYzSRhpGB8si0rxcEY"
      },
      weap24: {
        name: "MAC-10 | Tatter MW",
        price: 0.89,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3ejJQ-cyiq4yCkP_gDLfQhGxUpsMg2u2Yodukiwzm_RduZmrzctTGIFU2YQzW_wS9wb3qhpTtuZWbzHV9-n51t0WMl9E"
      },
      weap25: {
        name: "MAC-10 | Tatter FN",
        price: 1.44,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3ejJQ-cyiq4yCkP_gDLfQhGxUpsMg2u2Yodukiwzm_RduZmrzctTGIFU2YQzW_wS9wb3qhpTtuZWbzHV9-n51t0WMl9E"
      },
    },
    classified: {
      weap1: {
        name: "USP-S | Orion BS",
        price: 28.63,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnI7LFkGJD7fp5j-jX7LP5iUazrl1uZW_6JYaScgNoZQnQ8gLtyejq18Pp6p7LziE2vXV04n7eyUHmiEpPcKUx0sanq5CH"
      },
      weap2: {
        name: "USP-S | Orion WW",
        price: 12.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnI7LFkGJD7fp8j-3I4IHKhFWmrBZyZG_3JIKQJwc4Ml2G_VHowL_phZfpusyfnHpq6XMity3ayUHkgx1Ib_sv26LJu2So0g"
      },
      weap3: {
        name: "USP-S | Orion FT",
        price: 9.02,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnI7LFkGJD7fp8j-3I4IHKhFWmrBZyZG_3JIKQJwc4Ml2G_VHowL_phZfpusyfnHpq6XMity3ayUHkgx1Ib_sv26LJu2So0g"
      },
      weap4: {
        name: "USP-S | Orion MW",
        price: 9.48,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnI7LFkGJD7fp9g-7J4bP5iUazrl1ka2qhLIGSIw5vZF-D8wXqwO_tjcC-uZjJnSY3vCkmsXbYlkO0gB1McKUx0vNO72r1"
      },
      weap5: {
        name: "USP-S | Orion FN",
        price: 12.96,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnI7LFkGJD7fp9g-7J4bP5iUazrl1ka2qhLIGSIw5vZF-D8wXqwO_tjcC-uZjJnSY3vCkmsXbYlkO0gB1McKUx0vNO72r1"
      },
      weap6: {
        name: "SCAR-20 | Cyrex BS",
        price: 6.56,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c6Jl5mZku_LO77QgHJu5MRjjeyPo9-siw23_EFvZm6nddCUdQRsaV7T_lDsx-zq157ptZ6YnXpr6ycit2GdwULpMU75RQ"
      },
      weap7: {
        name: "SCAR-20 | Cyrex WW",
        price: 3.77,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c6Jl5mZku_LPr7Vn35c18lwmO7Eu4rz2gLtrkE5ZGH0doHBdQU_YlHTrAO7yebs08O8vMnLwCBjs3Fx5XzD30vgG8tICKs"
      },
      weap8: {
        name: "SCAR-20 | Cyrex FT",
        price: 3.72,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c6Jl5mZku_LPr7Vn35c18lwmO7Eu4rz2gLtrkE5ZGH0doHBdQU_YlHTrAO7yebs08O8vMnLwCBjs3Fx5XzD30vgG8tICKs"
      },
      weap9: {
        name: "SCAR-20 | Cyrex MW",
        price: 4.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c6Jl5mZku_LP7LWnn9u5MRjjeyP8ImhjFXl-BZuN273cIbDJgdoNQqBq1now72-gZ_p7pyaziRj63NxtGGdwULm7JPnpA"
      },
      weap10: {
        name: "SCAR-20 | Cyrex FN",
        price: 7.06,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c6Jl5mZku_LP7LWnn9u5MRjjeyP8ImhjFXl-BZuN273cIbDJgdoNQqBq1now72-gZ_p7pyaziRj63NxtGGdwULm7JPnpA"
      },
      weap11: {
        name: "M4A1-S | Atomic Alloy BS",
        price: 3.87,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alfqjul2dd59xOhfvA-4vwt1yxqgUlDDWiZtHAbAI7Ml3Sq1K_lObt1JO56MjInCM3vSQm4y6JnBDigREZa7FujaabSA2AR_sezK0iUac"
      },
      weap12: {
        name: "M4A1-S | Atomic Alloy WW",
        price: 3.88,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alfqjul2dd59xOhfvA-4vwt1mxrxopPgavdcTCJxg8Z12F-lO6lby51JS47ZzJwXJn7ih27H2OzEbl1UxEauw51PPISwiWGeUXS05UIj81"
      },
      weap13: {
        name: "M4A1-S | Atomic Alloy FT",
        price: 3.68,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alfqjul2dd59xOhfvA-4vwt1mxrxopPgavdcTCJxg8Z12F-lO6lby51JS47ZzJwXJn7ih27H2OzEbl1UxEauw51PPISwiWGeUXS05UIj81"
      },
      weap14: {
        name: "M4A1-S | Atomic Alloy MW",
        price: 6.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alfqjul2dd59xOhfvA-4vwt1i9rBsoDDWiZtHAbA48MwzS_VPqwezqg8C9u8ibwXRjuClz7SvcmxS20hwZa7c5h6fNQA-AR_seVEiZW-4"
      },
      weap15: {
        name: "M4A1-S | Atomic Alloy FN",
        price: 13.14,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alfqjul2dd59xOhfvA-4vwt1i9rBsoDDWiZtHAbA48MwzS_VPqwezqg8C9u8ibwXRjuClz7SvcmxS20hwZa7c5h6fNQA-AR_seVEiZW-4"
      },
      weap16: {
        name: "USP-S | Caiman WW",
        price: 5.01,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq4uKnvr1PYTck29Y_chOhujT8om72Ay2_ENuY26ncoDBd1I_MlCBrgW5ye_u1sC_vJ6YyXtgsiYh7HnUywv330-jy4MGQg"
      },
      weap17: {
        name: "USP-S | Caiman FT",
        price: 4.00,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq4uKnvr1PYTck29Y_chOhujT8om72Ay2_ENuY26ncoDBd1I_MlCBrgW5ye_u1sC_vJ6YyXtgsiYh7HnUywv330-jy4MGQg"
      },
      weap18: {
        name: "USP-S | Caiman MW",
        price: 4.55,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq4uKnvr1PYTdn2xZ_Pp9i_vG8MKtjVDl_UtoZGGmJ4aTIFI9aVqB81Hvl7zu15G97cnAn3VmvyFw5nvfgVXp1oe126ve"
      },
      weap19: {

        name: "USP-S | Caiman FN",
        price: 7.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq4uKnvr1PYTdn2xZ_Pp9i_vG8MKtjVDl_UtoZGGmJ4aTIFI9aVqB81Hvl7zu15G97cnAn3VmvyFw5nvfgVXp1oe126ve"
      }
    },
    covert: {
      weap1: {
        name: "AK-47 | Vulcan BS",
        price: 11.01,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj8NrrHj1Rd6dd2j6fA9ImniQex_UQ_NT-nJtKRJgU3aFHY_Vm-ybrqjMO56Z3OnXE27HIq-z-DyAtSAyL7"
      },
      weap2: {
        name: "AK-47 | Vulcan WW",
        price: 21.90,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj5Nr_Yg2Zu5MRjjeyPoN6k0ATi8hJuZDqmLY7Ed1M7YVzY-Qe4xLzu1p68vc_BmiRjviQn7WGdwUJ150pPUQ"
      },
      weap3: {
        name: "AK-47 | Vulcan FT",
        price: 29.41,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj5Nr_Yg2Zu5MRjjeyPoN6k0ATi8hJuZDqmLY7Ed1M7YVzY-Qe4xLzu1p68vc_BmiRjviQn7WGdwUJ150pPUQ"
      },
      weap4: {
        name: "AK-47 | Vulcan MW",
        price: 50.69,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj4OrzZglRd6dd2j6eUrd-jiwfsr0BsYG6iIdeUJA8-Nw6EqVntyLrv15-4v5vOmiNr73Z2-z-DyAddTn8e"
      },
      weap5: {
        name: "AK-47 | Vulcan FN",
        price: 91.90,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj4OrzZglRd6dd2j6eUrd-jiwfsr0BsYG6iIdeUJA8-Nw6EqVntyLrv15-4v5vOmiNr73Z2-z-DyAddTn8e"
      },
      weap6: {
        name: "M4A4 | Desert-Strike BS",
        price: 2.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszceClD4s-im5KGqP_xMq3IqWdQ-sJ0xLiTpNqs2FC1-0ptajinJIGWdQA3YF7U-gS9le3q0Z6_vsuby3djvSE8pSGKPaDC5MU"
      },
      weap7: {
        name: "M4A4 | Desert-Strike WW",
        price: 3.71,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszceClD4s-im5KGqPrxN7LEm1Rd6dd2j6eS8Nzz2g23rkpqNjv1JdXGJAZqYA2D-VK7xO7u0ZPqvJucy3FrsiMh-z-DyGXDA0xQ"
      },
      weap8: {
        name: "M4A4 | Desert-Strike FT",
        price: 2.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszceClD4s-im5KGqPrxN7LEm1Rd6dd2j6eS8Nzz2g23rkpqNjv1JdXGJAZqYA2D-VK7xO7u0ZPqvJucy3FrsiMh-z-DyGXDA0xQ"
      },
      weap9: {
        name: "M4A4 | Desert-Strike MW",
        price: 4.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszceClD4s-im5KGqPv9NLPFqWdQ-sJ0xOiQo93zjgKxqkFvMj_xcI_HIFJtYQnX_1boxO_phsDtvcydwXUyuSA8pSGKJZ_JCy4"
      },
      weap10: {
        name: "M4A4 | Desert-Strike FN",
        price: 7.67,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszceClD4s-im5KGqPv9NLPFqWdQ-sJ0xOiQo93zjgKxqkFvMj_xcI_HIFJtYQnX_1boxO_phsDtvcydwXUyuSA8pSGKJZ_JCy4"
      }
    },
    stattrak: {
      weap1: {
        name: "StatTrak™ CZ75-Auto | Poison Dart BS",
        price: 1.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73fzRW_tOxkY60n_L1JaLummpD78A_3-iZodumigbj_UdkZWClJIfDcwFoZVjZrwXow7q70Me_upTNznIxuD5iuyh9jpWaLQ"
      },
      weap2: {
        name: "StatTrak™ CZ75-Auto | Poison Dart WW",
        price: 3.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73fzRW_tOxkY60mvLwOq7cqWdQ-sJ0xLvDrYmkjAKw8kc5MGrwcdORIwY-NV_UrFe_wOju15a86pTMzHU3vyc8pSGKwe5FTIQ"
      },
      weap3: {
        name: "StatTrak™ CZ75-Auto | Poison Dart FT",
        price: 1.08,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73fzRW_tOxkY60mvLwOq7cqWdQ-sJ0xLvDrYmkjAKw8kc5MGrwcdORIwY-NV_UrFe_wOju15a86pTMzHU3vyc8pSGKwe5FTIQ"
      },
      weap4: {
        name: "StatTrak™ CZ75-Auto | Poison Dart MW",
        price: 3.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73fzRW_tOxkY60m_7zO6_ummpD78A_j-iQ8d2ijgOx-xE9aj-iI4eUcABvZV6C-QPvyOe905S5tMmfnydhvz5iuyilCS70yQ"
      },
      weap5: {
        name: "StatTrak™ CZ75-Auto | Poison Dart FN",
        price: 8.75,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73fzRW_tOxkY60m_7zO6_ummpD78A_j-iQ8d2ijgOx-xE9aj-iI4eUcABvZV6C-QPvyOe905S5tMmfnydhvz5iuyilCS70yQ"
      },
      weap6: {
        name: "StatTrak™ P90 | Desert Warfare BS",
        price: 17.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJR79OkhImehMj8NrrHj1Rd6dd2j6fDodX32wTlr0ZtNmihI4DEcFc2ZFvXqQe8xObvg8K0tJ-anCBqvyJz-z-DyN9h6N77"
      },
      weap7: {
        name: "StatTrak™ P90 | Desert Warfare WW",
        price: 8.97,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJR79OkhImehMj5Nr_Yg2Zu5MRjjeyP8Ij02gLs_URpZ2mlIY_Deg5sYVnUrFS-kOi7hsC9u8yfnCE2viEhtmGdwUKos_0G4w"
      },
      weap8: {
        name: "StatTrak™ P90 | Desert Warfare FT",
        price: 3.94,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJR79OkhImehMj5Nr_Yg2Zu5MRjjeyP8Ij02gLs_URpZ2mlIY_Deg5sYVnUrFS-kOi7hsC9u8yfnCE2viEhtmGdwUKos_0G4w"
      },
      weap9: {
        name: "StatTrak™ P90 | Desert Warfare MW",
        price: 5.71,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJR79OkhImehMj4OrzZglRd6dd2j6eZ8933iway_RI6MG2mI9CcJFBsZgnU_1C8xOzrg5fquczInSRjvXF2-z-DyH3sCYTv"
      },
      weap10: {
        name: "StatTrak™ P90 | Desert Warfarew FN",
        price: 12.58,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJR79OkhImehMj4OrzZglRd6dd2j6eZ8933iway_RI6MG2mI9CcJFBsZgnU_1C8xOzrg5fquczInSRjvXF2-z-DyH3sCYTv"
      },
      weap11: {
        name: "StatTrak™ Galil AR | Kami BS",
        price: 0.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJF7dC_mL-Alvr9DLPUl31I18lwmO7Eu9-iiQfi8xVoYWn3IY-RJlc2NQ7R81C5wbjp1sO0vp3IySZruyAlt3fD30vgrSnMEfA"
      },
      weap12: {
        name: "StatTrak™ Galil AR | Kami WW",
        price: 0.74,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJF7dC_mL-Alvr9DLbUkmJE5fp9i_vG8ML231e2r0Q5Y2r7cNPEdAc3aV3Z_Qe4we_rjZ-1vpnOy3I1vyZ0sCnbgVXp1tUzHqtY"
      },
      weap13: {
        name: "StatTrak™ Galil AR | Kami FT",
        price: 0.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJF7dC_mL-Alvr9DLbUkmJE5fp9i_vG8ML231e2r0Q5Y2r7cNPEdAc3aV3Z_Qe4we_rjZ-1vpnOy3I1vyZ0sCnbgVXp1tUzHqtY"
      },
      weap14: {
        name: "StatTrak™ Galil AR | Kami MW",
        price: 0.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJF7dC_mL-Alvr9DLfYkWNF18lwmO7Eu4qk3wzn_EFtMWzwJY7AIwM_MwuC_Vm3wby5jMXovJ3BzSM16XQhsHzD30vg4zncSr4"
      },
      weap15: {
        name: "StatTrak™ Galil AR | Kami FN",
        price: 1.08,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczAaAJF7dC_mL-Alvr9DLfYkWNF18lwmO7Eu4qk3wzn_EFtMWzwJY7AIwM_MwuC_Vm3wby5jMXovJ3BzSM16XQhsHzD30vg4zncSr4"
      },
      weap16: {
        name: "StatTrak™ Dual Berettas | Retribution WW",
        price: 8.56,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YzhW_tW0gZSCmPnLPr7Vn35c18lwmO7Eu96i0VDh-0M9ZGHzI4fHdwJrYwqF-QW5lOvnhMfuvM7PyHpkvHIn5CrD30vguntjiLw"
      },
      weap17: {
        name: "StatTrak™ Dual Berettas | Retribution FT",
        price: 0.82,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YzhW_tW0gZSCmPnLPr7Vn35c18lwmO7Eu96i0VDh-0M9ZGHzI4fHdwJrYwqF-QW5lOvnhMfuvM7PyHpkvHIn5CrD30vguntjiLw"
      },
      weap18: {
        name: "StatTrak™ Dual Berettas | Retribution MW",
        price: 1.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YzhW_tW0gZSCmPnLP7LWnn9u5MRjjeyPrdmn31bg_hZvZ2nwLdSRd1JrMFGE-VG6k7zqjZ--7ZydySY2vyIk7WGdwUIoM_3ZlQ"
      },
      weap19: {
        name: "StatTrak™ Dual Berettas | Retribution FN",
        price: 2.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf0Ob3YzhW_tW0gZSCmPnLP7LWnn9u5MRjjeyPrdmn31bg_hZvZ2nwLdSRd1JrMFGE-VG6k7zqjZ--7ZydySY2vyIk7WGdwUIoM_3ZlQ"
      },
      weap20: {
        name: "StatTrak™ SSG 08 | Slashed BS",
        price: 0.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJnY2GmOXgMrfunm5Q_txOhujT8om7iwLm_kJtY23wd46XIwM9ZA6F-1K7kO3o1sC86ZmYyCQwuSAg53yJmQv330_2VnLwLg"
      },
      weap21: {
        name: "StatTrak™ SSG 08 | Slashed WW",
        price: 0.55,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJnY2GmOXgMrfum25V4dB8teXA54vwxgyxrhY9ZjymctLAcA42NV6BqQPql-vqgsfu75SayiNkvidw5X_Vy0epwUYb0EJFrhY"
      },
      weap22: {
        name: "StatTrak™ SSG 08 | Slashed FT",
        price: 0.66,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJnY2GmOXgMrfum25V4dB8teXA54vwxgyxrhY9ZjymctLAcA42NV6BqQPql-vqgsfu75SayiNkvidw5X_Vy0epwUYb0EJFrhY"
      },
      weap23: {
        name: "StatTrak™ Tec-9 | Isaac BS",
        price: 0.98,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b092lnYmGmOHLO77QgHJu5MRjjeyPrY6jiQOw-ERrNj30IIeXewVvMFqCqwDvk-6608PpucjMmiZrs3Rw7WGdwUJy6_wOcg"
      },
      weap24: {
        name: "StatTrak™ Tec-9 | Isaac WW",
        price: 1.08,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b092lnYmGmOHLPr7Vn35c18lwmO7Eu9ii3Vfhr0Foazj2I9CTJAVvaVGCrFLvyLu8gp_ttZ6dzSRiv3VwsX3D30vgmI_45mM"
      },
      weap25: {
        name: "StatTrak™ Tec-9 | Isaac FT",
        price: 1.64,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b092lnYmGmOHLPr7Vn35c18lwmO7Eu9ii3Vfhr0Foazj2I9CTJAVvaVGCrFLvyLu8gp_ttZ6dzSRiv3VwsX3D30vgmI_45mM"
      },
      weap26: {
        name: "StatTrak™ Tec-9 | Isaac MW",
        price: 2.96,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b092lnYmGmOHLP7LWnn9u5MRjjeyPrI2hjlbtqRE6ZT_zJYSVe1Q2NwzTrwfolLq-hMPp78uayCdm6ylz5mGdwUJXtvY84A"
      },
      weap27: {
        name: "StatTrak™ Tec-9 | Isaac FN",
        price: 12.46,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhjxszcdD4b092lnYmGmOHLP7LWnn9u5MRjjeyPrI2hjlbtqRE6ZT_zJYSVe1Q2NwzTrwfolLq-hMPp78uayCdm6ylz5mGdwUJXtvY84A"
      },
      weap28: {
        name: "StatTrak™ P2000 | Pulse BS",
        price: 0.41,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-bgvvnNoTZk2pH8fp9i_vG8ML02FDjqBY5YjzwJ9fAclQ2Ml7S-FLsleq9hpC86JrNmyAw6SAhtinfgVXp1iziYQWB"
      },
      weap29: {
        name: "StatTrak™ P2000 | Pulse WW",
        price: 0.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-bgvvnNoTck29Y_chOhujT8om7jAzt-0Fsaj2mJofDIQFrN1nR8ljrlO_s15LquJqcwHNqs3Iq5XrVnAv3308vMhSYAQ"
      },
      weap30: {
        name: "StatTrak™ P2000 | Pulse FT",
        price: 0.41,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-bgvvnNoTck29Y_chOhujT8om7jAzt-0Fsaj2mJofDIQFrN1nR8ljrlO_s15LquJqcwHNqs3Iq5XrVnAv3308vMhSYAQ"
      },
      weap31: {
        name: "StatTrak™ P2000 | Pulse MW",
        price: 0.89,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-bgvvnNoTdn2xZ_Pp9i_vG8ML03w2yqBU_N2z6JoaXdg87ZF_TqwPolbq8hMO7up_OmydluHImsH6OgVXp1hloYnQm"
      },
      weap32: {
        name: "StatTrak™ P2000 | Pulse FN",
        price: 1.69,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-bgvvnNoTdn2xZ_Pp9i_vG8ML03w2yqBU_N2z6JoaXdg87ZF_TqwPolbq8hMO7up_OmydluHImsH6OgVXp1hloYnQm"
      },
      weap33: {
        name: "StatTrak™ P90 | Module FT",
        price: 1.72,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZu7OHHaDxO7tCzkYS0mvLwOq7cqWdQ-sJ0xLnA89vw0Ve2rhY5ZG_0I9PHJwI3YQqE-AC3weq9jMS-ucvKyncyvXU8pSGKh8smwyY"
      },
      weap34: {
        name: "StatTrak™ P90 | Module MW",
        price: 1.84,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZu7OHHaDxO7tCzkYS0m_7zO6_ummpD78A_37HF846h0AHl8kNkN277d4WUJwQ-ZFzX_Va3wr_ph5a1vp7OynU36D5iuyj0A1mk7w"
      },
      weap35: {
        name: "StatTrak™ P90 | Module FN",
        price: 2.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAZu7OHHaDxO7tCzkYS0m_7zO6_ummpD78A_37HF846h0AHl8kNkN277d4WUJwQ-ZFzX_Va3wr_ph5a1vp7OynU36D5iuyj0A1mk7w"
      },
       weap36: {
        name: "StatTrak™ CZ75-Auto | Twist BS",
        price: 0.34,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73diRQ7cizq4iOluHtDLfQhGxUppN32rmTo4ij0QCxr0duNW71IdKXJwE6Zw2F_FXqxLvo1JLvvpXOnHN9-n51ofWLRk4"
      },
      weap37: {
        name: "StatTrak™ CZ75-Auto | Twist WW",
        price: 0.34,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73diRQ7cizq42Ok_7hPoTdl3lW7Yty3eqZpIii2ACy-xJvZmCmd4fGIQVrMw7Sr1Dvl-vr05C975zMwHBgpGB8soc4ZNbJ"
      },
      weap38: {
        name: "StatTrak™ CZ75-Auto | Twist FT",
        price: 0.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73diRQ7cizq42Ok_7hPoTdl3lW7Yty3eqZpIii2ACy-xJvZmCmd4fGIQVrMw7Sr1Dvl-vr05C975zMwHBgpGB8soc4ZNbJ"
      },
      weap39: {
        name: "StatTrak™ CZ75-Auto | Twist MW",
        price: 0.64,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73diRQ7cizq4yCkP_gDLfQhGxUppwhjLCWptqsiQPt_UppMm6lcNXHdAU9MFGD8wC3lOvp05S17Z3MnXd9-n51fgb0S08"
      },
      weap40: {
        name: "StatTrak™ CZ75-Auto | Twist FN",
        price: 2.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0v73diRQ7cizq4yCkP_gDLfQhGxUppwhjLCWptqsiQPt_UppMm6lcNXHdAU9MFGD8wC3lOvp05S17Z3MnXd9-n51fgb0S08"
      },
      weap41: {
        name: "StatTrak™ XM1014 | Heaven Guard BS",
        price: 3.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-DkvbiNrXukX5Q-sFOguzA45XKhFWmrBZyMmjwd9Cdew5qNF7S_AS_wOy9hMTpupjJy3dq7Cgi5XeLmBG-iEoebfsv26JPkskflg"
      },
      weap42: {
        name: "StatTrak™ XM1014 | Heaven Guard WW",
        price: 3.42,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-DkvbiNrXukX5Q-sFOh-zF_Jn4t1i1uRQ5fWj6ItXGIVBtMgyF_gPsxri51sTq6ZXNmiMwuyQqtH2MmkTlhk5LOLZxxavJwqJm74c"
      },
      weap43: {
        name: "StatTrak™ XM1014 | Heaven Guard FT",
        price: 2.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-DkvbiNrXukX5Q-sFOh-zF_Jn4t1i1uRQ5fWj6ItXGIVBtMgyF_gPsxri51sTq6ZXNmiMwuyQqtH2MmkTlhk5LOLZxxavJwqJm74c"
      },
      weap44: {
        name: "StatTrak™ XM1014 | Heaven Guard MW",
        price: 3.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-DkvbiNrXukX5Q-sFOhuDG_ZjKhFWmrBZyMG6lJ9Cdegc7N1GDqwC3w7q-1JPq6sjNyntjsigitn7bnxPhhUlEb_sv26LqmddafA"
      },
      weap45: {
        name: "StatTrak™ XM1014 | Heaven Guard FN",
        price: 8.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-DkvbiNrXukX5Q-sFOhuDG_ZjKhFWmrBZyMG6lJ9Cdegc7N1GDqwC3w7q-1JPq6sjNyntjsigitn7bnxPhhUlEb_sv26LqmddafA"
      },
      weap46: {
        name: "StatTrak™ MAC-10 | Curse BS",
        price: 7.36,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJkIWIlu7LO77QgHJu5MRjjeyP9NWnigXn_0s6a2ygdYbBelVvN13W_1K6k7u7hMW4uM7Pn3Iw63RxtmGdwULritFlUg"
      },
      weap47: {
        name: "StatTrak™ MAC-10 | Curse WW",
        price: 5.24,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJkIWIlu7LPr7Vn35c18lwmO7Eu9it2Q3mr0psaz-hdo6RIwM9YV7R81S3xefn08S-7sjAwCNrvCEn5i7D30vgFf0tycs"
      },
      weap48: {
        name: "StatTrak™ MAC-10 | Curse FT",
        price: 2.70,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJkIWIlu7LPr7Vn35c18lwmO7Eu9it2Q3mr0psaz-hdo6RIwM9YV7R81S3xefn08S-7sjAwCNrvCEn5i7D30vgFf0tycs"
      },
      weap49: {
        name: "StatTrak™ MAC-10 | Curse MW",
        price: 3.81,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJkIWIlu7LP7LWnn9u5MRjjeyP99ygjVLnqkZrNzrycICXI1NqZFGF81C3w-znjJe5upmcyiFquScisWGdwUL2MzpKtg"
      },
      weap50: {
        name: "StatTrak™ MAC-10 | Curse FN",
        price: 7.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJkIWIlu7LP7LWnn9u5MRjjeyP99ygjVLnqkZrNzrycICXI1NqZFGF81C3w-znjJe5upmcyiFquScisWGdwUL2MzpKtg"
      },
      weap51: {
        name: "StatTrak™ PP-Bizon | Antique BS",
        price: 3.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlY6fnubhNoTZk2pH8fp9i_vG8ML021Kx8kRuN2j2ctOWcFc_NAzX_FW9wu7qhZC9uZXPy3Bi6CYn7XvZgVXp1iiYkPnz"
      },
      weap52: {
        name: "StatTrak™ PP-Bizon | Antique WW",
        price: 3.41,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlY6fnubhNoTck29Y_chOhujT8om7ig3nrUU6YTzzdtOVdlA8MlqB8lnqx7vog8S_tJ_OwHY3uSInsy7enwv3309qmZ180A"
      },
      weap53: {
        name: "StatTrak™ PP-Bizon | Antique FT",
        price: 2.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlY6fnubhNoTck29Y_chOhujT8om7ig3nrUU6YTzzdtOVdlA8MlqB8lnqx7vog8S_tJ_OwHY3uSInsy7enwv3309qmZ180A"
      },
      weap54: {
        name: "StatTrak™ PP-Bizon | Antique MW",
        price: 3.19,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlY6fnubhNoTdn2xZ_Pp9i_vG8MKl3gDi_EJrZmzyJY-SdFJvNFzS-1jryL29h8DvtMyby3I37CB343regVXp1phXL_vD"
      },
      weap55: {
        name: "StatTrak™ PP-Bizon | Antique FN",
        price: 5.61,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49KJlY6fnubhNoTdn2xZ_Pp9i_vG8MKl3gDi_EJrZmzyJY-SdFJvNFzS-1jryL29h8DvtMyby3I37CB343regVXp1phXL_vD"
      },
      weap56: {
        name: "StatTrak™ AUG | Torque BS",
        price: 2.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJS_tOxhoWYhP7iDLPUl31I18lwmO7Eu4-jiga3rRFlZzygcobGdAQ3YFGB_lntwe7tgMO76cicynFjuyMl4i3D30vg7wzx9mk"
      },
      weap57: {
        name: "StatTrak™ AUG | Torque WW",
        price: 2.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJS_tOxhoWYhP7iDLbUkmJE5fp9i_vG8MKh2w3i-BY6az31LIWTdwRoYAvT81K7wO-51JTtupqcnHVqsyl24X-IgVXp1thL5cUB"
      },
      weap58: {
        name: "StatTrak™ AUG | Torque FT",
        price: 2.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJS_tOxhoWYhP7iDLbUkmJE5fp9i_vG8MKh2w3i-BY6az31LIWTdwRoYAvT81K7wO-51JTtupqcnHVqsyl24X-IgVXp1thL5cUB"
      },
      weap59: {
        name: "StatTrak™ AUG | Torque MW",
        price: 3.69,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJS_tOxhoWYhP7iDLfYkWNF18lwmO7Eu4qi2Qa2qhVlYWzwdtKWdwFtZlmB-1S8xLq-1pO96Z7Jy3tr6Skn5nrD30vgYhMJ-CM"
      },
      weap60: {
        name: "StatTrak™ AUG | Torque FN",
        price: 5.88,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLddgJS_tOxhoWYhP7iDLfYkWNF18lwmO7Eu4qi2Qa2qhVlYWzwdtKWdwFtZlmB-1S8xLq-1pO96Z7Jy3tr6Skn5nrD30vgYhMJ-CM"
      },
      weap61: {
        name: "StatTrak™ MAC-10 | Tatter BS",
        price: 3.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3ejJQ-cyiq4iOluHtDLfQhGxUppUo3euQ84ms2AO2-RU4NWmmJtecewdsZQqB-wS3lbjrjcC0vszAyid9-n51cjKl1n4"
      },
      weap62: {
        name: "StatTrak™ MAC-10 | Tatter WW",
        price: 3.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3ejJQ-cyiq42Ok_7hPoTdl3lW7Yt0i7mVpoit0AC3r0tuZ23zd4DAewM6MlyFr1C-xb_s1pW5u8uYzSRhpGB8si0rxcEY"
      },
      weap63: {
        name: "StatTrak™ MAC-10 | Tatter FT",
        price: 2.46,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3ejJQ-cyiq42Ok_7hPoTdl3lW7Yt0i7mVpoit0AC3r0tuZ23zd4DAewM6MlyFr1C-xb_s1pW5u8uYzSRhpGB8si0rxcEY"
      },
      weap64: {
        name: "StatTrak™ MAC-10 | Tatter MW",
        price: 3.35,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3ejJQ-cyiq4yCkP_gDLfQhGxUpsMg2u2Yodukiwzm_RduZmrzctTGIFU2YQzW_wS9wb3qhpTtuZWbzHV9-n51t0WMl9E"
      },
      weap65: {
        name: "StatTrak™ MAC-10 | Tatter FN",
        price: 4.56,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3ejJQ-cyiq4yCkP_gDLfQhGxUpsMg2u2Yodukiwzm_RduZmrzctTGIFU2YQzW_wS9wb3qhpTtuZWbzHV9-n51t0WMl9E"
      },
      weap66: {
        name: "StatTrak™ USP-S | Orion BS",
        price: 175.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnI7LFkGJD7fp5j-jX7LP5iUazrl1uZW_6JYaScgNoZQnQ8gLtyejq18Pp6p7LziE2vXV04n7eyUHmiEpPcKUx0sanq5CH"
      },
      weap67: {
        name: "StatTrak™ USP-S | Orion WW",
        price: 64.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnI7LFkGJD7fp8j-3I4IHKhFWmrBZyZG_3JIKQJwc4Ml2G_VHowL_phZfpusyfnHpq6XMity3ayUHkgx1Ib_sv26LJu2So0g"
      },
      weap68: {
        name: "StatTrak™ USP-S | Orion FT",
        price: 38.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnI7LFkGJD7fp8j-3I4IHKhFWmrBZyZG_3JIKQJwc4Ml2G_VHowL_phZfpusyfnHpq6XMity3ayUHkgx1Ib_sv26LJu2So0g"
      },
      weap69: {
        name: "StatTrak™ USP-S | Orion MW",
        price: 49.02,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnI7LFkGJD7fp9g-7J4bP5iUazrl1ka2qhLIGSIw5vZF-D8wXqwO_tjcC-uZjJnSY3vCkmsXbYlkO0gB1McKUx0vNO72r1"
      },
      weap70: {
        name: "StatTrak™ USP-S | Orion FN",
        price: 75.18,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnI7LFkGJD7fp9g-7J4bP5iUazrl1ka2qhLIGSIw5vZF-D8wXqwO_tjcC-uZjJnSY3vCkmsXbYlkO0gB1McKUx0vNO72r1"
      },
      weap71: {
        name: "StatTrak™ SCAR-20 | Cyrex BS",
        price: 8.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c6Jl5mZku_LO77QgHJu5MRjjeyPo9-siw23_EFvZm6nddCUdQRsaV7T_lDsx-zq157ptZ6YnXpr6ycit2GdwULpMU75RQ"
      },
      weap72: {
        name: "StatTrak™ SCAR-20 | Cyrex WW",
        price: 16.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c6Jl5mZku_LPr7Vn35c18lwmO7Eu4rz2gLtrkE5ZGH0doHBdQU_YlHTrAO7yebs08O8vMnLwCBjs3Fx5XzD30vgG8tICKs"
      },
      weap73: {
        name: "StatTrak™ SCAR-20 | Cyrex FT",
        price: 10.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c6Jl5mZku_LPr7Vn35c18lwmO7Eu4rz2gLtrkE5ZGH0doHBdQU_YlHTrAO7yebs08O8vMnLwCBjs3Fx5XzD30vgG8tICKs"
      },
      weap74: {
        name: "StatTrak™ SCAR-20 | Cyrex MW",
        price: 16.96,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c6Jl5mZku_LP7LWnn9u5MRjjeyP8ImhjFXl-BZuN273cIbDJgdoNQqBq1now72-gZ_p7pyaziRj63NxtGGdwULm7JPnpA"
      },
      weap75: {
        name: "StatTrak™ SCAR-20 | Cyrex FN",
        price: 31.93,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c6Jl5mZku_LP7LWnn9u5MRjjeyP8ImhjFXl-BZuN273cIbDJgdoNQqBq1now72-gZ_p7pyaziRj63NxtGGdwULm7JPnpA"
      },
      weap76: {
        name: "StatTrak™ M4A1-S | Atomic Alloy BS",
        price: 10.72,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alfqjul2dd59xOhfvA-4vwt1yxqgUlDDWiZtHAbAI7Ml3Sq1K_lObt1JO56MjInCM3vSQm4y6JnBDigREZa7FujaabSA2AR_sezK0iUac"
      },
      weap77: {
        name: "StatTrak™ M4A1-S | Atomic Alloy WW",
        price: 11.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alfqjul2dd59xOhfvA-4vwt1mxrxopPgavdcTCJxg8Z12F-lO6lby51JS47ZzJwXJn7ih27H2OzEbl1UxEauw51PPISwiWGeUXS05UIj81"
      },
      weap78: {
        name: "StatTrak™ M4A1-S | Atomic Alloy FT",
        price: 11.68,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alfqjul2dd59xOhfvA-4vwt1mxrxopPgavdcTCJxg8Z12F-lO6lby51JS47ZzJwXJn7ih27H2OzEbl1UxEauw51PPISwiWGeUXS05UIj81"
      },
      weap79: {
        name: "StatTrak™ M4A1-S | Atomic Alloy MW",
        price: 24.76,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alfqjul2dd59xOhfvA-4vwt1i9rBsoDDWiZtHAbA48MwzS_VPqwezqg8C9u8ibwXRjuClz7SvcmxS20hwZa7c5h6fNQA-AR_seVEiZW-4"
      },
      weap80: {
        name: "StatTrak™ M4A1-S | Atomic Alloy FN",
        price: 50.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alfqjul2dd59xOhfvA-4vwt1i9rBsoDDWiZtHAbA48MwzS_VPqwezqg8C9u8ibwXRjuClz7SvcmxS20hwZa7c5h6fNQA-AR_seVEiZW-4"
      },
      weap81: {
        name: "StatTrak™ USP-S | Caiman WW",
        price: 14.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq4uKnvr1PYTck29Y_chOhujT8om72Ay2_ENuY26ncoDBd1I_MlCBrgW5ye_u1sC_vJ6YyXtgsiYh7HnUywv330-jy4MGQg"
      },
      weap82: {
        name: "StatTrak™ USP-S | Caiman FT",
        price: 11.40,

        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq4uKnvr1PYTck29Y_chOhujT8om72Ay2_ENuY26ncoDBd1I_MlCBrgW5ye_u1sC_vJ6YyXtgsiYh7HnUywv330-jy4MGQg"
      },
      weap83: {
        name: "StatTrak™ USP-S | Caiman MW",
        price: 18.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq4uKnvr1PYTdn2xZ_Pp9i_vG8MKtjVDl_UtoZGGmJ4aTIFI9aVqB81Hvl7zu15G97cnAn3VmvyFw5nvfgVXp1oe126ve"
      },
      weap84: {

        name: "StatTrak™ USP-S | Caiman FN",
        price: 24.51,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq4uKnvr1PYTdn2xZ_Pp9i_vG8MKtjVDl_UtoZGGmJ4aTIFI9aVqB81Hvl7zu15G97cnAn3VmvyFw5nvfgVXp1oe126ve"
      },
      weap85: {
        name: "StatTrak™ AK-47 | Vulcan BS",
        price: 45.33,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj8NrrHj1Rd6dd2j6fA9ImniQex_UQ_NT-nJtKRJgU3aFHY_Vm-ybrqjMO56Z3OnXE27HIq-z-DyAtSAyL7"
      },
      weap86: {
        name: "StatTrak™ AK-47 | Vulcan WW",
        price: 73.60,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj5Nr_Yg2Zu5MRjjeyPoN6k0ATi8hJuZDqmLY7Ed1M7YVzY-Qe4xLzu1p68vc_BmiRjviQn7WGdwUJ150pPUQ"
      },
      weap87: {
        name: "StatTrak™ AK-47 | Vulcan FT",
        price: 103.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj5Nr_Yg2Zu5MRjjeyPoN6k0ATi8hJuZDqmLY7Ed1M7YVzY-Qe4xLzu1p68vc_BmiRjviQn7WGdwUJ150pPUQ"
      },
      weap88: {
        name: "StatTrak™ AK-47 | Vulcan MW",
        price: 252.54,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj4OrzZglRd6dd2j6eUrd-jiwfsr0BsYG6iIdeUJA8-Nw6EqVntyLrv15-4v5vOmiNr73Z2-z-DyAddTn8e"
      },
      weap89: {
        name: "StatTrak™ AK-47 | Vulcan FN",
        price: 406.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV086jloKOhcj4OrzZglRd6dd2j6eUrd-jiwfsr0BsYG6iIdeUJA8-Nw6EqVntyLrv15-4v5vOmiNr73Z2-z-DyAddTn8e"
      },
      weap90: {
        name: "StatTrak™ M4A4 | Desert-Strike BS",
        price: 11.36,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszceClD4s-im5KGqP_xMq3IqWdQ-sJ0xLiTpNqs2FC1-0ptajinJIGWdQA3YF7U-gS9le3q0Z6_vsuby3djvSE8pSGKPaDC5MU"
      },
      weap91: {
        name: "StatTrak™ M4A4 | Desert-Strike WW",
        price: 13.52,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszceClD4s-im5KGqPrxN7LEm1Rd6dd2j6eS8Nzz2g23rkpqNjv1JdXGJAZqYA2D-VK7xO7u0ZPqvJucy3FrsiMh-z-DyGXDA0xQ"
      },
      weap92: {
        name: "StatTrak™ M4A4 | Desert-Strike FT",
        price: 11.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszceClD4s-im5KGqPrxN7LEm1Rd6dd2j6eS8Nzz2g23rkpqNjv1JdXGJAZqYA2D-VK7xO7u0ZPqvJucy3FrsiMh-z-DyGXDA0xQ"
      },
      weap93: {
        name: "StatTrak™ M4A4 | Desert-Strike MW",
        price: 24.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszceClD4s-im5KGqPv9NLPFqWdQ-sJ0xOiQo93zjgKxqkFvMj_xcI_HIFJtYQnX_1boxO_phsDtvcydwXUyuSA8pSGKJZ_JCy4"
      },
      weap94: {
        name: "StatTrak™ M4A4 | Desert-Strike FN",
        price: 45.44,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszceClD4s-im5KGqPv9NLPFqWdQ-sJ0xOiQo93zjgKxqkFvMj_xcI_HIFJtYQnX_1boxO_phsDtvcydwXUyuSA8pSGKJZ_JCy4"
      }
	}
  },
//Breakout
 case10: {
    milspec: {
      weap1: {
        name: "P2000 | Ivory BS",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-CgfjmKoTZk2pH8fp9i_vG8MKtjgPj-hVua2D3ddfBdA5sMw7Y-VS9l7u7hcLpvpuazXVru3Yn7HjagVXp1kgdU3rL"
      },
      weap2: {
        name: "P2000 | Ivory WW",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-CgfjmKoTck29Y_chOhujT8om7jFXk-0NkZWyld4ORI1dqYFjR_Va-ybjo1Ja9vsyay3tm7ygj5nyMmAv330_BeLk7Mw"
      },
      weap3: {
        name: "P2000 | Ivory FT",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-CgfjmKoTck29Y_chOhujT8om7jFXk-0NkZWyld4ORI1dqYFjR_Va-ybjo1Ja9vsyay3tm7ygj5nyMmAv330_BeLk7Mw"
      },
      weap4: {
        name: "P2000 | Ivory MW",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-CgfjmKoTdn2xZ_Pp9i_vG8MKniQDjqUJoMWz6d9OSewA3ZF7Z_1ntlO_s1sS6vJvIznNnsnYl4n7cgVXp1hW8xnMi"
      },
      weap5: {
        name: "P2000 | Ivory FN",
        price: 0.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-CgfjmKoTdn2xZ_Pp9i_vG8MKniQDjqUJoMWz6d9OSewA3ZF7Z_1ntlO_s1sS6vJvIznNnsnYl4n7cgVXp1hW8xnMi"
      },
      weap6: {
        name: "UMP-45 | Labyrinth WW",
        price: 0.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf2-r3fTRM6c-Jm5KKmfDxDLbUkmJE5fp9i_vG8MKg2QKx-kZoa2-nIYPHdg89aVvYrlPqyOfr1JS96s_NmyZgvXZ2sH7fgVXp1rJtpB3E"
      },
      weap7: {
        name: "UMP-45 | Labyrinth FT",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf2-r3fTRM6c-Jm5KKmfDxDLbUkmJE5fp9i_vG8MKg2QKx-kZoa2-nIYPHdg89aVvYrlPqyOfr1JS96s_NmyZgvXZ2sH7fgVXp1rJtpB3E"
      },
      weap8: {
        name: "UMP-45 | Labyrinth MW",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf2-r3fTRM6c-Jm5KKmfDxDLfYkWNF18lwmO7Eu4il2ACxqkBkamvwItOTJFc7NQnSrFG7xOu-15Puv5rLyiA37CMksX7D30vgPsEAAE0"
      },
      weap9: {
        name: "UMP-45 | Labyrinth FN",
        price: 0.14,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf2-r3fTRM6c-Jm5KKmfDxDLfYkWNF18lwmO7Eu4il2ACxqkBkamvwItOTJFc7NQnSrFG7xOu-15Puv5rLyiA37CMksX7D30vgPsEAAE0"
      },
      weap10: {
        name: "SSG 08 | Abyss BS",
        price: 0.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0uL3fThU5d2inIGFqP_xMq3IqWdQ-sJ0xLqY8NWjjgS3-RBrZjymLYSVIQM5M1iF8wPqxO3vgsW1upXOySNi6HE8pSGKPeOLXZ4"
      },
      weap11: {
        name: "SSG 08 | Abyss WW",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0uL3fThU5d2inIGFqPrxN7LEm1Rd6dd2j6fH89vx2AWx_kU_MW3xI4OTIFI9YQnQ8le5yb_sgpC_6pyYySNn63Qq-z-DyBlPi8P9"
      },
      weap12: {
        name: "SSG 08 | Abyss FT",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0uL3fThU5d2inIGFqPrxN7LEm1Rd6dd2j6fH89vx2AWx_kU_MW3xI4OTIFI9YQnQ8le5yb_sgpC_6pyYySNn63Qq-z-DyBlPi8P9"
      },
      weap13: {
        name: "SSG 08 | Abyss MW",
        price: 0.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0uL3fThU5d2inIGFqPv9NLPFqWdQ-sJ0xLnFpY_w3AbhqUZvZG31IITBclI_NwqGrlHtwbu8g5W46c_BzHVj7HI8pSGKxJE1QGE"
      },
      weap14: {
        name: "SSG 08 | Abyss FN",
        price: 0.98,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0uL3fThU5d2inIGFqPv9NLPFqWdQ-sJ0xLnFpY_w3AbhqUZvZG31IITBclI_NwqGrlHtwbu8g5W46c_BzHVj7HI8pSGKxJE1QGE"
      },
      weap15: {
        name: "Negev | Desert-Strike BS",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJgImflvnnJ7TDm1RZ7cRnk9bN9J7yjRq3qkU-Mjj7I9TGdwVqZ1vR8gW-lOzqgsK4vprAmHdi7CN37S3cmhDin1gSOVfG3Ch-"
      },
      weap16: {
        name: "Negev | Desert-Strike WW",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJgImflvnnJ7TDm1Rc7cF4n-T--Y3nj1H6_EE6N26hLNWcIQ87aQzU_QK7xenug568ucjPyHZkuSYq4XzVyhezggYMMLJUFmgT1g"
      },
      weap17: {
        name: "Negev | Desert-Strike FT",
        price: 0.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJgImflvnnJ7TDm1Rc7cF4n-T--Y3nj1H6_EE6N26hLNWcIQ87aQzU_QK7xenug568ucjPyHZkuSYq4XzVyhezggYMMLJUFmgT1g"
      },
      weap18: {
        name: "Negev | Desert-Strike MW",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJgImflvnnJ7TDm1Rd4cJ5ntbN9J7yjRqxqUQ-Mj2gI4PAIVRsYArUqQXowuu908S5v53BwXVgu3JwsH7czEe3n1gSOTH2kiU7"
      },
      weap19: {
        name: "Negev | Desert-Strike FN",
        price: 0.14,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJgImflvnnJ7TDm1Rd4cJ5ntbN9J7yjRqxqUQ-Mj2gI4PAIVRsYArUqQXowuu908S5v53BwXVgu3JwsH7czEe3n1gSOTH2kiU7"
      },
      weap20: {
        name: "MP7 | Urban Hazard BS",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJnBB49G7lY6PkuXLO77QgHJu5MRjjeyPoNis2wax_hFlYmH6coSccQU7aFGB_1a2kO6705a_vZzMnXFj6HIq5GGdwULqE3dGWg"
      },
      weap21: {
        name: "MP7 | Urban Hazard WW",
        price: 0.13,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJnBB49G7lY6PkuXLPr7Vn35c18lwmO7Eu9333AOx_hA4ZGmnLYPHIFA9MF_UrFC9xuzt1JK7u5nAynA2unZ253_D30vg60XbqNw"
      },
      weap22: {
        name: "MP7 | Urban Hazard FT",
        price: 0.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJnBB49G7lY6PkuXLPr7Vn35c18lwmO7Eu9333AOx_hA4ZGmnLYPHIFA9MF_UrFC9xuzt1JK7u5nAynA2unZ253_D30vg60XbqNw"
      },
      weap23: {
        name: "MP7 | Urban Hazard MW",
        price: 0.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJnBB49G7lY6PkuXLP7LWnn9u5MRjjeyPp9qljAey-URqZjr7J9CSd1NvNQmD_wDslei605K9tJqcmHAwuCAq7GGdwUJMw04E0g"
      },
      weap24: {
        name: "MP7 | Urban Hazard FN",
        price: 0.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJnBB49G7lY6PkuXLP7LWnn9u5MRjjeyPp9qljAey-URqZjr7J9CSd1NvNQmD_wDslei605K9tJqcmHAwuCAq7GGdwUJMw04E0g"
      }
    },
    restricted: {
      weap1: {
        name: "CZ75-Auto | Tigris BS",
        price: 0.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cmoX7ZGinYeOhcj8NrrHj1Rd6dd2j6eZpo-g31Lk8xdpajrxJYTHcwJoYFzZ_VW8xLrngsPvuc7My3NhuSBz-z-DyOxvVBQJ"
      },
      weap2: {
        name: "CZ75-Auto | Tigris WW",
        price: 0.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cmoX7ZGinYeOhcj5Nr_Yg2Zu5MRjjeyP84iniwHt-hFlYWn6doLAewA7MgrR8la2xbjqhcO7ucvInHdiuCcmtGGdwUJmeETkpg"
      },
      weap3: {
        name: "CZ75-Auto | Tigris FT",
        price: 0.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cmoX7ZGinYeOhcj5Nr_Yg2Zu5MRjjeyP84iniwHt-hFlYWn6doLAewA7MgrR8la2xbjqhcO7ucvInHdiuCcmtGGdwUJmeETkpg"
      },
      weap4: {
        name: "CZ75-Auto | Tigris MW",
        price: 0.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cmoX7ZGinYeOhcj4OrzZglRd6dd2j6fDotmhigG1_EA_az_xdoSVdQ86Yw2C-lW4lLi718K478ydnHJnvyEh-z-DyLbrTs61"
      },
      weap5: {
        name: "CZ75-Auto | Tigris FN",
        price: 1.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cmoX7ZGinYeOhcj4OrzZglRd6dd2j6fDotmhigG1_EA_az_xdoSVdQ86Yw2C-lW4lLi718K478ydnHJnvyEh-z-DyLbrTs61"
      },
      weap6: {
        name: "PP-Bizon | Osiris BS",
        price: 0.36,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49L7m5OChf7nDLPUl31I18lwmO7Eu4mk0AHtqkRrajjycYWWJFM8Y1vV_VC_leztgMW86prPyyNiu3Yn5XjD30vg8ZyZ_t8"
      },
      weap7: {
        name: "PP-Bizon | Osiris WW",
        price: 0.36,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49L7m5OChf7nDLbUkmJE5fp9i_vG8MLwjFHj-BBsYjzwJY6UcA44YgmGrlK_xui608S17sydwHJquSUhsHjfgVXp1sfD3kj2"
      },
      weap8: {
        name: "PP-Bizon | Osiris FT",
        price: 0.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49L7m5OChf7nDLbUkmJE5fp9i_vG8MLwjFHj-BBsYjzwJY6UcA44YgmGrlK_xui608S17sydwHJquSUhsHjfgVXp1sfD3kj2"
      },
      weap9: {
        name: "PP-Bizon | Osiris MW",
        price: 0.38,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49L7m5OChf7nDLfYkWNF18lwmO7Eu96j0VHk-BZtMj32LY7HdQBvNQrY8lW5weq8gcC4tMnOy3cx73InsyzD30vgnRlvh20"
      },
      weap10: {
        name: "PP-Bizon | Osiris FN",
        price: 0.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49L7m5OChf7nDLfYkWNF18lwmO7Eu96j0VHk-BZtMj32LY7HdQBvNQrY8lW5weq8gcC4tMnOy3cx73InsyzD30vgnRlvh20"
      },
      weap11: {
        name: "P250 | Supernova WW",
        price: 0.60,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszKeClW6c6lg4WOg8j5Nr_Yg2Zu5MRjjeyPo9ikjAzmqEY5Nj_wJ9LGdgY-ZFuD_QDvw-3ohcfq78nNmyc37ycl42GdwUJyKz5d2A"
      },
      weap12: {
        name: "P250 | Supernova FT",
        price: 0.32,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszKeClW6c6lg4WOg8j5Nr_Yg2Zu5MRjjeyPo9ikjAzmqEY5Nj_wJ9LGdgY-ZFuD_QDvw-3ohcfq78nNmyc37ycl42GdwUJyKz5d2A"
      },
      weap13: {
        name: "P250 | Supernova MW",
        price: 0.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszKeClW6c6lg4WOg8j4OrzZglRd6dd2j6eZpo_x3Azt_Us4ZGD3JYTAclVoY1rT-QO2lO_ng5a-6svLzntj63Qm-z-DyIPWN4xl"
      },
      weap14: {
        name: "P250 | Supernova FN",
        price: 0.54,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszKeClW6c6lg4WOg8j4OrzZglRd6dd2j6eZpo_x3Azt_Us4ZGD3JYTAclVoY1rT-QO2lO_ng5a-6svLzntj63Qm-z-DyIPWN4xl"
      },
      weap15: {
        name: "Nova | Koi FT",
        price: 0.35,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD09e5nb-GkvP9JrbummpD78A_jriZo96g0Ae2rxVkMWj3JYCTdlc-aAzZ-FTok-fsg5XuvpjAznZi6T5iuyi6fwMUbw"
      },
      weap16: {
        name: "Nova | Koi MW",
        price: 0.36,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD09e5nb-HnvD8J4Tdl3lW7Ysj0uqS84ml21Lj-EU-Z2GncdOUclM_NFDYr1a5kL3vh5e_vsmamyNlpGB8skdEpA34"
      },
      weap17: {
        name: "Nova | Koi FN",
        price: 0.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD09e5nb-HnvD8J4Tdl3lW7Ysj0uqS84ml21Lj-EU-Z2GncdOUclM_NFDYr1a5kL3vh5e_vsmamyNlpGB8skdEpA34"
      }
    },
    classified: {
      weap1: {
        name: "Glock-18 | Water Elemental BS",
        price: 2.64,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79f7mImagvLnML7fglRZ7cRnk9bN9J7yjRrkrkNqY2H6JoCTJw44NFzQ-1DqxOm8gp7vus_MznQ3uiAmsXiMzUbln1gSOYiYVsoU"
      },
      weap2: {
        name: "Glock-18 | Water Elemental WW",
        price: 4.05,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79f7mImagvLnML7fglRc7cF4n-T--Y3nj1H68kVvYTvzJYacIA42MFHW-QLtl7vr0ZS_vpiYm3pi7HYl5CrUy0a00AYMMLI3Fd_03w"
      },
      weap3: {
        name: "Glock-18 | Water Elemental FT",
        price: 3.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79f7mImagvLnML7fglRc7cF4n-T--Y3nj1H68kVvYTvzJYacIA42MFHW-QLtl7vr0ZS_vpiYm3pi7HYl5CrUy0a00AYMMLI3Fd_03w"
      },
      weap4: {
        name: "Glock-18 | Water Elemental MW",
        price: 4.55,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79f7mImagvLnML7fglRd4cJ5ntbN9J7yjRrl_kI5amz3cdKRI1NoY1CDqQK7xLrv1se47pnKmHU3syYm4SnemUTkn1gSOYPIEaei"
      },
      weap5: {
        name: "Glock-18 | Water Elemental FN",
        price: 7.67,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79f7mImagvLnML7fglRd4cJ5ntbN9J7yjRrl_kI5amz3cdKRI1NoY1CDqQK7xLrv1se47pnKmHU3syYm4SnemUTkn1gSOYPIEaei"
      },
      weap6: {
        name: "Five-SeveN | Fowl Play BS",
        price: 1.44,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT04nhq4aOluP8NqnCqWNU6dNoteXA54vwxgzn8kpqa2GnI4KXIVc7Y1iG_QC3lebnjMTtupqdyXdjv3RzsHuIl0GpwUYbL2mmrRM"
      },
      weap7: {
        name: "Five-SeveN | Fowl Play WW",
        price: 1.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT04nhq4aOluP8NqnCqWZU7Mxkh9bN9J7yjRq2qENkMG2nIdecJgM_NV3UqVLowLq-hMC_tZ3IyiE2uHV2433dnRXkn1gSOeOa4gmP"
      },
      weap8: {
        name: "Five-SeveN | Fowl Play FT",
        price: 1.54,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT04nhq4aOluP8NqnCqWZU7Mxkh9bN9J7yjRq2qENkMG2nIdecJgM_NV3UqVLowLq-hMC_tZ3IyiE2uHV2433dnRXkn1gSOeOa4gmP"
      },
      weap9: {
        name: "Five-SeveN | Fowl Play MW",
        price: 2.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT04nhq4aOluP8NqnCqWdY781lteXA54vwxlW18kduNWv7cIPDJg44aV7U-QO7xby-hcW_vZrOyXE3snIk5HramhGpwUYbC9vqejU"
      },
      weap10: {
        name: "Five-SeveN | Fowl Play FN",
        price: 3.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT04nhq4aOluP8NqnCqWdY781lteXA54vwxlW18kduNWv7cIPDJg44aV7U-QO7xby-hcW_vZrOyXE3snIk5HramhGpwUYbC9vqejU"
      },
      weap11: {
        name: "Desert Eagle | Conspiracy FT",
        price: 2.26,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7du6kb-KguXxJqjum25V4dB8teXA54vwxgDmqUZtNT_3doSTJA8_YFDZ_wfvku3sgJHvvcvPzyM36SFz43vey0GpwUYb3bhCDDk"
      },
      weap12: {
        name: "Desert Eagle | Conspiracy MW",
        price: 2.18,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7du6kb-KguXxJqjummJW4NFOhujT8om731K1_EVsZm6gdoaQJARtMArY-FjslOrrjcC9vp2YnHdnuicj4Cvdygv3308GE_1AfA"
      },
      weap13: {
        name: "Desert Eagle | Conspiracy FN",
        price: 2.88,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7du6kb-KguXxJqjummJW4NFOhujT8om731K1_EVsZm6gdoaQJARtMArY-FjslOrrjcC9vp2YnHdnuicj4Cvdygv3308GE_1AfA"
      }
    },
    covert: {
      weap1: {
        name: "P90 | Asiimov BS",
        price: 4.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqP_xMq3IqWdQ-sJ0xLvEpNugjQTm80BvZ2_0doTAdFBraFCE8lnoyers15PptZjMyiEyuCQ8pSGKT1_PUsY"
      },
      weap2: {
        name: "P90 | Asiimov WW",
        price: 6.44,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqPrxN7LEm1Rd6dd2j6eV8Yijilfi-xJoMGv7LI7Hd1Q4Y1HV-VS8lOnmjJXvu87MzHsyv3Nw-z-DyMkIAv9h"
      },
      weap3: {
        name: "P90 | Asiimov FT",
        price: 6.56,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqPrxN7LEm1Rd6dd2j6eV8Yijilfi-xJoMGv7LI7Hd1Q4Y1HV-VS8lOnmjJXvu87MzHsyv3Nw-z-DyMkIAv9h"
      },
      weap4: {
        name: "P90 | Asiimov MW",
        price: 11.81,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqPv9NLPFqWdQ-sJ0xLnC9Nvz31K3-0BuMGD7d4PGIQM-ZwuDrgS3w7zshsO5tJ7PmHoysig8pSGKpkWB0BI"
      },
      weap5: {
        name: "P90 | Asiimov FN",
        price: 23.38,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqPv9NLPFqWdQ-sJ0xLnC9Nvz31K3-0BuMGD7d4PGIQM-ZwuDrgS3w7zshsO5tJ7PmHoysig8pSGKpkWB0BI"
      },
      weap6: {
        name: "M4A1-S | Cyrex BS",
        price: 8.67,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp5j-jX7LP5iUazrl1uMG_1dYHDdQY-Zl3Xq1m_yey7gMS9uZ3JwCFruSh3tHbYmUO21xtMcKUx0jge81b4"
      },
      weap7: {
        name: "M4A1-S | Cyrex WW",
        price: 11.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp8j-3I4IHKhFWmrBZyYDz2IobGcwdoYFCG8lW4l7jnjMC6vZybyHVk7CEjtHaMyh20iBsdbfsv26IzXLrUVA"
      },
      weap8: {
        name: "M4A1-S | Cyrex FT",
        price: 11.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp8j-3I4IHKhFWmrBZyYDz2IobGcwdoYFCG8lW4l7jnjMC6vZybyHVk7CEjtHaMyh20iBsdbfsv26IzXLrUVA"
      },
      weap9: {
        name: "M4A1-S | Cyrex MW",
        price: 15.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp9g-7J4bP5iUazrl1tZ22hIIaQcVNsZluC_gC6xrjnhJS06c-bySdruih27Srfl0Oy0xEfcKUx0knZQYH9"
      },
      weap10: {
        name: "M4A1-S | Cyrex FN",
        price: 18.75,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp9g-7J4bP5iUazrl1tZ22hIIaQcVNsZluC_gC6xrjnhJS06c-bySdruih27Srfl0Oy0xEfcKUx0knZQYH9"
      }
    },
    stattrak: {
      weap1: {
        name: "StatTrak™ P2000 | Ivory BS",
        price: 0.26,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-CgfjmKoTZk2pH8fp9i_vG8MKtjgPj-hVua2D3ddfBdA5sMw7Y-VS9l7u7hcLpvpuazXVru3Yn7HjagVXp1kgdU3rL"
      },
      weap2: {
        name: "StatTrak™ P2000 | Ivory WW",
        price: 0.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-CgfjmKoTck29Y_chOhujT8om7jFXk-0NkZWyld4ORI1dqYFjR_Va-ybjo1Ja9vsyay3tm7ygj5nyMmAv330_BeLk7Mw"
      },
      weap3: {
        name: "StatTrak™ P2000 | Ivory FT",
        price: 0.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-CgfjmKoTck29Y_chOhujT8om7jFXk-0NkZWyld4ORI1dqYFjR_Va-ybjo1Ja9vsyay3tm7ygj5nyMmAv330_BeLk7Mw"
      },
      weap4: {
        name: "StatTrak™ P2000 | Ivory MW",
        price: 0.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-CgfjmKoTdn2xZ_Pp9i_vG8MKniQDjqUJoMWz6d9OSewA3ZF7Z_1ntlO_s1sS6vJvIznNnsnYl4n7cgVXp1hW8xnMi"
      },
      weap5: {
        name: "StatTrak™ P2000 | Ivory FN",
        price: 1.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-CgfjmKoTdn2xZ_Pp9i_vG8MKniQDjqUJoMWz6d9OSewA3ZF7Z_1ntlO_s1sS6vJvIznNnsnYl4n7cgVXp1hW8xnMi"
      },
      weap6: {
        name: "StatTrak™ UMP-45 | Labyrinth WW",
        price: 0.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf2-r3fTRM6c-Jm5KKmfDxDLbUkmJE5fp9i_vG8MKg2QKx-kZoa2-nIYPHdg89aVvYrlPqyOfr1JS96s_NmyZgvXZ2sH7fgVXp1rJtpB3E"
      },
      weap7: {
        name: "StatTrak™ UMP-45 | Labyrinth FT",
        price: 0.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf2-r3fTRM6c-Jm5KKmfDxDLbUkmJE5fp9i_vG8MKg2QKx-kZoa2-nIYPHdg89aVvYrlPqyOfr1JS96s_NmyZgvXZ2sH7fgVXp1rJtpB3E"
      },
      weap8: {
        name: "StatTrak™ UMP-45 | Labyrinth MW",
        price: 0.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf2-r3fTRM6c-Jm5KKmfDxDLfYkWNF18lwmO7Eu4il2ACxqkBkamvwItOTJFc7NQnSrFG7xOu-15Puv5rLyiA37CMksX7D30vgPsEAAE0"
      },
      weap9: {
        name: "StatTrak™ UMP-45 | Labyrinth FN",
        price: 0.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf2-r3fTRM6c-Jm5KKmfDxDLfYkWNF18lwmO7Eu4il2ACxqkBkamvwItOTJFc7NQnSrFG7xOu-15Puv5rLyiA37CMksX7D30vgPsEAAE0"
      },
      weap10: {
        name: "StatTrak™ SSG 08 | Abyss BS",
        price: 0.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0uL3fThU5d2inIGFqP_xMq3IqWdQ-sJ0xLqY8NWjjgS3-RBrZjymLYSVIQM5M1iF8wPqxO3vgsW1upXOySNi6HE8pSGKPeOLXZ4"
      },
      weap11: {
        name: "StatTrak™ SSG 08 | Abyss WW",
        price: 0.41,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0uL3fThU5d2inIGFqPrxN7LEm1Rd6dd2j6fH89vx2AWx_kU_MW3xI4OTIFI9YQnQ8le5yb_sgpC_6pyYySNn63Qq-z-DyBlPi8P9"
      },
      weap12: {
        name: "StatTrak™ SSG 08 | Abyss FT",
        price: 0.48,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0uL3fThU5d2inIGFqPrxN7LEm1Rd6dd2j6fH89vx2AWx_kU_MW3xI4OTIFI9YQnQ8le5yb_sgpC_6pyYySNn63Qq-z-DyBlPi8P9"
      },
      weap13: {
        name: "StatTrak™ SSG 08 | Abyss MW",
        price: 1.22,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0uL3fThU5d2inIGFqPv9NLPFqWdQ-sJ0xLnFpY_w3AbhqUZvZG31IITBclI_NwqGrlHtwbu8g5W46c_BzHVj7HI8pSGKxJE1QGE"
      },
      weap14: {
        name: "StatTrak™ SSG 08 | Abyss FN",
        price: 5.07,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0uL3fThU5d2inIGFqPv9NLPFqWdQ-sJ0xLnFpY_w3AbhqUZvZG31IITBclI_NwqGrlHtwbu8g5W46c_BzHVj7HI8pSGKxJE1QGE"
      },
      weap15: {
        name: "StatTrak™ Negev | Desert-Strike BS",
        price: 0.28,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJgImflvnnJ7TDm1RZ7cRnk9bN9J7yjRq3qkU-Mjj7I9TGdwVqZ1vR8gW-lOzqgsK4vprAmHdi7CN37S3cmhDin1gSOVfG3Ch-"
      },
      weap16: {
        name: "StatTrak™ Negev | Desert-Strike WW",
        price: 0.26,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJgImflvnnJ7TDm1Rc7cF4n-T--Y3nj1H6_EE6N26hLNWcIQ87aQzU_QK7xenug568ucjPyHZkuSYq4XzVyhezggYMMLJUFmgT1g"
      },
      weap17: {
        name: "StatTrak™ Negev | Desert-Strike FT",
        price: 0.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJgImflvnnJ7TDm1Rc7cF4n-T--Y3nj1H6_EE6N26hLNWcIQ87aQzU_QK7xenug568ucjPyHZkuSYq4XzVyhezggYMMLJUFmgT1g"
      },
      weap18: {
        name: "StatTrak™ Negev | Desert-Strike MW",
        price: 0.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJgImflvnnJ7TDm1Rd4cJ5ntbN9J7yjRqxqUQ-Mj2gI4PAIVRsYArUqQXowuu908S5v53BwXVgu3JwsH7czEe3n1gSOTH2kiU7"
      },
      weap19: {
        name: "StatTrak™ Negev | Desert-Strike FN",
        price: 0.48,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJgImflvnnJ7TDm1Rd4cJ5ntbN9J7yjRqxqUQ-Mj2gI4PAIVRsYArUqQXowuu908S5v53BwXVgu3JwsH7czEe3n1gSOTH2kiU7"
      },
      weap20: {
        name: "StatTrak™ MP7 | Urban Hazard BS",
        price: 0.35,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJnBB49G7lY6PkuXLO77QgHJu5MRjjeyPoNis2wax_hFlYmH6coSccQU7aFGB_1a2kO6705a_vZzMnXFj6HIq5GGdwULqE3dGWg"
      },
      weap21: {
        name: "StatTrak™ MP7 | Urban Hazard WW",
        price: 0.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJnBB49G7lY6PkuXLPr7Vn35c18lwmO7Eu9333AOx_hA4ZGmnLYPHIFA9MF_UrFC9xuzt1JK7u5nAynA2unZ253_D30vg60XbqNw"
      },
      weap22: {
        name: "StatTrak™ MP7 | Urban Hazard FT",
        price: 0.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJnBB49G7lY6PkuXLPr7Vn35c18lwmO7Eu9333AOx_hA4ZGmnLYPHIFA9MF_UrFC9xuzt1JK7u5nAynA2unZ253_D30vg60XbqNw"
      },
      weap23: {
        name: "StatTrak™ MP7 | Urban Hazard MW",
        price: 0.48,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJnBB49G7lY6PkuXLP7LWnn9u5MRjjeyPp9qljAey-URqZjr7J9CSd1NvNQmD_wDslei605K9tJqcmHAwuCAq7GGdwUJMw04E0g"
      },
      weap24: {
        name: "StatTrak™ MP7 | Urban Hazard FN",
        price: 0.76,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAR17P7YJnBB49G7lY6PkuXLP7LWnn9u5MRjjeyPp9qljAey-URqZjr7J9CSd1NvNQmD_wDslei605K9tJqcmHAwuCAq7GGdwUJMw04E0g"
      },
      weap25: {
        name: "StatTrak™ CZ75-Auto | Tigris BS",
        price: 0.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cmoX7ZGinYeOhcj8NrrHj1Rd6dd2j6eZpo-g31Lk8xdpajrxJYTHcwJoYFzZ_VW8xLrngsPvuc7My3NhuSBz-z-DyOxvVBQJ"
      },
      weap26: {
        name: "StatTrak™ CZ75-Auto | Tigris WW",
        price: 0.98,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cmoX7ZGinYeOhcj5Nr_Yg2Zu5MRjjeyP84iniwHt-hFlYWn6doLAewA7MgrR8la2xbjqhcO7ucvInHdiuCcmtGGdwUJmeETkpg"
      },
      weap27: {
        name: "StatTrak™ CZ75-Auto | Tigris FT",
        price: 1.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cmoX7ZGinYeOhcj5Nr_Yg2Zu5MRjjeyP84iniwHt-hFlYWn6doLAewA7MgrR8la2xbjqhcO7ucvInHdiuCcmtGGdwUJmeETkpg"
      },
      weap28: {
        name: "StatTrak™ CZ75-Auto | Tigris MW",
        price: 1.81,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cmoX7ZGinYeOhcj4OrzZglRd6dd2j6fDotmhigG1_EA_az_xdoSVdQ86Yw2C-lW4lLi718K478ydnHJnvyEh-z-DyLbrTs61"
      },
      weap29: {
        name: "StatTrak™ CZ75-Auto | Tigris FN",
        price: 5.60,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cmoX7ZGinYeOhcj4OrzZglRd6dd2j6fDotmhigG1_EA_az_xdoSVdQ86Yw2C-lW4lLi718K478ydnHJnvyEh-z-DyLbrTs61"
      },
      weap30: {
        name: "StatTrak™ PP-Bizon | Osiris BS",
        price: 0.85,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49L7m5OChf7nDLPUl31I18lwmO7Eu4mk0AHtqkRrajjycYWWJFM8Y1vV_VC_leztgMW86prPyyNiu3Yn5XjD30vg8ZyZ_t8"
      },
      weap31: {
        name: "StatTrak™ PP-Bizon | Osiris WW",
        price: 1.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49L7m5OChf7nDLbUkmJE5fp9i_vG8MLwjFHj-BBsYjzwJY6UcA44YgmGrlK_xui608S17sydwHJquSUhsHjfgVXp1sfD3kj2"
      },
      weap32: {
        name: "StatTrak™ PP-Bizon | Osiris FT",
        price: 1.07,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49L7m5OChf7nDLbUkmJE5fp9i_vG8MLwjFHj-BBsYjzwJY6UcA44YgmGrlK_xui608S17sydwHJquSUhsHjfgVXp1sfD3kj2"
      },
      weap33: {
        name: "StatTrak™ PP-Bizon | Osiris MW",
        price: 1.75,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49L7m5OChf7nDLfYkWNF18lwmO7Eu96j0VHk-BZtMj32LY7HdQBvNQrY8lW5weq8gcC4tMnOy3cx73InsyzD30vgnRlvh20"
      },
      weap34: {
        name: "StatTrak™ PP-Bizon | Osiris FN",
        price: 2.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf0Ob3czRY49L7m5OChf7nDLfYkWNF18lwmO7Eu96j0VHk-BZtMj32LY7HdQBvNQrY8lW5weq8gcC4tMnOy3cx73InsyzD30vgnRlvh20"
      },
      weap35: {
        name: "StatTrak™ P250 | Supernova WW",
        price: 2.79,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszKeClW6c6lg4WOg8j5Nr_Yg2Zu5MRjjeyPo9ikjAzmqEY5Nj_wJ9LGdgY-ZFuD_QDvw-3ohcfq78nNmyc37ycl42GdwUJyKz5d2A"
      },
      weap36: {
        name: "StatTrak™ P250 | Supernova FT",
        price: 1.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszKeClW6c6lg4WOg8j5Nr_Yg2Zu5MRjjeyPo9ikjAzmqEY5Nj_wJ9LGdgY-ZFuD_QDvw-3ohcfq78nNmyc37ycl42GdwUJyKz5d2A"
      },
      weap37: {
        name: "StatTrak™ P250 | Supernova MW",
        price: 2.08,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszKeClW6c6lg4WOg8j4OrzZglRd6dd2j6eZpo_x3Azt_Us4ZGD3JYTAclVoY1rT-QO2lO_ng5a-6svLzntj63Qm-z-DyIPWN4xl"
      },
      weap38: {
        name: "StatTrak™ P250 | Supernova FN",
        price: 3.02,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszKeClW6c6lg4WOg8j4OrzZglRd6dd2j6eZpo_x3Azt_Us4ZGD3JYTAclVoY1rT-QO2lO_ng5a-6svLzntj63Qm-z-DyIPWN4xl"
      },
      weap39: {
        name: "StatTrak™ Nova | Koi FT",
        price: 1.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD09e5nb-GkvP9JrbummpD78A_jriZo96g0Ae2rxVkMWj3JYCTdlc-aAzZ-FTok-fsg5XuvpjAznZi6T5iuyi6fwMUbw"
      },
      weap40: {
        name: "StatTrak™ Nova | Koi MW",
        price: 1.47,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD09e5nb-HnvD8J4Tdl3lW7Ysj0uqS84ml21Lj-EU-Z2GncdOUclM_NFDYr1a5kL3vh5e_vsmamyNlpGB8skdEpA34"
      },
      weap41: {
        name: "StatTrak™ Nova | Koi FN",
        price: 2.60,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszGfitD09e5nb-HnvD8J4Tdl3lW7Ysj0uqS84ml21Lj-EU-Z2GncdOUclM_NFDYr1a5kL3vh5e_vsmamyNlpGB8skdEpA34"
      },
      weap42: {
        name: "StatTrak™ Glock-18 | Water Elemental BS",
        price: 9.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79f7mImagvLnML7fglRZ7cRnk9bN9J7yjRrkrkNqY2H6JoCTJw44NFzQ-1DqxOm8gp7vus_MznQ3uiAmsXiMzUbln1gSOYiYVsoU"
      },
      weap43: {
        name: "StatTrak™ Glock-18 | Water Elemental WW",
        price: 17.13,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79f7mImagvLnML7fglRc7cF4n-T--Y3nj1H68kVvYTvzJYacIA42MFHW-QLtl7vr0ZS_vpiYm3pi7HYl5CrUy0a00AYMMLI3Fd_03w"
      },
      weap44: {
        name: "StatTrak™ Glock-18 | Water Elemental FT",
        price: 13.37,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79f7mImagvLnML7fglRc7cF4n-T--Y3nj1H68kVvYTvzJYacIA42MFHW-QLtl7vr0ZS_vpiYm3pi7HYl5CrUy0a00AYMMLI3Fd_03w"
      },
      weap45: {
        name: "StatTrak™ Glock-18 | Water Elemental MW",
        price: 21.94,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79f7mImagvLnML7fglRd4cJ5ntbN9J7yjRrl_kI5amz3cdKRI1NoY1CDqQK7xLrv1se47pnKmHU3syYm4SnemUTkn1gSOYPIEaei"
      },
      weap46: {
        name: "StatTrak™ Glock-18 | Water Elemental FN",
        price: 39.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79f7mImagvLnML7fglRd4cJ5ntbN9J7yjRrl_kI5amz3cdKRI1NoY1CDqQK7xLrv1se47pnKmHU3syYm4SnemUTkn1gSOYPIEaei"
      },
      weap47: {
        name: "StatTrak™ Five-SeveN | Fowl Play BS",
        price: 3.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT04nhq4aOluP8NqnCqWNU6dNoteXA54vwxgzn8kpqa2GnI4KXIVc7Y1iG_QC3lebnjMTtupqdyXdjv3RzsHuIl0GpwUYbL2mmrRM"
      },
      weap48: {
        name: "StatTrak™ Five-SeveN | Fowl Play WW",
        price: 3.64,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT04nhq4aOluP8NqnCqWZU7Mxkh9bN9J7yjRq2qENkMG2nIdecJgM_NV3UqVLowLq-hMC_tZ3IyiE2uHV2433dnRXkn1gSOeOa4gmP"
      },
      weap49: {
        name: "StatTrak™ Five-SeveN | Fowl Play FT",
        price: 4.04,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT04nhq4aOluP8NqnCqWZU7Mxkh9bN9J7yjRq2qENkMG2nIdecJgM_NV3UqVLowLq-hMC_tZ3IyiE2uHV2433dnRXkn1gSOeOa4gmP"
      },
      weap50: {
        name: "StatTrak™ Five-SeveN | Fowl Play MW",
        price: 5.95,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT04nhq4aOluP8NqnCqWdY781lteXA54vwxlW18kduNWv7cIPDJg44aV7U-QO7xby-hcW_vZrOyXE3snIk5HramhGpwUYbC9vqejU"
      },
      weap51: {
        name: "StatTrak™ Five-SeveN | Fowl Play FN",
        price: 15.58,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTjxT04nhq4aOluP8NqnCqWdY781lteXA54vwxlW18kduNWv7cIPDJg44aV7U-QO7xby-hcW_vZrOyXE3snIk5HramhGpwUYbC9vqejU"
      },
      weap52: {
        name: "StatTrak™ Desert Eagle | Conspiracy FT",
        price: 6.94,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7du6kb-KguXxJqjum25V4dB8teXA54vwxgDmqUZtNT_3doSTJA8_YFDZ_wfvku3sgJHvvcvPzyM36SFz43vey0GpwUYb3bhCDDk"
      },
      weap53: {
        name: "StatTrak™ Desert Eagle | Conspiracy MW",
        price: 10.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7du6kb-KguXxJqjummJW4NFOhujT8om731K1_EVsZm6gdoaQJARtMArY-FjslOrrjcC9vp2YnHdnuicj4Cvdygv3308GE_1AfA"
      },
      weap54: {
        name: "StatTrak™ Desert Eagle | Conspiracy FN",
        price: 15.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7du6kb-KguXxJqjummJW4NFOhujT8om731K1_EVsZm6gdoaQJARtMArY-FjslOrrjcC9vp2YnHdnuicj4Cvdygv3308GE_1AfA"
      },
      weap55: {
        name: "StatTrak™ P90 | Asiimov BS",
        price: 12.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqP_xMq3IqWdQ-sJ0xLvEpNugjQTm80BvZ2_0doTAdFBraFCE8lnoyers15PptZjMyiEyuCQ8pSGKT1_PUsY"
      },
      weap56: {
        name: "StatTrak™ P90 | Asiimov WW",
        price: 20.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqPrxN7LEm1Rd6dd2j6eV8Yijilfi-xJoMGv7LI7Hd1Q4Y1HV-VS8lOnmjJXvu87MzHsyv3Nw-z-DyMkIAv9h"
      },
      weap57: {
        name: "StatTrak™ P90 | Asiimov FT",
        price: 23.04,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqPrxN7LEm1Rd6dd2j6eV8Yijilfi-xJoMGv7LI7Hd1Q4Y1HV-VS8lOnmjJXvu87MzHsyv3Nw-z-DyMkIAv9h"
      },
      weap58: {
        name: "StatTrak™ P90 | Asiimov MW",
        price: 54.05,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqPv9NLPFqWdQ-sJ0xLnC9Nvz31K3-0BuMGD7d4PGIQM-ZwuDrgS3w7zshsO5tJ7PmHoysig8pSGKpkWB0BI"
      },
      weap59: {
        name: "StatTrak™ P90 | Asiimov FN",
        price: 126.70,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIXBD_9W_mY-dqPv9NLPFqWdQ-sJ0xLnC9Nvz31K3-0BuMGD7d4PGIQM-ZwuDrgS3w7zshsO5tJ7PmHoysig8pSGKpkWB0BI"
      },
      weap60: {
        name: "StatTrak™ M4A1-S | Cyrex BS",
        price: 27.90,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp5j-jX7LP5iUazrl1uMG_1dYHDdQY-Zl3Xq1m_yey7gMS9uZ3JwCFruSh3tHbYmUO21xtMcKUx0jge81b4"
      },
      weap61: {
        name: "StatTrak™ M4A1-S | Cyrex WW",
        price: 34.68,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp8j-3I4IHKhFWmrBZyYDz2IobGcwdoYFCG8lW4l7jnjMC6vZybyHVk7CEjtHaMyh20iBsdbfsv26IzXLrUVA"
      },
      weap62: {
        name: "StatTrak™ M4A1-S | Cyrex FT",
        price: 34.68,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp8j-3I4IHKhFWmrBZyYDz2IobGcwdoYFCG8lW4l7jnjMC6vZybyHVk7CEjtHaMyh20iBsdbfsv26IzXLrUVA"
      },
      weap63: {
        name: "StatTrak™ M4A1-S | Cyrex MW",
        price: 63.51,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp9g-7J4bP5iUazrl1tZ22hIIaQcVNsZluC_gC6xrjnhJS06c-bySdruih27Srfl0Oy0xEfcKUx0knZQYH9"
      },
      weap64: {
        name: "StatTrak™ M4A1-S | Cyrex FN",
        price: 85.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITSj3lU8Pp9g-7J4bP5iUazrl1tZ22hIIaQcVNsZluC_gC6xrjnhJS06c-bySdruih27Srfl0Oy0xEfcKUx0knZQYH9"
      }
	}
  },
//Summer
 case11: {
    milspec: {
      weap1: {
        name: "SSG 08 | Dark Water FT",
        price: 0.32,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0v73azhA_t2JkIGZnMj5Nr_Yg2Zu5MRjjeyPrY6higDtrUc-YWqicY6UcQc2aViFrwPox-6718W77p7IyXQ3vyYrsGGdwUKgz0H5mQ"
      },
      weap2: {
        name: "SSG 08 | Dark Water MW",
        price: 0.47,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0v73azhA_t2JkIGZnMj4OrzZglRd6dd2j6eUo9-j2wPl_UpqNjymJ4TBe1c9NF3Y8gfowrzrh8C67p7KznVl7ikr-z-DyCzdmBI3"
      },
      weap3: {
        name: "MAC-10 | Ultraviolet BS",
        price: 0.18,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwPz3YShQ_NCzq4iOluHtDLfQhGxUppEm2--S84qs3QLs-hFkZmzzIIbBIFQ4M1zW-Vftye3v15K7757AzHJ9-n516-qBNpU"
      },
      weap4: {
        name: "MAC-10 | Ultraviolet WW",
        price: 0.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwPz3YShQ_NCzq42Ok_7hPoTdl3lW7Ysm3L2XpdyhjAOw8kE9Ym-gLIWTIwI4M1nRqwDvyby-157otMjImCdkpGB8sjiSjpCW"
      },
      weap5: {
        name: "MAC-10 | Ultraviolet FT",
        price: 0.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwPz3YShQ_NCzq42Ok_7hPoTdl3lW7Ysm3L2XpdyhjAOw8kE9Ym-gLIWTIwI4M1nRqwDvyby-157otMjImCdkpGB8sjiSjpCW"
      },
      weap6: {
        name: "MAC-10 | Ultraviolet MW",
        price: 0.47,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwPz3YShQ_NCzq4yCkP_gDLfQhGxUppIl2ruZpI7xjAXn-0pqZ2D6coKRdwJqZVzWrlG4xu7sgsS5tZ_Lm3V9-n51_MuOZ10"
      },
      weap7: {
        name: "MAC-10 | Ultraviolet FN",
        price: 2.79,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwPz3YShQ_NCzq4yCkP_gDLfQhGxUppIl2ruZpI7xjAXn-0pqZ2D6coKRdwJqZVzWrlG4xu7sgsS5tZ_Lm3V9-n51_MuOZ10"
      },
      weap8: {
        name: "USP-S | Blood Tiger FT",
        price: 0.47,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5KOk-P9NL7DqWZU7Mxkh9bN9J7yjRrj80A_MmvzLNeWe1c-YwyC-Fi-xurng5S6tZSfnCYwuyFxtnfcnRzln1gSOQWwRN0v"
      },
      weap9: {
        name: "USP-S | Blood Tiger MW",
        price: 0.54,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5KOk-P9NL7DqWdY781lteXA54vwxgGw_ERkNW_zJ4bBJwI3Y1HWrFK6yO7nhJG0vcnBzSc1uCEntHaPlhWpwUYby7pd3Ws"
      },
      weap10: {
        name: "USP-S | Blood Tiger FN",
        price: 0.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5KOk-P9NL7DqWdY781lteXA54vwxgGw_ERkNW_zJ4bBJwI3Y1HWrFK6yO7nhJG0vcnBzSc1uCEntHaPlhWpwUYby7pd3Ws"
      },
      weap11: {
        name: "CZ75-Auto | Hexane WW",
        price: 0.59,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3czFX6dSzjL-GkvP9JrbummpD78A_jLiQod6jiVLn8hFuMGjwJo_GIFI7aQrY81O2kufr0565vJrOyCdhuz5iuyiYfXcivA"
      },
      weap12: {
        name: "CZ75-Auto | Hexane FT",
        price: 0.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3czFX6dSzjL-GkvP9JrbummpD78A_jLiQod6jiVLn8hFuMGjwJo_GIFI7aQrY81O2kufr0565vJrOyCdhuz5iuyiYfXcivA"
      },
      weap13: {
        name: "CZ75-Auto | Hexane MW",
        price: 0.35,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3czFX6dSzjL-HnvD8J4Tdl3lW7Ysh2bvEoY6l0Q3t80BsMm32cIGRcQ9qYV-GqwTox-i9jZS1tczIyXc1pGB8smpwrusP"
      },
      weap14: {
        name: "CZ75-Auto | Hexane FN",
        price: 0.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3czFX6dSzjL-HnvD8J4Tdl3lW7Ysh2bvEoY6l0Q3t80BsMm32cIGRcQ9qYV-GqwTox-i9jZS1tczIyXc1pGB8smpwrusP"
      },
      weap15: {
        name: "Negev | Bratatat BS",
        price: 0.18,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3cy9D-N2ilZS0mfLzNq3unm5Q_txOhujT8om7jgbk8kBvazjwcYDBIVM-NArX-wS2we3ugpe8u5_Bz3Nk6SZzsymIywv3308T4eZ7gg"
      },
      weap16: {
        name: "Negev | Bratatat WW",
        price: 0.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3cy9D-N2ilZS0mfLzNq3um25V4dB8teXA54vwxgGx_EE5N2rwd4HGewU_ZV-E-VS6lL_phZfv7piamHUyuXQg5irVzUepwUYbgEuvrjQ"
      },
      weap17: {
        name: "Negev | Bratatat FT",
        price: 0.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3cy9D-N2ilZS0mfLzNq3um25V4dB8teXA54vwxgGx_EE5N2rwd4HGewU_ZV-E-VS6lL_phZfv7piamHUyuXQg5irVzUepwUYbgEuvrjQ"
      },
      weap18: {
        name: "Negev | Bratatat MW",
        price: 0.38,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3cy9D-N2ilZS0mfLzNq3ummJW4NFOhujT8om7igPh80o_YGr2ctSScgA4NV3TqFC2yOm6hZa86p3KyCZguyYk4X6ImQv330_BOKKR0A"
      },
      weap19: {
        name: "Negev | Bratatat FN",
        price: 2.46,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3cy9D-N2ilZS0mfLzNq3ummJW4NFOhujT8om7igPh80o_YGr2ctSScgA4NV3TqFC2yOm6hZa86p3KyCZguyYk4X6ImQv330_BOKKR0A"
      },
      weap20: {
        name: "XM1014 | Red Python BS",
        price: 0.28,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTi5M7dezh4uCmcjmNr_unm5Q_txOhujT8om73ATt_0VrNWrwJI6WJAc2MlzT_wC9yb3vhMe1tZ2fyiFh6CNxtnrdywv3309rTgbr4Q"
      },
      weap21: {
        name: "XM1014 | Red Python WW",
        price: 0.81,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTi5M7dezh4uCmcjmNr_um25V4dB8teXA54vwxlLnqUBtMWmgJtDGewNtNA7Uq1S6w-nu1pe06Z6YwXpgsidwtyrenBGpwUYbch3p6y4"
      },
      weap22: {
        name: "XM1014 | Red Python FT",
        price: 0.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTi5M7dezh4uCmcjmNr_um25V4dB8teXA54vwxlLnqUBtMWmgJtDGewNtNA7Uq1S6w-nu1pe06Z6YwXpgsidwtyrenBGpwUYbch3p6y4"
      },
      weap23: {
        name: "XM1014 | Red Python MW",
        price: 0.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTi5M7dezh4uCmcjmNr_ummJW4NFOhujT8om7jATl8hJuZjzyJNDAdwVoYw2ErFO3xOa515W-vs7MwHRhu3FwtnuJygv330_KyaSNdA"
      }
    },
    restricted: {
      weap1: {
        name: "P90 | Virus BS",
        price: 0.72,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957OnHfD9L6eO-kYGdjsj4MqnWkyUHsJYg3OuTpY_2iVfs_RBvNT-iLYOSdVBoZw2Erli6l7q8hMK06ZSY1zI97bhnvfyF"
      },
      weap2: {
        name: "P90 | Virus WW",
        price: 0.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957OnHfD9L6eO7kYSCgvrLP7rDkW4fvZMk0rHFrN7ziwHs80s5a2_zdYWdIwY7NAnR_lO4lLvm0ZG-6pudy2wj5He-YUVtAA"
      },
      weap3: {
        name: "P90 | Virus FT",
        price: 0.66,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957OnHfD9L6eO7kYSCgvrLP7rDkW4fvZMk0rHFrN7ziwHs80s5a2_zdYWdIwY7NAnR_lO4lLvm0ZG-6pudy2wj5He-YUVtAA"
      },
      weap4: {
        name: "P90 | Virus MW",
        price: 1.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957OnHfD9L6eO6nYeDg8j4MqnWkyUG7pMniLqR8Nqs2Aa1rkRrYWuhI4-Qc1BqZlzU_ADrxrvm15W0tJ2c1zI97eG9a5dJ"
      },
      weap5: {
        name: "P90 | Virus FN",
        price: 7.07,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957OnHfD9L6eO6nYeDg8j4MqnWkyUG7pMniLqR8Nqs2Aa1rkRrYWuhI4-Qc1BqZlzU_ADrxrvm15W0tJ2c1zI97eG9a5dJ"
      },
      weap6: {
        name: "PP-Bizon | Blue Streak BS",
        price: 0.82,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3Yi1O7ciikZK0n_L1JaLummpD78A_37CZo9-m3Qfs-0A5YD3xdo-QJwI_aF_S81G2xujphJW0tcvMwHJkuj5iuyiHrXOA7w"
      },
      weap7: {
        name: "PP-Bizon | Blue Streak WW",
        price: 0.78,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3Yi1O7ciikZK0mvLwOq7cqWdQ-sJ0xL_HoI_22QO2-EBvY2nzLIGWewQ-ZViBrFW5yeruh8W6vJzOzyRr7HM8pSGKj-jxCOw"
      },
      weap8: {
        name: "PP-Bizon | Blue Streak FT",
        price: 0.58,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3Yi1O7ciikZK0mvLwOq7cqWdQ-sJ0xL_HoI_22QO2-EBvY2nzLIGWewQ-ZViBrFW5yeruh8W6vJzOzyRr7HM8pSGKj-jxCOw"
      },
      weap9: {
        name: "PP-Bizon | Blue Streak MW",
        price: 1.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3Yi1O7ciikZK0m_7zO6_ummpD78A_3eiWod2ijA3h_0tpMDyhJoeRelRqNVuE-FO2w-_mhpa7vJXLnCNr6z5iuyjxm99JtA"
      },
      weap10: {
        name: "PP-Bizon | Blue Streak FN",
        price: 9.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3Yi1O7ciikZK0m_7zO6_ummpD78A_3eiWod2ijA3h_0tpMDyhJoeRelRqNVuE-FO2w-_mhpa7vJXLnCNr6z5iuyjxm99JtA"
      },
      weap11: {
        name: "MP7 | Ocean Foam MW",
        price: 1.66,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAZt7PzbYjRE9eO0mJWOqPv9NLPFqWdQ-sJ0xOuT9tyi31WyqEFvNz2hII6Wegc4Y1HR_1S5wO3nhJDo7svJwCQxsiQ8pSGKhxJU9ic"
      },
      weap12: {
        name: "MP7 | Ocean Foam FN",
        price: 1.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAZt7PzbYjRE9eO0mJWOqPv9NLPFqWdQ-sJ0xOuT9tyi31WyqEFvNz2hII6Wegc4Y1HR_1S5wO3nhJDo7svJwCQxsiQ8pSGKhxJU9ic"
      },
      weap13: {
        name: "Glock-18 | Steel Disruption FT",
        price: 1.47,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73dTlS7ciykY6YksjnOrfHk3lu5cB1g_zMyoD0mlOx5RVlMWqgII-SIQJvYgmB-lLrl-zr1sO76svOzSEx6HYk5HzcnkS21BhSLrs4Xp79IS8"
      },
      weap14: {
        name: "Glock-18 | Steel Disruption MW",
        price: 0.94,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73dTlS7ciykY6YksjnOrfHk3lu5Mx2gv3--Y3nj1H6_xdkYDrzdYbHewM2MwrR_we4yOq8gpa4u5TAzycw7yUrs3uPyhWy0AYMMLIxVOW_RQ"
      },
      weap15: {
        name: "Glock-18 | Steel Disruption FN",
        price: 1.32,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73dTlS7ciykY6YksjnOrfHk3lu5Mx2gv3--Y3nj1H6_xdkYDrzdYbHewM2MwrR_we4yOq8gpa4u5TAzycw7yUrs3uPyhWy0AYMMLIxVOW_RQ"
      },
      weap16: {
        name: "Desert Eagle | Crimson Web BS",
        price: 0.89,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTipH7s-JkIGZnPLmDLPUl31I18lwmO7Eu9iiiVbhrRI4Zmn2JoDBdwBsMFHTrFm5x-rmgJXqtc7KySRksnVx5nrD30vgH7YYjcU"
      },
      weap17: {
        name: "Desert Eagle | Crimson Web WW",
        price: 1.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTipH7s-JkIGZnPLmDLbUkmJE5fp9i_vG8ML22wbj-0tqZG_2INeTdgc-Zl_S-FbqxL-71J60up7IzSY36CkmsXnUgVXp1lzsUQgy"
      },
      weap18: {
        name: "Desert Eagle | Crimson Web FT",
        price: 1.08,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTipH7s-JkIGZnPLmDLbUkmJE5fp9i_vG8ML22wbj-0tqZG_2INeTdgc-Zl_S-FbqxL-71J60up7IzSY36CkmsXnUgVXp1lzsUQgy"
      },
      weap19: {
        name: "Desert Eagle | Crimson Web MW",
        price: 4.52,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTipH7s-JkIGZnPLmDLfYkWNF18lwmO7Eu9v30Ve2-ko-Mjr2JtPHJwFtZVGF-QDslbi9hcW4vJ2cmHBmuHZ3s3fD30vg7NYdUho"
      },
      weap20: {
        name: "Desert Eagle | Crimson Web FN",
        price: 43.01,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTipH7s-JkIGZnPLmDLfYkWNF18lwmO7Eu9v30Ve2-ko-Mjr2JtPHJwFtZVGF-QDslbi9hcW4vJ2cmHBmuHZ3s3fD30vg7NYdUho"
      }
    },
    classified: {
      weap1: {
        name: "AUG | Bengal Tiger BS",
        price: 2.04,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957OfBdjhQ09SzlZaSqPv1IbzU2GgDuMcj2OzErN2ijFfkqUE4MG7zcdfHcQ5vNwyD8ge2wby8hJC0vpnXiSw0P_Iqp_Y"
      },
      weap2: {
        name: "AUG | Bengal Tiger WW",
        price: 3.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957OfBdjhQ09GzkImemsj4MqnWkyUEuJ112euTrN6t2Fe3rkJlZTqnIIaRI1BoaQzW-Fjolb_rhMS4vcjB1zI97ZDlUbTa"
      },
      weap3: {
        name: "AUG | Bengal Tiger FT",
        price: 2.38,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957OfBdjhQ09GzkImemsj4MqnWkyUEuJ112euTrN6t2Fe3rkJlZTqnIIaRI1BoaQzW-Fjolb_rhMS4vcjB1zI97ZDlUbTa"
      },
      weap4: {
        name: "AUG | Bengal Tiger MW",
        price: 3.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957OfBdjhQ09C_k4ifqPv1IbzU2G8D7sAo377FptWl21C3_kRram3zJ9PBc1U3ZFHU_QS_ybi-gsO66snXiSw0v9hgqjA"
      },
      weap5: {
        name: "AUG | Bengal Tiger FN",
        price: 25.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957OfBdjhQ09C_k4ifqPv1IbzU2G8D7sAo377FptWl21C3_kRram3zJ9PBc1U3ZFHU_QS_ybi-gsO66snXiSw0v9hgqjA"
      },
      weap6: {
        name: "Nova | Bloomstick BS",
        price: 2.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbYS9L4tuJmo-dlsj8NrrHj1Rd6dd2j6eY84ig0QWx8xY9ZG6md46UdlI9NVzX8lW8xefm1sDu7pjMmCQxuHEi-z-DyK6WDR2H"
      },
      weap7: {
        name: "Nova | Bloomstick WW",
        price: 2.91,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbYS9L4tuJmo-dlsj5Nr_Yg2Zu5MRjjeyPrNun3FbhqUVqZW-id9SdcABvNwyC_lG8wLy-jcO_6c7NyXsxuyRxtGGdwUIirudS7A"
      },
      weap8: {
        name: "Nova | Bloomstick FT",
        price: 2.09,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbYS9L4tuJmo-dlsj5Nr_Yg2Zu5MRjjeyPrNun3FbhqUVqZW-id9SdcABvNwyC_lG8wLy-jcO_6c7NyXsxuyRxtGGdwUIirudS7A"
      },
      weap9: {
        name: "Nova | Bloomstick MW",
        price: 2.88,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbYS9L4tuJmo-dlsj4OrzZglRd6dd2j6eR94ms3VXk-hc4Zm2hIYGccw44ZV7UrlG7wu28gJe1ucufm3Nn6yh0-z-DyKRYOT6Q"
      },
      weap10: {
        name: "Nova | Bloomstick FN",
        price: 18.28,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbYS9L4tuJmo-dlsj4OrzZglRd6dd2j6eR94ms3VXk-hc4Zm2hIYGccw44ZV7UrlG7wu28gJe1ucufm3Nn6yh0-z-DyKRYOT6Q"
      },
      weap11: {
        name: "AWP | Corticera FT",
        price: 6.58,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PXJZzhO7eO3g5C0mvLwOq7cqWdQ-sJ0xL6UotT33FDn-UBvMDj6cIfAdgFtN13Rr1folezp08S_tJ3NwSNm6HE8pSGKFALUdWg"
      },
      weap12: {
        name: "AWP | Corticera MW",
        price: 6.74,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PXJZzhO7eO3g5C0m_7zO6_ummpD78A_3rqTrI-l3AOxqkJkamClJ46RdFc_MFDR_1K3k7_t1JS7upvMmHdn7z5iuygrdWg_VA"
      },
      weap13: {
        name: "AWP | Corticera FN",
        price: 13.70,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PXJZzhO7eO3g5C0m_7zO6_ummpD78A_3rqTrI-l3AOxqkJkamClJ46RdFc_MFDR_1K3k7_t1JS7upvMmHdn7z5iuygrdWg_VA"
      },
      weap14: {
        name: "P2000 | Corticera FT",
        price: 2.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJE7cqzmIG0h6WkY-vum25V4dB8teXA54vwxlbl_BBpZDr0INSSJgVvNFvT_AW7yb_ugpTou8jLzyQxvSIg7Xvbyh2pwUYbWvK6yx4"
      },
      weap15: {
        name: "P2000 | Corticera MW",
        price: 2.38,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJE7cqzmIG0h6WkY-vummJW4NFOhujT8om7i1fg-xc-Zz32JIKdIQFqNQuGqFS8x-rt0Z-5uMjAyHZjunUn7H3Unwv330-Dajd6nw"
      },
      weap16: {
        name: "P2000 | Corticera FN",
        price: 4.65,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJE7cqzmIG0h6WkY-vummJW4NFOhujT8om7i1fg-xc-Zz32JIKdIQFqNQuGqFS8x-rt0Z-5uMjAyHZjunUn7H3Unwv330-Dajd6nw"
      }
    },
    covert: {
      weap1: {
        name: "AK-47 | Jaguar BS",
        price: 10.90,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLO77QgHJu5MRjjeyP9N2ijFK3qks9am2nIY-ddVU9MwvTqQe3wLu5jZ-07cjJmnVn6SYn7WGdwUIg7NlC-A"
      },
      weap2: {
        name: "AK-47 | Jaguar WW",
        price: 12.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLPr7Vn35c18lwmO7Eu46lilXm-kQ4YmHxdoeddVVqY1vU-lO7lb3vg57uu5rIzCMw7nZ35i3D30vgFhd2p1E"
      },
      weap3: {
        name: "PAK-47 | Jaguar FT",
        price: 13.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLPr7Vn35c18lwmO7Eu46lilXm-kQ4YmHxdoeddVVqY1vU-lO7lb3vg57uu5rIzCMw7nZ35i3D30vgFhd2p1E"
      },
      weap4: {
        name: "AK-47 | Jaguar MW",
        price: 16.56,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLP7LWnn9u5MRjjeyPo46iiwzm-0tvMWyldtSScwA9YAmE_Vi4wL-8hJO4v8nInyFh6yVxsWGdwUIYQq5JMA"
      },
      weap5: {
        name: "AK-47 | Jaguar FN",
        price: 54.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLP7LWnn9u5MRjjeyPo46iiwzm-0tvMWyldtSScwA9YAmE_Vi4wL-8hJO4v8nInyFh6yVxsWGdwUIYQq5JMA"
      },
      weap6: {
        name: "M4A4 | Bullet Rain BS",
        price: 8.37,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszKZDFO6ciJhoGCmcj5Z7qAqWNU6dNoteXA54vwxg2xrhJrYm32IoHHdQFvZluG81DqwLrn05e87puYmHs1uSYh7X2OyRGpwUYbML2rKHU"
      },
      weap7: {
        name: "M4A4 | Bullet Rain WW",
        price: 6.94,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszKZDFO6ciJhoGCmcj5Z7qAqWZU7Mxkh9bN9J7yjRq18kBsZG6lJ4SUcAdrMlzR8wLsk-bvh5ftvZrLnHE1uCYjs3yMl0O1n1gSOYmlpP_c"
      },
      weap8: {
        name: "M4A4 | Bullet Rain FT",
        price: 6.72,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszKZDFO6ciJhoGCmcj5Z7qAqWZU7Mxkh9bN9J7yjRq18kBsZG6lJ4SUcAdrMlzR8wLsk-bvh5ftvZrLnHE1uCYjs3yMl0O1n1gSOYmlpP_c"
      },
      weap9: {
        name: "M4A4 | Bullet Rain MW",
        price: 11.15,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszKZDFO6ciJhoGCmcj5Z7qAqWdY781lteXA54vwxgC2-EZlYGH0do7EIFVqM1iBr1i8wO3r18e86p_IyXQwviAnsXbfnRepwUYblVXtojA"
      },
      weap10: {
        name: "M4A4 | Bullet Rain FN",
        price: 23.92,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszKZDFO6ciJhoGCmcj5Z7qAqWdY781lteXA54vwxgC2-EZlYGH0do7EIFVqM1iBr1i8wO3r18e86p_IyXQwviAnsXbfnRepwUYblVXtojA"
      }
	},
    stattrak: {
      weap1: {
        name: "StatTrak™ SSG 08 | Dark Water FT",
        price: 0.77,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0v73azhA_t2JkIGZnMj5Nr_Yg2Zu5MRjjeyPrY6higDtrUc-YWqicY6UcQc2aViFrwPox-6718W77p7IyXQ3vyYrsGGdwUKgz0H5mQ"
      },
      weap2: {
        name: "StatTrak™ SSG 08 | Dark Water MW",
        price: 1.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0v73azhA_t2JkIGZnMj4OrzZglRd6dd2j6eUo9-j2wPl_UpqNjymJ4TBe1c9NF3Y8gfowrzrh8C67p7KznVl7ikr-z-DyCzdmBI3"
      },
      weap3: {
        name: "StatTrak™ MAC-10 | Ultraviolet BS",
        price: 0.42,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwPz3YShQ_NCzq4iOluHtDLfQhGxUppEm2--S84qs3QLs-hFkZmzzIIbBIFQ4M1zW-Vftye3v15K7757AzHJ9-n516-qBNpU"
      },
      weap4: {
        name: "StatTrak™ MAC-10 | Ultraviolet WW",
        price: 0.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwPz3YShQ_NCzq42Ok_7hPoTdl3lW7Ysm3L2XpdyhjAOw8kE9Ym-gLIWTIwI4M1nRqwDvyby-157otMjImCdkpGB8sjiSjpCW"
      },
      weap5: {
        name: "StatTrak™ MAC-10 | Ultraviolet FT",
        price: 0.38,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwPz3YShQ_NCzq42Ok_7hPoTdl3lW7Ysm3L2XpdyhjAOw8kE9Ym-gLIWTIwI4M1nRqwDvyby-157otMjImCdkpGB8sjiSjpCW"
      },
      weap6: {
        name: "StatTrak™ MAC-10 | Ultraviolet MW",
        price: 1.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwPz3YShQ_NCzq4yCkP_gDLfQhGxUppIl2ruZpI7xjAXn-0pqZ2D6coKRdwJqZVzWrlG4xu7sgsS5tZ_Lm3V9-n51_MuOZ10"
      },
      weap7: {
        name: "StatTrak™ MAC-10 | Ultraviolet FN",
        price: 12.74,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldfwPz3YShQ_NCzq4yCkP_gDLfQhGxUppIl2ruZpI7xjAXn-0pqZ2D6coKRdwJqZVzWrlG4xu7sgsS5tZ_Lm3V9-n51_MuOZ10"
      },
      weap8: {
        name: "StatTrak™ USP-S | Blood Tiger FT",
        price: 1.96,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5KOk-P9NL7DqWZU7Mxkh9bN9J7yjRrj80A_MmvzLNeWe1c-YwyC-Fi-xurng5S6tZSfnCYwuyFxtnfcnRzln1gSOQWwRN0v"
      },
      weap9: {
        name: "StatTrak™ USP-S | Blood Tiger MW",
        price: 2.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5KOk-P9NL7DqWdY781lteXA54vwxgGw_ERkNW_zJ4bBJwI3Y1HWrFK6yO7nhJG0vcnBzSc1uCEntHaPlhWpwUYby7pd3Ws"
      },
      weap10: {
        name: "StatTrak™ USP-S | Blood Tiger FN",
        price: 5.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09Svq5KOk-P9NL7DqWdY781lteXA54vwxgGw_ERkNW_zJ4bBJwI3Y1HWrFK6yO7nhJG0vcnBzSc1uCEntHaPlhWpwUYby7pd3Ws"
      },
      weap11: {
        name: "StatTrak™ CZ75-Auto | Hexane WW",
        price: 0.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3czFX6dSzjL-GkvP9JrbummpD78A_jLiQod6jiVLn8hFuMGjwJo_GIFI7aQrY81O2kufr0565vJrOyCdhuz5iuyiYfXcivA"
      },
      weap12: {
        name: "StatTrak™ CZ75-Auto | Hexane FT",
        price: 0.58,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3czFX6dSzjL-GkvP9JrbummpD78A_jLiQod6jiVLn8hFuMGjwJo_GIFI7aQrY81O2kufr0565vJrOyCdhuz5iuyiYfXcivA"
      },
      weap13: {
        name: "StatTrak™ CZ75-Auto | Hexane MW",
        price: 1.30,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3czFX6dSzjL-HnvD8J4Tdl3lW7Ysh2bvEoY6l0Q3t80BsMm32cIGRcQ9qYV-GqwTox-i9jZS1tczIyXc1pGB8smpwrusP"
      },
      weap14: {
        name: "StatTrak™ CZ75-Auto | Hexane FN",
        price: 6.11,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf2-r3czFX6dSzjL-HnvD8J4Tdl3lW7Ysh2bvEoY6l0Q3t80BsMm32cIGRcQ9qYV-GqwTox-i9jZS1tczIyXc1pGB8smpwrusP"
      },
      weap15: {
        name: "StatTrak™ Negev | Bratatat BS",
        price: 0.51,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3cy9D-N2ilZS0mfLzNq3unm5Q_txOhujT8om7jgbk8kBvazjwcYDBIVM-NArX-wS2we3ugpe8u5_Bz3Nk6SZzsymIywv3308T4eZ7gg"
      },
      weap16: {
        name: "StatTrak™ Negev | Bratatat WW",
        price: 0.51,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3cy9D-N2ilZS0mfLzNq3um25V4dB8teXA54vwxgGx_EE5N2rwd4HGewU_ZV-E-VS6lL_phZfv7piamHUyuXQg5irVzUepwUYbgEuvrjQ"
      },
      weap17: {
        name: "StatTrak™ Negev | Bratatat FT",
        price: 0.48,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3cy9D-N2ilZS0mfLzNq3um25V4dB8teXA54vwxgGx_EE5N2rwd4HGewU_ZV-E-VS6lL_phZfv7piamHUyuXQg5irVzUepwUYbgEuvrjQ"
      },
      weap18: {
        name: "StatTrak™ Negev | Bratatat MW",
        price: 1.28,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3cy9D-N2ilZS0mfLzNq3ummJW4NFOhujT8om7igPh80o_YGr2ctSScgA4NV3TqFC2yOm6hZa86p3KyCZguyYk4X6ImQv330_BOKKR0A"
      },
      weap19: {
        name: "StatTrak™ Negev | Bratatat FN",
        price: 6.93,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3cy9D-N2ilZS0mfLzNq3ummJW4NFOhujT8om7igPh80o_YGr2ctSScgA4NV3TqFC2yOm6hZa86p3KyCZguyYk4X6ImQv330_BOKKR0A"
      },
      weap20: {
        name: "StatTrak™ XM1014 | Red Python BS",
        price: 0.54,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTi5M7dezh4uCmcjmNr_unm5Q_txOhujT8om73ATt_0VrNWrwJI6WJAc2MlzT_wC9yb3vhMe1tZ2fyiFh6CNxtnrdywv3309rTgbr4Q"
      },
      weap21: {
        name: "StatTrak™ XM1014 | Red Python WW",
        price: 0.65,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTi5M7dezh4uCmcjmNr_um25V4dB8teXA54vwxlLnqUBtMWmgJtDGewNtNA7Uq1S6w-nu1pe06Z6YwXpgsidwtyrenBGpwUYbch3p6y4"
      },
      weap22: {
        name: "StatTrak™ XM1014 | Red Python FT",
        price: 0.46,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTi5M7dezh4uCmcjmNr_um25V4dB8teXA54vwxlLnqUBtMWmgJtDGewNtNA7Uq1S6w-nu1pe06Z6YwXpgsidwtyrenBGpwUYbch3p6y4"
      },
      weap23: {
        name: "StatTrak™ XM1014 | Red Python MW",
        price: 1.38,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PvRTi5M7dezh4uCmcjmNr_ummJW4NFOhujT8om7jATl8hJuZjzyJNDAdwVoYw2ErFO3xOa515W-vs7MwHRhu3FwtnuJygv330_KyaSNdA"
      },
      weap24: {
        name: "StatTrak™ P90 | Virus BS",
        price: 1.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957OnHfD9L6eO-kYGdjsj4MqnWkyUHsJYg3OuTpY_2iVfs_RBvNT-iLYOSdVBoZw2Erli6l7q8hMK06ZSY1zI97bhnvfyF"
      },
      weap25: {
        name: "StatTrak™ P90 | Virus WW",
        price: 2.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957OnHfD9L6eO7kYSCgvrLP7rDkW4fvZMk0rHFrN7ziwHs80s5a2_zdYWdIwY7NAnR_lO4lLvm0ZG-6pudy2wj5He-YUVtAA"
      },
      weap26: {
        name: "StatTrak™ P90 | Virus FT",
        price: 2.01,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957OnHfD9L6eO7kYSCgvrLP7rDkW4fvZMk0rHFrN7ziwHs80s5a2_zdYWdIwY7NAnR_lO4lLvm0ZG-6pudy2wj5He-YUVtAA"
      },
      weap27: {
        name: "StatTrak™ P90 | Virus MW",
        price: 4.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957OnHfD9L6eO6nYeDg8j4MqnWkyUG7pMniLqR8Nqs2Aa1rkRrYWuhI4-Qc1BqZlzU_ADrxrvm15W0tJ2c1zI97eG9a5dJ"
      },
      weap28: {
        name: "StatTrak™ P90 | Virus FN",
        price: 37.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FA957OnHfD9L6eO6nYeDg8j4MqnWkyUG7pMniLqR8Nqs2Aa1rkRrYWuhI4-Qc1BqZlzU_ADrxrvm15W0tJ2c1zI97eG9a5dJ"
      },
      weap29: {
        name: "StatTrak™ PP-Bizon | Blue Streak BS",
        price: 1.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3Yi1O7ciikZK0n_L1JaLummpD78A_37CZo9-m3Qfs-0A5YD3xdo-QJwI_aF_S81G2xujphJW0tcvMwHJkuj5iuyiHrXOA7w"
      },
      weap30: {
        name: "StatTrak™ PP-Bizon | Blue Streak WW",
        price: 1.51,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3Yi1O7ciikZK0mvLwOq7cqWdQ-sJ0xL_HoI_22QO2-EBvY2nzLIGWewQ-ZViBrFW5yeruh8W6vJzOzyRr7HM8pSGKj-jxCOw"
      },
      weap31: {
        name: "StatTrak™ PP-Bizon | Blue Streak FT",
        price: 1.18,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3Yi1O7ciikZK0mvLwOq7cqWdQ-sJ0xL_HoI_22QO2-EBvY2nzLIGWewQ-ZViBrFW5yeruh8W6vJzOzyRr7HM8pSGKj-jxCOw"
      },
      weap32: {
        name: "StatTrak™ PP-Bizon | Blue Streak MW",
        price: 3.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3Yi1O7ciikZK0m_7zO6_ummpD78A_3eiWod2ijA3h_0tpMDyhJoeRelRqNVuE-FO2w-_mhpa7vJXLnCNr6z5iuyjxm99JtA"
      },
      weap33: {
        name: "StatTrak™ PP-Bizon | Blue Streak FN",
        price: 62.97,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf2-r3Yi1O7ciikZK0m_7zO6_ummpD78A_3eiWod2ijA3h_0tpMDyhJoeRelRqNVuE-FO2w-_mhpa7vJXLnCNr6z5iuyjxm99JtA"
      },
      weap34: {
        name: "StatTrak™ MP7 | Ocean Foam MW",
        price: 5.71,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAZt7PzbYjRE9eO0mJWOqPv9NLPFqWdQ-sJ0xOuT9tyi31WyqEFvNz2hII6Wegc4Y1HR_1S5wO3nhJDo7svJwCQxsiQ8pSGKhxJU9ic"
      },
      weap35: {
        name: "StatTrak™ MP7 | Ocean Foam FN",
        price: 4.43,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6ryFAZt7PzbYjRE9eO0mJWOqPv9NLPFqWdQ-sJ0xOuT9tyi31WyqEFvNz2hII6Wegc4Y1HR_1S5wO3nhJDo7svJwCQxsiQ8pSGKhxJU9ic"
      },
      weap36: {
        name: "StatTrak™ Glock-18 | Steel Disruption FT",
        price: 3.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73dTlS7ciykY6YksjnOrfHk3lu5cB1g_zMyoD0mlOx5RVlMWqgII-SIQJvYgmB-lLrl-zr1sO76svOzSEx6HYk5HzcnkS21BhSLrs4Xp79IS8"
      },
      weap37: {
        name: "StatTrak™ Glock-18 | Steel Disruption MW",
        price: 3.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73dTlS7ciykY6YksjnOrfHk3lu5Mx2gv3--Y3nj1H6_xdkYDrzdYbHewM2MwrR_we4yOq8gpa4u5TAzycw7yUrs3uPyhWy0AYMMLIxVOW_RQ"
      },
      weap38: {
        name: "StatTrak™ Glock-18 | Steel Disruption FN",
        price: 5.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0v73dTlS7ciykY6YksjnOrfHk3lu5Mx2gv3--Y3nj1H6_xdkYDrzdYbHewM2MwrR_we4yOq8gpa4u5TAzycw7yUrs3uPyhWy0AYMMLIxVOW_RQ"
      },
      weap39: {
        name: "StatTrak™ Desert Eagle | Crimson Web BS",
        price: 3.74,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTipH7s-JkIGZnPLmDLPUl31I18lwmO7Eu9iiiVbhrRI4Zmn2JoDBdwBsMFHTrFm5x-rmgJXqtc7KySRksnVx5nrD30vgH7YYjcU"
      },
      weap40: {
        name: "StatTrak™ Desert Eagle | Crimson Web WW",
        price: 5.68,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTipH7s-JkIGZnPLmDLbUkmJE5fp9i_vG8ML22wbj-0tqZG_2INeTdgc-Zl_S-FbqxL-71J60up7IzSY36CkmsXnUgVXp1lzsUQgy"
      },
      weap41: {
        name: "StatTrak™ Desert Eagle | Crimson Web FT",
        price: 4.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTipH7s-JkIGZnPLmDLbUkmJE5fp9i_vG8ML22wbj-0tqZG_2INeTdgc-Zl_S-FbqxL-71J60up7IzSY36CkmsXnUgVXp1lzsUQgy"
      },
      weap42: {
        name: "StatTrak™ Desert Eagle | Crimson Web MW",
        price: 23.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTipH7s-JkIGZnPLmDLfYkWNF18lwmO7Eu9v30Ve2-ko-Mjr2JtPHJwFtZVGF-QDslbi9hcW4vJ2cmHBmuHZ3s3fD30vg7NYdUho"
      },
      weap43: {
        name: "StatTrak™ Desert Eagle | Crimson Web FN",
        price: 384.37,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PvRTipH7s-JkIGZnPLmDLfYkWNF18lwmO7Eu9v30Ve2-ko-Mjr2JtPHJwFtZVGF-QDslbi9hcW4vJ2cmHBmuHZ3s3fD30vg7NYdUho"
      },
      weap44: {
        name: "StatTrak™ AUG | Bengal Tiger BS",
        price: 6.63,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957OfBdjhQ09SzlZaSqPv1IbzU2GgDuMcj2OzErN2ijFfkqUE4MG7zcdfHcQ5vNwyD8ge2wby8hJC0vpnXiSw0P_Iqp_Y"
      },
      weap45: {
        name: "StatTrak™ AUG | Bengal Tiger WW",
        price: 9.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957OfBdjhQ09GzkImemsj4MqnWkyUEuJ112euTrN6t2Fe3rkJlZTqnIIaRI1BoaQzW-Fjolb_rhMS4vcjB1zI97ZDlUbTa"
      },
      weap46: {
        name: "StatTrak™ AUG | Bengal Tiger FT",
        price: 6.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957OfBdjhQ09GzkImemsj4MqnWkyUEuJ112euTrN6t2Fe3rkJlZTqnIIaRI1BoaQzW-Fjolb_rhMS4vcjB1zI97ZDlUbTa"
      },
      weap47: {
        name: "StatTrak™ AUG | Bengal Tiger MW",
        price: 16.88,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957OfBdjhQ09C_k4ifqPv1IbzU2G8D7sAo377FptWl21C3_kRram3zJ9PBc1U3ZFHU_QS_ybi-gsO66snXiSw0v9hgqjA"
      },
      weap48: {
        name: "StatTrak™ AUG | Bengal Tiger FN",
        price: 210.07,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFA957OfBdjhQ09C_k4ifqPv1IbzU2G8D7sAo377FptWl21C3_kRram3zJ9PBc1U3ZFHU_QS_ybi-gsO66snXiSw0v9hgqjA"
      },
      weap49: {
        name: "StatTrak™ Nova | Bloomstick BS",
        price: 7.54,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbYS9L4tuJmo-dlsj8NrrHj1Rd6dd2j6eY84ig0QWx8xY9ZG6md46UdlI9NVzX8lW8xefm1sDu7pjMmCQxuHEi-z-DyK6WDR2H"
      },
      weap50: {
        name: "StatTrak™ Nova | Bloomstick WW",
        price: 6.56,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbYS9L4tuJmo-dlsj5Nr_Yg2Zu5MRjjeyPrNun3FbhqUVqZW-id9SdcABvNwyC_lG8wLy-jcO_6c7NyXsxuyRxtGGdwUIirudS7A"
      },
      weap51: {
        name: "StatTrak™ Nova | Bloomstick FT",
        price: 7.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbYS9L4tuJmo-dlsj5Nr_Yg2Zu5MRjjeyPrNun3FbhqUVqZW-id9SdcABvNwyC_lG8wLy-jcO_6c7NyXsxuyRxtGGdwUIirudS7A"
      },
      weap52: {
        name: "StatTrak™ Nova | Bloomstick MW",
        price: 12.79,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbYS9L4tuJmo-dlsj4OrzZglRd6dd2j6eR94ms3VXk-hc4Zm2hIYGccw44ZV7UrlG7wu28gJe1ucufm3Nn6yh0-z-DyKRYOT6Q"
      },
      weap53: {
        name: "StatTrak™ Nova | Bloomstick FN",
        price: 89.77,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhjxszbYS9L4tuJmo-dlsj4OrzZglRd6dd2j6eR94ms3VXk-hc4Zm2hIYGccw44ZV7UrlG7wu28gJe1ucufm3Nn6yh0-z-DyKRYOT6Q"
      },
      weap54: {
        name: "StatTrak™ AWP | Corticera FT",
        price: 24.47,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PXJZzhO7eO3g5C0mvLwOq7cqWdQ-sJ0xL6UotT33FDn-UBvMDj6cIfAdgFtN13Rr1folezp08S_tJ3NwSNm6HE8pSGKFALUdWg"
      },
      weap55: {
        name: "StatTrak™ AWP | Corticera MW",
        price: 24.95,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PXJZzhO7eO3g5C0m_7zO6_ummpD78A_3rqTrI-l3AOxqkJkamClJ46RdFc_MFDR_1K3k7_t1JS7upvMmHdn7z5iuygrdWg_VA"
      },
      weap56: {
        name: "StatTrak™ AWP | Corticera FN",
        price: 54.05,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PXJZzhO7eO3g5C0m_7zO6_ummpD78A_3rqTrI-l3AOxqkJkamClJ46RdFc_MFDR_1K3k7_t1JS7upvMmHdn7z5iuygrdWg_VA"
      },
      weap57: {
        name: "StatTrak™ P2000 | Corticera FT",
        price: 7.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJE7cqzmIG0h6WkY-vum25V4dB8teXA54vwxlbl_BBpZDr0INSSJgVvNFvT_AW7yb_ugpTou8jLzyQxvSIg7Xvbyh2pwUYbWvK6yx4"
      },
      weap58: {
        name: "StatTrak™ P2000 | Corticera MW",
        price: 10.75,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJE7cqzmIG0h6WkY-vummJW4NFOhujT8om7i1fg-xc-Zz32JIKdIQFqNQuGqFS8x-rt0Z-5uMjAyHZjunUn7H3Unwv330-Dajd6nw"
      },
      weap59: {
        name: "StatTrak™ P2000 | Corticera FN",
        price: 39.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJE7cqzmIG0h6WkY-vummJW4NFOhujT8om7i1fg-xc-Zz32JIKdIQFqNQuGqFS8x-rt0Z-5uMjAyHZjunUn7H3Unwv330-Dajd6nw"
      },
      weap60: {
        name: "StatTrak™ AK-47 | Jaguar BS",
        price: 50.06,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLO77QgHJu5MRjjeyP9N2ijFK3qks9am2nIY-ddVU9MwvTqQe3wLu5jZ-07cjJmnVn6SYn7WGdwUIg7NlC-A"
      },
      weap61: {
        name: "StatTrak™ AK-47 | Jaguar WW",
        price: 63.08,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLPr7Vn35c18lwmO7Eu46lilXm-kQ4YmHxdoeddVVqY1vU-lO7lb3vg57uu5rIzCMw7nZ35i3D30vgFhd2p1E"
      },
      weap62: {
        name: "StatTrak™ PAK-47 | Jaguar FT",
        price: 76.94,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLPr7Vn35c18lwmO7Eu46lilXm-kQ4YmHxdoeddVVqY1vU-lO7lb3vg57uu5rIzCMw7nZ35i3D30vgFhd2p1E"
      },
      weap63: {
        name: "StatTrak™ AK-47 | Jaguar MW",
        price: 131.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLP7LWnn9u5MRjjeyPo46iiwzm-0tvMWyldtSScwA9YAmE_Vi4wL-8hJO4v8nInyFh6yVxsWGdwUIYQq5JMA"
      },
      weap64: {
        name: "StatTrak™ AK-47 | Jaguar FN",
        price: 342.52,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszYcDNW5Nmkq4GAw6DLP7LWnn9u5MRjjeyPo46iiwzm-0tvMWyldtSScwA9YAmE_Vi4wL-8hJO4v8nInyFh6yVxsWGdwUIYQq5JMA"
      },
      weap65: {
        name: "StatTrak™ M4A4 | Bullet Rain BS",
        price: 74.22,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszKZDFO6ciJhoGCmcj5Z7qAqWNU6dNoteXA54vwxg2xrhJrYm32IoHHdQFvZluG81DqwLrn05e87puYmHs1uSYh7X2OyRGpwUYbML2rKHU"
      },
      weap66: {
        name: "StatTrak™ M4A4 | Bullet Rain WW",
        price: 27.54,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszKZDFO6ciJhoGCmcj5Z7qAqWZU7Mxkh9bN9J7yjRq18kBsZG6lJ4SUcAdrMlzR8wLsk-bvh5ftvZrLnHE1uCYjs3yMl0O1n1gSOYmlpP_c"
      },
      weap67: {
        name: "StatTrak™ M4A4 | Bullet Rain FT",
        price: 28.78,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszKZDFO6ciJhoGCmcj5Z7qAqWZU7Mxkh9bN9J7yjRq18kBsZG6lJ4SUcAdrMlzR8wLsk-bvh5ftvZrLnHE1uCYjs3yMl0O1n1gSOYmlpP_c"
      },
      weap68: {
        name: "StatTrak™ M4A4 | Bullet Rain MW",
        price: 62.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszKZDFO6ciJhoGCmcj5Z7qAqWdY781lteXA54vwxgC2-EZlYGH0do7EIFVqM1iBr1i8wO3r18e86p_IyXQwviAnsXbfnRepwUYblVXtojA"
      },
      weap69: {
        name: "StatTrak™ M4A4 | Bullet Rain FN",
        price: 338.95,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszKZDFO6ciJhoGCmcj5Z7qAqWdY781lteXA54vwxgC2-EZlYGH0do7EIFVqM1iBr1i8wO3r18e86p_IyXQwviAnsXbfnRepwUYblVXtojA"
      }
	}
  },
//Vanguard
 case12: {
    milspec: {
      weap1: {
        name: "UMP-45 | Delusion FT",
        price: 0.19,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwOP3ZDBSuImJkM2dnuT9PLXCqWZU7Mxkh9bN9J7yjRq2r0Q5NWygJdOXdwI-Z1mFrwO7wunrhcDouZScmHZi63F04X7Vmh2xn1gSOcvFfm8r"
      },
      weap2: {
        name: "UMP-45 | Delusion MW",
        price: 0.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwOP3ZDBSuImJkM2dnuT9PLXCqWdY781lteXA54vwxgfnqhZrNmCmLNTDcAJrNFHXrFXowrrs0MO9vZ6czHNksiJz4nrbyUSpwUYbODub6t8"
      },
      weap3: {
        name: "UMP-45 | Delusion FN",
        price: 1.87,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwOP3ZDBSuImJkM2dnuT9PLXCqWdY781lteXA54vwxgfnqhZrNmCmLNTDcAJrNFHXrFXowrrs0MO9vZ6czHNksiJz4nrbyUSpwUYbODub6t8"
      },
      weap4: {
        name: "MP9 | Dart BS",
        price: 0.70,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJB5Nmgho-FqP_xMq3IqWdQ-sJ0xOqUrdSl3g22-BJkYj33LNWWdgI4YwzY_1a6wbrrjMC0tMybn3JqvSU8pSGKru1DHGo"
      },
      weap5: {
        name: "MP9 | Dart WW",
        price: 0.32,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJB5Nmgho-FqPrxN7LEm1Rd6dd2j6eUpon0jgTj-0tpY2nwI4CXewE-Y1uG_1Toxb3ph8LqvM-fzyBl7HMn-z-DyNv_un7P"
      },
      weap6: {
        name: "MP9 | Dart FT",
        price: 0.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJB5Nmgho-FqPrxN7LEm1Rd6dd2j6eUpon0jgTj-0tpY2nwI4CXewE-Y1uG_1Toxb3ph8LqvM-fzyBl7HMn-z-DyNv_un7P"
      },
      weap7: {
        name: "MP9 | Dart MW",
        price: 0.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJB5Nmgho-FqPv9NLPFqWdQ-sJ0xL-YrY333Qzn_kBrNmqmcILHdQA4YAzTrALoxuu90JC-6p2anSQy6Ck8pSGKo7I07Pg"
      },
      weap8: {
        name: "MP9 | Dart FN",
        price: 0.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJB5Nmgho-FqPv9NLPFqWdQ-sJ0xL-YrY333Qzn_kBrNmqmcILHdQA4YAzTrALoxuu90JC-6p2anSQy6Ck8pSGKo7I07Pg"
      },
      weap9: {
        name: "MAG-7 | Firestarter BS",
        price: 0.37,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhzw8zFcDoV09q_hoWJnuPgNrXunm5Q_txOhujT8om73lLt-kJqNzynd9PEIVc-N13Tq1K-xum8jMC5tZSfziBkuyAht3bezQv3309JALRhkg"
      },
      weap10: {
        name: "MAG-7 | Firestarter WW",
        price: 0.52,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhzw8zFcDoV09q_hoWJnuPgNrXum25V4dB8teXA54vwxgS1_xY4ammlJdSTIQQ_MArV_we4xL-70ZPovpucmiE3vnMl5yvdyxOpwUYbnBaN0K0"
      },
      weap11: {
        name: "MAG-7 | Firestarter FT",
        price: 0.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhzw8zFcDoV09q_hoWJnuPgNrXum25V4dB8teXA54vwxgS1_xY4ammlJdSTIQQ_MArV_we4xL-70ZPovpucmiE3vnMl5yvdyxOpwUYbnBaN0K0"
      },
      weap12: {
        name: "MAG-7 | Firestarter MW",
        price: 0.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhzw8zFcDoV09q_hoWJnuPgNrXummJW4NFOhujT8om73gDkqhVuNj2hIYTEdVA_ZljW-FHrwOnq0cLt7ZifzCE1vSYh5n3YzQv330-fq6NOtQ"
      },
      weap13: {
        name: "MAG-7 | Firestarter FN",
        price: 1.05,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhzw8zFcDoV09q_hoWJnuPgNrXummJW4NFOhujT8om73gDkqhVuNj2hIYTEdVA_ZljW-FHrwOnq0cLt7ZifzCE1vSYh5n3YzQv330-fq6NOtQ"
      },
      weap14: {
        name: "G3SG1 | Murky FT",
        price: 0.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf0v73dm5R642JmZWZnO7LPr7Vn35c18lwmO7Eu4730Ayy8xU-Mm2iJdLDdwdvZQ7Z_FK6xbu70cW8uszNySQy6XYn5y3D30vgUzwHFlY"
      },
      weap15: {
        name: "G3SG1 | Murky MW",
        price: 0.24,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf0v73dm5R642JmZWZnO7LP7LWnn9u5MRjjeyP94-hjQyw-xZrYz3xLYOXdwE4NV2D81e7wrq-gpfqvpybmnJh6Cgj5WGdwUKiw-CmAw"
      },
      weap16: {
        name: "G3SG1 | Murky FN",
        price: 0.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf0v73dm5R642JmZWZnO7LP7LWnn9u5MRjjeyP94-hjQyw-xZrYz3xLYOXdwE4NV2D81e7wrq-gpfqvpybmnJh6Cgj5WGdwUKiw-CmAw"
      },
      weap17: {
        name: "Five-SeveN | Urban Hazard FT",
        price: 0.52,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTEhGlQ5vp5i_PA54jKhVGwogYxDDWiZtHAbFA3aV-D_VDoybju0MTotc6fnSFruyQq7HqLyhG_hxpFZ-1mjKObS1qAR_se4c1UVuE"
      },
      weap18: {
        name: "Five-SeveN | Urban Hazard MW",
        price: 0.58,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTEhGlQ5vp5i_PA54jKhF2zowcDPzixc9OLdgM4aF7WrlO9l7-5hJa_uM7MyCBruyMit3iMmBW1iBwdOOVngvWcT0LeWfIFPrcKKw"
      },
      weap19: {
        name: "Five-SeveN | Urban Hazard FN",
        price: 0.71,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTEhGlQ5vp5i_PA54jKhF2zowcDPzixc9OLdgM4aF7WrlO9l7-5hJa_uM7MyCBruyMit3iMmBW1iBwdOOVngvWcT0LeWfIFPrcKKw"
      }
    },
    restricted: {
      weap1: {
        name: "Sawed-Off | Highwayman BS",
        price: 0.42,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYSEkfHLMbfQlWBW58l1teHE9Jrst1i1uRQ5fWH6LIWVdFU7Nw3V81C-k7jm18C078nMz3VhuyBwtnaOzReziUpKO7FxxavJdzfWlHs"
      },
      weap2: {
        name: "Sawed-Off | Highwayman WW",
        price: 0.37,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYSEkfHLMbfQlWBW58l1teTE8YXghWu4qgE7Nnf3ItDDewJoaQ3RrlC5wuq60MLttZiamHI17yQm4nndy0Th1UlOZuJsm7XAHhtx3kjc"
      },
      weap3: {
        name: "Sawed-Off | Highwayman FT",
        price: 0.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYSEkfHLMbfQlWBW58l1teTE8YXghWu4qgE7Nnf3ItDDewJoaQ3RrlC5wuq60MLttZiamHI17yQm4nndy0Th1UlOZuJsm7XAHhtx3kjc"
      },
      weap4: {
        name: "Sawed-Off | Highwayman MW",
        price: 0.53,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYSEkfHLMbfQlWBW58l1teXI8oTht1i1uRQ5fW2iLNWWIwQ5Ml_Y-gK8kOu61pXpuM_Pz3plvikqsSyImxa-1R0daeZxxavJyWv5Wgg"
      },
      weap5: {
        name: "Sawed-Off | Highwayman FN",
        price: 0.97,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYSEkfHLMbfQlWBW58l1teXI8oTht1i1uRQ5fW2iLNWWIwQ5Ml_Y-gK8kOu61pXpuM_Pz3plvikqsSyImxa-1R0daeZxxavJyWv5Wgg"
      },
      weap6: {
        name: "M4A4 | Griffin BS",
        price: 1.49,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09uknYaNnvnLO77QgHJu5MRjjeyPpYin0Qbi-RE5Zmzwd4TAIQI3YFnQqQLrxOrth8S8tZzPm3ow6Clw42GdwUJnuIpzVA"
      },
      weap7: {
        name: "M4A4 | Griffin WW",
        price: 2.71,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09uknYaNnvnLPr7Vn35c18lwmO7Eu96kiVCx_kBlY26lJ9eUJlc_MFHW-Ae9l-vogpO5vZTPyHNnuXQitinD30vgHP9iLbw"
      },
      weap8: {
        name: "M4A4 | Griffin FT",
        price: 1.54,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09uknYaNnvnLPr7Vn35c18lwmO7Eu96kiVCx_kBlY26lJ9eUJlc_MFHW-Ae9l-vogpO5vZTPyHNnuXQitinD30vgHP9iLbw"
      },
      weap9: {
        name: "M4A4 | Griffin MW",
        price: 1.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09uknYaNnvnLP7LWnn9u5MRjjeyPp9mgilDs-BU4YG3wcdedJw5qaVyB-wW7kufrjJO16J2by3Qw63ZzsGGdwUIIJNFlNw"
      },
      weap10: {
        name: "M4A4 | Griffin FN",
        price: 4.14,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09uknYaNnvnLP7LWnn9u5MRjjeyPp9mgilDs-BU4YG3wcdedJw5qaVyB-wW7kufrjJO16J2by3Qw63ZzsGGdwUIIJNFlNw"
      },
      weap16: {
        name: "M4A1-S | Basilisk BS",
        price: 1.75,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3hb-Gw_alIITTl3hY5MxigdbJ8I3jkWu4qgE7NnfzI46UJgNvZFvY_gW6wezthpO66Z_IwXdg7HZ3sCnblxbhhExLbuI8m7XAHvkxRHOj"
      },
      weap17: {
        name: "M4A1-S | Basilisk WW",
        price: 2.37,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3hb-Gw_alIITTl3hY5MxigdbM8Ij8nVmLpxIuNDztIYbGJ1I8YA7Rq1C6le7m15S47ZWdzSc1vyEm5n-Lnhe0iEoda-xtgOveFwv4dX1sfw"
      },
      weap18: {
        name: "M4A1-S | Basilisk FT",
        price: 1.90,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3hb-Gw_alIITTl3hY5MxigdbM8Ij8nVmLpxIuNDztIYbGJ1I8YA7Rq1C6le7m15S47ZWdzSc1vyEm5n-Lnhe0iEoda-xtgOveFwv4dX1sfw"
      },
      weap19: {
        name: "M4A1-S | Basilisk MW",
        price: 2.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3hb-Gw_alIITTl3hY5MxigdbN_Iv9nGu4qgE7NnfyLIWSclI4ZF3X_1G-wunp0Je_u87On3Qxuidx4iqJmxPkiEwfPbNtm7XAHjQFcBpg"
      },
      weap20: {
        name: "M4A1-S | Basilisk FN",
        price: 3.83,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3hb-Gw_alIITTl3hY5MxigdbN_Iv9nGu4qgE7NnfyLIWSclI4ZF3X_1G-wunp0Je_u87On3Qxuidx4iqJmxPkiEwfPbNtm7XAHjQFcBpg"
      },
      weap13: {
        name: "Glock-18 | Grinder FT",
        price: 0.71,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0uL3djFN79eJl4-Cm_LwDLbUkmJE5fp9i_vG8MKj3wLgr0Q-Y2inLICTdwY5MwnT8wS9yOjo1Ja_usmczHJruCAks3fagVXp1pDkAvIB"
      },
      weap14: {
        name: "Glock-18 | Grinder MW",
        price: 0.69,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0uL3djFN79eJl4-Cm_LwDLfYkWNF18lwmO7Eu4ihjFe2rUM4YW73I4_HewNvZQmE_lLtwui5hsS_6p6dmnpk6HJ27XvD30vg-FaCZJg"
      },
      weap15: {
        name: "Glock-18 | Grinder FN",
        price: 0.86,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0uL3djFN79eJl4-Cm_LwDLfYkWNF18lwmO7Eu4ihjFe2rUM4YW73I4_HewNvZQmE_lLtwui5hsS_6p6dmnpk6HJ27XvD30vg-FaCZJg"
      }
    },
    classified: {
      weap1: {
        name: "XM1014 | Tranquility BS",
        price: 2.47,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-IluX9J7rCqWNU6dNoteXA54vwxge2_BFuammlIdKQIwU5NQ7S-lm9we-8hcfu7p-cmnE36XEr5X-LlxKpwUYbIz3Bsbc"
      },
      weap2: {
        name: "XM1014 | Tranquility WW",
        price: 3.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-IluX9J7rCqWZU7Mxkh9bN9J7yjRq1qEJoZ2_xJoTGdwU-NVqF-FK5ku7p1sK9uJnLmHFi6Cl34HnczEC3n1gSOQa4pUVU"
      },
      weap3: {
        name: "XM1014 | Tranquility FT",
        price: 2.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-IluX9J7rCqWZU7Mxkh9bN9J7yjRq1qEJoZ2_xJoTGdwU-NVqF-FK5ku7p1sK9uJnLmHFi6Cl34HnczEC3n1gSOQa4pUVU"
      },
      weap4: {
        name: "XM1014 | Tranquility MW",
        price: 2.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-IluX9J7rCqWdY781lteXA54vwxgTi-xZqYG77coPHd1dsZw6D_1Lvw7q9gZO96p6dz3oxsiAh5inenxGpwUYbnX3d0Ig"
      },
      weap5: {
        name: "XM1014 | Tranquility FN",
        price: 6.16,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-IluX9J7rCqWdY781lteXA54vwxgTi-xZqYG77coPHd1dsZw6D_1Lvw7q9gZO96p6dz3oxsiAh5inenxGpwUYbnX3d0Ig"
      },
      weap6: {
        name: "SCAR-20 | Cardiac BS",
        price: 2.69,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c7kxL-CmePxIa3UmH9Y58tOguzA45XKhFWmrBZyajr0cYGTe1NraVCG_AK_lLrthcW6tMmfwCdjvyAn4nbemRPkg0tLa_sv26LiLhxSXQ"
      },
      weap7: {
        name: "SCAR-20 | Cardiac WW",
        price: 2.35,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c7kxL-CmePxIa3UmH9Y58tOh-zF_Jn4t1i1uRQ5fTqgd9eWcAA8Y1rY-FK-wbvv0cXvuJrKwHFnvCZx43yPmUDj00lMPLZxxavJjrohnxA"
      },
      weap8: {
        name: "SCAR-20 | Cardiac FT",
        price: 2.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c7kxL-CmePxIa3UmH9Y58tOh-zF_Jn4t1i1uRQ5fTqgd9eWcAA8Y1rY-FK-wbvv0cXvuJrKwHFnvCZx43yPmUDj00lMPLZxxavJjrohnxA"
      },
      weap9: {
        name: "SCAR-20 | Cardiac MW",
        price: 2.87,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c7kxL-CmePxIa3UmH9Y58tOhuDG_ZjKhFWmrBZyam-nLdeXdFVtMF7R_VO-xuzvjce0v5udzXBn7iYl4y2OzRfk1BseZ_sv26K4FaBPlw"
      },
      weap10: {
        name: "SCAR-20 | Cardiac FN",
        price: 7.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c7kxL-CmePxIa3UmH9Y58tOhuDG_ZjKhFWmrBZyam-nLdeXdFVtMF7R_VO-xuzvjce0v5udzXBn7iYl4y2OzRfk1BseZ_sv26K4FaBPlw"
      },
      weap11: {
        name: "P250 | Cartel BS",
        price: 2.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhhwszYI2gS09-3hpSOm8j8NrrHj1Rd6dd2j6eSpdXx3lexrhZoZGr7IoecdgVvZg3V-VG-w-bnh5S7u5ufn3Ri7HZx-z-DyP2c95ga"
      },
      weap12: {
        name: "P250 | Cartel WW",
        price: 2.69,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhhwszYI2gS09-3hpSOm8j5Nr_Yg2Zu5MRjjeyP8N-k3way-UM5NmCiLIeRIwQ4ZgvQq1O8k--7hp_vuZSdyXdrvnZx7WGdwUIdDe8uxA"
      },
      weap13: {
        name: "P250 | Cartel FT",
        price: 2.39,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhhwszYI2gS09-3hpSOm8j5Nr_Yg2Zu5MRjjeyP8N-k3way-UM5NmCiLIeRIwQ4ZgvQq1O8k--7hp_vuZSdyXdrvnZx7WGdwUIdDe8uxA"
      },
      weap14: {
        name: "P250 | Cartel MW",
        price: 2.78,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhhwszYI2gS09-3hpSOm8j4OrzZglRd6dd2j6fFo9_wiQXl_EpvZzigLNCcIwI-MA6F-lO5l7_r1Je4v5WdmyBivScl-z-DyIG61H2I"
      },
      weap15: {
        name: "P250 | Cartel FN",
        price: 6.35,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhhwszYI2gS09-3hpSOm8j4OrzZglRd6dd2j6fFo9_wiQXl_EpvZzigLNCcIwI-MA6F-lO5l7_r1Je4v5WdmyBivScl-z-DyIG61H2I"
      }
    },
    covert: {
      weap1: {
        name: "P2000 | Fire Elemental BS",
        price: 7.95,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-NnuXxDL7dk2ZU5tFwhtbJ8I3jkWu4qgE7Nnf2dtLGcQFrMFvV_lS2xu7ohpC06pzNynFn7iAmtyuIl0e_gRlIa-M6m7XAHkB_0hoA"
      },
      weap2: {
        name: "P2000 | Fire Elemental WW",
        price: 8.34,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-NnuXxDL7dk2ZU5tFwhtbM8Ij8nVmLpxIuNDztLYGcJFVoZF3X-gO2x7y808K8vZ2cwHYxsigh4C7emkfm1BxOb7M80eveFwtKPv5lvA"
      },
      weap3: {
        name: "P2000 | Fire Elemental FT",
        price: 7.88,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-NnuXxDL7dk2ZU5tFwhtbM8Ij8nVmLpxIuNDztLYGcJFVoZF3X-gO2x7y808K8vZ2cwHYxsigh4C7emkfm1BxOb7M80eveFwtKPv5lvA"
      },
      weap4: {
        name: "P2000 | Fire Elemental MW",
        price: 9.89,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-NnuXxDL7dk2ZU5tFwhtbN_Iv9nGu4qgE7NnfycYOSJgJqaA7RqVS_lOjuhsW9tZ_KynVk63En4CmMzRHlgUkeb7c8m7XAHtIREKva"
      },
      weap5: {
        name: "P2000 | Fire Elemental FN",
        price: 17.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-NnuXxDL7dk2ZU5tFwhtbN_Iv9nGu4qgE7NnfycYOSJgJqaA7RqVS_lOjuhsW9tZ_KynVk63En4CmMzRHlgUkeb7c8m7XAHtIREKva"
      },
      weap6: {
        name: "AK-47 | Wasteland Rebel BS",
        price: 15.76,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLO77QgHJu5MRjjeyPp4ijjAW1_EBqMG_zcdOTcQJrNFvXqVi_xejqhp697ZSczycyuHEn42GdwUJmbl0i6g"
      },
      weap7: {
        name: "AK-47 | Wasteland Rebel WW",
        price: 21.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLPr7Vn35c18lwmO7Eu9mhiwLnr0RvMWnxLdedIwY4YFCC_lnrk-28h5K675rIyntj6ygl4HnD30vgkRiUzqw"
      },
      weap8: {
        name: "AK-47 | Wasteland Rebel FT",
        price: 19.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLPr7Vn35c18lwmO7Eu9mhiwLnr0RvMWnxLdedIwY4YFCC_lnrk-28h5K675rIyntj6ygl4HnD30vgkRiUzqw"
      },
      weap9: {
        name: "AK-47 | Wasteland Rebel MW",
        price: 27.40,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLP7LWnn9u5MRjjeyP89z2i1KxrhJkMm3wJtedcFVoZQ6C_Qe-xe_u1JG-uMmbm3ZgviUrtGGdwULRVQuqfg"
      },
      weap10: {
        name: "AK-47 | Wasteland Rebel FN",
        price: 120.00,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLP7LWnn9u5MRjjeyP89z2i1KxrhJkMm3wJtedcFVoZQ6C_Qe-xe_u1JG-uMmbm3ZgviUrtGGdwULRVQuqfg"
      }
	},
    stattrak: {
      weap1: {
        name: "StatTrak™ UMP-45 | Delusion FT",
        price: 0.58,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwOP3ZDBSuImJkM2dnuT9PLXCqWZU7Mxkh9bN9J7yjRq2r0Q5NWygJdOXdwI-Z1mFrwO7wunrhcDouZScmHZi63F04X7Vmh2xn1gSOcvFfm8r"
      },
      weap2: {
        name: "StatTrak™ UMP-45 | Delusion MW",
        price: 0.98,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwOP3ZDBSuImJkM2dnuT9PLXCqWdY781lteXA54vwxgfnqhZrNmCmLNTDcAJrNFHXrFXowrrs0MO9vZ6czHNksiJz4nrbyUSpwUYbODub6t8"
      },
      weap3: {
        name: "StatTrak™ UMP-45 | Delusion FN",
        price: 9.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1JfwOP3ZDBSuImJkM2dnuT9PLXCqWdY781lteXA54vwxgfnqhZrNmCmLNTDcAJrNFHXrFXowrrs0MO9vZ6czHNksiJz4nrbyUSpwUYbODub6t8"
      },
      weap4: {
        name: "StatTrak™ MP9 | Dart BS",
        price: 1.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJB5Nmgho-FqP_xMq3IqWdQ-sJ0xOqUrdSl3g22-BJkYj33LNWWdgI4YwzY_1a6wbrrjMC0tMybn3JqvSU8pSGKru1DHGo"
      },
      weap5: {
        name: "StatTrak™ MP9 | Dart WW",
        price: 0.65,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJB5Nmgho-FqPrxN7LEm1Rd6dd2j6eUpon0jgTj-0tpY2nwI4CXewE-Y1uG_1Toxb3ph8LqvM-fzyBl7HMn-z-DyNv_un7P"
      },
      weap6: {
        name: "StatTrak™ MP9 | Dart FT",
        price: 0.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJB5Nmgho-FqPrxN7LEm1Rd6dd2j6eUpon0jgTj-0tpY2nwI4CXewE-Y1uG_1Toxb3ph8LqvM-fzyBl7HMn-z-DyNv_un7P"
      },
      weap7: {
        name: "StatTrak™ MP9 | Dart MW",
        price: 0.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJB5Nmgho-FqPv9NLPFqWdQ-sJ0xL-YrY333Qzn_kBrNmqmcILHdQA4YAzTrALoxuu90JC-6p2anSQy6Ck8pSGKo7I07Pg"
      },
      weap8: {
        name: "StatTrak™ MP9 | Dart FN",
        price: 1.34,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJB5Nmgho-FqPv9NLPFqWdQ-sJ0xL-YrY333Qzn_kBrNmqmcILHdQA4YAzTrALoxuu90JC-6p2anSQy6Ck8pSGKo7I07Pg"
      },
      weap9: {
        name: "StatTrak™ MAG-7 | Firestarter BS",
        price: 0.62,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhzw8zFcDoV09q_hoWJnuPgNrXunm5Q_txOhujT8om73lLt-kJqNzynd9PEIVc-N13Tq1K-xum8jMC5tZSfziBkuyAht3bezQv3309JALRhkg"
      },
      weap10: {
        name: "StatTrak™ MAG-7 | Firestarter WW",
        price: 0.69,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhzw8zFcDoV09q_hoWJnuPgNrXum25V4dB8teXA54vwxgS1_xY4ammlJdSTIQQ_MArV_we4xL-70ZPovpucmiE3vnMl5yvdyxOpwUYbnBaN0K0"
      },
      weap11: {
        name: "StatTrak™ MAG-7 | Firestarter FT",
        price: 0.55,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhzw8zFcDoV09q_hoWJnuPgNrXum25V4dB8teXA54vwxgS1_xY4ammlJdSTIQQ_MArV_we4xL-70ZPovpucmiE3vnMl5yvdyxOpwUYbnBaN0K0"
      },
      weap12: {
        name: "StatTrak™ MAG-7 | Firestarter MW",
        price: 0.76,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhzw8zFcDoV09q_hoWJnuPgNrXummJW4NFOhujT8om73gDkqhVuNj2hIYTEdVA_ZljW-FHrwOnq0cLt7ZifzCE1vSYh5n3YzQv330-fq6NOtQ"
      },
      weap13: {
        name: "StatTrak™ MAG-7 | Firestarter FN",
        price: 4.29,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhzw8zFcDoV09q_hoWJnuPgNrXummJW4NFOhujT8om73gDkqhVuNj2hIYTEdVA_ZljW-FHrwOnq0cLt7ZifzCE1vSYh5n3YzQv330-fq6NOtQ"
      },
      weap14: {
        name: "StatTrak™ G3SG1 | Murky FT",
        price: 0.80,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf0v73dm5R642JmZWZnO7LPr7Vn35c18lwmO7Eu4730Ayy8xU-Mm2iJdLDdwdvZQ7Z_FK6xbu70cW8uszNySQy6XYn5y3D30vgUzwHFlY"
      },
      weap15: {
        name: "StatTrak™ G3SG1 | Murky MW",
        price: 0.82,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf0v73dm5R642JmZWZnO7LP7LWnn9u5MRjjeyP94-hjQyw-xZrYz3xLYOXdwE4NV2D81e7wrq-gpfqvpybmnJh6Cgj5WGdwUKiw-CmAw"
      },
      weap16: {
        name: "StatTrak™ G3SG1 | Murky FN",
        price: 1.27,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposem2LFZf0v73dm5R642JmZWZnO7LP7LWnn9u5MRjjeyP94-hjQyw-xZrYz3xLYOXdwE4NV2D81e7wrq-gpfqvpybmnJh6Cgj5WGdwUKiw-CmAw"
      },
      weap17: {
        name: "StatTrak™ Five-SeveN | Urban Hazard FT",
        price: 2.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTEhGlQ5vp5i_PA54jKhVGwogYxDDWiZtHAbFA3aV-D_VDoybju0MTotc6fnSFruyQq7HqLyhG_hxpFZ-1mjKObS1qAR_se4c1UVuE"
      },
      weap18: {
        name: "StatTrak™ Five-SeveN | Urban Hazard MW",
        price: 2.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTEhGlQ5vp5i_PA54jKhF2zowcDPzixc9OLdgM4aF7WrlO9l7-5hJa_uM7MyCBruyMit3iMmBW1iBwdOOVngvWcT0LeWfIFPrcKKw"
      },
      weap19: {
        name: "StatTrak™ Five-SeveN | Urban Hazard FN",
        price: 2.87,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposLOzLhRlxfbGTj5X09q_goWYkuHxPYTEhGlQ5vp5i_PA54jKhF2zowcDPzixc9OLdgM4aF7WrlO9l7-5hJa_uM7MyCBruyMit3iMmBW1iBwdOOVngvWcT0LeWfIFPrcKKw"
      },
      weap20: {
        name: "StatTrak™ Sawed-Off | Highwayman BS",
        price: 1.01,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYSEkfHLMbfQlWBW58l1teHE9Jrst1i1uRQ5fWH6LIWVdFU7Nw3V81C-k7jm18C078nMz3VhuyBwtnaOzReziUpKO7FxxavJdzfWlHs"
      },
      weap21: {
        name: "StatTrak™ Sawed-Off | Highwayman WW",
        price: 0.88,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYSEkfHLMbfQlWBW58l1teTE8YXghWu4qgE7Nnf3ItDDewJoaQ3RrlC5wuq60MLttZiamHI17yQm4nndy0Th1UlOZuJsm7XAHhtx3kjc"
      },
      weap22: {
        name: "StatTrak™ Sawed-Off | Highwayman FT",
        price: 1.04,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYSEkfHLMbfQlWBW58l1teTE8YXghWu4qgE7Nnf3ItDDewJoaQ3RrlC5wuq60MLttZiamHI17yQm4nndy0Th1UlOZuJsm7XAHhtx3kjc"
      },
      weap23: {
        name: "StatTrak™ Sawed-Off | Highwayman MW",
        price: 1.72,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYSEkfHLMbfQlWBW58l1teXI8oTht1i1uRQ5fW2iLNWWIwQ5Ml_Y-gK8kOu61pXpuM_Pz3plvikqsSyImxa-1R0daeZxxavJyWv5Wgg"
      },
      weap24: {
        name: "StatTrak™ Sawed-Off | Highwayman FN",
        price: 4.57,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cCx9_92hkYSEkfHLMbfQlWBW58l1teXI8oTht1i1uRQ5fW2iLNWWIwQ5Ml_Y-gK8kOu61pXpuM_Pz3plvikqsSyImxa-1R0daeZxxavJyWv5Wgg"
      },
      weap25: {
        name: "StatTrak™ M4A4 | Griffin BS",
        price: 5.52,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09uknYaNnvnLO77QgHJu5MRjjeyPpYin0Qbi-RE5Zmzwd4TAIQI3YFnQqQLrxOrth8S8tZzPm3ow6Clw42GdwUJnuIpzVA"
      },
      weap26: {
        name: "StatTrak™ M4A4 | Griffin WW",
        price: 8.51,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09uknYaNnvnLPr7Vn35c18lwmO7Eu96kiVCx_kBlY26lJ9eUJlc_MFHW-Ae9l-vogpO5vZTPyHNnuXQitinD30vgHP9iLbw"
      },
      weap27: {
        name: "StatTrak™ M4A4 | Griffin FT",
        price: 5.72,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09uknYaNnvnLPr7Vn35c18lwmO7Eu96kiVCx_kBlY26lJ9eUJlc_MFHW-Ae9l-vogpO5vZTPyHNnuXQitinD30vgHP9iLbw"
      },
      weap28: {
        name: "StatTrak™ M4A4 | Griffin MW",
        price: 8.97,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09uknYaNnvnLP7LWnn9u5MRjjeyPp9mgilDs-BU4YG3wcdedJw5qaVyB-wW7kufrjJO16J2by3Qw63ZzsGGdwUIIJNFlNw"
      },
      weap29: {
        name: "StatTrak™ M4A4 | Griffin FN",
        price: 19.67,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09uknYaNnvnLP7LWnn9u5MRjjeyPp9mgilDs-BU4YG3wcdedJw5qaVyB-wW7kufrjJO16J2by3Qw63ZzsGGdwUIIJNFlNw"
      },
      weap30: {
        name: "StatTrak™ M4A1-S | Basilisk BS",
        price: 8.21,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3hb-Gw_alIITTl3hY5MxigdbJ8I3jkWu4qgE7NnfzI46UJgNvZFvY_gW6wezthpO66Z_IwXdg7HZ3sCnblxbhhExLbuI8m7XAHvkxRHOj"
      },
      weap31: {
        name: "StatTrak™ M4A1-S | Basilisk WW",
        price: 11.81,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3hb-Gw_alIITTl3hY5MxigdbM8Ij8nVmLpxIuNDztIYbGJ1I8YA7Rq1C6le7m15S47ZWdzSc1vyEm5n-Lnhe0iEoda-xtgOveFwv4dX1sfw"
      },
      weap32: {
        name: "StatTrak™ M4A1-S | Basilisk FT",
        price: 8.05,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3hb-Gw_alIITTl3hY5MxigdbM8Ij8nVmLpxIuNDztIYbGJ1I8YA7Rq1C6le7m15S47ZWdzSc1vyEm5n-Lnhe0iEoda-xtgOveFwv4dX1sfw"
      },
      weap33: {
        name: "StatTrak™ M4A1-S | Basilisk MW",
        price: 9.77,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3hb-Gw_alIITTl3hY5MxigdbN_Iv9nGu4qgE7NnfyLIWSclI4ZF3X_1G-wunp0Je_u87On3Qxuidx4iqJmxPkiEwfPbNtm7XAHjQFcBpg"
      },
      weap34: {
        name: "StatTrak™ M4A1-S | Basilisk FN",
        price: 15.23,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3hb-Gw_alIITTl3hY5MxigdbN_Iv9nGu4qgE7NnfyLIWSclI4ZF3X_1G-wunp0Je_u87On3Qxuidx4iqJmxPkiEwfPbNtm7XAHjQFcBpg"
      },
      weap35: {
        name: "StatTrak™ Glock-18 | Grinder FT",
        price: 3.41,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0uL3djFN79eJl4-Cm_LwDLbUkmJE5fp9i_vG8MKj3wLgr0Q-Y2inLICTdwY5MwnT8wS9yOjo1Ja_usmczHJruCAks3fagVXp1pDkAvIB"
      },
      weap36: {
        name: "StatTrak™ Glock-18 | Grinder MW",
        price: 3.41,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0uL3djFN79eJl4-Cm_LwDLfYkWNF18lwmO7Eu4ihjFe2rUM4YW73I4_HewNvZQmE_lLtwui5hsS_6p6dmnpk6HJ27XvD30vg-FaCZJg"
      },
      weap37: {
        name: "StatTrak™ Glock-18 | Grinder FN",
        price: 4.69,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0uL3djFN79eJl4-Cm_LwDLfYkWNF18lwmO7Eu4ihjFe2rUM4YW73I4_HewNvZQmE_lLtwui5hsS_6p6dmnpk6HJ27XvD30vg-FaCZJg"
      },
      weap38: {
        name: "StatTrak™ XM1014 | Tranquility BS",
        price: 7.93,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-IluX9J7rCqWNU6dNoteXA54vwxge2_BFuammlIdKQIwU5NQ7S-lm9we-8hcfu7p-cmnE36XEr5X-LlxKpwUYbIz3Bsbc"
      },
      weap39: {
        name: "StatTrak™ XM1014 | Tranquility WW",
        price: 13.07,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-IluX9J7rCqWZU7Mxkh9bN9J7yjRq1qEJoZ2_xJoTGdwU-NVqF-FK5ku7p1sK9uJnLmHFi6Cl34HnczEC3n1gSOQa4pUVU"
      },
      weap40: {
        name: "StatTrak™ XM1014 | Tranquility FT",
        price: 8.48,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-IluX9J7rCqWZU7Mxkh9bN9J7yjRq1qEJoZ2_xJoTGdwU-NVqF-FK5ku7p1sK9uJnLmHFi6Cl34HnczEC3n1gSOQa4pUVU"
      },
      weap41: {
        name: "StatTrak™ XM1014 | Tranquility MW",
        price: 14.73,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-IluX9J7rCqWdY781lteXA54vwxgTi-xZqYG77coPHd1dsZw6D_1Lvw7q9gZO96p6dz3oxsiAh5inenxGpwUYbnX3d0Ig"
      },
      weap42: {
        name: "StatTrak™ XM1014 | Tranquility FN",
        price: 29.99,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-IluX9J7rCqWdY781lteXA54vwxgTi-xZqYG77coPHd1dsZw6D_1Lvw7q9gZO96p6dz3oxsiAh5inenxGpwUYbnX3d0Ig"
      },
      weap43: {
        name: "StatTrak™ SCAR-20 | Cardiac BS",
        price: 6.94,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c7kxL-CmePxIa3UmH9Y58tOguzA45XKhFWmrBZyajr0cYGTe1NraVCG_AK_lLrthcW6tMmfwCdjvyAn4nbemRPkg0tLa_sv26LiLhxSXQ"
      },
      weap44: {
        name: "StatTrak™ SCAR-20 | Cardiac WW",
        price: 6.71,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c7kxL-CmePxIa3UmH9Y58tOh-zF_Jn4t1i1uRQ5fTqgd9eWcAA8Y1rY-FK-wbvv0cXvuJrKwHFnvCZx43yPmUDj00lMPLZxxavJjrohnxA"
      },
      weap45: {
        name: "StatTrak™ SCAR-20 | Cardiac FT",
        price: 8.20,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c7kxL-CmePxIa3UmH9Y58tOh-zF_Jn4t1i1uRQ5fTqgd9eWcAA8Y1rY-FK-wbvv0cXvuJrKwHFnvCZx43yPmUDj00lMPLZxxavJjrohnxA"
      },
      weap46: {
        name: "StatTrak™ SCAR-20 | Cardiac MW",
        price: 13.25,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c7kxL-CmePxIa3UmH9Y58tOhuDG_ZjKhFWmrBZyam-nLdeXdFVtMF7R_VO-xuzvjce0v5udzXBn7iYl4y2OzRfk1BseZ_sv26K4FaBPlw"
      },
      weap47: {
        name: "StatTrak™ SCAR-20 | Cardiac FN",
        price: 57.10,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbmkOVUw7PDdTi5B7c7kxL-CmePxIa3UmH9Y58tOhuDG_ZjKhFWmrBZyam-nLdeXdFVtMF7R_VO-xuzvjce0v5udzXBn7iYl4y2OzRfk1BseZ_sv26K4FaBPlw"
      },
      weap48: {
        name: "StatTrak™ P250 | Cartel BS",
        price: 9.59,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhhwszYI2gS09-3hpSOm8j8NrrHj1Rd6dd2j6eSpdXx3lexrhZoZGr7IoecdgVvZg3V-VG-w-bnh5S7u5ufn3Ri7HZx-z-DyP2c95ga"
      },
      weap49: {
        name: "StatTrak™ P250 | Cartel WW",
        price: 9.70,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhhwszYI2gS09-3hpSOm8j5Nr_Yg2Zu5MRjjeyP8N-k3way-UM5NmCiLIeRIwQ4ZgvQq1O8k--7hp_vuZSdyXdrvnZx7WGdwUIdDe8uxA"
      },
      weap50: {
        name: "StatTrak™ P250 | Cartel FT",
        price: 9.12,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhhwszYI2gS09-3hpSOm8j5Nr_Yg2Zu5MRjjeyP8N-k3way-UM5NmCiLIeRIwQ4ZgvQq1O8k--7hp_vuZSdyXdrvnZx7WGdwUIdDe8uxA"
      },
      weap51: {
        name: "StatTrak™ P250 | Cartel MW",
        price: 14.17,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhhwszYI2gS09-3hpSOm8j4OrzZglRd6dd2j6fFo9_wiQXl_EpvZzigLNCcIwI-MA6F-lO5l7_r1Je4v5WdmyBivScl-z-DyIG61H2I"
      },
      weap52: {
        name: "StatTrak™ P250 | Cartel FN",
        price: 42.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhhwszYI2gS09-3hpSOm8j4OrzZglRd6dd2j6fFo9_wiQXl_EpvZzigLNCcIwI-MA6F-lO5l7_r1Je4v5WdmyBivScl-z-DyIG61H2I"
      },
      weap53: {
        name: "StatTrak™ P2000 | Fire Elemental BS",
        price: 56.31,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-NnuXxDL7dk2ZU5tFwhtbJ8I3jkWu4qgE7Nnf2dtLGcQFrMFvV_lS2xu7ohpC06pzNynFn7iAmtyuIl0e_gRlIa-M6m7XAHkB_0hoA"
      },
      weap54: {
        name: "StatTrak™ P2000 | Fire Elemental WW",
        price: 59.84,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-NnuXxDL7dk2ZU5tFwhtbM8Ij8nVmLpxIuNDztLYGcJFVoZF3X-gO2x7y808K8vZ2cwHYxsigh4C7emkfm1BxOb7M80eveFwtKPv5lvA"
      },
      weap55: {
        name: "StatTrak™ P2000 | Fire Elemental FT",
        price: 47.84,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-NnuXxDL7dk2ZU5tFwhtbM8Ij8nVmLpxIuNDztLYGcJFVoZF3X-gO2x7y808K8vZ2cwHYxsigh4C7emkfm1BxOb7M80eveFwtKPv5lvA"
      },
      weap56: {
        name: "StatTrak™ P2000 | Fire Elemental MW",
        price: 65.98,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-NnuXxDL7dk2ZU5tFwhtbN_Iv9nGu4qgE7NnfycYOSJgJqaA7RqVS_lOjuhsW9tZ_KynVk63En4CmMzRHlgUkeb7c8m7XAHtIREKva"
      },
      weap57: {
        name: "StatTrak™ P2000 | Fire Elemental FN",
        price: 116.46,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zLZAJSvozmxL-NnuXxDL7dk2ZU5tFwhtbN_Iv9nGu4qgE7NnfycYOSJgJqaA7RqVS_lOjuhsW9tZ_KynVk63En4CmMzRHlgUkeb7c8m7XAHtIREKva"
      },
      weap58: {
        name: "StatTrak™ AK-47 | Wasteland Rebel BS",
        price: 86.74,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLO77QgHJu5MRjjeyPp4ijjAW1_EBqMG_zcdOTcQJrNFvXqVi_xejqhp697ZSczycyuHEn42GdwUJmbl0i6g"
      },
      weap59: {
        name: "StatTrak™ AK-47 | Wasteland Rebel WW",
        price: 85.63,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLPr7Vn35c18lwmO7Eu9mhiwLnr0RvMWnxLdedIwY4YFCC_lnrk-28h5K675rIyntj6ygl4HnD30vgkRiUzqw"
      },
      weap60: {
        name: "StatTrak™ AK-47 | Wasteland Rebel FT",
        price: 94.84,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLPr7Vn35c18lwmO7Eu9mhiwLnr0RvMWnxLdedIwY4YFCC_lnrk-28h5K675rIyntj6ygl4HnD30vgkRiUzqw"
      },
      weap61: {
        name: "StatTrak™ AK-47 | Wasteland Rebel MW",
        price: 165.51,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLP7LWnn9u5MRjjeyP89z2i1KxrhJkMm3wJtedcFVoZQ6C_Qe-xe_u1JG-uMmbm3ZgviUrtGGdwULRVQuqfg"
      },
      weap62: {
        name: "StatTrak™ AK-47 | Wasteland Rebel FN",
        price: 757.50,
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszcYzRA-cizq4GAw6DLP7LWnn9u5MRjjeyP89z2i1KxrhJkMm3wJtedcFVoZQ6C_Qe-xe_u1JG-uMmbm3ZgviUrtGGdwULRVQuqfg"
      }
	}
  }
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
  stattrak: 0.98,
  covert: 0.995
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
     } else if (randNum >= rarityValue.classified && randNum <= rarityValue.stattrak) {
       rarity = "stattrak";
     } else if (randNum >= rarityValue.stattrak && randNum <= rarityValue.covert) {
       rarity = "covert";
     } else {
       rarity = "knife";
     }

     function skinChoose(r) {
       if (r === "knife") {
         var knifeCase = "";
         if (currentCase === "case14") {
           knifeCase = "chroma";
         } else if (currentCase === "case9") {
           knifeCase = "huntsman";
         } else if (currentCase === "case9") {
           knifeCase = "huntst";
         } else if (currentCase === "case10") {
           knifeCase = "butterfly";
         } else if (currentCase === "case10") {
           knifeCase = "butterst";
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
    if (rarity === "regular" || rarity === "butterst" || rarity === "chroma" || rarity === "huntsman" || rarity === "huntst" || rarity === "butterfly" || rarity === "shadow" || rarity === "falchion") {
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
    if (price >= 0 && money >= price) {
      money -= price;
	$('#player_btn_0_5')[0].play();
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
    $("#coinTab").removeClass("active");
    $(".upgradeContainer").hide();
    $(".jackpotRightContainer").hide();
    $(".inventoryContainer").hide();
    $(".caseContainer").show();
	$(".audioContainer").hide();
    $(".coinContainer").hide();
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
    $("#coinTab").removeClass("active");
    $(".upgradeContainer").hide();
    $(".jackpotRightContainer").hide();
    $(".inventoryContainer").show();
    $(".caseContainer").hide();
    $(".coinContainer").hide();
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
    $("#coinTab").removeClass("active");
    $(".upgradeContainer").show();
    $(".jackpotRightContainer").hide();
    $(".inventoryContainer").hide();
    $(".caseContainer").hide();
    $(".coinContainer").hide();
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
      $("#coinTab").removeClass("active");
      $(".upgradeContainer").hide();
      $(".jackpotRightContainer").show();
      $(".inventoryContainer").hide();
      $(".caseContainer").hide();
	  $(".audioContainer").hide();
      $(".coinContainer").hide();
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
    $("#coinTab").removeClass("active");
    $(".upgradeContainer").hide();
    $(".jackpotRightContainer").hide();
    $(".audioContainer").show();
    $(".coinContainer").hide();
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

$("#coinTab").click(function() {
  if ($(".coinContainer").css('display') == 'none') {
    $(this).toggleClass("active");
    $("#jackpotTab").removeClass("active");
    $("#upgradeTab").removeClass("active");
    $("#inventoryTab").removeClass("active");
    $("#audioTab").removeClass("active");
    $("#caseTab").removeClass("active");
    $(".upgradeContainer").hide();
    $(".jackpotRightContainer").hide();
    $(".coinContainer").show();
    $(".audioContainer").hide();
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
  $("#modalImage").attr("src", img + "");
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
      if (rarity === "regular" || rarity === "butterst" || rarity === "chroma" || rarity === "huntsman" || rarity === "huntst" || rarity === "butterfly" || rarity === "shadow" || rarity === "falchion") {
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
      if (rarity === "regular" || rarity === "butterst" || rarity === "chroma" || rarity === "huntsman" || rarity === "huntst" || rarity === "butterfly" || rarity === "shadow" || rarity === "falchion") {
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
    if (rarity === "regular" || rarity === "butterst" || rarity === "chroma" || rarity === "huntsman" || rarity === "huntst" || rarity === "butterfly" || rarity === "shadow" || rarity === "falchion") {
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
  bot20: ["Earth", 8, "https://i.imgur.com/uwIoGpM.jpg"],
  bot21: ["UnderWater", 8, "https://i.imgur.com/7BTk8ig.jpg"],
  bot22: ["Morty", 8, "https://i.imgur.com/Skzow5x.jpg"],
  bot23: ["Doge", 8, "https://i.gyazo.com/c69e8efdccc0c9a03f69df5206a57d21.png"],
  bot24: ["MyBack", 8, "https://i.imgur.com/sDpf0y3.jpg"],
  bot25: ["Skittle", 8, "https://i.imgur.com/Zi9J6CJ.jpg"],
  bot26: ["SirRazor", 8, "https://i.imgur.com/4WA3vTU.jpg"],
  bot27: ["DennyB", 8, "https://i.imgur.com/VNE57CT.jpg"],
  bot28: ["Bio", 8, "https://i.imgur.com/acTRiBk.jpg"],
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
  7: ["classified", "stattrak", "covert", "knife"],
  8: ["stattrak", "covert", "knife"],
  9: ["stattrak", "knife"]
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
      if (rarity === "regular" || rarity === "butterst" || rarity === "chroma" || rarity === "huntsman" || rarity === "huntst" || rarity === "butterfly" || rarity === "shadow" || rarity === "falchion") {
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
      if (rarity === "regular" || rarity === "butterst" || rarity === "chroma" || rarity === "huntsman" || rarity === "huntst" || rarity === "butterfly" || rarity === "shadow" || rarity === "falchion") {
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
	}
	else if (+x < +0) {
	 window.alert = function(){};  
	}  else {
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
