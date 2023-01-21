window.onpageshow = function (e) {
  if (e.persisted) {
    window.location.reload();
  }
};

function checkFeat(funcString, featName) {
  try {
    var func = eval("self." + funcString);
    -1 !== func.toString().indexOf("[native code]")
      ? (featureStatus[featName] = Status.NATIVE)
      : (featureStatus[featName] = Status.CHANGED);
  } catch (e) {
    featureStatus[featName] = Status.UNAVAIL;
  }
}
