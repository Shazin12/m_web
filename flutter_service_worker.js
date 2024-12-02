'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b9a7a68bccd35dc16b8796db1805ecde",
".git/config": "8e9436f8405a1c7952efc7ad68db6b8b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5e7e21deaa10a8b6edc2e8559e735ee5",
".git/HEAD": "6e5cb0535f27f17620f40ae1b9049827",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "027df9f19df19b2cfddae9e0ff1dd78e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17404d1ae60ea71907b6cc054039d9d1",
".git/logs/refs/heads/2": "3c1c7e16fd0a8ff1ec3eb8a4f7d48dc2",
".git/logs/refs/heads/4": "2606b62c1ca685a2fe8023dd0f88c92b",
".git/logs/refs/heads/main": "8637cbff2a565a578a1be448e3cb3256",
".git/logs/refs/remotes/origin/2": "991dade510f03f0b887d81ef3ce2e273",
".git/logs/refs/remotes/origin/4": "c1a0a61d7235b96c70a09fe361f267b4",
".git/logs/refs/remotes/origin/main": "8804f80d0d51988eb128a13fbeee2cac",
".git/objects/00/0bc9142f6f4bf72c5ddcbcf0f6531b328d039b": "03c227ee5e269948da5206b62e6da444",
".git/objects/02/20ac78f03972cc79cb101abb503a3161280255": "b54ea13a0a3bf460e015e31a277e0cb6",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/08/987b93f9cf89e6c25e69a882694c88c8eefd5b": "84a5b7a94fb10cf26f17cc59a9c88177",
".git/objects/0c/43ae82a8262166fd32d2a6d4ac194a20f20d0e": "5115a2fccedb6a6c21568575f9b25e26",
".git/objects/0c/b20bac7d4b789342ca6afa3089502a39d74a6e": "6eea3e266516233aa44a728e7c4d73c9",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/12/687ec31a029c816d51376a2c5a9506fe38b065": "5ee2f0c21a121a4c3758c0bbe27025d8",
".git/objects/13/9a5dc38041d976f204ac0ed081624014763e81": "f7af926e2718f990c13b736d5f6b75f3",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/17/b415625864bcb31fa592a7915fa3c3e121849d": "0d611baa92af11e9df758bbdfaae631f",
".git/objects/17/b9586c49643cd57c20c23930a0f969e8685168": "cf89cc2864da81dc9dc50e37efbf8275",
".git/objects/17/f859424f162984b807c5e016d6a65a60b71fd4": "56a2646de5a9201b84ed8becee27162d",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/19/98c21d29302bcc470b2b9fce1653180d802a30": "a7e200f500e577b48b8ebd9fd70a9b1d",
".git/objects/1a/c978f304797cfab06c2da33e66ac1fc7d743ac": "5006d4372653d47f6b94a21bcb6ddbaf",
".git/objects/1a/e62785e51166f697dcd01d1f82e691bd7a1800": "ee8ddfc5ca1eff421d3e4f63e9126534",
".git/objects/1c/69dce38e47e3658772741112a64c2bc575bf10": "5ca27cb3aa38c84199025c3f60500923",
".git/objects/1c/722cd968d9d0779a4286c25a2f00f757e14ef0": "fb786967610feb989fa794ee7df6d8aa",
".git/objects/1d/3aa67ac804dabc1dcde3d9f21e0819e5f06151": "782fc088d19f571891a7995af138a144",
".git/objects/1d/eb17dbca3487e614ac1875f639274445b5690d": "8eb0879d1d1420d0e0c9570fefea74f2",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/1e/c432610524b4748f446869d41429137079ed78": "1a1417b2501d60456531b65ae64d8c4d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/71ae554bc89bb30eac9c22521f8c64a5a0bc57": "a4bdaf42ad2abf4d4de309b3af93bf06",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/22/c8c911170e159aa2d559ee346d39efc548b488": "5b095b85703396a9975d950cd4c06ef2",
".git/objects/29/0ee7ef969bd42f39fc900b8e88fe47a47bc9de": "770a6da723290507eb024fb24943308c",
".git/objects/2a/5a0bb6a36408a9504becd5df907a729ce1cfca": "41c4607d80209cbb3c9e395d3daa39aa",
".git/objects/2c/8f5ff2b669f9c30ca86d9f19a6bb1602cda60a": "affb3987a0362d0c1a566d6769eb4b7d",
".git/objects/2e/ffeb4d4eeff638e3ebe3c41b1faf0c2e56b6a8": "b04249a3b863612f2d20a74933112828",
".git/objects/30/a758e810cdd1ad4ba1c740ef8c0a6d0fa08904": "1e50e6faaccaa4b02059a5c0d4120ae8",
".git/objects/31/c915265ccebe03052160cf8d84dde6d16c5671": "da4a2d8e34e7e2b99c6ddd4f9774b467",
".git/objects/32/62fbc2cef7d34f5185116286e5536b081133e2": "cd80f26370dc482dbf393090641d38cf",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/7e6d474781118add74fdee2ea965d6e1501769": "7acddec3251bc6542f3e043a280bc876",
".git/objects/34/fd0e83ce0862bfe901439be3b3e353c39df0ba": "148d24a217bb5ee09b459aaf0ec9ae07",
".git/objects/35/d5d126ff9fd8cf0606b46dc6c75b0a8684cb6f": "af7c370607293dd28e2d87cdbebc62e3",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/f5d0866ffdd91fbede5de0f7aa264803f55d66": "8c46752250a88cdb6ba786ee65c3ff0d",
".git/objects/43/580b057e850944213a3fd2578cf964e92ddd04": "b55d9c5e2b0e3520718611a0eedf325b",
".git/objects/44/975188c4278d15530ce222e0e87c56832214b8": "e6578a9bcecf23f8522dabf543d76d91",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/32c245a74aa991c0992edb1473ab3988f9c235": "501b8dab7a8eae4c09eec9d5f87184be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/027725ee98769b4c0dd116e5fb913f552935e4": "5f687c7b26996b1dccfc8044b4b6d3bd",
".git/objects/4a/963044b3262ebcb11c30bd8956f92fda81c89d": "6f3a28915664770b7f528b8607aa0e33",
".git/objects/4a/e58cda8bb9f00080ab83a9bd22b4240ccfff12": "51721367a72d11cc280120f9db099116",
".git/objects/4b/11a42192ecbc3d5106e8be6394db932fcd2ee2": "03564aa2d4626533545c4b9603b8ee51",
".git/objects/4b/e3e0115b0d447b4c8ecbd74cf038b5d0ac67cd": "dd78bff9e7d2b2cb9d86d474c9de03fe",
".git/objects/4c/f2089a01bfb44ff1b0e2f28d51aa19970b246e": "4451bf4d0ea42108ad003120897322d0",
".git/objects/4d/8556076498bfefc30cc385ede90992d287a844": "422a275ab5d786e35f055f08d9a1046a",
".git/objects/4d/a47a9f96ae52a898232c8953fe41b9e94455cf": "f90fc68c751a721440b240d838aa0249",
".git/objects/4d/b3f007feace36657b9ea103b8955ab534ab901": "11eaf7cc3602509cd1f0fdf58e2e3ea4",
".git/objects/4e/2c237312843cb6bb201a6648846cd6a13fef9d": "1f587e320c20263c37f612f50c3e20d8",
".git/objects/4e/bc0331a87222b52f7a3358d6cf6f331ed549db": "1c70d993eabe51d50a8f885feae5e176",
".git/objects/4f/fe1d7e7d51c6238628e55701aa2dcd8e26a47c": "cc627d13d28dec0c45f88492175ce4ed",
".git/objects/51/19e60d6c85236a984f8bede6c1b7481e645b5e": "d745542c7a890fd1f2db2f28261edf4c",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/58/6bde82f4d70aad57d16f98c892f13f5a7a4454": "e130cd5636fbc60c706f6ea925281514",
".git/objects/5a/314a54ef074f9f4f70e74d6bbab2b7a16cbfd5": "0b923c4d6622b06f1cf756ec8916c870",
".git/objects/5b/b9ef7ef2457bedda8c956c61bcb6f848a5198a": "501a92e2a58a61ea767ac8b694719fbd",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/e12073ae56f0e35ef820cdd11790fd3c12b6b7": "7186c653f8e145520e5d7e863ead7225",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/60/4b208ce473e4a0405135ad9426977f38c96585": "9f979bca4293cb5d07b8fa0e0f0e912d",
".git/objects/61/af5c7a8724378c24f8d381bd0079b0987d0525": "7065282ff158f76598a97b9a6abbd21f",
".git/objects/62/6afd3a77c0236a0b188ae3457270d42340503c": "6020fc64ba883b6c6b8312894f23af3c",
".git/objects/62/bef98e988de5993b85f1a9992a16117f5d2d85": "cf5755e0004037c06533f8340799cd3d",
".git/objects/63/c66e88ff2c934d0a55dce89570aff90c26b1fa": "85ae25c1b695adbb339ef4b7009b7108",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/68/15baa2f6c6a5064f8350b0beedfa4db3f838d3": "9dbb5237e20476e8bf85bc0eeac87826",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/9e5c2e784157958945be1d25f6ac4b41e4fc36": "d729087dffa2bdca458e65b5d32effe6",
".git/objects/6f/e521024f214d1d721f74b3fb54043ef17e65f5": "fdbf60530c30c4fb7c7ddcaf0b17c986",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/33757b032fb223d586de2fa8609dc6118f4848": "45695de29a84deb9baf61cc52c54bb0f",
".git/objects/74/5516c9a1ae171c851c44dabfc8a8804622d920": "b275e1c575bb4e18a06669efbd690063",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/75/61787eeb854128579140e54b25dac00130ea5c": "77b92c3096de684565f01194c2188552",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/76/bc0e457088338d4b2051cc6c0f82bdb3d0e2f7": "fd03001e2914670484cc429f2748a1c8",
".git/objects/7a/57b4976f8bf308458cea36cf244baf884c422e": "6a6fdcf0fc828cdc31d407339cb7ccce",
".git/objects/7a/c519ec4cffbba0c5ea21ad0601502db41d941d": "632272b0748b24537edcf647a4e7d709",
".git/objects/7b/d40113870ab0278159f7cf4cacf07c58b1c73a": "e1f54fb0aa5e232a468d89bee4180fde",
".git/objects/7c/470fbfdbb34d76a4c3408fab14a42143d2c1fa": "773393048c66dec042d59690483370d7",
".git/objects/7c/9f309105a9ede224abfddb1e834b637efa583e": "d224dd9e205bd203969d39329b077fa5",
".git/objects/7c/ebfea3ea99791778c2f19b1e9241047c790be8": "627bb37a2330c0af3b7c085d5ebcf3b9",
".git/objects/7c/ee3d8383d6fcaf10e6785ae7d628170dadd021": "81e69ac92bade75643d292bccf04e032",
".git/objects/7d/ce7a2e10111357f26216278f50b4f64b6083dd": "0177de1045fe3971aa40a8bbf462dab4",
".git/objects/7e/36348735bb2e28aef7c56018c421cd6fb93278": "241878ef35110e0ff8690063ffa18e9a",
".git/objects/7e/eed3f8a6a3473b58beda24df9b30600fb3b0c3": "b00e0a0123e8bb7e0f0e9e8582b28e1f",
".git/objects/7f/2a69507d0be5cf59271320d895ffb2f1a219d3": "d87a72952eb6508c8a61503992bc7cf9",
".git/objects/7f/8bbbc16f37a6f94e3a59ca1065ffa732d868a2": "00cb7744e0c68e4ffaf48751303dcbde",
".git/objects/7f/9eb643bdbcb6dd186713512c9eec3062ed1596": "1406d7cd759cc6fa34fdc37bd7d09267",
".git/objects/7f/e09c06ae34eb93cc9b02c1b7c06226abfb3618": "55e6cffe7df7a18f481ddee04a534182",
".git/objects/80/4d727389a2a8fc4d409dd764ff92f71e8d7ee8": "5c5ad2f348393e6b01f8cc1de5ab146f",
".git/objects/80/f445ea319bee095b4469ce7aae7813f2584721": "fe4b0df54964a3c5e9845a92040cd559",
".git/objects/83/4faaad3903ce9240923d303efaea4e659e3937": "03509186ec5e1e4feebac0938607d9ed",
".git/objects/83/bb615b964dfd337a4de9f7717d77c0a8b33610": "53194bfe533c8d93d34c08c2645b5251",
".git/objects/83/d9dfe0813479e992e948142cbecaf6c712fad3": "38fc81b7a760cd96e3dba8b058fcbf3f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/7f7b2ce55779ab4b6abe0086a8712546ec3059": "ea7325ae031cd161e83d146b57eb069f",
".git/objects/84/80eed387949e30b2522a837156e5209d391bf4": "fb4a589715387cbbda9f9c185af8b7c4",
".git/objects/84/aaaf0c7af225939f5c0d19e686f6fde2bb577c": "6df5abd0a9bf7f7ff82bc4e64db01c1f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/8e3a6c46f1ef8610efc35cf9cb81be7397de04": "726671e054d12b45d26552ecf17c1bba",
".git/objects/8e/79f437b1e614726eca035a756a46dd8453f582": "68906d9cdb6cb11640ad647c55b7c794",
".git/objects/8f/3864869a90e3a9f3df78fb68d731907d042940": "648246e60c1d3a746febc86b46a73992",
".git/objects/8f/cd090eee44cd2f7353f0d03704db1733260714": "0a0f8d24fd508382fb67654fc159c9a2",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/11527329a27dbd7cb3221125c4e049f18c3eca": "1da02b0370fa17b72df7ad4b77b82fcd",
".git/objects/93/b4e51a96729e4532b1282d8e551493c2c99cfe": "1a474e3ae4d94bc23b0c28b233c89022",
".git/objects/97/d2f90ae81e1d46ee39b8046bafdfe164824709": "c9a2a82100ebd4308113c6adbcacfc96",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/4bc50919350692e7c71b52d24c3cd8649665d4": "b9166ea3b33951b386f90a5679be6d70",
".git/objects/99/6978c337a68e3781cff81b207a2e53ebe3ab74": "a2b9a5acca07f163a281806ca666b42e",
".git/objects/9a/33f9dada262a07fca454d39b5a76ed38f34a4e": "2e17646ab97e36b609ddb0323e74734e",
".git/objects/9d/b6ef14a0df02d17ae442737b909784ded81534": "6d406185072c10b9bb8dc8266a822179",
".git/objects/9d/ee4cb219a2da7b2bad86b85687cc30dd8a64df": "7595be3d50b19dc9a0591b95d28f4247",
".git/objects/9e/3a2b95ed331b502dc585cc814c86077da73675": "51a614974d6739a8219c19b3ab3b5c3d",
".git/objects/a0/4800b66b768db692e62c8ad1bdfa45844d4e8e": "3338280dbe1d8c7798ea7ec98e0d25ae",
".git/objects/a0/a28ba55685b078e69f69cc6d4db11fa3f0ffb2": "a197674a3eeba371f3570cee8423d565",
".git/objects/a0/f3e8578d721d7dd4d6c76e5fd4e680319b5b85": "7bae4ff637c44cd9c8d09734656b00be",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a3/42e41fb2fc53abe1a10649d1cdcbba5a542f00": "3373f51021127b6351f7cc45f961aa2d",
".git/objects/a3/58ac791e105aa7a22f6dba42a9c871a19b2c16": "82ba0d5ec24e2fc093584d3f7725b074",
".git/objects/a5/1dc87c96bcf241d19fb05a92489fb2e1686ac6": "3dfb052338d2a6b3849d87f98173f3c4",
".git/objects/a5/1e99ec7bb41a6523634d8c81bc7b4d565c788a": "30b9ba44993a2a9e8188c096b719a1bb",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a6/59b3b25cb323245127ca21829df25bf88b267c": "8c65645f8c7d4fa9f4a86f0e0a3bce01",
".git/objects/a7/931d8b2a60ca5410d7a2794a3bbeb27f02cf01": "041fceb5b9677eaf4074b80219f5fcff",
".git/objects/a9/9db3bc6a780eba4a35f0ee005dab8af8be30f6": "ef09897bc7f51e9c1c3072cf6a924201",
".git/objects/a9/bdbb746659aa70c37e13058799c09d37a59d9d": "7a94f035c450a07309e4fd2c31b26a98",
".git/objects/ab/f43e208fc92d6b4f39445dbd22bd2569e29691": "8f1bac80b62ab886ffee50e992299485",
".git/objects/b0/7ba20d97a0ccc92d79eb9f0a5c848538bf84d7": "6dbe32d38e89eb9be2c7e0991c8d58bd",
".git/objects/b0/ae465f126875c184a26d79c0ad50d46b35f5cf": "6677d15309b2996b567e07bb96e9f033",
".git/objects/b1/27318e65200fb32ef7fa9941c606d35ab046cf": "504f462f3a9cbec43f33db572aae9df3",
".git/objects/b2/32b367859e542d7a65e7932fbeca45d10bfd45": "cb09864d5bc1a99fb5c3a1f880a6246e",
".git/objects/b4/e1e3347b5ceffca6d0b4582b1304e5d4ba4c39": "b4c96b807679dd5baaf3c6c05db7c8b7",
".git/objects/b5/f3cb48737bbd90bec27d7ba3d6e72023b5052c": "51a5a0dc965cfd694c40229a347a0fcf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/dd9159d8049635d1200994dbb6c525bf1b7820": "d12f4c7e7b484f5c495b41e3d0c10fca",
".git/objects/ba/41738fc7cc0cd6aae9a38578513562a5746c9e": "ff407bc89556ebbe545e8cfa3c989ecc",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/e8695b4babb131c92dac0b3b917636d0ac5bcf": "4595eb8fa4142b83122c21b0307fee2d",
".git/objects/ba/ff2ba247cb05ff31dfb5d2796c49b82c1d8126": "ce916b75eae75878c0a38cb3a9c91202",
".git/objects/bd/83c046ca428a9663f705550ea383acbf4760af": "767a515e7290812b613e1f87e54353fc",
".git/objects/be/898e09a482e29ee5ef4b6e15a89c2fb9eda498": "484ebdc56407e99d4899638eb4bcc37f",
".git/objects/bf/9d50e9230aa888ef10927488768c8f6c51c478": "c0d2179a271c5ab3b3af126eb2f7f7d0",
".git/objects/bf/dafffc8e7de29fb8db29346c389f94e9aab39f": "54fa3072ab4ad0f90694d9265789cf12",
".git/objects/c1/32c6dd26688553ee4ec50f768c37a5fd192f90": "4abf7ec0d6accd09edf22793ad1aa86a",
".git/objects/c1/7e2a463bdd2beb2992a37ab4cb6dac13b19fd7": "58895c181b2d02da13189a72e1b1eca9",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c5/b122f8e1947ed288adf3670667789f7dc065e9": "be4c3fcd4df69bb719ab66c64c6e84cb",
".git/objects/c6/6a9993d339fec2e490afd740bf497708ecd58d": "935f4ebe67f3e2ab264b8160eb7fba97",
".git/objects/c6/6c5924493e92cffbd3f3fb3c858f2930544570": "e3b4a6cccda4f8e984358e8385b91779",
".git/objects/c8/8f512918a327c5d5af4641e7c04f40b06961f7": "1d1c0ba4e8a439915637211dbd1994c9",
".git/objects/c9/9fa1acb31e31ade9812ae323590fadb73268f7": "f36dd349272d8773a5ae24ddb3ce0170",
".git/objects/ca/27af8fad06d8608f1c15aa8ee54ea8251d1b43": "b0a523c5f4d0419b366e6f0ea3329017",
".git/objects/cb/10cda3b9dd4473015bd85da9a9492bbec253e6": "ea2a72e35b7b87061fbf4fd0b74a934f",
".git/objects/cb/28ae8ab69c4ac5737a59f3a58bc42416ad6f5b": "ded20e6f5975648a6912ee37ec73c577",
".git/objects/cb/5b15511a163ce99f145d584a63b9713416b47b": "4b13322a68835cfe275fc91795405da5",
".git/objects/cc/6b8e756ffa2d94f783d5603f708560746f9494": "aeede7c0ad84e4f191d967064e415d46",
".git/objects/cd/aa04957ee632e96d5ac85d27cff9e387c2009b": "57e4dfcae3a5f72f356652d1eec918c6",
".git/objects/ce/36deb7e67852e889b015318b89cc75f095de2b": "5bd2c9f45010bf163d4d98fcf6ba695e",
".git/objects/ce/64e5b5b6151b55d90769aae4c837a77fddc903": "c49d141eac4d3a2eacb464f592732d73",
".git/objects/cf/300353e4504156e657803ed76b4e534e1c22d3": "941e3665cee29d7913cc1d61aa9fb238",
".git/objects/cf/c8f7ddd992420902e6b68e0e6f9bc0c9046deb": "158ca8b11280326d5a456b0cb6d8bd78",
".git/objects/d0/48f7df1967b80624479c43f9d34a74c740fecd": "3ff2f7f10393569469b8b44f13d71fa0",
".git/objects/d1/10fc23d6d402e4dab018cb0565afc101ab5f41": "51e56f3f9fcac1470a40a6ae0fcf5883",
".git/objects/d1/a6f59ad3d20b99dfe8c7b63baf409380481c6d": "6de172f87501291122817970348de68b",
".git/objects/d2/1cc379d6d07a931ccaa5c41b6babeb0a0214db": "2b8b56803b1e85de7e811efe819d702d",
".git/objects/d2/58256bae4f97a21063261b3d7b837d6033957f": "6f8cb043912dfe69be5686b594830430",
".git/objects/d2/e6efa8a8d216fbd4b6deaaf4df430f23879f99": "1eff412dcc2a3b2cb1f2349f34a74083",
".git/objects/d3/1bd2479f4bbf8c1142ec1522d160a939b00bf3": "48d9da71e4e077ad18b7c956e0303017",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/13cc0988a353ee4d491a787377dc681a8baf44": "30b78ee8a0bc7aa8bc8e4bccd01da0ab",
".git/objects/d8/b290e96e1c521ecda10e2572c2d12da2c67db0": "e919e9084f7c4a6a7ccfe905faccf7af",
".git/objects/da/a5b0b6528e089f34a9229a7d6e2d1053db978f": "34230aba425d73f95bde1f133aa51b35",
".git/objects/dd/eda03f10aeb588e1ed4e7ec0e4cd8bac549e8a": "db2a9f16ad23fc239b4013dcb276c9c5",
".git/objects/de/1bfe453897a29c846291576e975f552fdbb457": "30005a31e71b20e72d89bdb18a8d656a",
".git/objects/de/59627dcbfa74dedd89f55fb56bc032b6a7f858": "b817b93511df747ce5361b9db6424fc4",
".git/objects/df/c1d12b207fbcc44ad710f670506512cd3baf6b": "9f86afad346caace2ff0bbed3ac40a01",
".git/objects/e3/1dd7e3e7a88797a333790db855d70c3bc4b509": "5dfa5d72492ba37788bbbad17baf2580",
".git/objects/e3/597adbf4c9f8cc1620551b546196d37d7f9f5d": "27dbb1d19a97341eb575982beb0635c9",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e4/1c38ecc54aa53adc1af1ede6152592ec0b2cd6": "092d0db0e992e5dcfe3f7973c932fc39",
".git/objects/e7/b7c0b3dfa354837f293c2dc5f8543118e0e66d": "e997fbdb852a203fff2ffe43b6b4ee70",
".git/objects/e8/d818b66d5504358411a6f4e7464b6007ccaee4": "fc742cfd1aca3721410701cd4d0ea9f1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/26c125833b5dc9acd9ddfeafeeb04119d4a554": "09b7334e5306990ab4c1af71ab242af1",
".git/objects/ee/08e799bbed4252d7833d4e0d4bc8950c52e61e": "68e4268f31c27e2d32df3931c43decc9",
".git/objects/ee/13f08f61c1e3acc3345904100c39071e8cab8c": "af203e2e0e2d55f3c81e60c0a51708c2",
".git/objects/ef/a262dbd4ef5cd1f88e69bdc8929bd39de9cfa6": "83dcf06b2df06d45cce4626dcd73935c",
".git/objects/f0/0cd5235f8af9a510deaa7f83a8c392e16bb6cc": "7ec47dbe6128f53103acef5d0f85bff0",
".git/objects/f1/17019dd9b2f5b0e573805d71b49061fe810616": "28bdf9ef8f2898fab81002e436337dfd",
".git/objects/f1/442ac6d0d14c8acb82079fb4221cc3e5cb3906": "a5df00dbcaf759242a4b64acf452e93d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/ce138b240de5796855f194e240f93c5724bc1e": "279538648b429f10a478c82c4cc265ab",
".git/objects/f3/77c988ec64ac205ce6a0379b56ff9e38e824f0": "7b93f817e2a4e1e7873d5925f22dc131",
".git/objects/f4/01ae0d05c308388a6178b643fa25216a3ac933": "4f6883e73b16d48414db8929f6ca8913",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f6/e58f4e8d971114bcaf195292bbcf9d729151cb": "b374f6fb56fc58b286d574080d142548",
".git/objects/f8/83ae4c3406f04a976b2291e3a6515823a4d599": "bb333c436cdc86fab2b83e3db9c3e11d",
".git/objects/f8/c86908af09dde5091148a2cc21ab2860054ee4": "adb6a87683ae88f02b56618f13314375",
".git/objects/f8/c8fef0f8c8aba44a871ff971789b352e9786fb": "af7f5a2a522ec5873650c9e56c7c29d8",
".git/objects/f9/e84ef6a9c36099e3c8d428f08e527831e71133": "1d8375943ce6b2c3f78f8808ae05f605",
".git/objects/fa/06b84e3cfb54808fb628d336aa55442a3978e6": "5f0c8d64a027e654d2d3c75962dab1dd",
".git/objects/fa/3eebcb5ee8620737ee8d78d435d32daf7fbad1": "204249e7cdc791a0d7db5b06643e2b03",
".git/objects/fc/213686c3f549faf38589e5f202c2f4d42be378": "11335aaa82113e4f62c3e1dec4c82e0f",
".git/objects/fc/af2c67fbcfc5d0291da5ac6182f8737ad461b5": "58e2cde1bb14029c73deb51d86b26191",
".git/objects/ff/24afbf7e695a72f24c4f7d6bba3a510caab931": "68d891c441464fb42f515a851221ba0a",
".git/ORIG_HEAD": "7a828745c29c1e12e962b702324b8d9f",
".git/refs/heads/2": "467d34c54e3c0ade278e434920a4ee55",
".git/refs/heads/4": "467d34c54e3c0ade278e434920a4ee55",
".git/refs/heads/main": "a71a272351d5708f1fd1c574adda20f6",
".git/refs/remotes/origin/2": "7a828745c29c1e12e962b702324b8d9f",
".git/refs/remotes/origin/4": "467d34c54e3c0ade278e434920a4ee55",
".git/refs/remotes/origin/main": "6c3e17bb6d902c9130bbb1fcb25eee1d",
"assets/AssetManifest.bin": "41fc912d0feb796febe4c9ec1ec4c356",
"assets/AssetManifest.bin.json": "4ffa9c53db580f2a72e767335c28dfc9",
"assets/AssetManifest.json": "30cab5d4e5fcda16bbed5157bbceaf27",
"assets/assets/doc/arabic.pdf": "579e7183054fbba7baba086af5643a21",
"assets/assets/doc/english.pdf": "e1a1f3a82c6a846678ae2845afaf1650",
"assets/assets/dummy/1.jpg": "c910225ae57404de81da7fac712cfa22",
"assets/assets/dummy/2.jpg": "96c22ad4e8a2c08156f56776c8003cda",
"assets/assets/dummy/3.jpg": "5e614555caaad0bd6672f9ed8b257215",
"assets/assets/home/certified.svg": "66c58dee2d784d490fc2baaae84e2ef4",
"assets/assets/home/clients/1.webp": "f8eb5dfe104a307a195942047f9ab991",
"assets/assets/home/clients/10.webp": "824d56769d5a91783d7985d78a5bcda6",
"assets/assets/home/clients/11.webp": "d89ad50dfcbb0e92dd16502682900e66",
"assets/assets/home/clients/12.webp": "7826575e873aa96f7e16d7ec187190ca",
"assets/assets/home/clients/2.webp": "abdcc35debeaf60583d3a93f5c1c8127",
"assets/assets/home/clients/3.webp": "3a4b864d0eea24c5676ae8051da85024",
"assets/assets/home/clients/4.png": "44dba13780812035a3a1f4974952fedb",
"assets/assets/home/clients/5.svg": "eaf64d5dd9c3ec78f24837ec4d52021f",
"assets/assets/home/clients/6.png": "b5553bf517b2572802fa234663ff9055",
"assets/assets/home/clients/7.webp": "ff9e8306f3aa9a4d986ff710f471283a",
"assets/assets/home/clients/8.svg": "ce1d5aac4315bc04f97314c7f8a44e49",
"assets/assets/home/clients/9.webp": "229f436aa8fbdd563e2ed1efa9d7aab6",
"assets/assets/home/commercial_goods.webp": "ad9a2adef1d9d4fc85aaaab0dd87a398",
"assets/assets/home/cosmetics_and_perfumes.webp": "ec94b2e83237db6cafd1b810d6868e74",
"assets/assets/home/customer_service.svg": "0791e9970074d3e9ccab567e166c0912",
"assets/assets/home/dammam.webp": "4e622f84ea212a25c67f4ed864df3f5d",
"assets/assets/home/easy_access.svg": "ad55ecbf0c35d348c0dbb58f4e5e03a3",
"assets/assets/home/flexible_contracts.svg": "fd823827189c3b70d0c29ce4e782fff8",
"assets/assets/home/food_and_beverages.webp": "abcea2ee3a1a893af59ef6e1a0d5bd78",
"assets/assets/home/furniture.webp": "65270f191dd7fdead31aeb3a23694960",
"assets/assets/home/insurance.svg": "f327d309d44d7114f1ec6377acfa6399",
"assets/assets/home/jeddah.webp": "d1f43ee19a2188a7c9065d2c51c2e873",
"assets/assets/home/medical_equipment.webp": "3a4b3730e33a1d6a61a55e567f29298c",
"assets/assets/home/meeting_rooms.jpg": "5cec4eea79d8a8e82a65e5187b195391",
"assets/assets/home/monitoring_system.svg": "1975d93700afc41694dd0e7980f231ff",
"assets/assets/home/online_booking.svg": "cafaf6169609cd37991b0a3274140589",
"assets/assets/home/personal_belongings.webp": "ea0f40c02f9a95ccab616253606affab",
"assets/assets/home/privacy.svg": "a8a104055a45a42dcd596c640fff5e3e",
"assets/assets/home/private_office.jpg": "81ce47b87e540860cf1b1bf296b4ee90",
"assets/assets/home/riyadh.webp": "c0eb2767b4309c0096618977e66b4e10",
"assets/assets/home/self_storage.jpg": "26fa659b93ae4101ff123797035942cd",
"assets/assets/home/smart_access.webp": "b4c6b913603f07195d6019984ccc3bcb",
"assets/assets/image/add.svg": "a361c47a6302867efe130eafb422166c",
"assets/assets/image/auto_mode.svg": "7ed8420853bc9d644dcb4d31d2c0e84f",
"assets/assets/image/auto_renew.svg": "b20bc26599d33b4d7e5fc881d5741677",
"assets/assets/image/auto_renew_off.svg": "a58d2f407c4f48b1ed0e23670e4ab20b",
"assets/assets/image/bank_transfer.svg": "873c1c0c0e93f22c92547b7a0b1d1c93",
"assets/assets/image/cart.svg": "3efbe1238258da4f958d0ef95f300284",
"assets/assets/image/cart_empty.svg": "77d3a175eeaa745764426ba836cba2e1",
"assets/assets/image/dark_mode.svg": "7df81054dc5c961222d346ae07632a07",
"assets/assets/image/delete.svg": "9399d99c0bb1954198016a63e54b8d99",
"assets/assets/image/document.svg": "15849c66b811a93a5fab5d8f7ce48ddf",
"assets/assets/image/download_icon.svg": "e49e263dfc53da20df00938e3e043a25",
"assets/assets/image/error.svg": "52eb13c8a397f78b79ebec111fce1cfb",
"assets/assets/image/eye.svg": "e69dcb5a7b902d3c51be46840a2dc4d6",
"assets/assets/image/gate_access.svg": "125e4c41f833f89f1ccea51fbb9a5cd7",
"assets/assets/image/gate_close.svg": "b94a3f717607c01cd8c737d174b7d7ac",
"assets/assets/image/globe.png": "4f7f84f2c86b9f160afca84d815494c1",
"assets/assets/image/home.svg": "529360eaa5c49f1abbcdbf22e8c136e1",
"assets/assets/image/image_circle.svg": "678cb8cc781bfa8e5819f4024adb55c7",
"assets/assets/image/keypad_back.svg": "884f1ffbd5b3fb69a3d27cbe6525c34c",
"assets/assets/image/light_mode.svg": "85d9a754813f74f086f600debfc7fe20",
"assets/assets/image/location.svg": "aa2580dc94875b5e772c2eb3634099e3",
"assets/assets/image/logo.svg": "1487f54173b406fda7420672b38b02b8",
"assets/assets/image/logo_vert.png": "57a390cc1ae7b7d8a5c45938c7316b1a",
"assets/assets/image/maintainance.png": "f56920813fe1ff91ca7c12d90f39deb1",
"assets/assets/image/minuse.svg": "e852d580e8369cb74638d7c2001ff29c",
"assets/assets/image/my_storage.svg": "f5ba8fd267eba1cb113c26140bd16e16",
"assets/assets/image/no_login.svg": "8015286c9e1b90e348ef22e2a95a3317",
"assets/assets/image/no_storage_data.svg": "b6f82c1385d998e98d389ee245938fa5",
"assets/assets/image/rent_now.svg": "0b75b3cb96e5228e8f4e8b109d4c8e18",
"assets/assets/image/sadad.svg": "d4d1ef99a7b902cfefae16dead456ac7",
"assets/assets/image/send_plane.svg": "cfd234cba2fd91ddabab65a97668ad25",
"assets/assets/image/settings.svg": "39a92f88719d309baaec2d42374465bd",
"assets/assets/image/storage_permission.svg": "6873d8a81a6ec9a576e9e783919acd5a",
"assets/assets/image/store.svg": "7e8f07f64fdf333290baeaf3a2444534",
"assets/assets/image/take_tour.jpg": "ed95fd08263d4cfe2b99aa33e8f5133d",
"assets/assets/image/visa.svg": "3fa2ace9285566b4eb9fa8dd73a944ad",
"assets/assets/image/welcome_frnd.svg": "1e9d3e15d292eded3f9f37901d4f148a",
"assets/assets/image/welcome_frnd_bg.svg": "abe6748fd8cdd687b250548a02707552",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "090c8363ae56ed51105c383bc6d242a1",
"assets/NOTICES": "32ab55e3417fabd3483d44eba56a48f2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/geideapay/assets/bg.png": "8b3c726e97d08ef63bedea1a7f37e15f",
"assets/packages/geideapay/assets/bg1.png": "c86f864b4a71b4408e170c19ba4424f1",
"assets/packages/geideapay/assets/card_bg.png": "9b5cd474f849beb2c6b5aaf71a145ca6",
"assets/packages/geideapay/assets/images/american_express.png": "fac1ed63030230003fa52ee8f98aa8dc",
"assets/packages/geideapay/assets/images/dinners_club.png": "24450426cbb1e5b657356b6cca621956",
"assets/packages/geideapay/assets/images/discover.png": "c3a58509fe14ba54b0ca0ff29ee5619d",
"assets/packages/geideapay/assets/images/dob.png": "33734b76a856e9b07934793d83a14cae",
"assets/packages/geideapay/assets/images/jcb.png": "82658437070a16f35238c2f989a00c2a",
"assets/packages/geideapay/assets/images/mastercard.png": "6aecef820a950ef57140f79e07da916a",
"assets/packages/geideapay/assets/images/successful.png": "bd7cfa16ecd2b480ca4875fbf8d6f9e2",
"assets/packages/geideapay/assets/images/verve.png": "d9e7f9a5b6987ec61b7c2d0bd7db1271",
"assets/packages/geideapay/assets/images/visa.png": "a8b02279da904c1f40e041b20cbaf49c",
"assets/packages/geideapay/assets/logo.png": "6b99db4d09f04d0eb8513729bf989bbf",
"assets/packages/geideapay/assets/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/geideapay/icons/amex.png": "dad771da6513cec63005d2ef1271189f",
"assets/packages/geideapay/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/geideapay/icons/discover.png": "ea70c496dfa0169f6a3e59412472d6c1",
"assets/packages/geideapay/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/geideapay/icons/visa.png": "9db6b8c16d9afbb27b29ec0596be128b",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "afa3c07c9eaf5678c08cf8e1062cd302",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "98df5558089b5891875ae9756f649c00",
"/": "98df5558089b5891875ae9756f649c00",
"main.dart.js": "228459ade646baf98b24962804a1f2bd",
"manifest.json": "947fc1165c6eff7d2f70a779d48f5e93",
"version.json": "a9a674d54e3cbd2485e013b75e6c6acf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
