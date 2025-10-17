var debugLogger = {};

debugLogger.appname = "DEBUG_LOGGER";
debugLogger.reqOrder = 1;
debugLogger.respOrder = 1;

debugLogger.reqMatch = async function(fObj) {
  const url = fObj.getMetadata().url;
  console.log('[DebugLogger][reqMatch] Inspecting request', url);
  return true;
};

debugLogger.reqAction = async function(fObj) {
  console.log('[DebugLogger][reqAction] Decision before', fObj.getDecision());
  return fObj;
};

debugLogger.respMatch = async function(fObj) {
  const url = fObj.getMetadata().url;
  console.log('[DebugLogger][respMatch] Inspecting response', url);
  return true;
};

debugLogger.respAction = async function(fObj) {
  console.log('[DebugLogger][respAction] Decision before', fObj.getDecision());
  return fObj;
};

console.log('[DebugLogger] App activated');
swappInst.addApp(debugLogger);
