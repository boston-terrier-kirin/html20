//                          i
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) 7
//                            j

//                          i
// countUniqueValues([1,2,3,4,4,7,7,12,12,13]) 7
//                            j

//                          i
// countUniqueValues([1,2,3,4,7,7,12,12,13]) 7
//                            j

//                            i
// countUniqueValues([1,2,3,4,7,7,12,12,13]) 7
//                              j

//                            i
// countUniqueValues([1,2,3,4,7,12,12,13]) 7
//                               j

//                               i
// countUniqueValues([1,2,3,4,7,12,12,13]) 7
//                                  j

//                               i
// countUniqueValues([1,2,3,4,7,12,13]) 7
//                                  j

function countUniqueValues(values) {
  console.log(values);

  let p1 = 0;
  let p2 = 1;

  let loopCnt = 0;
  while (p2 < values.length) {
    if (values[p1] !== values[p2]) {
      p1++;
      p2++;
    } else {
      values.splice(p1, 1);
      console.log(values);
    }

    loopCnt++;
  }

  console.log(loopCnt);

  return values.length;
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
