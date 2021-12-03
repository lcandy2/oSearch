# oSearch: Search via OpenSearch

<!--
## 🌐
[oSearch：用 OpenSearch 搜索](./README_zh_CN.md)
## 🌐
[oSearch: Search via OpenSearch](./README.md)
-->

## 获取
oSearch 可于 Chrome 网上应用店，Edge 外接程序 与 Firefox 附加组件 中获取。

[![Avaliable in the Chrome Web Store](https://storage.googleapis.com/chrome-gcs-uploader.appspot.com/image/WlD8wC6g8khYWPJUsQceQkhXSlv1/UV4C4ybeBTsZt43U4xis.png)](https://chrome.google.com/webstore/detail/pejlgjjlbhpbfiiaegahmeahlhbpkglo)
[<img src='https://ffp4g1ylyit3jdyti1hqcvtb-wpengine.netdna-ssl.com/addons/files/2015/11/get-the-addon.png' alt='Get the add-on' style='height: 58px;'/>](https://addons.mozilla.org/firefox/addon/osearch)
[<img src='https://user-images.githubusercontent.com/11660256/111323589-4f4c7c00-866a-11eb-80ff-da7de777d7c0.png' alt='Get it for Microsoft Edge' style='height: 58px;'/>](https://microsoftedge.microsoft.com/addons/detail/fdekeghfifiibfopfnamhegkhhdpdmlo)

<br>连接至扩展商店出现问题？你可以手动安装扩展，只需两步

1. 在 GitHub 项目中上点击 `Code` => `Download ZIP` 下载压缩包并解压。

2. 打开 Chrome，在地址栏中转到 `chrome://extensions/` ，启用 `开发者模式` 后，选择 `加载已解压的扩展程序` ，找到解压后文件中的 `Extension` 文件夹，点击 `选择文件夹` 即可。

## 功能
+ 为列表中的网站添加 OpenSearch，来让浏览器将其添加到搜索引擎
+ 搜索引擎添加完成后，在地址栏中输入网站地址，按下 空格键 或 Tab 即可快速搜索
+ 在 Firefox 浏览器中，需要手动点击带有加号的网站图标将其添加至搜索引擎中

## 截图
![oSearch helps you search wikipedia.org via OpenSearch](https://lh3.googleusercontent.com/Q7kv7LdlO1TlN0XO3JcEThh2K1RrUNXwcadRhKH8DjrLRbSqM_KN61n-j7OG0OoOMIyD6syZu_Devh-KIfA2jcf4rQk=s0)
![oSearch helps in adding search engines](https://lh3.googleusercontent.com/juB0KsVN4cvuBOKFiax8WgDNxNst09BFflkH3lU-TYTCTeojRvpwQUNa1wqYgkqvXGKgqFw93sfRYi6HhLwgTsCLog=s0)

## 站点支持
oSearch 支持大多数的热门网站。

想知道你的网站是否支持？请前往 [opensearch](./opensearch) 文件夹中查看。

想要支持其他网站？请提交一个 [Issue](https://github.com/lcandy2/oSearch/issues)。

你有可用的 OpenSearch 文件？欢迎 [Pull request](https://github.com/lcandy2/oSearch/pulls)。

<!--
## 可用性
| 浏览器 | 安装并正常工作 | 
| ----------- | ----------- |
| Google Chrome | ![Chrome 92 passing](https://img.shields.io/badge/Chrome_92-passing-brightgreen?style=for-the-badge&logo=googlechrome) |
| Microsoft Edge | ![Microsoft Edge 92 passing](https://img.shields.io/badge/Microsoft_Edge_92-passing-brightgreen?style=for-the-badge&logo=microsoftedge) |
| Mozilla Firefox | ![Firefox 91 passing](https://img.shields.io/badge/Firefox_91-passing-brightgreen?style=for-the-badge&logo=firefoxbrowser) |
| Brave | ![Brave 1.2.8 Chrome 92 passing](https://img.shields.io/badge/Brave_1.28_Chromium_92-passing-brightgreen?style=for-the-badge&logo=brave) |
| Vivaldi | ![Vivaldi 4.1 OpenSearch is Not Supported](https://img.shields.io/badge/Vivaldi_4.1-OpenSearch_is_Not_Supported-red?style=for-the-badge&logo=vivaldi) |
| Opera | ![Opera 78 OpenSearch is Not Supported](https://img.shields.io/badge/Opera_78-OpenSearch_is_Not_Supported-red?style=for-the-badge&logo=opera) |
| 360极速浏览器 | ![360极速浏览器 13 Chromium 86 兼容版可用](https://img.shields.io/badge/360极速浏览器_13_Chromium_86-兼容版可用-dbab09?style=for-the-badge&logo=data:image/png;base64,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lv//+u//8/zw/6Dtnf86yzj/A7L//wCx//8AsP//ALH//wCx//8Asf//ALH//w9i/v8ZNf3/GTj+/xk7/v8aPf//Gj//nintFLAq6xP/Zc8Q//STDf/2lg3/9pkM//ebDf/4ng3/+KIM//mkDP/6qAz/+6sM//utDv/916H//////////////////////6Dj0P8Arf//AK3//wCt//8Arf//AK3//wCt//8Fl///GDL8/xgz/f8ZNv7/GTn+/xo8/v8aPv/NKewUfjLoE7Tolg369ZQN//aXDf/2mQ3/95sN//ifDP/5ogz/+aUM//qoDP/7qRH/821i//3w+f//////////////////////7fn//wCp//8Aqf//AKn//wCq//8Aqv//A57//xQ5/P8YLvz/GDL9/xk1/f8ZOP7/GTv+/xo9/+MAAAAA9ZINUfWSDf/1kg3/9ZIN//WTDf/1lA3/9pUN//aYDf/3mg3/+JwP//Fgcf/pKbn//fD6///////////////////////s+P//AKf//wCm//8Ap///AKb//wWO/v8UM/v/Fyn7/xct/P8YMP3/GDT9/xk3/v8ZOv7/Gjz+3QAAAAD1lQ6m9ZUO//WVDv/1lQ7/9ZUO//WVDv/1lQ7/9ZUO//WVDv/yblb/6S28/+ktvP/1o+L//////////////////////4/X//8ApP//AKT//wWN/v8PRfv/FiD6/xYj+/8XJ/v/Fyv8/xgv/P8YMv3/GTb9/xk5/v8ZO/64AAAAAPaZENf2mRD/9pkQ//aZEP/2mRD/9pkQ//aZEP/2mRD/9pMd/+w0tv/rML//6zC//+s1wf/zoeD/8vP///Hy//+iu///PWb0/zpX9P8uQfv/GBz5/xUa+f8VHvr/FiL6/xYm+/8XKvz/GC38/xgx/f8YNP3/GTj+/xk6/ncAAAAA950R8vedEf/3nRH/950R//edEf/3nRH/950R//edEf/zZW7/7TTC/+00wv/tM8L/7DPC/+wwv/9kN+j/NUH9/zVB/v80Qv7/NUH+/zVB/f80Pvz/HCH6/xUc+f8WIPr/FiT7/xco+/8XLPz/GDD8/xgz/f8ZNv7/GTn+IwAAAAD3oRPy96ET//ehE//3oRP/96ET//ehE//3oRP/96ET/+8/sv/vN8b/7zfF/+83xv/vN8X/7jbF/70n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) |
| 360安全浏览器 | ![360安全浏览器 13 Chromium 86 不支持 OpenSearch](https://img.shields.io/badge/360安全浏览器_13_Chromium_86-不支持_OpenSearch-red?style=for-the-badge&logo=data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAABILAAASCwAAAAAAAAAAAABIxQAAScQAAEfFBF1IxQTVScQIyUm+CHtEaCEePSodFj0qHRY9Kh0TPSodDD0qHQNJxAgASMUAAEjFAABJxAAASsUAAErFAA9IxQD3Sb4Ifp+nkDbm7OKV2fHW3fv9+/f+/v73+/v71vDv7pGvp6IwPisfDErFBABKxQQAScYAAEzGAABLxgAtTMUA4+Lg3mX+/v70zvDI/4bXc/9jzUD/Xcs4/3bSXf+056r/+v359OLg3mU/LB4NS8YAAEvGAABMxgAATJ4ZKlnJKuX5/ff+i9l1/07GAP9NxwD/TsYA/03HAP9OxgD/TsYA/3HQVf/u+u3+4uDeZUEtHwxNxwAAQi4gAqKZkitt0k39h9hw/07IAP9WyiH/quWc/+n45v/8/vz/5ffi/4rZcv9PxwD/dNNX//r9+fSso50wQi4gA0QwIgzw7+6PpeSX/07JAP9YzCH/3fXZ///////////////////////+//7/jNt3/07JAP++67X/8fDvk0QwIgxGMSMT+/v71MvwxP9PzAn/sein//////////////////////////////////////////////////v7+9dGMSMTRzMkFv3+/fl02WD/jN9//07PH/9KzxX/VtAv/1nSOP9Y0jj/WNI4/1jSOP9Y0Tf/S84Y/1TQL//+/v71RzMkFkk0JRb9/v35S9Iz/4nhgv9O0zT/R9Ej/0fRJ/9H0Sf/RtEj/0fRI/9H0Sf/RtEj/0fRI/9O0zH/////+kk0JRdLNSYT+/v71HLeb/9D1TT/t+63/////////////////////////////////9X11v9B1S//cd9u//v7+9dLNSYTTDcnDPHv7o3A8sT/O9g8/z7ZQP/F9Mj///////////////////////3+/f9z4nr/O9g+/6zus//y8O+TTDcnDE44KAKnnJMq/f798oDojf803Eb/ONxL/5bto//i+uX/+/78/9f43f9354b/NNxG/13jb//2/fjzsKafL044KAMu4FAATzkpDOLe3GL7/vz+iOyc/yzgUP8s4FD/MOBS/5XuqP+H7Jv/LuBQ/1Xkc//m++v+4t7cYk85KQws4FIAJeNXACXjVwBQOioN4t/bYf7+/vDR+Nv/fe2X/0voc/865WX/aOqH/8T40v/2/fjx4t/bYlA6Kg0k5FcAJeNXAB3mXwAd5l0AHuVfAFE7KwymmpMp8fDvjPz7+9P+/v71/f7+9Zvxs+Y352zwPttpizW/VCwd5l0EHeZdPR3mXQAT6GMAE+hjABPoYwAX6GMAUjwqAlI8KgxSPCoTUjwqFlI8KhZSPCoSL8VZLBTnYp0X6GPwE+hj9xPoY2ET6GEAwA8AAIAHAACAAwAAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAEAAMADAADgAQAA8AEAAA==) |
| QQ浏览器 | ![QQ浏览器 10.8 Chromium 70 不支持 OpenSearch](https://img.shields.io/badge/QQ浏览器_10.8_Chromium_70-不支持_OpenSearch-red?style=for-the-badge&logo=data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+pQqTfqUKr76lCrz+pQq8/qUKr76lCpM+pQqH/qUKuT6lCr/+pQq//qUKv/6lCr/+pQq//qUKsj6lCrr+pQq//qUKv/6lCr/+pQq//qUKv/6lCr/+pQqJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6lCoi+pQq//qUKv/6lCr/+pQq//qUKv/6lCr/+pQq6/qUKvn6lCr/+pQq//qUKv/6lCr/+pQq//qUKv/6lCoNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPqUKgb6lCr/+pQq//qUKv/6lCr/+pQq//qUKv/6lCr5+pQq+fqUKv/6lCr/+pQq//qUKv/6lCr/+pQq//qUKgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+pQqBvqUKv/6lCr/+pQq//qUKv/6lCr/+pQq//qUKvn6lCrr+pQq//qUKv/6lCr/+pQq//qUKv/6lCr/+pQqIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6lCoj+pQq//qUKv/6lCr/+pQq//qUKv/6lCr/+pQq6/qUKsj6lCr/+pQq//qUKv/6lCr/+pQq//qUKv/6lCplAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPqUKmX6lCr/+pQq//qUKv/6lCr/+pQq//qUKv/6lCrI+pQqmvqUKv/6lCr/+pQq//qUKv/6lCr/+pQq//qUKrsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+pQqu/qUKv/6lCr/+pQq//qUKv/6lCr/+pQq//qUKpr6lCpX+pQq//qUKv/6lCr/+pQq//qUKv/6lCr/+pQq/vqUKjgAAAAAAAAAAAAA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) |
| 搜狗高速浏览器 | ![搜狗高速浏览器 11 Chromium 80 不支持 OpenSearch](https://img.shields.io/badge/搜狗高速浏览器_11_Chromium_80-不支持_OpenSearch-red?style=for-the-badge&logo=data:image/png;base64,AAABAAIAICAAAAEAIACoEAAAJgAAABAQAAABACAAaAQAAM4QAAAoAAAAIAAAAEAAAAABACAAAAAAAIAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAJAAAAEAAAABQAAAAYAAAAGQAAABkAAAAYAAAAFAAAABAAAAAJAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAYAAAAPAAAAHgEBAS0BAQE1AgICNgICAjQCAgIzAgICMwICAjQCAgI2AQEBNQEBAS0AAAAeAAAADwAAAAYAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAOAQEBJQICAjVDQ0M80dHRcfT09Kf9/f3T////9P//////////////9P39/dP09PSn0dHRcUNDQzwCAgI1AQEBJQAAAA4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAQEBGQQEBDJ3d3dH8vLyof/+/vf///////////////////////////////////////////////////////7+9/Pv7aZ3d3dHBAQEMgEBARkAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUFBSQcHBw15+bmiv79/Pr///////7+///9+//99e///vXu///59f///fv//////////////////////////v/++PP+//////79/Prn5uWLHBwcNQUFBSQAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYHBwcnU1NTPvr598b//////PPs//LGof/uqGv/7ZZM/+yTRv/sk0X/65tZ/++2if/85dP///v5//////////////////748//zyab//PLq/v/////6+PXJU1NTPgcHByYAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECQkJIl9fX0D9/PvW//////XTt//tmVH/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+qUTf/73MP///37//////////////////728P/jk1D/9NfA///////9+/rZX19fQAkJCSIAAAAEAAAAAAAAAAAAAAAAAAAAAQcHBxUuLi43/Pz8yP/////zyab/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG//Claf//9ez///////////////////////fYvf/fgTP/9NGz///////8+/vLLi4uNwcHBxUAAAABAAAAAAAAAAAAAAAHDw8PLPDw8Jb/////9tnA/uyTR//sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/6I0///7s2/////////////////////////7+/+KOSP/slEf/9tzG///////w8PCXDw8PLAAAAAcAAAAAAAAAAQ4ODhufn59R/////Pz17v7tm1X/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/jhTf//ebS////////////////////////////77uP/+mOQP/tnFb//PTu///+/v2fn59RDg4OGwAAAAEAAAAEGBgYLfn5+bP/////8LWB/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/54w//+OLRf//+PH////////////////////////////21Lb/5os9/+yTRv/wuYv///////n5+bMYGBgtAAAABA0NDRCDg4NH/////fvs4P3sk0f/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/65JF/+KFN//bfS//+dzC//////////////////////////////////ngyv/niz3/7JNG/+yVSv/78en//////YODg0cNDQ0QGxsbIOTk5H7/////8sGW/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/65JF/+SHOf/aeSr/4o5L//rizv//////////////////////////////////////+NrB/+mPQf/sk0b/7JNG//LHov//////5OTkfhsbGyAlJSUq+fn5tP/////vo2L/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/65JE/+KFNv/aeCn/4IlE//TMqv//+/r////////////////////////////////////////////zw5n/7JNG/+yTRv/sk0b/76hs///////5+fm0JSUlKi0tLS/+/v7b/vr3/OyTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+eLPv/aeSn/4pJQ//bUtv///fv///////////////////////////////////////////////////37/+2eWv/sk0b/7JNG/+yTRv/tl03///79//7+/tstLS0vNDQ0Mf////L88eb57JNG/+yTRv/sk0b/7JNG/+yTRv/mijz/234y//TNrP///fz////////////////////////////////////////////////////////////0yKP/7JNG/+yTRv/sk0b/7JNG/+yTRv/99Oz9////8zQ0NDI5OTkz//////vr3vrsk0b/7JNG/+yTRv/sk0b/6Y9B/96EOP/659b/////////////////////////////////////////////////////////////////9te+/+uSRv/sk0b/7JNG/+yTRv/sk0b/7JNG//zt4fz/////OTk5Mz09PTH////w/PHo++yTRv/sk0b/7JNG/+yTRv/ggTT/+eHM//////////////////////////////////////////////////////////////79//HFof/rk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b//fPr+/////A9PT0xPj4+Lf7+/tX+/Pr965NH/+yTRv/sk0b/65JE/+2xfv/////////////////////////////////////////////////////////+//XYv//soWL/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yUSP///fz9/v7+1T4+Pi0/Pz8l+fn5q//////qoGH/7JNG/+yTRv/ojT//+ubU///////////////////////////////////////////////+//TStv/roGH/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7aRl///////5+fmtQUFBJERERBbi4uJ2//////DAmP/sk0b/7JNG/+uTSf///fz///////////////////////////////////////nk0v/romT/7JJG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/ywpr//////+Pj43hEREQWT09PBIWFhT7////5/O/l/OWKPf/sk0b/7Z5Z///////////////////////////////////////zxaL/65JG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/6ZBE//zz6/z////5hYWFPk9PTwQAAAAAT09PIvj4+KX/////6ax4/+qRQ//plEz/////////////////////////////////+dS2/+yRRf/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/uuYz///////j4+KVPT08iAAAAAAAAAABRUVEMpqamR/////f99e7734c8/+mPQv/99vD////////////////////////7+P/sn2P/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/55hW//77+P3////3p6enSFFRUQwAAAAAAAAAAAAAAABYWFgd7u7uhf/////228T93YAw//PRtP////////////////////////fw/+aSUv/rkUT/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+WMQ//7693+/////+7u7odYWFgdAAAAAAAAAAAAAAAAAAAAAF9fXwNlZWU1+/v7uf/////00bT+4pNS///9/P//////////////////+/f/8LOE/9+AMf/sk0b/7JNG/+yTRv/sk0b/7JNG/+yTRv/sk0b/7JNG/+uRRP/iikH/+eTS/v/////8/Py7aGhoNF9fXwMAAAAAAAAAAAAAAAAAAAAAAAAAAGNjYw9/f385/f39yP/////33sn79c+v///////////////////////+6Nb/4IZA/+CBMv/rkUT/7JNG/+yTRv/sk0b/7JNG/+qQQ//jhTf/5Jla//zy6v3//////f39yH9/fzljY2MQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGZmZhKBgYE5+vr6sv/////++PT7/O/k///+/v/////////////+/P/84sz/5ZRU/9l3J//dfi7/4IEy/9+AMf/ceyz/4pNT//XStv///v7///////r6+rKBgYE5ZmZmEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGlpaQ1sbGw06enpfP///+//////////////////////////////////+/b/+uDK//TKp//zyKb/9tW5//zu4v///////////////+/p6el8bGxsNGlpaQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABsbGwboKCgQfT09JX////w///////////////////////////////////////+/v////////////////D09PSVoKCgQWxsbBsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABvb28Hb29vHISEhDfe3t5p9/f3nf39/cn////p////+f////n////p/f39yff3957e3t5phISEN29vbxxvb28HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcXFxAnFxcRBxcXEecXFxKHFxcS9xcXEycXFxMnFxcS9xcXEocXFxHnFxcRBxcXECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AA//+AAB//AAAP/gAAB/wAAAP4AAAB8AAAAOAAAABgAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAABgAAAAcAAAAPAAAAD4AAAB/AAAA/4AAAf/gAAf/8AAP//wAP/KAAAABAAAAAgAAAAAQAgAAAAAABABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAHwAAADEAAAA6AAAAOAAAADAAAAAeAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgXFxcS+np6ZT9/f3V////+v////T9/f3Q5+fnk1xcXEsAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAixcXFcv////P//Pr6/Ovd9vzr3v7//v3////////+/f7////zxcXFcgAAACIAAAAAAAAAAAAAAAAAAAAfxcXFc/////720LDu7ZdN/+yTRv/skkX/76lw///+/f/77uL/9ta7+f////7GxsZ0AAAAHwAAAAAAAAAGUVFRSP/+/vT207T07JNG/+yTRv/sk0b/7JNG/+mNPv/759j//////+uqcv/20rPx//7+9FFRUUgAAAAHAAAAHufn55P++/j47ZhP/+yTRv/sk0b/7JNG/+uSRf/olU///vr1///////yx6P/6ZNI//78+vvp6emWAAAAHwAAADD9/f3V+Ni97eyTRv/sk0b/65JF/+iMPv/utYX//fTu////////////77uP/+mOP//649Dy/Pn23AAAADAAAAA5////+fTCl/rsk0b/6o9B/+umbP/88Of//////////////////fXu/+eQRf/sk0b/99Cv+v79/PgAAAA4AAAAOf////j1xZz67JNF/+mfYP///fz/////////////////+ebV/+ueXP/sk0b/7JNG//bKpfz+/fz2AAAAOgAAADD9/f3R+eDJ7umOP//217z////////////77eH/7q11/+yRRf/sk0b/7JNG/+yTRv/54cvv/fz71QAAADEAAAAe5ubmjv/9+/vrl07/+OHN///////559b/6pNI/+yTRv/sk0b/7JNG/+yTRv/uoFz///38+ubm5pEAAAAfAAAABklJSUb//v3y+eDK9vLIpP//////8b+W/+yTRv/sk0b/7JNG/+yTRv/tlkz/++nZ9P/+/vJJSUlGAAAABwAAAAAAAAAfv7+/a/////755NP8/fj0//zp2//qlEz/7JNG/+yTRv/vpmf/++nZ9v////6/v79rAAAAHwAAAAAAAAAAAAAAAAAAACLAwMBt//7+8////////v7//vLo//jdxv776tv5///+///+/vPAwMBtAAAAIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH1RUVEno6OiT/f391P////j////4/f390ubm5pBWVlZKAAAAHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAHwAAADEAAAA5AAAAOQAAADAAAAAeAAAABgAAAAAAAAAAAAAAAAAAAADwDwAA4AcAAMADAACAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAQAAwAMAAOAHAADwDwAA) |
-->

## 致谢
+ [@nexmoe](https://github.com/nexmoe) 数据处理与判断

## 合作
[<img src='https://xiaoshu.app/assets/Snipaste_2021-11-30_16-43-11.2656ce44.png' alt='小舒同学' style='height:auto;'/>](https://shu.nexmoe.com)


oSearch 现已与 [@nexmoe](https://github.com/nexmoe) 开发的 [小舒同学](https://shu.nexmoe.com) 合作
