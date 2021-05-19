//ダウンロードダイヤログ表示
function toJSON() {
  /* jsonの形
    [
      {A001={flg=true, name=google, url=https://www.google.com/}},
      {A002={flg=true, name=yahoo, url=https://www.yahoo.co.jp/}},
      {B001={flg=false, name=aaaa, url=https://www.aaaaaa}}
    ]
   */ 

  //ダイヤログテンプレート読み込み
  var dl_html = HtmlService.createTemplateFromFile("dl").evaluate();

  //ダイヤログ表示
  SpreadsheetApp.getUi().showModalDialog(dl_html, "JSONファイルをダウンロード");
}

//データ取得
function getData() {
  //データ取得するシート（現在開いているシートを指定）
  var sheet = SpreadsheetApp.getActiveSheet();

  //行（横軸）と列（縦軸）の最大数を取得
  var maxRow = sheet.getLastRow();
  var maxColumn = sheet.getLastColumn();

  //JSON用のkey
  var keys = [];

  //データ格納配列
  var data = [];

  //1行目のkeyの名前取得 keyの行を変更したい場合はxと引数を変更
  //JSON用のラベルは1行目で指定しているため【getRange】の第1引数は【1】
  for (var x = 1; x <= maxColumn; x++) {
    keys.push(sheet.getRange(1, x).getValue());
  }
  
  //データの取得
  //実際のデータが2行目からなので【y = 2】から開始
  for (var y = 2; y <= maxRow; y++) {
    // var json_shop_id = {};
    var json = {};
    
    for (var x = 2; x <= maxColumn; x++) {
      json[keys[x-1]] = sheet.getRange(y, x).getValue();
    }
    //データ格納
    var id = sheet.getRange(y, 1).getValue();
    var tmp = {};
    tmp[id] = json;
    data.push(tmp);
    Logger.log(data);
  }

  //整形してテキストにします
  return JSON.stringify(data, null, '\t');  
}


//スプレッドシート読み込み時に実行
function onOpen() {
  //メニューバーにJSON出力用メニューを追加
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [{
    name : "JSONで出力",
    functionName : "toJSON"
  }];
  spreadsheet.addMenu("JSON", entries);
};