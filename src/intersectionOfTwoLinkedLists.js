var getIntersectionNode = function (headA, headB) {
  var arr = []
  while (headA) {
    arr.push(headA)
    headA = headA.next
  }
  while (headB && !arr.includes(headB)) {
    headB = headB.next
  }
  return headB
}

let getIntersectionNode2 = function (headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let r1 = headA
  let r2 = headB
  while (r1 !== r2) {
    r1 = r1.next
    r2 = r2.next
    if (r1 === r2) {
      return r1
    }
    if (r1 === null) {
      r1 = headB
    }
    if (r2 === null) {
      r2 = headA
    }
  }
  return r1
}

export default getIntersectionNode2
