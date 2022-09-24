// Generated by Peggy 2.0.1.
//
// https://peggyjs.org/

"use strict";


  //

function peg$subclass(child, parent) {
  function C() { this.constructor = child; }
  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  var self = Error.call(this, message);
  // istanbul ignore next Check is a necessary evil to support older environments
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(self, peg$SyntaxError.prototype);
  }
  self.expected = expected;
  self.found = found;
  self.location = location;
  self.name = "SyntaxError";
  return self;
}

peg$subclass(peg$SyntaxError, Error);

function peg$padEnd(str, targetLength, padString) {
  padString = padString || " ";
  if (str.length > targetLength) { return str; }
  targetLength -= str.length;
  padString += padString.repeat(targetLength);
  return str + padString.slice(0, targetLength);
}

peg$SyntaxError.prototype.format = function(sources) {
  var str = "Error: " + this.message;
  if (this.location) {
    var src = null;
    var k;
    for (k = 0; k < sources.length; k++) {
      if (sources[k].source === this.location.source) {
        src = sources[k].text.split(/\r\n|\n|\r/g);
        break;
      }
    }
    var s = this.location.start;
    var loc = this.location.source + ":" + s.line + ":" + s.column;
    if (src) {
      var e = this.location.end;
      var filler = peg$padEnd("", s.line.toString().length, ' ');
      var line = src[s.line - 1];
      var last = s.line === e.line ? e.column : line.length + 1;
      var hatLen = (last - s.column) || 1;
      str += "\n --> " + loc + "\n"
          + filler + " |\n"
          + s.line + " | " + line + "\n"
          + filler + " | " + peg$padEnd("", s.column - 1, ' ')
          + peg$padEnd("", hatLen, "^");
    } else {
      str += "\n at " + loc;
    }
  }
  return str;
};

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part)
          ? classEscape(part[0]) + "-" + classEscape(part[1])
          : classEscape(part);
      });

      return "[" + (expectation.inverted ? "^" : "") + escapedParts.join("") + "]";
    },

    any: function() {
      return "any character";
    },

    end: function() {
      return "end of input";
    },

    other: function(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g,  "\\\"")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g,  "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};

  var peg$FAILED = {};
  var peg$source = options.grammarSource;

  var peg$startRuleFunctions = { tag: peg$parsetag };
  var peg$startRuleFunction = peg$parsetag;

  var peg$c0 = "<";
  var peg$c1 = ">";
  var peg$c2 = "</";
  var peg$c3 = "\"";
  var peg$c4 = "'";
  var peg$c5 = "=";
  var peg$c6 = "\n";
  var peg$c7 = "\r\n";
  var peg$c8 = "\r";
  var peg$c9 = "\u2028";
  var peg$c10 = "\u2029";

  var peg$r0 = /^[^"]/;
  var peg$r1 = /^[^']/;
  var peg$r2 = /^[^"'<>` ]/;
  var peg$r3 = /^[a-zA-Z]/;
  var peg$r4 = /^[a-zA-Z\-]/;
  var peg$r5 = /^[\t\v\f \xA0\uFEFF]/;

  var peg$e0 = peg$otherExpectation("tag");
  var peg$e1 = peg$otherExpectation("startTag");
  var peg$e2 = peg$literalExpectation("<", false);
  var peg$e3 = peg$literalExpectation(">", false);
  var peg$e4 = peg$otherExpectation("endTag");
  var peg$e5 = peg$literalExpectation("</", false);
  var peg$e6 = peg$otherExpectation("element");
  var peg$e7 = peg$otherExpectation("text");
  var peg$e8 = peg$anyExpectation();
  var peg$e9 = peg$otherExpectation("string");
  var peg$e10 = peg$literalExpectation("\"", false);
  var peg$e11 = peg$classExpectation(["\""], true, false);
  var peg$e12 = peg$literalExpectation("'", false);
  var peg$e13 = peg$classExpectation(["'"], true, false);
  var peg$e14 = peg$classExpectation(["\"", "'", "<", ">", "`", " "], true, false);
  var peg$e15 = peg$otherExpectation("attributes");
  var peg$e16 = peg$literalExpectation("=", false);
  var peg$e17 = peg$otherExpectation("symbol");
  var peg$e18 = peg$classExpectation([["a", "z"], ["A", "Z"]], false, false);
  var peg$e19 = peg$classExpectation([["a", "z"], ["A", "Z"], "-"], false, false);
  var peg$e20 = peg$literalExpectation("\n", false);
  var peg$e21 = peg$literalExpectation("\r\n", false);
  var peg$e22 = peg$literalExpectation("\r", false);
  var peg$e23 = peg$literalExpectation("\u2028", false);
  var peg$e24 = peg$literalExpectation("\u2029", false);
  var peg$e25 = peg$classExpectation(["\t", "\v", "\f", " ", "\xA0", "\uFEFF"], false, false);

  var peg$f0 = function(h, content, t) {
    if (h.value === t.value) {
      return {
        type: "tag",
        value: content,
        attrs: h.attrs,
      }
    } else {
      return error("start tag does not match end tag")
    }
  };
  var peg$f1 = function(name, attrs) {
    return {type: 'startTag', value: name, attrs};
  };
  var peg$f2 = function(name) {
    return {type: 'endTag', value: name};
  };
  var peg$f3 = function(c) {return c};
  var peg$f4 = function(ch) {
    return {
      type: "text",
      value: ch.join("")
    }
  };
  var peg$f5 = function(ch) { return ch.join(''); };
  var peg$f6 = function(ch) { return ch.join(''); };
  var peg$f7 = function(ch) { return ch.join(''); };
  var peg$f8 = function(key, val) { return val; };
  var peg$f9 = function(key, val) { return {key,val}; };
  var peg$f10 = function(s) {
    return s;
  };
  var peg$f11 = function(h, t) {
    return [h].concat(t).join("");
  };
  var peg$f12 = function() {
    return {type: 'ws'}
  };
  var peg$f13 = function() {
    return {type: 'eol'}
  };
  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$maxFailPos = 0;
  var peg$maxFailExpected = [];
  var peg$silentFails = 0;

  var peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return {
      source: peg$source,
      start: peg$savedPos,
      end: peg$currPos
    };
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;

      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos);
    var endPosDetails = peg$computePosDetails(endPos);

    return {
      source: peg$source,
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parsetag() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsews();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsews();
    }
    s2 = peg$parsestartTag();
    if (s2 !== peg$FAILED) {
      s3 = [];
      s4 = peg$parsews();
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parsews();
      }
      s4 = [];
      s5 = peg$parseelement();
      while (s5 !== peg$FAILED) {
        s4.push(s5);
        s5 = peg$parseelement();
      }
      s5 = [];
      s6 = peg$parsews();
      while (s6 !== peg$FAILED) {
        s5.push(s6);
        s6 = peg$parsews();
      }
      s6 = peg$parseendTag();
      if (s6 !== peg$FAILED) {
        s7 = [];
        s8 = peg$parsews();
        while (s8 !== peg$FAILED) {
          s7.push(s8);
          s8 = peg$parsews();
        }
        peg$savedPos = s0;
        s0 = peg$f0(s2, s4, s6);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e0); }
    }

    return s0;
  }

  function peg$parsestartTag() {
    var s0, s1, s2, s3, s4;

    peg$silentFails++;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 60) {
      s1 = peg$c0;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e2); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsesymbol();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseattributes();
        if (input.charCodeAt(peg$currPos) === 62) {
          s4 = peg$c1;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e3); }
        }
        if (s4 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f1(s2, s3);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e1); }
    }

    return s0;
  }

  function peg$parseendTag() {
    var s0, s1, s2, s3;

    peg$silentFails++;
    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c2) {
      s1 = peg$c2;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e5); }
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsesymbol();
      if (s2 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 62) {
          s3 = peg$c1;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e3); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f2(s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e4); }
    }

    return s0;
  }

  function peg$parseelement() {
    var s0, s1;

    peg$silentFails++;
    s0 = peg$parsetext();
    if (s0 === peg$FAILED) {
      s0 = peg$parsetag();
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e6); }
    }

    return s0;
  }

  function peg$parsetext() {
    var s0, s1, s2, s3, s4, s5;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$currPos;
    s3 = peg$currPos;
    peg$silentFails++;
    s4 = peg$parseendTag();
    peg$silentFails--;
    if (s4 === peg$FAILED) {
      s3 = undefined;
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    if (s3 !== peg$FAILED) {
      s4 = peg$currPos;
      peg$silentFails++;
      s5 = peg$parsestartTag();
      peg$silentFails--;
      if (s5 === peg$FAILED) {
        s4 = undefined;
      } else {
        peg$currPos = s4;
        s4 = peg$FAILED;
      }
      if (s4 !== peg$FAILED) {
        if (input.length > peg$currPos) {
          s5 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s5 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e8); }
        }
        if (s5 !== peg$FAILED) {
          peg$savedPos = s2;
          s2 = peg$f3(s5);
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      } else {
        peg$currPos = s2;
        s2 = peg$FAILED;
      }
    } else {
      peg$currPos = s2;
      s2 = peg$FAILED;
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$currPos;
        s3 = peg$currPos;
        peg$silentFails++;
        s4 = peg$parseendTag();
        peg$silentFails--;
        if (s4 === peg$FAILED) {
          s3 = undefined;
        } else {
          peg$currPos = s3;
          s3 = peg$FAILED;
        }
        if (s3 !== peg$FAILED) {
          s4 = peg$currPos;
          peg$silentFails++;
          s5 = peg$parsestartTag();
          peg$silentFails--;
          if (s5 === peg$FAILED) {
            s4 = undefined;
          } else {
            peg$currPos = s4;
            s4 = peg$FAILED;
          }
          if (s4 !== peg$FAILED) {
            if (input.length > peg$currPos) {
              s5 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e8); }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s2;
              s2 = peg$f3(s5);
            } else {
              peg$currPos = s2;
              s2 = peg$FAILED;
            }
          } else {
            peg$currPos = s2;
            s2 = peg$FAILED;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$FAILED;
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f4(s1);
    }
    s0 = s1;
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e7); }
    }

    return s0;
  }

  function peg$parsestring() {
    var s0, s1, s2, s3;

    peg$silentFails++;
    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 34) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e10); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      if (peg$r0.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e11); }
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        if (peg$r0.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e11); }
        }
      }
      if (input.charCodeAt(peg$currPos) === 34) {
        s3 = peg$c3;
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e10); }
      }
      if (s3 !== peg$FAILED) {
        peg$savedPos = s0;
        s0 = peg$f5(s2);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 39) {
        s1 = peg$c4;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e12); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        if (peg$r1.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e13); }
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          if (peg$r1.test(input.charAt(peg$currPos))) {
            s3 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e13); }
          }
        }
        if (input.charCodeAt(peg$currPos) === 39) {
          s3 = peg$c4;
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e12); }
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s0 = peg$f6(s2);
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        if (peg$r2.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e14); }
        }
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            if (peg$r2.test(input.charAt(peg$currPos))) {
              s2 = input.charAt(peg$currPos);
              peg$currPos++;
            } else {
              s2 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e14); }
            }
          }
        } else {
          s1 = peg$FAILED;
        }
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$f7(s1);
        }
        s0 = s1;
      }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e9); }
    }

    return s0;
  }

  function peg$parseattributes() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsews();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsews();
    }
    s2 = [];
    s3 = peg$currPos;
    s4 = peg$parsesymbol();
    if (s4 !== peg$FAILED) {
      s5 = [];
      s6 = peg$parsews();
      while (s6 !== peg$FAILED) {
        s5.push(s6);
        s6 = peg$parsews();
      }
      s6 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 61) {
        s7 = peg$c5;
        peg$currPos++;
      } else {
        s7 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e16); }
      }
      if (s7 !== peg$FAILED) {
        s8 = [];
        s9 = peg$parsews();
        while (s9 !== peg$FAILED) {
          s8.push(s9);
          s9 = peg$parsews();
        }
        s9 = peg$parsestring();
        if (s9 !== peg$FAILED) {
          peg$savedPos = s6;
          s6 = peg$f8(s4, s9);
        } else {
          peg$currPos = s6;
          s6 = peg$FAILED;
        }
      } else {
        peg$currPos = s6;
        s6 = peg$FAILED;
      }
      if (s6 === peg$FAILED) {
        s6 = null;
      }
      peg$savedPos = s3;
      s3 = peg$f9(s4, s6);
    } else {
      peg$currPos = s3;
      s3 = peg$FAILED;
    }
    while (s3 !== peg$FAILED) {
      s2.push(s3);
      s3 = peg$currPos;
      s4 = peg$parsesymbol();
      if (s4 !== peg$FAILED) {
        s5 = [];
        s6 = peg$parsews();
        while (s6 !== peg$FAILED) {
          s5.push(s6);
          s6 = peg$parsews();
        }
        s6 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 61) {
          s7 = peg$c5;
          peg$currPos++;
        } else {
          s7 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e16); }
        }
        if (s7 !== peg$FAILED) {
          s8 = [];
          s9 = peg$parsews();
          while (s9 !== peg$FAILED) {
            s8.push(s9);
            s9 = peg$parsews();
          }
          s9 = peg$parsestring();
          if (s9 !== peg$FAILED) {
            peg$savedPos = s6;
            s6 = peg$f8(s4, s9);
          } else {
            peg$currPos = s6;
            s6 = peg$FAILED;
          }
        } else {
          peg$currPos = s6;
          s6 = peg$FAILED;
        }
        if (s6 === peg$FAILED) {
          s6 = null;
        }
        peg$savedPos = s3;
        s3 = peg$f9(s4, s6);
      } else {
        peg$currPos = s3;
        s3 = peg$FAILED;
      }
    }
    s3 = [];
    s4 = peg$parsews();
    while (s4 !== peg$FAILED) {
      s3.push(s4);
      s4 = peg$parsews();
    }
    peg$savedPos = s0;
    s0 = peg$f10(s2);
    peg$silentFails--;
    s1 = peg$FAILED;
    if (peg$silentFails === 0) { peg$fail(peg$e15); }

    return s0;
  }

  function peg$parsesymbol() {
    var s0, s1, s2, s3;

    peg$silentFails++;
    s0 = peg$currPos;
    if (peg$r3.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e18); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      if (peg$r4.test(input.charAt(peg$currPos))) {
        s3 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s3 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e19); }
      }
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        if (peg$r4.test(input.charAt(peg$currPos))) {
          s3 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s3 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e19); }
        }
      }
      peg$savedPos = s0;
      s0 = peg$f11(s1, s2);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e17); }
    }

    return s0;
  }

  function peg$parseeol() {
    var s0;

    if (input.charCodeAt(peg$currPos) === 10) {
      s0 = peg$c6;
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e20); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 2) === peg$c7) {
        s0 = peg$c7;
        peg$currPos += 2;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e21); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 13) {
          s0 = peg$c8;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e22); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 8232) {
            s0 = peg$c9;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$e23); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 8233) {
              s0 = peg$c10;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$e24); }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsews() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$r5.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e25); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f12();
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseeol();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$f13();
      }
      s0 = s1;
    }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};
