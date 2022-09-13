class Integer {
  constructor(val) {
    this.val = val
  }
}

exports.Integer = Integer

class WS {
}

exports.WS = WS;

function convert(head, tail) {
  if (tail.length > 0) {
    return  head.concat(convert())
  } else {
    return head
  }
}
