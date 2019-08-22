function IePlaceholder() {
    /** 思路：
     * 1.判断ie的版本号
     * 2.获取页面上所有具有placeholder的元素node
     * 3.便利该node，判断是否有值，没有值直接隐藏
     * 4.复制该节点，创建一个一样的元素，插入到该姐节点元素后，然后将placeholder的值赋值给它。
     * 5.对该节点进行事件绑定，focus跟blur
     * 6.对复制的元素节点绑定focus事件 
     *  */
    if (!('placeholder' in document.createElement('input'))) {
        // 将返回的nodeList对象转为数组
        var nodes = Array.prototype.slice.call(document.querySelectorAll('[placeholder]'))
        nodes.forEach(function (item, index) {
            item.addEventListener('focus', function () {
                this.nextSibling.style.display = 'none'
            })
            item.addEventListener('blur', function () {
                if (!this.value) {
                    this.style.display = 'none'
                    this.nextSibling.style.display = 'inline'
                }
            })
            var cloneNode = item.cloneNode()
            // 如果[type='password']类型，则转为text
            if (cloneNode.getAttribute('type').toLowerCase() === 'password') {
                cloneNode.setAttribute('type', 'text')
            }
            cloneNode.setAttribute('value', cloneNode.getAttribute('placeholder'))
            cloneNode.style.color = '#c6c6c6'
            cloneNode.style.display = 'none'
            item.insertAdjacentHTML('afterend', cloneNode.outerHTML)
            item.nextSibling.addEventListener('focus', function () {
                this.style.display = 'none'
                this.previousSibling.style.display = 'inline'
                this.previousSibling.focus()
            })
            if (!item.value) {
                item.style.display = 'none'
                item.nextSibling.style.display = 'inline'
            }
        })
    }
}
export default IePlaceholder;