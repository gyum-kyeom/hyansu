$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $(".hamburger").on("click", function () {
        // headerにopenクラスがあるか判定する
        if ($("header").hasClass("open")) {
            // headerにopenクラスが存在する場合、openクラスを削除する
            $("header").removeClass("open");
        } else {
            // headerにopenクラスが存在しない場合、openクラスを加える
            $("header").addClass("open");
        }
    });

    // メニューが表示されている時に画面(=.maskということ？)をクリックした場合
    $(".mask").on("click", function () {

        $("header").removeClass("open");
    });
});


// グローバルナビメニューのリンクをクリックしたらページを閉じる
$(function () {
    $("#global-nav ul li a").on("click", function () {
        $("header").toggleClass("open");
    });
});


/*=================================================
トップに戻る
===================================================*/
let pagetop = $("#to-top");
// 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
pagetop.hide();

// スクロールイベント（スクロールされた際に実行）
$(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
        // トップに戻るボタンを表示する
        pagetop.fadeIn();

        // スクロール位置が700px未満の場合
    } else {
        // トップに戻るボタンを非表示にする
        pagetop.fadeOut();
    }
});

// クリックイベント（ボタンがクリックされた際に実行）
pagetop.click(function () {
    // 0.5秒かけてページトップへ移動
    $("body,html").animate({ scrollTop: 0 }, 500);

    // イベントが親要素へ伝播しないための記述
    // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
    return false;
});
// });