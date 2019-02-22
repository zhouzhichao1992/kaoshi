var json = [
    {
        "title": "牙刷",
        "price": 28,
        "intro": "这款牙刷非常好"
    },
    {
        "title": "牙膏",
        "price": 36,
        "intro": "这款牙膏非常好"
    },
    {
        "title": "可乐",
        "price": 5,
        "intro": "可乐非常好喝"
    },
    {
        "title": "雪碧",
        "price": 5,
        "intro": "一年销量绕地球一圈"
    }
]
var table = (function () {
    var $tbody = document.querySelector('.tbody');
    return{
        init: function (json) {
            this.event()
            this.insertData(json);
        },
        event: function () {
            var self = this;
            $tbody.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement
                if (target.nodeName === 'BUTTON') {
                    var $tr = target.parentNode.parentNode;
                        $tr.remove();   
                }
            }
        },
        insertData: function (json) {
            var $frag = document.createDocumentFragment()
            for (var i = 0; i < json.length; i++) {
                var $tr = document.createElement('tr');
                for (var attr in json[i]) {
                    var $td = document.createElement('td');
                    $td.innerHTML = json[i][attr];
                    $tr.appendChild($td);
                }
                var $td = document.createElement('td');
                $td.innerHTML = `<button class="btn btn-danger">删除</button>`;
                $tr.appendChild($td);
                $frag.appendChild($tr);
            }
            $tbody.appendChild($frag);
        }
    }
}())
table.init(json);













