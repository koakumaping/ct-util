/**
* 重新格式化处理过的数据
*
* 用于重新格式化处理过的数据
*
* @returns {Array}
*
* @date 2017-09-15
* @author Ping YF (koakumaping@163.com)
*/
import clone from './clone'
import hasOwn from './hasOwn'

const restoreResponse = (list = []) => {
  const _list = []
  for (let i = 0, l = list.length; i < l; ++i) {
    const _line = clone(list[i]._origin)
    for (const item in _line) {
      if (hasOwn(_line[item], 'value')) {
        _line[item].value = list[i][item]
      }
    }
    _list.push(_line)
  }
  return _list
}

export default restoreResponse