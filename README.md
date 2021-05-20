# other_code
その他、使えそうなコード

### gas 
スクリプトエディタでgasディレクトリに入っているjsファイル（gsファイルにする）とhtmlファイルを作る。
gsファイルの名前はなんでもok

change_jsonの実行結果

    [
      {flg=true, name=google, id=A001, url=https://www.google.com/},
      {flg=true, name=yahoo, id=A002, url=https://www.yahoo.co.jp/},
      {flg=false, name=aaaa, id=B001, url=https://www.aaaaaa}
    ]

change_json_2の実行結果

    [
      {A001={flg=true, name=google, url=https://www.google.com/}},
      {A002={flg=true, name=yahoo, url=https://www.yahoo.co.jp/}},
      {B001={flg=false, name=aaaa, url=https://www.aaaaaa}}
    ]


参考サイト：https://kuwk.jp/blog/spreadsheet2json/


