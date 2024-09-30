'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3532d11855ca175f717185077d3ca4ca",
".git/config": "580d646602ba740f33d05a038c4a15f0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "73605cc4f0053867f915858763d8e088",
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
".git/index": "f93224d03f954dff83d36e99fbad228f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ed601a365b97aa120c9b11ec95fc21fd",
".git/logs/refs/heads/1": "4dee5dde9c94ee965b051a2650992059",
".git/logs/refs/heads/2": "459ea68c6feae99563a6225940ec5fff",
".git/logs/refs/heads/3": "c6dae03b3fde619c9e1e35dcd97d3741",
".git/logs/refs/heads/main": "6b46ca1bfd14ed368eacc9e243f69afc",
".git/logs/refs/remotes/o/2": "6ce2d2879a7c93aede1af23eb55c890d",
".git/logs/refs/remotes/o/3": "f9e2f8fe87edeb746eaad9ad46eb6674",
".git/logs/refs/remotes/o/main": "6ecbd0b8f64dd11c7a5f9f290b1924c1",
".git/logs/refs/remotes/origin/1": "65a3bedf6bfb097ebe6c9e1fb9014919",
".git/logs/refs/remotes/origin/2": "5bb1f0e1f0d93d7dcb4534c9881fec63",
".git/logs/refs/remotes/origin/main": "789e27b6835c91e0c873aa2fa09019cc",
".git/objects/02/60fea2a40595a1cbdf876676a4dddada01bf35": "fa81867f25fbdb50f1059961524c221f",
".git/objects/02/aed707c3059e62a6ed8818efd14967444c32ee": "4e961fd0d227d8801ff8cbabcfced224",
".git/objects/03/1222d0b0153a15204036c1f758829dccf54515": "d1d3f0dc752c57507626da61426f18f3",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/06/e6ec1e9a53c928093d8c4212fa01039ac13e6e": "e85ffcce81e4d34577eaafb5cc79c066",
".git/objects/08/44a091dd6d43359c4498af515b155277716604": "40736736df41566c92da9c628fe3a9e0",
".git/objects/08/987b93f9cf89e6c25e69a882694c88c8eefd5b": "84a5b7a94fb10cf26f17cc59a9c88177",
".git/objects/0a/2d82b8a3b07e4f1937a5f5246ccc8174282d37": "bd28774925433353259437c837dd928c",
".git/objects/0c/43ae82a8262166fd32d2a6d4ac194a20f20d0e": "5115a2fccedb6a6c21568575f9b25e26",
".git/objects/0d/d03eacd7d2dc36c03e7216e4aceea299dfe04f": "1b3efdcae5d0dccb315615d9699c357f",
".git/objects/0e/ebca010bf47a526fc9e0832502711a5a982ed5": "3f1cdce9007072fe582287089a24f972",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/17/294c3e0651c9e15205d04aa28a0fdacf8db1bd": "6e6bfadcf41ab2d0a43874b2c7b4c912",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/39b7c7ef83f0b0345bc8d9df8e3ce103e6de5e": "1b5f727bb42417f8e29680e342085019",
".git/objects/29/0ee7ef969bd42f39fc900b8e88fe47a47bc9de": "770a6da723290507eb024fb24943308c",
".git/objects/2c/8f5ff2b669f9c30ca86d9f19a6bb1602cda60a": "affb3987a0362d0c1a566d6769eb4b7d",
".git/objects/2e/1e87c8372432124acdbc96fe04a44879d5c425": "35f46b23b70ae9f107e605b367e46d9f",
".git/objects/31/75bfbc764921310490c0617ede98d0062c9080": "82385e98f349914f0eb787cb4aeb2b97",
".git/objects/31/7a8bf270dd87ff6c182daede8f49dcce35de2b": "d8f6ad15e381f1d62f3a9f4426c35e3f",
".git/objects/32/62fbc2cef7d34f5185116286e5536b081133e2": "cd80f26370dc482dbf393090641d38cf",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/33bd13ee0ee2b4314123d6f96566272ee01d43": "c354aca5494297e2348ac2c2ed61a1e9",
".git/objects/34/fd0e83ce0862bfe901439be3b3e353c39df0ba": "148d24a217bb5ee09b459aaf0ec9ae07",
".git/objects/38/6104347429134ea02143c39e92b3363b64b03b": "981b94d40434d3d5344e96ab5850e586",
".git/objects/3a/55529e2bd22c8aa362c406bbd303fd0576ec3f": "fb5703f02960d5e0290020b7c7d266c6",
".git/objects/3a/6eedbc95eeb77019fcb79fdfd0d7179208981d": "fcee1ed7ebb63c8b6ce1d912b4b112bf",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/f64b056563103621e5f6805cad10777e29dba0": "db6bd6af2f332d54d36ba851d55b8026",
".git/objects/3b/f5d0866ffdd91fbede5de0f7aa264803f55d66": "8c46752250a88cdb6ba786ee65c3ff0d",
".git/objects/44/975188c4278d15530ce222e0e87c56832214b8": "e6578a9bcecf23f8522dabf543d76d91",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/32c245a74aa991c0992edb1473ab3988f9c235": "501b8dab7a8eae4c09eec9d5f87184be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/6ba0074e962c9f5b94cda5e603558a380a5a76": "1ae61a2ebd72eb5dadb0369940587fce",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/54/0b358f26741c3283a5974f96c54398d7340ce5": "100af9484780c03594b273d52a625304",
".git/objects/57/b2c8916a358417ff4c8981c3dcc0a1b2056f64": "7bdb22f60f42787cc0ba3c8f95ba9f86",
".git/objects/5a/314a54ef074f9f4f70e74d6bbab2b7a16cbfd5": "0b923c4d6622b06f1cf756ec8916c870",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/e12073ae56f0e35ef820cdd11790fd3c12b6b7": "7186c653f8e145520e5d7e863ead7225",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5f/4ef1fba4adf8bc98a350413af58db356231dda": "94468daff58d471722ea42fede7bd246",
".git/objects/5f/b5fb5f02836eede5ba8b2e3f1303f98d6c0079": "692bc575127b7034cbecff05be9d7a8d",
".git/objects/61/237f25ffc0aa1bd6a95d086fd3c8a2263c8b02": "ae2817c42ce8030984bc73a695d7c805",
".git/objects/61/af5c7a8724378c24f8d381bd0079b0987d0525": "7065282ff158f76598a97b9a6abbd21f",
".git/objects/66/0e90c7c34f520ae9b1663d02a7435b0ece3a13": "986804222cb4c7490b02faa3603aff12",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6a/63b25c7a5d7cbc7f3a4e15b50456eff8a61207": "94dfc72f7c718cad89630ced7849d815",
".git/objects/6a/ebee2ad1103cdbcd65ce16e71f84860a202e05": "6439e004fef8970bcaab1792457c109d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/8f4e9406c66ec1c5cfaa01a565eb15d93343f4": "7eb4dc02f02058c1bd99f3044fe7caf6",
".git/objects/6f/cab9d506448e840ad3ff4a9a6b4bdb6ddec8e8": "f53690710b73fdd5d5d3c86d458e5a91",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/33757b032fb223d586de2fa8609dc6118f4848": "45695de29a84deb9baf61cc52c54bb0f",
".git/objects/73/ce031f154d5f74468023ba4f6babf788bbd8fb": "8c0f3f547b91fc697d6f9a50b434b65c",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/75/edc9d41dfeadbc2b94398c400a015805d48b20": "909d5f759d51c10bfcced0f8b52dc0b3",
".git/objects/78/1de15482da194dea0b1054972834948aae5fa7": "16188cad7d65fb89b4d2e57da1d86611",
".git/objects/7c/ebfea3ea99791778c2f19b1e9241047c790be8": "627bb37a2330c0af3b7c085d5ebcf3b9",
".git/objects/7f/08d7c19f6956fa15c0b8e2af6161068527fad0": "ecec545e369763e3099d1e5859a10a50",
".git/objects/7f/9eb643bdbcb6dd186713512c9eec3062ed1596": "1406d7cd759cc6fa34fdc37bd7d09267",
".git/objects/83/bb615b964dfd337a4de9f7717d77c0a8b33610": "53194bfe533c8d93d34c08c2645b5251",
".git/objects/83/d9dfe0813479e992e948142cbecaf6c712fad3": "38fc81b7a760cd96e3dba8b058fcbf3f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/aaaf0c7af225939f5c0d19e686f6fde2bb577c": "6df5abd0a9bf7f7ff82bc4e64db01c1f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/8e3a6c46f1ef8610efc35cf9cb81be7397de04": "726671e054d12b45d26552ecf17c1bba",
".git/objects/8c/dddd2518b2081f1cb0493bb564bf9f5203e38c": "6f34ae06bb4d631bd976266215131512",
".git/objects/8f/3ff0222f907fc13148f3d6f8ed916b8b846239": "0180d3542c405d76df85ca4379480f5d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/11527329a27dbd7cb3221125c4e049f18c3eca": "1da02b0370fa17b72df7ad4b77b82fcd",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9b/97748041e46ba800d57639a825c920d5b0fb42": "448651bcb0d3eda4fab1a90d13089a16",
".git/objects/9d/527ea8188be7acc5752588e1d8f980c72746ff": "d9fdca46976003fef50bdad4e8796844",
".git/objects/9d/ee4cb219a2da7b2bad86b85687cc30dd8a64df": "7595be3d50b19dc9a0591b95d28f4247",
".git/objects/9f/edaadf15552fc6a874dd358c4813810bf6c39d": "3f8e10cf0542a5c843e1c8632bb9e5ec",
".git/objects/a0/5487b2734438618eef57cc89199bfab78f3413": "31f4dca747b9b72f4f1d12db06935805",
".git/objects/a0/6241ffa6c7a9d9d913f6f7fbc61783a4ec903d": "93dd621dec20f400db86e0b40d66b2d5",
".git/objects/a1/bc91ccbc4985ca30438ef716b0ea38452c8fc0": "a97715cc215908c24ed33ac4a645d2bb",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a4/2c0429cb6832c69559b60f8891d8ead4f81064": "6b9686219c0774dce5aab121c3afe9f3",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a7/7051866e12eaa7e7726f878ec85d26c74d4772": "0e66f2c494d98ea1e764401de17e92f7",
".git/objects/aa/83d3b1af020d3283950384acf855d6e8526c7f": "17ffbc364bb983285fa7ad4400921983",
".git/objects/b0/7ba20d97a0ccc92d79eb9f0a5c848538bf84d7": "6dbe32d38e89eb9be2c7e0991c8d58bd",
".git/objects/b2/32b367859e542d7a65e7932fbeca45d10bfd45": "cb09864d5bc1a99fb5c3a1f880a6246e",
".git/objects/b2/dbfa666b7aa1d818544a4af2ee49b11bd51de1": "7dcc03cc97e1e043363cda88bc872d80",
".git/objects/b3/720cd5b633716b807a0e52a1bd9b9c179db8c9": "8424a73aadd521e2cdf5a7a05b8bdbbb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/dd9159d8049635d1200994dbb6c525bf1b7820": "d12f4c7e7b484f5c495b41e3d0c10fca",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/83c046ca428a9663f705550ea383acbf4760af": "767a515e7290812b613e1f87e54353fc",
".git/objects/bf/307d12dd6756bd1d588bbfa87ca0cf54b4fe46": "c53954bc18d101ca2899c714a922aa51",
".git/objects/bf/dafffc8e7de29fb8db29346c389f94e9aab39f": "54fa3072ab4ad0f90694d9265789cf12",
".git/objects/c0/0d4622c9b2b6b8e9827fc3c975c5bdd1bba93b": "411923b5be06105ed62c80382aebd95c",
".git/objects/c1/32c6dd26688553ee4ec50f768c37a5fd192f90": "4abf7ec0d6accd09edf22793ad1aa86a",
".git/objects/c2/fcda86f64d9b077c8fe9d9fc713bab69c72deb": "08b7c55a9fb56ed91247f3c45b7160b1",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c3/a0d61be7cc7f8067c6894fad9471e4eadac0df": "fd2b193a3682d9c6ea6c01910d5bd997",
".git/objects/c7/1c34ff11dc60688f44164afd016f07d1270063": "36328e54d38a6950d5efe76441dd25b7",
".git/objects/cb/10cda3b9dd4473015bd85da9a9492bbec253e6": "ea2a72e35b7b87061fbf4fd0b74a934f",
".git/objects/cd/aa04957ee632e96d5ac85d27cff9e387c2009b": "57e4dfcae3a5f72f356652d1eec918c6",
".git/objects/d1/10fc23d6d402e4dab018cb0565afc101ab5f41": "51e56f3f9fcac1470a40a6ae0fcf5883",
".git/objects/d1/78d682dd12d7131000098751a557bf73d6eb07": "0cb49fce95386bf20245d48e79c18d5d",
".git/objects/d2/58256bae4f97a21063261b3d7b837d6033957f": "6f8cb043912dfe69be5686b594830430",
".git/objects/d3/1bd2479f4bbf8c1142ec1522d160a939b00bf3": "48d9da71e4e077ad18b7c956e0303017",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/13cc0988a353ee4d491a787377dc681a8baf44": "30b78ee8a0bc7aa8bc8e4bccd01da0ab",
".git/objects/d9/c6770322ee5b22ba5b5ce83a01298698de6acc": "1c0652066f1aaec54af882cd167753a3",
".git/objects/da/a5b0b6528e089f34a9229a7d6e2d1053db978f": "34230aba425d73f95bde1f133aa51b35",
".git/objects/dd/eda03f10aeb588e1ed4e7ec0e4cd8bac549e8a": "db2a9f16ad23fc239b4013dcb276c9c5",
".git/objects/de/1bfe453897a29c846291576e975f552fdbb457": "30005a31e71b20e72d89bdb18a8d656a",
".git/objects/de/bc3814710a3bdff00c3ffb1aca461937957999": "fc279a27382f2fa4025825e23886d495",
".git/objects/df/c1d12b207fbcc44ad710f670506512cd3baf6b": "9f86afad346caace2ff0bbed3ac40a01",
".git/objects/e0/f0d376ad43a77651cb7f170c6c4838a9349978": "fa54b916b7700c965f6f9b2090cae026",
".git/objects/e2/13bda0b1e442989e3e91c3f84a1cf5fdc8c511": "34c5c94483065d30144ed035cd4bd363",
".git/objects/e2/f693f6a2cbe68cd8dd74273ae0edb18d3bc4b0": "9b1ce7a4aa98f0358a0de01493de3de5",
".git/objects/e8/d818b66d5504358411a6f4e7464b6007ccaee4": "fc742cfd1aca3721410701cd4d0ea9f1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/0cd5235f8af9a510deaa7f83a8c392e16bb6cc": "7ec47dbe6128f53103acef5d0f85bff0",
".git/objects/f1/442ac6d0d14c8acb82079fb4221cc3e5cb3906": "a5df00dbcaf759242a4b64acf452e93d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/ce138b240de5796855f194e240f93c5724bc1e": "279538648b429f10a478c82c4cc265ab",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f5/92237f51e74d1bd4744379b7d6af26c0e43320": "c18ad1fcf778af6437e88229f5d485e5",
".git/objects/f7/0c21ed8c7e43fccd696bca638bb3106a165774": "2d43e7eff37035e3fde406b94a6a2dba",
".git/objects/f7/eaf61e2d736d490bb4e8b6aa593e217fadb956": "7f0fdcb7eebfad2a793b4e49c88ed3d9",
".git/objects/f8/c86908af09dde5091148a2cc21ab2860054ee4": "adb6a87683ae88f02b56618f13314375",
".git/objects/f9/e84ef6a9c36099e3c8d428f08e527831e71133": "1d8375943ce6b2c3f78f8808ae05f605",
".git/objects/fa/06b84e3cfb54808fb628d336aa55442a3978e6": "5f0c8d64a027e654d2d3c75962dab1dd",
".git/refs/heads/1": "fb8703c9512180abe9905b10c19f381c",
".git/refs/heads/2": "d4b858da6a246deed05a51976948ca8f",
".git/refs/heads/3": "fb8703c9512180abe9905b10c19f381c",
".git/refs/heads/main": "9a23f570aa1a11341d814c8d35e05cb8",
".git/refs/remotes/o/2": "d4b858da6a246deed05a51976948ca8f",
".git/refs/remotes/o/3": "fb8703c9512180abe9905b10c19f381c",
".git/refs/remotes/o/main": "9a23f570aa1a11341d814c8d35e05cb8",
".git/refs/remotes/origin/1": "d4b858da6a246deed05a51976948ca8f",
".git/refs/remotes/origin/2": "d4b858da6a246deed05a51976948ca8f",
".git/refs/remotes/origin/main": "de2085c74c4d558b85b0a6fa92d88b3f",
"assets/AssetManifest.bin": "9bb669c34343dcfbf402cf106fba70da",
"assets/AssetManifest.bin.json": "4fa0712d426e76e08153da087fa05342",
"assets/AssetManifest.json": "76293c26e32a2143765c9049028d7fba",
"assets/assets/doc/arabic.pdf": "579e7183054fbba7baba086af5643a21",
"assets/assets/doc/english.pdf": "e1a1f3a82c6a846678ae2845afaf1650",
"assets/assets/dummy/1.jpg": "c910225ae57404de81da7fac712cfa22",
"assets/assets/dummy/2.jpg": "96c22ad4e8a2c08156f56776c8003cda",
"assets/assets/dummy/3.jpg": "5e614555caaad0bd6672f9ed8b257215",
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
"assets/assets/image/payout.html": "1aa83f5db284ed69e99fa94d0e7a25a0",
"assets/assets/image/rent_now.svg": "0b75b3cb96e5228e8f4e8b109d4c8e18",
"assets/assets/image/sadad.svg": "d4d1ef99a7b902cfefae16dead456ac7",
"assets/assets/image/send_plane.svg": "cfd234cba2fd91ddabab65a97668ad25",
"assets/assets/image/settings.svg": "39a92f88719d309baaec2d42374465bd",
"assets/assets/image/storage_permission.svg": "6873d8a81a6ec9a576e9e783919acd5a",
"assets/assets/image/store.svg": "7e8f07f64fdf333290baeaf3a2444534",
"assets/assets/image/visa.svg": "3fa2ace9285566b4eb9fa8dd73a944ad",
"assets/assets/image/welcome_frnd.svg": "1e9d3e15d292eded3f9f37901d4f148a",
"assets/assets/image/welcome_frnd_bg.svg": "abe6748fd8cdd687b250548a02707552",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1804ae941b7255196ab28c84b2555aa8",
"assets/NOTICES": "a98ce89af929b1cbcd23e69de274d41e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
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
"flutter_bootstrap.js": "3d078fb16cc3c054872723c7d0dc4a21",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "98df5558089b5891875ae9756f649c00",
"/": "98df5558089b5891875ae9756f649c00",
"main.dart.js": "d12178e0eefa8fc0153ef71be81bfa69",
"manifest.json": "906cc61732e53e1575b93eec0411dd38",
"version.json": "7d73b25ebfdbec2db6b34d33288fa060"};
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
