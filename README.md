# MalNet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build --prod --base-href https://user.github.io/Malnet/`

replace user with github username.

move dist/Malnet/* to dist folder

Run ngh to publish change

follow instructions here https://dzone.com/articles/how-to-deploy-an-angular-application-to-github

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Installing Dependencies

Run npm  install,

modify following node_module file

force-graph/src/index.d.ts

add below comment.

// @ts-ignore
export type ForceGraphInstance = ForceGraphGenericInstance<ForceGraphInstance>;

## Project configuration changes
Sample files
assets/config/about.json <br>
```json
[
  {
    "image-url": "assets/Android.png",
    "style": {
      "width" : "170px"
    },
    "text": "<b>Android malware on the rise</b> as smartphone popularity has surged, Android devices have become the most common target for malware infection, accounting for 47.15% of all device infections in 2017. In the same year, 2 billion devices were running Android with estimated infection rates of 0.31% per month. This results in a staggering 6 million Android device infections each month!"
  },
  {
    "image-url": "assets/Detect.png",
    "style": {
      "width" : "170px"
    },
    "text": "<b>Polymorphic nature of malware makes detection hard</b>: Unfortunately, a large majority of newly identified malware is polymorphic in nature, meaning that subtle source code changes result in entirely new variants of the malware. Cybercriminals frequently take advantage of this to evade signature-based detection, which is the predominant form of malware detection."
  },
  {
    "image-url": "assets/Download.png",
    "style": {
      "width" : "170px"
    },
    "text": "<b>To help combat malware we developed MalNet</b>: a large-scale dataset composed of both function call graphs (FCGs) and bytecode images extracted from over 1.2 million Android APKs. While hash-based techniques are vulnerable to the polymorphic nature of malware, graph and image-based representations have been shown to be much more robust. Our goal is to support the research community by providing a standardized dataset to benchmark new malware detection techniques."
  }
]
```
assets/config/citations.json <br>
```json
[
  {
    "title": "Evaluating Graph Vulnerability and Robustness using TIGER",
    "person" : [
      {
        "name": "Scott Freitas",
        "url": "https://google.ca"
      },
      {
        "name": "Duen Horng (Polo) Chau",
        "url": "https://google.ca"
      }
    ],
    "description": "https://google.ca",
    "project": "https://google.ca",
    "pdf": "https://google.ca",
    "demo": "https://google.ca",
    "video": "https://google.ca",
    "code": "https://google.ca",
    "bibtext": "https://google.ca",
    "other": "https://google.ca"
  },
  {
    "title": "Extracting Knowledge For Adversarial Detection and Defense in Deep Learning",
    "person" : [
      {
        "name": "Scott Freitas",
        "url": "https://google.ca"
      },
      {
        "name": "Duen Horng (Polo) Chau",
        "url": "https://google.ca"
      }
    ],
    "description": "https://google.ca",
    "project": "https://google.ca",
    "pdf": "https://google.ca",
    "demo": "https://google.ca",
    "video": "https://google.ca",
    "code": "https://google.ca",
    "bibtext": "https://google.ca",
    "other": "https://google.ca"
  },
  {
    "title": "X-Rank: Explainable Ranking in Complex Multi-Layered Networks",
    "person" : [
      {
        "name": "Scott Freitas",
        "url": "https://google.ca"
      },
      {
        "name": "Duen Horng (Polo) Chau",
        "url": "https://google.ca"
      }
    ],
    "description": "https://google.ca",
    "project": "https://google.ca",
    "pdf": "https://google.ca",
    "demo": "https://google.ca",
    "video": "https://google.ca",
    "code": "https://google.ca",
    "bibtext": "https://google.ca",
    "other": "https://google.ca"
  },
  {
    "title": "Rapid Analysis of Network Connectivity",
    "person" : [
      {
        "name": "Scott Freitas",
        "url": "https://google.ca"
      },
      {
        "name": "Duen Horng (Polo) Chau",
        "url": "https://google.ca"
      }
    ],
    "description": "https://google.ca",
    "project": "https://google.ca",
    "pdf": "https://google.ca",
    "demo": "https://google.ca",
    "video": "https://google.ca",
    "code": "https://google.ca",
    "bibtext": "https://google.ca",
    "other": "https://google.ca"
  }
]
```
assets/config/downloads.json <br>
```json
[
  {
    "list": [
      {
        "name" : "Graph Data",
        "image-link": "https://www.dropbox.com/",
        "image-url": "assets/node2.png",
        "style": {
          "width": "240px"
        },
        "text": "300GB of graph data. <b>1,262,024</b> unique function call graphs across 696 families and 47 types of malware."
      },{
        "name" : "Image Data",
        "image-link": "https://www.dropbox.com/",
        "image-url": "assets/binary.png",
        "style": {
          "width": "175px"
        },
        "text": "80GB of image data. <b>1,262,024</b> unique function call graphs across 696 families and 47 types of malware."
      }
    ]
  },
  {
    "list": [
      {
        "name" : "Metadata",
        "image-link": "https://www.dropbox.com/",
        "image-url": "assets/database.png",
        "style": {
          "width": "120px"
        },
        "text": "Antivirus vendors label malicious software according to a variety of conventions, creating noisy labels. To address this challenging research problem,we release VirusTotal reports containing 70 antivirus labels for each file"
      },{
        "name" : "Image Data",
        "image-link": "https://www.dropbox.com/",
        "image-url": "assets/text.png",
        "style": {
          "width": "145px"
        },
        "text": "We provide three files containing a recommended data split to train, validate and test your models in a ratio of 70%, 10% and 20%, respectively."
      }
    ]
  }
]
```
assets/config/faq.json <br>
```json
{
  "Where do the Android APK\"s come from?" : "The Android APKs were generously provided from the AndrooZoo repository https://androzoo.uni.lu/",
  "Do I have to worry about my computer being infected by downloading these files?" : "No. The image and graph representations are completely benign.",
  "Where can I download the images and graphs?" : "They can be downloaded from this page Download"
}

```
assets/config/graph.json <br>
```json
[
  {"id": "0", "text": "Search MalNet..."},
  {"id": "1", "text": "Addisplay", "children":[
    {"id": "2", "text": "Adshell", "children":[
      {"id": "3", "text": "04C12D5BF48FCDDC4FFEC11E55DD579B0AFD4AF645F35092705D5B9CAA3BB0F4.json"},
      {"id": "4", "text": "24E4103229DDB1D9724E1C02D3B94E6EA3728CCA15B27A17C372A90FD6A2C0BC.json"},
      {"id": "5", "text": "39C45FB3BBB4D20A9C082DDB52BCDBA3F13FDAC5FF3F7E376CEA38247806A6B9.json"},
      {"id": "6", "text": "874449D4F4B34D41723172AE83D0C50105B459A6E02DA4E4272813A657B42F68.json"},
      {"id": "7", "text": "C688E0E5536F82AC3AC78BEA281A431B2E71D8F79B179D294282DA6A8154621A.json"}
    ]},
    {"id": "8", "text": "Aliyuncs", "children":[
      {"id": "9", "text": "984695960B812B11441BFD8A6CDF3A328BE39F57ACF6AE6F39650A2CFFC4BC4D.json"},
      {"id": "10", "text": "051432BBB0B05EA9F453D5CE8FFDC7B77579DD9501105052F651BEA49D9C4142.json"},
      {"id": "11", "text": "18500AE2B3C86C98C92A81B6431C277AF5D654BC3C7A011E8C5ACE9DEE3317C7.json"},
      {"id": "12", "text": "29F0C0BD4DECF05DA6E0F72D48BCFC0BE8E262B60658C9C77F0D9CC66BE069CB.json"},
      {"id": "13", "text": "9F60034A1D9F4BA966A90052CB1DD75EF81D4DF1740A0A1C924D100FD680DB46.json"},
      {"id": "14", "text": "CAF2CFE62EA801BDDEA13BCD5BDAFDE586AE6CB2980C7FF4D8060D5791F5A6AD.json"},
      {"id": "15", "text": "E341047F3755AE4BD04AD9EA803A6AD0F07611C4D71C3B4536AEFB812E49FF62.json"},
      {"id": "16", "text": "55D7027CC044C232987024668F1557AF4B4DB0CE97FCAFA02A94A807A89D6A31.json"},
      {"id": "17", "text": "67C4843E1B92F47BC2891D1799B16081CA069F202E781ED2846408796E4A6F72.json"},
      {"id": "18", "text": "8088325488BF9D407C4F3BEA5967E3DC2C45C8F3DECDF336C7410A8C757D5F50.json"},
      {"id": "19", "text": "81FBB890DDE4D6EA940532BC4CDDD742D4DC8116EDFD96EE0EFE3CF958C35558.json"}
    ]},
    {"id": "20", "text": "Artemis", "children":[
      {"id": "21", "text": "048C01E23FB30BEDBAC174B1EAC2DBE68C72723D59C2F0AEADF605204C8F5C6F.json"},
      {"id": "22", "text": "BD024A5F1A213DE50A165A09AC8B7E38EF91D898510BC26EC68C0B79C0B9FC74.json"},
      {"id": "23", "text": "9C377C04DF5C5D80FC8677E26BBD0BFB3AF4DB37D9D96B5DCB459DD854832204.json"},
      {"id": "24", "text": "EA87E970526ACB995B7A56E3FEC9D2310CD3F69A9EA4596D095BF5ADD2D0A123.json"},
      {"id": "25", "text": "59BB15CB4B2DC51FC127A1F30712B8391C230CC63E3563E51D9007535267D20B.json"},
      {"id": "26", "text": "C2039C1A2A990DB83007B2D0DE5EAEC71A19CC124BAC4B3A0655AC67F1CFBDD3.json"},
      {"id": "27", "text": "C2EB129FC52F7488247E80E2909590F5C9AC788919D85D45EB59A3CF3795559C.json"},
      {"id": "28", "text": "C3355EA06CE11AC9BFF52BF6A68CB951EC49268DBC4C3A9693CC1019D2136E8D.json"},
      {"id": "29", "text": "C6A2810C34BE2F9C122CD0FF797ED4E16050751696EA2A75481F77DF5C58E15A.json"},
      {"id": "30", "text": "A9F7BC58D3D05C4E6C6746E8F42B6DD6210D04BFA696EF8AF4F40D996A56F095.json"},
      {"id": "31", "text": "DA1990BDBFFCB8FDD863DEAC6D31AA3ACB166398D2D4924262838E5C9DC49FFE.json"}
    ]},
    {"id": "32", "text": "Commplat", "children":[
      {"id": "33", "text": "7CB059E8FB69F9A5C90BA454CE4D15461C0F0B80D008579FEFE58620C5DA9CDD.json"},
      {"id": "34", "text": "000ECF47BB886AE45AF71C5E6B03D4D13CFDEFAA0655D3139526AB5E6D628B6B.json"},
      {"id": "35", "text": "0041C70291573A6CD85A4336A92D8F40E210D565D005F36EC43534D25CD186C7.json"},
      {"id": "36", "text": "014BD8D4FD4B948D6CB5BD73184970A8CCC34BCD702772C1F351C67979BFE5F5.json"},
      {"id": "37", "text": "0199B4615D14D8478057123C934574F9B4FA873BDA5FF401A18A245E35DC300B.json"},
      {"id": "38", "text": "01FF3D7D1B91E859F1C2D4BEA9EB311F44A619684214342ACBC7DF98002A4F86.json"},
      {"id": "39", "text": "0429ADA1B4B79A5272C076937608F8E0777BE4529F0FCA233A654C39C472506E.json"},
      {"id": "40", "text": "047289DCC7A0DE7AC73333040A8EBCC852F9FCB35C83778A26C30FDD1459C4D1.json"},
      {"id": "41", "text": "04F27CDBF6E1CCB2E3A9E628DCA304F0E4E29504C092E935AA0DC73F0E017C0E.json"},
      {"id": "42", "text": "06850758E6B7BF18783A8A7EEEEECB74DBA57EDBEB8AB5CF8D0649A0C50761C7.json"},
      {"id": "43", "text": "072C4D66BFB6310889F15219E00777248E8381170E6EBBA46A6E3E427E661C9A.json"}
    ]},
    {"id": "44", "text": "Deng", "children":[
      {"id": "45", "text": "C435505AFBC27F45A175DA8EDA3AACB1F7C3F6FED653E244D5B5AAD49C1DCF1B.json"},
      {"id": "46", "text": "5C0E79BA452BE76B90E5E4F1517E9A090DCB333420CE1BFB9A66F2FF8B7A14E0.json"},
      {"id": "47", "text": "2EF665DDAB7AE9A0A723CC65FF27A31ABEE6F33C941036D9AE8D4279A7D10C2B.json"},
      {"id": "48", "text": "38D4C7C9E18D442115CE42768E8ADE7CE1FE90CBFC50159EECA14522E81D9135.json"},
      {"id": "49", "text": "DCF07154CCFEABA55B885DFD00C588C9A42EA7FCD3BB78753207F71B0C2F7296.json"},
      {"id": "50", "text": "E283240482FC04ADEBA7E2C7F4E81372A28808571AE747B71695EB7D241BAE01.json"},
      {"id": "51", "text": "EA5ED655E5EEE0664A9E2F4BB36436EDC8E30286D1346DC7D30C09E84D21C19A.json"},
      {"id": "52", "text": "50F81B6C3A196E25EBE315D36475E32E475BA764B817BDEE57CEE131AE71A588.json"}
    ]},
    {"id": "53", "text": "Dianru", "children":[
      {"id": "54", "text": "BC5203E0F1FB09C6922B31AFB77CD210D691D3B5F9D54F495AE88DF00409BC0D.json"},
      {"id": "55", "text": "482031BEDC68D329C2815947CD56BAB84DD3DBCE1F6D33051D2BB236434AFBB4.json"}
    ]}
  ]}
 ]
 ```
assets/config/home.json <br>
```json
{
  "home-verb": "MalNet is a hierarchical image and graph database designed to assist machine learning and security researchers in developing methods to detect malicious software.\n                                We release over 1,200,000 images and graphs spanning across 696 families and 47 types of malware, organized according to the Euphony Hierarchy. Click <a href=\"https://androzoo.uni.lu/\">here</a> to learn more about MalNet."
}
```
assets/config/image.json <br>
```json
[
  {"id": "0", "text": "Search MalNet..."},
  {"id": "1", "text": "Addisplay", "children":[
    {"id": "2", "text": "Adshell", "children":[
      {"id": "3", "text": "04C12D5BF48FCDDC4FFEC11E55DD579B0AFD4AF645F35092705D5B9CAA3BB0F4.png"},
      {"id": "4", "text": "24E4103229DDB1D9724E1C02D3B94E6EA3728CCA15B27A17C372A90FD6A2C0BC.png"},
      {"id": "5", "text": "39C45FB3BBB4D20A9C082DDB52BCDBA3F13FDAC5FF3F7E376CEA38247806A6B9.png"},
      {"id": "6", "text": "874449D4F4B34D41723172AE83D0C50105B459A6E02DA4E4272813A657B42F68.png"},
      {"id": "7", "text": "C688E0E5536F82AC3AC78BEA281A431B2E71D8F79B179D294282DA6A8154621A.png"}
    ]},
    {"id": "8", "text": "Aliyuncs", "children":[
      {"id": "9", "text": "984695960B812B11441BFD8A6CDF3A328BE39F57ACF6AE6F39650A2CFFC4BC4D.png"},
      {"id": "10", "text": "051432BBB0B05EA9F453D5CE8FFDC7B77579DD9501105052F651BEA49D9C4142.png"},
      {"id": "11", "text": "18500AE2B3C86C98C92A81B6431C277AF5D654BC3C7A011E8C5ACE9DEE3317C7.png"},
      {"id": "12", "text": "29F0C0BD4DECF05DA6E0F72D48BCFC0BE8E262B60658C9C77F0D9CC66BE069CB.png"},
      {"id": "13", "text": "9F60034A1D9F4BA966A90052CB1DD75EF81D4DF1740A0A1C924D100FD680DB46.png"},
      {"id": "14", "text": "CAF2CFE62EA801BDDEA13BCD5BDAFDE586AE6CB2980C7FF4D8060D5791F5A6AD.png"},
      {"id": "15", "text": "E341047F3755AE4BD04AD9EA803A6AD0F07611C4D71C3B4536AEFB812E49FF62.png"},
      {"id": "16", "text": "55D7027CC044C232987024668F1557AF4B4DB0CE97FCAFA02A94A807A89D6A31.png"},
      {"id": "17", "text": "67C4843E1B92F47BC2891D1799B16081CA069F202E781ED2846408796E4A6F72.png"},
      {"id": "18", "text": "8088325488BF9D407C4F3BEA5967E3DC2C45C8F3DECDF336C7410A8C757D5F50.png"},
      {"id": "19", "text": "81FBB890DDE4D6EA940532BC4CDDD742D4DC8116EDFD96EE0EFE3CF958C35558.png"}
    ]},
    {"id": "20", "text": "Artemis", "children":[
      {"id": "21", "text": "048C01E23FB30BEDBAC174B1EAC2DBE68C72723D59C2F0AEADF605204C8F5C6F.png"},
      {"id": "22", "text": "BD024A5F1A213DE50A165A09AC8B7E38EF91D898510BC26EC68C0B79C0B9FC74.png"},
      {"id": "23", "text": "9C377C04DF5C5D80FC8677E26BBD0BFB3AF4DB37D9D96B5DCB459DD854832204.png"},
      {"id": "24", "text": "EA87E970526ACB995B7A56E3FEC9D2310CD3F69A9EA4596D095BF5ADD2D0A123.png"},
      {"id": "25", "text": "59BB15CB4B2DC51FC127A1F30712B8391C230CC63E3563E51D9007535267D20B.png"},
      {"id": "26", "text": "C2039C1A2A990DB83007B2D0DE5EAEC71A19CC124BAC4B3A0655AC67F1CFBDD3.png"},
      {"id": "27", "text": "C2EB129FC52F7488247E80E2909590F5C9AC788919D85D45EB59A3CF3795559C.png"},
      {"id": "28", "text": "C3355EA06CE11AC9BFF52BF6A68CB951EC49268DBC4C3A9693CC1019D2136E8D.png"},
      {"id": "29", "text": "C6A2810C34BE2F9C122CD0FF797ED4E16050751696EA2A75481F77DF5C58E15A.png"},
      {"id": "30", "text": "A9F7BC58D3D05C4E6C6746E8F42B6DD6210D04BFA696EF8AF4F40D996A56F095.png"},
      {"id": "31", "text": "DA1990BDBFFCB8FDD863DEAC6D31AA3ACB166398D2D4924262838E5C9DC49FFE.png"}
    ]},
    {"id": "32", "text": "Commplat", "children":[
      {"id": "33", "text": "7CB059E8FB69F9A5C90BA454CE4D15461C0F0B80D008579FEFE58620C5DA9CDD.png"},
      {"id": "34", "text": "000ECF47BB886AE45AF71C5E6B03D4D13CFDEFAA0655D3139526AB5E6D628B6B.png"},
      {"id": "35", "text": "0041C70291573A6CD85A4336A92D8F40E210D565D005F36EC43534D25CD186C7.png"},
      {"id": "36", "text": "014BD8D4FD4B948D6CB5BD73184970A8CCC34BCD702772C1F351C67979BFE5F5.png"},
      {"id": "37", "text": "0199B4615D14D8478057123C934574F9B4FA873BDA5FF401A18A245E35DC300B.png"},
      {"id": "38", "text": "01FF3D7D1B91E859F1C2D4BEA9EB311F44A619684214342ACBC7DF98002A4F86.png"},
      {"id": "39", "text": "0429ADA1B4B79A5272C076937608F8E0777BE4529F0FCA233A654C39C472506E.png"},
      {"id": "40", "text": "047289DCC7A0DE7AC73333040A8EBCC852F9FCB35C83778A26C30FDD1459C4D1.png"},
      {"id": "41", "text": "04F27CDBF6E1CCB2E3A9E628DCA304F0E4E29504C092E935AA0DC73F0E017C0E.png"},
      {"id": "42", "text": "06850758E6B7BF18783A8A7EEEEECB74DBA57EDBEB8AB5CF8D0649A0C50761C7.png"},
      {"id": "43", "text": "072C4D66BFB6310889F15219E00777248E8381170E6EBBA46A6E3E427E661C9A.png"}
    ]},
    {"id": "44", "text": "Deng", "children":[
      {"id": "45", "text": "C435505AFBC27F45A175DA8EDA3AACB1F7C3F6FED653E244D5B5AAD49C1DCF1B.png"},
      {"id": "46", "text": "5C0E79BA452BE76B90E5E4F1517E9A090DCB333420CE1BFB9A66F2FF8B7A14E0.png"},
      {"id": "47", "text": "2EF665DDAB7AE9A0A723CC65FF27A31ABEE6F33C941036D9AE8D4279A7D10C2B.png"},
      {"id": "48", "text": "38D4C7C9E18D442115CE42768E8ADE7CE1FE90CBFC50159EECA14522E81D9135.png"},
      {"id": "49", "text": "DCF07154CCFEABA55B885DFD00C588C9A42EA7FCD3BB78753207F71B0C2F7296.png"},
      {"id": "50", "text": "E283240482FC04ADEBA7E2C7F4E81372A28808571AE747B71695EB7D241BAE01.png"},
      {"id": "51", "text": "EA5ED655E5EEE0664A9E2F4BB36436EDC8E30286D1346DC7D30C09E84D21C19A.png"},
      {"id": "52", "text": "50F81B6C3A196E25EBE315D36475E32E475BA764B817BDEE57CEE131AE71A588.png"}
    ]},
    {"id": "53", "text": "Dianru", "children":[
      {"id": "54", "text": "BC5203E0F1FB09C6922B31AFB77CD210D691D3B5F9D54F495AE88DF00409BC0D.png"},
      {"id": "55", "text": "482031BEDC68D329C2815947CD56BAB84DD3DBCE1F6D33051D2BB236434AFBB4.png"}
    ]}
  ]}
]
```
assets/config/particles.json <br>
```json
{
  "particle" : {
    "particles": {
      "number": {
        "value": 70,
        "density": {
          "enable": true,
          "value_area": 700
        }
      },
      "color": {
        "value": "#01579b"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#145ea8"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.7,
        "random": true
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 200,
        "color": "#007ecc",
        "opacity": 0.5,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "top",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    }
  },
  "particle-style":{
    "position": "absolute",
    "width": "100%",
    "height": "100%",
    "z-index": -1,
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0
}
}
```
assets/config/stats.json <br>
```json
{
  "Addisplay": {
    "Average Degree": {
      "kurtosis": 0.5303189395868784,
      "mean": 1.970136061755687,
      "minmax": [
        0.9166666666666666,
        4.381278092632402
      ],
      "nobs": 17458,
      "q25": 1.6913447377582864,
      "q50": 2.0943759630200307,
      "q75": 2.24161673128892,
      "skewness": -0.14675161402796288,
      "std": 0.36865234905452426,
      "variance": 0.1359045544634188
    },
    "density": {
      "kurtosis": 38.53298399837554,
      "mean": 0.0009777889541994803,
      "minmax": [
        2.517280171218634e-05,
        0.027777777777777776
      ],
      "nobs": 17458,
      "q25": 0.0001210683379626008,
      "q50": 0.00024933143839748145,
      "q75": 0.0009241968416355663,
      "skewness": 5.434251507854407,
      "std": 0.002174463598400337,
      "variance": 4.728291940768142e-06
    },
    "edges": {
      "kurtosis": 0.9273398146365674,
      "mean": 28072.41459502807,
      "minmax": [
        37,
        245593
      ],
      "nobs": 17458,
      "q25": 4396.5,
      "q50": 14818.0,
      "q75": 37472.0,
      "skewness": 1.3987805683139787,
      "std": 33546.1886348564,
      "variance": 1125346771.9253688
    },
    "entropy": {
      "kurtosis": 10.480122163866453,
      "mean": 0.9093003225346319,
      "minmax": [
        0.4222465907045484,
        1.0517832105768352
      ],
      "nobs": 17458,
      "q25": 0.9096242152482685,
      "q50": 0.9258669276065498,
      "q75": 0.9443502317307598,
      "skewness": -2.8125026761180276,
      "std": 0.062237713441034924,
      "variance": 0.0038735329743683792
    },
    "family_counts": [
      [
        "adflex",
        93
      ],
      [
        "adshell",
        21
      ],
      [
        "airpush",
        82
      ],
      [
        "aliyuncs",
        29
      ],
      [
        "appflood",
        96
      ],
      [
        "appsgeyser",
        3070
      ],
      [
        "artemis",
        581
      ],
      [
        "cauly",
        504
      ],
      [
        "cnzz",
        88
      ],
      [
        "commplat",
        386
      ],
      [
        "deng",
        188
      ],
      [
        "dianle",
        17
      ],
      [
        "dianru",
        73
      ],
      [
        "djoy",
        28
      ],
      [
        "dowgin",
        4554
      ],
      [
        "feiwo",
        170
      ],
      [
        "fictus",
        53
      ],
      [
        "floatgame",
        22
      ],
      [
        "ganlet",
        60
      ],
      [
        "gappusinac",
        15
      ],
      [
        "genpua",
        507
      ],
      [
        "kuguo",
        4845
      ],
      [
        "minimob",
        15
      ],
      [
        "mobeleader",
        25
      ],
      [
        "ormmaad",
        44
      ],
      [
        "pandaad",
        25
      ],
      [
        "qumi",
        100
      ],
      [
        "revmob",
        820
      ],
      [
        "scamad",
        18
      ],
      [
        "shixot",
        92
      ],
      [
        "skplanet",
        61
      ],
      [
        "startapp",
        565
      ],
      [
        "umeng",
        20
      ],
      [
        "viser",
        46
      ],
      [
        "wapsx",
        15
      ],
      [
        "wiyun",
        21
      ],
      [
        "wooboo",
        19
      ],
      [
        "youmi",
        90
      ]
    ],
    "nodes": {
      "kurtosis": 0.7216491074451405,
      "mean": 12862.30736625043,
      "minmax": [
        37,
        97816
      ],
      "nobs": 17458,
      "q25": 2251.0,
      "q50": 7593.5,
      "q75": 17399.25,
      "skewness": 1.3377245734050889,
      "std": 14556.18091387782,
      "variance": 211882402.79754096
    },
    "num_families": 38,
    "num_files": 17458
  }
}
```
assets/config/team.json <br>
```json
[
  {
    "background-team": "assets/background-team.jpg",
    "person-image": "assets/Scott_Freitas.png",
    "name": "Scott Freitas",
    "title": "ML PhD",
    "style": {
    },
    "home-link": "https://www.google.ca",
    "git-link": "https://www.google.ca",
    "linkedin-link": "https://www.google.ca",
    "scholar-link": "https://www.google.ca"
  },
  {
    "background-team": "assets/background-team.jpg",
    "person-image": "assets/Duen_horng.jpg",
    "name": "Duen Horng (Polo) Chau",
    "style": {
      "height": "99px",
      "width": "100px"
    },
    "title": "Associate Prof",
    "home-link": "https://www.google.ca",
    "git-link": "https://www.google.ca",
    "linkedin-link": "https://www.google.ca",
    "scholar-link": "https://www.google.ca"
  }
]
```
## Graphs and Image files for plots

assets/graph/
assets/image/

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
