var yiyan //设置一言
var yiyanCN //设置一言翻译后文本
var usingYiyan = true            /*？？？是否使用一言？？？（true:是 false:否）*/
var str = 'Hello from my site!'   /*？？？可以更改文本？？？*/


/*打字机特效*/
function start() {
    if (usingYiyan && yiyan != "") {
        str = yiyan //如果一言不为空并且选择使用，那就设置str
        //使用一言才有以下功能：title和单击弹出搜索
        document.getElementById("contents").setAttribute("title", yiyanCN)
        document.getElementById("contents").setAttribute("href", 'https://www.baidu.com/s?wd=' + yiyan)
        //单击打开百度搜索功能在下面找
    }
    if (str == null || str == undefined || str == "") str = "Hello from my site!"     //如果str为空就用默认文本
    let str_ = ''
    let i = 0
    let content = document.getElementById('contents')
    content.innerHTML = '<a>_</a>'
    setTimeout(function () {
        let timer = setInterval(() => {
            if (str_.length < str.length) {
                str_ += str[i++]
                content.innerHTML = '<a>' + str_ + '_</a>'//打印时加光标
            } else {
                clearInterval(timer)
                content.innerHTML = '<a>' + str_ + '</a>'
            }
        }, 50)
    }, 500)
}


/*获取并显示一言*/
function getYiyanAndStart() {
    $.ajax({
        type: 'GET',
        url: 'http://api.kekc.cn/api/yien',
        data: '',
        dataType: 'JSON',
        error: function () {
            yiyan = ""
        },
        success: function (res) {
            yiyan = res.en
            yiyanCN = res.cn
            start()
        }
    })
}
getYiyanAndStart()